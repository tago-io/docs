---
sidebar_position: 4
title: Payload Parser
slug: /tagocore/device/payload-parser
---

# Payload Parser

Payload Parser allows you to manipulate the raw payload sent by devices. For example, it can be used to transform a HEX payload sent by a device into `temperature` and `battery` variables.

## Associating it

Payload Parsers must be associated to a [Device](/docs/tagocore/device), and you can define one by selecting a file in the **Payload parser** field of a Device. Each device can only have **one** Payload Parser.

## Writing code

:::info
Payload Parsers can only be written in JavaScript.
:::

Inside of your JavaScript code, you can use the `payload` global variable to have access to the data sent by your device. You may also modify this global variable if you wish to change the data before it is saved in the Device's [Data](/docs/tagocore/device/data).

The global `payload` will contain whatever your Device has sent in the body of the HTTP request, which means it doesn't have a specific type and can be an `array`, `object`, or even a `string` or `number`.

:::tip Good to know
- Your code **doesn't need** to be in a function;
- You do not need to use a `return` statement at the end of your code;
- You cannot use `require`, `import`, or `window` inside of your code.
:::

In general, your script should **not take too long** to transform the payload of your Device in order to avoid a bottleneck in your application.

## Code sample

This code sample shows how you can convert a `Celsius` temperature value to a `Fahrenheit` temperature value.

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
