---
title: "User Management"
description: "This article explains how to view and manage users who sign up for your TagoIO application using the User Management module, including how tags are applied to users and how user fields can be used in Targets. It also notes how dashboard data access with TagoRUN affects Data Output quotas."
tags: ["tagoio"]
---

You can visualize and control all users that sign up in your application under the User Management module (see the User Management documentation for details).

![User Management screen](/docs_imagem/tagoio/user-management-2.png)

## Overview
When you create and deploy your solution using TagoRun, all users that sign up will be listed in the User Management area. From there you can:

- Grant or remove access
- Change a user's password
- Edit user information
- Edit tags associated with a user
- Delete a user completely

## Tags
Each user has a Tags tab. Tags can be provided in three ways:

- Manually (by an administrator)
- Programmatically (by script)
- By the user during the Signup process

> Note: All customized fields defined in your Signup Page under the Run module are added in the Tags here.  
> See [Signup Page](link-to-signup-page) for details.

The fields `tag_key` and `tag_value` from the users can be used in the Targets when granting access to your application. Refer to the Targets documentation (e.g., "Defining Targets") for instructions on using these fields.

## Data output for dashboards
Warning: Accessing data from dashboards using TagoRUN — even when downloading it as a .csv from widgets — is counted towards your Data Output for Dashboards. See [Data Output for Dashboards](link-to-data-output-for-dashboards) for quota and billing details.

## Related references
- User Management (internal documentation)
- Signup Page (Run module) — [Signup Page](link-to-signup-page)
- Targets documentation — [Targets](link-to-targets)
- Data Output for Dashboards — [Data Output for Dashboards](link-to-data-output-for-dashboards)