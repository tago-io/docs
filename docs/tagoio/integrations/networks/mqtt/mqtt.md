---
title: "MQTT Overview"
description: "A brief introduction to TagoIO's MQTT support, including availability restrictions, an overview of the MQTT protocol, and a diagram showing data flow between devices and the TagoIO MQTT broker."
tags: ["tagoio"]
sidebar_position: 1
---
## Important notice

> TagoIO MQTT Broker is available exclusively for Starter and Scale accounts in the US database region. European (EU) database region accounts cannot access this service due to new security requirements, but they may use third‑party MQTT services with TagoIO via the [MQTT Relay](../../../integrations/connecting-your-mqtt-broker-to-tagoio) feature. Free accounts can access MQTT functionality through the MQTT Relay as well.
>
> For EU accounts, a public MQTT broker without SLA guarantees is planned for the future. The main purpose of that broker will be proof‑of‑concept testing.

## Overview

MQTT stands for MQ Telemetry Transport. It is an extremely simple and lightweight publish–subscribe messaging protocol designed for constrained devices and for use over low‑bandwidth, high‑latency, or unreliable networks.

## Data flow (example)

![MQTT data flow diagram: Device #1 publishes temperature to TagoIO Broker; Devices #2 and #3 subscribe to the temperature topic and receive published values.](/docs_imagem/tagoio/mqtt-3.png)

Caption: Device #1 publishes a payload (for example, "21") to the topic "temperature" on the TagoIO Broker. Devices #2 and #3 subscribe to the same topic and receive the published payloads.

TagoIO’s MQTT broker is responsible for pushing data to clients whenever new information is published on the specific topics they are subscribed to. Unlike a full‑featured MQTT implementation, it focuses mainly on ingesting sensor data into our data buckets, so some standard features such as the native **Retain** flag are not supported. A workaround that achieves similar functionality can be found in the article [MQTT Retain on TagoIO Broker](../../../mqtt-retain-on-tagoio-broker).

For example, a temperature sensor might publish a new value to the topic `temperature` each time it receives an update. Devices that need to react to these updates subscribe to that topic; when the sensor publishes, the broker forwards the payload to all subscribed clients.

![Image 2: MQTT flow diagram](/docs_imagem/tagoio/external-0d4c4dd6.png)

## Connection

To connect to our broker, use the following details. Note that there is a limit on the number of connections, publications, and subscriptions you can make, enforced based on your account plan. For more information, read about [Rate Limits (Hard Limits)](../../../rate-limits-hard-limits).

> **Host:** `mqtt.tago.io`  
> **TCP/IP port:** 1883  
> **TCP/IP port over SSL:** 8883  
> **Username:** Token  
> **Password:** _Your Device‑Token_

If the [Device‑token](../../../devices/device-token) is removed from a device, or if it is deleted, that device will be disconnected from the MQTT broker.

## Security

Encryption across the network can be handled with SSL independently of the MQTT protocol itself. Additional security can also be added through application‑encrypted data that is sent and received. At TagoIO you can send your data encrypted directly to [Analysis](../../../analysis/index), decrypt it there, and then insert the data into your [Bucket](../../../devices/index). This procedure can increase security if your data is sensitive or if you simply want an extra layer of protection.

## Data flow at TagoIO

When you first send data through MQTT to your device, you’ll be able to visualize the connection and message through the [Live Inspector](../../../devices/live-inspector) on your device. Those messages indicate that the connection is working, but nothing is being stored in your bucket yet.

From this point, you need to create an [Action](../../../actions/index) with trigger **MQTT** and type **Insert to Device Bucket**. Once configured, you should see the data being stored in the Live Inspector.

If you don’t send the data using the [TagoIO data format](../../../devices/data-management/sending-data), you’ll need to normalize your data and change it to the correct format. Check out our documentation on how to use a [Payload Parser](../../../payload-parser/index).

## More Resources

Here are some additional documentation links on MQTT resources:

- [MQTT - Publishing and Subscribing](../../../mqtt-publishing-and-subscribing)
- [MQTT - Action Triggers by Topic](../../../trigger-by-mqtt-topic)