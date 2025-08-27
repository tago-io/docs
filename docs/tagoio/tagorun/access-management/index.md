---
title: "Access Management"
description: "This article explains how Access Management (AM) in TagoIO lets you grant secure access to account resources by creating Targets (users or devices) and assigning Permissions. It also gives practical examples of common AM use cases."
tags: ["tagoio"]
sidebar_position: 1
---
Access Management (AM) lets you securely grant access to specific resources in your TagoIO account. You create Targets (users or things) and assign Permissions that determine which resources those Targets can access. See [Defining Targets](../defining-targets) and [Defining Permissions](../security/defining-permissions) for details on how to configure each element.

![Access Management interface example](/docs_imagem/tagoio/access-management-2.png)

## Examples

Some examples of how AM can be used:

1. Share one specific dashboard only with users that contain certain tags.  
   Example: Share the dashboard "Regional Sales View" with users who have the tag `level = supervisor`. (See [Dashboards](../dashboards/creating-dashboard-tabs) and [Targets](../defining-targets).)

2. Share all dashboards with certain tags only with users that contain certain tags.  
   Example: Share dashboards that contain the tag `state = NY` or `state = MA` with users that have the tag `region = northeast`. (See [Dashboards](../dashboards/creating-dashboard-tabs) and [Targets](../defining-targets).)

3. Share all my dashboards with all users.  
   For this, you just need to set the field in Targets like `Run User = Any`, and the `Permissions = Any` to share everything with anyone.

4. Allow an Analysis to do a bulk device upload.  
   Example: An Analysis with the tag `script = device_upload`, and the `Permission = device` with rules `Create` and with field `Any`.

*By using the option `Any` in the matching fields, you expose all that resource without restrictions.*

## See also

- [Creating a Policy](security-policy)  
- [Defining Targets](../defining-targets)  
- [Defining Permissions](../security/defining-permissions)  
- [Access Management](../security/access-management)