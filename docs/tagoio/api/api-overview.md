---
title: "API Overview"
description: "A brief introduction to TagoIO's API, explaining how to connect devices and applications, where to find the API documentation and SDK, and the standard response pattern returned by the API."
tags: ["tagoio", "api"]
---

It is easy to connect devices, data sources, or third‑party apps to your account using the TagoIO Application Programming Interface (API).

We provide a comprehensive set of APIs that give you full control to manage your accounts, data, devices, dashboards, and scripts. You can use the resources available in the Admin page to create, delete, or edit your accounts and dashboards; however, you can perform all the same actions directly using the API. (Admin page: https://admin.tago.io/)

Access the [API documentation](link-to-api-documentation).

We follow RESTful principles. Before checking the API documentation, there are a few details you should know.

## SDK
Looking for our [SDK](link-to-sdk)?

## API response pattern
All responses from the TagoIO API follow a consistent pattern. You will typically receive responses similar to the examples below:

```javascript
// For success:
{
  "status": true,
  "result": [...]
}

// For warning:
{
  "status": true,
  "result": {...},
  "message": "Warning message"
}

// For error:
{
  "status": false,
  "result": {
    "message": "Error message"
  }
}
```

- status: boolean indicating general request success (true) or failure (false).
- result: contains the response data (array or object) or error details.
- message: optional text included for warnings or additional information on failures.

For more details and endpoints, refer to the full [API documentation](link-to-api-documentation) and the SDK page above.