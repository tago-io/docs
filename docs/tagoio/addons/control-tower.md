---
title: "Control Tower"
description: "This article describes the Control Tower add-on for TagoIO, explaining its capabilities for monitoring and limiting data input/output and Hard Limits usage, and how to view per-device statistics after activation."
tags: ["tagoio"]
---
The Control Tower is an add‑on designed to enhance your profile by providing access to features that increase your visibility and control over data input and output. It also offers advanced statistics on the usage of your [Hard Limits (Rate Limits)](/docs/tagoio/profiles/services/rate-limits-hard-limits.md). By using Control Tower, you can:

- View data input and output statistics for each device.
- Set data input and output limits for each individual device or for the whole profile.
- Visualize Hard Limits usage statistics to gain insights into your requests per minute.

These features let you obtain comprehensive information about your device's activities and the consumption of your Hard Limits. That understanding of your application's performance helps you prevent reaching limits that could interrupt your application's operation due to account limitations. Control Tower was developed to improve the reliability, scalability, and efficiency of your application.

Activate the Control Tower add‑on on your [Billing page](https://admin.tago.io/account/billing), or check out our [Pricing Page](https://tago.io/pricing).

## View your device statistics

Once you activate Control Tower, you can view data input and output statistics for each device under your profile. This helps you better understand how much data is being streamed to and from your devices.

You can monitor the statistics by going to your Devices module on your Admin and selecting the device you want to visualize:

![Control tower overview](/docs_imagem/tagoio/ctower_device_statistics.png)

:::info

Statistics are recorded only after you activate Control Tower on a profile. Adding the add‑on does not generate retroactive data for devices prior to purchase.

:::

### Set rate limits for your devices and profiles

Control Tower allows you to set custom request rate limits for your profile or individual devices. These limits apply to a wide range of interactions within the platform and are based on your account's plan.

There are two types of limits:

- **Hard limits** – fixed limits that apply to all accounts, determined by your plan.
  You can read more about them in the [Rate Limits (Hard limits)](/docs/tagoio/profiles/services/rate-limits-hard-limits.md) documentation.
- **Soft limits** – flexible limits that you can customize. They let you control the input and output of your profile or devices and prevent excessive consumption.

You can apply a soft rate limit to:

- **Your whole profile** – all devices in the profile follow this limit.
  To set it, navigate to your Admin page → [Profiles & Teams](https://admin.tago.io/profile) → “More” tab.

![Control tower profile](/docs_imagem/tagoio/profile_limit_ctower.png)

- **A specific device** – overrides the profile limit for that device.
  To set it, go to the [Devices](/docs/tagoio/devices/) module, select the desired device, and click the “More” tab.

![Control tower device](/docs_imagem/tagoio/device_limit_ctower.png)

:::info

The **hard limits** take precedence over **soft limits** due to restrictions on the API level, You can't set a soft limit higher than the ones in the [Rate Limits documentation](/docs/tagoio/profiles/services/rate-limits-hard-limits.md).
For example: if the hard limit of your plan is 5,000 , even if the soft limit is set to 10,000 requests in a profile or a device, the limit will still be maintained in 5,000 requests per minute.

:::

### Monitor your request per minute statistics

A significant feature provided by the Control Tower is the capability to access detailed statistics on Hard Limits through your Admin page. Upon activating the add-on, data regarding your requests will begin to be recorded and presented on the [Hard Limits > Requests page](https://admin.tago.io/limits/hard). This enables you to view the current, highest, lowest, and average usage of each hard limit. Furthermore, it allows for the display of advanced statistics, offering a historical view of your usage.

![Control tower advanced statistics](/docs_imagem/tagoio/rounded-image-1761140461575.png)

In the advanced statistics view, you have the option to filter your usage by date and time, as well as to view only the highest, average, and lowest usage. This is beneficial for understanding how your application is performing and determining if any actions are necessary to mitigate the usage of your hard limits.

:::info

**Graph behavior:** The graph always displays a minimum value of 25 % for usage, even if the actual usage falls below this threshold. If usage is 0 %, it will still be represented as 25 %.

:::

Activate now the Control Tower add‑on on your [Billing page](https://admin.tago.io/account/billing), or check out our [Pricing Page](https://tago.io/pricing) for more information.
