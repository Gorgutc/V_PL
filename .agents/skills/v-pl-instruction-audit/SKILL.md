---
name: v-pl-instruction-audit
description: Use for V_PL instruction, skill, hook, agent, runbook, AGENTS.md, .codex, .agents/skills, and .claude drift audits or rewrites.
---

# V_PL Instruction Audit

## Workflow

1. Compare current docs against live files and `verify-frozen.js`.
2. Classify each issue as KEEP, REWRITE, ARCHIVE, or USER DECISION.
3. Prefer `AGENTS.md` plus short docs and skills over copying long legacy files.
4. Never hard-code historical verification counts; require `0 FAIL`.
5. Treat `.claude/skills/**` and `.claude/agents/**` as generated mirrors.

