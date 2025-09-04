---
title: "Usage Policy"
description: "This article describes how TagoIO enforces API usage limits, how transaction rate limits apply to accounts and tokens, and where to find related documentation and plan-based service limits."
tags: ["tagoio"]
---
When executing API requests to TagoIO — either posting (data input) or getting (data output) — your account may be subject to usage limits configured in your [My Billing](https://admin.tago.io/account/billing) settings.

## How limits work
- Limits are based on the number of transactions allowed for a given time period (for example, per hour or per minute).
- A global (higher-level) limit is also applied to all accounts to help prevent attacks on TagoIO servers (for example, DDoS) and to provide a way to limit usage from applications.

>Check our comprehensive documentation on [Rate Limits](/docs/tagoio/profiles/services/rate-limits-hard-limits).

## Token access and restrictions
TagoIO limits access for both [Account-Token](/docs/tagoio/profiles/account-token) and [Device-Token](/docs/tagoio/devices/device-token) according to the transaction-per-hour limits configured in your account. Ensure your token usage patterns comply with these per-hour transaction limits to avoid throttling.


Other services (for example: data storage, SMS, email, and Analysis) are also limited according to your plan settings. Learn more in the [TagoIO Services](/docs/tagoio/profiles/services/) documentation.