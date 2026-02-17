---
sidebar_position: 2
title: Quick Start
---

# UDP Quick Start

Three steps to your first data point.

## 1. Create a Device

1. Go to **Devices** in your TagoIO account and create a new device.
2. Select the network **TagoTiP UDP** and the connector **TagoTiP over UDP**.
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

For TagoTiP over UDP, you need the **token hash**.

:::tip
The token hash is safe on the wire -- it cannot be reversed to reveal the authorization. Keep the authorization (`at...`) secret; it is only needed for TagoTiP/S key derivation.
:::

See the [Authorization guide](/docs/tagoio/integrations/general/authorization) for more details.

## 3. Send Data

Replace `4deedd7bab8817ec` with your token hash and `sensor-01` with your serial.

### Push a temperature reading

```bash
echo -n 'PUSH|4deedd7bab8817ec|sensor-01|[temperature:=25.5#C]' | nc -u -w1 tip.tago.io 5683
```

```
ACK|OK|1
```

### Push multiple variables

```bash
echo -n 'PUSH|4deedd7bab8817ec|sensor-01|[temperature:=25.5#C;humidity:=60#%;active?=true]' | nc -u -w1 tip.tago.io 5683
```

```
ACK|OK|3
```

### Push location data

```bash
echo -n 'PUSH|4deedd7bab8817ec|tracker-01|[position@=39.74,-104.99,1609;speed:=45.2#km/h]' | nc -u -w1 tip.tago.io 5683
```

### Push raw payload (passthrough)

```bash
echo -n 'PUSH|4deedd7bab8817ec|sensor-01|>xDEADBEEF01020304' | nc -u -w1 tip.tago.io 5683
```

Raw bytes are delivered to your device's [Payload Parser](/docs/tagoio/devices/payload-parser).

### Pull the last stored value

```bash
echo -n 'PULL|4deedd7bab8817ec|sensor-01|[temperature]' | nc -u -w1 tip.tago.io 5683
```

```
ACK|OK|[temperature:=25.5#C@1694567890000]
```

### Ping (connectivity check)

```bash
echo -n 'PING|4deedd7bab8817ec|sensor-01' | nc -u -w1 tip.tago.io 5683
```

```
ACK|PONG
```

## Next

- [**Reference**](./reference) -- Variable syntax, response codes, limits
- [**TagoTiP/S**](/docs/tagotip/tagotips/overview) -- Encrypt your data on port `5684`
