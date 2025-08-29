---
title: "SenRa Network"
description: "This article explains how to integrate a LoRaWAN device with SenRa Network and TagoIO, focusing on the TagoIO device setup and the token required for uplink data."
tags: ["tagoio"]
---
Using this article, you will learn how to integrate a LoRaWAN device with SenRa Network and TagoIO.

> Note: This setup is for the uplink operation — data sent from the device to your TagoIO account.

The integration is accomplished in two parts:

## 1) TagoIO Setup

1. Go to the [devices](../../devices/) section, search for "SenRa", and select it.
2. Type a name for your device and click "Create device".

![TagoIO device creation screen](/docs_imagem/tagoio/senra-network-2.png)

3. Access the device you just created, open the "Token" tab, and copy the `device-token`. You will use this token in the next step.

> Warning: You should not create Authorization when integrating with SenRa. Use the `device-token` instead.

## 2) SenRa Portal Setup

1. Log in to the SenRa portal and go to your devices.
2. Choose the device you want to connect to TagoIO and click on its gear icon.
3. In the device settings, navigate to **Notification Target**.
4. Ensure that the status is set to *Enabled*.
5. From the “forward to” dropdown, select **TagoIO**.
6. Paste the `device-token` you copied earlier into the **device‑token** field and save your changes.

After completing these steps, every time your device sends data to SenRa, the data will be forwarded to your TagoIO account and available for use.