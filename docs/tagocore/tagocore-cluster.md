---
title: "TagoCore Cluster"
description: "This article explains what a TagoCore Cluster is, how it connects multiple TagoCore instances into a single synchronized system, and where to find further documentation on Clusters and Instances."
tags: ["tagocore"]
---
## Overview
TagoCore Clusters let you connect multiple TagoCore instances into a single Cluster system, enabling centralized management and control of multiple TagoCores.

## How the Cluster works
Every instance in a cluster is kept in continuous synchronization with the other instances. This means changes made on one instance propagate across the cluster—for example, installing a Plugin on one instance will cause that Plugin to be installed on the other instances as well. In practice this constant state of synchronization ensures that if you install or update a plugin on any node, all other nodes in the cluster automatically receive the same change.

## Benefits
- Centralized management of multiple TagoCore instances  
- Automatic synchronization of configuration and Plugins across instances  
- Reduced manual effort when updating or maintaining TagoCore deployments  

## Further reading
To learn more about Clusters and Instances, see the [TagoCore documentation center](https://docs.tagocore.com/). For additional details on how to use clusters, refer to the official TagoCore documentation at tagocore.com/docs.