---
title: "Keypad Visualization"
description: "This article explains the keypad visualization options for the TagoIO Keypad widget, including how to customize colors, visualization toggles, and additional button configuration options."
tags: ["tagoio"]
---
The numeric keypad contains 10 digits that range from 0–9; it also contains an asterisk (*) and a number sign (#).

You can customize the content of the keypad by creating buttons that will appear along with the digits.

![Keypad preview and configuration panels](/docs_imagem/tagoio/keypad-visualization-2.png)

## Visualization

In the Visualization tab of your widget, you can customize the look of the keypad and see the results in real time.

Common UI elements visible in the Visualization tab:
- Preview area showing the keypad layout:
  - First row: 1, 2, 3
  - Second row: 4, 5, 6
  - Third row: 7, 8, 9
  - Fourth row: *, 0, #
- Left-side menu entries:
  - Main Configuration
  - Visualization
  - User Control
  - Help text
  - Embed Widget

Colors panel:
  - Main (background color)
  - Click (button click color)

Visualization toggles:
  - Show asterisk – Shows or hides the asterisk in the widget. If you choose to hide it, a new slot for a button will appear in that position.
  - Show number sign – Shows or hides the number sign in the widget. If you choose to hide it, a new slot for a button will appear in that position.
  - Show right column – If you select this option, a column will appear on the right side, allowing you to set 4 new buttons.
  - Show bottom row – If you select this option, a column will appear on the bottom side, allowing you to set 4 new buttons.
  - Show asterisks when typing – If you select this option, a digits bar will appear on the top side showing an asterisk for each digit the user types.

Whenever you see a dashed slot, it means there is a space for you to set a button in that position. To create a button, just press that slot and a new popup will appear.

## Colors

The Colors area lets you set primary colors used by the keypad, such as the main background color and the click (active) color.
- Main: This is the color of the digits of the widget.
- Click: This is the color that will appear when you click on a digit.

## Button Configuration

You can create and configure extra buttons to appear alongside the keypad digits. Button configuration options appear in the widget settings (accessible via the widget editor). In each button configuration, you have some options to customize the visuals and functionality of your button.
- Content type – The type of content that will be inside of the button. You can put text here or simply an icon.
- Value – This is the value that will be sent to the [device](/tagoio/devices) or [analysis](/tagoio/creating-analysis) when a user submits the keypad. Learn more about [Keypad's Data Manipulation](/tagoio/keypad-data-manipulation).
- Background color – The color of the button's background. The font color will be automatically adjusted to either black or white for a better contrast with your color.
- Enabled – Indicates if the button is enabled or not. Disabled buttons cannot be clicked.
- Remove Button – If you click this option, this button will be removed from the keypad. You can still create another button in the same slot as this one.

## See also

- See [Keypad Widget](../widgets/keypad-widget)
- See [Creating Keypad Widgets](../widgets/keypad-widget#creating-your-own)
- See [Keypad Visualization](#) (this article)
- See [Keypad Data Manipulation](../keypad-data-manipulation)

Breadcrumb (documentation path): Knowledge Base / TagoIO / Widgets / Keypad Widget