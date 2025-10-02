from __future__ import annotations

import argparse
from functools import cache
from pathlib import Path
from typing import Literal

from mcp.server.fastmcp import Context, FastMCP
from pydantic import BaseModel, Field
from sqlfluff.core import Linter
from sqlfluff.core.config import FluffConfig
from sqlfluff.core.errors import SQLBaseError

REPO_ROOT = Path(__file__).resolve().parent
SERVER = FastMCP(
    name="snowflake-sql-linter",
    instructions=(
        "Tools for linting Snowflake SQL queries and files with sqlfluff. "
        "Use `lint_snowflake_query` for ad-hoc SQL and `lint_snowflake_file` for repository files."
    ),
)


class LintIssue(BaseModel):
    rule: str = Field(..., description="SQLFluff rule code or error identifier.")
    line: int = Field(..., ge=1, description="1-based line number where the issue occurs.")
    column: int = Field(..., ge=1, description="1-based column number where the issue occurs.")
    description: str = Field(..., description="Human-readable explanation from SQLFluff.")
    fixable: bool = Field(..., description="Whether SQLFluff can auto-fix the issue.")
    fixes: int = Field(..., ge=0, description="Number of automatic fixes available.")


class LintResult(BaseModel):
    subject: str = Field(..., description="Label for the linted query or file path.")
    status: Literal["pass", "fail", "error"] = Field(..., description="Overall outcome for the lint run.")
    summary: str = Field(..., description="One-line summary of the lint run outcome.")
    issue_count: int = Field(..., ge=0, description="Total number of reported issues.")
    issues: list[LintIssue] = Field(default_factory=list, description="Detailed issues returned by SQLFluff.")


@cache
def _load_config() -> FluffConfig:
    """Load sqlfluff configuration, falling back to Snowflake defaults."""
    try:
        # Use repository configuration when available so local overrides apply.
        return FluffConfig.from_path(str(REPO_ROOT))
    except Exception:
        # Fallback ensures the server still works without a config file.
        return FluffConfig.from_kwargs(dialect="snowflake")


@cache
def _get_linter() -> Linter:
    """Create a cached sqlfluff linter tied to the current configuration."""
    return Linter(config=_load_config())


def _convert_violation(violation: SQLBaseError) -> LintIssue:
    rule = violation.rule_code() if callable(getattr(violation, "rule_code", None)) else "UNKNOWN"
    line = getattr(violation, "line_no", 0) or 1
    column = getattr(violation, "line_pos", 0) or 1
    description = getattr(violation, "description", str(violation))
    fixable = bool(getattr(violation, "fixable", False))
    fixes = len(getattr(violation, "fixes", []) or [])
    return LintIssue(rule=rule, line=line, column=column, description=description, fixable=fixable, fixes=fixes)


def _lint_source(source: str, subject: str) -> LintResult:
    linter = _get_linter()

    try:
        linted = linter.lint_string(source, fname=subject)
        violations = [v for v in linted.get_violations() if not getattr(v, "ignore", False)]
    except Exception as exc:
        message = f"{subject}: sqlfluff failed with {exc.__class__.__name__}: {exc}"
        return LintResult(subject=subject, status="error", summary=message, issue_count=0, issues=[])

    issues = [_convert_violation(v) for v in violations]
    issue_count = len(issues)
    if issue_count == 0:
        summary = f"{subject}: no lint issues found."
        status: Literal["pass", "fail", "error"] = "pass"
    else:
        summary = f"{subject}: {issue_count} lint issue(s) found."
        status = "fail"

    return LintResult(subject=subject, status=status, summary=summary, issue_count=issue_count, issues=issues)


def _resolve_sql_file(raw_path: str) -> Path:
    candidate = Path(raw_path)
    if not candidate.is_absolute():
        candidate = (REPO_ROOT / candidate).resolve()
    else:
        candidate = candidate.resolve()

    try:
        candidate.relative_to(REPO_ROOT)
    except ValueError as exc:  # pragma: no cover - defensive guard
        raise ValueError("File path must reside within the project workspace.") from exc

    if not candidate.exists():
        raise FileNotFoundError(f"File not found: {candidate}")

    if candidate.suffix.lower() != ".sql":
        raise ValueError("Only .sql files can be linted with this tool.")

    return candidate


@SERVER.tool(name="lint_snowflake_query", description="Lint an in-memory Snowflake SQL query using sqlfluff.")
async def lint_snowflake_query(query: str, ctx: Context | None = None) -> LintResult:
    result = _lint_source(query, subject="inline-query")
    if ctx is not None:
        await ctx.info(result.summary)
    return result


@SERVER.tool(name="lint_snowflake_file", description="Lint a Snowflake SQL file from the repository using sqlfluff.")
async def lint_snowflake_file(path: str, ctx: Context | None = None) -> LintResult:
    try:
        sql_file = _resolve_sql_file(path)
    except (FileNotFoundError, ValueError) as exc:
        summary = f"{path}: {exc}"
        result = LintResult(subject=path, status="error", summary=summary, issue_count=0, issues=[])
        if ctx is not None:
            await ctx.error(summary)
        return result

    source = sql_file.read_text(encoding="utf-8")
    relative_label = str(sql_file.relative_to(REPO_ROOT))
    result = _lint_source(source, subject=relative_label)
    if ctx is not None:
        log = ctx.info if result.status == "pass" else ctx.warning
        await log(result.summary)
    return result


def _parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Snowflake SQL MCP server")
    parser.add_argument(
        "--transport",
        choices=("stdio", "sse", "streamable-http"),
        default="stdio",
        help="Transport protocol for the MCP server (default: stdio)",
    )
    parser.add_argument(
        "--http-host",
        default=None,
        help="Override the HTTP host when using streamable-http transport.",
    )
    parser.add_argument(
        "--http-port",
        type=int,
        default=None,
        help="Override the HTTP port when using streamable-http transport.",
    )
    return parser.parse_args()


def main() -> None:
    args = _parse_args()

    if args.http_host is not None:
        SERVER.settings.host = args.http_host
    if args.http_port is not None:
        SERVER.settings.port = args.http_port

    SERVER.run(transport=args.transport)


if __name__ == "__main__":
    main()
