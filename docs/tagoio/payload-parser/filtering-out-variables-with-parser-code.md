---
title: "Filtering Out Variables with Parser Code"
description: "This article explains how to prevent unwanted variables from being saved to a device's data storage by modifying the device's payload parser code in TagoIO, and shows default behavior for common providers."
tags: ["tagoio"]
---
When your device sends sensor data to TagoIO, you can add parser code to the device (in the "Payload Parser" tab) to extract and create variables in the device's data storage using TagoIO format. If you want to save space in register storage, you can ignore variables you don't want added by editing the parser.

> By default, some fields and metadata sent by providers like LoRaWAN and Sigfox are already ignored to avoid unnecessary storage.

## How it works
- The parser runs on incoming payloads and decides which variables to create in the device's data storage.
- By changing the parser logic, you can skip creating variables for unneeded data fields, avoiding extra storage usage.

## Default ignored fields
Some common provider metadata and fields that typically do not need to be stored are automatically ignored. This helps avoid storing duplicate or unnecessary information sent by networks such as LoRaWAN and Sigfox.

## Example
For example, if your device sends data from TTN (The Things Network), most variables — including the raw payload — will normally be created in the device's data storage. You can modify the parser to prevent storing specific fields or metadata you don't need.

A variable called **location** is automatically created by combining the fields `latitude` and `longitude`. Use this combined field when plotting maps.

![Application Data Console screenshot](/docs_imagem/tagoio/filtering-out-variables-with-parser-code-2.png)

## Editing the parser
- Open the device settings and go to the "Payload Parser" tab ([Payload Parser](../payload-parser/payload-parser)).
- Update the parser code to filter out unwanted variables before sending the parsed output to the device's storage.
- To ignore specific variables, add their names to the `_ignore_vars_` list in your parser configuration. For example:
  ```json
  {
    "ignore_vars": ["temperature", "humidity"]
  }
  ```
  This will prevent those variables from being created in the device’s data storage.
- Test changes by sending sample payloads and verifying which variables are created in the device's storage ([Device's data storage](../devices/devices)).

We offer this flexibility to allow you to optimize your storage by avoiding the creation of unnecessary variables.

## See also
- Payload Parser (refer to the Payload Parser documentation: [Payload Parser](../payload-parser/payload-parser))
- Device data storage details: [Device's data storage](../devices/devices)
- Parser vs. Analysis comparison: [Parser vs. Analysis Comparison](/tagoio/payload-parser/payload-parser)