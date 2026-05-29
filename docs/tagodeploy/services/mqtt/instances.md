---
title: "MQTT Instances"
description: "Set the machine size and autoscaling range for the MQTT broker service and watch its CPU and memory."
keywords: [tagodeploy, iot, mqtt, instances, autoscaling]
tags: ["tagodeploy", "mqtt"]
slug: /tagodeploy/project/mqtt/instances
---

# Instances

The Instances page controls how the MQTT broker service scales. From here you
pick the machine size, set the autoscaling range, tune the thresholds, and read
CPU and memory charts for the service.

## Instance settings

The settings are staged and applied through the project deploy flow, so a change
here takes effect only after you deploy it. Use the **Save** button in the page
header to stage your edits. The button stays disabled until you change
something.

- **Machine** is the vCPU and RAM tier each instance runs on, for example
  1 vCPU / 2GB RAM. The list of tiers is capped by your project plan.
- **Minimum Instances** and **Maximum Instances** set the floor and ceiling for
  how many copies of the broker run. The minimum cannot be larger than the
  maximum.
- **Scale on CPU Utilization** is the CPU percentage that triggers autoscaling.
  When average CPU crosses this value, more instances are added up to the
  maximum.
- **Cooldown for Scaling Up** and **Cooldown for Scaling Down** are wait periods
  in seconds that the service holds before adding or removing instances again,
  so it does not react to short spikes.

## Monitoring

Below the settings, two charts plot CPU Utilization and Memory Utilization as
percentages over time. Pick a time range from 1h to 30d for both charts at once.
Use these to judge whether the current machine size and instance range match the
load your devices put on the broker.
