---
title: "MQTT Topic Mappings"
description: "Map MQTT topics to pipelines so messages trigger processing workflows in TagoDeploy."
tags: ["tagodeploy", "mqtt"]
slug: /tagodeploy/project/mqtt/topic-mappings
---

# Topic Mappings

This section allows you to assign MQTT topics to pipelines. When a message is
published to a mapped topic, the associated pipeline will be triggered.

## What are Topic Mappings?

Topic Mappings connect MQTT topics to data pipelines. A single topic can be
mapped to multiple pipelines, allowing the same message to trigger different
processing workflows.

## MQTT Topic Patterns

Topic mappings support MQTT wildcards:

- **Single-level wildcard (+)**: `sensors/+/temperature` matches
  `sensors/device1/temperature`
- **Multi-level wildcard (#)**: `sensors/#` matches all topics under `sensors/`

## Use Cases

Topic mappings enable flexible data routing:

- **Device-Specific Processing**: Route different device types to specialized
  pipelines
- **Multi-Destination Data**: Send the same data to multiple TagoIO instances
- **Topic-Based Filtering**: Process only specific topics while ignoring others
