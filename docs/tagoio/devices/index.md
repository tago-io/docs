---
title: "Devices"
description: "This article explains what a Device is in TagoIO, how devices communicate with the platform, where they are managed, and how to add devices and choose their data storage type."
tags: ["tagoio", "devices"]
---
Device is the link between your external things and the data in your account. To allow anything to send or receive data from TagoIO, you need to create a device. The communication between external devices and TagoIO is done via HTTP or MQTT using JSON format. To enable this communication, a device must be created within the platform; this involves specifying the device type and configuring it to send and receive data correctly.

Devices are managed through your [Admin](https://admin.tago.io/) interface, where users can access detailed information about each device, including its ID and other settings.

> ℹ️ Our [TagoIO API documentation](../api/index) offers comprehensive instructions on how to interface with devices, ensuring developers can effectively integrate their hardware with the platform.

## Adding devices

Devices are connected to TagoIO using [Connectors](../integrations/index), which act as a bridge between TagoIO and external networks to transmit and receive data. To follow a step‑by‑step tutorial on how to add a device, see the [Getting Started](../getting-started) article.

> ℹ️ Learn more about [Connectors](../integrations/index) here.

## Device type and data storage

Once you create a device, it will store all the data sent by your sensors. During the creation process, you will be prompted to select the type of data storage to be used. There are two types of data storage you can choose from:

### Device Optimized Data (Immutable database)

- Stores up to **36 million** data points per device.
- Highly optimized for short and long retention periods; query responses are faster, which means less latency for the devices and a cost reduction when running an [Analysis](../analysis/creating-analysis).
- Because the data is immutable, no one can change or delete individual sets of data – ideal for compliance.
- Data stored in the optimized device can only be removed by the [data retention policy](../data-management/data-retention-feature).

### Managed Data Optimized (Mutable database)

- Allows you to edit or delete data.
- **No** data retention.
- Limited to **50 k** data registers.
- Optimized for the storage and manipulation of configurable variables coming from sensors, web services, and forms.

## Managing your device

- **General Information tab**: shows the device’s name, network it uses to send data, and the connector used to decode the data.
- Manage the **Device Token** and **Serial number** by generating or deleting them.
- View usage‑history statistics for the specific device – useful for visibility and control over your [Data Input](../services/data-input-service) and [Output](../services/data-output-service).  
  This feature is unlocked once you activate the **Control Tower add‑on**.

## Deactivating devices

- In the right upper corner of your device page, a switch allows you to activate or deactivate the device. If deactivated, the system denies access to any command coming from the device.
- You can hide a specific device from showing in the device selection option for your [Widgets](../widgets/index).  
  Access the **More** tab on your device’s page to make your device visible or hidden.

## Inspecting your connection

- Use the **Live Inspector** tool by accessing its respective tab on your device’s page. It is useful for debugging [parser scripts](../payload-parser/index) and monitoring traffic to and from your device.

## Customizing payload parser

- Run your own parser by activating the script console in the **Payload Parser** tab inside your device’s page.
- You can also create your own connector if you need to use the same payload parser for several devices. Read more about [creating a Connector](../integrations/index).

## Emulating data sending

Inside your device’s page, find the **Emulator** tab where you can send data to your device as if it was sent by a real sensor.

## Customizing behavior of your device

Set device parameters in the **Configuration Parameters** tab. These can be used to specify how to decode data or send downlink messages, filter your devices on [Widgets](../widgets/index), or interact with [API](../api/index) and [Analysis](../analysis/index) scripts.

## Setting rate limits for your devices

- When sending data to TagoIO, you will have a limit on the number of requests that can be made during a certain time period – see **[Rate Limits (Hard Limits)](../rate-limits-hard-limits)**.
- You can set custom request rate limits for your device to protect it from malfunctioning and using too much [Data Input](../services/data-input-service) or [Output](../services/data-output-service), or to avoid a single device from sending too many requests and reaching the hard limit for requests of your account, which would block other devices from sending or receiving data for a whole minute.  
  This feature is unlocked once you activate the **Control Tower add‑on**.

## Deleting devices

To delete a device, simply go to **More** on the device page and click on **Delete Device**. Once deleted, all data will also be excluded. There is no way to recover it once deleted. Be certain before proceeding.

## See also

- [Adding devices with connectors](./adding-devices-with-connectors)
- [Device Token](./device-token)
- [Device Data Management](./device-data-management)
- [Device Emulator](./device-emulator)
- [Getting Started](../getting-started)
- [API Overview](../api/index)
- [Connector Overview](../integrations/index)