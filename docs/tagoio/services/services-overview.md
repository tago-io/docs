---
title: "Services Overview"
description: "A concise overview of the services available in TagoIO, how usage is measured, and where to view limits and history for each service."
tags: ["tagoio"]
---
## Overview

TagoIO offers a broad range of services that can be provisioned according to your application's needs. By selecting which services each profile will use during the month, you can track usage and know exactly how much you will be charged.

You can view limits and usage history for each service in the Usage Statistics tab, located under the Profiles section of your TagoIO account. If you have more than one profile, you must allocate the resources for each profile (see [Allocating Services to profiles](../services/allocating-services-to-profiles)).

Currently, the following services are available for selection on your account. Some services are reset monthly.

## Services and Usage

| Service | Unit | Usage counted | Definition |
|---|---:|---|---|
| Data Input | Variable | Monthly | Each variable sent by your devices or posted to the Device's data storage. |
| Data Output | Variable | Monthly | Each variable received by your devices or retrieved ('get') from the Device's data storage. |
| Data Storage | Variable | Maximum at any time | Each variable stored in a Device. |
| File Storage | Size (MB) | Maximum at any time | Total aggregate size of all files stored in the Files module. |
| Analysis for Scripts | Execution time | Monthly | Total script runtime executed by the Analysis module (minimum 1 second). |
| Push Notifications | Message | Monthly | Messages sent out. |
| E-mail | Message | Monthly | Messages sent out. |
| SMS | Message | Monthly | Messages sent out. |
| End user (RUN user) | User | Maximum at any time | End users registered in your RUN applications. |

**Service Alerts**  
TagoIO will send warning emails and push notifications when a service usage exceeds 80%, 90%, or 100% of the limit set for a specific profile. This helps you stay informed before reaching your quota.

## Where to view usage

- Usage limits and history: see the Usage Statistics tab under the Profiles section in your TagoIO account (refer to [Usage Statistics](../account/profiles#usage-statistics)).
- To assign services per profile: see [Allocating Services to profiles](../services/allocating-services-to-profiles).

## Related documentation

- See [Profile](../account/profiles) for profile configuration and management.
- Services reference:
  - [Analysis Service](../services/analysis-service)
  - [Data Input Service](../services/data-input-service)
  - [Data Output Service](../services/data-output-service)
  - [E-mail Service](../services/e-mail-service)
  - [End-Users service](../services/end-users-service)
  - [File storage service](../services/file-storage-service)
  - [Notification Service](../services/notification-service)
  - [SMS Service](../services/sms-service)
- Other helpful articles:
  - [Analysis Overview](../analysis/analysis-overview)
  - [Profiles](../account/profiles)
  - [Defining Actions](../actions/actions)
  - [Dashboard Overview](../dashboards/dashboard-overview)

<!-- Image placeholder removed for build -->