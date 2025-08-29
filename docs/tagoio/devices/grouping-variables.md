---
title: "Grouping variables"
description: "This article explains how to synchronize multiple variables sent by a device using the JSON \"group\" field so they can be visualized together (for example, in tables or maps). It describes the problem with mismatched timestamps and how to use grouped samples to keep related variables in sync."
tags: ["tagoio"]
---
It is expected that most [devices](/docs/tagoio/devices/) will send more than one variable at a given time. When visualizing the data, users often want those variables synchronized for each sample period.

For example, a device may send GPS location, speed, and voltage variables at a certain frequency. If those variables are acquired and sent with exactly the same timestamp, the user can visualize all three together at each time sample. However, if there is any delay between them (timestamps of the variables do not match exactly), the system cannot group them correctly "by time".

To solve this, include a `group` field in the JSON for each sample. A batch of acquired variables can be synced by adding the same `group` value to their samples. For example:
- The first acquisition could have `group = 0001` for GPS location, speed, and voltage.
- The second acquisition could have `group = 0002`, and so on.

When visualizing these batches of data combined in a Table or Map, select the option "Group by group" to view variables grouped by their `group` value rather than by timestamp.

To learn how to add the `group` field in the JSON, see the [API documentation](https://docs.tago.io/api/).