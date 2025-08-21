---
title: "Keypad Data Manipulation"
description: "Explains the data structure the TagoIO Keypad widget sends when users enter PINs or press custom buttons, with examples and guidance on extracting that data using an analysis via the User Control tab."
tags: ["tagoio"]
---

The keypad sends data either when a custom button is pressed or when a combination is entered and left for 3 seconds. The values are delivered as a single string variable following a simple structure.

## Data format
Whenever a PIN code is submitted, the structure sent to the variable is:

```text
DIGITS,ACTION
```

- DIGITS: the numeric sequence entered (if any)
- ACTION: the custom button name (if any), lowercase

## Examples
- If the user enters the sequence 1234 and then presses a custom button named DISARM, the output will be:

```text
1234,disarm
```

- If the user enters a sequence and no action button, the action is excluded:

```text
1234
```

- If the user only presses a button and does not enter a sequence, the output will be the button name:

```text
disarm
```

## Using the data
The recommended way to extract and use this data is through an Analysis. The Keypad widget provides an option to run an analysis from the User Control tab.

![Keypad widget — User Control tab](/docs_imagem/tagoio/keypad-data-manipulation-2.png)