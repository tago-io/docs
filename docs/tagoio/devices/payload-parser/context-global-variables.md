---
title: "Context & global variables"
description: "A concise guide to the context and global variables available when creating a Payload Parser in TagoIO, including descriptions of the most common globals and where to find the full list."
tags: ["tagoio"]
---
If you are going to create your own parser, you need to understand how context works.

When you start writing your own Payload Parser, you can use certain global variables in your code. Think of these global variables as variables you can access anywhere without explicitly creating them, similar to built-in keywords like module or process in Node.js.

These global variables can vary from simple objects to complex functions or arrays. To see a list of the global variables available, check the Payload Parser tab in the [Device](/docs/tagoio/devices/) details.

## Payload parser context (common globals)

| Payload parser context | Description |
|---|---|
| payload* | Content of the message that was sent. It usually is an Array of data or a string. At the end of the parser, the payload content is added to your device. |
| device | Device information containing configuration parameters, tags, device ID, etc. |
| raw_payload | Payload sent in the original request, without changes by any parser. Useful when you want to access the data before it has been changed by a Network parser. |
| timeUtils | [timeUtils library](/docs/tagoio/devices/payload-parser/payload-parser-timeutils-library) |
| dayjs** | [Day.js library](https://day.js.org/) |
| console.log** | Show an info message in the [Live Inspector](/docs/tagoio/devices/live-inspector). |
| console.debug** | Show a debug message in the [Live Inspector](/docs/tagoio/devices/live-inspector). |
| console.error** | Show an error message in the [Live Inspector](/docs/tagoio/devices/live-inspector). |


> - This variable must be an [Array of TagoIO data](/docs/tagoio/devices/sending-data) when the code ends.  
> - These are functions available to be used in the Payload Parser.

:::info

The list above shows the most commonly used globals visible in this article. Additional global variables (which can range from simple objects to complex functions or arrays) are available — see the Payload Parser tab in the [Device](/docs/tagoio/devices/) details for the complete list.

:::