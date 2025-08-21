---
title: "Trigger by Usage Alert"
description: "This article explains how the \"Trigger by Usage Alert\" feature works, lists which TagoIO resources and services can fire usage alerts, and describes how to define the conditions that trigger an action."
tags: ["tagoio"]
---

The "Trigger by Usage Alert" feature lets you execute an Action when a specific service or resource meets predefined usage conditions. Below is a list of Resources and Services that can be used to trigger an Action.

## Resources and Services

| Resources | Services |
|---|---|
| [Access Management](link-to-access-management) | [Input](link-to-input) |
| [Actions](link-to-actions) | [Output](link-to-output) |
| [TCore](link-to-tcore) | [Analysis](link-to-analysis) |
| [Device](link-to-device) | [Data Records](link-to-data-records) |
| [Team Members](link-to-team-members) | [SMS](link-to-sms) |
| [Dashboards](link-to-dashboards) | [Emails](link-to-emails) |
| [Analysis](link-to-analysis-resource) | [Run Users](link-to-run-users) |
|  | [Push Notifications](link-to-push-notifications) |
|  | [File Storage](link-to-file-storage) |

For example, you can configure an Action to trigger when Analysis usage reaches a specified threshold. Once that threshold is met, a notification can be sent to the profile administrator.

## Setting the Trigger Conditions

To set up an alert, define the conditions that will trigger the Action. You can specify multiple conditions; the Action will be executed if any one of them is met.