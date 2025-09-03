---
title: "Static Table Widget"
description: "This article explains what a Static Table Widget is in TagoIO and how to edit its appearance and behavior, including customization options and features accepted by the widget."
tags: ["tagoio", "widgets"]
---
Static tables are tables where each cell represents a different piece of information. A cell can contain fixed text or data from a variable.

## Editing the static table
It is possible to customize the widget color, apply a formula to a cell, edit options, and more.

> This widget also accepts features like [metadata](/docs/tagoio/payload-parser/metadata), which can be set in your variable data. (See the metadata documentation in the TagoIO help center for details.)

![Static table editing screen](/docs_imagem/tagoio/static-table-widget-2.gif)

When you want to change a specific cell, simply hover over it and click. A configuration panel will appear on the right side of the editor with all editable options for that element.  
You can delete an entire row or column by clicking the top‑right corner of the table and selecting the appropriate option.

The widget works in both Normal dashboards and Blueprint dashboards. For Blueprint dashboards, the “Data From” field behaves slightly differently (see below).


### 1. ‘Data From’ Field
Each cell can display the last value of a variable by using the **Data From** field; it allows you to set the device and variable that will be used in this widget.

- **Normal dashboards:**  
  In the right‑hand menu, select *Data From*, choose one device from your list, and then pick the variable that contains the data.

- **Blueprint dashboards:**  
  Select *Data From*, add a Blueprint device, and input the name of the variable. Because the dashboard does not know which devices are linked to the Blueprint device, the Variable dropdown will be empty; you must type the variable name manually.

### 2. Data visualization
The static table lets you customize each cell’s data presentation:

- Apply **Formulas** to transform the value before it is shown.
- Change cell colors based on conditions or let the color be sent via the variable’s metadata.
- Use icons, bold/italic/underline text styles, and other visual cues.

> These options are available in the cell configuration panel that appears when you click a cell.

### 3. Editing Data
You can allow users to modify a variable’s value directly inside the table by enabling the **Edit** option in the cell’s configuration.  

- Some cells can be marked as *required* when editing a row.
- The widget supports several field types for input: **Text, Password, Number, Dropdown, Dropdown Multiple, and Address**—behaving the same way as Input Form fields.
- After the user submits a change, you may apply **Dynamic Formulas** to the new value before it is stored in your device’s data storage.
