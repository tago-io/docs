---
title: "Creating Dynamic Dropdown selection using Forms"
description: "This article explains how Dynamic Dropdown fields in TagoIO Forms pull their options from a variable so you can update selection items dynamically, and when you would use this feature."
tags: ["tagoio"]
---
Dynamic Dropdown allows users to populate a dropdown list with dynamic items coming from a variable. The example below shows how a Dynamic Dropdown can present selectable country values that are updated dynamically.

![Country selection example](/docs_imagem/tagoio/creating-dynamic-dropdown-selection-using-forms-2.png)

The items for a Dynamic Dropdown are sourced from a variable. Because of that, you can change the available values dynamically — for example, developers can create inputs where users insert values that will later appear in the Dynamic Dropdown.

You will typically use this feature when you need the dropdown options to change often. For example, imagine you need to add supervisors to your application and later attach those supervisors (clients) to a device. Using a Dynamic Dropdown you can change the client options simply by adding or removing entries from the [device's data storage](/docs/tagoio/devices/).

![Field type: Dropdown configuration](/docs_imagem/tagoio/creating-dynamic-dropdown-selection-using-forms-2.png)

### Setting up a Dynamic Dropdown

1. **Create an Input Form widget**  
   - Choose the *Input Form* widget type and set its output variable.

2. **Configure the field as a dropdown**  
   - In the form editor, select **Field Type: Dropdown**.
   - Change **Use values from** to **Dynamic**. The previous static options will disappear.

3. **Specify the source variable**  
   - Enter the name of the variable that will supply the options (e.g., `supervisor_options`). This variable should exist in your device’s data storage.

4. **Populate the variable with options**  
   - Add entries to the device using the Device Emulator or directly via API. Example JSON:

     ```json
     {
       "variable": "supervisor_options",
       "value": "John Doe"
     }
     ```

   - After saving, the dropdown will display the new option.

5. **Use metadata for custom labels**  
   - If you want the stored value to differ from what is shown in the dropdown (e.g., a code vs. a name), include a `metadata` field:

     ```json
     {
       "variable": "supervisor_options",
       "value": "12433",
       "metadata": {
         "label": "John Doe"
       }
     }
     ```

   - The dropdown will display “John Doe” while the stored value remains `12433`.