---
title: "Input Control Widget"
description: "This article explains how to use the Input Control widget in TagoIO to submit values to variables via a form and how to edit the form structure, sections, and fields."
tags: ["tagoio", "widgets"]
"sidebar_position": 2
---
The Input control allows users to submit values to variables through a form.

## Editing the form

The Input Control is a dynamic widget. You can customize its colors, layout, text, and icons.

![Input Control editor showing sections and fields](/docs_imagem/tagoio/input-control-widget-2.gif)

To edit a specific section or element in the widget, hover over the desired element and click it. A panel will appear on the right side with all editable options for the selected element.

> This widget works for both **Normal** dashboards and **Blueprint** dashboards.  
> For Blueprint dashboards, the `Data From` field behaves slightly differently because the system does not know which devices are linked to your Blueprint device.

### Sections

Sections form the main structure of the form; each section can contain its own fields.  
You can show a divider between sections, duplicate or remove sections, and hide captions if desired.

### Fields

Fields are associated with a variable and a device using the **Data From** setting.  
When a field is submitted, the data is sent to the device’s data storage.  
You can also assign an analysis to each field; when the field is submitted, that analysis will run automatically.

#### Data From Field

The `Data From` field allows you to set the device and variable that will be used in this widget.

- **Normal Dashboards** – Select one of your devices from the list and choose the variable that contains the data.
- **Blueprint Dashboards** – Add the Blueprint device and input the name of the variable that holds the information.  
  Because the system does not know which devices are linked to your Blueprint device, the variable selector will not show a list of variables.

### Field Types

The Input Control supports two types of fields: **Switch** and **Text**.  
Unlike the Input Form widget, each field has its own button that sends data when pressed.

- **Switch** – Displays a simple toggle button that changes the variable’s value to `true` or `false`. You can customize the text shown for each state.
- **Text** – Provides a standard text input; whatever is typed into it will be sent as the field’s value.

## On this page

- Editing the form
  1. Sections — See [Form Sections](/docs/tagoio/widgets/widget-configuration#form-sections)
  2. Fields — See [Form Fields](/docs/tagoio/widgets/widget-configuration#form-fields)
     - 2.1. "Data From" Field (/docs/tagoio/devices/data-management/data-records)
  3. Fields type — See [Field Types](../field-types-for-input-form)

## Related articles

- [Input Form Widget](/docs/tagoio/widgets/input-form-widget)
- [Compose Widget](../Media Widgets/compose-widget)
- [Map Widget](../Map & Location/Map Widget/map-widget)
- [Device List Widget](../Tables/device-list-widget)
- [Image Marker Widget](../Map & Location/image-marker-widget)