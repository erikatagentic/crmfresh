# n8n Workflow Update Skill

## Read → Change → Read → Verify Protocol

1. **PRE-READ**: GET the full current workflow using n8n_get_workflow. Show the user the current state of all nodes that will be modified.
2. **AUDIT**: Identify ALL nodes and connections that need changes. Ask yourself: "Is that everything?" List every field being changed.
3. **PROPOSE**: Present a complete summary of proposed changes to the user. Include before/after for each modified node.
4. **WAIT**: Wait for explicit user confirmation before proceeding.
5. **UPDATE**: When calling n8n_update_partial_workflow, include ALL existing parameters for any node being modified (not just changed fields). This prevents accidental parameter resets.
6. **POST-READ**: Immediately GET the workflow again after update.
7. **DIFF**: Compare before/after and confirm nothing was accidentally removed or changed. Show the diff to the user. Pay special attention to:
   - Slack node operations and otherOptions
   - HTTP Request node parameters
   - Connection formats (must use "type": "main")
   - Credential references
8. **REPORT**: Report final validation results. If anything was accidentally removed, fix it immediately.
