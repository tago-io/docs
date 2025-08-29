---
title: "SMS Service"
description: "This article explains how SMS units are counted and billed in TagoIO, outlines limits and country coverage, and provides important notices about service discontinuation and short-number behavior."
tags: ["tagoio"]
---
## Overview
Each time an SMS message is successfully sent by an [Action](../actions/) or [Analysis](/docs/tagoio/analysis/) function, it is counted as one SMS unit. The service limit defined inside each [Profile](../account/profiles) determines the maximum number of SMS messages that can be sent during a one-month period (based on your billing cycle).

> **Attention — Service discontinuation (effective November 1st, 2024):**  
> As anticipated last year, starting on **November 1st, 2024**, TagoIO will no longer offer built-in SMS services. You can still send SMS by integrating directly with external providers such as Twilio or AWS. See [External SMS Integration Guide](https://docs.tago.io/api/external-integrations/sms).

Each SMS unit is limited to 140 characters.

## Limits and billing
> **Note:** If the SMS service limit is exceeded, no SMS for that Profile will be sent until the limit is increased or the billing period ends.

- SMS pricing is only valid for: United States, Australia, Germany, United Kingdom, Canada, Mexico, Brasil, Colombia, Japan, and Chile. For other countries, contact us.
- SMS messages not used during the period will not be carried over to the next month.
- For more information on pricing and FAQs, see the [Pricing Page](https://tago.io/pricing/).

## Short-number behavior
> **Info:** The short number used to send messages is randomly selected by our SMS provider, Amazon SNS. Companies that use the same provider might share the same short number of origin, so users may receive SMS from other services that use the same sender number.

Analysis is able to integrate with any SMS service; you can register a unique number for your own origin if desired.

## Related documentation
- [Defining Actions](../actions/)
- [Services Overview](../services/services-overview)
- [Analysis Service](/docs/tagoio/analysis/analysis-service)
- [Data Input Service](../services/data-input-service)
- [Notification Service](../services/notification-service)
- [E-mail Service](../services/e-mail-service)
- [Data Records](/docs/tagoio/devices/data-management/data-records)
- [Data Output Service](../services/data-output-service)