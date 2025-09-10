---
title: "User List Widget "
description: "A quick guide to the User List widget that explains what it is, how to edit it, and where to find related documentation and widgets."
tags: ["tagoio", "widgets"]
---
The User List widget is a table that dynamically populates with information about your users, such as names, tags, email addresses, and IDs.

## 1. Editing the user list
The User List works as a dynamic table: you can customize its colors and columns, and filter which users appear in the list.

![Setting up user filtering](/docs_imagem/tagoio/user-list-widget--4.gif)

To edit a specific section of the widget, hover over the desired element and click it. A panel will appear on the right side with all editable options for the selected element.

You can also adjust the table’s appearance by changing colors, font styles, and column widths directly from this panel. The widget automatically updates to reflect any changes you make.

## 2. User List filtering

This option is required to be filled up in order to show your users. You can filter which users appear in the list by:

- **Tag Key and Tag Value** – All users for the list must have the same tag key and tag value specified by you in this filter.
- **Blueprint Device Tags** – Select a blueprint device from the dashboard and one tag key. The user for the list must match the same value of that tag key in the selected blueprint device.

You can also apply multiple filters simultaneously; note that this works as an AND operator, so the user must match *all* specified filters.

To set up tags on your devices, navigate to the **User** page and add or edit tags there.

## 3. Setting parameters on Columns

Every column created will require you to select a parameter from the user to display in that column.

- **User Information** – Shows a specific piece of information from the User, such as the user name, ID, email, time zone, company, and more.
- **Tag Key** – Displays the value of a specified tag key; it will be an empty row if the tag key doesn’t exist in the user settings.

> Tags values in the ISO‑8061 date format will be displayed as Date.

## 4. Editing user parameters

You can allow users to modify a tag or configuration parameter directly from the list by enabling the edit option inside the column’s configuration.

> User Information such as ID, email, and password cannot be edited.

The user list offers a variety of field types for input when a user modifies it. These include:
- Text
- Password
- Number
- Dropdown
- Dropdown Multiple
- Device List
- Address

These field types behave the same way as those in the [Input Form's fields](/docs/tagoio/widgets/input-widgets/input-form/field-types-for-input-form.md).

## 5. Blueprint User List for TagoRUN

When sharing a blueprint dashboard to **Run Users**, you must create an **Access Rule** so that the user can appear in the list. Without this rule, users won’t have access to view other users that the User List expects to show, even if filtering is applied.

Make sure your Access Rule grants Blueprint access to the relevant users and matches the criteria used in the User List filter.
