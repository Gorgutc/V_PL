---
name: v-pl-rules
description: Use when working in Gorgutc/V_PL, especially before editing agent infrastructure, docs, concepts, frontend prototypes, verification logic, or video-platform requirements.
---

# V_PL Rules

## Source Of Truth

Authoritative order for this repository:

1. Explicit user request in the current chat.
2. `verify-frozen.js` and its current passing baseline.
3. `AGENTS.md`.
4. Repo-local skills in `plugins/v-pl-codex/skills/`.
5. Docs under `docs/agent/`.
6. Supplemental skills in `.agents/skills/`.
7. Generated Claude mirror in `.claude/`.

Generated Claude files are mirrors, not source material.

## Current Baseline

`npm run verify` is the project gate. It must exit cleanly and report `0 FAIL`.

## Mandatory Workflow

For any change touching a UI concept, verification logic, repo instructions,
skills, hooks, or agent contracts:

1. Read the relevant parts of `AGENTS.md`.
2. Use focused code search before editing.
3. Keep real video, private telemetry, credentials, and secret RTSP URLs out of
   the repository.
4. Use mock data for local concepts unless the user explicitly supplies approved
   material.
5. Run `npm run codex:ship` before committing or pushing.

