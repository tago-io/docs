---
title: "Logs"
description: "View runtime output from the services running in your project, with type, date, and live filters."
keywords: [tagodeploy, iot, logs, monitoring]
tags: ["tagodeploy"]
slug: /tagodeploy/project/deployments/logs
---

# Logs

The Logs page shows runtime output from the services running in your project.
Open it from the Management sidebar under **Logs**. The page header reads "Logs"
and the card is titled "View Logs", with the subtitle "Runtime output from
services running in this project."

## Filtering and following logs

Use the controls at the top of the page to focus on what you need:

- A search box (placeholder "Search logs...") to match entries by text.
- A "Type" filter to limit the output to a specific log type.
- A "Date" filter to narrow logs to a time window.
- A "Refresh" button to reload the current view.
- A "Live" toggle to stream new entries as they arrive.

When there is no output to show, the page displays "No logs yet" with the note
that logs from your project will appear here.

## Change management behavior

Any change to a service automatically triggers a new deployment. Changes are
only applied after the deployment finishes and the previous deployment has been
removed. This keeps updates controlled and reduces the risk of configuration
drift or partial updates.

If the most recent deployment fails, a warning appears at the top of every page
in the TagoDeploy console so you can respond and resolve the issue without delay.
