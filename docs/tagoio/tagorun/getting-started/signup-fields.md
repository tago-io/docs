---
title: "Signup Fields"
description: "This article explains how to add and map custom fields on the Sign up page so that field names become user tag keys and the values entered by users become user tag values. It also highlights the Sign up page customization interface."
tags: ["tagoio"]
---
Inside your Sign up page, you can add custom fields that appear in addition to the form's required fields. The field name you create is copied to the User tag key, and the value entered by the user during sign up is copied to the User tag value.

Mapping summary:

| Signup field     | Tag created for the User |
|------------------|--------------------------|
| Field name       | Tag key             |
| Input from user  | Tag value           |

## Customization

The "Signup fields" section lets you configure additional fields that will appear on the Sign up page and be stored as user tags. Additional fields will show up as tags for the user. Learn more here (see the Sign up page documentation).

To create customized fields, you must provide four pieces of information:

- **Field name** – This becomes the tag key.
- **Label above the field** – Text that guides the user on what to enter.
- **Type** – Choose one of three types:
  - *Text*: The user can type anything.
  - *Number*: Only numeric input is allowed.
  - *Hidden*: The field is invisible to the user; a tag will be created automatically with the key from the Field name and the value from the Field Placeholder.
- **Required** – Indicates whether the user must fill in this field before signing up. Hidden fields are not affected by the required option.

<!-- Image placeholder removed for build -->

Notes:
- The Field name you enter becomes the User tag key.
- The value the user types during sign up becomes the User tag value.