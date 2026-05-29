---
title: "MQTT Connections"
description: "Live view of the devices currently connected to your project's MQTT broker."
keywords: [tagodeploy, iot, mqtt, connections, sessions]
tags: ["tagodeploy", "mqtt"]
slug: /tagodeploy/project/mqtt/connections
---

# Connections

This page is a live view of the devices currently connected to the broker. It
reads live broker state, so it shows who is connected right now rather than the
clients you have defined. There is no create action, the page is read-only.

## What a connection is

A connection is a live session on the broker. It is not the same as a client or
as topic access:

- A **connection** is one client connected to the broker right now. When the
  client disconnects, its row drops off the list.
- A **client** is the set of credentials that authenticate a device. Clients
  are created on the Clients page and exist whether or not anyone is connected.
- **Topic access** is who may publish or subscribe to which topics. That is
  controlled by Groups and Group Rules, not by this page.

One client can open several connections at once, and each shows up as its own
row.

## Reading the table

Each row describes one live session:

- **MQTT Client ID** is the client identifier sent in the connect packet.
- **IP Address** is the source address the broker sees for the session.
- **Protocol** is the connection protocol, shown as MQTT.
- **Keep-Alive** is the negotiated keep-alive interval in seconds.
- **Connected At** is when the session opened, in UTC. This column is sortable.
- **Group** is the group the client is assigned to.

## Finding and paging through sessions

Use the search box to filter by MQTT Client ID. The table pages through results
with the count and the previous and next controls at the bottom.

When no device is connected, the page shows an empty state instead of the table.
