---
sidebar_position: 2
title: Quick Start
---

# TCP Quick Start

Three steps to your first data point.

## 1. Create a Device

1. Go to **Devices** in your TagoIO account and create a new device.
2. Select the network **TagoTiP TCP** and the connector **TagoTiP over TCP**.
3. Assign a **Serial Number** (e.g., `sensor-01`) -- this is how TagoTiP identifies your device.

## 2. Create an Authorization

1. Go to **Devices** > **Authorization** at the top of the page.
2. Click **Generate**.
3. Set a name and select the token format **TagoTiP(s)**.
4. Click **Generate**.

You receive two credentials:

| Credential | Example | Used for |
|---|---|---|
| **Token Hash** | `4deedd7bab8817ec` (16 hex chars) | TagoTiP frames |
| **Authorization** | `ate2bd...c0d0` (34 chars) | [TagoTiP/S](/docs/tagotip/tagotips/overview) encryption |

For TagoTiP over TCP, you need the **token hash**.

:::tip
The token hash is safe on the wire -- it cannot be reversed to reveal the authorization. Keep the authorization (`at...`) secret; it is only needed for TagoTiP/S key derivation.
:::

See the [Authorization guide](/docs/tagoio/integrations/general/authorization) for more details.

## 3. Send Data

Replace `4deedd7bab8817ec` with your token hash and `sensor-01` with your serial.

### Push a temperature reading

```bash
echo 'PUSH|4deedd7bab8817ec|sensor-01|[temperature:=25.5#C]' | nc tip.tago.io 5693
```

```
ACK|OK|1
```

### Interactive session

Open a persistent connection:

```bash
nc tip.tago.io 5693
```

Type frames and see responses in real time:

```
PING|4deedd7bab8817ec|sensor-01
ACK|PONG
PUSH|4deedd7bab8817ec|sensor-01|[temperature:=25.5#C;humidity:=60#%]
ACK|OK|2
PULL|4deedd7bab8817ec|sensor-01|[temperature]
ACK|OK|[temperature:=25.5#C@1694567890000]
```

### Push a batch with timestamps (datalogger)

```bash
echo 'PUSH|4deedd7bab8817ec|logger-01|[temp:=25.5@1694567890000;temp:=26.1@1694567900000;temp:=25.8@1694567910000]' | nc tip.tago.io 5693
```

```
ACK|OK|3
```

### Push raw payload (passthrough)

```bash
echo 'PUSH|4deedd7bab8817ec|sensor-01|>xDEADBEEF01020304' | nc tip.tago.io 5693
```

Raw bytes are delivered to your device's [Payload Parser](/docs/tagoio/devices/payload-parser).

### Pull the last stored values

```bash
echo 'PULL|4deedd7bab8817ec|sensor-01|[temperature;humidity]' | nc tip.tago.io 5693
```

```
ACK|OK|[temperature:=25.5#C@1694567890000;humidity:=60#%@1694567890000]
```

## Receiving Commands

On a persistent connection, the server pushes commands instantly:

```
ACK|CMD|reboot
ACK|CMD|ota=https://example.com/v2.1.bin
```

No polling needed -- just keep the connection open.

## Using TLS (port 5694)

```bash
echo 'PUSH|4deedd7bab8817ec|sensor-01|[temperature:=25.5#C]' | openssl s_client -connect tip.tago.io:5694 -quiet
```

Same protocol, same frames -- TLS is handled by the load balancer.

## Next

- [**Reference**](./reference) -- Variable syntax, response codes, limits
- [**TagoTiP/S**](/docs/tagotip/tagotips/overview) -- Application-level encryption on both ports
