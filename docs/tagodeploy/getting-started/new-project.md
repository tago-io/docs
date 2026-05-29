---
title: "Creating a New Project"
description: "Create a new TagoDeploy project with a streamlined setup, then scale resources as needed."
keywords: [tagodeploy, iot, project, getting started]
tags: ["tagodeploy"]
slug: /tagodeploy/new-project
---

# Creating a New Project

A project in TagoDeploy is created by installing the **TagoIO Platform** app from
the App Catalog. The catalog provisions the project's infrastructure and gives you
a dedicated, single-tenant TagoIO environment.

## Open the App Catalog

There are two ways to start a new project:

1. Open the project switcher in the top navigation and click **New project** at the
   bottom of the dropdown.
2. Open **Apps** in the top navigation to reach the App Catalog at `/apps` and
   select the **TagoIO Platform** card.

Both routes open the same install flow.

## Install the TagoIO Platform

Selecting the TagoIO Platform opens a detail dialog with its category, dates, and
an overview. Click **Next** to open the install dialog.

In the install dialog, set the following:

- **Installation:** For the TagoIO Platform this is fixed to **New Project**. The
  "In a project" option is reserved for services and is shown as coming soon here.
- **Region:** The AWS region the project runs in. Choose the one closest to your
  devices or required by your data residency rules.
- **Version:** Defaults to the latest platform version. Pick an older version only
  when you need compatibility with a specific stack.
- **Name:** The display name for your project, under **Settings**.

Click **Next** to continue to review, then confirm to install. The project is
provisioned and appears in the project switcher once ready.

## Add Services Later

If you need a middleware or an MQTT broker to receive data from your devices, you
install them from the same App Catalog after the project exists. See
[Services](/docs/tagodeploy/services/index.md) for the available service types.

## Help & Support

If you need assistance or want to connect with other users, visit the
[TagoIO Community](https://community.tago.io) for support, discussions, and
resources.
