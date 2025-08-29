---
title: "Connector Overview"
description: "This article explains what Connectors are in TagoIO, how they manage device communication and payload parsing, and how to create a new connector via the Connector management page."
tags: ["tagoio"]
sidebar_position: 1
---
Connectors let you create devices with built‑in behaviors that enable them to communicate with a Network easily. Once a device is created using a connector, the device will automatically run the connector's payload parser to decode incoming data. See [Payload Parser](../payload-parser/) for details about parsers and decoding.

![Device data flow diagram](/docs_imagem/tagoio/connector-overview-2.png)

Device data flow

They also help you automate and scale your devices: after creating a device with a connector, the connector's payload parser will be executed to decode incoming data.

## Creating a connector

To create a new connector, go to the [Connector management page](connector-overview) and press the following button on the right side of the page:

![Add connector button](/docs_imagem/tagoio/connector-overview-2.png)

You must specify the connector's name and the network(s) it belongs to.  
* You can add as many networks as you like, but at least one network must be selected.

### Connector parameters

After creating a connector you can define several optional parameters that will be available in the payload parser:

| Parameter | Description |
|-----------|-------------|
| **Name** | The connector's name. |
| **Description** | A quick description of what the connector does. |
| **Logo URL** | An image URL for the sensor or company logo (used when a device is created). |

By default, a newly created connector is visible only to you. You can share it with other [Profiles](/docs/tagoio/account/profiles) from different accounts. Read more about [Sharing Connectors & Networks](/docs/tagoio/integrations/sharing-connectors-networks).

If you want to make your connector public, submit a Pull Request on our GitHub repository: https://github.com/tago-io/decoders. For details, see the article on [Publishing, updating and accessing decoders](/docs/tagoio/payload-parser/publishing-updating-and-accessing-decoders).

### Documentation

You can provide additional information that will be shown to users when they create a device with this connector:

- **Description** – A full description of the device. Include links to datasheets or other resources.
- **Completion Text** – Information displayed immediately after the device is created (optional).
- **Device Annotation** – Text always available on the user's devices page.

It’s recommended to add links to dashboard templates here so users can quickly set up visualizations for their new devices.

### Device parameters

When a user creates a device with your connector, you can expose custom parameters that will be accessible in the payload parser. Supported types include:

- **Number**
- **Text**
- **Dropdown** – Users choose from predefined options.
- **Switch** – Boolean on/off value.

These values are available as global variables in the payload parser context (see the [Payload parser context overview](/docs/tagoio/payload-parser/-context-global-variables)).

### Payload parser

The connector’s payload parser follows the same rules and syntax as a regular device payload parser. All parsing logic, variable names, and error handling are identical to those described in the article on [Payload Parser](../payload-parser/).