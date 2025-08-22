---
title: "Sens'it with Sigfox"
description: "This article explains how to integrate Sens'it v2 and v3 devices with TagoIO using the Sigfox backend, how to activate a Sens'it devkit, and how to add the device to TagoIO so its data can be displayed or processed."
tags: ["tagoio"]
---

TagoIO is fully integrated with Sens'it v2 and v3 devices. This integration uses the Sigfox backend and parses incoming messages to extract measured variables in real time. All data sent by your device will be available to display in widgets or to process in your Analysis.

![Sens'it + Sigfox + TagoIO Connectivity Diagram](/docs_imagem/tagoio/sensit-with-sigfox-2.png)

Sens'it + Sigfox + TagoIO Connectivity Diagram

## Prerequisites

- Sens'it device (v2 or v3)
- Sigfox developer access (to activate the devkit)
- TagoIO account with access to add devices

## Activate the Sens'it devkit

1. Activate your Sens'it as a devkit. As a developer, you must request access to the Sigfox Cloud to use devkit mode.
2. Request access from the Sigfox Buy website: https://buy.sigfox.com/ and follow their instructions to activate the devkit.
3. Once the devkit is activated, the device will be able to send data through the Sigfox network for testing.

## Add the device to TagoIO

1. In TagoIO, go to Devices (see [Devices](../devices/devices) for the Devices section).
2. Click on "Add Devices".
3. Filter the network by "Sigfox" and choose your Sens'it device from the list (select v2 or v3 accordingly).
4. After adding the device, incoming data will be parsed by TagoIO and become available for widgets and Analysis.

![TagoIO — Select the device type](/docs_imagem/tagoio/sensit-with-sigfox-2.png)

TagoIO — Select the device type (use the network filter to find Sigfox devices)

## Notes

- The integration supports both Sens'it v2 and v3 devices.
- Ensure your Sigfox devkit is properly activated before registering the device in TagoIO.
- For any specific Sigfox backend configuration or Sigfox Cloud settings, consult Sigfox documentation or the Sigfox Cloud console.

References:
- Sigfox Buy website: https://buy.sigfox.com/
- Devices (TagoIO): [Devices](../devices/devices)