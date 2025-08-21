---
title: "Access Management"
description: "This article explains how Access Management (AM) in TagoIO lets you grant secure access to account resources by creating Targets (users or devices) and assigning Permissions. It also gives practical examples of common AM use cases."
tags: ["tagoio"]
---

## Overview

Access Management (AM) lets you securely grant access to specific resources in your TagoIO account. You create Targets (users or things) and assign Permissions that determine which resources those Targets can access. See [Defining Targets](link-to-defining-targets) and [Defining Permissions](link-to-defining-permissions) for details on how to configure each element.

![Access Management interface example](/docs_imagem/tagoio/access-management-2.png)

## Examples

Some examples of how AM can be used:

1. Share one specific dashboard only with users that contain certain tags.  
   Example: Share the dashboard "Regional Sales View" with users who have the tag `level = supervisor`. (See [Dashboards](link-to-dashboards) and [Targets](link-to-defining-targets).)

2. Share all dashboards with certain tags only with users that contain certain tags.  
   Example: Share dashboards that contain the tag `state = NY` or `state = MA` with users that have the tag `region = northeast`. (See [Dashboards](link-to-dashboards) and [Targets](link-to-defining-targets).)

## See also

- [Creating a Policy](link-to-creating-a-policy)  
- [Defining Targets](link-to-defining-targets)  
- [Defining Permissions](link-to-defining-permissions)  
- [Access Management](link-to-access-management)