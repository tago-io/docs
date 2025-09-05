---
title: "MQTT ACL Permissions"
description: "Define topic access rules for MQTT groups using ACL permissions to control publish and subscribe operations."
tags: ["tagodeploy", "mqtt"]
slug: /tagodeploy/project/mqtt/acl-permissions
---

# ACL Permissions

ACL (Access Control List) permissions are security rules that define what MQTT
topics devices in a group can access and what operations they can perform on
those topics. They serve as the foundation for controlling how your IoT devices
interact with the MQTT broker.

## What are ACL Permissions?

ACL permissions work as fine-grained access controls that specify:

- **Which topics** devices can access (using topic patterns and wildcards)
- **What operations** they can perform (publish, subscribe, or both)
- **Access levels** (allow or deny specific topic patterns)

These permissions are applied at the group level, meaning all clients assigned
to a group inherit the same ACL permissions. This provides a scalable way to
manage access control across multiple devices with similar requirements.

## How ACL Permissions Work

When a device attempts to publish a message to a topic or subscribe to receive
messages from a topic, the MQTT broker checks the ACL permissions assigned to
the device's group. The broker will:

1. **Evaluate the topic pattern** against the configured ACL rules
2. **Check the requested operation** (publish or subscribe)
3. **Grant or deny access** based on the matching ACL permission rules

## Topic Patterns and Wildcards

ACL permissions support MQTT topic wildcards to create flexible access rules:

- **Single-level wildcard (+)**: Matches any single topic level
  - Example: `sensors/+/temperature` matches `sensors/device1/temperature` and
    `sensors/device2/temperature`
- **Multi-level wildcard (#)**: Matches multiple topic levels
  - Example: `sensors/#` matches all topics under the `sensors` hierarchy

## Use Cases

ACL permissions are essential for:

- **Device segregation**: Ensuring devices only access topics relevant to their
  function
- **Security enforcement**: Preventing unauthorized access to sensitive data
  topics
- **System organization**: Creating logical boundaries between different device
  types or applications
- **Compliance requirements**: Meeting security standards that require access
  control mechanisms
