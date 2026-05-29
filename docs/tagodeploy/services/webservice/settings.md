---
title: "Web Service Settings"
description: "Set the network token and API endpoint the middleware uses to bridge your IoT network to TagoIO."
keywords: [tagodeploy, webservice, middleware, settings, network token, api url]
tags: ["tagodeploy", "webservice"]
slug: /tagodeploy/project/webservice/settings
---

A web service is a middleware connector that relays uplink messages from an
external network or protocol to TagoIO over webhooks, and often relays downlink
messages back to devices. This page holds the connector's configuration: the
credentials and endpoints it uses to talk to both sides.

## Configuration

The Configuration section holds the credentials and endpoints used by this
middleware.

- **Network Token** is selected from a network combobox. Pick the network you
  want the connector to use, and use the "Refresh networks" button to reload the
  list. A "Use custom token (advanced)" toggle reveals a manual token text field
  if you need to supply a token by hand instead of picking from the list.
- **TagoIO Api URL** is the API endpoint the connector posts to. It defaults to
  `https://api.<project-id>.tagoio.net`.

## Saving changes

Save is available once you edit a field. The button stays disabled while the
form is unchanged, and the whole form locks while a deployment for the project
is in flight, with an alert at the top of the page. Saving does not apply the
change to the running connector right away. It stages the change through the
project deploy flow, where it is applied together with the project's other
pending changes on the next deploy.

## Related pages

The Overview page shows the service identity, such as its display name and
service URL, and the action to remove it from the project. The Instances page
controls how the connector scales. Use this Settings page for the connector's
network token and API endpoint.
