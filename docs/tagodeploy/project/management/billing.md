---
title: "Billing Overview"
description: "Understand TagoIO billing model, cost structure, service-level analysis, and optimization strategies."
tags: ["tagodeploy", "billing"]
slug: /tagodeploy/project/bills/billing
---

# TagoIO Billing and Cost Management Documentation

The TagoIO billing system provides comprehensive cost visibility and management
capabilities for enterprise IoT deployments. Understanding your billing
structure is critical for budget planning, cost optimization, and operational
decision-making. This documentation explains how TagoIO's post-paid model works,
what drives your costs, and how to effectively manage your spending across
complex IoT infrastructure deployments.

## Understanding TagoIO's Billing Model

TagoIO operates on a post-paid consumption model that combines usage-based
pricing with a flat monthly platform fee. This approach gives you the
flexibility to scale your IoT infrastructure dynamically while maintaining
predictable baseline costs. You're charged hourly for actual resource
consumption, which means you pay only for what you use when you use it.

The billing model reflects the reality of IoT deployments where device activity,
data volumes, and processing requirements can vary significantly based on
seasonal patterns, business cycles, or operational events. Rather than forcing
you into rigid capacity tiers, TagoIO's model adapts to your actual usage
patterns.

## Cost Structure and Service Components

Your TagoIO bill consists of multiple service categories, each reflecting
different aspects of your IoT infrastructure. The billing dashboard breaks these
down into clear categories so you can understand exactly where your money is
going.

### Platform and Infrastructure Services

The **Recurring Platform License** represents your base subscription fee for
access to TagoIO's core platform capabilities. This flat fee covers platform
maintenance, security updates, and baseline support services. Think of this as
your "seat at the table" – it's what keeps your account active and gives you
access to all platform features.

**Recurring Infrastructure** charges cover the underlying compute, storage, and
networking resources that power your IoT applications. These costs scale with
your usage patterns and include the virtual machines, container orchestration,
and network bandwidth required to process your device data and serve your
applications.

## Reading Your Cost History

The cost history chart provides crucial insights into your spending patterns and
helps identify trends that impact your budget planning. The stacked bar chart
shows daily costs broken down by service category, making it easy to spot
unusual spikes or gradual increases in specific areas.

The **TagoIO Flat Fee** component should remain constant across billing periods.

The infrastructure and database components typically show the most variation, as
they directly reflect your application usage patterns. Sudden spikes in these
areas often correlate with increased device activity, data ingestion bursts, or
new application deployments.

## Service-Level Cost Analysis

The "Charges by Service" breakdown is where you'll spend most of your time
optimizing costs. This granular view shows exactly how much each service
component contributes to your total bill.

**Container Service** often represents the largest variable cost component
because it scales directly with your application workload. If this number is
growing faster than your business metrics, it might indicate inefficient
resource allocation or the need for optimization.

**Database** costs should correlate with your data growth and retention
policies. Unexpected increases here might indicate inefficient queries,
excessive data retention, or the need to archive older data to less expensive
storage tiers.

**Computing Service** charges reflect the intensity of your data processing
workflows. Optimization opportunities here include batching operations,
optimizing algorithms, or moving infrequent processing to scheduled jobs rather
than real-time execution.

## Billing Period Management

TagoIO bills monthly, with each billing period running from the first to the
last day of the month. The estimated bill summary shows projected costs based on
current usage patterns, but remember that actual costs may vary based on usage
changes throughout the month.

The billing system aggregates charges from multiple service providers –
primarily Amazon Web Services for infrastructure components and TagoIO for
platform-specific services. This separation helps you understand which costs are
infrastructure-related versus platform feature usage.

## Cost Optimization Strategies

Understanding your bill is the first step toward optimizing costs. Look for
patterns in your usage that might indicate optimization opportunities. For
example, consistent high database costs might justify investing in query
optimization or data archiving strategies.

Consider the relationship between different service costs. High API usage
combined with high computing costs might indicate opportunities to batch
operations or implement caching strategies. Similarly, high container costs with
low database usage might suggest over-provisioned compute resources.
