---
title: "Network Middlewares"
description: "Overview of Network Middlewares in TagoDeploy, including LoRaWAN LNS such as Tektelic, TTI, and others, and how to assign them to projects."
tags: ["tagodeploy"]
slug: /tagodeploy/services/middlewares
---

Middleware services extend your TagoDeploy project with managed endpoints that
connect external networks and systems to TagoIO. You install them from Services
at the top of the page.

> The catalog evolves over time; this guide focuses on how to deploy and operate
> any middleware.

An active middleware instance runs inside your single-tenant environment and
uses your project’s resources. You can scale instances, attach custom domains,
and point external networks to the middleware’s endpoint.

## What is a Middleware?

A middleware bridges data between an external network or platform and your
TagoDeploy project. It receives uplinks, forwards data to TagoIO, and usually
supports downlinks or callbacks. Each middleware runs as an isolated service
with its own configuration, token, and scaling policy.

## Installing a Middleware

You install a middleware from Services.

During installation you’ll see these fields:

- **Name:** Display name for the service instance.
- **Project and Region:** Target project to deploy in.
- **Version:** Default to the latest unless you need compatibility with an older
  stack.
- **Network Token:**
  - Select an Existing Network to have TagoDeploy create and bind a Network
    Token for that network, or
  - Use custom token to paste a specific Network Token that the middleware
    should use.
- **TagoIO API URL:** Pre-filled with your project’s API endpoint.

You can review the configuration and deploy. The service will provision
networking, compute, and a default autoscaling policy.

### Domains

You can attach a custom DNS domain to a middleware after deployment. See Domain
Registration at
[TagoDeploy Domains Management](docs/tagodeploy/project/domains.md).

## Using the Middleware

Once deployed, you can use the middleware’s public endpoint with your external
network or platform. Follow the integration steps for your network in the TagoIO
documentation at [TagoIO Network Integrations](docs/tagoio/integrations/.md).

The middleware authenticates using the Network Token you selected at install
time. That token scopes which devices the middleware can write and read in your
project.

## Billing Considerations

Middleware instances consume compute, memory, and network resources in your
TagoDeploy environment and therefore affect project costs. Right-size your
machine tier and autoscaling limits, and review utilization graphs regularly to
avoid over-provisioning.
