---
title: "MQTT - Publishing and Subscribing"
description: "This article explains how to publish and subscribe to MQTT topics from a TagoIO Analysis, including account availability for TagoIO's MQTT broker and an example of publishing from an Analysis."
tags: ["tagoio"]
---

> **Note**
>
> - TagoIO MQTT Broker is available exclusively for Starter and Scale accounts in the US database region. European database region accounts cannot access this service due to new security requirements, but may utilize third‑party MQTT services with TagoIO via the [MQTT Relay](integrations/mqtt-relay) feature. Free accounts can access MQTT functionality through the MQTT Relay.
> - For EU accounts, a public MQTT broker without SLA guarantees is planned for the future. The main purpose of this broker will be for proof‑of‑concept testing.

You can publish to your MQTT topics by coding a script that runs from an [Analysis](../analysis/analysis-overview). When the Analysis runs, your script can publish a topic that will be received by any device subscribed to that specific topic. An Analysis can be started in different ways: by timer, by an [Action](actions/actions), or by another Analysis. The diagram below illustrates the data flow from an Analysis to the MQTT network.

![MQTT publish/subscribe diagram](/docs_imagem/tagoio/mqtt-publishing-and-subscribing-2.png)

The diagram shows:
- An Analysis publishes to the broker using, for example:
```javascript
// Example: publish from an Analysis
services.mqtt.publish('mytopic', 'my message')
```
- Any device that subscribes to the topic "mytopic" will receive the published message.
- Typical subscribe text: Subscribe to the topic: "mytopic"

This section describes how to publish and subscribe to topics on the TagoIO MQTT Broker. It assumes you already know how to connect to MQTT; if you do not, see the [MQTT](mqtt) article for connection instructions.