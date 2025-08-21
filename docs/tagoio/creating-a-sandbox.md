---
title: "Creating a Sandbox"
description: "This article explains what a sandbox is in TagoIO and how to create and use a sandbox (a separate profile) to safely test applications without affecting critical apps or users. It also covers collaboration tips for sharing sandboxes with other developers."
tags: ["tagoio"]
---

*Sandbox* refers to an isolated testing environment that enables developers to run applications without affecting other applications that have critical devices or users connected.

> Use sandboxes to test new applications with the confidence that they will not impact others.

## How to create a sandbox
To create a sandbox, just [add a new profile](link-to-add-new-profile) and use it for your tests. Make sure that all critical applications are running in another profile.

For example, if any of your tests demand a higher level of services (limits) and lock that profile, it will not block the applications running in other profiles.

## Collaboration
Increase team collaboration and add more developers to your sandbox. To do this, share your profile with others by using the [share your profile](link-to-share-your-profile) functionality.

## Notes
- Use a separate profile for all non-critical testing to avoid impacting production devices or users.
- Locking or changing limits on a sandbox profile will affect only that profile, not the applications in other profiles.