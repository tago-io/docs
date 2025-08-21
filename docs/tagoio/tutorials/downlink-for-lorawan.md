---
title: "Downlink for LoRaWAN™"
description: "This article explains how to send downlink messages from TagoIO to LoRaWAN™ devices using Configuration Parameters, including required parameter names and authentication notes."
tags: ["tagoio"]
---

TagoIO will send downlink messages to your devices through Configuration Parameters. To enable this, create a key parameter named `downlink` and uncheck the switch labeled "Unread". Your LoRaWAN™ provider may allow additional downlink parameters.

> Important: Most network servers require downlinks to be authenticated; otherwise they are denied access. If you're having problems sending downlinks, make sure you've correctly generated your [authorization codes](link-to-authorization-codes).

## How it works

To send downlink messages from TagoIO to your LoRaWAN™ provider:

1. Go to your list of [devices](link-to-devices) and select the desired device.
2. Open the "Configuration Parameters" tab and edit or create a key parameter named `downlink`.
3. Insert the downlink payload into the value of the parameter (the field on the right side).
4. Make sure the `downlink` parameter's switch is unchecked (set to "Unread") so the platform will send it to the network server.

The downlink payload should be placed into the parameter's value field. Below is an example of the configuration screen showing the `downlink` parameter and where to enter the value.

<!-- Image placeholder removed for build -->

## Related information

- Configuration Parameters (tab or documentation): [Configuration Parameters](link-to-configuration-parameters)
- Authorization codes (how to generate): [authorization codes](link-to-authorization-codes)
- Devices list: [devices](link-to-devices)

(Note: keep any existing internal TagoIO links that start with https://help.tago.io/ or https://admin.tago.io/ unchanged in your documentation.)