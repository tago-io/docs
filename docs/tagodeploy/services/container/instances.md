---
title: "Container Instances"
description: "Set the machine size and autoscaling rules for a container application, and watch its CPU and memory usage."
keywords: [tagodeploy, iot, container, instances, autoscaling]
tags: ["tagodeploy", "container"]
slug: /tagodeploy/project/container/instances
---

# Container Instances

The Instances page controls how a container application scales. You pick the
machine size, set the instance count range and the autoscaling thresholds, and
review CPU and memory charts for the running service.

## Instance settings

The settings form holds the scaling configuration:

- **Machine** is the vCPU and RAM tier each instance runs on, which defaults to
  1 vCPU / 2GB RAM. The list of tiers is limited by your project plan, so larger
  sizes appear only when your plan allows them.
- **Minimum Instances** and **Maximum Instances** set the range the service can
  scale between, defaulting to 1 and 2. The minimum cannot be higher than the
  maximum, and the highest selectable count is capped by your plan.
- **Scale on CPU Utilization** is the CPU percentage that triggers autoscaling,
  which defaults to 60.
- **Cooldown for Scaling Up** and **Cooldown for Scaling Down** are the wait
  periods in seconds before another scaling step, defaulting to 200 and 300.

Edit the values and use **Save** to stage the change. Only the fields you
changed are sent. Save is disabled until you make a change, and staged changes
are applied through the project deploy flow.

## Monitoring

The Monitoring section charts CPU Utilization and Memory Utilization for the
service as percentages over time. Use the time range control to change the
window across 1h, 6h, 12h, 1d, 3d, 7d, and 30d. Read these charts alongside the
Scale on CPU Utilization threshold to judge whether the instance range and
machine size fit the load.
