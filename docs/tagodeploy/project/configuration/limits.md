---
title: "Resource Limits"
description: "Configure resource quotas and rate limits for a profile, and understand their impact on scaling."
keywords: [tagodeploy, iot, limits, scaling, resources]
tags: ["tagodeploy"]
slug: /tagodeploy/project/limits
---

# Limits

The **Limits** page configures resource quotas and rate limits for a profile.
You find it in the TagoIO & API section, under "Limits" in the sidebar, at
`/projects/{id}/tago-io/limits`.

Limits define the maximum consumption thresholds for the resources allocated to
a profile. They keep resource use under control, maintain system stability, and
keep usage fair across tenants on shared infrastructure. By enforcing limits,
the platform protects against usage that could degrade service quality for other
users or overwhelm backend components.

Raising a limit, such as the number of API requests per minute or the maximum
data volume per request, directly affects the operational requirements of your
API service. Higher limits may call for additional resources, either through
vertical scaling (more CPU and memory per instance) or horizontal scaling (more
API instances). For guidance on scaling, see the
[API service](/docs/tagodeploy/project/project-services/api.md) page.

Before raising request limits, make sure the profile's Analysis scripts are
optimized. Refactor Analysis code to remove unnecessary API calls and use
parallel queues to reduce strain on the API. Fixing inefficiencies at the script
level can cut peak resource use and reduce the need for extra resources.

## Editing limits

1. Select an **Account** from the combobox.
2. Select a **Profile** from the combobox.
3. Once a profile is chosen, the limit groups appear. Use the "Search limits"
   box to find a specific limit, then enter the new value, taking into account
   the impact on system performance and infrastructure.
4. Click **Save** to apply the changes.

**Important:** After raising limits, monitor API performance and system metrics
to confirm your infrastructure keeps up with the workload. Adjust scaling
settings as needed to maintain availability and responsiveness.
