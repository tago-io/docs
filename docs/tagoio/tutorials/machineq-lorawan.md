---
title: "machineQ LoRaWAN™"
description: "This article provides a step-by-step guide to integrate machineQ LoRaWAN™ with the TagoIO platform, enabling uplink and downlink operations between your LoRaWAN devices and the TagoIO application."
tags: ["tagoio"]
---
This tutorial provides a step-by-step guide to integrate machineQ LoRaWAN™ with the TagoIO Platform. By following these instructions, you will enable both uplink and downlink operations, allowing data exchange between your LoRaWAN devices and the TagoIO application.

![machineQ to TagoIO integration diagram](/docs_imagem/tagoio/machineq-lorawan-2.png)

Follow these steps in order to integrate your devices. You may skip some steps depending on your situation. For example, if you have already generated an authorization and added it to machineQ, you can skip to Step 4.

## On this page
- Step 1: Generate an Application at machineQ
- Step 2: Create Authorization in TagoIO
- Step 3: Add Integration to machineQ
- Step 4: Add Device in TagoIO
- Finalizing Setup

## Step 1: Generate an Application at machineQ

First, make sure you create an Application in machineQ Central so that the integration with TagoIO can be authorized.

Go to your machineQ Central, and follow [this machineQ tutorial](https://www.machineq.com/documentation) to generate a Client ID and a Client Secret that you will need to input in TagoIO later.

### Access Authorizations

1. Go to **Devices**.
2. Click on **Authorizations** at the top of the page.

### Create a New Authorization

1. Click the **Create Authorization** button.
2. Provide a meaningful name for the authorization (e.g., *MachineQ-Integration*).
3. Enter your Client ID and Client Secret from Step 2 into the **Additional Parameters** section:
   - Format: `CLIENT_ID;CLIENT_SECRET`
   - Example: `64025-24054-230495-64034;ABT_QWzsSQAAH__HAwr...`

4. Click **Save**.

### Copy the Authorization Token

After creation, copy the authorization token. You will need this in later steps.

> *You must enter your Client ID and Client Secret separated by a semicolon in the Additional parameter field.*  
> *Only one Authorization per application is necessary. Don't do it for each device.*

## Step 2: Create Authorization in TagoIO

*(Content for creating an authorization token in TagoIO should be added here if needed.)*

## Step 3: Add Integration to machineQ

Access the machineQ Central, enter into the **_Integration_** section, click on **_Add Output Profile_**, and select **Restful API**. The output format can be left as “extended”.

Fill in the following fields:

| Field | Value |
|-------|-------|
| **Name** | Enter a unique identifier (e.g., *tagoio-integration*). |
| **URL** | Use the endpoint format `https://machineq.middleware.REGION.tago.io/uplink`. Replace **REGION** with your deployment region (e.g., us-e1, eu-w1). |
| **Token Type** | Enter the word **Authorization**. |
| **Token Value** | Set its value to the TagoIO Authorization token you copied in Step 2. |

## Step 4: Add Device in TagoIO

To integrate your device with the TagoIO Platform, follow these guidelines:

1. **Ensure Device EUI Consistency**
   - When creating the device in TagoIO, use the *exact same Device EUI* that is configured in MachineQ.
   - The Device EUI must match exactly to establish a successful connection between MachineQ and TagoIO.

2. **Select the Appropriate Network and Device Type**
   - Choose the MachineQ Network during the device setup process.
   - Select the correct device type from the available options. If your device is not listed, you can add support through connectors.

3. **Add Device Support via Connectors (If Necessary)**
   - If your device type is not available in the default list, enhance its compatibility by utilizing connectors.
   - For more information on available connectors and how to use them, refer to the Connector Overview.

For detailed instructions on adding devices, visit the [Adding Devices](../devices/devices#Adding_devices) page.

## Finalizing Setup

1. **Power On Your Devices**
   - Turn on your LoRaWAN device and gateway to initiate data transmission.

2. **Verify Data Reception**
   - In TagoIO, navigate to the Device and into the **Data** tab to confirm that data is being received.
   - Alternatively, use the [Live Inspector](/tagoio/live-inspector) within your device settings to monitor incoming data in real-time.

With data successfully flowing into TagoIO, you can start creating dashboards, adding notifications, and creating scripts to process your data.

Learn how to perform downlink for LoRaWAN: [downlink for LoRaWAN](/tagoio/downlink-for-lorawan).

## Notes and quick links
- If you already have an authorization created and added to machineQ, you can skip Steps 2–3 and proceed to Step 4.
- Where the article refers to “devices” or “authorization”, those are links to the corresponding TagoIO documentation sections:
  - [devices](../devices/devices)
  - [authorization](../security/authorization)

## Related articles
- [Everynet LoRaWAN](../tutorials/everynet-lorawan)
- [Loriot LoRaWAN](../tutorials/loriot-lorawan)
- [Orbiwise LoRaWAN™](../tutorials/orbiwise-lorawan)
- [The Things Network LoRaWAN™](../tutorials/the-things-network-lorawan)
- [LoRaWAN Publication of Environmental Measurements](../tutorials/lorawan-publication-environmental-measurements)