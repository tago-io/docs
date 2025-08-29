---
title: "Resource Limits"
description: "This article explains TagoIO's resource limits across account plans and lists the per-plan limits for common resource types, noting that most limits apply per Profile."
tags: ["tagoio"]
---
TagoIO implements multi-tenancy as a cost‑effective, performance‑enhancing approach. This architectural choice brings many benefits but requires mechanisms to avoid service disruptions when other users sharing resources have spikes in consumption. To prevent such scenarios, TagoIO limits the number of resources individuals can create in their accounts. When these limits are reached, creating additional resources will be blocked to maintain platform stability and prevent resource exhaustion.

## Limits for each resource

The limits for each resource are determined by your specific plan. The table below shows the limits for each plan.

> **Note:** Most of the limits below are applied per [Profile](../../account/profiles).

| Resource type / Plan | Free | Starter | Scale |
|---|---:|---:|---:|
| [Actions](../../actions/) | 5 | 100 | 200 |
| [Analysis](../../analysis/) | 5 | 100 | 200 |
| [Dashboard](../../dashboards/creating-dashboard-tabs) | 5 | 100 | 1,000 |
| [Entity](entities/) | 5 | 50 | 80 |
| [Device](../../devices/) | 5 | 100 | 10,000 |
| [Profile](../../account/profiles) | 1 / account | 2 / account | 5 / account |
| [Team Member](../../account/team-management-sharing-your-profile) | 0 | 1 | 5 |
| [TagoCore](/tagocore) | 10 | 10 | 10 |
| [TagoCore Cluster](/tagocore/tagocore-cluster) | 3 | 3 | 3 |
| [Custom Connector](../../integrations/) | 3 | 20 | 50 |
| [Custom Network](../../integrations/creating-a-network-integration) | 1 | 5 | 10 |
| [Device service authorization](../../integrations/general/authorization) | 10 | 50 | 200 |
| [Access Management Policies](../../tagorun/access-management/) | 5 | 30 | 100 |
| [Dictionary & Multi-language](../../dictionaries) | 2 | 10 | 50 |

If you attempt to add additional resources after reaching your limit, a notification will be shown indicating that you have run out of available slots.

If your requirements exceed these limits, consider upgrading to the **Scale** plan or contacting us through the [Help Center](https://help.tago.io/portal/en/newticket). For more information about our plans and services, check our [Pricing Page](https://tago.io/pricing).

## Monitoring resources across your entire account

You can monitor the amount of resources you have used by accessing the account menu in the top right corner of your Admin page and selecting the **Hard Limits** option.