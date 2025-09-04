---
title: "Managing a Deployed Middleware"
description: "Overview of how to manage a deployed middleware in TagoDeploy."
tags: ["tagodeploy"]
slug: /tagodeploy/services/middlewares/managing-middleware
---

Open Services > [Middleware Name] in your project to view and change settings.
Most updates apply without downtime; scaling actions may briefly recycle
instances.

### Settings

- Name: Change the display name shown in Services.
- Network Token: Locked by default to prevent accidental changes. Unlock to
  switch the token if you must move the middleware to a different network
  context.
- TagoIO API URL: Your project’s internal API endpoint. Normally you don’t
  change this.

### Instance Settings and Scaling

Middleware services support vertical and horizontal scaling. Choose a
configuration that matches your traffic pattern—message rate, payload size, and
downlink volume.

Recommended baseline for typical production projects up to ~10,000 devices
connected through a single middleware:

- **Machine:** 1 vCPU / 2 GB RAM
- **Minimum instances:** 1–2 (use 2 for higher availability)
- **Maximum instances:** 3–5
- **Scale on CPU utilization:** 60%
- **Cooldown for scaling up:** 200 seconds
- **Cooldown for scaling down:** 300 seconds

When to scale vertically:

- Payload processing or transformations push memory usage near limits.
- Single requests involve large batches or heavy encryption/decryption.

When to scale horizontally:

- You see spikes in concurrent uplinks.
- You need better fault tolerance and rolling updates with no single point of
  failure.

You can adjust thresholds based on load testing. If CPU stays above the
threshold for several minutes during normal traffic, increase max instances or
choose a larger machine. If memory pressure is the main limiter, move up one
machine tier before increasing instance count.

### Monitoring

The service detail page shows time-series graphs for CPU and memory utilization.

- **CPU Utilization:** Tracks processing demand caused by inbound messages and
  downlink handling. Sustained peaks indicate the middleware is saturated or
  bursty traffic exceeds current capacity.
- **Memory Utilization:** Spikes often correlate with buffering, message
  aggregation, or large payload parsing. Watch for plateaus near the machine
  limit.

Correlate these metrics with message timestamps from your external network to
confirm whether bursts or steady load are the cause.

### Updating and Versioning

When a new middleware version is available, use the Update action in the service
page. For non-breaking updates, rolling replacement keeps the endpoint
available. For major changes, validate in a non‑production project first.

## Troubleshooting

- **401/403 from TagoIO API:** The Network Token is missing required scopes,
  expired, or bound to the wrong network. Recreate a Network Token for the
  correct network and update the service.
- **High CPU with low throughput:** Look for repeated retries from the external
  network due to misconfigured callback URLs or signatures. Confirm the endpoint
  and credentials in the external platform.
- **Downlink delays:** Increase max instances or lower the CPU threshold so the
  service scales sooner during bursts.
