---
title: "RESTful API"
description: "This article summarizes TagoIO's RESTful API capabilities, the common operations you can perform, the three token types required for API access, and a note about rate limits when executing requests."
tags: ["tagoio", "api"]
---
We provide a powerful set of RESTful API endpoints and documentation that's used by Analysis behind the scenes to perform requests to TagoIO. See [Restful API documentation](https://api.docs.tago.io/) and [Analysis](/docs/tagoio/analysis/) for more details.

## What you can do with the API
The RESTful API supports a wide range of operations, including (but not limited to):

- Creating, deleting, and editing **devices**
- Creating, deleting, and editing **notifications**
- Creating, deleting, and editing **users**
- Creating, deleting, and editing **actions**

## Token types
To use the RESTful API you must provide a token. There are three different types of tokens in TagoIO:

- `Device-Token` — Performs data requests. See [Device‑Token documentation](/docs/tagoio/devices/device-token.md).
- `Account-token` — Performs entity requests, such as creating devices. See [Account‑Token documentation](/docs/tagoio/profiles/account-token.md).
- `Network-token` — Performs data requests through a network connection; only useful if you are using your own network. See [Network integration documentation](/docs/tagoio/integrations/general/creating-a-network-integration.md).

## Rate limits
When executing requests to TagoIO, there is a limit on the number of requests that can be made during a certain time period. Read more about our [Rate Limits](/docs/tagoio/profiles/services/rate-limits-hard-limits.md).