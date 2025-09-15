---
sidebar_position: 1
title: Device Overview
slug: /tagocore/device
---

# Device

A Device represents the connection between your physical hardware and TagoCore. Think of it as a digital identity for your sensors, controllers, or any IoT equipment. You need to create a device in TagoCore before any hardware can send or receive data.

TagoCore communicates with your devices using standard HTTP requests with JSON data format - the same technology that powers websites, making it easy to integrate with any hardware platform.

## Adding a Device

To add a new device, click the&nbsp; <img className="inline-image" src="/docs_imagem/tagocore/device/add-device-button.png" height="25px" /> &nbsp;button on the **Devices** page. This will open the device creation form:

<img className="inline-image" src="/docs_imagem/tagocore/device/add-device-popup.png" height="300px" />

Fill in the basic information like device name and description, then click create. TagoCore will automatically generate the security credentials your device needs to communicate.

## Token & Serial Number

Every device gets a unique **Device Token** - this works like a secure password that allows your hardware to send data to TagoCore or receive commands from it. Only devices with a valid token can communicate with your platform.

:::danger Be careful
Device tokens should be kept secret and only shared with trusted team members. Treat them like passwords - if compromised, you can regenerate them in the device settings.
:::

## Payload Parser

Payload Parsers help you transform raw data from your devices into useful information. For example, if your device sends hex data like `41BC7E`, a payload parser can convert it into readable values like `{"temperature": 23.5, "humidity": 67}`.

[Learn more about Payload parsers](/docs/tagocore/resources/device/payload-parser.md)
