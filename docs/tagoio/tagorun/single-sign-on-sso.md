---
title: "Single Sign-On (SSO)"
description: "This article explains how to enable and configure Single Sign-On (SSO) for TagoIO RUN applications, including supported third‑party identity providers and the basic steps to import an Identity Provider into RUN."
tags: ["tagoio"]
---
By using Single Sign-On (SSO) integration, end users can sign in to a RUN application using credentials from your trusted user database provided by third‑party identity services. Supported providers include Okta, Auth0, Microsoft Azure AD, OneLogin, PingIdentity, Google Workspace, and others.

![TagoIO SSO integrated with 3rd-party services](/docs_imagem/tagoio/single-sign-on-sso-2.png)

## Overview
Single Sign-On (SSO) allows RUN applications to delegate authentication to an external identity provider (IdP). This enables centralized user management, single credential use across multiple services, and simplified user access to RUN and other connected services.


## How it works
1. Configure an application (client) on your chosen Identity Provider (IdP).  
2. Add and manage your users on the IdP side, including setting up group membership and permissions.  
3. In RUN, import the configured Identity Provider.  
4. Once imported and enabled, only users registered in the IdP **and** granted permission to access the application can sign in to the RUN application using their IdP credentials.

The RUN configuration is intentionally simple: import the Identity Provider after you finish its application setup and user provisioning on the IdP.

The configuration of your SSO will vary depending on the identity provider you choose, but the overall process is generally similar across different providers. [Here’s a guide on how to configure your SSO using Auth0](https://community.tago.io/t/how-to-set-up-single-sign-on-sso-on-tagorun-with-auth0/1727).

If you are using a different SSO tool, you can still refer to the [Auth0 documentation](https://community.tago.io/t/how-to-set-up-single-sign-on-sso-on-tagorun-with-auth0/1727), as the steps are often comparable for other providers.