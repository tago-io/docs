---
title: "Filtered Variables"
description: "This article explains the Filtered Variables field for the Input Form widget, describing how it works, when it is useful, and how to configure it so one field's options update dynamically based on another field's value."
tags: ["tagoio"]
---
Filtered Variables is a field type in the [Input Form](../widgets/input-form-widget) widget. It lets the user select a single value from a list whose options change dynamically based on the values of other fields.

![Form example showing Food types and Food fields](/docs_imagem/tagoio/filtered-variables-2.gif)

For this field to work, it must be linked to another field. In the example above, the "Food" field is linked to the "Food Types" field. Whenever the Food Types field changes, the options inside the Food field are refreshed.

## Configuration

In the Fields Configuration tab of your [Input Form](../widgets/input-form-widget) widget, select the field type **Filtered Variables** to configure this field.

- **Label** – The label above the field; it should indicate what the purpose of the field is.  
- **Required** – Indicates whether this field must be filled before submitting the input form.  
- **Show in a new line** – Determines if the field should start on a new line inside the widget.  
- **Placeholder** – Extra explanation for the user; it appears as text inside the field when empty.  
- **Filter origin** – The linked field that will filter the options based on its value (e.g., `food_types`).  
- **Options** – The source of the list; the values of the selected variable populate the options in this field.

## Structure

To enable filtering, each option in your list must contain a `serie` property. For example, if you have a variable named `food_options`, each item should look like:

```json
{
  "variable": "food_options",
  "value": "Apple",
  "serie": "fruit"
}
```

When the value of the **Filter origin** field changes, the list filters its items by comparing that value with the `serie` property of each option. The comparison ignores whitespace and case (e.g., `"my value 1"` matches `"myvalue1"`).

## Example

Below is a concrete example using the structure described above.

```json
[
  {
    "variable": "food_options",
    "value": "Apple",
    "serie": "fruit"
  },
  {
    "variable": "food_options",
    "value": "Banana",
    "serie": "fruit"
  },
  {
    "variable": "food_options",
    "value": "Broccoli",
    "serie": "vegetable"
  },
  {
    "variable": "food_options",
    "value": "Carrot",
    "serie": "vegetable"
  }
]
```

In the input form, create two fields:

1. **Food Types** – a static dropdown with options `fruit` and `vegetable`.  
2. **Food** – a Filtered Variables field that uses `food_options` as its source.

When a user selects `fruit` in the Food Types field, the Food field will display only `Apple` and `Banana`. Selecting `vegetable` shows `Broccoli` and `Carrot`.