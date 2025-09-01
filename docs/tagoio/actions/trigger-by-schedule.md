---
title: "Trigger by Schedule"
description: "This article explains the \"Trigger by Schedule\" trigger type in TagoIO, describing its two categories (By Interval and By Date) and how to customize date-based schedules using basic or advanced (cron) methods."
tags: ["tagoio"]
---
The trigger type Trigger by Schedule lets you define a time interval to execute your Actions automatically.

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

To learn more about advanced (cron) customization, see [this article](/docs/tagoio/actions/action-cron).

### 1. Basic customization details

The basic mode provides several interface fields that let you fine‑tune when your Action runs:

- **Repeat Every** – Choose the interval between executions. Options include:
  - Day
  - Week
  - Month
- **Repeat at** – Specify the exact time of day the Action should trigger.
- **Repeat on** – Select one or more weekdays for the Action to run.
- **Timezone** – Set the timezone for the scheduled Action; by default it uses the account’s timezone.
- **Customization** – Toggle between Basic and Advanced modes. The basic mode is enabled by default, but you can switch to advanced if needed.
- **Explanation** – A helpful field that displays a human‑readable summary of when the Action will execute.

### 2. Advanced customization details

When you need more granular control, switch to the advanced mode and enter a cron expression. This allows you to specify exact dates, times, and recurrence patterns beyond what the basic interface offers. For guidance on writing cron expressions, refer to [this article](/docs/tagoio/actions/action-cron).