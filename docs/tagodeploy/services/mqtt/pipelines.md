---
title: "MQTT Pipelines"
description: "Create, edit, and manage pipelines that process MQTT messages and forward data to TagoIO instances."
tags: ["tagodeploy", "mqtt"]
slug: /tagodeploy/project/mqtt/pipelines
---

# Pipelines

This section allows you to create, edit and delete the pipelines that process
data from your MQTT broker. The existing pipelines are displayed in a table with
the following columns:

- Name
- Description

## What are Pipelines?

Pipelines are data processing workflows that automatically handle messages
received from the MQTT broker and forward them to TagoIO instances. They serve
as the bridge between your MQTT devices and TagoIO's data processing and
visualization capabilities.

Pipelines work by:

- **Listening**: Monitoring specific MQTT topics for incoming messages
- **Processing**: Handling the data from MQTT messages
- **Forwarding**: Sending processed data to designated TagoIO instances

## How Pipelines Work

When a message is published to an MQTT topic that has an associated pipeline:

1. **Message Reception**: The MQTT broker receives the message on the monitored
   topic
2. **Pipeline Trigger**: The associated pipeline is automatically triggered
3. **Data Processing**: The pipeline processes the message data according to its
   configuration
4. **Data Forwarding**: Processed data is sent to the configured TagoIO instance

## Pipeline Configuration Requirements

To create a functional pipeline, you need:

- **API Endpoint**: The URL of the TagoIO instance where data should be sent
- **Authorization Token**: The authentication token for the TagoIO profile
- **Network Token**: The token identifying the network the device belongs to
- **Topic Mappings**: Assignment of MQTT topics to the pipeline

## Managing Pipelines

### Creating a Pipeline

To create a new pipeline, click the "New pipeline" button. You will be
redirected to a configuration page where you can specify:

- **Pipeline Name**: A descriptive name for identification
- **Description**: Details about the pipeline's purpose
- **TagoIO Configuration**: API endpoint, authorization token, and network token

### Editing a Pipeline

To edit a pipeline, click on the three-dot menu button and use the edit option.
You will be redirected to the configuration page where you can modify:

- Pipeline name and description
- TagoIO instance connection details
- Authentication and network tokens

### Deleting a Pipeline

To delete a pipeline, click on the three-dot menu button and use the delete
option.

## Topic Mappings

Pipelines work in conjunction with Topic Mappings to determine which MQTT topics
trigger data processing. Each pipeline can be associated with multiple topics,
and the same topic can trigger multiple pipelines for different processing
workflows.

## Integration Benefits

Pipelines enable seamless integration between MQTT devices and TagoIO by:

- **Automated Processing**: Eliminating manual data transfer steps
- **Real-time Data Flow**: Providing immediate data availability in TagoIO
- **Scalable Architecture**: Supporting multiple devices and data streams
- **Flexible Configuration**: Allowing different processing rules for different
  device types
