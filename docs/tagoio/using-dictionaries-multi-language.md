---
title: "Using Dictionaries & Multi-language"
description: "This article explains how to use the Dictionary feature to deploy applications in multiple languages, how to reference dictionary keys in your application text, and notes on language selection and plan limitations."
tags: ["tagoio"]
---
Use the Dictionary to deploy applications to end-users (RUN users) in any language. All you have to do is to create a [dictionary](/tagoio/dictionaries), use the `#SLUG.KEY#` format in the texts that will be substituted, and then select the languages that should be available for your end-users.

## Notes about language selection and plans

> End-users are able to switch languages within their accounts. By default, the system will use the language identified by their browsers. If the language is not available in the application, the system will default to the **Fallback language**.
>
> You can create multiple dictionaries and use them in your applications with the Free/Starter plans. However, to use multiple languages in your Run environment other than the **Fallback language**, you need to upgrade to the Scale plan. Check out our Pricing page [Pricing](https://tago.io/pricing).

## Screenshot
![End-users language selector](/docs_imagem/tagoio/using-dictionaries-multi-language-2.png)

End-users can select the language in their applications.

## Importing and exporting dictionaries

To make the process easier and faster, you can import and export dictionary files in any language. Learn more in the Import & Export for Dictionary documentation: [Import & Export for Dictionary](/tagoio/import-export-for-dictionary).  
An auto‑complete feature is available to find Slugs and Keys as shown below.

## How to use dictionary keys

### 1) Create a Dictionary
First, create the Dictionary by clicking on the **[Dictionaries & Multi-language]** option from the top‑right menu in your Admin.  
You will be asked to select a language that will be the first one made available; you may edit or add more languages later. A Slug is automatically created with the dictionary and can be edited afterwards.

Populate the dictionary with Key & Value pairs for substitution, then save it. Example for English:

| Key | Value |
| --- | ----- |
| TITLE1 | Temperature Information |
| TITLE2 | Humidity Information |
| … | … |

Add another language (e.g., French) by changing the values:

| Key | Value |
| --- | ----- |
| TITLE1 | Informations sur la température |
| TITLE2 | Informations d'humidité |
| … | … |

> Only UPPERCASE letters without a space are accepted as **Key**.

### 2) Use `#SLUG.KEY#` wherever you want the substitution to be applied
After creating the Slug and Keys, use them anywhere in your application.  
For example, if you created a dictionary with a Slug `DIC1` and want to use the Key `TITLE1` as a widget title, input `#DIC1.TITLE1#`.

> Fields that accept Dictionary have auto‑complete enabled: click the icon on the right or type `#` to get the list of available Slugs and Keys.

You can also substitute variable names, values, tooltips, messages sent by email, SMS, push notifications, etc.  
Some widgets (e.g., **Map** and **Image Marker**) offer a *Custom Texts* option where you can enter text directly or use `#` to substitute it with your dictionary.

### 3) Configure the language for your RUN
Dictionary can also be applied in your [RUN](../run) application so that you can configure additional texts used in common places (e.g., 'Save' button, sign‑in form, tooltips).  
If you haven’t done so, create a dictionary to be used as a baseline by accessing the **[RUN] > Multi‑language** section. The system can create a dictionary with all available Keys for editing or use it as a basis for other languages.

> This dictionary will also contain the Keys used in your TagoRUN mobile app.

### 4) Enable the languages
Make sure that the languages you want end-users to choose from are enabled so they can select them.  
You can enable languages here: **[Dictionaries]** (link: https://admin.tago.io/dictionaries).

> Enabling multiple non‑fallback languages for your Run environment requires the Scale plan.

## Enable languages

- After creating dictionaries and translations, enable the languages you want end-users to choose from within your application.
- Note: enabling multiple non-fallback languages for your Run environment requires the Scale plan.

## On this page

- [1] Create a Dictionary  
- [2] Use `#SLUG.KEY#` wherever you want the substitution to be applied  
- [3] Configure the language for your RUN  
- [4] Enable the languages

## Dictionaries (related docs)

- [Using Dictionaries & Multi-language](#) (this article)  
- [Import & Export for Dictionary](/tagoio/import-export-for-dictionary)

## Related articles

- [Dictionaries](/tagoio/dictionaries)  
- [Security and Protection for RUN users](/tagoio/account/security-and-protection-for-run-users)  
- [Sidebar](/tagoio/sidebar)  
- [Custom Settings](../tagoio/custom-settings)  
- [Navigation bar](../tagoio/navigation-bar)