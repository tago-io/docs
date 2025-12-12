---
title: "Device Token"
description: "This article explains what a Device Token is in TagoIO and how to locate and copy it from a device's General Information tab."
tags: ["tagoio", "devices"]
sidebar_position: 2
---
The secret key used between TagoIO and your device is called a Device Token. Any access from a device is granted only with a valid token. This token should be kept secret and shared only with people you trust.

:::note

 Each time a device is created, the system automatically creates a device token.

 :::

## Finding the Device Token

- Open the [Devices](https://admin.tago.io/devices) module in the TagoIO Console.
- Select the device you want to get the token for.
- Go to the "General" tab.
- In the "Token & Serial Number" window, click on the 3 dot menu.
- Select "Copy Token" to copy the token to the clipboard.

![Device Token](/docs_imagem/tagoio/rounded-image-1764604280634.png)

## Security recommendations

- Treat the device token like a password — do not expose it in public repositories, logs, or client-side code.
- Only share the token with systems or people that must interact with the device.