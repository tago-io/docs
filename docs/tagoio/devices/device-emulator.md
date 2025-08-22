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

- **JSON**: The payload is a JSON object that follows TagoIO's data schema by using the following fields: `variable`, `value`, `unit`, `time`, `serie`, `location`, and `metadata`.
- **Raw**: Raw binary data. If you need to parse text data such as CSV or XML, add a [Payload Parser](/tagoio/payload-parser).

## Notes

- Use the Emulator tab to validate and send payloads using the device's credentials.
- The emulator UI includes a payload editor, an option to load samples, function helpers, and a **Send payload** button to submit the data.

### Sending Payload Data

To send a JSON payload from the emulator, you will need to:

1. Build a data payload that should contain at least the `variable` field (pick one example from the list);
2. Edit the fields of the payload;
3. Click on ![Send button](https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/bk24HEScOXgjZOEwQfE7SwNSqrsqC0coU4ZccibqpnM/1624563795800-Zq8.png) to send the payload.

![Example payload editor](https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/dxDHtuu11mdFL2hQ2XMcCKSL1GlSoCzfD0VH4G3UBO0/Screen%20Shot%202021-06-24%20at%2016.46.47-0OI.png)

### Functions

Functions are helper variables that you can add to your payload. Each function has a purpose. To add a function to your payload, click on ![Add function button](https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/C2przHjcZU9jluHh_9TGMpJjSR4qMl__GEnyjv3Fhq8/1624878287784-MzI.png) and select a function.

![Function selection dialog](https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/mKEc-xPap6-QXaLXsnugTHGYOMgoxeEZ6x0gxU9B5Ps/1624564657419-ttY.png)

To learn more about using functions in the device emulator, read the article [Device Emulator Functions](/tagoio/device-emulator-functions).

### Timer

The timer helps to automatically send your payload at a fixed time interval. This is extremely useful if you wish to see the data coming in while you look at a dashboard, for example.

![Timer interface](https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/dRxJfNPIO-3g39W51HsW5eUTOZI6Au7qH9PXwhxg1dM/1624568411436-YYo.png)

> If you close the **Emulator** tab, the system will stop sending payloads. You may want to use the [Simulator](/tagoio/simulator-data-stream) or create a script to keep sending all the time.

> Before sending any kind of payload, always make sure that the device is **Active**.

Learn more in our [community](https://community.tago.io/).