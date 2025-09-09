---
title: "Entity Table Widget"
description: "This article explains how the Entity Table widget displays and manages entity-based data in a tabular format, and how to edit its general and column-specific settings. It covers data sources, user editing, formulas, color conditions, and sorting by entity indexes."
tags: ["tagoio", "widgets"]
---
The Entity Table widget enables you to display data in a tabular format using fields from your [Entities](/tagoio/getting-started/entities.md). Unlike the [Static Table widget](/tagoio/widgets/tables/static-table-widget.md) and the [Dynamic Table widget](/tagoio/widgets/tables/dynamic-table-widget.md), it does not use data from Devices. The widget lets you incorporate data from one or more entities, apply formulas, set color conditions, and allow end-users to directly modify table values from their dashboard. You can also sort data based on the indexes you've created in your entity.

:::tip

 Ensure that appropriate [Access Management](/docs/tagoio/tagorun/access-management/) permissions are granted to allow end-users to view the data displayed in the widget.

 :::

## Editing the Table

To modify a specific part of the widget, hover over the element you want to edit and click it. Selecting the table header opens general settings where you can:
- Choose the data source entity
- Name the table
- Design the table layout
- Configure header buttons
- And more

Clicking on a column opens column‑specific settings where you can:
- Adjust column size
- Allow end-users to edit values
- Apply formulas
- Configure color conditions and other column behaviors

<!-- Image placeholder removed for build -->

## Adding Data

To add data from your Entities into the table, first define which entities you want to use as a data source. The process differs depending on whether you are using a **Normal** or **Blueprint** dashboard.

### Normal Dashboards
- In edit mode, click the Table name to open the Entity Table settings.
- In the **Entity** section, select the single entity that will serve as the data source for all columns.
- Specify the **Index** that should be used as the default ordering field (enter the index name you created in your entity).
- For each column, navigate to the **Entity Data** section, enter the field name in the **Field** box, and click *Save*.

### Blueprint Dashboards
- In edit mode, click the Table name to open the Entity Table settings.
- In the **Entity** section, select the **Entity Association** that will act as the data source for all columns. This allows you to switch entities dynamically based on the blueprint context.
- Specify the **Index** that should be used as the default ordering field (enter the index name).
- For each column, navigate to the **Entity Data** section, enter the field name in the **Field** box, and click *Save*.

## Data Visualization

The Entity Table offers extensive customization options for each column’s data visualization:
- Apply formulas to transform raw values.
- Change cell colors based on conditions (e.g., using a `metadata` variable).
- Use icons or other visual cues to represent data.
- Alter text properties such as bold, italic, and underline.

These settings allow you to tailor the appearance of each column to match your dashboard’s design and usability goals.

## Filtering Data

Data filtering can be performed on individual columns or across the entire table. While in widget edit mode:
1. Click the table name.
2. Go to **Options** → **Search Options**.
3. Activate the feature for the desired columns or for the whole table.

This enables end‑users to quickly locate specific rows or values directly from their dashboard.

## Allowing End-Users to Edit Data

To let users modify a variable’s value in your Entity through the widget:
1. Enable the **Control Column** in the **Options** section of the widget.
2. In each column’s configuration, enable the *Edit* option.
3. Choose an appropriate field type that matches the entity’s field type (Text, Password, Number, Dropdown, Dropdown Multiple, Address, Device). Mismatched types may prevent edits from taking effect.
4. Optionally mark columns as **Required** when editing row values.

These settings give you fine‑grained control over which data can be edited and how it is presented to end‑users.