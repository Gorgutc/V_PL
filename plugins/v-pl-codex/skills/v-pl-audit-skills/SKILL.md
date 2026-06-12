---
name: v-pl-audit-skills
description: Use to audit V_PL instructions, skills, hooks, agents, docs, and Claude mirrors for drift against AGENTS.md and verify-frozen.js.
---

# V_PL Audit Skills

Audit skills for drift; do not automatically rewrite methodology files unless
the user explicitly asks.

## Workflow

1. Run `npm run codex:ship` if practical; otherwise note why it was skipped.
2. Review `plugins/v-pl-codex/skills/**/*.md`, `.agents/skills/**/*.md`,
   `AGENTS.md`, `CLAUDE.md`, `.codex/**`, and `docs/agent/*.md`.
3. Skip `.claude/**` as generated output; run `npm run check:parity` instead.
4. Compare required claims against `verify-frozen.js` and the real repository.
5. Produce findings as DRIFT, UNVERIFIED, OBSOLETE, and CONFLICT.

