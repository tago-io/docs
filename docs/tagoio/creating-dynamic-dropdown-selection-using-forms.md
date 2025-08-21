---
title: "Creating Dynamic Dropdown selection using Forms"
description: "This article explains how Dynamic Dropdown fields in TagoIO Forms pull their options from a variable so you can update selection items dynamically, and when you would use this feature."
tags: ["tagoio"]
---

Dynamic Dropdown allows users to populate a dropdown list with dynamic items coming from a variable. The example below shows how a Dynamic Dropdown can present selectable country values that are updated dynamically.

![Country selection example](/docs_imagem/tagoio/creating-dynamic-dropdown-selection-using-forms-2.png)

The items for a Dynamic Dropdown are sourced from a variable. Because of that, you can change the available values dynamically — for example, developers can create inputs where users insert values that will later appear in the Dynamic Dropdown.

You will typically use this feature when you need the dropdown options to change often. For example, imagine you need to add supervisors to your application and later attach those supervisors (clients) to a device. Using a Dynamic Dropdown you can change the client options simply by adding or removing entries from the [device's data storage](link-to-device-data-storage).

![Field type: Dropdown configuration](/docs_imagem/tagoio/creating-dynamic-dropdown-selection-using-forms-2.png)