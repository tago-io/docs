---
title: "Building your own parser"
description: "This article explains how to convert raw payloads from devices into measurable variables using the TagoIO Payload Parser and links to three step-by-step tutorials plus a video walkthrough."
tags: ["tagoio"]
---
In this tutorial, you will learn how to convert (parse) a raw payload sent by a device into measurable variables.

![Data flow structure – sensor uplink → payload parser → data is stored](/docs_imagem/tagoio/building-your-own-parser-2.png)

You can create parsers for devices that are not listed in the Devices registry (for example, when using a Custom device connector). You can also perform additional calculations on the data after the system runs the parser provided by the selected connector.

If you want to learn more about how data packages are sent to TagoIO, see [Integration](../integrations/connector-overview).

---

## Tutorials

We provide three tutorials to help you understand how the Payload Parser works:

- [In-Depth Guide for Payload Parser](/tagoio/payload-parser/payload-parser)
- [LoRaWAN/Sigfox Payload Parser Tutorial](/tagoio/payload-parser/payload-parser)
- [MQTT Payload Parser Tutorial](/tagoio/payload-parser/payload-parser)

Learn more about the overall concept in the [Payload Parser Overview](/tagoio/payload-parser/payload-parser).

For a step-by-step visual guide to payload parsing, watch this video:

<!-- Image placeholder removed for build -->