---
title: "Using Dictionaries & Multi-language"
description: "This article explains how to use the Dictionary feature to deploy applications in multiple languages, how to reference dictionary keys in your application text, and notes on language selection and plan limitations."
tags: ["tagoio"]
---

Use the Dictionary to deploy applications to end-users (RUN users) in any language. Create a dictionary, use the `#SLUG.KEY#` format in the texts that will be substituted, and then select the languages that should be available for your end-users.

## Notes about language selection and plans

> End-users are able to switch languages within their accounts. By default, the system will use the language identified by their browsers. If the language is not available in the application, the system will default to the Fallback language.
>
> You can create multiple dictionaries and use them in your applications with the Free/Starter plans. However, to use multiple languages in your Run environment other than the Fallback language, you need to upgrade to the Scale plan. Check out our Pricing page (link-to-pricing).

## Screenshot
![End-users language selector](/docs_imagem/tagoio/using-dictionaries-multi-language-2.png)

End-users can select the language in their applications.

## Importing and exporting dictionaries

To make the process easier and faster, you can import and export dictionary files in any language. Learn more in the Import & Export for Dictionary documentation: [Import & Export for Dictionary](link-to-import-export-for-dictionary).

## How to use dictionary keys

- Use the `#SLUG.KEY#` format wherever you want the substitution to be applied in your application text.
- Create and populate dictionaries with the appropriate language translations for each `SLUG.KEY`.

## Configure languages for your RUN

- Configure the language settings for your Run environment so the desired languages are available to your RUN users.
- By default RUN uses the browser's language; if unavailable, the system uses the configured Fallback language.

## Enable languages

- After creating dictionaries and translations, enable the languages you want end-users to choose from within your application.
- Note: enabling multiple non-fallback languages for your Run environment requires the Scale plan.

## On this page

- [1] Create a Dictionary  
- [2] Use `#SLUG.KEY#` wherever you want the substitution to be applied  
- [3] Configure the language for your RUN  
- [4] Enable the languages

## Dictionaries (related docs)

- [Using Dictionaries & Multi-language](link-to-using-dictionaries-multi-language)  
- [Import & Export for Dictionary](link-to-import-export-for-dictionary)

## Related articles

- [Dictionaries](link-to-dictionaries)  
- [Security and Protection for RUN users](link-to-security-and-protection-for-run-users)  
- [Sidebar](link-to-sidebar)  
- [Custom Settings](link-to-custom-settings)  
- [Navigation bar](link-to-navigation-bar)