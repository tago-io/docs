---
title: "Main Database"
description: "Configure the machine, reader instances, and backups for the primary database that stores your TagoIO data."
keywords: [tagodeploy, iot, database, backups, monitoring, scaling]
tags: ["tagodeploy"]
slug: /tagodeploy/project/main-database
---

# Main Database

The Main Database stores and maintains all your TagoIO data, including profile
configurations and device data. If it becomes unavailable, the API cannot
retrieve stored data, which affects every project feature.

This page configures the primary database. Open it from the **TagoIO & API**
area, under **SERVICES** in the sidebar.

## Database Settings

The **Database settings** section configures machine type, read replicas, and
backup parameters:

- **Machine**: the machine type for the database. Default is 2 vCPU / 4GB RAM.
- **Additional reader instances**: read-only instances added alongside the
  writer. Default is 0.
- **Backup retention period (days)**: how many days each backup is kept before
  deletion. Default is 7.
- **Daily backup schedule**: the time of day, in UTC, when the daily backup
  runs. Default is 04:30.

Click **Save** to apply changes.

## Backups

Backups run automatically once a day at the scheduled time and are kept for the
retention period, then deleted to manage storage. The schedule and retention are
set here; existing snapshots are listed on the
[Backups](/docs/tagodeploy/project/management/backups.md) page.

## Scaling Your Database

As demand grows, you may need to scale the database to handle more read and
write operations:

- **Vertical scaling (Machine)**: move to a machine type with more CPU and RAM.
  This helps with large data submissions or high write and update activity.
- **Horizontal scaling (reader instances)**: add read-only instances to spread
  read-heavy operations and improve availability.

## Monitoring

The **Monitoring** section has a range toggle across 1h, 6h, 12h, 1d, 3d, 7d,
and 30d. Charts show "No data available" until there is data for the window. The
following metrics are available:

**CPU Utilization (%)**: As data is read from or written to the database, CPU
resources are consumed to process the data and execute all associated database
pipeline operations, including data validation, transaction management, and
integrity checks. CPU utilization may exhibit significant spikes during
resource-intensive queries, such as aggregate operations that calculate daily
averages over an entire month. Similarly, update operations involving large
entity or device datasets can also result in noticeable CPU usage peaks.

**Freeable Memory (BYTES)**: the memory currently available to the database
instance. By default the database caches frequently used queries, using around
90% of freeable memory, and evicts older entries to make room for newer ones.
Consistently consuming all available memory usually means request volume or
complexity exceeds what the cache can manage, and performance may degrade.

**Database Connections (COUNT)**: the number of active connections to the
database, including connections from API instances and other services.

**Read IOPS** and **Write IOPS**: the number of input and output operations per
second. When investigating CPU or memory spikes, lining these up against IOPS at
the same timestamps helps tell whether disk activity is driving the issue.

**Network Throughput (B/S)**: the volume of data, in bytes per second,
transmitted to and from the database.

## Recommended Production Configuration

For environments supporting up to **10,000 devices**, this baseline is a good
starting point:

- **Machine**: 2 vCPU / 4GB RAM
- **Additional reader instances**: 1
- **Backup retention period**: 7 days
