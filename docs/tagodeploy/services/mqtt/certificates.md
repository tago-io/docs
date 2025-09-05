---
title: "MQTT Certificates"
description: "Enable TLS/SSL certificates for your MQTT broker, including required files and MTLS option."
tags: ["tagodeploy", "mqtt"]
slug: /tagodeploy/project/mqtt/certificates
---

# Certificates

This section allows you to enable certificates for your MQTT broker to enable
TLS/SSL encryption.

## What are Certificates?

Certificates are used to secure the communication between the MQTT broker and
the devices. They provide:

- **Device Authentication**: Authenticate the devices connecting to the broker
- **Encrypted Communication**: Encrypt data transmission between devices and the
  broker
- **Secure Connections**: Establish trusted connections using TLS/SSL protocols

## Enabling Certificates

To enable certificates, click the "Enable certificates" button. You will then be
redirected to a page where you can upload the required certificate files.

### Required Certificate Files

You'll need the following certificate components:

- **CA Certificate**: The Certificate Authority certificate
- **Server Certificate**: The server-specific certificate
- **Server Private Key**: The private key for the server certificate

## Additional Security Features

When certificates are enabled, you can also enable **MTLS (Mutual TLS)** for
enhanced security, which requires both the client and server to authenticate
each other using certificates.
