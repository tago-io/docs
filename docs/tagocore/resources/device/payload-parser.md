---
sidebar_position: 4
title: Payload Parser
slug: /tagocore/device/payload-parser
---

# Payload Parser

A Payload Parser transforms raw data from your devices into a format that's easier to work with. For example, it can convert cryptic hex data like `41BC7E` into meaningful values like temperature and battery readings that you can actually understand and use.

## Setting Up a Payload Parser

To use a payload parser with your device:
1. Go to your [Device](/docs/tagocore/device) settings
2. In the **Payload parser** field, select your JavaScript file
3. Save your changes

Each device can have only **one** payload parser, but you can create different parsers for different types of devices.

## Writing Your Parser Code

:::info JavaScript Required
Payload parsers must be written in JavaScript - no other programming languages are supported.
:::

Your JavaScript code has access to a special variable called `payload` that contains the raw data sent by your device. You can read from this variable and modify it to transform the data before TagoCore saves it to your [Device Data](/docs/tagocore/resources/device/data.md).

The `payload` variable can contain different types of data depending on what your device sends:
- An **array** of data points
- An **object** with multiple properties  
- A simple **string** or **number**

:::tip Writing Tips
- Write your code directly - no need to wrap it in a function
- Don't use `return` statements - just modify the `payload` variable
- Keep it simple - avoid `require`, `import`, or `window` statements
:::

Keep your parser code fast and efficient to avoid slowing down data processing for your entire application.

## Example: Temperature Conversion

This example shows how to convert temperature from Fahrenheit to Celsius and add proper units:

```js
// This code:
// 1. Finds the temperature inside the payload sent by the device;
// 2. Converts the value from Fahrenheit to Celsius;
// 3. Adds the unit.

// To test this code, make sure your device sends a POST request
// with a variable named "temperature".

// First, we find the temperature variable inside the payload (array)
const temperatureItem = payload.find((i) => i.variable === 'temperature');

if (temperatureItem) {
  // If we find the variable, we convert the value

  const actualTemperatureInFahrenheit = temperatureItem.value;
  const celsius = (5 / 9) * (actualTemperatureInFahrenheit - 32);

  // Set the value and unit
  temperatureItem.value = celsius;
  temperatureItem.unit = 'C';
}
```
