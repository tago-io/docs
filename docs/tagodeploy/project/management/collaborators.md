---
title: "Collaborators"
description: "Invite and manage the people who can view and change a project's resources."
keywords: [tagodeploy, iot, collaborators, team, permissions]
tags: ["tagodeploy"]
slug: /tagodeploy/project/management/collaborators
---

# Collaborators

Collaborators are the people who can view and change your TagoDeploy project's
resources. Open the page from the Management sidebar at
`/projects/{id}/management/collaborators`. When the project has none, it shows
"Invite team members to collaborate on this project."

Collaborators are different from TagoIO Admin developers, which you manage
separately under
[TagoIO Admin Accounts](/docs/tagodeploy/project/configuration/accounts.md).
A collaborator must have their own TagoDeploy account to accept an invitation.

## Permissions and limits

- Can view and edit project resources
- Cannot delete the project
- Cannot manage billing
- Cannot access your Admin console unless they have an Admin account there

Project owners can remove collaborators at any time.

## Inviting collaborators

1. Click **Invite**.
2. In the "Invite Collaborator" dialog, enter the **Email address** of the user.
   It must match an existing TagoDeploy account.
3. Select a **Role**:
   - **Admin**: full access to the project's resources.
   - **Contractor**: scoped access for outside contributors.
4. Click **Send Invite**, or **Cancel** to discard.

Invitation states:

- **Pending**: invitation sent, not yet accepted.
- **Accepted**: the user joined the project.
