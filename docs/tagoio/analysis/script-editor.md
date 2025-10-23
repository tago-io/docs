---
title: "Script Editor"
description: "This article explains how to use the TagoIO Script Editor to create, edit, and run analysis scripts. It covers where to access the editor, key editor options (name, interval, run location), loading snippets or files, and shows a sample \"Hello World\" script."
tags: ["tagoio"]
---
With the script editor, developers can create and edit their own scripts at TagoIO. These scripts are executed according to the configuration defined in the Analysis section.

To use the script editor, go to [Analysis](/docs/tagoio/analysis/), then create or edit an analysis. Set the name, runtime version, and choose to run it at TagoIO.

:::warning

The editor tab is only shown when you choose to run the script at TagoIO.

:::

By clicking on the Analysis, you can open the editor. Here are some of the options you can find:
- Upload scripts from your local machine
- Change the maximum runtime of the script
- Choose from one of our snippet examples
- Directly edit the script, environment variables, and more...

![TagoIO Script Editor screenshot](/docs_imagem/tagoio/rounded-image-1761141979293.png)

When you save the script, it will be deployed on TagoIO servers. You can then click **Run** to execute it immediately and view the results in the console below.

To learn more about our examples, you can visit our [Script Examples](/docs/tagoio/analysis/script-examples.md) article, or access the [Analysis](https://admin.tago.io/analysis) click on the "+ Add Analysis" button in, the top right corner and select a code example.
