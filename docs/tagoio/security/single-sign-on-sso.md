---
title: "Single Sign-On (SSO)"
description: "This article explains how to enable and configure Single Sign-On (SSO) for TagoIO RUN applications, including supported third‑party identity providers and the basic steps to import an Identity Provider into RUN."
tags: ["tagoio"]
---

By using Single Sign-On (SSO) integration, end users can sign in to a RUN application using credentials from your trusted user database provided by third‑party identity services. Supported providers include Okta, Auth0, Microsoft Azure AD, OneLogin, PingIdentity, Google Workspace, and others.

![TagoIO SSO integrated with 3rd-party services](/docs_imagem/tagoio/single-sign-on-sso-2.png)

## Overview
Single Sign-On (SSO) allows RUN applications to delegate authentication to an external identity provider (IdP). This enables centralized user management, single credential use across multiple services, and simplified user access to RUN and other connected services.

## Supported identity providers
TagoIO supports identity providers such as:
- Okta
- Auth0
- Microsoft Azure AD
- OneLogin
- PingIdentity
- Google Workspace
- Several other SAML/OpenID Connect (OIDC) compatible identity providers

## How it works
1. Configure an application (client) on your chosen Identity Provider (IdP).
2. Add and manage your users on the IdP side.
3. In RUN, import the configured Identity Provider.
4. Once imported and enabled, users can sign in to the RUN application using their IdP credentials.

The RUN configuration is intentionally simple: import the Identity Provider after you finish its application setup and user provisioning on the IdP.

## Enabling SAML Single Sign-On
TagoIO provides a SAML Single Sign-On option in RUN that lets users authenticate using credentials from your trusted user database.

- Feature: SAML Single Sign-On
- Description: Allow users to sign in to RUN using credentials from your trusted user database.
- Typical workflow: Configure an application on the Identity Provider, add your users, then import and enable the Identity Provider in RUN.

<!-- Image placeholder removed for build -->

## Managing users and access
You can use your Identity Provider to:
- Manage users and group membership
- Control user permissions centrally
- Allow users to access multiple services (including RUN) with the same credentials

## Related articles
- See [Run Theme](../run-theme)
- See [Security and Protection for RUN users](../security/security-and-protection-for-run-users)
- See [Using Dictionaries & Multi-language](../using-dictionaries-multi-language)
- See [Dictionaries](../dictionaries)
- See [TagoRun](../../tagorun/tagorun-mobile-app)

If you need configuration specifics for a particular Identity Provider (for example, "How to set up Okta with TagoIO" or "Configuring Auth0 for SSO"), refer to that provider's setup guide and then import the configured IdP into RUN.