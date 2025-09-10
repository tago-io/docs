---
sidebar_position: 3
title: Code
slug: /tagocore/analysis/code
---

# Analysis Code

You may write your Analysis's code in whatever way you prefer. However, we do have some coding guidelines, best practices, and tips
that may help you in your quest to create powerful Analyses.

## Using data

You can run your Analysis in many different ways, and one of them is by using an [Action](/docs/tagocore/action).

When a Device sends data that triggers an Action, and that Action in turn runs your Analysis, you may access the data sent by the Device via the `TAGOCORE_DATA` environment variable.

The `TAGOCORE_DATA` environment variable will contain an array of objects or a single object, depending on the data sent by the Device. It will look something like this:

```json
{
  "origin": "61be276db205c10019e6a218",
  "variable": "temperature",
  "value": 100,
  "unit": "F"
}
```


## Writing code

With an Analysis, you are able to execute **any type of code** in **any language** you desire. The way this is achieved is through the `Binary Executable path` and the `File path` fields. For more information, see our [Analysis Overview](/docs/tagocore/analysis) article.

:::tip Good to know
- Your code **doesn't have** to be in a function;
- You do not have to use a `return` statement at the end of your code.
:::

## Code sample

This code sample shows a **Node.js Analysis** that simply logs the value of a variable to the [Analysis Console](/docs/tagocore/resources/analysis/console.md).

```js
const data = process.env.TAGOCORE_DATA;
const temperatureItem = data.find((i) => i.variable === 'temperature');
console.log("Temperature is at:", temperatureItem.value);
```
