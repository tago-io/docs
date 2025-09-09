---
title: "Payload Parser"
description: "This article explains how the Payload Parser processes raw device payloads to extract measured variables, convert units in real time, and how connector-defined and custom parsers are executed within TagoIO."
tags: ["tagoio"]
---

The Payload Parser handles the raw payload sent by devices to extract measured
variables. For example, it can transform a HEX payload sent by a device into
temperature and battery levels.

You can also use the parser to process payloads in real time and convert values
to the desired unit. For example, if your data contains a temperature in °F, you
can use the parser to convert it to °C before inserting the data into the
[Device](/docs/tagoio/devices/).

You can learn about the
[differences between Payload Parser and Analysis](/tagocore/resources/device/payload-parser.md).

## Parser execution

TagoIO can run up to two parsers for a device:

- The Connector parser (added automatically during device creation)
- Your own custom parser (optional)

:::info

The parsers are executed in sequence. First the one from the
[Connector](/tagodeploy/project/configuration/integrations.md), then your custom
parser.

:::

## Connector type

The connector type is defined based on your selection from the list of devices
during the Add Device step. The connector contains the script necessary to work
with that device.

## Parser settings

![Parser settings to enable the parsers](/docs_imagem/tagoio/payload-parser-2.png)

> The script contained inside the parser from the Connector is not visible.

### How is the Payload Parser triggered?

![Image 2](/docs_imagem/tagoio/parser-DnE-zSM.gif)

The payload parser is automatically triggered every time the device sends data
to TagoIO (no need to set up anything). Your payload parser is the first step
that gets triggered before saving data in the [Device's](/docs/tagoio/devices/)
data storage, so if your code has an error it will be returned directly to the
device HTTP post response.

There are some concepts about
[global variables and context](/tagoio/devices/payload-parser/context-global-variables.md)
that you may want to learn.

### A parse example

For this example, let's connect a toaster to Tago.

A toaster could send data to TagoIO when your bread is toasted in the following
format:

![Image 4](/docs_imagem/tagoio/1544036821426-yHM.png)

The value above could represent XX YYY ZZ. Where:

| Values | Representation                    |
| ------ | --------------------------------- |
| XX     | 00 - Interrupted, 01 - Successful |
| YYY    | Temperature in Fahrenheit         |
| ZZ     | Error code or 00 - No error       |

That value is good enough for machines or engineers, but for humans, it doesn't
mean anything and also it's not optimized for the Tago Dashboard. Therefore, we
need to parse this payload.

Let's code the Payload Parser to transform that payload into real variables.
First, click on your Device and go to the Payload Parser tab.

![Image 5](/docs_imagem/tagoio/Screen-20Shot-202018-12-05-20at-2016.29.43-WbU.png)

On the Payload Parser tab you will see the code editor. Then, you can write the
following code:

![Image 6](/docs_imagem/tagoio/1544035425383-V2U.png)

Save, and you are ready. Now, every time the toaster sends those variables, the
parser will transform it into real variables, and you can use them to build
Dashboard, Analysis, or Action.
