---
title: "Secrets"
description: "This article explains what Secrets are in TagoIO, why to use them, and how to create a secret in the Admin panel. It also points to related documentation for Environment Variables, Analysis, and Actions."
tags: ["tagoio"]
---
Secrets are encrypted environment variables used to store sensitive information such as passwords and API keys. Each secret consists of a key (the secret's name) and a value (the sensitive data). Secrets keep their contents hidden once encrypted, making them safer than regular environment variables for confidential data.

Unlike regular [Environment Variables](/docs/tagoio/analysis/environment-variables.md), secrets are encrypted so their contents remain hidden after encryption. This security feature is essential for protecting sensitive data within TagoIO. Secrets are especially useful when scripts or services need access to confidential information without exposing it to users or developers. You can retrieve secrets from the Analysis context in your [Analysis documentation](/docs/tagoio/analysis/) code and use them in some [Actions documentation](/docs/tagoio/actions/).

To start using secrets, open your [Admin](https://admin.tago.io/) panel , navigate to the Account menu, and select "Secrets".

## Creating a Secret

To create a secret, open the "Secrets" page in the Admin panel and click on "+ New Secret". For every secret you create, you must define:

- **Key** — the name used to reference the secret.
  *Keys cannot be edited once the secret is created, so choose your keys carefully.*
- **Value** — the secret data (encrypted and hidden). This field can contain plain text or a structured value depending on the chosen secret type.
- **Tags** — metadata to organize and filter secrets. [Tags](/docs/tagoio/getting-started/tags-system.md) are used across various assets within TagoIO and allow you to grant Analysis access to specific secrets via Access Management policies.

### Types of Secrets

Secrets can be stored in several formats, each suited for different use cases:

#### Text
A secure storage option for text-based data that allows both letters and numbers. This secret can hold up to **2048 characters**.

#### SMTP Secret
Used exclusively for securely storing information required to configure an action that sends emails through external email providers.
- Supports TLS connections on port **587**.
- Refer to the [Defining Actions](/docs/tagoio/actions/defining-actions.md) documentation for more details about this action.

#### AWS SQS Secret
Used exclusively for securely storing information required to communicate with Amazon SQS.
To obtain these values, log into your AWS Management Console and navigate to the SQS service. From there, you can retrieve:
- `_aws_region_`
- `_queue_url_`
- `_access_key_id_`
- `_secret_access_key_`

These credentials are then entered into the corresponding fields of the secret.

## Using Secrets in Analysis

Secrets are accessible through the `_context.environment_` parameter, allowing you to pass variable values directly into your script's context.
You can also overwrite a Secret’s value in an Analysis by creating an environment variable with the same Secret Key.

Example:
```python
# Retrieve a secret value inside an analysis
secret_value = _context.environment_.get('MY_SECRET_KEY')
```

## Granting Your Analysis Access to Secrets

Before utilizing secrets as environment variables in your script, ensure that your analysis has the necessary permissions to access the information within your secret. This is achieved by:

1. Assigning tags to your secret.
2. Creating an Access Management policy that grants your analysis permission to read those tags.

Refer to the [Access Management](/docs/tagoio/tagorun/access-management/) module for detailed instructions on creating policies and managing permissions.

---
