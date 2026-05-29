---
title: "MQTT Credentials"
description: "Understand the username and password credentials devices use to connect to the MQTT broker."
keywords: [tagodeploy, iot, mqtt, credentials, authentication]
tags: ["tagodeploy", "mqtt"]
slug: /tagodeploy/project/mqtt/credentials
---

# Credentials

Credentials are one of the two authentication types a client can use to connect
to the MQTT broker, the other being a certificate. There is no separate
Credentials page. You set credentials when you create or edit a client on the
[Clients](./clients) page.

Credentials are a username and password:

- **Username**: a unique identifier for the client.
- **Password**: the secret that validates the client's identity.

Credentials can be paired with a certificate for an extra layer of trust.
