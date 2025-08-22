---
title: "MQTT"
description: "A brief introduction to TagoIO's MQTT support, including availability restrictions, an overview of the MQTT protocol, and a diagram showing data flow between devices and the TagoIO MQTT broker."
tags: ["tagoio"]
---

## Important notice

> TagoIO MQTT Broker is available exclusively for Starter and Scale accounts in the US database region. European (EU) database region accounts cannot access this service due to new security requirements, but they may use third‑party MQTT services with TagoIO via the [MQTT Relay](integrations/mqtt-integration) feature. Free accounts can access MQTT functionality through the MQTT Relay as well.
>
> For EU accounts, a public MQTT broker without SLA guarantees is planned for the future. The main purpose of that broker will be proof‑of‑concept testing.

## Overview

MQTT stands for MQ Telemetry Transport. It is an extremely simple and lightweight publish–subscribe messaging protocol designed for constrained devices and for use over low‑bandwidth, high‑latency, or unreliable networks.

## Data flow (example)

![MQTT data flow diagram: Device #1 publishes temperature to TagoIO Broker; Devices #2 and #3 subscribe to the temperature topic and receive published values.](/docs_imagem/tagoio/mqtt-3.png)

Caption: Device #1 publishes a payload (for example, "21") to the topic "temperature" on the TagoIO Broker. Devices #2 and #3 subscribe to the same topic and receive the published payloads.