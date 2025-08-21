---
title: "Script Examples"
description: "This article explains how to access and use the Analysis script examples in TagoIO, including a Hello World example with the code that is added to the script editor and sample console output."
tags: ["tagoio"]
---

TagoIO provides a list of script examples to help you learn how to use the Analysis service. These examples show how to get and insert data into a device's data storage, send emails, execute calculations, and perform other useful tasks that can be added to your applications.

## Accessing the examples
To access the examples, create one Analysis and go to the "Analysis" tab (see the Creating Analysis documentation).

<!-- Image placeholder removed for build -->

## Hello World example
After selecting an example, the example code is added to the body of the script editor. The following is the "Hello World" example shown in the editor:

```javascript
/*
 * TagoIO - Analysis Example
 * Hello World
 *
 * Check out the SDK documentation on: https://js.sdk.tago.io
 *
 * Learn how to send messages to the console located on the TagoIO analysis screen.
 * You can use this principle to show any information during and after development.
 */
const { Analysis } = require("@tago-io/sdk");

// The function myAnalysis will run when you execute your analysis
async function myAnalysis(context, scope) {
  console.log("Hello World");
}

Analysis.use(myAnalysis);

// To run analysis on your machine (external)
// const myAnalysis = require('./path-to-analysis-file')
```

## Example console output
When the example runs, the Analysis console may show output similar to:

```
[2023-07-21 09:39:22] Analysis Called.
[2023-07-21 09:39:22] Analysis finished.
[2023-07-21 09:39:22] Duration: 1.3s Billed Duration: 2s.
[2023-07-21 09:39:22] Context: { log: [Function: log], token: 'a-5b7fab80-90f2-4238-8d0f-329e131b6b0', environment: { key: '', value: '' }, analysis.id: '6400ef6e1f1ee80009128a14' }
[2023-07-21 09:39:22] My scope: []
[2023-07-21 09:39:22] Hello World
```

## After selecting an example
After selecting one example, the code will be added to the body of the script screen where you can edit, run, and test it. Refer to the Analysis Editor and Running Analysis documentation for details on running and distributing analyses.