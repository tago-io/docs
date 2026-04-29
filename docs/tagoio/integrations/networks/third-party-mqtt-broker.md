---
title: "Bridging a Third-Party MQTT Broker"
sidebar_label: "Third-Party MQTT Broker"
description: "TagoIO MQTT Relay bridges an external MQTT broker and the TagoIO platform using a fast, open-source command-line tool."
tags: ["tagoio"]
keywords: [tagoio, iot, mqtt, broker, relay]
---

:::tip
For direct MQTT connectivity without an external broker, use
[TagoTiP MQTT](/docs/tagotip/transports/mqtt), which supports all account types
and regions (US and EU).
:::

TagoIO supports MQTT connections through the MQTT Relay command-line tool. The
relay acts as a bridge between your MQTT Broker and the TagoIO platform,
enabling seamless integration and reliable data flow. Developed in Rust, the
TagoIO MQTT Relay is fast, open‑source, and highly scalable.

![MQTT Diagram](/docs_imagem/tagoio/community_diagram_mqtt_broker_TagoIO_2024_1200x675@2x.png)

## What is TagoIO MQTT Relay?

The relay connects to your broker on predefined topics and redirects incoming
data to **[Devices](/docs/tagoio/devices/)** in your Profile using an
**[Authorization Key](/docs/tagoio/integrations/general/authorization.md)** from
your profile settings. It leverages TagoIO’s Integration Network and Connector
to process and store the data. In addition to receiving data, the relay can also
publish to topics, allowing bi‑directional communication via standard TagoIO
tools such as the API and SDK.

![MQTT Fluxogram](/docs_imagem/tagoio/mqtt_rely_fluxogram.png)

## Installation

Learn how to use the relay by checking out the [TagoIO MQTT Relay GitHub repository](https://github.com/tago-io/mqtt-relay).

## How it works

### Data Flow

1. **MQTT Broker Connection** – The relay connects to your MQTT broker and
   subscribes to predefined topics.
2. **Data Redirection** – Incoming data on these topics is forwarded to TagoIO
   [Devices](/docs/tagoio/devices/).
3. **Network Integration** – The relay uses the Integration Network and
   [Connector](/docs/tagoio/devices/payload-parser/connector/connector-overview.md)
   to process the payload.
4. **Device Identification** – A Payload Parser exports a serial that TagoIO
   uses to store the information in the correct device within your
   [Profile](/docs/tagoio/profiles/).

## Customization

Given the diverse strategies for data transmission, the MQTT Relay supports a
broad range of solutions. You can customize how the Device is identified using
our [Network Integrations](/docs/tagoio/integrations/index.md). The Payload Parser
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
