---
title: "SMS Service"
description: "This article explains how SMS units are counted and billed in TagoIO, outlines limits and country coverage, and provides important notices about service discontinuation and short-number behavior."
tags: ["tagoio"]
---
Each time an SMS message is successfully sent by an [Action](/docs/tagoio/actions/) or [Analysis](/docs/tagoio/analysis/) function, it is counted as one SMS unit. The service limit defined inside each [Profile](/docs/tagoio/profiles) determines the maximum number of SMS messages that can be sent during a one-month period (based on your billing cycle).

Each SMS unit is limited to 140 characters.

:::warning

As anticipated, starting on **November 1st, 2024**, TagoIO will no longer offer built-in SMS services. You can still send SMS by integrating directly with external providers such as Twilio or AWS. [Read more](https://community.tago.io/t/tagoio-will-soon-stop-providing-sms-and-email-services/1646)

:::

## Limits and usage

- If the SMS service limit is exceeded, no SMS for that Profile will be sent until the limit is increased or the billing period ends.

- SMS pricing is only valid for: United States, Australia, Germany, United Kingdom, Canada, Mexico, Brasil, Colombia, Japan, and Chile. For other countries, contact us.
- SMS messages not used during the period will not be carried over to the next month.
- For more information on pricing and FAQs, see the [Pricing Page](https://tago.io/pricing/).

## Short-number behavior
The short number used to send messages is randomly selected by our SMS provider, Amazon SNS. Companies that use the same provider might share the same short number of origin, so users may receive SMS from other services that use the same sender number.

Analysis is able to integrate with any SMS service; you can register a unique number for your own origin if desired.