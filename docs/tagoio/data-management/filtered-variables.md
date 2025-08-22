---
title: "Filtered Variables"
description: "This article explains the Filtered Variables field for the Input Form widget, describing how it works, when it is useful, and how to configure it so one field's options update dynamically based on another field's value."
tags: ["tagoio"]
---

Filtered Variables is a field type in the [Input Form](../widgets/input-form-widget) widget. It lets the user select a single value from a list whose options change dynamically based on the values of other fields.

![Form example showing Food types and Food fields](/docs_imagem/tagoio/filtered-variables-2.gif)

For this field to work, it must be linked to another field. In the example above, the "Food" field is linked to the "Food Types" field. Whenever the Food Types field changes, the options inside the Food field are refreshed.

## Configuration

In the Fields Configuration tab of your [Input Form](../widgets/input-form-widget) widget, select the field type "Filtered Variables" to configure this field.