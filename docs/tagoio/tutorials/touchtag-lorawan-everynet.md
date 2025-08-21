---
title: "TouchTAG LoRaWAN™ Everynet"
description: "This article explains TagoIO's integration with TouchTAG devices via the Everynet LoRaWAN backend, how data is decrypted and parsed in real time, and how to add a TouchTAG device in TagoIO."
tags: ["tagoio"]
---

## Overview

TagoIO integrates with TouchTAG devices through a complete connector to the Everynet back-end server. The system decrypts and parses incoming payloads, extracting all measured variables in real time.

TouchTAG is a disposable, action-driven IoT device — a very low-cost, compact, and lightweight geotag with additional sensor functionality.

![TouchTAG — Everynet integration diagram](/docs_imagem/tagoio/touchtag-lorawan-everynet-2.png)

## Add a TouchTAG device to TagoIO

To add your TouchTAG device to TagoIO:

1. Go to the [Devices](link-to-devices) section in TagoIO.
2. Click on "Add Devices".
3. Select the connector "LoRaWAN Everynet" (select the LoRaWAN Everynet connector).
4. Search for "TouchTag" and create the device.

![Connector selection and device search in TagoIO](/docs_imagem/tagoio/touchtag-lorawan-everynet-2.png)

## Notes

- The connector handles decryption and parsing of the TouchTAG payloads so measured variables are available in real time in TagoIO.
- When configuring devices, ensure you select the correct connector ("LoRaWAN Everynet") and the correct device type ("TouchTag") so the parsing rules are applied.

## References

- See the [LoRaWAN Everynet] (link-to-lorawan-everynet) connector documentation for connector-specific settings.
- Refer to the [Devices](link-to-devices) documentation for general instructions on creating and managing devices in TagoIO.