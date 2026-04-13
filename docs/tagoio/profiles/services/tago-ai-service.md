---
title: "TagoAI Service"
description: "How TagoIO counts Tago AI requests, monthly limits per plan, and how using your own AI provider bypasses the limit."
tags: ["tagoio"]
keywords: [tagoio, iot, tago ai, ai requests, service limits]
---

Each message you send to [Tago AI](/docs/tagoio/tago-ai/) counts as one request. This limit defines the maximum number of requests a profile can make during a one-month period when using the TagoIO default AI provider. Unused requests in a billing cycle do not carry over to the next cycle.

## Monthly limits

| Plan    | Requests per month |
| ------- | -----------------: |
| Free    |                 40 |
| Starter |                150 |
| Scale   |                500 |

## Using your own AI provider

When a profile is configured with its own AI provider under **Profile Settings → Services → AI Provider**, Tago AI requests go through your provider account and are billed directly by that provider. The TagoIO monthly limits above do not apply in that case.

See [Using your own AI provider](/docs/tagoio/tago-ai/ai-provider.md) for setup details.

## Limits and warnings

- If the monthly TagoAI request limit for a profile is exceeded, no further Tago AI requests will be processed from that profile until either the limit is increased or the billing period ends.
- TagoIO sends warning notifications each time a service reaches 80%, 90%, and 100% of its limit.
