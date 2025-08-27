---
title: "RadioBridge Devices"
description: "This article explains how TagoIO integrates with RadioBridge devices over Sigfox or LoRaWAN, what data is available, and that uplink/downlink operations are supported."
tags: ["tagoio", "devices"]
---
TagoIO is fully integrated with RadioBridge devices connected over Sigfox or LoRaWAN, providing seamless integration with the RadioBridge backend.

![Diagram of devices, network, RadioBridge server, and TagoIO with uplink/downlink arrows](/docs_imagem/tagoio/radiobridge-devices-2.png)

Read more about [Radio Bridge](https://radiobridge.com/).

All data sent by your device will be readily available to display in widgets or to be processed by your Analysis.

You can perform both uplink and downlink operations.

## Step 1:
First go to your TagoIO account, and if this is your first device connected between Radio Bridge and TagoIO, you will need to create an [Authorization](/tagoio/security/authorization).  
Copy the Authorization by clicking in the COPY button to use in the next step.

### Step 2:
After configuring your device on RadioBridge console following the developer's documentation, set up a Callback API.  
Go to your RadioBridge Console and open the Callback API page. Here, enter the TagoIO callback URL and set an Authorization Header of your choice.

- **Callback URL:** [https://radiobridge.middleware.tago.io/uplink](https://radiobridge.middleware.tago.io/uplink)  
- **Header Authorization Code:** Enter the one you generated at Step 1.  

Copy the Unique API URL for the next step and press Update.

### Step 3:
Copy the **Unique API URL** and return to the TagoIO Authorization page by clicking [here](https://radiobridge.com/).  
Press the Pencil button to edit the authorization you created previously in Step 1. Paste the **Unique API URL** and press save.

### Step 4:
Add the device at TagoIO. Go to [Devices](https://admin.tago.io/devices), click on **Add Devices**, search for the RadioBridge category, and pick your device from the list. If you can’t find it, select **Custom RadioBridge** to add your device.

Then follow the directions to integrate your device with TagoIO and start building your own application.  
When completed, click on **Create Device**.

Turn your Radio Bridge device on, and wait for the data to arrive in your bucket. Every time the device sends data it will be available in the bucket and shown in the dashboard: [bucket](/tagoio/devices/devices).  
You can start editing the installed dashboard.

Also, you can create [notifications](/tagoio/notifications/notification) and more advanced [scripts](/tagoio/analysis/creating-analysis) as needed.

> Depending on your type of device, a Parser may be automatically added. You may want to edit the [parse function](/tagoio/payload-parser/payload-parser) in your device if necessary.