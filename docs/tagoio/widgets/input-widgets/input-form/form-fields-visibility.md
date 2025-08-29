---
title: "Form Fields Visibility"
description: "This article explains how Fields Visibility in the Input Form widget lets you control which form fields are shown or hidden based on other fields' values, and summarizes the main benefits of using this feature."
tags: ["tagoio"]
---
Fields Visibility lets you control the visibility of specific fields in your Input Form widget. By defining conditions, you can hide or show fields based on the values of other fields.

![Fields Visibility demo showing conditional fields for feedback type](/docs_imagem/tagoio/form-fields-visibility-2.png)

For example, a field following the "feedback type" can change depending on the selected feedback value. If the feedback type is suggestion, we show the "What is your suggestion?" field. If the feedback type is bug, we show the "What is the problem?" field.

## Benefits of Fields Visibility

1. Free up space in your form by hiding undesired fields at specific times.  
2. Separate your fields. You no longer need to use a single field label for multiple purposes and then parse values differently based on other fields.  
3. Organize the data posted. If a field is hidden, it will not be posted along with the rest of the visible fields.

## Creating Conditions

To use field visibility, you need to create conditions that define when a field will be visible. You can start creating conditions by editing your Input Form Widget and then navigating to the **Fields Visibility** tab.

- By default, each variable shows one box in this tab.  
  - If you don’t set any visibility conditions on a field, it will always be visible.  
- Once you define at least one visibility rule, the field will only appear if it matches one of the conditions. You can add up to **10** visibility conditions per field.

To create a condition, press the **Add Rule** button. A new row will appear with three key fields:

1. **Variable** – Choose a variable that was previously defined in the Main Configuration tab; this is the variable the condition will be based on.  
2. **Condition** – Specify the comparison type (e.g., *equals*, *contains*, *greater than*, etc.) that will be used against the variable’s value.  
3. **Value** – Enter the value to compare against.

When you configure a row, the field `suggestion_feedback` will only appear when the chosen variable’s field matches the condition specified. For example:

```
IF  feedback_type
IS equal to "suggestion"
THEN  suggestion_feedback   (this field will be visible)
```

This textual representation helps clarify what each part of the rule does.

For more details on configuring each form field, see the [Input Form Widget](/docs/tagoio/widgets/input-form-widget) documentation.