---
title: "Defining Targets"
description: "This article explains how to define Targets within a policy in the Access Management (AM) module, what kinds of Targets are available, and how multiple Targets are evaluated when granting permissions."
tags: ["tagoio"]
sidebar_position: 3
---
You should define **Targets** in each policy that are used inside the [Access Management](https://admin.tago.io/am) module. Targets can be users or things (for example, [scripts](/docs/tagoio/analysis/)).

:::tip

Targets are to whom or to what you are giving the permissions.

:::

Currently, you can select [Run Users](/tagoio/profiles/services/end-users-service.md) and [Analysis](/docs/tagoio/analysis/) as Targets.

![Targets configuration example](/docs_imagem/tagoio/defining-targets-2.png)

## How multiple Targets work
You can add more Targets of the same type as needed. Multiple Targets are combined using a logical OR, so adding more targets makes the resulting options more inclusive. For example:
- "Apply the permissions below for the users using this tag OR this tag OR ..."

## Target Matching Options

Target matching can be performed in several ways:

1. **ID** – select a target from the list.

2. **Tag** – match using tags from your target. Learn more about the [Tags System](/tagoio/getting-started/tags-system.md).

   - Tags are composed of two fields: **Tag key** and **Tag value**.
   - You can manually edit the tags for each user, or run [scripts](/docs/tagoio/analysis/) to set them. Learn more about [User Management](/tagoio/tagorun/getting-started/user-management.md).
   - For example, Joe Doe has a Tag key `user_level` and Tag value `supervisor`. If you create a policy with Targets using the same tags, the selected permissions will be granted for Joe Doe.

3. **Tag Match** – the match is automatically by searching for those Tag Keys of the selected target.
   - Run User: tag keys presented in your users will be listed.
   - Analysis: only tag keys presented in your [Analysis](/docs/tagoio/analysis/) will be listed.

   :::tip
   
   The Tag Match option reduces the number of policies as you can create a single Policy that would grant access to all users or analysis that match the same tag keys.

   :::

4. **ANY** – all will be automatically included.