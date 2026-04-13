---
title: "Tago AI"
description: "Tago AI is an assistant built into the TagoIO Admin. It answers architecture questions, creates and edits resources, writes Analysis code, and helps you debug your data."
tags: ["tagoio"]
keywords: [tagoio, iot, tago ai, assistant, ai]
---

Tago AI is an assistant that lives inside the TagoIO Admin and helps you get work done on the platform. You can ask it questions grounded in the official TagoIO documentation, and you can ask it to carry out tasks for you — create a dashboard, draft Analysis code, inspect a device, or explore your data.

<img src="/docs_imagem/tagoio/tago-ai-interface.webp" alt="Tago AI main interface in the TagoIO Admin" width="550px" />

## Where to find it

Tago AI is available throughout the Admin:

- The star-shaped icon in the main sidebar opens the assistant from anywhere.
- The top bar on the [Analysis](/docs/tagoio/analysis/) and [Dashboards](/docs/tagoio/dashboards/) pages opens it in the current context.

When you open Tago AI from a specific page, it receives telemetric information about what you are currently viewing, so you can ask about the screen in front of you without repeating context.

## What you can do with it

Tago AI is designed to work alongside you as you use TagoIO. You can use it to:

- Ask questions about TagoIO architecture, features, and best practices.
- Inspect or edit [Devices](/docs/tagoio/devices/), [Dashboards](/docs/tagoio/dashboards/), [Actions](/docs/tagoio/actions/), and [Analysis](/docs/tagoio/analysis/) scripts.
- Generate Analysis code tailored to your devices and data formats.
- Debug scripts and investigate unexpected behavior.
- Run data analysis operations across your devices.

The depth of what Tago AI can change depends on the mode you select. See [Using Tago AI](/docs/tagoio/tago-ai/using-tago-ai.md) for details on modes, chat history, and context awareness.

## Privacy and data handling

Tago AI uses safe defaults to avoid retaining your data. By default, TagoIO selects the model and provider that meet the evaluations and privacy measures we have in place.

If you want direct control over which model and provider process your data, you can configure your own AI provider for a profile. Your provider keys are stored encrypted in [TagoIO Secrets](/docs/tagoio/getting-started/secrets.md) and only used when you send a request to Tago AI. See [Using your own AI provider](/docs/tagoio/tago-ai/ai-provider.md).

## Request limits

Requests to Tago AI count against a monthly limit that depends on your plan. Those limits only apply when using the TagoIO default provider — when you bring your own provider, requests go through your credentials and are not counted against the TagoIO limit.

See [TagoAI Service](/docs/tagoio/profiles/services/tago-ai-service.md) for limits per plan.
