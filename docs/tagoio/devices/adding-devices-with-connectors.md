---
title: "Adding devices with connectors"
description: "This article explains how connectors let you create devices with built-in behaviors to communicate with networks, and describes the available methods for sending and receiving data as well as common connector functions."
tags: ["tagoio", "devices"]
sidebar_position: 1
---
Connectors enable you to create a [device](/docs/tagoio/devices/index) with built‑in behaviors that allow it to communicate with a network easily.  

When creating devices at TagoIO, there are different ways to allow them to send and receive data through connectors:

1. It can be done directly using MQTT or HTTPS methods with our APIs, where one [Device token](/docs/tagoio/devices/device-token) per device is required to grant access.
2. When using external services from providers (e.g., LoRaWAN, Sigfox, or cellular), it is necessary to generate an [Authorization](/docs/tagoio/integrations/index) per group or application.

That is why you need to select the right connector when creating your device at TagoIO: to take advantage of the integrations already implemented with these services.

## Connector functions

Connectors may provide one or more of the following functions:

- Interface with the [middleware](/docs/tagoio/integrations/general/middleware) that connects with the provider when necessary.
- Present logo, name, description, and tags for the device.
- Add [payload parsers](/docs/tagoio/payload-parser/index) in the device (optional).
