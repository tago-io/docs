---
title: "MQTT Broker"
description: "Overview of the TagoDeploy MQTT Broker, including what you get, how it works, and when to use it."
tags: ["tagodeploy", "mqtt"]
slug: /tagodeploy/project/mqtt
---

The TagoDeploy MQTT Broker is a fully managed MQTT service that runs inside your
private TagoDeploy instance. It gives you a dedicated, single-tenant MQTT
infrastructure with enterprise security, fine-grained access control, and
built-in routing to TagoIO—separate from the public, multi-tenant TagoIO MQTT
broker.

Use it to deploy one or more private brokers, authenticate devices, enforce
topic-level permissions, and route messages to your projects with predictable
performance and full administrative control.

## What you get

- Private, isolated MQTT infrastructure within your TagoDeploy environment
- TLS encryption with custom certificate management
- Advanced authentication (per client) and ACLs via Groups
- Real-time visibility of connections and activity
- Multi-broker support in the same TagoDeploy instance
- Global deployment across 12+ AWS regions
- Integrated pipelines to deliver MQTT data to your API instance

<YouTube videoId="9mMBRIqedsk" />

## How it works (high level)

The broker processes data in three stages:

1. Authenticate: Devices connect over TLS using client credentials you define.
2. Authorize: Groups and ACLs control publish/subscribe permissions per topic.
3. Route: Pipelines forward matched topics to your API instance with the
   required authorization and network tokens.

## Typical setup

- Create the MQTT service in your region and track deployment in the console.
- Get the broker endpoint from Domains.
- Configure authentication (Client IDs, usernames, passwords).
- Define Groups and topic permissions (publish/subscribe).
- Link auth to Groups with ACLs.
- Create a Network and payload parser (e.g., extract serial, map to device).
- Configure a Pipeline: target API endpoint, topics, and credentials.
- Send data using your assigned credentials and topics.
