---
title: "Backups"
description: "View scheduled database snapshots for a project and understand contents, exclusions, and restore behavior."
keywords: [tagodeploy, iot, backups, disaster recovery, data protection]
tags: ["tagodeploy"]
slug: /tagodeploy/project/backups
---

# Backups

The **Backups** page lists the snapshots of your project's database. You find it
in the TagoIO & API section, under "Backups" in the sidebar, at
`/projects/{id}/tago-io/backups`. The page is read-only: backups are created on
a schedule, not by hand, so there is no create action here. When the project has
no snapshots yet, the page shows "Backup snapshots will appear here once they are
created."

Backup management is restricted to project owners. Collaborators cannot access
backup features.

## How backups are scheduled

Backups are created automatically on a daily schedule. The schedule and how long
snapshots are kept are configured on the
[Main Database](/docs/tagodeploy/project/project-services/main-database.md) page,
using the "Daily backup schedule" and "Backup retention period" settings.

## What is excluded from backups

The following data is not included in backups:

- **Analysis**: Analysis console logs and code.
- **Files**: uploaded files and file attachments.

## Restore behavior

Restoring a snapshot provisions a new, isolated project instance initialized
from that snapshot. The platform does not overwrite an existing project's
database in place.

**Note:** Standard project creation fees apply when a new project instance is
created from a backup. Restored instances continue to incur costs for as long as
they stay active.

Once a backup project is running, project owners can move data into a target
project by:

- Manually transferring data between the backup project and the target project.
- Running analysis scripts or the
  [TagoIO API](/docs/api/sidebar/tagoio-api-intro) to automate the migration.
- Using the [TagoIO CLI](https://github.com/tago-io/tago-cli) for bulk transfer.

### Restore limitations

When data is restored from a backup, the platform does not preserve variable
unique IDs. The system assigns a new unique identifier to each variable during
ingestion, so a variable's ID in the restored project differs from its ID in the
backup.

The platform also does not restore resource tokens. Each time a resource is
created, the system generates a new token for it, so a resource's token after a
restore differs from its token in the backup. Update any integrations or
automation that reference resource tokens after a restore.
