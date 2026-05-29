---
title: "Bills"
description: "Read the Bills page: monthly cost breakdown, charges by service, payment status, and spend trends."
keywords: [tagodeploy, iot, billing, cost management, pricing]
tags: ["tagodeploy", "billing"]
slug: /tagodeploy/project/bills/billing
---

# Bills

The **Bills** page shows the monthly cost breakdown, charges, and payment status
for a project. Open it from the Management sidebar at
`/projects/{id}/management/bills`. Use the "Filter by app" and "Period"
comboboxes at the top to scope what the page shows.

TagoIO uses a post-paid consumption model with a flat monthly platform license.
You are charged for actual resource use, so costs track your device activity,
data volumes, and processing as they change.

## KPI cards

Three cards summarize current spend:

- **Month-to-date**: spend so far this period and the change against last month.
- **Avg / Day**: the daily average, based on the number of days in the period.
- **Last Month**: the previous month's total.

## Bill summary

The Bill Summary shows the period total along with **Status** (the current
cycle), **Payment**, and **Due** (the estimated due date).

## Cost history

The Cost History chart breaks daily spend down by service in a stacked chart.
Each service has a toggle so you can show or hide it. The services are:

- **Network**
- **Files**
- **Platform License**
- **Infrastructure**
- **Main DB**
- **Queue**
- **Analysis**
- **In-Memory DB**
- **API**
- **Apps**

The Platform License is your flat subscription fee for access to the platform.
It stays constant across periods. Infrastructure and Main DB usually show the
most variation, since they track application usage directly. Spikes there often
line up with increased device activity, data ingestion bursts, or new
deployments.

## Daily spend and top services

The Daily Spend chart covers the selected period with a 7d, 14d, or MTD range
toggle. The By Service chart ranks the top services by cost.

## Charges by service

The Charges by Service section lists each service with its amount for the period
and a Total row. Use it to see exactly how much each service contributes to the
bill. If a service is growing faster than your business metrics, it can point to
inefficient resource allocation. For example, high API and Analysis costs
together can indicate room to batch operations or add caching.

## Billing periods

TagoIO bills monthly, with each period running from the first to the last day of
the month. The bill summary is an estimate based on current usage, so the final
amount can change as usage shifts through the month.
