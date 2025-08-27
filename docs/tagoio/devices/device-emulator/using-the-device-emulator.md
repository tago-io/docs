---
title: "Using the Device Emulator"
description: "This article explains how to use the TagoIO Device Emulator to send test payloads to your applications, the supported payload formats, and how to convert non-JSON data using a Payload parser."
tags: ["tagoio", "devices"]
sidebar_position: 1
---
If you want a quick way to send data to your applications but don't have your hardware device available, or you simply need to send data to debug your applications, you can use the Device Emulator.

To access the emulator, go to [Devices](../devices/devices), select the device, and then click on the Emulator tab.

![Device Emulator interface showing the Emulator tab and payload editor](/docs_imagem/tagoio/using-the-device-emulator-2.png)

## Supported payload formats

You can send payloads in different formats, including:

- Standard JSON (recommended)
- Raw payloads (for custom data structures, e.g., CSV)

If you send raw data or any format other than JSON, you must create a [Payload parser](../payload-parser/payload-parser) to convert the output into the JSON format that TagoIO accepts.

## Example JSON payload

Below is a simple JSON example you can use in the Emulator payload editor:

```json
{
  "variable": "temperature",
  "value": 7
}
```

## Sending the payload

- Enter your payload in the Emulator editor.
- Press the Send payload button (▶) to send the payload.
- TagoIO's API response will appear in the right‑hand panel labeled “TagoIO’s API response”. If nothing has been sent yet, the panel will display: “Nothing sent yet. Press the ▶ button to send the payload.”

## Notes and references

- Access the emulator from: [Devices](../devices/devices) → select your device → Emulator tab.
- If you need to convert non‑JSON payloads, see the [Payload parser](../payload-parser/payload-parser) documentation for instructions on creating parsers that output JSON for TagoIO.
- You can also use Functions and Timer to send data automatically to your devices.