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