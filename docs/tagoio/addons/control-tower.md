---
title: "Control Tower"
description: "This article describes the Control Tower add-on for TagoIO, explaining its capabilities for monitoring and limiting data input/output and Hard Limits usage, and how to view per-device statistics after activation."
tags: ["tagoio"]
---
The Control Tower is an add‑on designed to enhance your profile by providing access to features that increase your visibility and control over data input and output. It also offers advanced statistics on the usage of your Hard Limits (Rate Limits). By using Control Tower, you can:

- View data input and output statistics for each device.
- Set data input and output limits for each individual device or for the whole profile.
- Visualize Hard Limits usage statistics to gain insights into your requests per minute.

These features let you obtain comprehensive information about your device's activities and the consumption of your Hard Limits. That understanding of your application's performance helps you prevent reaching limits that could interrupt your application's operation due to account limitations. Control Tower was developed to improve the reliability, scalability, and efficiency of your application.

Activate the Control Tower add‑on on your [Billing page](../billing/account-plans), or check out our [Pricing Page](https://tago.io/pricing).

## View your device statistics

Once you activate Control Tower, you can view data input and output statistics for each device under your profile. This helps you better understand how much data is being streamed to and from your devices.

You can monitor the statistics by going to your Devices module on your Admin and selecting the device you want to visualize:

<!-- Image placeholder removed for build -->

> **Note:** Statistics are recorded only after you activate Control Tower on a profile. Adding the add‑on does not generate retroactive data for devices prior to purchase.

### Set rate limits for your devices and profiles

Control Tower allows you to set custom request rate limits for your profile or individual devices. These limits apply to a wide range of interactions within the platform and are based on your account's plan.

There are two types of limits:

- **Hard limits** – fixed limits that apply to all accounts, determined by your plan.  
  You can read more about them in the [Rate Limits (Hard limits)](../rate-limits-hard-limits) documentation.
- **Soft limits** – flexible limits that you can customize. They let you control the input and output of your profile or devices and prevent excessive consumption.

> **Important:** Soft limits cannot exceed the hard limits defined by your plan.  
> For example, if the hard limit of your plan is 5 000 requests per minute, setting a soft limit to 10 000 will still be capped at 5 000.

You can apply a soft rate limit to:

- **Your whole profile** – all devices in the profile follow this limit.  
  To set it, navigate to your Admin page → [Profiles & Teams](https://admin.tago.io/profile) → “More” tab.
- **A specific device** – overrides the profile limit for that device.  
  To set it, go to the [Devices](../devices/) module, select the desired device, and click the “More” tab.

### Monitor your request per minute statistics

Control Tower provides detailed Hard Limits statistics on your Admin page. After activation, data regarding your requests will be recorded and displayed on the **Hard Limits > Requests** page. This allows you to view current, highest, lowest, and average usage of each hard limit, as well as advanced historical statistics.

In the advanced statistics view, you can filter by date and time and focus on specific metrics (highest, average, lowest). This helps you understand how your application is performing and decide whether any action is needed to mitigate Hard Limit usage.

> **Graph behavior:** The graph always displays a minimum value of 25 % for usage, even if the actual usage falls below this threshold. If usage is 0 %, it will still be represented as 25 %.

Activate now the Control Tower add‑on on your [Billing page](../billing/account-plans), or check out our [Pricing Page](https://tago.io/pricing) for more information.

Links and references in this article:
- "add‑on" — see [add‑on documentation](../add-ons-overview)
- "Hard Limits (Rate Limits)" — see [Rate Limits (Hard limits)](../rate-limits-hard-limits)
- "Device" — see [Devices](../devices/)
- "account limitations" — see [account limitations](../billing/account-plans#limitations)
- "Billing page" — [Billing page](../billing/account-plans)
- "Pricing Page" — [Pricing Page](https://tago.io/pricing)
- "Devices module" and "Admin" — see [Devices module in Admin](../devices/) and [Admin documentation](getting-started)