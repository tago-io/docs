---
title: "MQTT Topic Mappings"
description: "Map MQTT topics to pipelines so messages trigger processing workflows in TagoDeploy."
keywords: [tagodeploy, iot, mqtt, topic mappings, data routing]
tags: ["tagodeploy", "mqtt"]
slug: /tagodeploy/project/mqtt/topic-mappings
---

# Topic Mappings

Topic Mappings route MQTT topics to specific pipelines. When a message is
published to a mapped topic, it is forwarded to the pipeline. There is no
separate Topic Mappings page. They live in a section on the
[Pipelines](./pipelines) page, edited inline with no dialog.

## Editing topic mappings

Use **New mapping** to add a row, and the **Save** button to stage your changes,
which take effect after you deploy. Each row has:

- **TOPIC**: the topic to match, for example `devices/+/telemetry`.
- **PIPELINE**: the pipeline to forward matching messages to, picked by name.
- a remove control.

A single topic can map to more than one pipeline, so the same message can reach
several pipelines.

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
