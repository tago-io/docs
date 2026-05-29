---
title: "Custom Docker"
description: "The container service overview: service name, URL, and where the Instances and Docker Settings pages live."
keywords: [tagodeploy, iot, docker, container, deployment]
tags: ["tagodeploy", "container"]
slug: /tagodeploy/project/container/overview
---

# Custom Docker

The **Custom Docker** addon runs your own container image alongside the rest of
your project. You point it at an image, set how it scales, and configure how it
is built and run. The service is reached on its own subdomain under your
project.

The container service has three pages in its sidebar:

- **Overview**: service name, URL, and product details (this page).
- **Instances**: machine size and autoscaling range. See
  [Container Instances](/tagodeploy/project/container/instances).
- **Settings**: image, registry credentials, environment variables, network,
  and runtime, grouped on one **Docker Settings** page. See the sections below.

## Overview page

The Overview page shows the service details and a few controls.

### Service Information

- **Display Name**: the name shown for this service in your project.
- **Addon**: the product type, shown as "Custom Docker". Read-only.
- **Service URL**: the address the container is served on,
  `https://{serviceId}.{projectId}.tagoio.net`. Read-only, with a copy button.

Edit the Display Name and use **Save** to stage the change. Save is disabled
until you make a change.

### Danger Zone

A collapsible section with irreversible actions for this service.

## Docker Settings

The **Docker Settings** page (the Settings sidebar entry) is where the container
is built, configured, and run. It is one page with collapsible sections, in this
order:

- **Docker Image** and **Registry Authentication**: the image to pull and
  credentials for private registries. See
  [Docker Image Configuration](/tagodeploy/project/container/docker-image).
- **Environment Variables**: key/value pairs passed to the container. See
  [Environment Variables](/tagodeploy/project/container/environment-variables).
- **Network**: protocol and port mappings for the load balancer. See
  [Network Configuration](/tagodeploy/project/container/network).
- **Runtime**: working directory and command overrides. See
  [Runtime Configuration](/tagodeploy/project/container/runtime).

Changes on the Docker Settings page are staged with **Save** and applied through
the project deploy flow.

> [!NOTE]
>
> The container service has no Logs page of its own. Runtime output appears on
> the project's **Logs** page under Management.
