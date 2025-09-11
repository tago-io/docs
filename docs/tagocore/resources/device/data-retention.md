---
sidebar_position: 3
title: Data Retention
slug: /tagocore/device/data-retention
---

# Data Retention

Data Retention helps you manage storage space by automatically deleting old device data after a specified time period. This feature is useful when you don't need to keep historical data forever and want to prevent your database from growing too large with unnecessary information.

You can configure how long to keep data in two ways:

- **Forever**: Data is never automatically deleted (this is the default setting)
- **Time-based**: Automatically delete data after a specific number of days or months

Each device can have its own retention settings, giving you flexibility to keep important data longer while cleaning up less critical information more frequently.

:::tip How It Works
TagoCore checks the `created_at` timestamp of each data point to determine when it should be deleted based on your retention settings.
:::

:::info Deletion Schedule
Data cleanup runs once daily after midnight UTC time. This means data might remain visible for several hours past its retention period, depending on your local timezone.
:::
