---
title: "Tables Overview"
description: "This article explains TagoIO table widgets, how they present data in tabular form, and lists the available table widget types with a short description for the Static Table."
tags: ["tagoio"]
"sidebar_position": 1
---
Table widgets present your data in a tabular way. You can also allow users to change values in cells, delete rows, and perform other table-related actions.

![Table widget example](/docs_imagem/tagoio/tables-2.png)

The following table widgets are available:
- Static Table
- Dynamic Table
- Device List
- User List
- Entity Table

## Static Table

A Static Table is a special kind of widget that does not use the traditional variable selector. Instead, you specify a fixed number of rows and columns. This option is useful when you do not want to display historical values for variables and only need a fixed layout of data. Learn more about [Static Table](widgets/static-table-widget).

## Dynamic Table

Dynamic tables are tables that are populated dynamically as your data arrive while keeping the history of the previous data in each row. The configuration is very easy, all you have to do is pick your variables. Learn more about [Dynamic Table](widgets/dynamic-table-widget).

## Device List

Device List widget is a table that dynamically populates with information about your devices, such as names, tags, configuration parameters, and IDs. Learn more about [Device List](widgets/device-list-widget).

## User List

The User List widget is a table that dynamically populates with information about your users, such as names, tags, email, and IDs. Learn more about [User List](/tagoio/widgets/user-list-widget-).

## Entity Table

The Entity Table widget enables you to display data in a tabular format using fields from your Entities. Unlike the Static and Dynamic Table widgets, it does not utilize data from Devices. Learn more about [Entity Table](widgets/entity-table-widget).