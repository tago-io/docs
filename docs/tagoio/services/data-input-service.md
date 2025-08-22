---
title: "Data Input Service"
description: "This article explains how TagoIO counts Data Input Transactions when devices send data, and where to view limits and usage history for each Profile. It also reminds you to estimate your monthly transaction volume."
tags: ["tagoio"]
---
Each time a device sends data to TagoIO, the system counts one Data Input Transaction for each variable included in that payload.

These data input transactions are accounted against the Profile where your devices are located.

> Note: You should estimate the maximum number of transactions per month to ensure your Profile has sufficient capacity.

## Viewing limits and usage history
You can visualize the limits and usage history of each service in the Profile tab, located under the [Profiles & Teams](../account/profiles) section of your account.

![Image 1](https://help.tago.io/galleryDocuments/edbsndab4798ca176c007187334dfe916a5f1f2ad8b3513e461b736204cca392b8a381af5bf0d0f1d0155cf0e22b328e8072d?inline=true)

### Data Input (limit per month)
You should select a limit that you are sure your application will not exceed during a period of one month. When a profile hits its limit, inputs will be blocked up until the next counting cycle.

> TagoIO will deny requests from any devices linked to the Profile that is blocked.

*   Example: If your device sends the registers `temperature` and `humidity` in the same post every 2 minutes, the usage of Data Input Transactions will be:
    ```text
    2 (registers) * 30 (requests per hour) = 60/hour
    60 * 720 = 43,200 transactions/mo
    ```
    Multiply the previous number by the number of devices and you will have the total number of data input transactions per month.

![Image 2](https://static.zohocdn.com/zoho-desk-editor/static/images/info.png)

Rate limits are applied to a wide range of interactions within the platform, including data sent from IoT devices via network protocols (MQTT, LoRaWAN, HTTP). Read more about our [Rate Limits](https://help.tago.io/portal/en/kb/articles/rate-limits).