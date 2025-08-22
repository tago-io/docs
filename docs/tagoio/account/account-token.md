---
title: "Account Token"
description: "This article explains what Account Tokens are in TagoIO, why they must be kept secret, and how to manage them from your account profile. It also highlights that multiple tokens can be created with configurable permissions and expiration."
tags: ["tagoio"]
---
Account Tokens are the secret keys used between Tago and external applications. Any access from an account requires a valid token, so it is vital that tokens are kept secret and only shared with trusted parties.

> ⚠️ All sorts of requests can be performed with Account Tokens, so only provide this token to trusted applications.

<!-- Image placeholder removed for build -->

## Managing Account Tokens

Account tokens can be managed from your [account details](editing-accounts-details) by selecting your profile. You can copy a token by clicking the **Copy** button.

More than one token can be created for the same profile. Permissions and expiration dates for each token may be configured as needed.

### Types of Permissions

* **Full** – full permission to manage all entities from your account, including read, create, update, and delete.
* **Write only** – create and update all entities from your account.
* **Read only** – read all entities from your account.

#### Entities Authenticated by Account Tokens

1. [Devices](https://help.tago.io/portal/en/kb/articles/3-devices)
2. [Dashboards](https://help.tago.io/portal/en/kb/articles/15-dashboard-overview) and [Widgets](https://help.tago.io/portal/en/kb/articles/18-widgets-overview)
3. [Analysis](https://help.tago.io/portal/en/kb/articles/29-analysis-overview)
4. [Actions](https://help.tago.io/portal/en/kb/articles/30-actions)
5. [Files](https://help.tago.io/portal/en/kb/articles/127-files)
6. [Access Management](https://help.tago.io/portal/en/kb/articles/183-access-management)
7. [TagoRun](https://help.tago.io/portal/en/kb/articles/191-tagorun) and [Run users](https://help.tago.io/portal/en/kb/articles/190-user-management)
8. [Dictionary](https://help.tago.io/portal/en/kb/articles/487-dictionaries)

#### Expiration and Auto-Generated Tokens

The expiration field defines the lifespan of a token; it can be set to a temporary period or left infinite (never expires).  
A new token is automatically generated each time you log in to your account, or when someone with whom you have shared your profile logs in. These auto‑generated tokens are created with an expiration time of 3 months and will be deleted automatically after that period or when the user logs out of the account manually.