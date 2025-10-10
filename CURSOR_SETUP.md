# Setting Up Snowflake SQL Linter with Cursor/VSCode

This guide will help you integrate the Snowflake SQL Linter MCP server into your editor.

---

## For Cursor (Recommended)

### Step 1: Locate Your MCP Config File

Cursor stores MCP server configurations in one of these locations:

**macOS:**
```bash
~/Library/Application Support/Cursor/User/globalStorage/rooveterinaryinc.roo-cline/settings/cline_mcp_settings.json
```

Or the newer location:
```bash
~/.config/cursor/mcp_settings.json
```

**Windows:**
```
%APPDATA%\Cursor\User\globalStorage\rooveterinaryinc.roo-cline\settings\cline_mcp_settings.json
```

**Linux:**
```bash
~/.config/Cursor/User/globalStorage/rooveterinaryinc.roo-cline/settings/cline_mcp_settings.json
```

### Step 2: Edit the Config File

Open the config file and add this server configuration:

```json
{
  "mcpServers": {
    "snowflake-sql-linter": {
      "command": "python3",
      "args": [
        "{{path}}/agent.py",
        "--transport",
        "stdio"
      ],
      "env": {}
    }
  }
}
```

**Important:** Update the path in `args` to match your actual project location!

### Step 3: Restart Cursor

1. Quit Cursor completely (Cmd+Q on macOS)
2. Reopen Cursor
3. Open a new chat with the AI

### Step 4: Test It!

In Cursor's chat, try:

```
"Lint this SQL query: SELECT id,name FROM users WHERE active=true"
```

The AI should use the `lint_snowflake_query` tool and return structured results!

---

## For VSCode with Claude Dev / Cline

### Step 1: Install MCP-Compatible Extension

You need an extension that supports MCP:
- **Claude Dev** (recommended)
- **Cline** (formerly Claude Dev)
- Or any other MCP-compatible extension

### Step 2: Find Extension's Config

Different extensions store configs in different places:

**For Cline/Claude Dev:**
```bash
# macOS/Linux
~/.cline/mcp_settings.json

# Or check in VSCode settings
code --user-data-dir
```

**For other MCP extensions:**
Check the extension's documentation for config location.

### Step 3: Add Server Config

Create or edit the MCP settings file:

```json
{
  "mcpServers": {
    "snowflake-sql-linter": {
      "command": "python3",
      "args": [
        "{{path}}/agent.py",
        "--transport",
        "stdio"
      ],
      "env": {},
      "disabled": false
    }
  }
}
```

### Step 4: Restart VSCode

1. Reload window: `Cmd+Shift+P` → "Developer: Reload Window"
2. Or restart VSCode completely

### Step 5: Test It!

Ask the AI to lint a SQL query and verify it uses your tool.

---

## Alternative: Using VSCode's Built-in Settings

Some newer MCP extensions use VSCode's settings.json:

1. Open Command Palette: `Cmd+Shift+P` (macOS) or `Ctrl+Shift+P` (Windows/Linux)
2. Type: "Preferences: Open User Settings (JSON)"
3. Add this section:

```json
{
  "mcp.servers": {
    "snowflake-sql-linter": {
      "command": "python3",
      "args": [
        "{{path}}/agent.py",
        "--transport",
        "stdio"
      ]
    }
  }
}
```

---

## Verification

### Check if the Server is Running

After setup, you should see in your AI chat logs:
- Server connection established
- Available tools listed (including `lint_snowflake_query` and `lint_snowflake_file`)

### Test Commands

Try these with your AI assistant:

1. **Basic inline query:**
   ```
   "Lint this SQL: SELECT * FROM users WHERE id > 100"
   ```

2. **File linting:**
   ```
   "Check queries/my_query.sql for linting issues"
   ```

3. **Config changes (test dynamic reload):**
   - Edit `.sqlfluff` in your project
   - Ask AI to lint the same query again
   - Changes should apply immediately!

---

## Troubleshooting

### Issue: "Server not found" or "Connection failed"

**Solution 1:** Check Python path
```bash
which python3
# Use the full path in the config
```

**Solution 2:** Use absolute paths everywhere
```json
{
  "command": "/usr/local/bin/python3",
  "args": ["{{path}}/agent.py"]
}
```

### Issue: "Module not found" errors

The server can't find dependencies. Install them:

```bash
cd {{path}}
pip install -r requirements.txt
```

Or use a virtual environment:

```json
{
  "command": "{{path}}/.venv/bin/python",
  "args": ["{{path}}/agent.py"]
}
```

### Issue: Server starts but tools don't appear

1. Check server logs (usually in editor's output panel)
2. Verify `agent.py` runs standalone:
   ```bash
   python3 agent.py --transport stdio
   # Should start without errors
   # Press Ctrl+C to exit
   ```

### Issue: Config changes not picked up

1. Completely quit and restart your editor (don't just reload)
2. Check the config file is in the right location
3. Verify JSON syntax is valid (no trailing commas, quotes matched)

---

## Pro Tips

### 1. Add Project-Specific Config

You can also add a workspace-specific MCP config in `.vscode/settings.json`:

```json
{
  "mcp.servers": {
    "snowflake-sql-linter": {
      "command": "python3",
      "args": ["${workspaceFolder}/agent.py", "--transport", "stdio"],
      "cwd": "${workspaceFolder}"
    }
  }
}
```

This way, the server automatically uses the project's directory.

### 2. View Server Logs

Most MCP-enabled extensions show server logs in the Output panel:
- Open Output panel: `Cmd+Shift+U` (macOS) or `Ctrl+Shift+U` (Windows/Linux)
- Select your MCP server from the dropdown

### 3. Disable/Enable Dynamically

You can temporarily disable the server without removing the config:

```json
{
  "snowflake-sql-linter": {
    "disabled": true,
    "command": "python3",
    ...
  }
}
```

---

## What You'll Get

Once configured, your AI assistant will:

✅ Automatically lint SQL queries when you ask  
✅ Provide structured results with rule codes and line numbers  
✅ Tell you which issues are auto-fixable  
✅ Pick up configuration changes without server restarts  
✅ Work with both inline queries and SQL files in your project  

---

## Example Interaction

**You:** "Can you check this SQL for issues: SELECT id,name FROM users"

**AI:** "I'll lint that SQL query for you using the Snowflake SQL Linter."

*[Calls lint_snowflake_query tool]*

**AI Response:**
```
Found 4 linting issues:

1. [LT01] Line 1, Column 11: Expected single whitespace between comma ',' and naked identifier
   - Fixable: Yes

2. [LT09] Line 1, Column 1: Select targets should be on a new line unless there is only one select target
   - Fixable: Yes

3. [LT12] Line 1, Column 1: Files must end with a single trailing newline
   - Fixable: Yes

Here's the corrected version:
SELECT
    id,
    name
FROM users
```

Perfect for maintaining SQL code quality!

