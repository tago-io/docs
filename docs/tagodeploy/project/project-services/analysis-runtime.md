---
title: "Analysis Runtime"
description: "Set Node.js and Python memory for the scripts that run your TagoIO analyses, and monitor invocations and duration."
keywords: [tagodeploy, iot, analysis, runtime, memory, monitoring]
tags: ["tagodeploy", "analysis"]
slug: /tagodeploy/project/analysis-runtime
---

# Analysis Runtime

The Analysis Runtime page sets the memory available to the Node.js and Python
scripts that run your
[analyses](https://help.tago.io/portal/en/kb/articles/29-analysis-overview).
Analyses are billed mainly on execution duration and the memory used during a
run, so the memory you set here affects both performance and cost.

Open the page from the **TagoIO & API** area, under **SERVICES** in the sidebar.

## Memory Configuration

The page has two configuration groups, one per runtime:

- **Node.js Runtime**: memory allocation for Node.js analysis scripts. The
  **Memory (MB)** field defaults to 512.
- **Python Runtime**: memory allocation for Python analysis scripts. The
  **Memory (MB)** field defaults to 512.

The default of 512 MB is enough for standard operations that do not run
intensive data processing. Raise it when an analysis works over large datasets
or performs heavy in-memory calculations. Higher memory increases cost, so set
only what the script needs.

Click **Save** to apply changes.

## Monitoring

The **Monitoring** section reports runtime activity. A range toggle switches the
window across 1h, 6h, 12h, 1d, 3d, 7d, and 30d. When there is no data for the
selected window, the chart shows "No data available".

### Invocations

Counts the analysis executions started in the selected window (COUNT).
Invocation trends help you read usage patterns, tune scheduling, and anticipate
scaling needs.

### Duration

Reports how long analyses take to run, in milliseconds (MS). Tracking duration
helps you find performance bottlenecks and refactor slow scripts.

## Cost and Performance

Billing follows execution duration and memory use, so:

- Review the Invocations and Duration charts to find inefficiencies or
  unexpected usage.
- Set memory per runtime to the actual needs of your scripts.
- Refactor scripts to cut execution time and avoid unnecessary data retrieval.
