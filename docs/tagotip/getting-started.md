---
sidebar_position: 3
sidebar_label: Getting Started
title: Getting Started
---

# Getting Started

Set up your device and authorization before sending data over any transport.

## Step 1: Create a Device

1. Go to **Devices** in your TagoIO account and create a new device.
2. Select the network **TagoTiP** and the connector for your transport (UDP, TCP, HTTP, or MQTT).
3. Assign a **Serial Number** (e.g., `SN0042`) - this is how TagoTiP identifies your device.

## Step 2: Create an Authorization

1. Go to **Devices** > **Authorization** at the top of the page.
2. Click **Generate**.
3. Set a name and select the token format **TagoTiP(s)**.
4. Click **Generate**.

You receive two credentials:

| Credential | Example | Used for |
|---|---|---|
| **Token Hash** | `4deedd7bab8817ec` (16 hex chars) | TagoTiP frames (plaintext) |
| **Authorization** | `ate2bd...c0d0` (34 chars) | [TagoTiP/S](./encryption) encryption key derivation |

:::tip
The token hash is safe on the wire - it cannot be reversed to reveal the authorization. Keep the authorization (`at...`) secret; it is only needed for TagoTiP/S key derivation.
:::

See the [Authorization guide](/docs/tagoio/integrations/general/authorization) for more details.

## Next steps

Pick your transport and send your first data point:

- [**UDP**](./udp) - fire-and-forget telemetry
- [**TCP**](./tcp) - reliable delivery and real-time commands
- [**HTTP**](./http) - simplicity and standard tooling
- [**MQTT**](./mqtt) - pub/sub and intermittent connectivity
