---
title: "MQTT Clients"
description: "Create and manage client credentials that authenticate devices connecting to your project's MQTT broker."
keywords: [tagodeploy, iot, mqtt, clients, authentication]
tags: ["tagodeploy", "mqtt"]
slug: /tagodeploy/project/mqtt/clients
---

# Clients

Clients are the credentials that devices use to authenticate with the broker.
This page lists, creates, edits, and deletes them. Existing clients show in a
table with these columns:

- **Client Name** (sortable)
- **Authentication**
- **Actions** (a per-row menu)

Use the search box to filter by client name. The table pages through results
with the count and page controls at the bottom.

## What are Clients?

Clients are authentication credentials that enable your devices to connect to
the MQTT broker. Each client represents a set of login credentials (username and
password) that devices use to establish secure connections with the broker.

Clients work as the first layer of access control in the MQTT security model:

- **Authentication**: Verifies that devices are who they claim to be
- **Identification**: Provides a unique identity for each connecting device
- **Integration**: Works with Groups and Group Rules to determine access
  permissions

## How Clients Work

When a device attempts to connect to the MQTT broker:

1. **Connection Request**: The device presents its client credentials (username
   and password)
2. **Authentication**: The broker validates the credentials against the
   registered clients
3. **Group Assignment**: The broker uses Group Rules to determine which groups
   the client belongs to
4. **Permission Application**: The client inherits all ACL permissions from its
   assigned groups

## Authentication

A client authenticates with one of two methods, shown in the Authentication
column as either **Credentials** or **Certificate**.

### Credentials

Username and password authentication. The device connects using:

- **Username**: a unique identifier for the client
- **Password**: a secret that validates the client's identity

Credentials can be paired with a certificate for an extra layer of trust.

### Certificate

Authentication backed by a client certificate, verified by the broker when
custom certificates and MTLS are enabled on the Certificates page.

## Managing Clients

### Creating a new client

Click **New Client** to open the dialog. Set:

- **Name**: a descriptive name to identify the client
- **Authentication**: choose Credentials and fill in the **Username** and
  **Password**

Click **Create client** to add it.

### Editing a client

Open the client's row menu and select Edit to change its name and
authentication.

### Deleting a client

Open the client's row menu and select Delete.

## Modification Impact

Editing or deleting clients will not immediately impact devices that are
currently connected to the broker. However, these changes will take effect for
the devices once they disconnect and attempt to reconnect.
