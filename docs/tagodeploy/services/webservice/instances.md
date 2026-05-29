---
title: "Web Service Instances"
description: "Set the machine size and autoscaling rules for a web service connector, and watch its CPU and memory usage."
keywords: [tagodeploy, webservice, middleware, instances, autoscaling, machine]
tags: ["tagodeploy", "webservice"]
slug: /tagodeploy/project/webservice/instances
---

A web service is a middleware connector that bridges an external IoT network or
protocol to TagoIO over webhooks. The Instances page controls how that connector
scales, so it can absorb ingest spikes when the external network sends a burst of
uplinks. You pick the machine size, set the instance count range and the
autoscaling thresholds, and review CPU and memory charts for the running
connector.

## Instance settings

The settings form holds the machine size, scaling range, and autoscaling
thresholds for the connector.

- **Machine** is the vCPU and RAM tier each instance runs on, for example
  "1 vCPU / 2GB RAM". The list of tiers is limited by your project plan, so
  larger sizes appear only when your plan allows them.
- **Minimum Instances** and **Maximum Instances** set the range the connector
  can scale between. The minimum cannot be higher than the maximum, and the
  maximum cannot be lower than the minimum. The highest selectable count is
  capped by your plan.
- **Scale on CPU Utilization** is the CPU percentage that triggers autoscaling.
  A burst of uplinks raises CPU, and crossing this threshold adds instances to
  keep up.
- **Cooldown for Scaling Up** and **Cooldown for Scaling Down** are the wait
  periods in seconds before another scaling step.

Edit the values and use Save to stage the change. Only the fields you changed
are sent. Save is disabled when you lack edit permission or while a project
deploy is in progress, and staged changes are applied through the project
deploy flow.

## Monitoring

The Monitoring section charts CPU Utilization and Memory Utilization for the
connector as percentages over time. Use the time range control to change the
window, with options from 1h to 30d. Read these charts alongside the
Scale on CPU Utilization threshold to judge whether the instance range and
machine size fit the connector's uplink load.
