---
title: "Device Emulator"
description: "A short guide describing TagoIO's Device Emulator, how to open it, and the types of payloads it accepts for emulating device data."
tags: ["tagoio", "devices"]
---

The device emulator is a tool for developers to send data as if it were coming from a real device. The emulator is intuitive and requires just a few clicks to validate and send your data package.

To access the device emulator, go to the [Device](../devices/devices) section, select the device, and then click on the Emulator tab.

![Device Emulator interface showing the Emulator tab, JSON payload editor, and a Send payload button](/docs_imagem/tagoio/device-emulator-2.png)

## Supported payload types

TagoIO accepts two types of payloads: JSON and Raw.

- JSON: The payload is a JSON object that follows TagoIO's data schema by using the following fields: `variable`, `value`, `unit`, `time`, `serie`, `location`, and `metadata`.
- Raw: Raw binary data.

## Notes

- Use the Emulator tab to validate and send payloads using the device's credentials.
- The emulator UI includes a payload editor, an option to load samples, function helpers, and a "Send payload" button to submit the data.