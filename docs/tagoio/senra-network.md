---
title: "SenRa Network"
description: "This article explains how to integrate a LoRaWAN device with SenRa Network and TagoIO, focusing on the TagoIO device setup and the token required for uplink data."
tags: ["tagoio"]
---

Using this article, you will learn how to integrate a LoRaWAN device with SenRa Network and TagoIO.

> Note: This setup is for the uplink operation — data sent from the device to your TagoIO account.

The integration is accomplished in two parts:

## 1) TagoIO Setup

1. Go to the [devices](../devices/devices) section, search for "SenRa", and select it.
2. Type a name for your device and click "Create device".

![TagoIO device creation screen](/docs_imagem/tagoio/senra-network-2.png)

3. Access the device you just created, open the "Token" tab, and copy the `device-token`. You will use this token in the next step.

> Warning: You should not create Authorization when integrating with SenRa. Use the `device-token` instead.

## 2) SenRa Portal Setup

Complete the corresponding configuration in the SenRa Portal to register the device and forward uplink data to TagoIO using the `device-token`.