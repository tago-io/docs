---
title: "Adeunis with LoRaWAN™"
description: "This article explains how to integrate Adeunis LoRaWAN™ devices with TagoIO, how TagoIO parses device payloads, and the steps to add and configure devices for different LoRaWAN™ network providers."
tags: ["tagoio"]
---

![Adeunis logo](/docs_imagem/tagoio/adeunis-with-lorawan-2.png)

## Overview

TagoIO supports most Adeunis devices by providing integration with several LoRaWAN™ networks. TagoIO parses incoming payloads and extracts the measured variable values in real time, making all device data readily available for display or processing in your Analysis.

See [Analysis](link-to-analysis) for working with and visualizing your incoming device data.

## Note

> You can check whether a parser script was added to your device under the tab "Payload Parser".

## Adding a device

To add an Adeunis device to TagoIO:
1. Go to [Devices](link-to-devices).
2. Click "Add Devices".
3. Filter the network by the LoRaWAN™ provider you will connect with.
4. Pick your Adeunis device from the list.

The exact configuration steps will vary depending on the LoRaWAN™ provider you choose.

## LoRaWAN™ providers

Select one of the following provider-specific integration guides to continue your setup:

- [TTN (The Things Network)](link-to-ttn)
- [Loriot](link-to-loriot)
- [Everynet](link-to-everynet)
- [Senet](link-to-senet)

Each provider link points to the corresponding TagoIO tutorial for configuring Adeunis devices with that network.

## Additional references

- Check the device's "Payload Parser" tab to confirm or edit any parser scripts.
- For device management and other configuration options, see the Devices documentation: [Devices](link-to-devices)