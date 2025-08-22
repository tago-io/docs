---
title: "Connecting your MQTT Broker to TagoIO"
description: "This article explains TagoIO's MQTT Relay, a command-line tool that bridges an external MQTT broker and the TagoIO platform, and points to the repository and a demonstration video for setup and usage."
tags: ["tagoio"]
---
## What is TagoIO MQTT Relay?
TagoIO supports MQTT connections through the MQTT Relay command-line tool. The relay acts as a bridge between your MQTT Broker and the TagoIO platform, enabling seamless integration and reliable data flow. Developed in Rust, the TagoIO MQTT Relay is fast, open‑source, and highly scalable.

The relay connects to your broker on predefined topics and redirects incoming data to **Devices** in your Profile using an **Authorization Key** from your profile settings. It leverages TagoIO’s Integration Network and Connector to process and store the data. In addition to receiving data, the relay can also publish to topics, allowing bi‑directional communication via standard TagoIO tools such as the API and SDK.

### Data Flow
1. **MQTT Broker Connection** – The relay connects to your MQTT broker and subscribes to predefined topics.  
2. **Data Redirection** – Incoming data on these topics is forwarded to TagoIO Devices.  
3. **Network Integration** – The relay uses the Integration Network and Connector to process the payload.  
4. **Device Identification** – A Payload Parser exports a serial that TagoIO uses to store the information in the correct device within your Profile.

## Learn more / Repository
Learn how to use the relay here: [tago-io/mqtt-relay: TagoIO | MQTT Relay](https://github.com/tago-io/mqtt-relay)

## Demo video

<!-- Image placeholder removed for build -->

## Summary
- **Purpose** – Bridge external MQTT brokers to the TagoIO platform.  
- **Key properties** – Command‑line tool, built in Rust, open‑source, designed for performance and scalability.  
- **Security** – Supports TLS and TLS certificates for secure communication.  
- **Deployment** – Docker support simplifies scaling; see the [Docker Hub](https://hub.docker.com/r/tagoio/relay) page for more details.  
- **Configuration** – Configurable through a `.toml` file or environment variables.  
- **Bi‑directional communication** – Can publish to topics using TagoIO API and SDK.  
- **Resources** – See the “tago‑io/mqtt-relay: TagoIO | MQTT Relay” repository for usage, installation, and examples.