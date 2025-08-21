---
title: "Connector Overview"
description: "This article explains what Connectors are in TagoIO, how they manage device communication and payload parsing, and how to create a new connector via the Connector management page."
tags: ["tagoio"]
---

Connectors let you create devices with built-in behaviors that enable them to communicate with a Network easily. Once a device is created using a connector, the device will automatically run the connector's payload parser to decode incoming data. See [Payload Parser](link-to-payload-parser) for details about parsers and decoding.

![Device data flow diagram](/docs_imagem/tagoio/connector-overview-2.png)

Device data flow

They also help you automate and scale your devices: after creating a device with a connector, the connector's payload parser will be executed to decode incoming data.

## Creating a connector

To create a new connector, go to the [Connector management page](link-to-connector-management-page) and press the following button on the right side of the page:

![Add connector button](/docs_imagem/tagoio/connector-overview-2.png)

You must specify the connector's name and the network(s) it belongs to.