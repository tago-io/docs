---
title: "Secrets"
description: "This article explains what Secrets are in TagoIO, why to use them, and how to create a secret in the Admin panel. It also points to related documentation for Environment Variables, Analysis, and Actions."
tags: ["tagoio"]
---

Secrets are encrypted environment variables used to store sensitive information such as passwords and API keys. Each secret consists of a key (the secret's name) and a value (the sensitive data). Secrets keep their contents hidden once encrypted, making them safer than regular environment variables for confidential data.

Unlike regular Environment Variables (see [Environment Variables](../environment-variables)), secrets are encrypted so their contents remain hidden after encryption. This security feature is essential for protecting sensitive data within TagoIO. Secrets are especially useful when scripts or services need access to confidential information without exposing it to users or developers. You can retrieve secrets from the Analysis context in your Analysis code (see [Analysis documentation](../analysis/analysis-overview)) and use them in some Actions (see [Actions documentation](../actions/actions)).

To start using secrets, open your Admin panel (https://admin.tago.io/), navigate to the Account menu, and select "Secrets".

## Creating a Secret

To create a secret, open the "Secrets" page in the Admin panel and click on "+ New Secret". For every secret you create, you must define:

- Key — the name used to reference the secret
- Value — the secret data (encrypted and hidden)
- Tags — metadata to organize and filter secrets

<!-- Image placeholder removed for build -->