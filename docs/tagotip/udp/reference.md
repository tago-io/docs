---
sidebar_position: 3
title: Reference
---

# UDP Reference

## Frame Format

One datagram = one frame. Trailing `\n` is optional.

```
METHOD|AUTH|SERIAL|BODY
```

| Field | Description | Example |
|---|---|---|
| `METHOD` | `PUSH`, `PULL`, or `PING` | `PUSH` |
| `AUTH` | Token hash (16 hex chars) | `4deedd7bab8817ec` |
| `SERIAL` | Device serial number | `sensor-01` |
| `BODY` | Payload (omitted for PING) | `[temperature:=25.5#C]` |

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
PUSH|!42|4deedd7bab8817ec|sensor-01|[temperature:=25.5#C]
→ ACK|!42|OK|1
```

Must be strictly increasing.

## Response Codes

| Response | Meaning |
|---|---|
| `ACK\|OK\|N` | `N` data points stored |
| `ACK\|OK\|[...]` | PULL response with variable data |
| `ACK\|PONG` | Keepalive acknowledged |
| `ACK\|CMD\|<command>` | Server command (via PING response) |
| `ACK\|ERR\|invalid_token` | Invalid or expired token hash |
| `ACK\|ERR\|device_not_found` | Serial not found under your account |
| `ACK\|ERR\|invalid_payload` | Malformed frame or body |
| `ACK\|ERR\|invalid_seq` | Counter not greater than last accepted |
| `ACK\|ERR\|rate_limited` | Back off and retry |
| `ACK\|ERR\|payload_too_large` | Frame exceeds 16 KB |
| `ACK\|ERR\|server_error` | Retry after a delay |

## Commands

Poll with `PING` to receive pending commands:

```
→ PING|4deedd7bab8817ec|sensor-01
← ACK|CMD|reboot
```

## Limits

| Limit | Value |
|---|---|
| Max frame size | 16,384 bytes |
| Max variables per frame | 100 |
| Max metadata pairs | 32 |
| Variable name length | 100 chars |
| Unit length | 25 chars |
| Serial length | 100 chars |

:::tip
Keep datagrams under ~1,400 bytes to avoid IP fragmentation.
:::
