---
title: "Notifications for Users"
description: "This article explains how to send push notifications to users registered in your TagoRun application, outlines how user notifications differ from account notifications, and points to the two primary methods (Actions and Analysis) for sending them."
tags: ["tagoio"]
---
You can push notification messages directly to the users registered in your TagoRun application. This article explains how to send notifications to your users using Actions or Analysis.

Notifications for users are similar to your account's regular notifications, but they include additional customization options.

> Note: Users registered in your TagoRun account can only receive notifications sent by your application.

![Notifications list example](/docs_imagem/tagoio/notifications-for-users-2.png)

## How to send notifications

Before sending notifications, ensure you have users registered in your account’s User Management.

There are two primary ways to send notifications to users in TagoRun:

1. Notifications using Actions  
   See [Actions](../actions/) for details on configuring Actions to send user notifications.

2. Notification using Analysis  
   See [Analysis](/docs/tagoio/analysis/) for details on sending notifications from an Analysis script.

> By pushing notifications using Analysis, you can add custom buttons allowing for more interaction.

## Example notification (UI sample)
The notifications UI can display items similar to the following example:

- Title: Refrigerator Alarm  
- Message: Your Refrigerator Temperature is higher than: 86 °F  
- Timestamp: 6 minutes ago  
- Link/button: Refrigerator Dashboard

## Related documentation
- See [Actions](../actions/)  
- See [Analysis](/docs/tagoio/analysis/)  
- Refer to the Targets documentation (if applicable) for targeting multiple users or groups  
- See [Notifications for Users using Analysis](/docs/tagoio/analysis/notifications-for-users-using-analysis)