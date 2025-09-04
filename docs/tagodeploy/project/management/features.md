---
title: "Features"
description: "Enable, disable, and scale native TagoIO features; understand obligatory and optional feature sets."
tags: ["tagodeploy"]
slug: /tagodeploy/project/features/editing-features
---

# Editing Features

Features in TagoIO are native platform functionalities that can be enabled or
disabled to customize your project’s capabilities. These features extend your
project with services such as data processing, analytics, visualization tools,
and integration modules. While most features can be managed according to your
needs, some are always enabled because they are fundamental to the platform’s
operation and stability.

## Instance Configuration

When editing features using the advanced configuration form, you can specify the
minimum and maximum number of instances for each feature. Each instance
increases the feature’s capacity to handle concurrent requests, which is
critical for maintaining performance during periods of high activity. By setting
these parameters, you enable TagoIO to scale resources automatically within your
defined limits.

Each feature, when activated, consumes computational resources from your
allocated infrastructure. The modular design of TagoIO allows you to
independently enable or disable most features, giving you flexibility to
optimize both performance and cost. Because these functionalities are natively
integrated, they are optimized for seamless operation and high efficiency.
Resource allocation for each feature is also scalable, with the platform
dynamically adjusting the number of instances to meet current demand.

## Available Features

TagoIO provides a comprehensive set of features, each designed to address
specific requirements in your project. The following table summarizes the
available features and their primary functions:

Obligatory features:

- **Secrets**: Manages sensitive information such as credentials for analysis
  and integrations utilizing the
  [TagoIO Secrets](https://help.tago.io/portal/en/kb/articles/secrets), ensuring
  secure handling of secrets within your project.
- **Payload Parser**: Processes and parses incoming data from devices,
  [connectors](https://help.tago.io/portal/en/kb/articles/466-connector-overview),
  and other sources, allowing you to
  [parse payloads](https://help.tago.io/portal/en/kb/articles/147-payload-parser)
  as they arrive.
- **Action Handler**: Coordinates and executes internal platform
  [actions](https://help.tago.io/portal/en/kb/articles/30-actions), enabling
  automated responses to different system events and user-defined triggers.
- **Action - Post Data to Endpoint**: Sends data to external endpoints when
  specific actions are triggered, supporting real-time integrations with
  third-party systems.
- **Action - Notification**: Delivers notifications as part of automated
  workflows, enabling users to receive alerts based on defined conditions.
- **Action - TagoRUN Notifications**: Sends
  [targeted notifications](https://help.tago.io/portal/en/kb/articles/223-notifications-for-users)
  directly to TagoRUN users, facilitating in-platform communication and user
  engagement.

Optional features:

- **Action - SMS (Twilio)**: Sends SMS messages using the
  [Twilio](https://www.twilio.com/) service, allowing for automated mobile
  notifications.
- **Action - Email (Sendgrid)**: Sends emails via the
  [Sendgrid](https://sendgrid.com/) service, supporting automated email
  communications within your workflows.
- **Action - Email (SMTP)**: Sends emails using standard SMTP servers, providing
  a flexible option for integrating email notifications.
- **Action - Queue (AWS SQS)**: Sends messages to
  [AWS SQS](https://docs.aws.amazon.com/sqs/) queues, enabling asynchronous
  processing and integration with AWS-based workflows.
- **Action - Whatsapp (Twilio)**: Sends WhatsApp messages using Twilio, allowing
  for direct messaging and notifications through WhatsApp.
- **Action - SMS (AWS SNS)**: Sends SMS messages using
  [AWS Simple Notification Service](https://docs.aws.amazon.com/sns/) (SNS),
  providing another option for scalable SMS delivery.
- **Action - SES (AWS SES)**: Sends emails using
  [AWS Simple Email Service](https://docs.aws.amazon.com/ses/) (SES), supporting
  scalable and reliable email delivery.

Note that the optional features are related to optional action types, more
information about actions can be found in the
[Defining Actions](https://help.tago.io/portal/en/kb/articles/122-defining-actions#Push_Notification_to_myself)
article.

Each feature can be enabled or disabled according to your project’s
requirements, except for those that are essential for core platform operations.
The number of instances for each feature can be configured to match your
workload, ensuring efficient and reliable service delivery. Feature status and
configuration are managed through the platform interface, giving you clear
visibility and control over your project’s active functionalities.

## Resource Considerations

To manage features effectively, consider the following:

- Ensure you have sufficient computational resources available for all enabled
  features. Monitor how your selected combination of features impacts overall
  system performance, and regularly review resource consumption to optimize
  costs. As your project grows, plan scaling requirements in advance to maintain
  an optimal balance between performance and efficiency.
