---
title: "Environment Variables"
description: "This article explains how to configure environment variables for TagoIO Analyses, how they are accessed inside a script, and what each field in the environment variables UI represents."
tags: ["tagoio"]
---
Environment variables let you pass values into the execution context of your Analysis script. Use them to store tokens, account IDs, device IDs, or any other values that the script will use at runtime. The Analysis retrieves these values as environment parameters and exposes them to your code via the `context.environment` global object.

![Environment Variables](/docs_imagem/tagoio/rounded-image-1761143952960.png)

## How to use Environment Variables

Use environment variables to change how your code behaves. You can access them using the `context.environment` global variable in your Analysis code. Example (JavaScript):

```javascript
// Example: read an environment variable named MY_TOKEN
const myToken = context.environment.MY_TOKEN;

// Provide a default when necessary
const timeout = parseInt(context.environment.TIMEOUT || '30', 10);
```

In the environment variables UI (see image above):
1. New Environment variable: Add or remove an environment variable using the plus/minus buttons (marked as 1 in the image).
2. Variable Key: The variable name (marked as 2 in the image). This is the key you will use in `context.environment` (e.g., MY_TOKEN).
3. Variable Value: The value of the variable (marked as 3 in the image). Values can be integer or string; convert or parse values in your code as needed.

You can have up to **20 environment variables** per Analysis. If you exceed this limit, the UI will display a notification indicating that the maximum capacity has been reached.

If you need to store sensitive information such as passwords or API keys, consider using **Secrets**, which are encrypted environment variables designed for this purpose. Learn more about [Secrets](/docs/tagoio/getting-started/secrets.md).

Note: After adding or editing environment variables in the Analysis editor, save or run the Analysis so the changes take effect.
