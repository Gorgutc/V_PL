---
name: v-pl-video-domain
description: Use for V_PL RTSP ingest, product/time binding, video storage, selected frame and label retention, playback, download, and search requirements.
---

# V_PL Video Domain

Use this skill for ingest, storage, archive, and playback requirements.

## Core Model

- Product: the item or mission entity the video belongs to.
- Time: the shared clock used for video, frames, labels, route, and telemetry.
- Source: RTSP stream, uploaded archive, derived clip, snapshot, or analytics
  output.
- Annotation: user-selected frame, object label, target marker, quality marker,
  or operator note.

## Required Checks

- Separate live stream viewing from durable archive storage.
- Make fast "last minute before finish" access an indexed clip/window, not a
  manual scrub through the full asset.
- Preserve selected frames and labels as first-class records with product/time
  references.
- Search contracts should cover area, date/time, product, and available
  analytics metadata.
- Download contracts should distinguish full product video, selected clips, and
  exported snapshots.

