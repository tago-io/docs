---
title: "Creating a Network integration"
description: "This article explains how to create a new Network integration in TagoIO and describes the configurable parameters available after creation."
tags: ["tagoio", "integration"]
---
## Create a new integration

To create a new integration, go to the [Network management page](connector-overview) and press the Add network button on the right side of the page:

![Add network button](/docs_imagem/tagoio/creating-a-network-integration-2.png)

You only need to specify the network's name. For example, enter the name and click "Create my Network":

![Add Network dialog where you enter the network name and press Create my Network](/docs_imagem/tagoio/creating-a-network-integration-2.png)

Once the network is created, you can configure several optional parameters. If you want to keep the network private to your account, you do not need to fill in all fields.

## Parameters

- **Name:** Network name.
- **Description:** Network description.
- **Documentation Link:** External link to documentation on how to use the network. Preferably link to TagoIO's community page.
- **Icon:** Icon for the network, shown in the sidebar.
- **Banner:** Banner image for the network, shown when the network is selected.

> After you create a network, it will only be visible to you by default. However, you have the option to share it

## Tips

- Only the network name is required to create the integration; all other fields are optional.
- Use the Documentation Link to point users to implementation details or community resources.

## Sharing Networks

You can share a private network with other **[Profiles](/tagoio/account/profiles)** from different accounts. Read more about [Sharing Connectors & Networks](/tagoio/integrations/sharing-connectors-networks).

If you wish to make your connector or network accessible to all TagoIO users, you can request to make it public by submitting a Pull Request to our GitHub repository: https://github.com/tago-io/decoders.

## Serial Number

You can configure whether the serial number is required for devices in this network. If not required, the user will not be prompted to enter one. Usually you want this enabled.

The serial number allows a device to use its **network token** and insert data into the device.

- **Label:** Serial number label (e.g., Device EUI, Serial, IMEI).
- **Format:** Unique format of the serial number. It restricts the length and allowed values.
  - Allowed keywords:
    - `F`: Hexadecimal value
    - `A`: Alphabetic value
    - `0`: Numeric value
    - `-`: Hyphen for user visualization (not stored)
  - Example: For a sixteen‑character hexadecimal serial number (Device EUI), use `FF-FF-FF-FF-FF-FF-FF-FF`.
- **Image:** Provide an example image to help users locate the serial number (if available).
- **Force Case:** Force the serial number to be lowercase or uppercase.

## Device Parameters

Device parameters let you set values that can later be accessed in the payload parser. They can be of type Number, Text, Dropdown, or Switch.

Example: A dropdown parameter appears in the user view as shown below (image omitted for brevity).

For details on accessing these parameters in the payload parser, see the [Payload parser context overview](/tagoio/payload-parser/payload-parser-context-global-variables).

## Tokens and Getting Devices

You can generate tokens for your network. The token is required to access devices created in your network and is only useful if a serial number is configured.

**HTTP GET:**
```
https://api.<region>.tago.io/integration/network/resolve/{serial_number}/{authorization}
```
Check available regions at the [TagoIO API](https://api.docs.tago.io/#intro).

**Headers**

- `Authorization`: Network‑token

**Parameters**

- `Serial number`: The serial number used in device creation.
- `Authorization (Optional)`: User account authorization token, recommended for security.

**Response (HTTP 200)**

```json
{
  "status": true,
  "result": "01369696-xxxx-xxxx-xxxx-feb5ddca1751"
}
```

The result is the device token, which you can use to send data with the [HTTP data post](/tagoio/devices/sending-data-to-device).

> **If you will be sending raw payload data**, follow these instructions to keep it compatible with all TagoIO connectors:
>
> - Send the variable as `payload`.
> - Always send the value in hexadecimal.
>
> Example:
>
> ```json
> {
>   "variable": "payload",
>   "value": "01000A0"
> }
> ```

## Payload Parser

The payload parser for a network behaves the same as for devices. All rules apply.

If you are sending data in the correct format, no special handling is needed. However, if you send a text file or unsupported JSON, it’s best to process this in the parser before forwarding to the device connector. Some integrations do not send payloads in hexadecimal; you can convert them to hex here for compatibility with other connectors.

## Creating a Connector

After creating your network, you need to create a **connector** that represents the device itself. The network is how the device connects to TagoIO, while the connector defines the device’s behavior.

Create a connector via the [Connector overview page](https://admin.tago.io/integrations/connector). Once the connector exists, you can start creating devices with the connector and the network you just made.