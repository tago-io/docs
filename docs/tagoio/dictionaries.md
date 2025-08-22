---
title: "Dictionaries"
description: "This article describes TagoIO's Dictionaries feature, which lets you translate and customize text messages used in dashboards, widgets, variables, and the RUN application. It explains how to substitute texts per language and points to setup and customization references."
tags: ["tagoio"]
---
The innovative dictionary feature from TagoIO enables you to improve your application by editing any displayed messages and providing your solution in multiple languages. Use dictionaries to substitute texts across dashboards, widgets, variables, and the RUN application (including the mobile app).

![Illustration showing a laptop with language flags](/docs_imagem/tagoio/dictionaries-2.png)

## Translate text messages to any language

Any text present in dashboard frames, inside widgets, variables, and your RUN application (including the mobile app) can be replaced using the dictionary. Create your own dictionary by editing fields (key & value) for each language you want to make available to end users.

Learn how to [set up the dictionary](/tagoio/using-dictionaries-multi-language).

## Customize texts for the same language

You can also customize text values for the same language to adapt wording for different dashboards, contexts, or user groups. For example, if you wish to change the default message shown in the tooltip **'Enter full screen'** in your RUN application, edit the value associated with the key `ENTER_FULLSCREEN` to something like *Click here to switch to full screen*.

Because each dictionary has a unique slug, you can substitute the same data with different texts using the format `#slug.key#`. For instance, show a title in a widget for a certain group of users using `#DIC1.TITLE#`, and another title for other users using `#DIC2.TITLE#`. In this case, the values associated with the key `TITLE` would be different for dictionaries `DIC1` and `DIC2`.

Refer to [Customize texts for the same language](/tagoio/using-dictionaries-multi-language) for details.