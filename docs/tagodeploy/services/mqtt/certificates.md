---
title: "MQTT Certificates"
description: "Enable TLS/SSL certificates for your MQTT broker, including required files and MTLS option."
keywords: [tagodeploy, iot, mqtt, certificates, tls]
tags: ["tagodeploy", "mqtt"]
slug: /tagodeploy/project/mqtt/certificates
---

# Certificates

Provide TLS certificates to encrypt broker traffic and verify clients. The
Certificates page is a form on the MQTT service. Edit the fields and use the
Save button in the page header to stage your changes, which take effect after
you deploy.

## What certificates do

Certificates secure the communication between the MQTT broker and your devices:

- **Encrypted communication**: encrypt data in transit between devices and the
  broker
- **Trusted connections**: establish connections using TLS
- **Client verification**: with MTLS, verify each connecting device by its
  certificate

## Enabling a custom certificate

Turn on **Enable Custom Certificate** to provide your own certificate material.
The form then accepts three values, each in its own text area with a copy and
expand control:

- **CA Certificate**: the Certificate Authority certificate
- **Server Certificate**: the server certificate
- **Server Key**: the private key for the server certificate

## Mutual TLS

Turn on **Enable MTLS** to require mutual TLS. With MTLS the broker requires a
custom certificate, and both the client and the broker authenticate each other
using certificates.
