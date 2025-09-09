---
title: "Dynamic Table Widget"
description: "This article describes the Dynamic Table widget in TagoIO, how it populates rows dynamically as data arrives, and how to customize its appearance and behavior (including metadata and series support)."
tags: ["tagoio", "widgets"]
---
Dynamic tables are tables that populate dynamically as your data arrives while keeping the history of previous values in each row.

## Editing the dynamic table
You can customize the widget color, apply formulas to columns, show a time column, enable a control column, and more.

:::info

 This widget also accepts features like [metadata](/tagoio/devices/payload-parser/metadata.md) and [series](/tagoio/devices/grouping-variables.md), which can be set in your variable data.

 :::

![Dynamic Table Widget editor screenshot](/docs_imagem/tagoio/dynamic-table-widget-2.gif)

To edit a specific section of this widget, you must hover over the desired element and click it. Promptly, a new page will appear on the right side with all the editable options for the selected element.



### 1. 'Data From' Field
Each column has the field **Data From**; this field allows you to set the device and variable that will be used in this widget.

<!-- Image temporarily disabled: Image 2 - /cdn.elev.io/file/uploads/VkSrjeSoWpdg7LeGdh2jKUEagxh0dd_cO83j6HUV_6s/e8-MfiCj5RwAfHTvlBRuj35BF4akrnZU7huPEjZZf_c/1623008017802-7Qs.png -->

> This field is dependent on the type of dashboard you are using; the difference is explained below.

#### 1.1 'Data From' for Normal Dashboards
From the option **Data From** on the right menu, select one device from your list of devices and the variable that contains the data.

#### 1.2 'Data From' for Blueprint Dashboards
From the option **Data From** on the right menu, add the [Blueprint device](/tagoio/devices/blueprint-devices-entities.md) and input the name of the variable that contains the information.

> When using a [Blueprint dashboard](/tagoio/dashboards/blueprint-dashboard.md), the field *Variable* will not list variables to be picked because it doesn't know the devices linked to your Blueprint Device.

### 2. Grouping data
The dynamic table lets you group related data from multiple columns in the same row by either **series** or time.

<!-- Image temporarily disabled: Image 3 - /cdn.elev.io/file/uploads/8Kr8tD8c3s2gigLME_FvaA_bT6A7DbPNHE1DBsJtJDw/a5qbzEpKPdKvAAYdvNp1Ue32vefQzbVwZz4Pkp8yoVM/Captura%20de%20tela%20de%202021-07-06%2011-39-24-EVQ.png -->

The variable's data that has the same time will be grouped in the same row.

### 3. Data visualization
The dynamic table offers the possibility of customizing each column's data visualization. It is possible to apply **Formula**, make cell colors change based on conditions, use icons to represent your data, and more.

> The color cell can be sent by the variable metadata.

<!-- Image temporarily disabled: Image 4 - /cdn.elev.io/file/uploads/8Kr8tD8c3s2gigLME_FvaA_bT6A7DbPNHE1DBsJtJDw/vSAyAT4i-6CvQod4VfK2Jj5bdL8j8RWV6FHpkeTMiRs/Captura%20de%20tela%20de%202021-07-06%2011-39-56-_74.png -->

### 4. Filtering Data
Filtering data can be done by each column or by the whole table. It's customizable on the Widget's edit screen.

<!-- Image temporarily disabled: Image 5 - /cdn.elev.io/file/uploads/8Kr8tD8c3s2gigLME_FvaA_bT6A7DbPNHE1DBsJtJDw/cLOa-2UC_OegvIP09C_EtIQpYUN12on3xmNB6yn1mss/filteringDT-81w.gif -->

### 5. Editing data
You can allow users to modify a variable's value inside of a table by enabling the edit option located inside the column's configuration.

<!-- Image temporarily disabled: Image 6 - /cdn.elev.io/file/uploads/8Kr8tD8c3s2gigLME_FvaA_bT6A7DbPNHE1DBsJtJDw/ADOn_bBubSLo41f6EGzKWw-ztsbaLEa-M8XBV73XHX4/editing-UAQ.gif -->

> It is possible to set some columns as required when editing the row value.

Dynamic Table offers a bunch of field types to indicate what kind of value can be submitted in the input once the user modifies it. These types are **Text, Password, Number, Dropdown, Dropdown Multiple, Address, Entities** and **Device** (configured by tags).

These field types have the same behavior as the [Form's fields](/tagoio/widgets/input-widgets/input-form/field-types-for-input-form.md).