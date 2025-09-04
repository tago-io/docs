---
title: "Data Output for dashboards"
description: "This article explains how dashboard data output is counted in TagoIO, the monthly output limits per plan, and what happens when you reach those limits."
tags: ["tagoio", "dashboards"]
sidebar_position: 2
---
In TagoIO, each time someone accesses data from the Dashboards using TagoIO Admin or TagoRUN, a data output is counted for each variable displayed. For example, when an end user loads a dashboard that displays 3,000 registers, that same number will be counted against your dashboard's output limit. This counter is separate from the [Data Output Service](/docs/tagoio/services/data-output-service).

The data output limit for dashboards is predefined by your plan, applied to each profile, and resets every month. If attempts are made to visualize data from your dashboards after this limit is reached, an error will occur. The table below lists the output limits for each plan.

## Dashboard output limits

| Plan    | Data Output for Dashboards (registers) |
|---------|----------------------------------------|
| Free    | 3,000,000 / month                      |
| Starter | 15,000,000 / month                     |
| Scale   | 50,000,000 / month                     |


:::warning

Data consumed by dashboards will not be counted against the [Data Output Service](../services/data-output-service). You are not billed by data output for Dashboards.

:::

## What happens when I reach the limit

When your account approaches the predefined limit, you will receive a notification suggesting an upgrade to your plan. This notification will be sent to your Admin panel and to your registered email address. Note that you cannot increase the dashboard data output limit yourself (this is different from the limit control available for the general Data Output Service).

Customers on the Scale plan can request an increase in this limit by contacting our [Sales Team](https://tago.io/contact-us) or opening a ticket through our Help Center.

### Monitoring your limit

You can monitor the amount of your dashboard's data output that has been consumed by accessing the account menu in the top right corner of your Admin panel and selecting the '[Hard Limits](https://admin.tago.io/limits/hard)' option – search for the row "**Dashboard Output**".
