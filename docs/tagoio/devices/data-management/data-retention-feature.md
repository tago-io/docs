---
title: "Data Retention Feature"
description: "This article explains TagoIO's Data Retention feature, how to configure its Period and Retention fields, and important limits and behaviors to consider when using Immutable (optimized) device data."
tags: ["tagoio"]
---
## Overview

The Data Retention feature automatically removes old data from Immutable devices after the period you define. Its purpose is to help customers avoid unnecessary costs by deleting data that does not need to be kept long-term.

:::info

The Data Retention feature is available only for [Optimized Device Data (Immutable)](/docs/tagoio/devices/).

:::

## Selecting Data Retention

To configure Data Retention, you must select two fields:
- **Period** — the chunk period for retaining data (for example, Daily or Monthly).
- **Retention** — how many of those periods to keep the data.

These two fields are combined to create the device’s data retention policy.

<!-- Image placeholder removed for build -->

UI helper text shown in the configuration:
- This selection limits the storage for this device to 1 Million data registers per month (you cannot change this Period). But you can always edit the Retention from 0 to 36 months.
- The retention starts considering the current period — if you select “0” months it will delete all data when a new month starts.

## Period

The **Period** field lets you choose the time chunk used to retain data (for example, Daily or Monthly). In combination with the Retention field, it defines how long data should be kept on your device.

Examples and important considerations:
- Setting Period to *Monthly* allows storing up to 1 Million data registers per month.
- Setting Period to *Daily* allows storing up to 1 Million data registers per day.
- You cannot change the Period field later on, so choose it carefully.
- Retention can be edited between 0 and 36 months. Selecting 0 months will delete all data when the next period starts.

### Retention ranges by period

| Period     | Retention range |
|------------|-----------------|
| Daily      | 0–31            |
| Weekly     | 0–26            |
| Monthly    | 0–36            |
| Quarterly  | 0–36            |

Each period chunk is limited to **1 Million registers**.  
The retention feature keeps data for the selected retention *plus* the data in the current period.

### How it works

The removal schedule depends on the chosen Period:

- **Daily** – starts removing old data every day at 00:00 UTC.
- **Weekly** – starts removing old data every Monday at 00:00 UTC.
- **Monthly** – starts removing old data on the first day of each month at 00:00 UTC.
- **Quarterly** – starts removing old data every three months at 00:00 UTC, starting from January 1st.

Data is removed by a task that runs at these times. Therefore, data in your device can still be presented for several hours after the period crosses 0:00 h in your local time.

## SDK

You can also access the data retention parameters using our [SDK](https:/js.sdk.tago.io/classes/_internal_.Devices.html#create).
