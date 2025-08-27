---
title: "MQTT - Publishing and Subscribing"
description: "This article explains how to publish and subscribe to MQTT topics from a TagoIO Analysis, including account availability for TagoIO's MQTT broker and an example of publishing from an Analysis."
tags: ["tagoio"]
---
> **Note**
>
> - TagoIO MQTT Broker is available exclusively for Starter and Scale accounts in the US database region. European database region accounts cannot access this service due to new security requirements, but may utilize third‑party MQTT services with TagoIO via the [MQTT Relay](../../../integrations/connecting-your-mqtt-broker-to-tagoio) feature. Free accounts can access MQTT functionality through the MQTT Relay.
> - For EU accounts, a public MQTT broker without SLA guarantees is planned for the future. The main purpose of this broker will be for proof‑of‑concept testing.

You can publish to your MQTT topics by coding a script that runs from an [Analysis](../../../analysis/index). When the Analysis runs, your script can publish a topic that will be received by any device subscribed to that specific topic. An Analysis can be started in different ways: by timer, by an [Action](actions/actions), or by another Analysis. The diagram below illustrates the data flow from an Analysis to the MQTT network.

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

### Publishing to TagoIO

You can create an [Action](actions/actions) and attach it to any specific topic or wildcard topics, then trigger actions from there.

<!-- Image temporarily disabled: Action example - /cdn.elev.io/file/uploads/pmfKQdI17QsonYtKqFR0lo14i0mduRrZCtXE2bzClic/V6qqrtoqow2xmYBCAXSAPiLPUuftZotTvMGTz_dq0W8/1588011165303-pog.png -->

The payload can be sent directly to your [bucket](../../../devices/device-data-management), trigger an Analysis, or be delivered via SMS or E‑mail.

If you send the payload in JSON format, the TagoIO backend automatically adds a `metadata` field with a child field called **topic**.  
For raw payloads, transform your data into the TagoIO JSON format by wrapping it in a variable named **payload** and placing the raw data under **value**; this will also add the same `metadata.topic` field.

### QoS and Retained Message Support

The Quality of Service (_QoS_) level is an agreement between the sender of a message and the receiver. TagoIO officially supports QoS 0 and 1.

TagoIO does not support the native retain feature found in standard MQTT protocol implementations; however, we offer a workaround to achieve similar functionality. Read more here: [MQTT Retain on TagoIO Broker](mqtt-retain).

### How to Debug MQTT with TagoIO

You can view all your connections directly on the Live Inspector and inspect any connection, payload, QoS, Last Will messages, and more.

The following actions trigger messages in the inspector:

- a client connects to the broker  
- a client disconnects from the broker  
- a client subscribes to any topic  
- a client unsubscribes from any topic  
- a client publishes to any topic  

### Subscribing – Single Level

The single‑level wildcard is represented by `+`, which matches exactly one level of a topic.

**Example:** If the client subscribes to `home/+/temperature`, the following topics will match:

- `home/kitchen/temperature`
- `home/office/temperature`
- `home/livingroom/temperature`

Topics that **will not** match include:

- `home/kitchen`
- `home/kitchen/humidity`
- `home/office/ac/temperature`

### Subscribing – Multi Level

The multi‑level wildcard is represented by `#`, which matches any number of levels.

**Example:** If the client subscribes to `home/#`, the following topics will match:

- `home/kitchen`
- `home/kitchen/temperature`
- `home/office/ac/temperature`
- `home/upstairs/bedroom/ac/temperature`