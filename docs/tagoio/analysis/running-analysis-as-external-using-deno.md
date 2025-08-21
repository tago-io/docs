---
title: "Running Analysis as External using Deno"
description: "This article explains how to run a TagoIO Analysis externally using the Deno runtime, covering installing Deno, creating an analysis TypeScript file, required permissions, and how to run the analysis with Deno."
tags: ["tagoio", "analysis"]
---

Analysis enables you to create powerful applications on TagoIO. When creating an Analysis, you can choose to run it on TagoIO or externally on your own infrastructure.

Running an Analysis externally with Deno provides several advantages:

1. Development Experience: Full IDE support with TypeScript, debugging capabilities, and Deno's built-in development tools.
2. Security: Keep sensitive code on your infrastructure when compliance or security policies require it.
3. Performance: Direct control over the execution environment and resource allocation.

## 1. Install Deno

Deno is a secure runtime for JavaScript and TypeScript built on V8, Rust, and Tokio. It includes TypeScript support out of the box, a built-in formatter and linter, and secure defaults. Learn more about Deno at https://deno.land.

Visit the Deno Installation Guide for platform-specific instructions: https://deno.land/manual/getting_started/installation

## 2. Create your Analysis

2-1. Create a new file for your Analysis. For this example, call it `analysis.ts`:

```ts
import { Analysis, Device, Utils } from "jsr:@tago-io/sdk";
import { DateTime } from "npm:luxon";

async function myAnalysis(context: any) {
  const body = context.vars || {};
  const result: any = {};

  const value = await Device.findById(body.device || "");

  if (!value) {
    throw new Error("Device not found");
  }

  const tag = (value.live?.find((i: any) => i.variable === "temperature") || {}).value;

  if (!tag) {
    return;
  }

  const date = DateTime.fromISO(tag.time);

  await Utils.sendData({
    device: value.id,
    variables: [
      {
        variable: "temperature_c",
        value: (tag.value - 32) * (5 / 9),
        unit: "C",
        serie: "1",
        time: date.toISO(),
      },
    ],
  });
}
```

2-2. Save the file and run the Analysis with Deno using the following command:

```bash
deno run --allow-net --allow-env --allow-read --allow-write --allow-ffi --unstable analysis.ts
```

## 3. Configure Permissions

From the Analysis editor in the TagoIO Console, open the Permissions tab and create the necessary token(s) for your external Analysis. Create token(s) that grant the scopes required by your script (for example, the ability to read device data and send data). Store these tokens securely; they will be used by your external runtime to authenticate with TagoIO.

(If you need to manage tokens, use the Analysis → Permissions section in the TagoIO Console.)

## 4. Running your Analysis

Set the token you created as an environment variable so your Deno process can authenticate with TagoIO. For example, on macOS/Linux:

```bash
export TAGOIO_TOKEN="YOUR_TOKEN_HERE"
TAGOIO_TOKEN="$TAGOIO_TOKEN" deno run --allow-net --allow-env --allow-read --allow-write --allow-ffi --unstable analysis.ts
```

On Windows (PowerShell):

```powershell
$env:TAGOIO_TOKEN="YOUR_TOKEN_HERE"
deno run --allow-net --allow-env --allow-read --allow-write --allow-ffi --unstable analysis.ts
```

Ensure your script reads the token from the environment (for example, via `Deno.env.get("TAGOIO_TOKEN")` or let the SDK automatically use the environment token if supported).

## More Examples

Refer to other Analysis examples and the Script Examples documentation in the TagoIO Knowledge Base for additional use cases and patterns.

Related internal documentation:
- Analysis Overview (refer to the Analysis section in the TagoIO docs)
- Creating Analysis (refer to Creating Analysis)
- Script Editor and Script Examples (see Script Editor and Script Examples)
- Running Analysis as External using Node.JS (see the corresponding Node.js external analysis guide)

Note: Keep internal links that begin with https://help.tago.io/ or https://admin.tago.io/ as they appear in the TagoIO documentation for cross-references.