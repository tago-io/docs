---
title: "Container Network Configuration"
description: "The Network section of the Docker Settings page: network protocol and port mappings for the load balancer."
keywords: [tagodeploy, iot, container, network, port mappings]
tags: ["tagodeploy", "container"]
slug: /tagodeploy/project/container/network
---

# Network Configuration

The **Network** section on the container **Docker Settings** page sets the
network protocol and port mappings for the load balancer that fronts your
container. Edit the fields and use **Save** to stage the change, which is
applied through the project deploy flow.

## Network protocol

**Network protocol** is a dropdown that defaults to **TCP**. It sets the
protocol the load balancer uses to reach the container.

## Port mappings

**Port mappings** route external traffic to the port your container listens on.
The list starts empty, with "No port mappings configured". Use **Add port** to
add a mapping row, and repeat for each port your container exposes.

Only expose the ports that need external access. Confirm your application is
listening on the port you map, otherwise the load balancer has nothing to reach.
