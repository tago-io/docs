---
sidebar_position: 3
title: Reference
---

# HTTP Reference

## Authentication

Every request includes the token hash in the `Authorization` header:

```
Authorization: TagoTiP <token-hash>
```

```
Authorization: TagoTiP 4deedd7bab8817ec
```

## Endpoints

### `POST /v1/tip/{serial}` -- Send Data

| | |
|---|---|
| **Header** | `Authorization: TagoTiP <token-hash>` |
| **Content-Type** | `text/plain` |
| **Body** | TagoTiP PUSH body |
| **Success** | `200 OK` -- body is data point count |

**Body formats:**

```
[temperature:=25.5#C;humidity:=60#%]
^batch_01@1694567890000{firmware=2.1}[temperature:=25.5#C]
>xDEADBEEF01020304
>b3q2+7wECAwQ=
```

### `GET /v1/tip/{serial}?variables=...` -- Retrieve Data

| | |
|---|---|
| **Header** | `Authorization: TagoTiP <token-hash>` |
| **Query** | `variables=var1,var2,...` |
| **Success** | `200 OK` -- body is variable list |

```
[temperature:=25.5#C@1694567890000;humidity:=60#%@1694567890000]
```

Missing variables are silently omitted.

### `HEAD /v1/tip/{serial}` -- Keepalive / Commands

| | |
|---|---|
| **Header** | `Authorization: TagoTiP <token-hash>` |
| **No command** | `204 No Content` |
| **Pending command** | `200 OK` + `X-TagoTiP-CMD` header |

```
X-TagoTiP-CMD: reboot
X-TagoTiP-CMD: ota=https://example.com/v2.1.bin
```

### `POST /v1/tips` -- TagoTiP/S (Encrypted)

| | |
|---|---|
| **Content-Type** | `application/octet-stream` |
| **Body** | Binary TagoTiP/S envelope |

No `Authorization` header. See [TagoTiP/S](/docs/tagotip/tagotips/overview).

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

## Response Codes

| HTTP Status | Meaning | Body |
|---|---|---|
| `200 OK` | Success | PUSH: count. PULL: variables. |
| `204 No Content` | PING ok | -- |
| `400 Bad Request` | Malformed body | `invalid_payload` |
| `401 Unauthorized` | Invalid auth | `invalid_token` |
| `404 Not Found` | Unknown device/variable | `device_not_found` |
| `429 Too Many Requests` | Rate limited | `rate_limited` |
| `500 Internal Server Error` | Server error | `server_error` |

## Limits

| Limit | Value |
|---|---|
| Max request body | 16,384 bytes |
| Max variables per request | 100 |
| Max metadata pairs | 32 |
| Variable name length | 100 chars |
| Unit length | 25 chars |
| Serial length | 100 chars |
