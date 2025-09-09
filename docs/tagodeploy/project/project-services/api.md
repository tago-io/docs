---
title: "API Service"
description: "Manage and scale the TagoIO API for your project, with recommended configurations and billing considerations."
tags: ["tagodeploy", "api"]
slug: /tagodeploy/project/api
---

# API Service Management

The [TagoIO API](https://help.tago.io/portal/en/kb/articles/31-api-overview)
service is a core component of your TagoDeploy Project running on AWS
infrastructure. API usage is directly tied to your project’s billing costs, as
resource consumption such as compute, memory, and network utilization impacts
your overall charges. For detailed information on how API resource usage affects
your costs and how to optimize your spending, refer to the
[TagoIO Billing and Cost Management Documentation](/tagodeploy/project/management/billing.md).

An active API instance is required for your TagoIO services to function. Without
it, none of the TagoIO platform features or integrations will be accessible.

## What is an API?

An API (Application Programming Interface) is a standardized interface that
enables different software applications to communicate and exchange data. It
defines the rules, protocols, and data formats for requests and responses,
allowing disparate systems to work together seamlessly.

Within TagoIO, [the API](https://api.docs.tago.io/#intro) acts as the central
gateway through which all services, applications, and devices interact with your
project’s data and features. Every operation relies on the availability and
performance of your API service.

## API Scaling Strategies

As your project scales with more devices, users, and automated workflows, it is
critical to ensure your API service can handle increased load. TagoIO provides
two primary approaches to scaling your API infrastructure:

- **Vertical scaling (Machine Tier)**: Increases the capacity of individual API
  server instances by allocating more CPU cores and RAM. This method is
  effective when your workload involves intensive data processing or large data
  retrieval operations, such as dashboard queries exceeding 10,000 records in a
  single request. TagoIO offers multiple machine tiers to accommodate varying
  performance needs. For advanced vertical scaling options, contact TagoIO
  support.

- **Horizontal scaling (Number of machines)**: Is the recommended strategy for
  most production environments. It involves deploying multiple API instances to
  distribute incoming requests and improve fault tolerance. This approach aligns
  with TagoIO’s cloud-native architecture and is more effective for handling
  high concurrency and bursts of activity as your device count and automation
  complexity grow.

You can configure auto-scaling conditions based on your application’s usage
patterns and performance testing. Typical triggers include CPU utilization,
memory consumption, and request rates.

## Recommended Production Configuration

For projects supporting up to 10,000 devices, TagoIO recommends the following
baseline settings for API service deployment:

- **Machine Specification:** 1 vCPU / 2GB RAM per instance
- **Instance Count:** Minimum 2 instances, maximum 5 instances
- **Auto-Scaling Thresholds:** Scale up when CPU utilization exceeds 60% for 200
  seconds; scale down when utilization falls below the threshold for 300 seconds

These settings provide a balance between performance, availability, and cost
efficiency for most production workloads.

## Monitoring CPU Metrics

CPU utilization metrics provide a time-based view of how intensively your API is
using processing resources. As the API handles incoming requests, you should
observe corresponding increases in CPU usage. Monitoring these metrics enables
you to identify peak usage periods and analyze request patterns, offering
actionable insights into when your API experiences the highest load and which
operations may be contributing most to CPU demand.

## Monitoring Memory Metrics

Memory usage metrics reflect how much data your application loads into memory
during operation. Many API operations require temporarily storing data in memory
for processing and response generation. During peak usage periods, memory
consumption typically increases due to the simultaneous processing of multiple
requests and the handling of large data payloads. Monitoring memory metrics
helps you detect scenarios where single requests or concurrent operations cause
elevated memory usage, enabling you to optimize data handling and prevent
resource exhaustion.

## Billing Considerations

Because the API service operates on AWS and resource usage directly impacts your
billing, it is important to regularly review your scaling settings and metrics.
Efficient scaling and resource allocation can significantly reduce unnecessary
costs while ensuring your project remains responsive and reliable.

For more information on billing models, usage analysis, and cost optimization
strategies, consult the
[TagoIO Billing and Cost Management Documentation](/tagodeploy/project/management/billing.md).
