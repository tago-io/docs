---
title: "Downlinks using Dashboards"
description: "This article explains how to perform downlinks for LoRaWAN Class C or Class A devices using an Analysis and dashboards, including use cases and the required template installation."
tags: ["tagoio", "dashboards"]
---
Learn how to perform downlinks for Class C or Class A devices using Analysis (/docs/tagoio/analys/). This article also shows how to send downlink data from dashboards (../dashboards/creating-dashboard-tabs). This approach can be used in the following cases:

## Use cases
- For devices with class C: immediately send a downlink message to the device.
- For devices with class A: schedule downlink messages for the next available time slot.

## Required Analysis template
To use this method you must install the Analysis template available at the following link:

http://admin.tago.io/template/5f513aabd4555600277f858c

![TagoIO downlink template preview](/docs_imagem/tagoio/downlinks-using-dashboards-2.png)

Caption: Sending downlink using dashboard. Click "Get Analysis Template" on the template page to install it in your account.

## After installing the template
After installing the template, set up the environment variables. Go to the "Environment Variables" tab of your device (/docs/tagoio/devices/):

![Environment variables tab of the device](/docs_imagem/tagoio/downlinks-using-dashboards-2.png)

Configure the environment variables according to the template instructions so the Analysis can correctly address and send downlink payloads to your device.

**Environment Variables**

- **Account_token:** Any account token from your account with full permission. Go to your [profile configurations](https://admin.tago.io/profile), tokens section, and generate a new one.
- **default_PORT:** The default port to be used if not sent by the dashboard.

With all variables set, press **Save** to save the analysis.

## Setting up the Dashboard
After completing the previous steps, you may want to send these downlinks using a dashboard. This method can be useful to easily select the device to send the payload or to share the dashboard with others and allow them to send the downlink messages.

<!-- Image temporarily disabled: Dashboard overview - /help.tago.io/galleryDocuments/edbsn24e33a3a2919950ee11a198e3332a1a07ebf01b746f9b3796745958a4d4df1ddb1ec074de43a9f0483299b12f393c1ca?inline=true -->

1. Select the Analysis you've recently imported, **"Sending Downlink using dashboard"**:

   <!-- Image temporarily disabled: Select analysis - /help.tago.io/galleryDocuments/edbsn70448adc995289bada74c11b51d5b9e65be0ccfc4e9c0bfedc9a20fdd493a1891948b179b5d87037a38c0d84ed7f5e00?inline=true -->

2. Press **"Confirm associations"** to apply the changes and you're all set to start using the form and send your downlinks.

## Notes and references
- "Analysis" and "dashboards" in this article refer to the corresponding TagoIO features ([Analysis](/docs/tagoio/analys/), [Dashboards](creating-dashboard-tabs)).
- Template link: http://admin.tago.io/template/5f513aabd4555600277f858c

For more detailed steps on setting up the Analysis or dashboard widgets to trigger downlinks, refer to the Analysis and Dashboards documentation ([Analysis](/docs/tagoio/analys/), [Dashboards](creating-dashboard-tabs)).