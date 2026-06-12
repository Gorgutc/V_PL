# V_PL Video Platform Requirements

The requirements are listed in priority order from the user's brief.

## Receive And Store

- Receive video over RTSP.
- Bind video to time and product.
- Store user-selected frames and object labels separately for rapid review.

## Provide And Review

- Stream current video in real time for map clients, other clients, and a
  separate video service.
- Provide fast review of the final minute before finish.
- Review video in a player by movement trajectory, potentially similar to a
  launch flow embedded in video.
- Save a snapshot for the selected time.
- Download all video for a product.
- Search video by area, date, and product.
- Watch selected videos synchronously.
- Watch video, route, and telemetry synchronously.

## Video Analytics

- Build orthophotos, potentially using Metashape, and view them through standard
  GeoServer-based tools.
- Store the last high-quality frame with the target object separately.
- Stitch orthophotos.
- Determine geolocation.
- Analyze terrain/object changes over time across orthophoto series.
- Annotate real-time operator video with labels above objects, nearby friendly
  products, target direction, and related context.

