---
title: "E-mail Service"
description: "This article explains how TagoIO counts Email usage, monthly limits and warnings, and the end of TagoIO's native E-mail service (effective January 1, 2025). It also points to alternatives and related documentation."
tags: ["tagoio"]
---

Each time an Email is successfully sent by the [Action](/docs/tagoio/actions/) or [Analysis](/docs/tagoio/analysis/) function, it is counted as one unit. This limit defines the maximum number of Emails that can be sent from that Profile during a one-month period. Unused Emails in a billing cycle will not be carried over to the next cycle.



:::warning

As anticipated last year, starting on January 1st, 2025, TagoIO will no longer offer native E-mail services. You can still send E-mails by integrating with external providers such as AWS SES directly. Read more: [External Email Integration Guide](https://api.docs.tago.io/external-integrations/email).

:::

## Limits and warnings

- If the monthly Email limit for a Profile is exceeded, no Email will be sent from that Profile until either the limit is increased or the billing period ends.
- TagoIO will send warning Emails each time a service reaches 80%, 90%, and 100% of its limit.
