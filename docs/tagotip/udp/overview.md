---
sidebar_position: 1
title: Overview
---

# TagoTiP over UDP

The **fastest path** from sensor to cloud. No connection setup, no handshake -- a single datagram carries your data to TagoIO in as few as 60 bytes.

:::note Connect Now
**Host** `tip.tago.io` -- **IP** `166.117.80.175`

| Port | TLS | TagoTiP | TagoTiP/S |
|------|-----|---------|-----------|
| **5683** | No | Yes | No |
| **5684** | No | No | Yes |
:::

UDP does not support TLS. For application-level encryption, use [TagoTiP/S](/docs/tagotip/tagotips/overview) on port `5684`.

## Why UDP?

- **Zero connection overhead** -- no handshake, no teardown
- **Minimal power consumption** -- ideal for battery-powered devices
- **Fire-and-forget** -- send and move on
- **Tiny footprint** -- a single `sprintf` builds your frame

## How It Works

```
Device                              TagoIO
  |                                   |
  |── PUSH|hash|serial|[temp:=25] ──>|
  |<──────── ACK|OK|1 ───────────────|
```

One datagram in, one datagram out. Each datagram carries exactly **one** frame.

## Get Started

- [**Quick Start**](./quick-start) -- Send data in minutes
- [**Reference**](./reference) -- Frame format, response codes, limits
