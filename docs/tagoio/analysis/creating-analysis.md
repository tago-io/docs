---
title: "Creating Analysis"
description: "This article explains how to create a new Analysis in TagoIO, including the fields in the Add Analysis dialog and the options for runtime and execution environment."
tags: ["tagoio", "analysis"]
sidebar_position: 1
---
Creating your own analysis is easy. First, click on **Analysis** in the sidebar, then click the **+ New Analysis** button in the upper‑right of the Analysis main screen. Enter a name and configure the options described below to create your analysis.

![New Analysis Form](/docs_imagem/tagoio/rounded-image-1761141519422.png)

## Name
This is the identifier for your analysis. You can use whitespace, numbers, and any other characters in this field. Choose a descriptive name that explains the purpose of the code.

## Runtime Version
Select the runtime environment for your analysis. An example shown in the dialog is:
- **Deno** (deno‑2025‑08‑01)

Currently supported runtimes include **Deno**, **Python**, and **Node.js** if you run your script on TagoIO.


## Run this script on
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
You can optionally start your Analysis from a code example template. The Add Analysis dialog includes a dropdown to choose a code example. If you don't want a template, you can ignore this field.

:::tip

It is highly recommended for beginners to use an Analysis template, as it provides insight into the functions and scopes of the script.
You can only select one of these code examples if you are running your script on TagoIO.

:::

## Other fields
After creating the analysis you can open the [Script Editor](/docs/tagoio/analysis/script-editor.md) to add and manage the analysis code, adjust environment variables, and configure distribution or external execution as needed.
