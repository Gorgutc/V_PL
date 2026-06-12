# V_PL Concept Architecture

V_PL is currently a local concept repository for a video platform that combines
RTSP video, product/time binding, map context, telemetry, search, review, and
future analytics.

## Conceptual Layers

- Ingest: receive video over RTSP and register the source.
- Binding: associate video with product, time, route, and telemetry.
- Archive: store full video, selected frames, saved labels, and derived clips.
- Live viewing: expose current video to map, video service, and other clients.
- Review: support last-minute replay, route-based playback, snapshots, search,
  synchronized videos, and video/map/telemetry sync.
- Analytics: produce orthophotos, publish GIS layers, select high-quality target
  frames, geolocate objects, compare terrain over time, and annotate live video.

## Local Concept Boundary

Static HTML/CSS/JS concepts may demonstrate workflows and state transitions with
synthetic data. They should not imply backend services, analytics pipelines, or
streaming infrastructure already exist.

