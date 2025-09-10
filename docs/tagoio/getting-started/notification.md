---
title: "Notifications"
description: "This article explains how TagoIO notifications work, the four types of notifications you may receive, where to view them in the admin interface, and how to filter or search notifications."
tags: ["tagoio"]
---

TagoIO will notify you when something needs your attention. You may need to
perform an action depending on the type of notification.

## Types of notifications

There are four types of notifications:

- Applications\
  Sent by a customized script triggered by an Analysis. Examples: "Two trucks
  are out of route", "Your refrigerator temperature is higher than 36 °F".

- Other users\
  Displayed when another user shares something with you. Example: "John wishes
  to share a Dashboard with you."

- Tago system\
  Used by the TagoIO backend to notify users about the system or your account.
  Example: "There is a new application in the Healthcare industry that you may
  be interested in."

- TagoRUN User\
  Notifications sent to users registered in your account's User Management. Only
  your account (or authorized users) can send notifications to these users.
  Learn more in
  [Run Users Notifications](/docs/tagoio/tagorun/getting-started/notifications-for-users.md).

## Viewing notifications

When you log in to your account, you can see all your notifications in the
top‑right corner of the admin page.

> The number in red indicates how many new notifications you have. If you have
> more than 99 notifications, it will display as "99+".

![Notifications UI showing unread count](/docs_imagem/tagoio/notification-2.png)

## Filtering and searching

On the Notifications window, you can:

- Filter by read/unread status.
- Filter by the type of notification.
- Use the search field to refine results.

### Notifications from Other Users

These notifications are usually related to authorization requests asking you to
accept dashboards or profiles. In these cases, you need to first accept the
request before the shared item is available to you.

> The user who sent the request can track the status of the request by checking
> into the “Share” tab of each item (Dashboard/Profile).

After you make a decision and choose to accept or decline a notification, the
system will change it to a faded‑like color and remove the blue unread icon.
TagoIO automatically removes all ignored notifications that are older than two
weeks.

### Notifications from Applications

Application notifications can give you the option to be redirected to a
dashboard that can contain more information about the event. The content of the
notification and the button that links to the dashboard (which is optional) is
defined by the developer.

To learn how to create an Application notification from an Analysis, check our
[SDK documentation](https://js.sdk.tago.io/).
