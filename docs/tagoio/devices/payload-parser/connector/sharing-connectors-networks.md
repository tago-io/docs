---
title: "Sharing Connectors & Networks"
description: "This article explains how to share custom Connectors and Networks in TagoIO, including the steps to share with another Profile and how to request a public connector for all users."
tags: ["tagoio"]
---

TagoIO provides many pre-integrated devices and networks so you can quickly connect devices. When a new device or network is not yet integrated, you can create a custom Connector or network integration. Those custom solutions can be shared with members of your team or with any external Profile for their use.


## Sharing a custom Connector or Network

To share a custom Connector or Network with another Profile:

1. Go to the [Integrations page](https://admin.tago.io/integrations/connector).
2. Select the connector or network you want to share.
3. Open the Share tab.
3. Click on the "Invite to Connector" or "Invite to Network" button.
4. Enter the Profile ID of the person you want to share it with.
5. Click the Share button.

Note: Profiles with access to the shared connector cannot modify it; they can only use it to create devices.

 ![Share Connector](/docs_imagem/tagoio/rounded-image-1764772930690.png)

### Utilizing a shared Connector

Once shared, the recipient profiles can select your connector when adding new devices through the [Connector Selection](https://admin.tago.io/integrations/connector) page. They can view all connectors that have been shared with them by navigating to the **My Shared Connectors** list.

### Utilizing a shared Network

Custom networks are only applicable for Connectors created by you. To make your custom network available for your connector, head to the configuration page of your network within the [Integrations](https://admin.tago.io/integrations/connector) page and select the connector. Then:
- Navigate to the **General** tab.
- Select your custom network from the "**Select the networks for this connector**" option.

Ensure that the Profiles you are sharing the Connector with have access to at least one of the Networks used by the Connector. If the Connector is utilizing a non-public Network, it is crucial to share both the Connector and the Network with the Profile.

Once you enable your custom network for a specific connector, the user will be able to choose your network before adding the device.

## Making a connector or network public

If you want your connector or network to be accessible to all TagoIO users, you can request to make it public. Read more about [Publishing connectors](/docs/tagoio/devices/payload-parser/connector/publishing-updating-and-accessing-decoders.md).
