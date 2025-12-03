---
title: "Rate Limits (Hard limits)"
description: "This article explains TagoIO's hard rate limits: what they are, which interactions they apply to, and how limits are enforced (applied every minute) including links to related resource limits and dashboard data output constraints."
tags: ["tagoio"]
---
When executing requests to TagoIO, there is a limit on the number of requests that can be made during a given time period. These limits are applied in short intervals every minute to provide a reliable, scalable API for developers and to help prevent cyber attacks on our servers, such as DDoS.

Rate limits apply to a wide range of interactions within the platform, including—but not limited to—API endpoints, data sent from IoT devices via network protocols (MQTT, LoRaWAN, HTTP), data exports, dashboard visualizations, user interactions, and more. These limits are also known as hard limits.

:::note

Hard limits are used to prevent high-frequency usage beyond a healthy acceptable level; this is different from [TagoIO services](/docs/tagoio/profiles/services/) that are reset monthly. You still need to make sure you have enough resources to run your application.

:::

:::info

TagoIO also enforces limits on the number of resources you can have and the amount of data displayed on your dashboards. Read more about [Resource Limits](/docs/tagoio/my-account/billing/resource-limits.md) and [Data Output for Dashboards](/docs/tagoio/dashboards/data-output-for-dashboards.md).

:::

## How it works

Rate limits, or hard limits, are enforced based on your account's plan. Each account tier has different rate limits for each API resource. The maximum number of requests allowed is based on a time interval, with a retry window when requests exceed the limit.

**The limit for each request is applied every minute.** If a user reaches their rate limit during a specific minute, they must wait until the next minute for the limit to reset before making additional requests. So if you reach the maximum rate at 12:45:09 PM, the next request can only be done after 12:46:00 PM.

The system aggregates all requests performed inside a Profile for each route. Therefore, if you reach the limit for a route, all future requests to that Profile and route will be denied during the period. For some specific routes, such as the Post and Get data from devices, you can configure the rate limit for each device separately.

:::tip

Check out the [Control Tower add‑on](/docs/tagoio/addons/control-tower.md).

:::

### Request Rate Limits

The following table lists the API resources for which the hard limit applies, the corresponding endpoint route, functions associated with the route, and limits for each plan. The values are given in RPM—requests per minute.

