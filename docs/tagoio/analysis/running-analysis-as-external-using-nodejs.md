---
title: "Running Analysis as External using Node.JS"
description: "This article explains why and how to run a TagoIO Analysis externally using Node.js, and provides the first steps to prepare your local environment (installing Node.js and NPM) before running or uploading analyses."
tags: ["tagoio", "analysis"]
---
Analysis is what allows you to create powerful applications on TagoIO. When creating an analysis, you must choose whether it will run on TagoIO or externally on your own machine.

You may choose to run an analysis on an external machine for several reasons:

1. Development: While developing an analysis, it's best to use a full IDE and debugging mode, which are only available when running Node.js locally on your machine.
2. Security: Your company may have legal or compliance requirements that prevent uploading source code to TagoIO services.
3. Using third‑party packages: The built‑in analysis environment includes some packages (for example, axios and moment.js), but you may want to use additional npm packages. In combination with the Analysis-Builder, you can use any third‑party package you like and build a more powerful script for TagoIO.

So, let's start with the instructions you need to get your analysis working in an external environment.

## 1. Install Node.js and NPM

Node.js is a powerful, widely used runtime for running JavaScript outside the browser. It is non‑blocking and event‑driven, making it suitable for data‑intensive real‑time applications. Learn more about [node.js](https://nodejs.org/).

Open the [Node.js Installation Guide](https://nodejs.org/en/download/) for instructions on how to install NPM and Node.js.

## 2. Create your Environment

In order to start writing your code, you first must set up the environment with Node.JS and NPM.

**2‑1.** Open your favorite command‑line tool like the Windows Command Prompt, PowerShell, Cygwin, Bash or the Git shell (which is installed along with Github for Windows). Then create or navigate to your new project folder.

**2‑2.** If the folder is empty, run `npm init` and fill in all prompted requests. If this is your first time, you can leave all defaults by just pressing enter.

**2‑3.** Now install the Tago SDK and the TagoIO‑Builder SDK:

```bash
npm install --save @tago-io/sdk
npm install -g @tago-io/builder
```

This will start the installation of the TagoIO SDK and the TagoIO‑Builder if you wish to upload your script later at TagoIO.

**2‑4.** Create a file called `analysis.js`. Open it with your favorite editor, like Visual Studio Code or even Notepad. You can write the code exactly as you would do on the TagoIO editor.

![Image 1](/docs_imagem/tagoio/info-8.png)

You can get the Hello World analysis example by clicking [here](https://raw.githubusercontent.com/tago-io/analysis-example-console/master/analysis.js).

## 3. Running your Analysis

After the code and the environment are set, you only need to make sure you put the right Analysis token into your analysis file.

In order to do that, every analysis has the following line below. Replace `MY-ANALYSIS-TOKEN-HERE` with your analysis token:

```js
module.exports = new Analysis(myAnalysis, { token: '**MY-ANALYSIS-TOKEN-HERE**' } );
```

You can get the analysis token by accessing your analysis page at TagoIO and selecting **External** for “Run the scripts from”. Create a new analysis if you don’t have any.

![Image 2](/docs_imagem/tagoio/1600873613832-4Vc.png)

Now run the script from your command line:

```bash
node ./analysis.js
```

You should see a prompt similar to this:

![Image 3](/docs_imagem/tagoio/Screen-20Shot-202019-03-06-20at-2016.32.35-37A.png)

Go back to Tago and click **Save and Run** or just **Run** to run your script. You can also configure an action to run your script automatically.

![Image 4](/docs_imagem/tagoio/1611084833441-Ers.png)

## 4. Use Analysis‑Builder to Upload the Script

If you only want to run the scripts on your machine, this step is not required. But if you want to build powerful scripts to upload at TagoIO, with several folders, imports, and third‑party packages, you must use the analysis‑builder to compile the scripts.

To do that:

1. Ensure `@tago-io/builder` is installed globally:  
   ```bash
   npm install -g @tago-io/builder
   ```
2. In your terminal run:  
   ```bash
   analysis-builder my_script.js
   ```
3. Upload the generated `new_name.tago-io.js` file to your analysis at TagoIO.

## More Examples

You can check our analysis examples with the full environment already set up for you below:

* [Hello World Example](https://github.com/tago-io/analysis-example-console)
* [Average Min/Max Example](https://github.com/tago-io/analysis-example-avgMinMax)
* [Find Example](https://github.com/tago-io/analysis-example-find)

## References and related documentation

- See [Analysis](../analysis/index) for an overview of creating and managing analyses in TagoIO.
- See [Analysis‑Builder](../console-for-debug) for details on bundling and uploading scripts that use third‑party packages.

On this page (for reference)
- 1. Install Node.js and NPM
- 2. Create your Environment
- 3. Running your Analysis
- 4. Use Analysis‑Builder to Upload the Script
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
- Internal documentation links have been preserved as link text; replace "link-to‑..." placeholders with the actual internal URLs when integrating into the docs site.