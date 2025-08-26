---
title: "Custom Widget Parameters"
description: "This article explains how to add and use custom widget parameters in TagoIO, including how parameters are structured (key/value pairs), limits, and how they are received in your widget code."
tags: ["tagoio", "widgets"]
---
Parameters allow you to send a list of keys and values to your custom widget.

One common use for parameters is to change how your code behaves. For example, you can point two widgets to the same link but configure each to exhibit different behaviors by using different parameters.

![Custom widget parameters table](/docs_imagem/tagoio/custom-widget-parameters-2.png)

Each parameter has a unique key and a value. The key is used in your code to retrieve the parameter's value.

Note: You can specify up to 20 parameters.

## Usage in code

Before reading this section, you should read the [Custom Widget tutorial](custom-widget-development) to understand how the widget code works.

In your code, the parameters are received in the `onStart` function, for example:

```javascript
window.TagoIO.onStart((widget) => {
  const display = widget.display;
  // Your code here — parameters are provided to the widget when it starts
});
```

For details on how to access specific parameter values inside your widget code, refer to the Custom Widget tutorial or the rest of the Custom Widget documentation.

Parameters are exposed as an array on `display.parameters`. You can retrieve them like this:

```javascript
window.TagoIO.onStart((widget) => {
  const display = widget.display;
  const parameters = display.parameters;

  // Example: accessing the first two parameters by index
  const parameter1 = parameters[0];
  const parameter2 = parameters[1];

  // Your code here — use the retrieved parameters as needed
});
```
