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

### Analysis
When you select an analysis, the scope that you will receive contains a JSON array with each item having the following structure:

```json
[
  {
    "bucket": "5da07e1269c7ae001b2faefe",
    "origin": "5da07e1269c7ae001b2faeff",
    "id": "5da07e1269c7ae001b2faefs",
    "variable": "my_variable",
    "created_at": "2019-10-16T00:00:00Z",
    "time": "2019-10-16T00:00:00Z",
    "value": "1234,disarm"
  }
]
```

Since the data can be a digit sequence, an action string, or both, the easiest way to extract the parts inside the analysis is by using the `split` method on the string.

```python
# Python
scope[0].value.split(',')
# ['1234', 'disarm']
```

```javascript
// Node.js
scope[0].value.split(',');
# ['1234', 'disarm']
```

### Do not store data
If you select this option, the data sent by the widget will never reach the device's data storage. Keep in mind that the data sent will still be accessible inside of the analysis' scope.

### Capture User Information
> This option only works if you are using this widget inside of the [Run](/docs/tagoio/tagorun/) platform.

If you select this option, the data sent by the widget will have an additional object called `run_user`. The structure of that item is:

```json
{
  "bucket": "5da07e1269c7ae001b2faefe",
  "origin": "5da07e1269c7ae001b2faeff",
  "id": "5da07e1269c7ae001b2faefs",
  "variable": "run_user",
  "created_at": "2019-10-16T00:00:00Z",
  "time": "2019-10-16T00:00:00Z",
  "value": "5da07e1269c7ae001b2faeff"
}
```

The value in this case will be the ID of the run user.