---
title: "Version Management"
description: "Control when your project upgrades to a new platform version and understand affected components and limitations."
tags: ["tagodeploy"]
slug: /tagodeploy/project/system/version
---

# Version Management

Version management enables you to control when your project infrastructure is
updated to a new release. This functionality allows you to keep your environment
on a stable and thoroughly tested version, only upgrading when you are ready to
adopt new features or bug fixes. This approach minimizes operational risk and
allows you to align infrastructure changes with your internal testing and
release schedules.

Each version release is accompanied by detailed release notes. These notes
provide a comprehensive summary of all changes, enhancements, and bug fixes
included in that version, allowing you to make informed decisions about when to
upgrade.

## Manual Update Process

All updates to your project infrastructure are performed manually. There is no
automated or scheduled update mechanism—an administrator must explicitly trigger
the upgrade to move to a newer version. This gives your team complete control
over the timing and execution of version changes, ensuring that upgrades only
occur when you have fully reviewed and tested the new release.

## No Rollback Capability

It is important to note that once an update to a new version has been applied,
it is not possible to roll back to a previous version. The system does not
support rollback or downgrade operations. Additionally, you should maintain
appropriate backup and recovery strategies to mitigate any potential issues
introduced by an upgrade utilizing the
[backup](/tagodeploy/project/management/backups.md) functionality.

## Components Affected by Version Updates

When you update to a new version, the following infrastructure components may be
affected:

- **Admin**: Administrative user interface and management tools.
- **TagoRUN**: The runtime environment responsible for executing project
  workflows.
- **API**: Backend APIs that provide data access and integration points.
- **Features (Microservices)**: Modular microservices delivering specific
  business or technical functionality.
