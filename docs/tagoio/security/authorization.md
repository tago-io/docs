---
title: "Authorization"
description: "This article explains what an Authorization is in TagoIO, when to use it versus a device-token, and how to generate an authorization for integrating external services with your devices."
tags: ["tagoio", "security"]
---

Authorization is used when you need to grant external services access to your devices.

With a valid authorization, those services can also create new devices in your account. These new devices will appear in the list as "Unassigned", making it easier to scale your applications. See [managing devices](../devices/managing-devices) for more details.

> Note: Authorization is different from [device-token](../devices/device-token).

> When to use each:
> - Use authorization only when integrating with external services, such as LoRaWAN or Sigfox.  
> - Use device-token when connecting directly with HTTPS or MQTT.

## Generating an Authorization

To generate an authorization and give an external service access to your devices, follow these steps:

1. Go to the Device section of your TagoIO account and click the "Authorization" button.
   ![Devices list with Authorization button highlighted](/docs_imagem/tagoio/authorization-2.png)

2. In the next screen, enter a name you can identify later, fill any additional parameters requested by the integration, and press the Generate button.
   ![Generate Authorization screen showing name and parameters fields](/docs_imagem/tagoio/authorization-3.png)

After generating the authorization, use the provided credentials/tokens in the external service's configuration so it can access and (if permitted) create devices in your account.

## See also

- [Device Token](../devices/device-token)
- [Managing Devices](../devices/managing-devices)
- [Access Management](./access-management)
- [Connector Overview](../integrations/connector-overview)