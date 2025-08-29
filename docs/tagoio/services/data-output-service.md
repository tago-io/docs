---
title: "Data Output Service"
description: "This article explains how Data Output transactions are counted in TagoIO, how to set monthly Data Output limits per Profile, and how different actions (including dashboard downloads and device exports) affect those limits."
tags: ["tagoio"]
---
One transaction of Data Output is counted for each register read from a [device's](/docs/tagoio/devices/) data storage. Learn more in [Getting Data](/docs/tagoio/devices/data-management/data-export).

You need to define the **Data Output limit per month** for each Profile where your applications are running.

## Example calculation

If a device reads one variable and the response contains 100 registers every 10 minutes (100 temperature data points), the operations will be:

- 100 registers × 6 reads per hour = 600 transactions per hour  
- 600 transactions per hour × 720 hours per month = 432,000 transactions per month

## Limits and behavior

> **Warning:** If the limit is exceeded, any attempt to read data (GET) will be denied for the rest of the month.

Accessing data from dashboards — including downloading a .csv file from widgets — does **not** count toward the general Data Output limit. Instead, dashboards consume a separate Data Output limit specifically for dashboards. For more details, see [Data Output for Dashboards](../services/data-output-for-dashboards).

The system will also count Data Output when using the function "Export Data" from the [Device](/docs/tagoio/devices/).

> **Note:** Request limits are applied to a wide range of interactions within the platform, including activities such as reading and exporting data. Read more about our [Rate Limits](../rate-limits-hard-limits).