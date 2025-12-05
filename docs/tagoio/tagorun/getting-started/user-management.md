---
title: "User Management"
description: "This article explains how to view and manage users who sign up for your TagoIO application using the User Management module, including how tags are applied to users and how user fields can be used in Targets. It also notes how dashboard data access with TagoRUN affects Data Output quotas."
tags: ["tagoio"]
---
You can view and control all users that sign up in your application under the User Management module.

![User Management screen](/docs_imagem/tagoio/rounded-image-1761309633786.png)

## Overview
When you create and deploy your solution using TagoRun, all users that sign up will be listed in the [User Management](https://admin.tago.io/usermanagement) area. From there you can:

- Grant or remove access
- Change a user's password
- Edit user information
- Edit tags associated with a user
- Delete a user completely

## Tags
Each user has a Tags tab. Tags can be provided in three ways:

- Manually (by an administrator)
- Programmatically (by script)
- By the user during the [Signup process](/docs/tagoio/tagorun/getting-started/signup-fields.md)

> Note: All customized fields defined in your Signup Page under the Run module are added in the Tags here.

The fields `tag_key` and `tag_value` from the users can be used in the Targets when granting access to your application. Refer to the Targets documentation (e.g., "Defining Targets") for instructions on using these fields.

:::warning

Accessing data from dashboards using TagoRUN — even when downloading it as a .csv from widgets — is counted towards your Data Output for Dashboards. See [Data Output for Dashboards](/docs/tagoio/dashboards/data-output-for-dashboards.md) for quota and billing details.

:::

## Anonymous User
You can create an Anonymous User to allow access to dashboards in your TagoRun without having to sign in with credentials. This user is required if you want to share your dashboard with anyone using a URL. Read more about [Sharing Dashboards](/docs/tagoio/dashboards/sharing-dashboards.md).

The anonymous user behaves as a normal user, except for not having a password. You can still use Tags to grant access to resources through Access Management policies.

Only one anonymous user can be created per Profile.

## Exporting Users
Click the **'Export Users'** button on the top right side of the module to download a .csv file containing data of all your users. The file also includes all Tags, user ID, subscription date, and activation status.
