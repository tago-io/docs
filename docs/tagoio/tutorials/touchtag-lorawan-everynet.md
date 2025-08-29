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

1. Go to the [Devices](/docs/tagoio/devices/) section in TagoIO.
2. Click on "Add Devices".
3. Select the connector "LoRaWAN Everynet" (select the LoRaWAN Everynet connector).
4. Search for "TouchTag" and create the device.  
   After creating the device, generate an **Authorization** for it (one per application).  
   [Generate Authorization](../integrations/general/authorization)

![Connector selection and device search in TagoIO](/docs_imagem/tagoio/touchtag-lorawan-everynet-2.png)

## Notes

- The connector handles decryption and parsing of the TouchTAG payloads so measured variables are available in real time in TagoIO.
- When configuring devices, ensure you select the correct connector ("LoRaWAN Everynet") and the correct device type ("TouchTag") so the parsing rules are applied.
- After creating your device, generate an **Authorization** for it (one per application).  
  [Generate Authorization](../integrations/general/authorization)
- Turn your TouchTAG device on and wait for data to arrive. Each time the device sends data, the parser is executed, extracted data is sent to the bucket, and it becomes available in dashboards.
- You can create **notifications** and more advanced **scripts** as needed.

![TouchTag Dashboard](/docs_imagem/tagoio/TouchTag_Dashboard_Tago-0VU.png)

## References

- See the [LoRaWAN Everynet](everynet-lorawan) connector documentation for connector-specific settings.
- Refer to the [Devices](/docs/tagoio/devices/) documentation for general instructions on creating and managing devices in TagoIO.
- Learn how to configure your account for Everynet:  
  [Everynet configuration guide](../tutorials/everynet-lorawan)