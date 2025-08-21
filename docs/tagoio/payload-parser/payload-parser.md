---
title: "Payload Parser"
description: "This article explains how the Payload Parser processes raw device payloads to extract measured variables, convert units in real time, and how connector-defined and custom parsers are executed within TagoIO."
tags: ["tagoio"]
---

## Overview
The Payload Parser handles the raw payload sent by devices to extract measured variables. For example, it can transform a HEX payload sent by a device into temperature and battery levels.

You can also use the parser to process payloads in real time and convert values to the desired unit. For example, if your data contains a temperature in °F, you can use the parser to convert it to °C before inserting the data into the [Device](link-to-device).

You can learn about the [differences between Payload Parser and Analysis](link-to-differences-between-payload-parser-and-analysis).

## Parser execution
TagoIO can run up to two parsers for a device:
- The Connector parser (added automatically during device creation)
- Your own custom parser (optional)

> Note: The parsers are executed in sequence. First the one from the [Connector](link-to-connector), then your custom parser.

## Connector type
The connector type is defined based on your selection from the list of devices during the Add Device step. The connector contains the script necessary to work with that device.

## Parser settings
![Parser settings to enable the parsers](/docs_imagem/tagoio/payload-parser-2.png)