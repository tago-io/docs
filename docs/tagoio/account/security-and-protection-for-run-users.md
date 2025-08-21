---
title: "Security and Protection for RUN users"
description: "This article explains how to use the Run module's Security and Protection settings in TagoRUN to handle account delete requests, enable two-factor authentication, set password rules, manage user sessions, and protect against bots (captcha)."
tags: ["tagoio"]
---

With TagoRUN, you can add actions and methods to increase your application's security and protect your Run users. These controls help your application comply with data-privacy and security laws by providing end-user safeguards to prevent inappropriate access to personal data.

By accessing the Run module and selecting the "Security and Protection" tab, you can implement and customize:
- How account delete requests will be processed
- Two-Factor Authentication (2FA) options for end users
- Password creation requirements (strength rules)
- User session duration and management
- Protection against automated (robot) activities using captcha

See the [Run module](link-to-run) for where to find these settings.

<!-- Image placeholder removed for build -->

https://mycompany.tago.run

## Security and Protection settings overview

The Security and Protection panel allows you to configure the following sections and options (labels shown as in the Run UI):

- Main navigation items (left panel): Main Configuration, Domain, Theme, Signup Page, Security and Protection, Custom Settings, Multi-language, Sidebar, Navigation Bar, Mobile Features.
- Actions when a user requests account deletion:
  - "What actions should be taken when user requests to delete account?"
  - Options shown in the UI:
    - Send an e-mail to the profile owner (example: felipe.gutierrez@tago.io)
    - Immediately delete user account
    - Run an Analysis (select an analysis)
- Captcha:
  - "Do you want to enable captcha?"
  - Option to request captcha test
- Session duration:
  - "How long should the user's session last?"
  - Session expires in [selector] (example shown: 3 Months)
- Two-Factor Authentication (2FA) for end users:
  - "Do you want to enable Two-Factor Authentication (2FA)?"
  - Methods (toggles shown):
    - Enable App Authenticator method
    - Enable SMS method *
    - Enable E-mail method *
    - "Enforce 2FA with enabled methods" (toggle)
    - Note: "* Each e-mail and SMS sent to users will be billed."
- Password strength / requirements:
  - "What password strength do you want to require?"
  - Options (toggles shown):
    - Must contain upper and lower case letters
    - Must contain a mix of letters and numbers
    - Must contain special characters (e.g., !, &, ...)
    - Minimum length: [numeric field] (example: 8)
- Save controls:
  - "Save" button to persist configuration
  - Published toggle/status is visible in the UI

## Delete request process

This section configures how your application handles end-user requests to delete their account. The available actions include sending a notification to the profile owner, immediate deletion, or triggering an analysis to perform custom cleanup tasks. Choose the action that best fits your privacy and audit requirements.

## Two-Factor Authentication (2FA) for End-Users

Enable 2FA to add an extra layer of security for user logins. Available methods in the Run UI include:
- App Authenticator (recommended for most users)
- SMS (note that SMS messages may incur billing)
- Email (note that emails may incur billing)
You can also enforce 2FA if any method is enabled.

## Password strength

Configure password rules to meet your security policy:
- Require upper and lower case letters
- Require a mix of letters and numbers
- Require special characters (examples: !, &, ...)
- Set a minimum password length (e.g., 8 characters)

## User session management

Set the session expiration to control how long a user stays logged in before re-authenticating. The UI provides a selector for duration (for example, 3 Months).

## Enabling Captcha

Enable captcha to reduce automated or bot activity on signup and other user actions. The UI offers a checkbox to request a captcha test and enables captcha protection when active.

## Related documentation

- See the [Run module](link-to-run) for where to access the Security and Protection tab.
- Refer to the TagoIO documentation sections referenced in the Run UI for related configuration and billing notes (e.g., email and SMS billing when using 2FA).