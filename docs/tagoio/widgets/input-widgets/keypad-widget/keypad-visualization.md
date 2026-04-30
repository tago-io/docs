---
title: "Keypad Visualization"
description: "This article explains the keypad visualization options for the TagoIO Keypad widget, including how to customize colors, visualization toggles, and additional button configuration options."
tags: ["tagoio"]
keywords: [tagoio, iot, widget, keypad, visualization]
---

![Keypad preview and configuration panels](/docs_imagem/tagoio/rounded-image-1773258786495.png)

The Keypad widget displays a numeric keypad with digits 0–9, as well as an asterisk (\*) and number sign (#), just like a traditional telephone keypad.

> You can further tailor the keypad to your application by adding custom buttons in addition to the standard digits.

## Button Configuration

![Keypad button configuration](/docs_imagem/tagoio/rounded-image-1773258876498.png)

You can create and configure extra buttons to appear alongside the keypad digits. Button configuration options appear in the widget settings (accessible via the widget editor). In each button configuration, you have some options to customize the visuals and functionality of your button.

- **Content type**: The type of content that will be inside of the button. You can put text here or simply an icon.
- **Value**: This is the value that will be sent to the [device](/docs/tagoio/devices/) or [analysis](/docs/tagoio/analysis/creating-analysis.md) when a user submits the keypad. Learn more about [Keypad's Data Manipulation](/docs/tagoio/widgets/input-widgets/keypad-widget/keypad-data-manipulation.md).
- **Background color**: The color of the button's background. The font color will be automatically adjusted to either black or white for a better contrast with your color.
- **Enabled**: Indicates if the button is enabled or not. Disabled buttons cannot be clicked.
- **Remove Button**: If you click this option, this button will be removed from the keypad. You can still create another button in the same slot as this one.
