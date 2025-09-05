---
title: "In-Memory Database"
description: "Overview of the distributed in-memory database for caching, queues, and real-time data, including scaling and monitoring."
tags: ["tagodeploy"]
slug: /tagodeploy/project/in-memory-database
---

# In-Memory Database

The in-memory database in TagoIO aggregates all in-transit memory resources
across multiple active API instances. This system is fundamental to real-time
data processing, high-performance caching, and robust message queuing between
APIs and microservices. By utilizing distributed in-memory queues, TagoIO
prevents service overload and ensures that critical information is retained and
processed, even during failures or traffic spikes. This architecture enables
low-latency data delivery and high availability, supporting demanding enterprise
use cases.

## Key Use Cases

### Real-Time Data Transmission

The in-memory database plays a critical role in real-time data delivery. For
example, it enables instantaneous updates to dashboards as soon as new
information becomes available, ensuring users always see the most current data
without delay.

### Caching System

TagoIO implements a robust caching mechanism via the in-memory database to
optimize performance for high-frequency requests. Common use cases include token
authentication and other repetitive queries, where cached responses
significantly reduce latency and backend load.

## Scaling the In-Memory Database

The in-memory database can be scaled to meet your project’s performance and
reliability requirements, using two primary strategies:

- **Vertical scaling (Machine Tier)**: Involves increasing the CPU and memory
  resources allocated to each in-memory database instance. This approach is
  effective for handling extreme data ingestion peaks or supporting dashboards
  configured to display large volumes of real-time data.

- **Horizontal scaling (Number of machines)**: Adding reader replicas introduces
  additional read-only instances to the in-memory database cluster. This
  configuration distributes read operations, alleviating load on the primary
  instance and improving performance for applications with heavy read access
  patterns.

## Recommended Production Configuration

For most production environments, TagoIO recommends the following baseline
settings:

- **Reader Replicas:** 1 reader replica
- **Machine Specifications:** 2 vCPU / 4GB RAM per instance

## Monitoring and Metrics

Effective monitoring of the in-memory database is essential for maintaining
performance and optimizing resource allocation. Key metrics include:

### Cache Hits

This metric tracks the number of successful cache retrievals over time,
indicating how effectively the cache is serving repeated requests and reducing
backend workload.

### Network Inbound/Outbound

These metrics measure the volume of data, in bytes, transmitted to and from the
in-memory database. Monitoring network throughput helps identify bottlenecks and
ensures the system is sized appropriately for real-time and high-throughput use
cases.

By understanding and configuring your in-memory database according to these
guidelines, you can ensure robust, low-latency data delivery and high
availability for all TagoIO services.
