---
title: "Running Analysis as External using Node.JS"
description: "This article explains why and how to run a TagoIO Analysis externally using Node.js, and provides the first steps to prepare your local environment (installing Node.js and NPM) before running or uploading analyses."
tags: ["tagoio", "analysis"]
---

Analysis is what allows you to create powerful applications on TagoIO. When creating an analysis, you must choose whether it will run on TagoIO or externally on your own machine.

You may choose to run an analysis on an external machine for several reasons:

1. Development: While developing an analysis, it's best to use a full IDE and debugging mode, which are only available when running Node.js locally on your machine.
2. Security: Your company may have legal or compliance requirements that prevent uploading source code to TagoIO services.
3. Using third-party packages: The built-in analysis environment includes some packages (for example, axios and moment.js), but you may want to use additional npm packages. In combination with the Analysis-Builder, you can use any third-party package you like and build a more powerful script for TagoIO.

So, let's start with the instructions you need to get your analysis working in an external environment.

## 1. Install Node.js and NPM

Node.js is a powerful, widely used runtime for running JavaScript outside the browser. It is non-blocking and event-driven, making it suitable for data-intensive real-time applications. Learn more about [node.js](link-to-nodejs).

Open the [Node.js Installation Guide](link-to-nodejs-installation-guide) for instructions on how to install NPM and Node.js.

## References and related documentation

- See [Analysis](link-to-analysis) for an overview of creating and managing analyses in TagoIO.
- See [Analysis-Builder](link-to-analysis-builder) for details on bundling and uploading scripts that use third-party packages.

On this page (for reference)
- 1. Install Node.js and NPM
- 2. Create your Environment
- 3. Running your Analysis
- 4. Use Analysis-Builder to Upload the Script
- More Examples

Related articles (within TagoIO documentation)
- Analysis Overview
- Creating Analysis
- Script Editor
- Script Examples
- Console for Debug
- Environment Variables
- Distributing analysis
- Running Analysis as External using Node.JS
- Running Analysis as External using Deno

Notes:
- Internal documentation links have been preserved as link text; replace "link-to-..." placeholders with the actual internal URLs when integrating into the docs site.