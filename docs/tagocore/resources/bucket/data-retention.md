---
sidebar_position: 3
title: Data Retention
slug: /tagocore/bucket/data-retention
---

# Data Retention

The Data Retention feature gives the option for developers to automatically remove data from a [Bucket](/tagocore/bucket) after a defined period of time. The goal is to avoid storing unnecessary data that doesn't need to be kept for a long period of time.

You can set the retain data to **Forever**, which means that the data in that Bucket will never be deleted automatically, or you can set retention period to **days** or even **months**.

Data Retention is configurable for each Bucket and by default it is set to **Forever**.

:::tip
TagoCore uses the field `created_at` of each data point as the basis to make the decision of the retention period.
:::

:::info Good to know
Data is removed once a day by a task that runs daily after midnight in the UTC time zone. Therefore, data in your Bucket can still be presented for several hours after the period crosses the 00:00h in your local time.
:::
