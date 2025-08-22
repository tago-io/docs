---
title: "Payload Parser Troubleshooting"
description: "This article explains common problems that stop the Payload Parser from decoding device data on TagoIO and provides straightforward fixes for each issue."
tags: ["tagoio"]
---
When using the Payload Parser on TagoIO, you may encounter common problems that stop the parser from decoding your device data correctly. When the parser stops, the data will not be saved on TagoIO. These problems are usually related to mistakes in how the payload parser code is written, but they can be fixed easily.

For updates on system status, visit the health status page at https://status.tago.io/.

## Common Issues

### 1. Function Parse Error: Payload Parser Terminated Unexpectedly
This happens when the Payload Parser encounters an error in code that is not formatted correctly and stops working. For example, using a plain string as an error like:
- throw "my error message"

can cause the parser to stop unexpectedly.

Fix:
- Use the proper JavaScript `Error` class when throwing errors. The Payload Parser uses JavaScript, so create errors like this:

```javascript
throw new Error("my correct error message");
```

This method provides a clear and detailed error message, making it easier to identify and fix the problem in your code.

### 2. "your_variable" is Not Defined
This error appears when the Payload Parser tries to use a variable that hasn’t been declared. For example, writing:
- temp = payload.value

without first defining what `temp` is will produce a "not defined" error.

Fix:
- Always declare your variables before use with `const`, `let`, or `var`. This prevents the "not defined" error and avoids creating accidental global variables.
  
Examples of variable declaration:

```javascript
// Example 1
const temp = payload.value;
```

```javascript
// Example 2
let temp = payload.value;
```

```javascript
// Example 3
var temp = payload.value;
```

## See also (Payload Parser‑related documentation)
- [Connector Overview](../integrations/connector-overview)
- [Parser vs. Analysis Comparison](../payload-parser/payload-parser-overview#parser-vs-analysis)
- [Building your own parser](../payload-parser/building-your-own-parser)
- [Payload Parser - Context & global variables](../payload-parser/context-and-global-variables)
- [Filtering Out Variables with Parser Code](../payload-parser/filtering-out-variables-with-parser-code)
- [Publishing, updating and accessing decoders](../payload-parser/publishing-updating-accessing-decoders)
- [Sharing Connectors & Networks](../integrations/sharing-connectors-and-networks)
- [Metadata](../data-management/metadata)
- [Payload Parser Troubleshooting](payload-parser-troubleshooting)
- [Payload Parser timeUtils Library](payload-parser-timeutils)

## Related Articles
- [Publishing, updating and accessing decoders](publishing-updating-accessing-decoders)
- [Payload Parser](payload-parser)
- [Payload Parser timeUtils Library](payload-parser-timeutils)

Still need help? Contact our support team through the [Help Center](https://help.tago.io/portal/en/newticket?) page.

<!-- Image placeholder removed for build -->