---
title: "Web Service Overview"
description: "Review a web service connector's core details and set a display name to recognize it across the project."
keywords: [tagodeploy, webservice, middleware, connector, overview]
tags: ["tagodeploy", "webservice"]
slug: /tagodeploy/project/webservice/overview
---

A web service is a middleware connector that bridges an external IoT
network or protocol to TagoIO over webhooks. The Overview page shows
the connector's core details and lets you give it a display name you
can recognize across the project.

## Service Information

This section holds the identity of the connector. It is open by
default and contains three fields.

- **Display Name** is the only editable field. Use it to label the
  connector so you can tell it apart from others in the same project,
  for example "TTN US915" or "Sigfox EU". The name is required and can
  be up to 100 characters. The Save button stays disabled until you
  change the value.
- **Addon** is read-only and shows the connector type this service was
  created from. It reads "Middleware {Type}", for example "Middleware
  Chirpstack". Connector types include AWS IoT, Chirpstack, Everynet,
  Generic HTTPS, Loriot, MachineQ, Myriota, Senet, Sigfox, Tektelic,
  and TTN.
- **Service URL** is read-only and is the webhook endpoint your network
  posts uplinks to. It follows the pattern
  `https://<service-id>.<project-id>.tagoio.net`. A copy button next to
  the field puts the URL on your clipboard.

The display name is cosmetic. It does not change the connector type,
the Service URL, or how messages flow between the device and TagoIO.

## Related pages

The Overview page covers identity only. Two sibling pages handle the
rest of the connector.

- **Settings** holds the connector configuration: the credentials and
  endpoints the middleware uses to talk to the external network. This
  is where the network token and TagoIO API URL are set.
- **Instances** controls scaling, so you can adjust how much capacity
  the connector runs with.

## Danger Zone

This section is collapsed by default and holds one irreversible action.
**Remove service** deletes the connector from the project. Removing a
service cannot be undone, so a confirmation dialog appears before it
runs. After removal you are returned to the project management
overview. The button is only shown if you have permission to disable
addons.
