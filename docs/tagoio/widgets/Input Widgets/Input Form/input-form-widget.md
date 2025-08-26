---
title: "Input Form Widget"
description: "A brief guide to the Input Form widget explaining what it does and how to edit it, including steps to modify sections and fields and a note about dashboard compatibility."
tags: ["tagoio", "widgets"]
---
The Input form allows users to submit values to variables through a form.

## Editing the form
The Input form is a very dynamic widget. You can customize its colors, layout, text, and icons.

![Input form editor screenshot](/docs_imagem/tagoio/input-form-widget-2.gif)

Image transcribed text:
- Form #1
- Section #1
  - My section description
- Field #1
- + Add Field
- + Add section
- + Add button
- Submit

To edit a specific section or element of this widget, hover over the desired element and click it. A panel will appear on the right side with all editable options for the selected element.

> Note: This widget works for both dashboard modes: Normal and [Blueprint](../../dashboards/blueprint-dashboard).

## Sections
Sections are the main structure of the form, and each section has its own fields.  
You can show a divider between sections, duplicate sections, remove captions, and more.

![Section example](/docs_imagem/tagoio/sections-PY4.gif)

### Fields
Fields are associated with a variable and device using the **Data From**. Once the form is submitted, the data can be sent through the device’s storage.

![Field example](/docs_imagem/tagoio/Fields-MlQ.gif)

Input form has many field types, such as Address, Barcode, Calendar, Checkbox, Device, Dropdown, Text, and more.  
Learn more about [Input Form fields type](/tagoio/field-types-for-input-form).

It is also possible to change a field’s visibility based on other fields’ values: see the article on [Form fields visibility](/tagoio/form-fields-visibility).

#### Data From Field
This field allows you to set the device and variable that will be used in this widget.

![Data From example](/docs_imagem/tagoio/external-75b8ef8b.png)

> This field is dependent on the **type of dashboard** you are using; the difference is explained below.

##### Normal Dashboards
From the option **Data From** on the right menu, select the source of the data, which can be either a [Device](/tagoio/devices/devices) or an [Entity](/tagoio/entities/entities). After that you can select the specific Device or Entity and its field or variable.

##### Blueprint Dashboards
From the option **Data From** on the right menu, select the source of the data, which can be either a Device or an Entity. Add the [Blueprint device](/tagoio/devices/blueprint-devices-entities) and input the name of the variable or field that contains the information.

![Info icon](/docs_imagem/tagoio/info-8.png)  
When using a [Blueprint dashboard](../../dashboards/blueprint-dashboard), the inputs Variable or Field will not list the contents to be picked because it doesn't know the entities or devices linked to your Blueprint Associations.

![Notes icon](/docs_imagem/tagoio/file.png)  
When using Entities, certain fields might be marked as required. If these essential fields are not included in your form, an error will occur. To resolve this issue, you can either add the missing fields to your input form or modify the field settings in your Entity so that it is no longer mandatory. See the article on [Entities](/tagoio/entities/entities).

## Buttons
It is also possible to create and customize buttons that can perform actions such as running analysis, clearing fields, and sending data to the device.

![Button example](/docs_imagem/tagoio/buttons2-vGw.gif)

After the button has been clicked, you can show a confirmation dialog message that needs to be accepted so that the actions of the button can be performed.

![Info icon](/docs_imagem/tagoio/info-8.png)  
When the button triggers an analysis, it sends the field data and the button identifier through the analysis’s scope.