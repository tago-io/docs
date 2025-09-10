---
title: "Main Database"
description: "Configure backups, scaling, and monitoring for the primary database that stores your TagoIO data."
tags: ["tagodeploy"]
slug: /tagodeploy/project/main-database
---

# Main Database

The **Database instance** is responsible for storing and maintaining all your
TagoIO data, including profile configurations and device data. If the database
becomes unavailable, the API will not be able to retrieve stored data, which
directly impacts all project functionalities.

## Backup & Scaling

### Backup Scheduling

Regular backups are essential to prevent data loss or corruption. You can
configure automated backups to run at intervals aligned with your operational
needs. Each backup is preserved based on a defined **retention period**, which
controls how long it's stored before deletion—allowing a balance between data
protection and storage management.

For detailed instructions, refer to the [Backups](/docs/tagodeploy/project/management/backups.md) guide.

## Automatic Backup Process

Backups are created automatically every day to ensure consistent data protection
and contain the following key features:

- **Daily Schedule**: Backups run automatically on a daily basis
- **Configurable Timing**: You can select the specific time of day for backup
  creation
- **Automatic Cleanup**: Backups are automatically deleted after a configurable
  number of days to manage storage usage
- **Retention Settings**: The retention period can be customized based on your
  needs

### Scaling Your Database

As application demand grows, you may need to scale the database to handle
increased read/write operations:

- **Vertical Scaling (Machine Tier)**: Upgrade your database instance with more
  CPU and RAM. This is useful when handling large data submissions or high
  write/update activity.
- **Horizontal Scaling (Reader Instances)**: Add read-only instances to improve
  performance on read-heavy operations and increase overall service
  availability.

## Monitoring & Performance

To ensure stability and diagnose issues, monitor the following key metrics:

**CPU Utilization**: As data is read from or written to the database, CPU
resources are consumed to process the data and execute all associated database
pipeline operations, including data validation, transaction management, and
integrity checks. CPU utilization may exhibit significant spikes during
resource-intensive queries, such as aggregate operations that calculate daily
averages over an entire month. Similarly, update operations involving large
entity or device datasets can also result in noticeable CPU usage peaks.

**Freeable Memory**: This parameter represents the amount of memory currently
available to the database instance. By default, the database attempts to cache
frequently used queries, utilizing approximately 90% of the freeable memory. As
new queries are cached, the system automatically evicts older cache entries to
make room for newer ones. If the database instance is consistently consuming all
available memory, this typically indicates that the volume or complexity of
incoming requests exceeds the database’s ability to efficiently manage cache
eviction and allocation. In such cases, performance may degrade as the database
struggles to balance memory usage between active queries and cache management.

**Database Connections**: Displays the number of active connections to your
database, including connections from API instances and other services that
communicate with the database.

**Read/Write IOPS**: Displays the number of input and output operations
performed each second. When investigating spikes in CPU or memory usage,
correlating these peaks with read and write operation metrics at the same
timestamps can help identify potential causes. Monitoring IOPS alongside
resource utilization provides insight into whether increased disk activity is
contributing to observed performance issues.

**Network Throughput**: Displays the volume of data in bytes transmitted to and
from the database.

## Recommended Production Configuration

For environments supporting up to **10,000 devices**, the following setup is
recommended:

- **Machine**: 2 vCPU / 4GB RAM
- **Reader Instances**: 1
- **Backup Retention Period**: 7 days
