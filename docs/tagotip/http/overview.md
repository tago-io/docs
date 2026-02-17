---
sidebar_position: 1
title: Overview
---

# TagoTiP over HTTP

Standard HTTP you already know -- `POST` to send, `GET` to retrieve, `HEAD` to ping. A single `Authorization` header and a clean REST-style API. Works through every firewall and proxy.

:::note Connect Now
**Host** `tip.tago.io` -- **IP** `166.117.80.175`

| Port | TLS | TagoTiP | TagoTiP/S |
|------|-----|---------|-----------|
| **5703** | No (HTTP) | Yes | Yes |
| **5704** | Yes (HTTPS) | Yes | Yes |
:::

Both ports accept both data formats via URL path:
- `/v1/tip/{serial}` -- TagoTiP
- `/v1/tips` -- TagoTiP/S

Use port `5704` for HTTPS. For application-level encryption, see [TagoTiP/S](/docs/tagotip/tagotips/overview).

## Why HTTP?

- **Universal** -- every language and platform has an HTTP client
- **Firewall-friendly** -- passes through proxies and load balancers
- **Familiar** -- standard methods, headers, and status codes
- **Quick integration** -- one `curl` command gets you started

## How It Works

| HTTP Method | TagoTiP Action | Purpose |
|---|---|---|
| `POST` | PUSH | Send data |
| `GET` | PULL | Retrieve last values |
| `HEAD` | PING | Keepalive / poll commands |

```bash
curl -X POST https://tip.tago.io:5704/v1/tip/sensor-01 \
  -H "Authorization: TagoTiP 4deedd7bab8817ec" \
  -H "Content-Type: text/plain" \
  -d '[temperature:=25.5#C]'
```

Response: `200 OK` -- body `1` (one data point stored).

## Get Started

- [**Quick Start**](./quick-start) -- Send data in minutes
- [**Reference**](./reference) -- Endpoints, response codes, limits
