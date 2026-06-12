---
name: v-pl-context-keeper
description: Use when a V_PL task needs a narrow, read-only slice of current repository state before editing.
---

# V_PL Context Keeper

Return focused current-state context, not whole files.

## Workflow

1. Identify the exact files and topic.
2. Search with `rg` first.
3. Read only the relevant ranges.
4. Cross-check `verify-frozen.js` for related frozen checks.
5. Report file, line range, whether the behavior is guarded, and the directly
   relevant snippet.

Do not make recommendations unless asked; this skill is for context gathering.

