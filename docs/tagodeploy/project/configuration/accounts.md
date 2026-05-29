---
title: "TagoIO Admin Accounts"
description: "Manage developer accounts for the TagoIO Admin console: create, edit, and delete accounts."
keywords: [tagodeploy, iot, accounts, admin, user management]
tags: ["tagodeploy", "accounts"]
slug: /tagodeploy/project/accounts
---

# Accounts

The **Accounts** page manages developer accounts in your project's TagoIO Admin
console. You find it in the TagoIO & API section, under "Accounts & Profiles"
in the sidebar, at `/projects/{id}/tago-io/accounts`. From here you can browse
the accounts in the project and the profiles each one owns, and you can create
new accounts.

Each account represents an individual user with access to the TagoIO Admin
environment. There is no limit on the number of accounts you can add to a
project.

To learn more about what TagoIO developers can access through the Admin console,
visit the
[TagoIO Help Center](https://help.tago.io/portal/en/kb/articles/211-editing-accounts-details).

Developer accounts are separate from TagoDeploy accounts. Access to the
TagoDeploy console is managed independently. To grant TagoDeploy access, add
collaborators to your project. See
[Collaborators](/docs/tagodeploy/project/management/collaborators.md).

If a user needs to change their password, they should click the "Forgot
password" button on the sign-in page of the TagoIO Admin console. This starts
the password reset process so they can update their credentials.

## Browsing accounts

The page lists each account along with the profiles it owns. Use the search box
to filter accounts by name, and use Expand All or Collapse All to show or hide
the profiles under each account. When a project has no accounts, the page shows
"No accounts found for this project."

## Creating a new account

1. Click **New Account**.
2. In the "New Account" dialog, fill in the fields:
   - **Name**: the user's full name.
   - **Email**: the account email address.
   - **Password**: the initial password.
   - **Company**: the company name.
   - **Country**: select a country.
3. Click **Confirm** to create the account, or **Cancel** to discard.

The new account is added to the list, and the user can access the project's
TagoIO Admin console.

## Profile sharing

Each new account is provisioned with its own profile, which defines the user's
access scope and available resources. To let several users share access to a
single profile, use the
[TagoIO Teams](https://help.tago.io/portal/en/kb/articles/106-sharing-your-profile)
feature. This keeps collaborative access under appropriate controls and audit
trails.
