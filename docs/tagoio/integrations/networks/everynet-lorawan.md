---
title: "Everynet LoRaWAN"
description: "This article provides a step-by-step guide to integrate Everynet LoRaWAN with the TagoIO platform, enabling both uplink and downlink data exchange between LoRaWAN devices and TagoIO. It covers connecting the platforms and creating the required authorization token in TagoIO."
tags: ["tagoio"]
---

This tutorial provides a step-by-step guide to integrate Everynet LoRaWAN with
the TagoIO Platform. By following these instructions, you will enable uplink and
downlink operations, allowing data exchange between your LoRaWAN devices and the
TagoIO application.

## Connecting the platforms

![Everynet to TagoIO integration diagram](/docs_imagem/tagoio/rounded-image-1762437763780.png)

## Step 1: Create Authorization in TagoIO

1. **Access Authorizations**
   - Go to Devices.
   - Click on
     [Authorizations](/docs/tagoio/integrations/general/authorization.md) at the
     top of the page.

2. **Create a New Authorization**
   - Click the _Create Authorization_ button.
   - Provide a meaningful name for the authorization (for example:
     `Everynet-Integration`).
   - Select the token type: `Ingress`.
   - Select the bucket: you may use the default data bucket or create a new
     bucket specifically for Everynet.
   - Select the permission: `Write`.
   - Click _Save_. The authorization will be created and the token will appear.
     Copy the token and keep it safe because it will not be shown again.

> **Note:** You only need one authorization for all your integrations. Add more
> only if you want to separate them based on your specific needs.

## Step 2: Set up a Filter at Everynet Console

1. Go to your Everynet console and create a new filter under the menu **Filter >
   Create a new filter**.
2. Fill in the required fields according to your application.
3. After pressing _Create_, copy the **Filter ID** for the next step.

> TagoIO only recognizes the following message types: **Uplink, Downlink,
> Downlink_request, Error, and Location**.\
> Make sure you have selected at least **Uplink**.

<!-- Image temporarily disabled: Everynet filter configuration - /cdn.elev.io/file/uploads/qh72WgBv-E2Q3qO94VO2POz6QghyF6TOwT3t_PMEKX4/sCYQz-A28iCEm90A0CT7f-KBBuZ5J1X1n6tt1fJJKlU/1562815095740-SUE.png -->

## Step 3: Create a Connection in Everynet Console

1. In the Connections section of your Everynet console, create a new connection.
2. Select **HTTP v2** as the connection type.
3. Fill out the fields:
   - **Filter** – Enter the Filter ID you copied in Step 2.
   - **Application URL** – Use the endpoint format:\
     `https://everynet.middleware.REGION.tago.io/{type}`\
     Replace `REGION` with your deployment region (e.g., `us-e1`, `eu-w1`). For
     a list of available regions, visit
     [TagoIO Network Integration](/docs/tagoio/integrations/index.md).
   - **Description** – Enter a unique identifier (e.g., `tagoio-integration`).
   - **Authorization Header** – Paste the Authorization token you copied in
     Step 1.
4. Click _Save_ and copy the generated **Connector ID** for use in the next
   step.

<!-- Image temporarily disabled: Everynet connection setup - /cdn.elev.io/file/uploads/qh72WgBv-E2Q3qO94VO2POz6QghyF6TOwT3t_PMEKX4/PFFK3wBYPL38nLBIV1jV8_aO9YxLz0CM7pkZw5ww80g/1562815987328-vf0.png -->

> The endpoint `everynet-oauth.middleware.tago.io` points to the USA region. If
> you are in the USA, update your webhook to
> `everynet.middleware.us-e1.tago.io/{type}`.

## Step 4: Update Authorization at TagoIO

1. Edit the authorization you created in Step 1 by clicking the pencil icon.
2. In the optional parameters field, enter:
   ```
   <Everynet Region>;<Connection ID>
   ```
   Example: `us;603fff4ac972509cc4d5f1ad`
3. Save the changes.

## Finalizing Setup

1. **Power On Your Devices** – Turn on your LoRaWAN device and gateway to
   initiate data transmission.
2. **Verify Data Reception**
   - In TagoIO, navigate to the Device page and open the _Data_ tab to confirm
     that data is being received.
   - Alternatively, use the
     [Live Inspector](/docs/tagoio/devices/live-inspector.md) within your device
     settings to monitor incoming data in real time.

Once data successfully flows into TagoIO, you can start creating dashboards,
analyses, and actions to visualize and manage your device data effectively.
