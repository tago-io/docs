---
title: "Creating Analysis"
description: "This article explains how to create a new Analysis in TagoIO, including the fields in the Add Analysis dialog and the options for runtime and execution environment."
tags: ["tagoio", "analysis"]
sidebar_position: 1
---
Creating your own analysis is easy. First, click on **Analysis** in the sidebar, then click the **+ Add Analysis** button in the upper‑right of the Analysis main screen. Enter a name and configure the options described below to create your analysis.

<!-- Image placeholder removed for build -->

## Name
This is the identifier for your analysis. You can use whitespace, numbers, and any other characters in this field. Choose a descriptive name that explains the purpose of the code.

## Runtime Version
Select the runtime environment for your analysis. An example shown in the dialog is:
- **Deno** (deno‑2025‑08‑01)

Currently supported runtimes include **Deno**, **Python**, and **Node.js** if you run your script on TagoIO.


## Run this script from
Choose where the analysis will run:
- **TagoIO** — Edit and run the script directly on TagoIO.
- **External** — Run the script on your own computer or server.

If you select the external option, we provide the following SDKs so you can run the analysis directly from your machine:

- [Python SDK](/docs/tagoio/analysis/sdk/python-sdk.md)
- [Javascript SDK](/docs/tagoio/analysis/sdk/nodejs-sdk.md) for Deno and NodeJS

:::warning

When changing between External mode and TagoIO mode, the Analysis Token will be reset and a new token will be generated.

:::

## Code example
You can optionally start your analysis from a code example template. The Add Analysis dialog includes a dropdown to choose a code example. If you don't want a template, select **No, thanks**.

:::tip

It is highly recommended for beginners to use a real‑world example, as it provides insight into the functions and scopes of the script.
You can only select one of these code examples if you are running your script on TagoIO.

:::

## Other fields
The Add Analysis dialog also shows:
- A **“Learn more”** link (for additional guidance).
- Buttons to **“Cancel”** or **“Create my Analysis”** once you have configured the fields.

After creating the analysis you can open the Script Editor to add and manage the analysis code, adjust environment variables, and configure distribution or external execution as needed.

### Time interval
You can trigger your analysis script manually, but you can also define a time interval to automatically trigger it. In this field you will find a couple of predefined time options, and you can set your own custom time interval by selecting the **Custom** option.

### Analysis Token
This field is only used if you are running your analysis as **external**. If you want more information on how the token works, check out the article
[Running Analysis as External using Node.JS](/docs/tagoio/analysis/running-analysis-as-external-using-nodejs.md).
