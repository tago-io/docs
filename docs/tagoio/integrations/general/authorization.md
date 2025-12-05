---
title: "Authorization"
description: "This article explains what an Authorization is in TagoIO, when to use it versus a device-token, and how to generate an authorization for integrating external services with your devices."
tags: ["tagoio", "security"]
---

Authorization is used when you need to grant external services access to your
devices.

With a valid authorization, those services can also create new devices in your
account. These new devices will appear in the list as "Unassigned", making it
easier to scale your applications.

:::info

A Authorization token is different than a
[device-token](/docs/tagoio/devices/device-token.md).

> When to use each:
>
> - Use authorization only when integrating with external services, such as
>   LoRaWAN or Sigfox.
> - Use device-token when connecting directly with HTTPS or MQTT.

:::

## Generating an Authorization

To generate an authorization and give an external service access to your
devices, follow these steps:

1. Go to the Device section of your TagoIO account and click the
   "[Authorization](https://admin.tago.io/devices/authorization)" button.
   
   ![Devices list with Authorization button highlighted](/docs_imagem/tagoio/rounded-image-1764611068050.png)

2. In the next screen, enter a name you can identify later, fill any additional
   parameters requested by the integration, and press the Generate button.

   ![Generate Authorization screen showing name and parameters fields](/docs_imagem/tagoio/rounded-image-1762433245481.png)

Only certain integrations require an **Additional Parameter**. Check out the
[list of integrations](/docs/tagoio/integrations/index.md) to learn the parameter
needed for each provider.

Once the authorization is created, you can copy and paste it into the external
service portal.

How to use the authorization depends on the service that you are integrating.
Here you can see a list of service integrations.
