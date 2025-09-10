---
title: "Resource Limits"
description: "Configure and understand project resource limits, their impact on scaling, and best practices."
tags: ["tagodeploy"]
slug: /tagodeploy/project/limits
---

Limits define the maximum consumption thresholds for specific resources
allocated to your TagoIO project profiles. These constraints are essential for
managing resource allocation, maintaining system stability, and ensuring fair
usage across all tenants within your infrastructure. By enforcing limits, the
platform protects against excessive usage that could otherwise degrade service
quality for other users or overwhelm backend components.

It is important to recognize that increasing resource limits such as raising the
number of requests your API can handle per minute, or expanding the maximum data
volume per request directly impacts the operational requirements of your API
service. Higher limits may necessitate additional computational resources,
either through vertical scaling (increasing CPU and memory per instance) or
horizontal scaling (adding more API instances). For detailed guidance on scaling
strategies and their implications, refer to the
[API Documentation](/docs/tagodeploy//project/project-services/api.md).

Before increasing Request limits, it is highly recommended to ensure that all
Analysis scripts within the profile are thoroughly optimized. Optimization
efforts should include refactoring Analysis code to eliminate unnecessary API
calls and implementing parallel queue systems to reduce strain on the API.
Addressing inefficiencies at the script level can significantly reduce peak
resource consumption, reducing the need for additional computational resources.

## Modifying Resource Limits

To update resource limits for a specific profile, follow these steps:

1. Select the relevant profile from your project dashboard.
2. Choose the edit option associated with the resource limit you wish to modify.
3. Enter the new desired limit value, taking into account the potential impact
   on system performance and infrastructure requirements.
4. Confirm and apply the changes to enforce the updated limit.

**Important:** After increasing limits, closely monitor API performance and
system metrics to ensure that your infrastructure continues to meet the demands
of your workloads. Adjust scaling configurations as needed to maintain optimal
availability and responsiveness.
