---
title: "End-User Agreements"
description: "This article explains the End-User Agreements feature in TagoIO, which lets administrators manage and track legal agreements or terms of service that users must accept before accessing the platform."
tags: ["tagoio"]
keywords: [tagoio, iot, tagorun, user agreements, terms of service, compliance]
---

End-User Agreements is a feature designed to help you manage and track legal agreements or terms of service that users must accept before accessing the platform. This feature ensures compliance and provides a transparent method for maintaining records of user consent. Once implemented, users are prompted to review and accept these agreements during their initial login or whenever new agreements are introduced.

## Creating Agreements

Use this section to create and configure end-user agreements (terms of service, privacy policies, etc.) that users must accept before using the platform. Creating an agreement typically involves providing the agreement text, configuring visibility, and setting when the agreement must be accepted (for example, at first login or when a new version is introduced).

![New Agreement](/docs_imagem/tagoio/rounded-image-1775653952888.png)

**Steps to create a new agreement**

1. Navigate to the **[Run module](https://admin.tago.io/run)** → **Signup Page** → **Terms and conditions**.
2. Click the **_New Agreements_** section on the right menu.
3. Click on the **_+ New Agreement_** button.
4. Define the following fields:
   - **Name:** Enter a descriptive name for the agreement.
   - **Document Link:** Provide the URL where the full agreement text is hosted.
   - **Checkbox Label:** Customize the text that appears next to the acceptance checkbox.

![Agreements](/docs_imagem/tagoio/rounded-image-1775654016819.png)

## Accepting Agreements

This section covers how end users are prompted to review and accept agreements during login and how accepted agreements are recorded for compliance and auditing purposes.

- End‑users encounter the agreement acceptance process in two scenarios:
  1. During their first login to the platform.
  2. When new agreements are added to the system.
- The agreement modal displays the terms that require acceptance. Users must check the customized checkbox to indicate their acceptance before they can proceed.
- If a user does not accept, they will be logged out.

## Updating Agreements

This section describes how to update existing agreements and how to require users to re‑accept when a new version is published.

- You can edit an existing agreement’s **name** and **checkbox label**; however, the **document link cannot be changed**.
- To update the agreement text, create a new agreement with the revised terms. The system will automatically prompt existing users to accept the new agreement upon their next login.
- To disable an agreement, toggle off the **_Enable Agreement_** option. This prevents the agreement from appearing for end users.
- Previous agreements cannot be deleted; they remain in the system for record‑keeping purposes.

## Monitoring Agreements

This section explains methods for tracking which users have accepted which agreements and when they accepted them, to maintain records of user consent.

### Global agreement overview

Navigate to the **Agreements tab** (Run module → Signup Page). Here you can view which agreements are active and their creation dates.

### Individual user agreement status

1. Navigate to the **Users module**, select a user, then go to the **Agreements tab**.
2. View information about all accepted agreements, including:
   - Agreement name
   - IP address
   - User Agent
   - Acceptance timestamp
