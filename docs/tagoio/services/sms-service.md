---
title: "SMS Service"
description: "This article explains how SMS units are counted and billed in TagoIO, outlines limits and country coverage, and provides important notices about service discontinuation and short-number behavior."
tags: ["tagoio"]
---

## Overview
Each time an SMS message is successfully sent by an [Action](link-to-action) or [Analysis](link-to-analysis) function, it is counted as one SMS unit. The service limit defined inside each [Profile](link-to-profile) determines the maximum number of SMS messages that can be sent during a one-month period (based on your billing cycle).

> **Attention — Service discontinuation (effective November 1st, 2024):**  
> As anticipated last year, starting on **November 1st, 2024**, TagoIO will no longer offer built-in SMS services. You can still send SMS by integrating directly with external providers such as Twilio or AWS. See [Read more](link-to-read-more).

Each SMS unit is limited to 140 characters.

## Limits and billing
> **Note:** If the SMS service limit is exceeded, no SMS for that Profile will be sent until the limit is increased or the billing period ends.

- SMS pricing is only valid for: United States, Australia, Germany, United Kingdom, Canada, Mexico, Brasil, Colombia, Japan, and Chile. For other countries, contact us.
- SMS messages not used during the period will not be carried over to the next month.

## Short-number behavior
> **Info:** The short number used to send messages is randomly selected by our SMS provider, Amazon SNS. Companies that use the same provider might share the same short number of origin, so users may receive SMS from other services that use the same sender number.

## Related documentation
- [Defining Actions](link-to-defining-actions)
- [Services Overview](link-to-services-overview)
- [Analysis Service](link-to-analysis-service)
- [Data Input Service](link-to-data-input-service)
- [Notification Service](link-to-notification-service)
- [E-mail Service](link-to-email-service)
- [Data Records](link-to-data-records)
- [Data Output Service](link-to-data-output-service)

(Links above are internal documentation references; replace placeholders like link-to-... with the appropriate internal URLs if available.)