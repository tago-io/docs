---
title: "Backups"
description: "View, configure, and restore project backups; understand contents, exclusions, and limitations."
tags: ["tagodeploy"]
slug: /tagodeploy/project/backups
---

This section provides project owners with the ability to view and manage all
recent project backups. Each backup entry displays essential metadata, including
the backup date and storage size. When initiating a restoration, the system
provisions a new, isolated project instance that is initialized from the
selected backup checkpoint. The platform does not support in-place overwriting
of an existing project’s database with backup data.

Backup management capabilities—including configuration, creation, and
restoration—are restricted to project owners. Collaborators do not have access
to any backup management features.

**Note**: Standard project creation fees apply when a new project instance is
generated as part of the backup restoration process. Restored project instances
will continue to incur costs for as long as they remain active.

## What are Backups?

Backups are automated snapshots of your project data that provide data
protection and recovery capabilities. They ensure that your project information
is preserved and can be restored in case of data loss.

Backups are created automatically every day to ensure consistent data
protection. The backup schedule can be configured in the
[Main Database](/tagodeploy/project/project-services/main-database.md) page.

## Backup Information

The backup list displays the following information for each backup:

- **Backup Date**: When the backup was created
- **Backup Size**: The storage space occupied by the backup

## What's Excluded from Backups

The following data types are not included in backups:

- **Analysis**: Analysis console logs, and code.
- **Files**: Uploaded files and file attachments

## Restoring from Backup

To create a new project from an existing backup:

1. Locate the desired backup in the backup list
2. Click on the three-dot menu next to the backup
3. Select "New project from backup"
4. Follow the prompts to create a new project with the backup data

### Backup Restoration Process

Project owners can restore data from a backup project to an existing project
using several methods:

- Manually transferring data between the backup project and the target project.
- Executing analysis scripts or the
  [TagoIO API](https://api.docs.tago.io/#intro) to automate data migration
  between projects.
- Utilizing the [TagoIO CLI](https://github.com/tago-io/tago-cli) to facilitate
  bulk data transfer from the backup project to the active project.

The system retains the seven most recent backups, which are available for
restoration at any time.

### Backup Limitations

When restoring data from a backup, the platform does not preserve variable
unique IDs. During the data ingestion process, the system generates a new unique
identifier for each variable, regardless of its previous state. As a result, the
unique ID assigned to a variable in the backup will differ from the ID assigned
to the same variable in the current project environment.

Similarly, the platform does not restore resource tokens from backup data. Each
time a resource is created, the system generates a new token associated with
that resource. Consequently, the token value for a resource in the backup will
not correspond to the token value for the same resource after restoration in the
current project. This approach maintains the integrity and security of resource
access but requires that any integrations or automation referencing resource
tokens be updated post-restore.
