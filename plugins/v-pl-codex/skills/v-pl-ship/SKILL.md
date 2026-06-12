---
name: v-pl-ship
description: Use before publishing, committing, pushing, or opening a PR for any V_PL code, concept, or agent-infrastructure change.
---

# V_PL Ship

## Workflow

1. Inspect `git status --short --branch`.
2. Confirm the change scope is only the intended task.
3. Apply `v-pl-quality-gate`.
4. Run:

```bash
npm run codex:ship
```

5. Check for secrets, private RTSP URLs, private video, or large generated
   artifacts before staging.
6. Commit on a `codex/*` branch, push to GitHub, and open a draft PR when the
   user asks to publish.

If canonical skills or `.codex/agents/*.toml` contracts changed, run
`npm run sync:harness` first.

