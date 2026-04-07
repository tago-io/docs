---
title: "Backups"
description: "Learn how to generate, download, restore, and automate backups of your TagoIO profile data."
tags: ["tagoio"]
keywords: [tagoio, backup, restore, profile backup, data export, tagoio cli]
---

## Overview

The Profile Backup feature enables you to generate, download, and manage comprehensive backups of your profile data stored in TagoIO. This ensures you never lose critical configuration data and always have access to a complete snapshot of your IoT infrastructure.

Backups are retained for **12 months** and focus on **data preservation and export**. Resources are saved as structured JSON files and can be used to recreate your environment. Restoration options include:

- **TagoIO CLI** - run `tagoio backup restore` to interactively restore a backup to your profile.
- **TagoIO API** - read the exported JSON files and recreate resources programmatically using the API.
- **TagoIO Support** - for large-scale recovery needs, contact our support team. Note that this may involve an additional cost.

:::info Availability
Backups are available for paid plans: **Starter** and **Scale**.
:::

---

## Accessing Backups

Go to your profile name in the bottom-left corner of the screen and select **Backups**. You will be taken to the **Manage Backups** page.

<img src="/img/my-account/backups/manage-backups.png" alt="Manage Backups page" style={{border: '1px solid #d1d5db', borderRadius: '8px'}} />

---

## Creating a Backup

On the **Manage Backups** page, click **Create Backup**. A modal will list all resources included and excluded before you confirm.

### Resources Included

| Resource |
|---|
| All uploaded files and documents |
| Dashboard layouts and versions |
| Analysis scripts and versions |
| Device configurations |
| Actions, networks, connectors |
| Access management policies |
| Network configurations |
| Connector configurations |
| Profile secrets |
| Dictionary configurations |
| TagoRUN users |
| TagoRUN configuration |
| Service authorization tokens |
| Profile settings and allocations |
| Team members |

### Resources Not Included

| Resource |
|---|
| Devices data |
| Entities data |

---

## Downloading a Backup

Find the backup in the list and click the **download icon** (⬇️) in the **Actions** column. You will be asked to verify your account password. The backup is downloaded as a **ZIP file** with the following structure:

```
backup-<profile-id>/
├── files/
│   ├── <uploaded files and documents>
│   └── buckets/
│       └── <bucket-id>/
│           └── <bucket files>
├── resources/
│   ├── access_management.json
│   ├── actions.json
│   ├── analysis.json
│   ├── connectors.json
│   ├── dashboards.json
│   ├── devices.json
│   ├── dictionaries.json
│   ├── networks.json
│   ├── profile.json
│   ├── run_users.json
│   ├── run.json
│   ├── secrets.json
│   └── service_authorization.json
└── versioning/
    └── dashboard/
        └── <version files in JSON>
```

- **files/** - Uploaded files and documents, organized by bucket.
- **resources/** - Profile resource configurations exported as JSON.
- **versioning/** - Historical versions of resources such as dashboards.

---

## Restoring a Backup

Backups are designed for **data preservation**, not automatic one-click restore. There is no restore option in the UI. To restore resources from a backup, choose one of the options below.

### Option 1: Manual Script-Based Restoration

1. Download and extract the backup ZIP file.
2. Read the JSON files for the resources you need to restore.
3. Use the TagoIO API to recreate resources programmatically.
   - Example: Parse `devices.json` and call `POST /device` for each device.

### Option 2: TagoIO CLI

Make sure you have the [TagoIO CLI](https://docs.tago.io/cli) installed and authenticated, then run:

```bash
tagoio backup restore
```

The CLI fetches all available backups and displays them as a selectable list, each entry shows the creation date, file size, and backup ID. Use the arrow keys to pick the one you want to restore.

<img src="/img/my-account/backups/cli-restore-selection.png" alt="CLI backup restore selection" style={{border: '1px solid #d1d5db', borderRadius: '8px'}} />

After selecting a backup, you will be prompted to confirm and authenticate with your **resources password**, **2FA method**, and **OTP code**. Once authenticated, the CLI downloads and extracts the backup, shows a summary table of all resources and their counts, and asks for a final confirmation before starting the restoration.

:::warning
**IDs are NOT restored.** New IDs will be generated for all resources. Any external references to resource IDs will need to be updated.
:::

### Option 3: Contact TagoIO Support

For large-scale restoration or complex recovery scenarios, contact TagoIO support. Our team can assist with full profile restoration, selective resource recovery, and migration between profiles or accounts.

:::important
Support-assisted restoration may involve an additional cost.
:::

### What Cannot Be Automatically Restored

- **Active tokens** - tokens are masked for security and will not be restored.
- **Run User passwords** - excluded for security and must be reset manually.

---

## Automated Backups via Actions

You can schedule automatic backups using TagoIO Actions with the `profile_backup` action type.

### Supported Triggers

| Trigger | Description |
|---|---|
| **Resource** | Fires when a specific resource event occurs |
| **Condition** | Fires based on data conditions |
| **Schedule** | Fires at a specific time (e.g., daily at 2 AM) |
| **Interval** | Fires at regular intervals |

### Setting Up

Navigate to **Actions** in your TagoIO Admin, create a new action, and select **Profile Backup** as the action type. Configure your desired trigger and activate the action.

:::tip
Schedule backups during low-activity periods and use daily or weekly schedules for production environments. Keep an eye on your daily backup limit to ensure scheduled backups don't get blocked.
:::

---

## Limits & Considerations

### General

- Backups are retained for **12 months** from the creation date.
- **Devices data** and **Entities data** are **not included** in backups.
- Backup generation time varies depending on the size of your profile data.
- During a restore, **all resource IDs are regenerated** - update any external references accordingly.
- The backup download URL has an **expiration time**, so complete the restore process promptly after initiating it.

### Daily Backup Creation Limit

| Plan | Daily Limit |
|------|-------------|
| Scale | 1 backups/day |
| Starter | 1 backups/day |
| Free | N/A |

The daily limit resets at midnight based on your account's timezone setting. If the limit is reached, you must wait before creating another backup.

### API Rate Limits (Requests per Minute)

| Operation | Scale | Starter |
|-----------|-------|---------|
| Create Backup | 5 RPM | 5 RPM |
| List Backups | 100 RPM | 50 RPM |
| Download Backup | 20 RPM | 10 RPM |
| Delete Backup | 20 RPM | 10 RPM |
