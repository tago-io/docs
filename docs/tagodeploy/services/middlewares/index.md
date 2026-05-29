---
title: "Network Middlewares"
description: "Overview of Network Middlewares in TagoDeploy, including LoRaWAN LNS such as Chirpstack, Loriot, and TTN, and how to install them into projects."
keywords: [tagodeploy, iot, middleware, lorawan, integration]
tags: ["tagodeploy"]
slug: /tagodeploy/services/middlewares
---

Middleware services extend your TagoDeploy project with managed endpoints that
connect external networks and systems to TagoIO. You install them from the App
Catalog at `/apps`. Inside a project, a middleware's add-on label reads
"Middleware {Type}", for example "Middleware Chirpstack".

> The catalog evolves over time; this guide focuses on how to deploy and operate
> any middleware. Available types today are AWS IoT, Chirpstack, Everynet, Generic
> HTTPS, Loriot, MachineQ, Myriota, Senet, Sigfox, Tektelic, and TTN.

An active middleware instance runs inside your single-tenant environment and
uses your project's resources. You can scale instances, attach custom domains,
and point external networks to the middleware's endpoint.

## What is a Middleware?

A middleware bridges data between an external network or platform and your
TagoDeploy project. It receives uplinks, forwards data to TagoIO, and usually
supports downlinks or callbacks. Each middleware runs as an isolated service
with its own configuration, token, and scaling policy.

## Installing a Middleware

You install a middleware from the App Catalog. Open **Apps** in the top
navigation, find the middleware type, and click its card to open the detail
dialog. Click **Next** to open the install dialog.

The install dialog first asks where the middleware should run:

- **In a project:** Add it to an existing project. Action button "Add to
  Project".
- **New Project:** Provision it alongside a new project. Action button "Review
  and Install".

You then set these fields:

- **Project:** The target project (only when installing into an existing
  project).
- **Region:** The AWS region the service runs in.
- **Version:** Defaults to the latest unless you need compatibility with an older
  stack.
- **Name:** Display name for the service instance, under Settings.
- **Network Token:** The token the middleware uses to write and read in your
  project.
- **TagoIO API URL:** Pre-filled with your project's API endpoint.

Confirm to deploy. The service provisions networking, compute, and a default
autoscaling policy.

### Domains

You can attach a custom DNS domain to a middleware after deployment. See Domain
Registration at
[TagoDeploy Domains Management](/docs/tagodeploy/project/management/domains.md).

## Using the Middleware

Once deployed, you can use the middleware's public endpoint with your external
network or platform. You can find the endpoint URL on the middleware's Overview
page in the project, and follow the integration steps for your network in the
TagoIO documentation.

The middleware authenticates using the Network Token you selected at install
time. That token scopes which devices the middleware can write and read in your
project.

## Billing Considerations

Middleware instances consume compute, memory, and network resources in your
TagoDeploy environment and therefore affect project costs. Right-size your
machine tier and autoscaling limits, and review utilization graphs regularly to
avoid over-provisioning.
