# Agent Orchestration

Use orchestration when a task is broad enough that independent checks can run in
parallel. Simple work stays local.

## Standard Audit Pack

- `video_domain_architect`: RTSP, archive, frame, label, product/time contract.
- `frontend_concept_reviewer`: operator UI, responsive layout, interaction
  completeness, visual QA.
- `geo_video_quality_reviewer`: map, route, telemetry, orthophoto, GeoServer,
  geolocation, analytics review.
- `instruction_drift_auditor`: AGENTS, skills, hooks, docs, and Claude mirror
  drift.
- `verification_reviewer`: final verification and risk summary.

## Parallel Decomposition Matrix

Use this compact matrix before substantial work:

| Field | Purpose |
| --- | --- |
| stream | Short stream id or name. |
| goal | Finished outcome for that stream. |
| agent | Local, built-in subagent, or custom `.codex/agents` role. |
| write zone | Files or modules owned by the stream. |
| dependencies | Upstream streams or ordering limits. |
| verification | Targeted command, screenshot, or review. |
| decision | parallel, sequential, or local. |
| reason | Concrete reason for that decision. |

Parallel streams need disjoint write zones, no blocking dependency chain, and a
verification loop that can be reviewed independently.

