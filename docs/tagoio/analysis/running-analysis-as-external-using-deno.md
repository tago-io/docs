---
title: "Running Analysis as External using Deno"
description: "This article explains how to run a TagoIO Analysis externally using the Deno runtime, covering installing Deno, creating an analysis TypeScript file, required permissions, and how to run the analysis with Deno."
tags: ["tagoio", "analysis"]
---
Analysis enables you to create powerful applications on TagoIO. When creating an Analysis, you can choose to run it on TagoIO or externally on your own infrastructure.

Running an Analysis externally with Deno provides several advantages:

1. **Development Experience**: Full IDE support with TypeScript, debugging capabilities, and Deno's built-in development tools.
2. **Security**: Keep sensitive code on your infrastructure when compliance or security policies require it.
3. **Performance**: Direct control over the execution environment and resource allocation.

## 1. Install Deno

Deno is a secure runtime for JavaScript and TypeScript built on V8, Rust, and Tokio. It includes TypeScript support out of the box, a built‑in formatter and linter, and secure defaults. Learn more about [Deno](https://deno.land).

Visit the Deno Installation Guide for platform‑specific instructions: https://deno.land/manual/getting_started/installation

## 2. Create your Analysis

### 2.1 Create a new file for your Analysis

For this example, call it `analysis.ts`:

```ts
import { Analysis, Device, Utils } from "npm:@tago-io/sdk";
import { DateTime } from "npm:luxon";

async function myAnalysis(context: any) {
  // Your analysis logic here
  console.log("Running external Deno analysis");
  console.log("Context:", context);
  
  const now = DateTime.now().toISO();
  console.log("Current time:", now);
}

Analysis.use(myAnalysis, { token: "MY-ANALYSIS-TOKEN-HERE" });
```

## 3. Configure Permissions

Deno runs with secure defaults. Create a deno.json configuration file to specify permissions:

```ts
{
  "tasks": {
    "start": "deno run --allow-net --allow-env analysis.ts"
  }
}
```

The `--allow-net` flag permits network requests to TagoIO APIs, and `--allow-env` allows reading environment variables.

## 4. Running your Analysis

Replace `MY-ANALYSIS-TOKEN-HERE` with your actual Analysis token. You can get this by:

1. Access your Analysis page at TagoIO

2. Select External for 'Run the scripts from'
3. Copy the generated token

For better security, use environment variables:

```ts
const token = Deno.env.get("ANALYSIS_TOKEN") || "MY-ANALYSIS-TOKEN-HERE";

Analysis.use(myAnalysis, { token });
```
Run your Analysis:

```ts
# Using the task defined in deno.json
deno task start

# Or directly
deno run --allow-net --allow-env analysis.ts
```

You should see output indicating the Analysis is connected and waiting for triggers.


## More Examples

Check our Deno Analysis examples: https://github.com/tago-io/analysis-snippets/tree/main/snippets

You now have everything needed to run external Analysis with Deno, leveraging TypeScript support, remote imports, and modern development tools to create powerful TagoIO applications.