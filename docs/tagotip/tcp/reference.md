---
sidebar_position: 3
title: Reference
---

# TCP Reference

## Frame Format

Each frame ends with `\n` (byte `0x0A`). The server buffers bytes until `\n` arrives.

```
METHOD|AUTH|SERIAL|BODY\n
```

| Field | Description | Example |
|---|---|---|
| `METHOD` | `PUSH`, `PULL`, or `PING` | `PUSH` |
| `AUTH` | Token hash (16 hex chars) | `4deedd7bab8817ec` |
| `SERIAL` | Device serial number | `sensor-01` |
| `BODY` | Payload (omitted for PING) | `[temperature:=25.5#C]` |

:::warning
The trailing `\n` is **required** on TCP. Without it the frame is never processed.
:::

## Variables

Enclosed in `[]`, separated by `;`.

### Operators

| Operator | Type | Example |
|---|---|---|
| `:=` | Number | `temperature:=25.5` |
| `=` | String | `status=online` |
| `?=` | Boolean | `active?=true` |
| `@=` | Location (lat,lng or lat,lng,alt) | `position@=39.74,-104.99` |

### Suffixes (in order)

| Suffix | Prefix | Example |
|---|---|---|
| Unit | `#` | `temperature:=25.5#C` |
| Timestamp | `@` | `temperature:=25.5@1694567890000` |
| Group | `^` | `temperature:=25.5^batch_01` |
| Metadata | `{}` | `temperature:=25.5{source=dht22}` |

**All suffixes combined:**

```
temperature:=25.5#C@1694567890000^batch_01{source=dht22,quality=high}
```

### Body-Level Defaults

Apply group, timestamp, or metadata to all variables at once:

```
^batch_01@1694567890000{firmware=2.1}[temperature:=25.5#C;humidity:=60#%]
```

Variable-level suffixes **override** defaults. Metadata is **merged**.

### Passthrough

| Prefix | Encoding | Example |
|---|---|---|
| `>x` | Hex | `>xDEADBEEF01020304` |
| `>b` | Base64 | `>b3q2+7wECAwQ=` |

## Sequence Counter

Add `!N` after the method for replay protection and response correlation:

```
PUSH|!1|4deedd7bab8817ec|sensor-01|[temperature:=25.5#C]
→ ACK|!1|OK|1
PUSH|!2|4deedd7bab8817ec|sensor-01|[humidity:=60#%]
→ ACK|!2|OK|1
PUSH|!2|4deedd7bab8817ec|sensor-01|[pressure:=1013#hPa]
→ ACK|!2|ERR|invalid_seq
```

Counter must be strictly increasing. Reused counter `!2` was rejected.

## Response Codes

| Response | Meaning |
|---|---|
| `ACK\|OK\|N` | `N` data points stored |
| `ACK\|OK\|[...]` | PULL response with variable data |
| `ACK\|PONG` | Keepalive acknowledged |
| `ACK\|CMD\|<command>` | Server command (pushed at any time) |
| `ACK\|ERR\|invalid_token` | Invalid or expired token hash |
| `ACK\|ERR\|device_not_found` | Serial not found under your account |
| `ACK\|ERR\|invalid_payload` | Malformed frame or body |
| `ACK\|ERR\|invalid_seq` | Counter not greater than last accepted |
| `ACK\|ERR\|rate_limited` | Back off and retry |
| `ACK\|ERR\|payload_too_large` | Frame exceeds 16 KB |
| `ACK\|ERR\|server_error` | Retry after a delay |

## Commands

The server pushes commands on persistent connections at any time:

```
ACK|CMD|reboot
ACK|CMD|ota=https://example.com/v2.1.bin
```

Unsolicited commands never include `!N`. Use its presence to distinguish solicited vs. unsolicited frames.

## Limits

| Limit | Value |
|---|---|
| Max frame size | 16,384 bytes |
| Max variables per frame | 100 |
| Max metadata pairs | 32 |
| Variable name length | 100 chars |
| Unit length | 25 chars |
| Serial length | 100 chars |
| Idle timeout | 60 seconds |
