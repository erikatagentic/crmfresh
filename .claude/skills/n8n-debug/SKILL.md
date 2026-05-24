# n8n Autonomous Workflow Debugger

Autonomously debug and fix n8n workflows without human intervention. Fetches executions, diagnoses errors, applies fixes, validates, and iterates until the workflow succeeds.

## Usage
```
/n8n-debug [WORKFLOW_ID]
```

## Autonomous Debugging Protocol

### Step 1: Fetch & Snapshot
- GET the full workflow definition via `n8n_get_workflow`
- Save the complete current state as a snapshot (store in memory for rollback)
- Note all node names, types, connections, and credentials

### Step 2: Analyze Executions
- Fetch the last 5 executions via `n8n_executions` filtered by workflow ID
- Identify any failures: extract the failing node name, error message, and error type
- If no recent failures exist, report "No failures found" and stop

### Step 3: Root Cause Analysis
For each failure:
- Identify the exact failing node and the error message
- Trace data flow from trigger through each node to the failure point
- Check for common causes:
  - Missing or incorrect field references (`$json.field` vs `$('Node').item.json.field`)
  - Broken connections (`"type": "0"` instead of `"type": "main"`)
  - Missing credentials or wrong credential references
  - Incorrect typeVersions (check against CLAUDE.md verified versions table)
  - Airtable field mapping errors (`$json['Field']` vs `$json.fields['Field']`)
  - Slack node misconfiguration (missing `includeLinkToWorkflow: false`, wrong operation casing)

### Step 4: Generate & Apply Fix
- BEFORE updating: confirm the snapshot is saved
- NEVER remove existing node parameters — only add or modify specific fields that need fixing
- Include ALL existing parameters for any node being modified (prevents accidental resets)
- Validate connection formats use `"type": "main"` before deploying
- Apply fix via `n8n_update_partial_workflow`

### Step 5: Post-Update Verification
- GET the workflow again immediately after update
- Compare before/after — confirm nothing was accidentally removed
- If parameters were lost, rollback using the snapshot and re-apply more carefully

### Step 6: Test Execution
- If the workflow has a webhook trigger: note the webhook URL for manual testing
- If the workflow has a schedule/cron trigger: use `n8n_test_workflow` to trigger a test run
- Wait 10 seconds, then fetch the latest execution result

### Step 7: Iterate (Max 5 Attempts)
- If the test still fails, analyze the NEW error (it may be different from the original)
- Do NOT retry the same fix — reassess the root cause
- Consider: race conditions, connection ordering, state management, upstream data issues
- Repeat Steps 4-6 with the new fix
- After 5 failed attempts: STOP, rollback to original snapshot, and report findings

### Step 8: Final Report
Provide a structured report:
```
DEBUGGING REPORT
================
Workflow: [name] (ID: [id])
Status: FIXED / PARTIALLY FIXED / UNABLE TO FIX

Original Error(s):
- [Node name]: [error message]

Root Cause:
- [explanation]

Fix Applied:
- [what was changed and why]

Iterations: [N] attempts
- Attempt 1: [what was tried] → [result]
- Attempt 2: [what was tried] → [result]

Verification:
- Post-update diff: [clean / issues found]
- Test execution: [passed / failed]

Remaining Concerns:
- [any warnings or things to watch]
```

## Safety Rules
1. ALWAYS snapshot before any changes
2. NEVER remove existing parameters — only add/modify
3. NEVER change credentials unless explicitly broken
4. Rollback if 5 attempts fail — don't make things worse
5. Report honestly — if you can't fix it, say so with your analysis
