---
title: "Custom Settings"
description: "This article describes TagoIO's Custom Settings feature for TagoRUN, which lets you define end-user visualization preferences (units, formats, language, dashboard options) that appear in each user's Account Settings."
tags: ["tagoio"]
---
Custom Settings is a feature that lets you create unique visualization preferences for your end-users that extend beyond TagoRUN's default settings. After you configure custom settings, they will appear in your end-users' Account Settings.

With Custom Settings you can tailor preferences to specific needs — for example, selecting preferred units for visualizing temperature and distance, or choosing decimal, date, and time formats. These settings can be used together with [Dynamic Formulas](/tagoio/widgets/general/formula.md) to ensure displayed data matches user expectations.

![Custom Settings on TagoRun portal](/docs_imagem/tagoio/tagorun_customsettings.png)

## How it works
To create your Custom Settings, first navigate to your [Run](https://admin.tago.io/run) and click on the Custom Settings tab. From there, you can configure the following fields:


**1. Name:** the name of the field that will be displayed for your end-users.

**2. Type:** determines the type of field that the user will interact with.

**3. Tooltip:** the text that will display when the user hovers over the field.

**4. Required:** if you set the field as required, the user will not be able to save without selecting a preference.

**5. Field Options:** allows you to specify the options that the user can select. You must define a Value to be used with Dynamic Formulas and a Label that will be displayed for your end-users. Additionally, you can set a value as Default, which will be applied to new users. At least one option must be set as the default.

Keep in mind that the Values set in the Field Options are supposed to be unique since they are used as identifiers.

After saving the options for a dropdown field, it's essential not to change the Value from Field Options. If you need to modify the Value or remove an option, you should update your users' preferences using the [SDK](/docs/tagoio/analysis/sdk/) or an [Analysis](/docs/tagoio/analysis/).

Keep in mind that editing the options for a field will not automatically update the preferences that your users have already saved.

Once you have created your Custom Fields and deployed your updated RUN, your users can select their preferences by navigating to the Visualization Preferences tab on their Account page.

## Configuring your Custom settings

After setting up your Custom Fields, the next crucial step is to configure your widgets to utilize Dynamic Formulas. This feature allows you to apply formulas to your Custom Fields created through Custom Settings. 

Read more about the [Dynamic Formulas](/tagoio/widgets/general/formula.md).