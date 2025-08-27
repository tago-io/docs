---
title: "Defining Actions"
description: "This article explains how to define Actions in TagoIO, including how to configure push notifications to yourself and references for using message variables."
tags: ["tagoio", "actions"]
sidebar_position: 1
---
Actions are initiated based on specific conditions and can execute a variety of tasks. The first step in configuring an Action is to specify the desired action. Below are the different types of actions available:

## Push Notification to myself

This action can notify you on your account via the Admin (https://admin.tago.io/) in your browser or through the TagoIO app. You can customize the title and content of the notification. In the message field, you can use variables to dynamically include information in your text. For more details on how to use message variables, refer to the "Message Variables" section at the end of this page.

Please note that the notification is only sent to the account where it was created.

![Push notification action configuration](/docs_imagem/tagoio/defining-actions-2.png)

## Push Notifications to Run Users

Send notifications to designated **Run Users** within your **Run**. You must specify the particular Run User you wish to notify. For notifying multiple users, please refer to our documentation on [notifications using analysis](/tagoio/notifications/notifications-for-users).

In the message field, you can use variables to dynamically include information in your text. For more details on how to use message variables, refer to the "Message Variables" section at the end of this page.

![Image 2](/docs_imagem/tagoio/1576606566858-r_Q.png)

## Send Email

Sends an email to a specified address when certain conditions are met. You can specify one or multiple recipients by separating email addresses with a semicolon (;).

In the message field, you can use variables to dynamically include information in your text. For more details on how to use message variables, refer to the "Message Variables" section at the end of this page.

![Image 3](/docs_imagem/tagoio/1576606418570-3DI.png)

![Image 4: Warning](/docs_imagem/tagoio/caution.png)

**Attention:** starting **January 1st, 2025**, TagoIO will discontinue its email services. We recommend integrating with external providers to send emails using the "Send Email using SMTP/SendGrid" action.

## Send Email using SMTP

An email will be sent via SMTP when a specific condition is met. This action allows you to send emails via external providers. To configure this action, you need to create a **Secret** of type **SMTP** to authorize TagoIO to connect to your email provider and send emails; you will need to supply the server address, port number, username, and password. This information is usually provided by your email hosting service.

Learn here how to create this secret: [Secrets](/tagoio/secrets).

In the message field, you can use variables to dynamically include information in your text. For more details on how to use message variables, refer to the "Message Variables" section at the end of this page.

## Send Email with SendGrid

An email will be sent via SendGrid when a specific condition is met. To configure this action, you need to create a Secret of type **Text** containing the _SendGrid API Key_. Ensure that the SendGrid API Key is set in TagoIO Secrets beforehand so it appears in the dropdown menu.

Learn here how to create this secret: [Secrets](/tagoio/secrets).

![Image 5](/docs_imagem/tagoio/external-da256072.png)

![Image 6: Idea](/docs_imagem/tagoio/lights.png)

## Send Message to AWS SQS

This action sends messages to Amazon SQS when triggered. It requires authentication via Secrets. You will need to provide the region, queue URL, and access key id and secret access key.

Learn how to create this secret: [Secrets](/tagoio/secrets).

## Send SMS

Sends SMS messages when certain conditions are met. You can specify one or multiple recipients by separating phone numbers with a semicolon (;). You need to include the country code with each phone number; if omitted, the system assumes the USA code (+1).

In the message field, you can use variables to dynamically include information in your text. For more details on how to use message variables, refer to the "Message Variables" section at the end of this page.

![Image 7](/docs_imagem/tagoio/1576605304356-hps.png)

Some costs may occur when using the SMS service, which varies based on the country of operation. Check the [pricing](https://tago.io/pricing/), [terms of use](https://tago.io/terms-of-support/), and your plan before using the SMS service.

![Image 8: Warning](/docs_imagem/tagoio/caution.png)

**Attention:** starting on **November 1st, 2024**, TagoIO will no longer offer SMS services. We recommend integrating with external providers to send SMS using the "Send SMS with Twilio" action.

## Send SMS with Twilio

Use this action to send an SMS message via Twilio when a specified condition is met. You will need to provide the recipient's phone number, the sender's "from" number, and the message content. The message field supports variables, allowing you to dynamically include information in your text.

Ensure that the _Twilio SID_ and _Twilio Auth Token_ are set in TagoIO Secrets beforehand for them to appear in the dropdown menu. Use a Secret of type **Text**. Learn how to create this secret: [Secrets](/tagoio/secrets).

![Image 9](/docs_imagem/tagoio/external-ef92af1a.png)

![Image 10: Notes](/docs_imagem/tagoio/file.png)

If you're using Twilio Long Code for messaging, be aware that it requires a Toll‑Free verification process. Please consult Twilio's documentation for instructions on how to verify your phone number before proceeding. Depending on Twilio's rules for your account, the Toll‑Free verification may be skipped.

You can send SMS directly from scripts within the [Analysis](/tagoio/analysis/creating-analysis) using the Twilio service. Before proceeding, ensure you review Twilio's terms of use and confirm your plan details. You must register your "From" number in the Twilio console before integrating it. The Twilio console also allows you to track SMS delivery status and view message content. Note that TagoIO does not charge for utilizing this third‑party Twilio service.

![Image 11: Idea](/docs_imagem/tagoio/lights.png)

## Send WhatsApp message with Twilio

Use this action to send a WhatsApp message via Twilio when a specified condition is met. You will need to provide the recipient's phone number, the sender's "from" number, and the message content. The message field supports variables, allowing you to dynamically include information in your text.

Ensure that the _Twilio SID_ and _Twilio Auth Token_ are set in TagoIO Secrets beforehand for them to appear in the dropdown menu. Use a Secret of type **Text**. Learn how to create this secret: [Secrets](/tagoio/secrets).

![Image 12](/docs_imagem/tagoio/external-01a6551b.png)

You can send WhatsApp messages directly from scripts within the [Analysis](/tagoio/analysis/creating-analysis) using the Twilio service. Before proceeding, ensure you review Twilio's terms of use and confirm your plan details. You must register your "From" number in the Twilio console before integrating it. The Twilio console also allows you to track the delivery status and view message content. Note that TagoIO does not charge for utilizing this third‑party Twilio service.

Additionally, you can also send WhatsApp messages using Twilio Templates. To do this, you need to set a Twilio Template SID in TagoIO Secrets and configure the Template variables. Template variables also support dynamic content, allowing you to include information dynamically within them.

## Run Analysis Script

Actions have the power to initiate scripts that run in the [Analysis](/tagoio/analysis/analysis-overview). This is a very powerful feature, as you can define exactly when your code will run.

Learn more about [Running Analysis via Action](/tagoio/actions/running-analysis-via-action).

## Publish to TagoIO MQTT Broker

This action can publish to an MQTT topic defined by the developer. This means that every time your trigger criteria are met, TagoIO will publish data to that predefined MQTT topic, which is very useful if you need to forward data to devices and/or applications.

To set the MQTT action up, select the option **Publish to MQTT**, select the device which will receive that topic and type in the topic. The content of the MQTT payload that subscribed devices will receive can be defined as well.

![Image 13](/docs_imagem/tagoio/1576605830665-DPI.png)

![Image 14: Notes](/docs_imagem/tagoio/file.png)  
TagoIO [MQTT Broker](/tagoio/mqtt) is available exclusively for **Starter** and **Scale** accounts in the **US database region**. Free accounts and European database region accounts may utilize third‑party MQTT services with TagoIO via the [MQTT Relay](/tagoio/integrations/connecting-your-mqtt-broker-to-tagoio) feature.

## Post data to HTTP End-Point

This action can post data directly to an endpoint defined by you. When the action is triggered, it will POST the entire data payload received from the device to the configured HTTP endpoint address using the [TagoIO Standard Data Format](/tagoio/devices/sending-data-to-device).

![Image 15](/docs_imagem/tagoio/1628001560181-oQ.png)

> You can use payload fields in the HTTP endpoint, like the example above but with a variable (`https://myapi.io/endpoint/$VALUE$`), or even in the HTTP Headers like in the example below:

![Image 16](/docs_imagem/tagoio/1628001652255-dcw.png)

The `TagoIO-Retries` header is managed by the TagoIO API and sent in every Post request for this Action type, and indicates the number of attempts to post the data to your endpoint.

It will try to post the data 10 times, and if it’s unsuccessful (any response from your endpoint other than [HTTP 20X status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses)) it will require a fallback device to be configured to store the data in TagoIO so you can retrieve it later without losing your data in case your endpoint fails to receive it.

To set up a fallback device, enable it in the bottom part of the HTTP Post action settings and put the token for the device you intend to hold the data.

![Image 17](/docs_imagem/tagoio/1628001764337-3t4.png)

After 10 unsuccessful attempts, the data will be sent to the fallback device with some information added to the `metadata` in the `_http_*` properties (original values in `metadata` will be kept), like shown below:

```json
[
  {
    "variable": "image",
    "group": "465c78a000c39bee89461786",
    "time": "2025-07-11T19:23:04.027Z",
    "created_at": "2025-07-11T19:23:04.027Z",
    "value": 71,
    "id": "68716498eeb93c000a87c565",
    "device": "66f16881c903480009ff1042",
    "bucket": "66f16881c903480009ff1042",
    "metadata": {
      "_http_error": "getaddrinfo ENOTFOUND [example.com](http://example.com/)",
      "_http_url": "[http://example.com/aaa](http://example.com/aaa)",
      "_http_attempts": 10
    }
  }
]
```

## Insert to Device's data storage

This option is only available if your Action is of the type **MQTT Topic**. This action will insert the data directly into the device's data storage.

## Message Variables

In some action types, the message body can be as simple as a text like _Hi, your car is over the speed limit_ or you can specify fields in the message to personalize it with real‑time data from your devices.

You can use most of the payload fields from our API:

| Variable | Description |
|----------|-------------|
| `$VARIABLE$` | Variable name |
| `$VALUE$` | Variable value |
| `$UNIT$` | Unit of your variable |
| `$TIME$` | Time the variable was received |
| `$LOCATION$` | Location value |
| `$DEVICE$` | Device ID |
| `$DEVICE.NAME$` | Name of your device |
| `$ACTION.STATE$` | Current state of your [Action](/tagoio/trigger-unlock): locked or unlocked |

For example, a personalized message like this

- Hi, your device reached **$VALUE$ $UNIT$** at the coordinates **$LOCATION$** at **$TIME$**.

This would result in the message being:

- Hi, your device reached **73 mph** at the coordinates **43.05334,-86.45340**.

And a message like this

- **$TIME$**: Warning, device with ID **$DEVICE$** is **$VARIABLE$ $UNIT$**.

Would result in the following message:

- **2021‑01‑02T22:51:48.005Z**: Warning, device with ID **547e353d7dbf3af122c0257d** is **90 °F**.

---