---
title: "Services"
description: "Overview of Services in TagoDeploy, including Middleware and MQTT Broker options and how to assign them to projects."
keywords: [tagodeploy, iot, services, middleware, mqtt]
tags: ["tagodeploy"]
slug: /tagodeploy/services/overview
---

# Services

Services add capabilities to your projects beyond the base TagoIO Platform. You
add them from the **App Catalog** at `/apps`, the same place you create a project.

## Overview of Services

Services are modular components that you install into a project. The catalog
groups items by category: Platform, Middleware, MQTT, and Others. The service
types available today are:

- **Middleware**: Connect your project with external networks, such as LoRaWAN
  LNS providers, to move data between TagoIO and those systems.
- **MQTT Broker**: Deploy a fully integrated MQTT broker within your project,
  enabling device connectivity and communication using the MQTT protocol.

## Service Categories

### Middleware

Middleware services act as intermediaries between your project and external
networks, supporting bi-directional data flow. The available middleware types
are AWS IoT, Chirpstack, Everynet, Generic HTTPS, Loriot, MachineQ, Myriota,
Senet, Sigfox, Tektelic, and TTN.

### MQTT Broker

The MQTT Broker service provisions an MQTT broker instance within your project.
It lets you connect IoT devices and manage data transmission using the MQTT
protocol, supporting both data ingestion and distribution.

## Installing a Service

Open **Apps** in the top navigation to reach the App Catalog. Use the search box
or the category filters on the left to find a service, then click its card to
open the detail dialog and review the overview and features. Click **Next** to
open the install dialog.

The install dialog asks where the service should run:

- **In a project**: Add the service to an existing project. You pick the target
  **Project**, then the **Region** and **Version**.
- **New Project**: Provision the service alongside a new project. You pick the
  **Region** and **Version** only.

Under **Settings** you set the service **Name** and any required credentials.
Confirm to install. The service provisions networking, compute, and a default
autoscaling policy, then appears as a resource tab in the project.
