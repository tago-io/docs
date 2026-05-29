---
title: "MQTT Groups"
description: "Create and manage groups that define ACL permissions for client access to MQTT topics."
keywords: [tagodeploy, iot, mqtt, groups, permissions]
tags: ["tagodeploy", "mqtt"]
slug: /tagodeploy/project/mqtt/groups
---

# Groups

A group bundles ACL permissions that allow or deny access to topics. This page
lists, creates, edits, and deletes groups. Existing groups show in a table with
these columns:

- **Name**
- **Description**
- **ACL Permissions** (the number of permission rows in the group)

Use the search box to filter by group name.

## What are groups?

Groups are collections of ACL permissions that define which topics clients can
publish to and subscribe to. Each group has a name and a description. Group
Rules assign clients to groups, and a client inherits the combined permissions
of every group it belongs to.

## ACL permissions

Each group holds a list of ACL (Access Control List) permissions. A permission
is a single rule with three parts:

- **Permission**: **Allow** or **Deny** the matching access.
- **Action**: **Subscribe** or **Publish**.
- **Topic**: the topic the rule applies to. MQTT wildcards are supported, where
  `+` matches a single level (`sensors/+/temperature`) and `#` matches every
  level below a point (`sensors/#`).

When a device publishes or subscribes, the broker checks the device's groups
and grants or denies the operation based on the matching rules.

### Creating a new group

Click **New Group** to open the dialog and set the **Name** and
**Description**. Under **ACL Permissions**, use **Add permission** to add the
first rule, then **New permission** to add more. Each row sets a Permission, an
Action, and a Topic, with a remove control to drop it. Click **Create group**
to save.

### Editing a group

Open the group's row menu and select Edit to change its name, description, and
permission rows.

### Deleting a group

Open the group's row menu and select Delete.

## Modification/Deletion Impact

Editing or deleting groups will not immediately impact devices that are
currently connected to the broker. However, these changes will take effect for
the devices once they disconnect and attempt to reconnect.
