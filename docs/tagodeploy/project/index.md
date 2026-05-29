---
title: "Project Overview"
description: "Read the Project Overview page: project status, resource usage, spend, and recent activity."
keywords: [tagodeploy, iot, project, overview, management]
tags: ["tagodeploy"]
slug: /tagodeploy/project/overview
---

# Project Overview

The **Overview** page is the first page in a project's Management section. It
shows project status, resource usage, spend, and recent activity at a glance.
Open it from the Management sidebar at
`/projects/{id}/management/overview`.

## Project status

The project card shows the project avatar, name, and a status badge (for
example, "Deploying"). It also lists:

- **Version**: the platform version the project runs, shown as a date.
- **Created**: the date the project was created.
- **Region**: the region the project runs in, for example `us-east-1`.

## Domains

The Domains panel lists the project's service URLs, such as TagoIO API, TagoIO
Admin, and TagoIO SSE, each in the form
`https://{service}.{id}.tagoio.net`. Every row has a Copy URL action. Use the
"View all domains" link to open the full
[Domains](/docs/tagodeploy/project/management/domains.md) page.

## Spend

The Month-to-Date Spend card shows the current dollar amount, a comparison
against last month's pace, and a daily spend chart with a month toggle. For the
full cost breakdown, open the
[Bills](/docs/tagodeploy/project/management/billing.md) page.

## Monitoring

Two charts track resource usage:

- **CPU Utilization - TagoIO**: series for API, Main Database, and In-Memory
  Database.
- **CPU & Memory Utilization - MQTT**: CPU and Memory series.

Both charts support time ranges of 1h, 6h, 12h, 1d, 3d, 7d, and 30d. When no
metrics exist yet, the chart shows "No data available".

## Recent activity

The History and Logs sections show recent project activity. Until a project
produces output, the Logs section shows an empty state.

When you have pending changes, a floating "Review & Deploy" button appears so
you can review and apply the queued deployment.
