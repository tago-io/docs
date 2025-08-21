---
title: "Trigger by Schedule"
description: "This article explains the \"Trigger by Schedule\" trigger type in TagoIO, describing its two categories (By Interval and By Date) and how to customize date-based schedules using basic or advanced (cron) methods."
tags: ["tagoio"]
---

The trigger type Trigger by Schedule lets you define a time interval to execute your Actions automatically. See [Actions](link-to-actions) for details about configuring Actions.

There are two categories within this trigger type:

1. By Interval  
   Allows you to specify a time interval to trigger the Action automatically. Choose the time interval on the right side of the interface; the minimum allowed time is 1 minute.

   ![By Interval selector showing an interval selection (e.g., 15 Minutes)](/docs_imagem/tagoio/trigger-by-schedule-2.png)

2. By Date  
   Allows you to specify a date or a recurring date rule to trigger the Action. For example, you can choose to run an Action on the second Wednesday of each month.

   ![By Date selector showing date-based scheduling options](/docs_imagem/tagoio/trigger-by-schedule-2.png)

## Customizing By Date

If you pick the By Date type, you can customize it in either a basic or an advanced way:

- Basic customization: Use the interface fields to define the date or recurring date rules.
- Advanced customization: Write a cron expression to define the date/time more precisely.

To learn more about advanced (cron) customization, see [this article](link-to-advanced-customization).