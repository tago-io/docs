---
title: "Analysis Overview"
description: "This article explains what Analyses are in TagoIO, what you can do with them, how they are triggered, and links to related documentation and examples."
tags: ["tagoio", "analysis"]
---
Analysis lets you run custom code inside TagoIO to process data in real time, call third‑party APIs, and work with your TagoIO resources.

Common things people do with Analyses:
- Convert units and run math on variables
- Write new values into other devices
- Read across devices to correlate events
- Send email, SMS, or webhooks, or push data back to a device or dashboard
- Automate user workflows to create devices, read files, and manage user tags

Analyses can be triggered by Actions (schedule or condition), by Dashboard UI elements, or by external services through API endpoints. They provide a straightforward way to plug your application logic into the rest of your solution.

<YouTube videoId="ZlcvyjCQNn8" title="Running Analysis on IoT Devices" />

## Environments
Analyses run in TagoIO as an asynchronous, serverless service. There’s no strict queue order, and multiple executions can run at the same time. Usage counts against your profile’s Analysis Run limits.

If you prefer to host code yourself, you can run External Analyses from your own infrastructure. TagoIO provides the [TagoIO CLI](https://github.com/tago-io/tagoio-cli) and [Javascript SDKs](../sdk/nodejs-sdk) for Deno/Node.js, as well as a [Python SDK](../sdk/python-sdk) to help with local development, packaging, and deployment.

## Runtimes
TagoIO supports three runtimes for Analysis. Each runtime has different approaches to dependency management and development workflows.

All runtimes support the same TagoIO SDK functionality for working with devices, buckets, and other platform features. The main differences are in language features and how you manage external dependencies.

### Deno Runtime
Deno runs TypeScript and JavaScript with built‑in TypeScript support—no compilation step needed. The standout feature is remote imports: you can import packages directly from URLs without any bundling or upload process.

```ts
import { Analysis, Device } from "jsr:@tago-io/sdk";
import { DateTime } from "npm:luxon";
import { z } from "https://deno.land/x/zod/mod.ts";
```

This means you can write your entire Analysis in the TagoIO editor, add imports as you need them, and run immediately. The editor includes linting and formatting to help catch issues early.

![Image 1: Info](/docs_imagem/tagoio/info-8.png)

Dependencies are fetched and cached on first run, so initial executions may take a bit longer.

### Node.js Runtime
Node.js runs JavaScript and requires you to bundle dependencies before uploading. Unlike Deno, you can't import npm packages directly in your Analysis code—you’ll need to use the Analysis Builder CLI locally to create a bundle that includes all your dependencies.

```bash
# Local development workflow
npm install @tago-io/sdk axios
tagoio-builder pack
# Upload the generated .tago file
```

This approach gives you full control over your dependencies and build process, but requires local development tools. If you're already comfortable with Node.js workflows or have existing code to migrate, this runtime fits naturally.

### Python Runtime
Python supports [remote package installation](https://docs.astral.sh/uv/guides/scripts/#declaring-script-dependencies) at runtime. When your Analysis runs, it automatically installs any imported packages that aren't part of the standard library.

```python
# /// script
# dependencies = [
#   "tagoio-sdk",
#   #"pandas",
#   #"requests<3",
# ]
# ///

from tagoio_sdk import Analysis, Device
import pandas as pd
import requests
from datetime import datetime, timedelta
```

Just write your imports and TagoIO handles the UV installation behind the scenes. This makes Python ideal for data processing tasks where you need libraries like pandas, numpy, or scipy without the hassle of packaging them yourself.

The runtime uses standard Python package resolution, so you can import from PyPI just like you would locally. First runs will be slower while packages install, but subsequent runs use the cached environment.

## Getting Started
Here’s the short path to get an Analysis running:

1. **Create an Analysis and choose your runtime**  
   In your Admin, go to the [Analysis module](https://admin.tago.io/analysis), create an analysis and choose a runtime: Deno, Node.js, or Python based on your stack and dependency needs.

2. **Grant the needed permissions to your analysis.**  
   When you create an analysis, it doesn’t have the needed permissions to access data or run services. For that reason, you need to generate a policy that gives access only to operations and data within scopes your Analysis needs (e.g., users, devices, entities). Read more about [Creating a Policy](/docs/tagoio/tagorun/access-management/creating-a-policy).

3. **Code your script**  
   Use the [SDK](https://help.tago.io/portal/en/kb/tagoio/14-sdk) for your runtime to read/write data, call external APIs, and log output. Keep functions idempotent when possible.

4. **Add triggers (optional)**  
   1. [Actions](/docs/tagoio/actions/): schedule (cron) or condition (e.g., variable thresholds)  
   2. [Dashboards](/docs/tagoio/dashboards/): buttons, inputs, or other UI hooks  
   3. [External](/docs/tagoio/analysis/running-analysis-as-external-using-nodejs): expose an endpoint for webhooks

5. **Run and monitor**  
   Execute on demand to test, then let triggers handle it. Check logs, run history, and usage.

## On this page
- Environments (see [Environments](#environments))
- Runtimes (see [Runtimes](#runtimes))
  - Getting Started (see [Getting Started](#getting-started))

## Analysis (related documentation)
- [Analysis Overview](/docs/tagoio/analysis/)
- [Creating Analysis](/docs/tagoio/analysis/creating-analysis)
- [Script Editor](../script-editor)
- [Script Examples](../tutorials/script-examples)
- [Console for Debug](../console-for-debug)
- [Environment Variables](../environment-variables)
- [Distributing analysis](/docs/tagoio/analysis/distributing-analysis)
- [Running Analysis as External using Node.JS](/docs/tagoio/analysis/running-analysis-as-external-using-nodejs)
- [Running Analysis as External using Deno](/docs/tagoio/analysis/running-analysis-as-external-using-deno)

## Related Articles
- [Running Analysis as External using Deno](/docs/tagoio/analysis/running-analysis-as-external-using-deno)
- [Creating Analysis](/docs/tagoio/analysis/creating-analysis)
