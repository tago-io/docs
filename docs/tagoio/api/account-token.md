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

1. [Devices](/docs/tagoio/devices/)
2. [Dashboards](../dashboards/) and [Widgets](/docs/tagoio/widgets/)
3. [Analysis](/docs/tagoio/analysis/)
4. [Actions](../actions/)
5. [Files](../files)
6. [Access Management](../tagorun/access-management/)
7. [TagoRun](/tagorun) and [Run users](../account/user-management)
8. [Dictionary](../dictionaries)

#### Expiration and Auto-Generated Tokens

The expiration field defines the lifespan of a token; it can be set to a temporary period or left infinite (never expires).  
A new token is automatically generated each time you log in to your account, or when someone with whom you have shared your profile logs in. These auto‑generated tokens are created with an expiration time of 3 months and will be deleted automatically after that period or when the user logs out of the account manually.