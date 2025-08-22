---
title: "Resource Limits"
description: "This article explains TagoIO's resource limits across account plans and lists the per-plan limits for common resource types, noting that most limits apply per Profile."
tags: ["tagoio"]
---

TagoIO implements multi-tenancy as a cost-effective, performance-enhancing approach. This architectural choice brings many benefits but requires mechanisms to avoid service disruptions when other users sharing resources have spikes in consumption. To prevent such scenarios, TagoIO limits the number of resources individuals can create in their accounts. When these limits are reached, creating additional resources will be blocked to maintain platform stability and prevent resource exhaustion.

## Limits for each resource

The limits for each resource are determined by your specific plan. The table below shows the limits for each plan.

> **Note:** Most of the limits below are applied per [Profile](../account/profiles).

| Resource type / Plan | Free | Starter | Scale |
|---|---:|---:|---:|
| [Actions](../actions/actions) | 5 | 100 | 200 |
| [Analysis](../analysis/analysis-overview) | 5 | 100 | 200 |
| [Dashboard](../dashboards/creating-dashboard-tabs) | 5 | 100 | 1,000 |
| [Entity](entities/entities) | 5 | 50 | 80 |
| [Device](../devices/devices) | 5 | 100 | 10,000 |
| [Profile](../account/profiles) | 1 / account | 2 / account | 5 / account |

If you need more details about a specific resource type, follow the corresponding link in the table (links point to each resource's documentation).