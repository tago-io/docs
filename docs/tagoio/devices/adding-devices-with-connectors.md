---
title: "Adding devices with connectors"
description: "This article explains how connectors let you create devices with built-in behaviors to communicate with networks, and describes the available methods for sending and receiving data as well as common connector functions."
tags: ["tagoio", "devices"]
---

Connectors enable you to create a [device](link-to-device) with built-in behaviors that allow it to communicate with a network easily.  

When creating devices at TagoIO, there are different ways to allow them to send and receive data through connectors:

1. It can be done directly using MQTT or HTTPS methods with our APIs, where one `Device token` per device is required to grant access.
2. When using external providers (e.g., LoRaWAN, Sigfox, or cellular), it is necessary to generate an [Authorization](link-to-authorization) per group or application.

That is why you need to select the right connector when creating your device at TagoIO: to take advantage of the integrations already implemented with these services.

## Connector functions

Connectors may provide one or more of the following functions:

- Interface with the [middleware](link-to-middleware) that connects with the provider when necessary.
- Present logo, name, description, and tags for the device.
- Add [payload parsers](link-to-payload-parsers) in the device (optional).