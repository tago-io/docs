---
title: "MQTT Group Rules"
description: "Assign clients to groups using rules that control access to MQTT topics through ACL permissions."
keywords: [tagodeploy, iot, mqtt, group rules, access control]
tags: ["tagodeploy", "mqtt"]
slug: /tagodeploy/project/mqtt/group-rules
---

# Group Rules

Group rules assign clients to groups automatically based on matching
conditions. The rules are edited inline on this page, with each rule as a row.
Use **New rule** to add a row and the **Save** button in the page header to
stage your changes, which take effect after you deploy. Each row has these
columns:

- **Match By**
- **Value**
- **Groups**
- a remove control

The footer shows how many rules are configured.

## What are Group Rules?

Group rules are the bridge between clients and the groups that grant their
permissions. Each rule matches a connecting client by some condition and
assigns it to one or more groups. A matched client inherits the combined ACL
permissions of every group the rule assigns.

## Match By

Each rule matches on one of three conditions, set in the **Match By** column.
The **Value** field changes to suit the choice:

### Certificate Fingerprint

Match a client by the fingerprint of its certificate. The Value is the
fingerprint text, for example `SHA256:...`.

### MQTT Client ID

Match a client by the MQTT client identifier it sends during connection. The
Value is the identifier to match. This accommodates clients that connect with
their own identifiers.

### Client

Match a named client created on the Clients page. The Value becomes a picker
where you select the client by name.

## Groups

The **Groups** column is a multi-select. Pick one or more groups, shown as
chips, for the matched client to join.

## How Group Rules Work

When a device connects to the MQTT broker:

1. **Client Identification**: The broker identifies the connecting client by
   its certificate fingerprint, its MQTT client ID, or its named client
2. **Rule Evaluation**: The broker checks the group rules to determine which
   groups the client should be assigned to
3. **Permission Application**: The client inherits all ACL permissions from the
   assigned groups
4. **Access Control**: The client can only access topics and perform operations
   allowed by the combined permissions of all assigned groups

## Managing Group Rules

Unlike most sections in the MQTT service, group rules are edited directly on the
page with no dialog or row menu:

### Creating a Group Rule

Click **New rule** to add a row, then:

- Choose the **Match By** condition (Certificate Fingerprint, MQTT Client ID, or
  Client)
- Enter or pick the **Value** to match
- Select the **Groups** to assign

### Editing a Group Rule

Change the Match By, Value, or Groups directly on the row.

### Deleting a Group Rule

Use the remove control on the row to drop the rule, which revokes those group
assignments. In both cases, use **Save** to stage the change.

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
