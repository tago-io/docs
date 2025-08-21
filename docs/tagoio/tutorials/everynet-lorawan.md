---
title: "Everynet LoRaWAN"
description: "This article provides a step-by-step guide to integrate Everynet LoRaWAN with the TagoIO platform, enabling both uplink and downlink data exchange between LoRaWAN devices and TagoIO. It covers connecting the platforms and creating the required authorization token in TagoIO."
tags: ["tagoio"]
---

This tutorial provides a step-by-step guide to integrate Everynet LoRaWAN with the TagoIO Platform. By following these instructions, you will enable uplink and downlink operations, allowing data exchange between your LoRaWAN devices and the TagoIO application.

## Connecting the platforms

![Everynet to TagoIO integration diagram](/docs_imagem/tagoio/everynet-lorawan-2.jpg)

## Step 1: Create Authorization in TagoIO

1. Access Authorizations
   - Go to Devices.
   - Click on [Authorizations](link-to-authorizations) at the top of the page.

2. Create a New Authorization
   - Click the Create Authorization button.
   - Provide a meaningful name for the authorization (for example: `Everynet-Integration`).
   - Select the token type: `Ingress`.
   - Select the bucket: you may use the default data bucket or create a new bucket specifically for Everynet.
   - Select the permission: `Write`.
   - Click Save. The authorization will be created and the token will appear. Copy the token and keep it safe because it will not be shown again.