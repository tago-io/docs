---
title: "Action cron"
description: "This article explains how to use and modify an Action cron in TagoIO, showing where to enter a cron expression and what each part of the interface means."
tags: ["tagoio", "actions"]
---

A cron is a command for scheduling a task to be executed periodically at a specified time in the future.

Inside TagoIO, cron is used to define when a Schedule Action will be triggered. See [Schedule Action](../trigger-by-schedule).

> To modify the cron of the Action, select the Advanced property in the top-right of the Recurrence options panel.

![Recurrence options screenshot with cron fields and visual explanation](/docs_imagem/tagoio/action-cron-2.png)

## Cron example and visual preview

The example cron shown in the Recurrence options panel:

```cron
48 09 */1 * Wed
```

The preview below the cron input shows:
- "This action will run at 09:48 AM, only on Wednesday."
- Note: "The action can take up to 1 minute to be executed."

## Cron fields in the Recurrence options panel

1. Timezone selector  
   - This field allows you to change the timezone where your cron will run.

2. Cron input field  
   - This field contains the cron data. You must insert a correctly formatted cron expression here; otherwise you won't be able to save your Action. Learn more about cron and its format.

3. Visual representation / preview  
   - This field displays a visual representation explaining when your action will run based on the cron. If your cron is not properly formatted, this field will disappear.

## Notes about formatting

- Ensure the cron expression follows the expected format (minute hour day (month) month day (week) or the format required by your environment).
- When using the Advanced option, confirm the timezone is correct to avoid unexpected run times.

References:
- See [Schedule Action](../trigger-by-schedule) for how the cron ties into scheduled Actions.