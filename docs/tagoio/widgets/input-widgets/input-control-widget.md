---
title: "Input Control Widget"
description: "This article explains how to use the Input Control widget in TagoIO to submit values to variables via a form and how to edit the form structure, sections, and fields."
tags: ["tagoio", "widgets"]
keywords: [tagoio, iot, widget, input control, form]
"sidebar_position": 2
---

The Input control allows users to submit values to variables through a form.

## Editing the form

The Input Control is a dynamic widget. You can customize its colors, layout, text, and icons.

![Input Control editor showing sections and fields](/docs_imagem/tagoio/peek_138.gif)

To edit a specific section or element in the widget, go to the structure section and click on the desired element.

> This widget works for both **Normal** dashboards and **Blueprint** dashboards.

### Sections

Sections form the main structure of the form; each section can contain its own fields.  
You can show a divider between sections, duplicate or remove sections, and hide captions if desired.

### Fields

Fields are associated with a variable and a device using the **Data Sources** setting.  
When a field is submitted, the data is sent to the device’s data storage.  
You can also assign an analysis to each field; when the field is submitted, that analysis will run automatically.

#### Data Sources Field

The `Data Sources` field allows you to set the device and variable that will be used in this widget.

- **Normal Dashboards** – Select one of your devices from the list and choose the variable that contains the data.
- **Blueprint Dashboards** – Add the Blueprint device and input the name of the variable that holds the information.  
  _When using a Blueprint dashboard, the Variable field will suggest a list of variables to be picked using the currently selected blueprint device._

### Field Types

The Input Control supports two types of fields: **Switch** and **Text**.  
Unlike the Input Form widget, each field has its own button that sends data when pressed.

- **Switch** – Displays a simple toggle button that changes the variable’s value to `true` or `false`. You can customize the text shown for each state.
- **Text** – Provides a standard text input; whatever is typed into it will be sent as the field’s value.
