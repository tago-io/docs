---
title: "MQTT Clients"
description: "Create and manage client credentials that authenticate devices connecting to your project's MQTT broker."
tags: ["tagodeploy", "mqtt"]
slug: /tagodeploy/project/mqtt/clients
---

# Clients

This section allows you to create, edit and delete the clients that can connect
to your MQTT broker. The existing clients are displayed in a table with the
following columns:

- Name
- Authentication Type

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

## Authentication Types

Currently, there is a single authentication method:

### Username/Password Authentication

The standard authentication method where devices connect using:

- **Username**: A unique identifier for the client
- **Password**: A secure credential that validates the client's identity

## Managing Clients

### Creating a New Client

To create a new client, click the "New client" button. You will then be
redirected to a page where you can configure:

- **Client Name**: A descriptive name to identify the client in the system
- **Username**: The username that devices will use to connect
- **Password**: A secure password for authentication

### Editing a Client

To edit a client, click on the client's three-dot menu button and then select
the "Edit" option. You can modify the client's name, username, and password.

### Deleting a Client

To delete a client, click on the client's three-dot menu button and then select
the "Delete" option.

## Modification Impact

Editing or deleting clients will not immediately impact devices that are
currently connected to the broker. However, these changes will take effect for
the devices once they disconnect and attempt to reconnect.
