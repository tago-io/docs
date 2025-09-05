---
title: "MQTT Groups"
description: "Create and manage groups that define ACL permissions for client access to MQTT topics."
tags: ["tagodeploy", "mqtt"]
slug: /tagodeploy/project/mqtt/groups
---

# Groups

This section allows you to create, edit and delete the groups that define how
your clients can interact with the MQTT broker. The existing groups are
displayed in a table with the following columns:

- Name
- Description
- ACL Permissions

## What are groups?

Groups are collections of permissions that define what topics clients can or
cannot subscribe and publish to. They are identified by a name and a
description. Groups are used in conjunction with group rules to control which
clients can connect to the broker and which topics they are authorized to
access.

### Creating a new group

To create a new group, click the "New group" button. You will then be redirected
to a page where you can fill in the group's name, description and ACL
permissions.

### Editing a group

To edit a group, click on the group's three-dot menu button and then select the
"Edit" option.

### Deleting a group

To delete a group, click on the group's three-dot menu button and then select
the "Delete" option.

## Modification/Deletion Impact

Editing or deleting groups will not immediately impact devices that are
currently connected to the broker. However, these changes will take effect for
the devices once they disconnect and attempt to reconnect.
