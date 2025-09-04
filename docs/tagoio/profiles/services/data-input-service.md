---
title: "Data Input Service"
description: "This article explains how TagoIO counts Data Input Transactions when devices send data, and where to view limits and usage history for each Profile. It also reminds you to estimate your monthly transaction volume."
tags: ["tagoio"]
---
Each time a device sends data to TagoIO, the system counts one Data Input Transaction for each variable included in that payload.

These data input transactions are accounted against the Profile where your devices are located.

:::tip

You should estimate the maximum number of transactions per month to ensure your Profile has sufficient capacity.

:::

### Data Input (limit per month)
You should select a limit that you are sure your application will not exceed during a period of one month. When a profile hits its limit, inputs will be blocked up until the next counting cycle.

*   Example: If your device sends the registers `temperature` and `humidity` in the same post every 2 minutes, the usage of Data Input Transactions will be:
    ```text
    2 (registers) * 30 (requests per hour) = 60/hour
    60 * 720 = 43,200 transactions/mo
    ```
Multiply the previous number by the number of devices and you will have the total number of data input transactions per month.

:::warning

TagoIO will deny requests from any devices linked to the Profile that is blocked.

:::

:::note

Rate limits are applied to a wide range of interactions within the platform, including data sent from IoT devices via network protocols (MQTT, LoRaWAN, HTTP). Read more about our [Rate Limits](/docs/tagoio/profiles/services/rate-limits-hard-limits).

:::

## Viewing limits and usage history
You can visualize the limits and usage history of each service in the Profile tab, located under the [Profiles & Teams](https://admin.tago.io/profile) section of your account.

![Image 1](/docs_imagem/tagoio/external-f4bf5eb6.png)