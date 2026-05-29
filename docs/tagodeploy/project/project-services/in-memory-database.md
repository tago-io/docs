---
title: "In-Memory Database"
description: "Set the cache machine size and read replicas for the in-memory database, and monitor cache and network metrics."
keywords: [tagodeploy, iot, in-memory database, caching, scaling, monitoring]
tags: ["tagodeploy"]
slug: /tagodeploy/project/in-memory-database
---

# In-Memory Database

The in-memory database aggregates in-transit memory across active API instances.
It handles real-time data processing, high-frequency caching, and message
queuing between APIs and microservices. Distributed in-memory queues keep
critical information retained and processed during failures or traffic spikes,
which keeps data delivery low-latency and the service available.

This page sets the cache machine size and read replicas. Open it from the
**TagoIO & API** area, under **SERVICES** in the sidebar.

## Cache Settings

The **Cache settings** section configures machine type and read replicas:

- **Machine**: the machine type for the cache. Default is 2 vCPU / 1GB RAM.
- **Additional reader replicas**: read-only instances added to the cluster.
  Default is 0.

Click **Save** to apply changes.

## Key Use Cases

### Real-Time Data Transmission

The in-memory database carries real-time data delivery. For example, it updates
dashboards as soon as new information arrives, so users see current data without
delay.

### Caching System

TagoIO caches high-frequency requests through the in-memory database. Common
cases include token authentication and other repeated queries, where cached
responses cut latency and backend load.

## Scaling the In-Memory Database

Scale the in-memory database to meet your project's performance and reliability
needs using two strategies:

- **Vertical scaling (Machine)**: move to a machine type with more CPU and
  memory. This helps with data ingestion peaks or dashboards that display large
  volumes of real-time data.
- **Horizontal scaling (reader replicas)**: add read-only instances to the
  cluster. This spreads read operations, eases load on the primary instance, and
  improves performance for read-heavy access patterns.

## Recommended Production Configuration

For most production environments, this baseline is a good starting point:

- **Machine**: 2 vCPU / 4GB RAM
- **Additional reader replicas**: 1

## Monitoring

The **Monitoring** section has a range toggle across 1h, 6h, 12h, 1d, 3d, 7d,
and 30d. Charts show "No data available" until there is data for the window. The
following metrics are available:

- **CPU Utilization (%)**: how intensively the cache uses processing resources.
- **Freeable Memory (BYTES)**: the memory currently available to the cache
  instance.
- **Cache Hits (COUNT)**: successful cache retrievals over time, a read on how
  well the cache serves repeated requests and reduces backend load.
- **Network Inbound (B/S)** and **Network Outbound (B/S)**: the volume of data,
  in bytes per second, transmitted to and from the in-memory database. Use these
  to find bottlenecks and check the instance is sized for your throughput.
