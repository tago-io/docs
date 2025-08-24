---
sidebar_position: 5
title: Helpers
slug: /tagocore/plugins/create/helpers
---

# Helpers

The TagoCore Plugin SDK offers helpers functions that are useful when creating your Plugin.

## Write a file

To write a file, you can use the `writeFile` helper function. Similarly to the `fs` module from Node.js, this
function writes the desired contents in a file.

The main difference between using this helper function and the `fs` module directly is that this helper function
by default writes the file in the settings folder of your Plugin.

If you are writing a simple file, we recommend you use this helper function instead of using `fs` module directly.

```js
const { helpers } = require("@tago-io/tcore-sdk");

async function writeFile() {
  const data = "Hello, my name is John";
  await helpers.writeFile("folder/data.txt", data);
}

writeFile();
```

## Read a file

To read a file, you can use the `readFile` helper function. Similarly to the `fs` module from Node.js, this
function reads contents of a file.

The main difference between using this helper function and the `fs` module directly is that this helper function
tries to find the file in the settings folder of your Plugin.

We recommend you use this helper function instead of using `fs` module directly.

```js
const { helpers } = require("@tago-io/tcore-sdk");

async function readFile() {
  const data = await helpers.readFile("folder/data.txt");
  console.log(data); // outputs "Hello, my name is John"
}

readFile();
```
