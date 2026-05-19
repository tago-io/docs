---
title: "Using your own AI provider"
description: "Configure your own AI provider for Tago AI at the profile level. Choose between OpenAI, Anthropic, AWS Bedrock, Google Gemini, or OpenRouter, with keys stored encrypted in TagoIO Secrets."
tags: ["tagoio"]
keywords: [tagoio, iot, tago ai, ai provider, openai, anthropic, bedrock]
---

By default, Tago AI runs on a model and provider selected by TagoIO. If you want direct control over which model handles your data — for compliance, cost, or model-preference reasons — you can connect your own provider to a profile.

<img src="/docs_imagem/tagoio/tago-ai-provider.png" alt="AI Provider configuration under Profile Settings › Services" width="550px" />

## Where to configure it

Go to **Profile Settings → Services → AI Provider**. The setting is per profile, so different profiles in your account can use different providers or stay on the TagoIO default.

Pick a provider from the **Select Provider** dropdown, enter the required credentials, and save. From that point on, Tago AI calls go through your account with that provider.

## Supported providers

You can choose from:

- **Use TagoIO default** — TagoIO handles the model and provider. No configuration needed.
- **OpenAI**
- **Anthropic**
- **AWS Bedrock**
- **Google Gemini**
- **OpenRouter**

Each provider asks for its own set of credentials (API key, region, account ID, and so on, depending on the service).

## How your keys are stored

Provider credentials are stored in [TagoIO Secrets](/docs/tagoio/getting-started/secrets.md) and encrypted at rest. They are only read when Tago AI needs to send a request and are not exposed through the Admin once saved.

## Request limits and billing

When a profile uses its own AI provider:

- Requests go through your provider account and are billed by that provider directly.
- The profile's [TagoAI request limits](/docs/tagoio/profiles/services/tago-ai-service.md) do not apply — you manage rate limits and quotas with your provider.

When a profile uses **Use TagoIO default**, requests count against the monthly TagoAI limit included in the plan.

## Switching back to the default

To stop using your own provider, open the same settings page, select **Use TagoIO default**, and save. Tago AI will resume using the TagoIO-managed provider on the next request.
