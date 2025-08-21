---
title: "Device Token"
description: "This article explains what a Device Token is in TagoIO and how to locate and copy it from a device's General Information tab."
tags: ["tagoio", "devices"]
---

The secret key used between TagoIO and your device is called a Device Token. Any access from a device is granted only with a valid token. This token should be kept secret and shared only with people you trust.

> Note: Each time a device is created, the system automatically creates a device token.

## Finding the Device Token

- Open the device in the TagoIO Console (see the Devices documentation for details).
- Go to the "General Information" tab for that device.
- Click the reveal button to show the token.
- You can copy the token by clicking the "Copy token" option.

<!-- Image placeholder removed for build -->

## Security recommendations

- Treat the device token like a password — do not expose it in public repositories, logs, or client-side code.
- Only share the token with systems or people that must interact with the device.

## Related documentation

- Devices (see Devices documentation)
- Configuration Parameters for Devices (refer to the relevant devices docs)