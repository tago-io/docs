---
title: "Resource Limits"
description: "This article explains TagoIO's resource limits across account plans and lists the per-plan limits for common resource types, noting that most limits apply per Profile."
tags: ["tagoio"]
---

TagoIO implements multi-tenancy as a cost-effective, performance-enhancing approach. This architectural choice brings many benefits but requires mechanisms to avoid service disruptions when other users sharing resources have spikes in consumption. To prevent such scenarios, TagoIO limits the number of resources individuals can create in their accounts. When these limits are reached, creating additional resources will be blocked to maintain platform stability and prevent resource exhaustion.

## Limits for each resource

The limits for each resource are determined by your specific plan. The table below shows the limits for each plan.

> **Note:** Most of the limits below are applied per [Profile](link-to-profile).

| Resource type / Plan | Free | Starter | Scale |
|---|---:|---:|---:|
| [Actions](link-to-actions) | 5 | 100 | 200 |
| [Analysis](link-to-analysis) | 5 | 100 | 200 |
| [Dashboard](link-to-dashboard) | 5 | 100 | 1,000 |
| [Entity](link-to-entity) | 5 | 50 | 80 |
| [Device](link-to-device) | 5 | 100 | 10,000 |
| [Profile](link-to-profile) | 1 / account | 2 / account | 5 / account |

If you need more details about a specific resource type, follow the corresponding link in the table (links point to each resource's documentation).