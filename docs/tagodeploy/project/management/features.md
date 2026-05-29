---
title: "Features"
description: "Enable, disable, and scale native TagoIO features for your project."
keywords: [tagodeploy, iot, features, microservices, configuration]
tags: ["tagodeploy"]
slug: /tagodeploy/project/features/editing-features
---

# Features

Features in TagoIO are native platform functionalities you can enable or disable
to tailor your project's capabilities. They extend your project with services
such as data processing, integrations, and notification handling. Most features
can be managed to fit your needs, while some are always enabled because they are
fundamental to platform operation and stability.

The Features page is the entry point of the TagoIO & API section. It is reached
from the "TagoIO & API" breadcrumb tab and from the **Features** item in that
sidebar. The page header reads "Features".

:::note
On the survey project the Features page rendered without any field content, so
the feature-toggle controls could not be captured directly. The descriptions
below cover the intended behavior. The exact controls, including any
simplified and advanced view switch suggested by the `?view=simplified` URL,
should be confirmed against a project that has a populated feature set.
:::

## Instance configuration

When the advanced configuration is available, each feature can be given a
minimum and maximum number of instances. Each instance adds capacity to handle
concurrent requests, which matters during periods of high activity. Within the
limits you set, TagoIO scales the feature automatically.

Every enabled feature consumes computational resources from your allocated
infrastructure. Because the design is modular, you can enable or disable most
features independently to balance performance and cost.

## Available features

TagoIO provides a set of features grouped into those that are always on and those
you can turn on as needed.

Obligatory features:

- **Secrets**: manages sensitive information such as credentials for analyses and
  integrations using
  [TagoIO Secrets](https://help.tago.io/portal/en/kb/articles/secrets).
- **Payload Parser**: processes and parses incoming data from devices,
  [connectors](https://help.tago.io/portal/en/kb/articles/466-connector-overview),
  and other sources, so you can
  [parse payloads](https://help.tago.io/portal/en/kb/articles/147-payload-parser)
  as they arrive.
- **Action Handler**: coordinates and executes internal platform
  [actions](https://help.tago.io/portal/en/kb/articles/30-actions) in response to
  system events and user-defined triggers.
- **Action - Post Data to Endpoint**: sends data to external endpoints when
  specific actions are triggered.
- **Action - Notification**: delivers notifications as part of automated
  workflows.
- **Action - TagoRUN Notifications**: sends
  [targeted notifications](https://help.tago.io/portal/en/kb/articles/223-notifications-for-users)
  to TagoRUN users.

Optional features:

- **Action - SMS (Twilio)**: sends SMS messages using
  [Twilio](https://www.twilio.com/).
- **Action - Email (Sendgrid)**: sends emails via
  [Sendgrid](https://sendgrid.com/).
- **Action - Email (SMTP)**: sends emails using standard SMTP servers.
- **Action - Queue (AWS SQS)**: sends messages to
  [AWS SQS](https://docs.aws.amazon.com/sqs/) queues for asynchronous processing.
- **Action - Whatsapp (Twilio)**: sends WhatsApp messages using Twilio.
- **Action - SMS (AWS SNS)**: sends SMS messages using
  [AWS Simple Notification Service](https://docs.aws.amazon.com/sns/).
- **Action - SES (AWS SES)**: sends emails using
  [AWS Simple Email Service](https://docs.aws.amazon.com/ses/).

The optional features map to optional action types. For more on actions, see the
[Defining Actions](https://help.tago.io/portal/en/kb/articles/122-defining-actions#Push_Notification_to_myself)
article.

## Resource considerations

To manage features effectively, keep enough computational resources available for
everything you enable. Watch how your combination of features affects overall
performance, review resource consumption regularly to control costs, and plan
scaling ahead as your project grows.
