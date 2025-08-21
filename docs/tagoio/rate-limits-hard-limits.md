---
title: "Rate Limits (Hard limits)"
description: "This article explains TagoIO's hard rate limits: what they are, which interactions they apply to, and how limits are enforced (applied every minute) including links to related resource limits and dashboard data output constraints."
tags: ["tagoio"]
---

When executing requests to TagoIO, there is a limit on the number of requests that can be made during a given time period. These limits are applied in short intervals every minute to provide a reliable, scalable API for developers and to help prevent cyber attacks on our servers, such as DDoS.

Rate limits apply to a wide range of interactions within the platform, including—but not limited to—API endpoints, data sent from IoT devices via network protocols (MQTT, LoRaWAN, HTTP), data exports, dashboard visualizations, user interactions, and more. These limits are also known as hard limits.

> **Note:** Hard limits are used to prevent high-frequency usage beyond a healthy acceptable level; this is different from [TagoIO services](link-to-tagoio-services) that are reset monthly. You still need to make sure you have enough resources to run your application.

> **Note:** TagoIO also enforces limits on the number of resources you can have and the amount of data displayed on your dashboards. Read more about [Resource Limits](link-to-resource-limits) and [Data Output for Dashboards](link-to-data-output-for-dashboards).

## How it works

Rate limits, or hard limits, are enforced based on your account's plan. Each account tier has different rate limits for each API resource. The maximum number of requests allowed is based on a time interval, with a retry window when requests exceed the limit.

**The limit for each request is applied every minute.** If a user reaches their rate limit during a specific minute, they must wait until the next minute for the limit to reset before making additional requests. So if you reach the