---
name: v-pl-map-telemetry
description: Use for synchronized V_PL video, map, route, telemetry, product trajectory, timeline, and multi-video review workflows.
---

# V_PL Map And Telemetry

Use this skill when video needs to stay synchronized with movement context.

## Contracts

- One shared clock drives video, route playback, telemetry charts, and selected
  event markers.
- Map state should show current product position, route trail, event markers,
  selected frame markers, and optional area filters.
- Synchronous viewing must make master/slave playback state explicit.
- Multi-video review should show time offset, drift, and selected primary clock.
- Telemetry should expose key values at the selected timestamp, not only a
  historical chart.

## Review Questions

- Can the operator jump from a map event to the matching video frame?
- Can the operator save a snapshot at the selected time?
- Can the operator compare selected videos without losing the shared time base?