**Maximum number of requests per minute allowed in each Profile**
| Resource | Route | Function | Free | Starter | Scale |
|---|---|---|---|---|---|
| **DEVICE** | POST /Device | Create Device | 10 | 250 | 5 000 |
| | DEL /Device/:device_id | Delete Device | 10 | 250 | 5 000 |
| | GET /device | List Devices | 50 | 100 | 500 |
| | GET /device/:device_id | Get Device | 100 | 1 000 | 5 000 |
| | GET /device/token/:device_id | Get Device Token | 100 | 1 000 | 5 000 |
| | GET /device/:device_id/data_amount | Get Device Data Amount | 100 | 1 000 | 5 000 |
| | GET /device/:device_id/chunk | Get Device Chunk | 100 | 1 000 | 15 000 |
| | GET /device/params | Get Device Params | 100 | 1 000 | 5 000 |
| | GET /device/params/:device_id | Get Device Params | 100 | 1 000 | 5 000 |
| | PUT /device/:device_id | Edit Device | 50 | 250 | 2 000 |
| | POST /device/token | Create Device Token | 50 | 250 | 2 000 |
| | DEL device/token/:token | Delete Device Token | 50 | 250 | 2 000 |
| | POST /device/:device_id/convert | Convert Device | 50 | 250 | 2 000 |
| | POST /device/:device_id/empty | Empty Device | 50 | 250 | 2 000 |
| | POST /device/:device_id/chunk/copy | Export Device Chunk | 50 | 250 | 2 000 |
| | DEL /device/:device_id/chunk/:chunk_id | Delete Device Chunk | 50 | 250 | 2 000 |
| **DATA** | GET /data | Get Device Data [*] | 250 | 5 000 | 15 000 |
| | POST /data | Send Device Data [*] | 250 | 5 000 | 15 000 |
| | PUT /data | Edit Device Data | 60 | 250 | 1 000 |
| | DEL /data | Delete Device Data | 60 | 250 | 1 000 |
| | GET /data?query=aggregate | Get Device Data with Query Aggregate | 5 | 10 | 100 |
| **ACCOUNT** | PUT /account | Edit TagoIO Account | 50 | 100 | 500 |
| | GET /account | Get TagoIO Account | 50 | 100 | 500 |
| | ... | ... | ... | ... | ... |
| **ANALYSIS** | POST /analysis | Create Analysis | 60 | 100 | 1 000 |
| | PUT /analysis/:analysis_id | Edit Analysis | 60 | 100 | 1 000 |
| | DEL /analysis/:analysis_id | Remove Analysis | 60 | 100 | 1 000 |
| | POST /analysis/:analysis_id/upload | Analysis Upload Script | 60 | 100 | 1 000 |
| | GET /analysis | Get Analysis List | 60 | 1 000 | 2 000 |
| | ... | ... | ... | ... | ... |
| **ACTION** | POST /action | Create Action | 60 | 100 | 1 000 |
| | PUT /action/:action_id | Edit Action | 60 | 100 | 1 000 |
| | DEL /action/:action_id | Remove Action | 60 | 100 | 1 000 |
| **DASHBOARD** | POST /dashboard | Create Dashboard | 60 | 100 | 1 000 |
| | PUT /dashboard/:dashboard_id | Edit Dashboard | 60 | 100 | 1 000 |
| | DEL /dashboard/:dashboard_id | Remove Dashboard | 60 | 100 | 1 000 |
| | ... | ... | ... | ... | ... |
| **FILES** | POST /files | Create Files | 60 | 100 | 200 |
| | PUT /files | Edit Files | 60 | 100 | 200 |
| | DEL /files | Remove Files | 60 | 100 | 200 |
| | ... | ... | ... | ... | ... |
| **PROFILE** | POST /profile | Create Profile | 60 | 100 | 200 |
| | PUT /profile/:profile_id | Edit Profile | 60 | 100 | 200 |
| | DEL /profile/:profile_id | Remove Profile | 60 | 100 | 200 |
| | ... | ... | ... | ... | ... |
| **NOTIFICATION** | POST /notification | Create Notification | 60 | 100 | 1 000 |
| | PUT /notification/:notification_id/:btn_id | Edit Notification | 60 | 100 | 1 000 |
| | ... | ... | ... | ... | ... |
| **RUN NOTIFICATION** | POST run/notification | Create RUN Notification | 60 | 100 | 1 000 |
| | ... | ... | ... | ... | ... |
| **RUN** | POST /run/users | Create Run User | 60 | 100 | 1 000 |
| | PUT /run/users/:user_id | Edit Run User | 60 | 100 | 1 000 |
| | ... | ... | ... | ... | ... |
| **AM** | POST /am | Create Access Management | 60 | 100 | 200 |
| | PUT /am/:am_id | Edit Access Management | 60 | 100 | 200 |
| | ... | ... | ... | ... | ... |
| **TAGS** | GET /tags/keys/:type | Get Tags Resource | 60 | 100 | 1 000 |
| **TOKEN INFO** | GET /info | Get Token Info | 60 | 5 000 | 10 000 |
| **INTEGRATION** | POST /integration/network | Create Integration Network | 60 | 100 | 500 |
| | ... | ... | ... | ... | ... |
| **AUTHORIZATION** | POST /serviceauth | Create Authorization Code | 60 | 100 | 200 |
| | ... | ... | ... | ... | ... |
| **DICTIONARY** | POST /dictionary | Create Dictionary | 60 | 100 | 200 |
| | ... | ... | ... | ... | ... |
| **TEMPLATE** | POST /template | Create Template | 60 | 100 | 100 |
| **TCORE** | POST /tcore/instance | Create TCore | 60 | 100 | 100 |
| | ... | ... | ... | ... | ... |
| **MQTT** | Publish-Publish | MQTT payload to TagoIO broker | 250 | 5 000 | 15 000 |
| | Subscribe-Receive | MQTT payload from TagoIO broker | 250 | 5 000 | 15 000 |
| | Connection-Connect to TagoIO broker | 20 | 100 | 200 |

>[*] You may also be able to adjust the limit individually **per device** depending on your plan. Check out our [Control Tower add‑on](/docs/tagoio/addons/control-tower.md).

:::tip

If, for some special reason, your requirements exceed the limits in the table, consider upgrading your plan to **[Scale](https://admin.tago.io/account/billing)**. If you are already on the Scale plan,take a look at enterprise version [TagoDeploy](https://tago.io/deploy), or please contact us through support@tago.io.

:::

## Response code

When a hard limit has been exceeded, TagoIO will return an **HTTP 429 “Too Many Requests”** error. Additionally, you can examine the response body to check the remaining retry window in seconds (`Retry-After : seconds`). The following error will be returned in the response body:

```json
{ "status": false, "message": "Too many requests (Retry-After: 8)" }
```

If you need help adapting your project to these hard limits, try our [Community](https://community.tago.io/).

## Rate limits usage monitoring

You can monitor the hard limits for each function by accessing the account menu located in the bottom left corner of your [Admin](https://admin.tago.io/limits/hard) page, hovering over "Profile & Billing" and selecting the **Hard Limits** option. If the [Control Tower](/docs/tagoio/addons/control-tower.md) add‑on is active in your account, you will have the ability to view historical and detailed statistics of your usage for Hard Limits, providing insights into your requests per minute.
