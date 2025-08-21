---
title: "Downlinks using Dashboards"
description: "This article explains how to perform downlinks for LoRaWAN Class C or Class A devices using an Analysis and dashboards, including use cases and the required template installation."
tags: ["tagoio", "dashboards"]
---

Learn how to perform downlinks for Class C or Class A devices using Analysis (link-to-analysis). This article also shows how to send downlink data from dashboards (link-to-dashboards). This approach can be used in the following cases:

## Use cases
- For devices with class C: immediately send a downlink message to the device.
- For devices with class A: schedule downlink messages for the next available time slot.

## Required Analysis template
To use this method you must install the Analysis template available at the following link:

http://admin.tago.io/template/5f513aabd4555600277f858c

![TagoIO downlink template preview](/docs_imagem/tagoio/downlinks-using-dashboards-2.png)

Caption: Sending downlink using dashboard. Click "Get Analysis Template" on the template page to install it in your account.

## After installing the template
After installing the template, set up the environment variables. Go to the "Environment Variables" tab of your device (link-to-device):

![Environment variables tab of the device](/docs_imagem/tagoio/downlinks-using-dashboards-2.png)

Configure the environment variables according to the template instructions so the Analysis can correctly address and send downlink payloads to your device.

## Notes and references
- "Analysis" and "dashboards" in this article refer to the corresponding TagoIO features (link-to-analysis, link-to-dashboards).
- Template link: http://admin.tago.io/template/5f513aabd4555600277f858c

For more detailed steps on setting up the Analysis or dashboard widgets to trigger downlinks, refer to the Analysis and Dashboards documentation (link-to-analysis, link-to-dashboards).