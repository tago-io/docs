---
title: "Defining Targets"
description: "This article explains how to define Targets within a policy in the Access Management (AM) module, what kinds of Targets are available, and how multiple Targets are evaluated when granting permissions."
tags: ["tagoio"]
---

You should define Targets in each policy that are used inside the [Access Management](link-to-access-management) module (AM). Targets can be users or things (for example, [scripts](link-to-scripts)).

> Targets are to whom or to what you are giving the permissions.

Currently, you can select [Run Users](link-to-run-users) and [Analysis](link-to-analysis) as Targets.

![Targets configuration example](/docs_imagem/tagoio/defining-targets-2.png)

## How multiple Targets work
You can add more Targets of the same type as needed. Multiple Targets are combined using a logical OR, so adding more targets makes the resulting options more inclusive. For example:
- "Apply the permissions below for the users using this tag OR this tag OR ..."

## See also
- Access Management: [Access Management](link-to-access-management)
- Creating a Policy: [Creating a Policy](link-to-creating-a-policy)
- Defining Permissions: [Defining Permissions](link-to-defining-permissions)
- User Management: [User Management](link-to-user-management)