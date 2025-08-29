---
title: "Displaying Units"
description: "Explains how to configure a widget to display the unit of a variable and how to select the unit origin (original variable, variable used in a formula, or a fixed unit)."
tags: ["tagoio"]
---
You can set up your widget to present the unit of a variable (e.g., °C, °F, km, mm) in different ways.

Under the **"Formula"** tab, select the option that indicates the origin of the unit that works best for you.

![Widget configuration screenshot](/docs_imagem/tagoio/displaying-units-2.gif)

## 1. Unit from the original variable

This option uses the selected variable's **`unit`** field to display alongside the value in the widget.  
If the variable doesn't have a unit, it will be left empty.

---

## 2. Unit from variable used in Formula

When you set a [Formula](/docs/tagoio/formula) in your widget where the source of the formula is based on another variable, this option will use what is stored in the **`unit`** of that variable to present in the widget.

This is helpful when you need to build an application that changes the output dynamically.  
For example, users can select the scale they want to see a temperature at among the options: °C, °F, or K.

---

## 3. Fixed Unit

If you select this option, you just need to enter the unit that will be displayed. The entered unit will be shown even if the variable contains another unit stored in the [Device](/docs/tagoio/devices/).