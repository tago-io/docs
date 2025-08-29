---
title: "Adeunis with LoRaWAN™"
description: "This article explains how to integrate Adeunis LoRaWAN™ devices with TagoIO, how TagoIO parses device payloads, and the steps to add and configure devices for different LoRaWAN™ network providers."
tags: ["tagoio"]
---
![Adeunis logo](/docs_imagem/tagoio/adeunis-with-lorawan-2.png)

## Overview

TagoIO supports most Adeunis devices by providing integration with several LoRaWAN™ networks. TagoIO parses incoming payloads and extracts the measured variable values in real time, making all device data readily available for display or processing in your Analysis.

See [Analysis](/docs/tagoio/analys/) for working with and visualizing your incoming device data.

## Note

> You can check whether a [parser](../payload-parser/) script was added to your device under the tab **Payload Parser**.

## Adding a device

To add an Adeunis device to TagoIO:
1. Go to [Devices](/docs/tagoio/devices/).
2. Click **Add Devices**.
3. Filter the network by the LoRaWAN™ provider you will connect with.
4. Pick your Adeunis device from the list.

The exact configuration steps will vary depending on the LoRaWAN™ provider you choose.

## LoRaWAN™ providers

Select one of the following provider-specific integration guides to continue your setup:

- [TTN (The Things Network)](../tutorials/the-things-network-lorawan)
- [Loriot](../tutorials/loriot-lorawan)
- [Everynet](../tutorials/everynet-lorawan)
- [Senet](../senet-network)
- [Orbiwise](../tutorials/orbiwise-lorawan)
- [machineQ](../tutorials/machineq-lorawan)

Each provider link points to the corresponding TagoIO tutorial for configuring Adeunis devices with that network.

After you have completed the setup above, you will be ready to move forward.  
Now, just turn your Adeunis device on and wait for the data to hit your **data bucket**. Every time the device sends data, the parser will be executed, the extracted data sent to the bucket, and it will be ready to be shown in the dashboards.

You can start building your [dashboards](../dashboards/) immediately.  
Also, you can create [notifications](../notifications/notification) and more advanced [scripts](/docs/tagoio/analys/creating-analysis) as needed.

## Additional references

- Check the device's **Payload Parser** tab to confirm or edit any parser scripts.
- For device management and other configuration options, see the Devices documentation: [Devices](/docs/tagoio/devices/)
- Build dashboards: [Dashboards](../dashboards/)
- Create notifications: [Notifications](../notifications/notification)
- Write advanced scripts: [Scripts](/docs/tagoio/analys/creating-analysis)