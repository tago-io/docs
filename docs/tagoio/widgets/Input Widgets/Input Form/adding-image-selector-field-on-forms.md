---
title: "Adding Image Selector field on Forms"
description: "This article explains the Image Selector field for Input Forms in TagoIO, showing how users pick one or multiple images and how the selected value is stored. It also documents the widget options you configure for this field type."
tags: ["tagoio"]
---
The Image Selector field type allows you to present an input where the user can select one or more images that correspond to predefined values.

## Example: Select the Device
![Image Selector example showing two selectable images: Temperature and Geolocation](/docs_imagem/tagoio/adding-image-selector-field-on-forms-2.jpg)

Users need to click an image. The value you entered in the widget options will be stored in your data [device](../../../devices/index).

## Widget options
![Image Selector widget options panel (Type, Label for variable, Default values, etc.)](/docs_imagem/tagoio/adding-image-selector-field-on-forms-2.jpg)

Common options for the Image Selector field:

- Type
  - Image Select
- Label for variable
  - Example: "Select the furniture" (this is the label shown for the form field)
- Default value(s) comes from
  - Options such as "the variable (last value)"
- Use values from
  - Static (configurable) or other value sources
- Is it a required field?
  - Yes / No
- Allow multiple selections
  - Yes / No

Notes:
- Configure the values that each image represents in the widget options; those exact values are what will be stored when a user selects an image.
- If you allow multiple selections, users can choose more than one image; otherwise only one image can be selected.
- **Use Values From**:  
  - *Static*: Define a label (header text), value (sent to the variable), URL (must be HTTPS), and description (shown below the image). These settings create each selectable image.  
  - *Dynamic*: Provide a device variable that contains an array of objects. Each object should include `metadata.description`, `metadata.url` (HTTPS), and optionally `metadata.value`. The widget will use the object's `value` field if present; otherwise it uses the variable’s value.
- In the configuration panel you can add or remove images using the **+** and **–** buttons.

## See also
- Input Form Widget (refer to the Input Form Widget documentation)
- Field Types for Input Form (refer to the Field Types for Input Form documentation)
- For other related widgets and examples, refer to the Widgets section of the TagoIO knowledge base.