# Skill Map

Canonical plugin skills live in `plugins/v-pl-codex/skills`.
Supplemental lightweight skills live in `.agents/skills`.
Both sets are mirrored into `.claude/skills/` by `npm run sync:harness`.

## Primary Plugin Skills

- `v-pl-rules`: repository rules and bootstrap context.
- `v-pl-video-domain`: RTSP, storage, product/time binding, frame/label records,
  playback, search, and download.
- `v-pl-frontend-concept`: local HTML/CSS/JS concept work.
- `v-pl-map-telemetry`: synchronized map, route, telemetry, and video review.
- `v-pl-video-analytics`: orthophoto, GeoServer, Metashape, geolocation,
  change analysis, and real-time annotations.
- `v-pl-context-keeper`: narrow read-only context gathering.
- `v-pl-quality-gate`: final review of concept, domain, and instruction work.
- `v-pl-audit-skills`: drift audit for skills and docs.
- `v-pl-ship`: pre-publish workflow.

## Adding Or Editing A Skill

1. Edit the canonical skill in `plugins/v-pl-codex/skills/` or `.agents/skills/`.
2. Run `npm run sync:harness`.
3. Run `npm run codex:ship`.
4. Do not edit `.claude/skills/**` by hand.

