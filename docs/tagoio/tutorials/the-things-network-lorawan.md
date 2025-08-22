---
title: "The Things Network LoRaWAN™"
description: "This article explains how to integrate The Things Network (TTN) with the TagoIO platform, enabling uplink and downlink operations between LoRaWAN devices and TagoIO. It lists prerequisites and begins the step-by-step setup process."
tags: ["tagoio"]
---
This tutorial provides a step-by-step guide to integrate The Things Network (TTN) with the TagoIO platform. By following these instructions, you will enable uplink and downlink operations, allowing data exchange between your LoRaWAN devices and the TagoIO application.

> If you're trying to integrate TTI or TTN v3, use our [TTI integration](../tutorials/tti-integration) instructions.

![Integration diagram showing LoRaWAN devices, The Things Network, a connector, and TagoIO](/docs_imagem/tagoio/the-things-network-lorawan-2.png)

## Prerequisites

Before you begin, ensure you have the following:

- TTN v3 account — If you don't have one, [register here](https://www.thethingsnetwork.org/get-started).
- LoRaWAN device — Ensure your device is connected to TTN and transmitting data. If you need help doing that, watch this [TTN video tutorial](https://www.youtube.com/watch?v=duwUwXt-hs8).

---

## Step 1: Create Authorization in TagoIO

### Create a New Authorization
1. Go to **Devices** in the TagoIO dashboard.  
2. Click the **Create Authorization** button.  
3. Provide a meaningful name for the authorization (e.g., `TTN-Integration`).  
4. Click **Save**.  

![Image 2](https://desk.zoho.com/support/ImageDisplay?downloadType=uploadedFile&fileName=1738262517736.png&blockId=edbsn8d9972ac801485733a54ba20d39542298ebcff40d27d72339b0702fcefb4948e&zgId=edbsn631a5119ab7b66930d9988a5e8622b55&mode=view)

### Copy the Authorization Token
After creation, copy the authorization token. You will need this in later steps.

---

## Step 2: Configure TTN Integration

1. **Navigate to your TTN console** and open your application.  
2. Go to **Integrations > Webhook > + Add Webhook**.  
3. Select **Custom Webhook** from the list.

![Image 3](https://cdn.elev.io/file/uploads/VkSrjeSoWpdg7LeGdh2jKUEagxh0dd_cO83j6HUV_6s/y3Kw0JJdTsjE1iKOD4-0YX3RtdmUcuaiepiWIAq42SI/tagoIO_ttn-WUw.png)

### Webhook Configuration
| Field | Description |
|-------|-------------|
| **Webhook ID** | Enter a unique identifier (e.g., `tagoio-integration`). |
| **Webhook Format** | JSON |
| **Base URL** | Use the endpoint format `https://ttn.middleware.REGION.tago.io`. Replace `REGION` with your deployment region (e.g., `us-e1`, `eu-w1`). For a list of available regions, visit [TagoIO Network Integration](https://help.tago.io/portal/en/kb/articles/125-network-integration). |
| **Additional Headers** | Add a header key `Authorization` and set its value to the authorization token you copied in Step 1. |
| **Enabled event types** | Enable the event types you expect to receive from your device. Set the path of all enabled event types to `/uplink`. |

![Image 4](https://help.tago.io/galleryDocuments/edbsnb42ab2bad466cb0ceaa204cfd7fcfadb3af9619dd081a7a0ae252a54637661fdc9f38642f6b8cb458c076d982e14d46f?inline=true)

---

## Step 3: Add Your Device to TagoIO

### Ensure Device EUI Consistency
- When creating the device in TagoIO, use **exactly the same Device EUI** that is configured in TTN.  
- The Device EUI must **match exactly** to establish a successful connection between TTN and TagoIO.

### Select the Appropriate Network and Device Type
1. Choose the **LoRaWAN TTN** network during the device setup process.  
2. Select the correct device type from the available options. If your device is not listed, you can add support through connectors.

### Add Device Support via Connectors (If Necessary)
- If your device type is not available in the default list, enhance its compatibility by utilizing connectors.  
- For more information on available connectors and how to use them, refer to the **Connector Overview**.

For detailed instructions on adding devices, visit the [Adding Devices](https://help.tago.io/portal/en/kb/articles/3-devices#Adding_devices) page.

---

## Step 4: Finalize Setup

1. **Power On Your Devices**  
   Turn on your LoRaWAN device and gateway to initiate data transmission.

2. **Verify Data Reception**  
   - In TagoIO, navigate to the Device and open the **Data** tab to confirm that data is being received.  
   - Alternatively, use the [Live Inspector](https://help.tago.io/portal/en/kb/articles/453-live-inspector) within your device settings to monitor incoming data in real-time.

With data successfully flowing into TagoIO, you can start creating Dashboards, Analyses, and Actions to visualize and manage your device data effectively.