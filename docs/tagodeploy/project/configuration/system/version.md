---
title: "Version Timeline"
description: "Pick the platform version your project runs on, update to a newer release, or roll back to an older one."
keywords: [tagodeploy, iot, version, updates, rollback]
tags: ["tagodeploy"]
slug: /tagodeploy/project/system/version
---

# Version Timeline

The Version Timeline lets you control which platform version your project runs
on. You can move to a newer release when you are ready to adopt new features and
fixes, or roll back to an older one if needed. This keeps your environment on a
version you have reviewed and tested, and lets you align infrastructure changes
with your own release schedule.

The Version Timeline is one of the two sections on the **System** page, found in
the TagoIO & API sidebar under **System**. The page header reads "System"; the
card is titled "Version Timeline" with the subtitle "Pick the platform version
this project runs." A **Refresh** button reloads the list.

## Reading the timeline

Versions are listed by date and grouped by where they sit relative to the
version you run today:

- **Newer Versions**: releases ahead of your current version. A count badge
  shows how many are available, the most recent one is tagged "Latest", and each
  row has an **Update** action to move to it.
- **Current Version**: the version your project runs now, tagged "Current".
- **Older Versions**: releases behind your current version, each with a
  **Rollback** action to return to it.

Each release comes with notes describing its changes, enhancements, and fixes,
so you can decide when to update or roll back.

## Updating and rolling back

Version changes are manual. There is no automated or scheduled mechanism, so an
administrator explicitly triggers an **Update** to move forward or a
**Rollback** to move back. This gives your team full control over the timing of
version changes.

Before changing versions, keep a current backup so you can recover if an upgrade
or rollback surfaces an issue. See the
[backup](/docs/tagodeploy/project/management/backups.md) documentation.

## Components affected by version changes

Changing versions may affect the following infrastructure components:

- **Admin**: administrative user interface and management tools.
- **TagoRUN**: the runtime environment that executes project workflows.
- **API**: backend APIs that provide data access and integration points.
- **Features (Microservices)**: modular microservices delivering specific
  business or technical functionality.
