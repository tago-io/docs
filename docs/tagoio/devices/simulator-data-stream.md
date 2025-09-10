---
title: "Simulator (Data Stream)"
description: "This article explains how to use TagoIO's Device Simulator (Simulator network) to feed real-time data into the platform when you don't have a physical sensor, and describes how simulated or real streams are delivered to device storage."
tags: ["tagoio"]
---

If you don't have a real sensor (hardware) to send data through the Internet, you can still try all of TagoIO's features by selecting device simulators that feed data in real time. It's like adding a virtual device.

![TagoIO Device Simulator interface showing connector selection and simulator options](/docs_imagem/tagoio/simulator-data-stream-3.png)

TagoIO's server provides a continuous stream of data—whether that data is simulated (e.g., bus, truck, freezer) or real (e.g., weather conditions in Raleigh, NC)—through the Simulator network. Data is sent to the device's storage in TagoIO.

## Adding a Simulator Device

To use this feature, go to **[Devices](https://admin.tago.io/devices)**, then click on “+Add Device”, select the Network: **Simulator**, and from the list of connectors pick the one that simulates a type of device you want. For example, choose the “Bus Simulator” which will send location, fuel level, speed and other variables to your device data storage every 3 minutes.

After adding the device, a pop‑up will ask if you want to add a [dashboard](/docs/tagoio/dashboards/). Use this option to get a dashboard to start and edit from there.

<!-- Image temporarily disabled: Device simulator freezer example - /cdn.elev.io/file/uploads/VkSrjeSoWpdg7LeGdh2jKUEagxh0dd_cO83j6HUV_6s/HsQE88Il2ABCJiJWyt6ezrp2RiGdMs_GThssoIZJaII/device-simulator-freezer-GgY.png -->

## Working with Dashboards, Actions, Scripts, and RUN

From there you can create and edit:

- [Dashboards](/docs/tagoio/dashboards/)
- [Actions](/docs/tagoio/actions/)
- [Scripts](/docs/tagoio/analysis/)
- [RUN](/docs/tagoio/tagorun)

This is an easy and quick way to start with TagoIO!

## Data Visibility and Live Inspector

Data can take a few minutes to appear in the device. For example, weather data may take up to 15 minutes to present for the first time.

Use our [Live Inspector](/docs/tagoio/devices/live-inspector.md) to monitor raw data arriving on your account in real‑time.
