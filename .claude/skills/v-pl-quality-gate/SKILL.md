---
name: v-pl-quality-gate
description: Use to review V_PL frontend concepts, domain docs, skills, hooks, and verification changes for correctness before handoff or publishing.
---

# V_PL Quality Gate

Review after the requested scope is satisfied.

## Always Check

- The change matches the requested V_PL workflow.
- No real credentials, private RTSP URLs, private video, or unapproved telemetry
  are committed.
- Product/time binding remains clear for video, frames, labels, route, and
  telemetry.
- UI concepts are operator-first, responsive, and not a marketing page.
- Skill and Claude mirrors stay generated from canonical Codex files.
- `npm run codex:ship` passes before commit or push.

## Output

```text
QUALITY GATE: PASS | FIX REQUIRED

BLOCKER (N):
MAJOR (N):
MINOR (N):
SKILLS APPLIED:
SKIPPED CHECKS:
```

PASS means zero BLOCKER and zero MAJOR.

