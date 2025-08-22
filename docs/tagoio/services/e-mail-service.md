---
title: "E-mail Service"
description: "This article explains how TagoIO counts Email usage, monthly limits and warnings, and the end of TagoIO's native E-mail service (effective January 1, 2025). It also points to alternatives and related documentation."
tags: ["tagoio"]
---

## Overview

Each time an Email is successfully sent by the [Action](../actions/actions) or [Analysis](../analysis/analysis-overview) function, it is counted as one unit. This limit defines the maximum number of Emails that can be sent from that [Profile](../account/profiles) during a one-month period. Unused Emails in a billing cycle will not be carried over to the next cycle.

## Important notice

Attention: As anticipated last year, starting on January 1st, 2025, TagoIO will no longer offer native E-mail services. You can still send E-mails by integrating with external providers such as AWS SES directly. Read more: [External Email Integration Guide](https://docs.tago.io/api/external-integrations/email).

## Limits and warnings

- If the monthly Email limit for a Profile is exceeded, no Email will be sent from that Profile until either the limit is increased or the billing period ends.
- TagoIO will send warning Emails each time a service reaches 80%, 90%, and 100% of its limit.

## More information

More information, examples, and FAQs can be found on the [Pricing Page](https://tago.io/pricing).

## Related documentation

- [Services Overview](../services/services-overview)
- [Analysis Service](../services/analysis-service)
- [Data Input Service](../services/data-input-service)
- [Data Records](../services/data-records-service)
- [Data Output Service](../services/data-output-service)
- [E-mail Service](#) (this article)
- [End-Users Service](../services/end-users-service)
- [File Storage Service](../services/file-storage-service)
- [Notification Service](../services/notification-service)
- [SMS Service](../services/sms-service)

Related articles:
- [SMS Service](../services/sms-service)
- [Notification Service](../services/notification-service)
- [Services Overview](../services/services-overview)
- [Running Analysis via Action](../actions/running-analysis-via-action)
- [Defining Actions](../actions/actions)