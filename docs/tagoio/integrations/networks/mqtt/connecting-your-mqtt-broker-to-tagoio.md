---
title: "Connecting your MQTT Broker to TagoIO"
description: "This article explains TagoIO's MQTT Relay, a command-line tool that bridges an external MQTT broker and the TagoIO platform, and points to the repository and a demonstration video for setup and usage."
tags: ["tagoio"]
sidebar_position: 2
---

TagoIO supports MQTT connections through the MQTT Relay command-line tool. The
relay acts as a bridge between your MQTT Broker and the TagoIO platform,
enabling seamless integration and reliable data flow. Developed in Rust, the
TagoIO MQTT Relay is fast, open‑source, and highly scalable.

![MQTT Diagram](/docs_imagem/tagoio/community_diagram_mqtt_broker_TagoIO_2024_1200x675@2x.png)

## What is TagoIO MQTT Relay?

The relay connects to your broker on predefined topics and redirects incoming
data to **[Devices](/docs/tagoio/devices/)** in your Profile using an
**[Authorization Key](/tagoio/integrations/general/authorization.md)** from
your profile settings. It leverages TagoIO’s Integration Network and Connector
to process and store the data. In addition to receiving data, the relay can also
publish to topics, allowing bi‑directional communication via standard TagoIO
tools such as the API and SDK.

![MQTT Fluxogram](/docs_imagem/tagoio/mqtt_rely_fluxogram.png)

## Installation

Learn how to use the relay here:
[tago-io/mqtt-relay: TagoIO | MQTT Relay](https://github.com/tago-io/mqtt-relay)

## How it works

### Data Flow

1. **MQTT Broker Connection** – The relay connects to your MQTT broker and
   subscribes to predefined topics.
2. **Data Redirection** – Incoming data on these topics is forwarded to TagoIO
   [Devices](/docs/tagoio/devices/).
3. **Network Integration** – The relay uses the Integration Network and
   [Connector](/tagoio/devices/payload-parser/connector/connector-overview.md)
   to process the payload.
4. **Device Identification** – A Payload Parser exports a serial that TagoIO
   uses to store the information in the correct device within your
   [Profile](/docs/tagoio/profiles/).

## Customization

Given the diverse strategies for data transmission, the MQTT Relay supports a
broad range of solutions. You can customize how the Device is identified using
our [Network Integrations](/tagodeploy/project/configuration/integrations.md). The Payload Parser
inside the Network can export a Serial, ensuring the data is stored accurately
within your Profile.

## Demo video

<YouTube videoId="mKU73B24Osg" title="
How to connect IoT Applications to External MQTT Brokers Using MQTT Relay" />

### Key Features

The TagoIO MQTT Relay is equipped with the latest features for hosting and
deployment:

- **TLS and TLS Certificates Support**: Ensures secure communication.
- **Docker Support**: Simplifies deployment and scaling. Refer to the
  [Docker Hub](https://hub.docker.com/r/tagoio/relay) page for more details.
- **Configurable**: Can be configured through a .toml file or environment
  variables.

For detailed setup instructions, visit our
[GitHub repository](https://github.com/tago-io/mqtt-relay).
