---
title: "Building your Own Parser"
description: "This article explains how to convert raw payloads from devices into measurable variables using the TagoIO Payload Parser and links to three step-by-step tutorials plus a video walkthrough."
tags: ["tagoio"]
---

In this tutorial, you will learn how to convert (parse) a raw payload sent by a
device into measurable variables.

![Data flow structure – sensor uplink → payload parser → data is stored](/docs_imagem/tagoio/building-your-own-parser-2.png)

You can create parsers for devices that are not listed in the Devices registry
(for example, when using a Custom device connector). You can also perform
additional calculations on the data after the system runs the parser provided by
the selected connector.

If you want to learn more about how data packages are sent to TagoIO, see
[Integration](/tagodeploy/project/configuration/integrations.md).

## Tutorials

We provide three tutorials to help you understand how the Payload Parser works:

- [In-Depth Guide for Payload Parser](https://community.tago.io/t/in-depth-guide-to-payload-parser/898)
- [LoRaWAN/Sigfox Payload Parser Tutorial](https://community.tago.io/t/how-to-build-a-lorawan-sigfox-payload-parser/843)
- [MQTT Payload Parser Tutorial](https://community.tago.io/t/how-to-build-an-mqtt-payload-parser/1032)

Learn more about the overall concept in the
[Payload Parser Overview](/tagocore/resources/device/payload-parser.md).

For a step-by-step visual guide to payload parsing, watch this video:

<YouTube videoId="qPxTPD8qhYc" title="How to Parse Scripts Using the Payload Parser" />
