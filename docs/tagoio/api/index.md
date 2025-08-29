---
title: "API Overview"
description: "A brief introduction to TagoIO's API, explaining how to connect devices and applications, where to find the API documentation and SDK, and the standard response pattern returned by the API."
tags: ["tagoio", "api"]
---
It is easy to connect devices, data sources, or third‑party apps to your account using the TagoIO Application Programming Interface (API).

We provide a comprehensive set of APIs that give you full control to manage your accounts, data, devices, dashboards, and scripts. You can use the resources available in the Admin page to create, delete, or edit your accounts and dashboards; however, you can perform all the same actions directly using the API. (Admin page: https://admin.tago.io/)

Access the [API documentation](https://docs.tago.io/api/).

We follow RESTful principles. Before checking the API documentation, there are a few details you should know.

## SDK
Looking for our [SDK](../sdk/)?

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

For more details and endpoints, refer to the full [API documentation](https://docs.tago.io/api/) and the SDK page above.

## Security
TagoIO takes the necessary steps to protect your data in the database and also during the communication between our server and your devices. All communication is performed through Hypertext Transfer Protocol Secure (HTTPS) to avoid man‑in‑the‑middle and wiretapping attacks. Although HTTP can be used, it is not recommended because it removes the security of authentication and encryption provided by SSL/TLS protocols that are part of HTTPS. If you must use HTTP without SSL, add `_ssl=false` in the header or URL query string.

## Tokens
There are four types of tokens: **Account‑Token**, **Device‑Token**, **Analysis‑Token** and **Middleware‑Token**. You can generate all tokens from the TagoIO admin or directly using the API. The type of token and its expiration can also be defined. Add them in the header of your HTTP request:

| Header Key        | Header Value          |
|-------------------|-----------------------|
| Account-Token     | Only Account Token    |
| Device-Token      | Only Device Token     |
| Analysis-Token    | Only Analysis Token   |
| Middleware-Token  | Only Middleware Token |
| Authentication    | Any Token (Account or Device) |

Check the [usage policy](https://desk.zoho.com/portal/tagoio/en/kb/articles/63-usage-policy) based on number of requests per a certain period.

## Regional endpoints
When making a request to the TagoIO API, you must also specify the appropriate regional endpoint. The device data URL is `https://api.tago.io/data` through port `443`. For other regions use:

```
https://api.<region>.tago.io/
```

Check out the available regions in the [API documentation](https://api.docs.tago.io/#intro).

## See also

- [RESTful API](./restful-api)
- [Node.js SDK](../sdk/nodejs-sdk)
- [Python SDK](../sdk/python-sdk)
- [Device Token](../devices/device-token)
- [Authorization](../integrations/general/authorization)