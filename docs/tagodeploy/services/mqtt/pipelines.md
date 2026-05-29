---
title: "MQTT Pipelines"
description: "Create, edit, and manage pipelines that process MQTT messages and forward data to TagoIO instances."
keywords: [tagodeploy, iot, mqtt, pipelines, data routing]
tags: ["tagodeploy", "mqtt"]
slug: /tagodeploy/project/mqtt/pipelines
---

# Pipelines

Pipelines forward incoming MQTT messages to external services. This page lists,
creates, edits, and deletes them, and it also holds the Topic Mappings that
route topics to pipelines. Existing pipelines show in a table with these
columns:

- **NAME** (sortable)
- **DESCRIPTION**
- **STATUS** (for example, Active)

Use the search box to filter by pipeline name.

## What are Pipelines?

Pipelines are the bridge between your MQTT devices and an external service such
as a TagoIO instance. A pipeline forwards the messages from its mapped topics to
the configured endpoint with the right tokens.

Pipelines work by:

- **Receiving**: taking messages from the topics mapped to the pipeline
- **Forwarding**: sending them to the configured API URL with the network and
  authorization tokens

## How Pipelines Work

When a message is published to a topic mapped to a pipeline:

1. **Reception**: the broker receives the message on the mapped topic
2. **Match**: the topic mapping forwards it to the pipeline
3. **Forwarding**: the pipeline sends the message to its API URL with the
   network and authorization tokens

## Managing Pipelines

### Creating a Pipeline

Click **New pipeline** to open the dialog. The API URL is generated from your
project settings by default. Set:

- **NAME**: a descriptive name
- **DESCRIPTION**: what the pipeline is for
- **API URL**: the endpoint to forward messages to (default
  `https://api.tagoio.net`)
- **NETWORK TOKEN**: the token identifying the network
- **AUTHORIZATION TOKEN**: the token that authorizes the request

Click **Create pipeline** to save.

### Editing a Pipeline

Open the pipeline's row menu and use Edit to change its name, description, API
URL, and tokens.

### Deleting a Pipeline

Open the pipeline's row menu and use Delete.

## Topic Mappings

Topic Mappings route MQTT topics to specific pipelines. They live in a section
on this same Pipelines page, edited inline with no dialog. Use **New mapping**
to add a row and the **Save** button to stage your changes, which take effect
after you deploy. Each row has:

- **TOPIC**: the topic to match, for example `devices/+/telemetry`. MQTT
  wildcards are supported, where `+` matches a single level and `#` matches
  every level below a point.
- **PIPELINE**: the pipeline to forward matching messages to, picked by name.
- a remove control.

A single topic can map to more than one pipeline, and the same pipeline can
serve many topics.
