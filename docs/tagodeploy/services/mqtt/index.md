---
title: "MQTT Broker"
description: "Overview of the TagoDeploy MQTT Broker, including what you get, how it works, and when to use it."
keywords: [tagodeploy, iot, mqtt, broker, device communication]
tags: ["tagodeploy", "mqtt"]
slug: /tagodeploy/project/mqtt
---

The TagoDeploy MQTT Broker is a fully managed MQTT service that runs inside your
private TagoDeploy instance. It gives you a dedicated, single-tenant MQTT
infrastructure with enterprise security, fine-grained access control, and
built-in routing to TagoIO, separate from the public, multi-tenant TagoIO MQTT
broker.

Use it to deploy one or more private brokers, authenticate devices, enforce
topic-level permissions, and route messages to your projects with predictable
performance and full administrative control.

## What you get

- Private, isolated MQTT infrastructure within your TagoDeploy environment
- TLS encryption with custom certificate management
- Per-client authentication and topic access control through Groups
- Live visibility of connected devices
- Multi-broker support in the same TagoDeploy instance
- Pipelines that forward MQTT messages to your API instance

<YouTube videoId="9mMBRIqedsk" />

## How it works (high level)

The broker processes data in three stages:

1. Authenticate: devices connect over TLS using clients you define.
2. Authorize: Groups and their ACL permissions control publish and subscribe
   access per topic, and Group Rules assign clients to those groups.
3. Route: Pipelines forward mapped topics to your API instance with the
   required authorization and network tokens.

## MQTT sub-pages

The broker service splits its configuration across these pages:

- **Overview**: broker name, service URL, and service controls.
- **Instances**: machine size and autoscaling for the broker service.
- **Settings**: broker-level configuration.
- **Clients**: credentials that devices use to authenticate.
- **Groups**: bundles of ACL permissions that allow or deny topic access.
- **Group Rules**: rules that assign clients to groups automatically.
- **Connections**: live view of devices currently connected.
- **Pipelines**: forward incoming MQTT messages to external services, with
  topic mappings on the same page.
- **Certificates**: TLS certificates that encrypt broker traffic and verify
  clients.

## Typical setup

- Add the Broker from the App Catalog and track its deployment.
- Get the broker endpoint from Domains.
- Create clients with credentials or certificate authentication.
- Define Groups with ACL permissions for publish and subscribe access.
- Use Group Rules to assign clients to groups.
- Configure a Pipeline with the target API URL and tokens, then map topics
  to it.
- Connect your devices using their credentials and authorized topics.
