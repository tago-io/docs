---
sidebar_position: 1
title: Overview
---

# TagoTiP over TCP

**Guaranteed delivery** and **real-time commands**. TagoTiP over TCP ensures every data point arrives in order -- and the server can push commands to your device the moment they are ready.

:::note Connect Now
**Host** `tip.tago.io` -- **IP** `166.117.80.175`

| Port | TLS | TagoTiP | TagoTiP/S |
|------|-----|---------|-----------|
| **5693** | No | Yes | Yes |
| **5694** | Yes | Yes | Yes |
:::

Both ports accept both data formats. The server detects the mode **once per connection** by inspecting the first byte. Use port `5694` for transport-level encryption (TLS). For application-level encryption, see [TagoTiP/S](/docs/tagotip/tagotips/overview).

## Why TCP?

- **Reliable delivery** -- every frame is acknowledged
- **Persistent connections** -- one connect, many frames
- **Real-time commands** -- server pushes `CMD` frames instantly
- **Ordered data** -- frames arrive in sequence

## How It Works

```
Device                                    TagoIO
  |                                         |
  |── PUSH|hash|serial|[temp:=25]\n ──────> |
  |<──────── ACK|OK|1\n ─────────────────── |
  |                                         |
  |<──────── ACK|CMD|reboot\n ───────────── |  (server push)
```

The connection stays open. The server can push `CMD` frames at any time -- no polling needed.

## Get Started

- [**Quick Start**](./quick-start) -- Send data in minutes
- [**Reference**](./reference) -- Frame format, response codes, limits
