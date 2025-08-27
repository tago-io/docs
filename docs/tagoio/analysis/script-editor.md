---
title: "Script Editor"
description: "This article explains how to use the TagoIO Script Editor to create, edit, and run analysis scripts. It covers where to access the editor, key editor options (name, interval, run location), loading snippets or files, and shows a sample \"Hello World\" script."
tags: ["tagoio"]
---
With the script editor, developers can create and edit their own scripts at TagoIO. These scripts are executed according to the configuration defined in the Analysis section.

To use the script editor, go to [Analysis](../analysis/index), then create or edit an analysis. Set the name, interval, and choose to run it at TagoIO.

> Important: The editor tab is only shown when you choose to run the script at TagoIO.

By clicking the Analysis tab, you can open the editor. From there you can:
- Load scripts from your computer
- Download scripts from the editor
- Choose from one of our [snippet examples](../analysis/index)

![TagoIO Script Editor screenshot](/docs_imagem/tagoio/script-editor-2.png)

When you save the script, it will be deployed on TagoIO servers. You can then click **Run** to execute it immediately and view the results in the console below.

## Example script

The following example shows a simple "Hello World" analysis that logs messages to the Tago analysis console.

```javascript
/*
  Analysis Example
  Hello World

  Learn how to send messages to the console located on the Tago analysis screen.
  You can use this principle to show any information during and after development.
*/
const Analysis = require('tago/analysis');

// The function myAnalysis will run when you execute your analysis
function myAnalysis(context, scope) {
  // This will log "Hello World" at the Tago Analysis console
  context.log("Hello World");

  // This will log the context to the Tago Analysis console
  context.log('Context:', context);

  // This will log the scope to the Tago Analysis console
  context.log('my scope:', scope);
}
```

## Editor options and fields

- **Name**  
  - The analysis name (for example: "Hello world").

- **Time interval to run this script**  
  - Set how frequently the script should run (for example: "1 Day").

- **Run this script from**  
  - TagoIO — Run and host the script on the TagoIO platform.
  - External — Run your script from your computer or another server.

- **Analysis token**  
  - A token used to identify and authorize the analysis (displayed as a masked string in the UI).

## Console output

The editor includes a console area that shows analysis runtime logs and timestamps. Example console lines:

- [2019-09-17 07:41:39] Hello World  
- [2019-09-17 07:41:39] Starting analysis 5d7aae15f0315401bb9180a...  
- [2019-09-17 07:41:39] Hello World  
- [2019-09-17 07:41:39] Starting analysis 5d7aae15f0315401bb9180a...

## Related references

- Analysis (see [Analysis](../analysis/index))  
- Snippet examples (see [snippet examples](../analysis/index))

For additional details on creating and configuring analyses, refer to the Analysis documentation and the provided snippet examples.