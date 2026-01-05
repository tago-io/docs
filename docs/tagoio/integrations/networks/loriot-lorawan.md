---
title: "Loriot LoRaWAN"
description: "This article provides a concise, step-by-step guide to integrate Loriot LoRaWAN™ with the TagoIO Platform, enabling uplink and downlink operations and detailing how to generate an access token in the Loriot Console."
tags: ["tagoio"]
---
This tutorial provides a step-by-step guide to integrate Loriot LoRaWAN™ with the TagoIO Platform. By following these instructions, you will enable uplink and downlink operations, allowing data exchange between your LoRaWAN devices and the TagoIO application.

![Loriot scalable network to TagoIO integration diagram](/docs_imagem/tagoio/rounded-image-1762438126165.png)

In order to complete the integration, follow the two steps below.

---

## Step 1: Generate Access Token at Loriot

At the Loriot Console, open your Application and go to the **Access Token** section.

Click on **Generate another authentication token**, a token will be generated. Copy the Authentication Token to use in the next step.

### Step 2: Create Authorization in TagoIO

1. **Access Authorizations**  
   - Go to **Devices**.  
   - Click on **[Authorizations](https://admin.tago.io/devices/authorization)** at the top of the page.  

2. **Create a New Authorization**  
   - Click the **Create Authorization** button.  
   - Provide a meaningful name for the authorization (e.g., `LORIOT-Integration`).  
   - Paste the **Access Token** you copied in Step 1 into the **Additional Parameter** field.  
   - Click **Save**.

3. **Copy the Authorization Token**  
   - After creation, copy the authorization token. You will need this in later steps.

### Step 3: Set Up Integration in Loriot

Go to your Loriot console and create a new output. Create a new integration under the menu **Output > + Add New Output > HTTP Push**.

Select **HTTP Push** and fill in the following fields:

| Field | Description |
|-------|-------------|
| **Target URL for POSTs** | Use the endpoint format `https://loriot.middleware.REGION.tago.io/uplink`. Replace `REGION` with your deployment region (e.g., `us-e1`, `eu-w1`). |
| **Custom “Authorization” header** | Set its value to the authorization token you copied in Step 2. |

To finalize, click on **Save Output**. Now that your integration with Loriot is ready, you can start adding the devices at TagoIO.

### Step 4: Add Device in TagoIO

1. **Ensure Device EUI Consistency**  
   - When creating the device in TagoIO, use the exact same Device EUI that is configured in Loriot.  
   - The Device EUI must match exactly to establish a successful connection between Loriot and TagoIO.

2. **Select the Appropriate Network and Device Type**  
   - Choose the **LoRaWAN Loriot** network during the device setup process.  
   - Select the correct device type from the available options. If your device is not listed, you can add support through connectors.

3. **Add Device Support via Connectors (If Necessary)**  
   - If your device type is not available in the default list, enhance its compatibility by utilizing connectors.

### Finalizing Setup

1. **Power On Your Devices**  
   - Turn on your LoRaWAN device and gateway to initiate data transmission.

2. **Verify Data Reception**  
   - In TagoIO, navigate to the Device and into the Data tab to confirm that data is being received.  
   - Alternatively, use the Live Inspector within your device settings to monitor incoming data in real-time.

With data successfully flowing into TagoIO, you can create and edit dashboards, add notifications, and create scripts to visualize and manage your device data effectively.