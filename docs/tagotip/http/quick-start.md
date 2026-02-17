---
sidebar_position: 2
title: Quick Start
---

# HTTP Quick Start

Three steps to your first data point.

## 1. Create a Device

1. Go to **Devices** in your TagoIO account and create a new device.
2. Select the network **TagoTiP HTTP** and the connector **TagoTiP over HTTP**.
3. Assign a **Serial Number** (e.g., `sensor-01`) -- it appears in the URL path `/v1/tip/{serial}`.

## 2. Create an Authorization

1. Go to **Devices** > **Authorization** at the top of the page.
2. Click **Generate**.
3. Set a name and select the token format **TagoTiP(s)**.
4. Click **Generate**.

You receive two credentials:

| Credential | Example | Used for |
|---|---|---|
| **Token Hash** | `4deedd7bab8817ec` (16 hex chars) | HTTP `Authorization` header |
| **Authorization** | `ate2bd...c0d0` (34 chars) | [TagoTiP/S](/docs/tagotip/tagotips/overview) encryption |

For TagoTiP over HTTP, you need the **token hash**.

:::tip
The token hash is safe in HTTP headers -- it cannot be reversed to reveal the authorization. Keep the authorization (`at...`) secret; it is only needed for TagoTiP/S key derivation.
:::

See the [Authorization guide](/docs/tagoio/integrations/general/authorization) for more details.

## 3. Send Data

Replace `4deedd7bab8817ec` with your token hash and `sensor-01` with your serial.

:::info Use HTTPS in production
Port `5704` (HTTPS) for production. Port `5703` (HTTP) for development or when TLS is handled externally.
:::

### Push a temperature reading

```bash
curl -X POST https://tip.tago.io:5704/v1/tip/sensor-01 \
  -H "Authorization: TagoTiP 4deedd7bab8817ec" \
  -H "Content-Type: text/plain" \
  -d '[temperature:=25.5#C]'
```

```
1
```

### Push multiple variables

```bash
curl -X POST https://tip.tago.io:5704/v1/tip/sensor-01 \
  -H "Authorization: TagoTiP 4deedd7bab8817ec" \
  -H "Content-Type: text/plain" \
  -d '[temperature:=25.5#C;humidity:=60#%;active?=true]'
```

```
3
```

### Push with body-level defaults

```bash
curl -X POST https://tip.tago.io:5704/v1/tip/sensor-01 \
  -H "Authorization: TagoTiP 4deedd7bab8817ec" \
  -H "Content-Type: text/plain" \
  -d '^batch_01@1694567890000{firmware=2.1}[temperature:=25.5#C;humidity:=60#%]'
```

### Push location data

```bash
curl -X POST https://tip.tago.io:5704/v1/tip/tracker-01 \
  -H "Authorization: TagoTiP 4deedd7bab8817ec" \
  -H "Content-Type: text/plain" \
  -d '[position@=39.74,-104.99,1609;speed:=45.2#km/h]'
```

### Push raw payload (passthrough)

```bash
curl -X POST https://tip.tago.io:5704/v1/tip/sensor-01 \
  -H "Authorization: TagoTiP 4deedd7bab8817ec" \
  -H "Content-Type: text/plain" \
  -d '>xDEADBEEF01020304'
```

Raw bytes are delivered to your device's [Payload Parser](/docs/tagoio/devices/payload-parser).

### Pull the last stored values

```bash
curl https://tip.tago.io:5704/v1/tip/sensor-01?variables=temperature,humidity \
  -H "Authorization: TagoTiP 4deedd7bab8817ec"
```

```
[temperature:=25.5#C@1694567890000;humidity:=60#%@1694567890000]
```

### Ping (connectivity check)

```bash
curl -I https://tip.tago.io:5704/v1/tip/sensor-01 \
  -H "Authorization: TagoTiP 4deedd7bab8817ec"
```

Response: `204 No Content`

### Poll for commands

```bash
curl -I https://tip.tago.io:5704/v1/tip/sensor-01 \
  -H "Authorization: TagoTiP 4deedd7bab8817ec"
```

When a command is pending:

```http
HTTP/1.1 200 OK
X-TagoTiP-CMD: reboot
```

## Next

- [**Reference**](./reference) -- Endpoints, response codes, limits
- [**TagoTiP/S**](/docs/tagotip/tagotips/overview) -- Application-level encryption via `POST /v1/tips`
