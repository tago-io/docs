---
title: "Field Types for Input Form"
description: "This article explains the different field types available for the Input Form widget in TagoIO, describing how each field behaves and what value it produces. It covers examples for Text and Address field types shown in the screenshot."
tags: ["tagoio"]
"position": 3
---
The field defines the relationship between the user-inputted data and the Device data for certain widgets.

> Fields can be of many types, depending on the widget they are used with.

## 1. Text
A typical text input will appear. The value saved for this field will be whatever the user typed into it.

<div align="center">
![Text input example](/docs_imagem/tagoio/field-types-for-input-form-2.gif)
</div>

## 2. Address
This field displays a text input integrated with Google Maps to search for an address. The value for this field will be the complete selected address, and it will also include the location coordinates within it. See [location coordinates](data-management/data-manipulation#location) for details.

> For the **Input Form Widget**, it is possible to enable a map under the input.

<div align="center">
![Address input with map example](/docs_imagem/tagoio/field-types-for-input-form-3.gif)
</div>

## 3. Calendar
It will display a calendar field that allows the user to enter a date, or a date range, as a value through a calendar popup. When receiving the user answer in your **device**, you will be able to get it in the value parameter and the metadata parameter. The latter one will be in date string format as `start_date` and `end_date`.

<div align="center">
![Calendar input with preset example](/docs_imagem/tagoio/field-types-for-input-form-4.png)
</div>

For example, the input above will produce the following payload:

```json
{
    "variable": "location",
    "value": "Start: 2021-06-04T03:00:00Z, End: 2021-06-11-T02:59:59Z",
    "metadata": {
        "end_date": "2021-06-11T02:59:59Z",
        "start_date": "2021-06-04T03:00:00Z"
    }
}
```

## 4. Checkbox
A traditional checkbox will appear and the value will be set as `true` (checked) or `false` (not checked).

<div align="center">
![Checkbox input example](/docs_imagem/tagoio/field-types-for-input-form-5.png)
</div>

> ☑ Alert the user when new data arrives?

## 5. Clock set
It will display a step button to select the hour range without the date.

<div align="center">
![Clock set example](/docs_imagem/tagoio/field-types-for-input-form-6.gif)
</div>

> Field #1
> 00:00

## 6. Device
It will display a dropdown field with all an account's devices. The value of the field will be the id of the selected device.

> You can customize the devices shown by the list through tags. Configuring tags will show only the devices with a tag correspondence.

<div align="center">
![Device example](/docs_imagem/tagoio/field-types-for-input-form-7.gif)
</div>


## 7. Dropdown
It displays a dropdown menu with options that you define. The value of the field will be the selected options, and these options can be defined as static or dynamic with the dropdown being filled up with data coming from a variable. Learn more about **Creating Dynamic Dropdown selection using Forms.**

## 8. Dropdown Multiple
It displays a dropdown menu with options that you define. The value of the field will be the multiple options selected, and these options can be defined as static or dynamic with the dropdown being filled up with data coming from a variable.

## 9. Email
It displays a field to submit multiple emails, separated by a comma.

> Field #1
> enter one or more email addresses

## 10. Entity & Entity Multiple
It will display a dropdown using values contained in your Entities. You are able to select which field from your entity should be displayed in the dropdown, as well as which field from your entity should be submitted when pressing the Submit button.

The difference between the Entity and Entity Multiple is that the last one allows you to select multiple values in the dropdown, instead of just one.

## 11. File Upload
It will display an option to upload files to TagoIO. These files will be stored in the files section under the folder `devices/your_device_id/` by default. It is possible to restrict the number of files per upload, allow users to use their mobile camera, and more.

You can customize the path, however. For example, if you want to save the files in a folder called `images` and a subfolder called `icons`, you would need to type `devices/your_device_id/images/icons`

The variable that receives this data keeps the file name in the value parameter, and in the metadata it keeps the file's parameter. So sending a file will produce variable data like this:

```json
{
    "variable": "file_variable",
    "value": "file_name.png",
    "metadata": {
        "file": {
            "md5": "md5_data",
            "path": "devices/your_device_id/file_name.png",
            "url": "your_file_url"
        }
    }
}
```

## 12. Filtered Variables
It will display a dropdown field, with options that change dynamically based on other fields. In the example below, the Food field changes based on the Food Type field. Learn more about **Filtered Variables**

## 13. Image / Video Select
Whenever you need to choose a value by using images instead of entering text, the image Field is the best option in form widgets. By entering media URLs into the options, the field will be filled with these images or videos and you will be able to select one or many of them. Learn more about Adding Image Selector field on Forms.

## 14. Incremental Step
It will display a step button to select a numerical value.

> + Field #1

## 15. Radio
A traditional Radio input will appear. Once selected, you will be able to define its options with their labels and values. The value of the field will be one of the selected options.

## 16. Validation
This field type does not represent a form input value. Instead, the variable assigned to this field expects to receive text data that displays as a message above the form. The validation message supports four predefined types: warning, info, danger, and success. You can specify the message type by including a type property in the metadata object.

By default, validation messages are displayed to all users viewing the widget. To target specific users, capture the User Session ID using the Capture User field and include the session_id parameter in the metadata object.

| Parameter    | Type    | Required   | Description    |
|---|---|---|---|
| type    | string    | No    | Message type: warning, info, danger, or success    |
| color    | string    | No    | Custom color override. If not specified, color is determined by the `type` parameter    |
| session_id    | string    | No    | User session ID to target specific users. If omitted, message displays to all users    |
| show markdown | boolean    | No    | Enables markdown rendering in the message text    |

Example:

```json
{
    "variable": "validation",
    "value": "Your **data** had been succesfully updated!",
    "metadata": {
        "type": "success",
        "color": "green",
        "session_id": "USER_SESSION_ID",
        "show_markdown": true
    }
}
```

## 17. Other fields

• **Barcode:** It will display a field to type the barcode or scan it when using it through mobile or computer.

• **Capture user:** It will capture user information, such as e-mail or name, so that you can use it in the Analysis later.

• **Hidden:** For submitting data without user input, this variable will receive a static value, set by the field edit screen.

• **Number:** It will display a text input, but it validates if a number was typed.

• **Password:** It will display a password input.

• **QR Code:** It will display a field to scan a QR Code when using it through mobile or computer.
