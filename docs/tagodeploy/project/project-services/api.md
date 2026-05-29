---
title: "API Service"
description: "Set the machine size and autoscaling for the TagoIO API service, and monitor CPU and memory."
keywords: [tagodeploy, iot, api, scaling, monitoring, autoscaling]
tags: ["tagodeploy", "api"]
slug: /tagodeploy/project/api
---

# API Service

The [TagoIO API](https://help.tago.io/portal/en/kb/articles/31-api-overview)
service is the central gateway through which services, applications, and devices
reach your project's data and features. Every operation depends on it, so an
active API instance is required for the rest of the platform to work.

This page sets the machine size and autoscaling for incoming API requests. API
usage is tied to your billing costs, since compute, memory, and network use
drive your charges. See the
[Bills](/docs/tagodeploy/project/management/billing.md) page for how that adds
up.

Open the page from the **TagoIO & API** area, under **SERVICES** in the sidebar.

## Instance Settings

The **Instance settings** section configures machine type, scaling, and cooldown
parameters:

- **Machine**: the machine type for each instance. Default is 1 vCPU / 2GB RAM.
- **Minimum instances**: the lowest number of instances kept running. Default
  is 1.
- **Maximum instances**: the highest number autoscaling can reach. Default is 1.
- **Scale on CPU utilization**: the CPU percentage that triggers scaling.
  Default is 60.
- **Cooldown for scaling up**: seconds to wait before adding instances again.
  Default is 200.
- **Cooldown for scaling down**: seconds to wait before removing instances.
  Default is 300.

Click **Save** to apply changes.

## Scaling Strategies

As the project grows with more devices, users, and automated workflows, the API
service has to handle more load. There are two ways to scale it:

- **Vertical scaling (Machine)**: raise the CPU and RAM of each instance with a
  larger machine type. This helps with intensive data processing or large
  retrievals, such as dashboard queries returning more than 10,000 records in a
  single request. For machine types beyond the listed options, contact TagoIO
  support.
- **Horizontal scaling (instances)**: raise the minimum and maximum instance
  counts so requests spread across more instances. This is the better fit for
  high concurrency and traffic bursts, and it improves fault tolerance.

Autoscaling adds and removes instances between the minimum and maximum based on
the CPU threshold and the two cooldown windows.

## Monitoring

The **Monitoring** section has a range toggle across 1h, 6h, 12h, 1d, 3d, 7d,
and 30d. Charts show "No data available" until there is data for the window.

- **CPU Utilization (%)**: how intensively the API uses processing resources.
  Use it to spot peak periods and the operations driving the highest load.
- **Memory Utilization (%)**: how much data the API holds in memory while
  serving requests. Use it to catch requests or concurrent operations that push
  memory high, then tune data handling.

## Billing Considerations

Because the API runs on AWS and resource use drives billing, review the instance
settings and the monitoring charts regularly. Tighter scaling settings cut
unnecessary cost while keeping the project responsive.

For billing models, usage analysis, and cost details, see the
[Bills](/docs/tagodeploy/project/management/billing.md) page.
