---
title: "MQTT Group Rules"
description: "Assign clients to groups using rules that control access to MQTT topics through ACL permissions."
tags: ["tagodeploy", "mqtt"]
slug: /tagodeploy/project/mqtt/group-rules
---

# Group Rules

This section allows you to create, edit and delete group rules that define which
clients have access to which groups in your MQTT broker. Group rules are
displayed in a table with the following columns:

- Client Type
- Client IDs/MQTT ID
- Groups

## What are Group Rules?

Group rules are assignments that connect clients to groups, determining which
devices can access specific group permissions. They act as the bridge between
individual clients (devices) and the groups that define their access permissions
through ACL rules.

Group rules work by specifying:

- **Client Type**: Whether the rule applies to specific client IDs or MQTT
  client identifiers
- **Target Clients**: The specific client IDs or MQTT ID patterns that the rule
  applies to
- **Group Assignment**: Which groups the specified clients should be assigned to

## Client Types

Group rules support two types of client identification:

### Client

When the client type is set to "client", the rule applies to specific client IDs
that have been created in the Clients section. This provides direct assignment
of named clients to groups.

### MQTT ID

When the client type is set to "mqtt id", the rule applies to MQTT client
identifiers used during the connection process. This allows for pattern-based
assignments and can accommodate clients that connect with dynamic identifiers.

## How Group Rules Work

When a device connects to the MQTT broker:

1. **Client Identification**: The broker identifies the connecting client
   through either the client credentials or MQTT client ID
2. **Rule Evaluation**: The broker checks the group rules to determine which
   groups the client should be assigned to
3. **Permission Application**: The client inherits all ACL permissions from the
   assigned groups
4. **Access Control**: The client can only access topics and perform operations
   allowed by the combined permissions of all assigned groups

## Managing Group Rules

Unlike other sections in the MQTT service, group rules can be managed directly
on the main page without using dropdown menus:

### Creating a Group Rule

To create a new group rule, use the creation interface on the group rules page
where you can:

- Select the client type (client or MQTT ID)
- Specify the client IDs or MQTT ID pattern
- Choose which groups to assign to the specified clients

### Editing a Group Rule

To edit an existing group rule, modify the rule directly on the page to update:

- The client type or identification method
- The list of client IDs or MQTT ID patterns
- The group assignments

### Deleting a Group Rule

To delete a group rule, remove it directly from the page. This will revoke the
group assignments for the specified clients.

## Modification Impact

Changes to group rules will not immediately impact devices that are currently
connected to the broker. However, these changes will take effect for the devices
once they disconnect and attempt to reconnect.

## Best Practices

- **Organize by Function**: Group related devices together based on their
  purpose or access requirements
- **Use Patterns Wisely**: When using MQTT ID patterns, ensure they are specific
  enough to avoid unintended access grants
- **Regular Review**: Periodically review group rules to ensure they align with
  your current device and security requirements
- **Test Changes**: Test group rule modifications in a controlled environment
  before applying them to production devices
