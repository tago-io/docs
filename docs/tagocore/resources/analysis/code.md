---
sidebar_position: 3
title: Code
slug: /tagocore/analysis/code
---

# Analysis Code

You have complete freedom in how you write your Analysis code - use any programming language, framework, or coding style you prefer. This guide covers the essentials of accessing device data and structuring your Analysis code effectively.

## Accessing Device Data

When your Analysis is triggered by an [Action](/docs/tagocore/action) (for example, when a device sends new data), you can access that triggering data through a special environment variable called `TAGOCORE_DATA`.

This environment variable contains the device data that triggered your Analysis. The data might be a single data point or multiple data points, depending on what your device sent. Here's what a typical data point looks like:

```json
{
  "origin": "61be276db205c10019e6a218",
  "variable": "temperature",
  "value": 100,
  "unit": "F"
}
```

**Key fields explained:**
- `variable`: The type of data (e.g., "temperature", "humidity", "pressure")
- `value`: The actual measurement or reading
- `unit`: The measurement unit (e.g., "°F", "°C", "%")
- `origin`: The unique ID of the device that sent this data

## Writing Your Code

TagoCore supports any programming language through the `Binary Executable path` and `File path` configuration. For details on setting this up, see the [Analysis Overview](/docs/tagocore/analysis) guide.

:::tip Keep It Simple
- Write your code directly - no need to wrap it in functions
- Skip `return` statements - just execute your logic
- Focus on processing the data and producing results
:::

## Example: Temperature Monitor

This Node.js example shows how to access device data and log temperature readings to the [Analysis Console](/docs/tagocore/resources/analysis/console.md):

```js
const data = process.env.TAGOCORE_DATA;
const temperatureItem = data.find((i) => i.variable === 'temperature');
console.log("Temperature is at:", temperatureItem.value);
```

This simple Analysis reads the device data, finds the temperature variable, and outputs the current temperature reading to the console where you can monitor it.
