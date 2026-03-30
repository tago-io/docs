---
title: "SAML SSO"
description: "Configure SAML-based Single Sign-On for your TagoIO RUN application using Auth0, Okta, or another SAML-compatible identity provider."
tags: ["tagoio"]
keywords: [tagoio, iot, tagorun, sso, saml, auth0, okta, identity provider]
sidebar_position: 2
---

SAML SSO lets your users authenticate with a RUN application through a SAML-compatible identity provider. You can configure it in **RUN Settings > Integrations > SSO SAML**.

## Supported providers

You can use any SAML 2.0-compatible identity provider, including Okta, Auth0, Microsoft Azure AD, OneLogin, PingIdentity, and Google Workspace.

## Configuration guide

The configuration steps vary depending on your identity provider, but the overall process is similar across providers:

1. Create a SAML application in your IdP and configure the required settings (such as the Assertion Consumer Service URL and Entity ID provided by RUN).
2. Add and manage users on the IdP side, including group membership and permissions.
3. Import the IdP metadata or configuration details into RUN under **SSO SAML** settings.
4. Enable SSO and verify that your users can sign in through the IdP.

For a step-by-step walkthrough, see the [Auth0 SSO setup guide on the TagoIO Community](https://community.tago.io/t/how-to-set-up-single-sign-on-sso-on-tagorun-with-auth0/1727). If you are using a different provider, the Auth0 guide is still a useful reference since the steps are often comparable.

