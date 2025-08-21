---
title: "Creating Analysis"
description: "This article explains how to create a new Analysis in TagoIO, including the fields in the Add Analysis dialog and the options for runtime and execution environment."
tags: ["tagoio", "analysis"]
---

Creating your own analysis is easy. First, click on Analysis in the sidebar, then click the + Add Analysis button in the upper-right of the Analysis main screen. Enter a name and configure the options described below to create your analysis.

<!-- Image placeholder removed for build -->

## Name
This is the identifier for your analysis. You can use whitespace, numbers, and any other characters in this field. Choose a descriptive name that explains the purpose of the code.

## Runtime Version
Select the runtime environment for your analysis. An example shown in the dialog is:
- Deno (deno-2025-08-01)

Choose the runtime version appropriate for the code you plan to run.

## Run this script from
Choose where the analysis will run:
- TagOIO — Edit and run the script directly on TagoIO.
- External — Run the script on your own computer or server.

Select the option that matches your deployment preference.

## Code example
You can optionally start your analysis from a code example template. The Add Analysis dialog includes a dropdown to choose a code example. If you don't want a template, select "No, thanks."

## Other fields
The Add Analysis dialog also shows:
- A "Learn more" link (for additional guidance).
- Buttons to "Cancel" or "Create my Analysis" once you have configured the fields.

After creating the analysis you can open the Script Editor to add and manage the analysis code, adjust environment variables, and configure distribution or external execution as needed.

Related documentation:
- See [Analysis Overview](link-to-analysis-overview)
- See [Script Editor](link-to-script-editor)
- See [Script Examples](link-to-script-examples)
- See [Console for Debug](link-to-console-for-debug)
- See [Environment Variables](link-to-environment-variables)
- See [Distributing analysis](link-to-distributing-analysis)
- See [Running Analysis as External using Node.JS](link-to-running-analysis-external-nodejs)
- See [Running Analysis as External using Deno](link-to-running-analysis-external-deno)