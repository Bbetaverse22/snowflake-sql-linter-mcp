# {{project-title}}

This repository hosts a Model Context Protocol (MCP) server that lint-checks Snowflake SQL. It wraps [sqlfluff](https://sqlfluff.com/) and exposes two tools—one for inline queries and one for files—so editors and AI agents can request structured lint results or run them as part of automated workflows.

## {{project-title}}
- Runs completely locally; no network calls or Snowflake connection required.
- Honors project-level sqlfluff configuration (dialect, rules, excludes, etc.).
- Provides structured responses (`LintResult`) with rule codes, positions, and fix metadata.
- Works with MCP-aware clients (Cursor, Claude Code, VS Code extensions, MCP Inspector, etc.).

## {{project-title}}
- `agent.py` – FastMCP server definition and linting tools.
- `requirements.txt` – Python dependencies (`mcp`, `sqlfluff`).
- `.sqlfluff` – Example config setting the Snowflake dialect.
- `queries/` – Placeholder folder for SQL samples (`my_query.sql`).

## {{project-title}}
- Python 3.10+ (same interpreter as your MCP client environment).
- `pip` for installing requirements.
- Optional: Node.js (only if you want to use the MCP Inspector UI via `npx`).

## {{project-title}}
```bash
python3 -m pip install -r requirements.txt
```

## {{project-title}}
### {{project-title}}
```bash
npx @modelcontextprotocol/inspector python3 agent.py --transport stdio
```
Open the printed URL, add a server with command `python3` and args `agent.py --transport stdio`, then call the tools from the Inspector UI.

### {{project-title}}
```bash
mcp --stdio "python3 agent.py --transport stdio"
```
List tools and invoke them interactively from the terminal.

## {{project-title}}
Add an entry to your MCP configuration (Cursor, Claude Code, VS Code, etc.):

```json
{
  "mcpServers": {
    "snowflake-sql-linter": {
      "command": "python3",
      "args": [
        "/absolute/path/to/agent.py",
        "--transport",
        "stdio"
      ],
      "cwd": "/absolute/path/to/repo"
    }
  }
}
```

Restart the client after editing the config. Tools will appear under the name `snowflake-sql-linter`.

## {{project-title}}
| Tool | Description | Arguments |
| --- | --- | --- |
| `lint_snowflake_query` | Lint an inline SQL string. | `query` (string) |
| `lint_snowflake_file` | Lint a `.sql` file inside the repo. | `path` (string, relative or absolute) |

Both return a `LintResult` with:
- `status`: `pass`, `fail`, or `error`.
- `summary`: one-line message for logs.
- `issues`: list of rule violations (`rule`, `line`, `column`, `description`, `fixable`, `fixes`).

`lint_snowflake_file` enforces that the file lies within the repository and has a `.sql` extension.

## {{project-title}}
- Extend `.sqlfluff` to enforce additional rules or configure ignore patterns.
- Wrap the MCP tools in higher-level workflows (e.g., auto-refactor or report generation) using MCP clients or task runners.

## {{project-title}}
1. Create a virtual environment (`python3 -m venv .venv && source .venv/bin/activate`).
2. Install dependencies (`pip install -r requirements.txt`).
3. Run `python3 agent.py --transport stdio` with your preferred client to verify changes.
4. Open pull requests against `main`.

## {{project-title}}
MIT (see the upstream reference repositories for inspiration). MD
