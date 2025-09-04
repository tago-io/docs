---
title: "Custom Domain Configuration"
description: "This article explains how to configure a custom domain for your TagoIO Run portal using the Custom Domain & Whitelabel add-on, including prerequisites and how to add the domain in the Run module."
tags: ["tagoio"]
sidebar_position: 2
---
The Custom Domain & Whitelabel add‑on lets you promote your organization’s brand using a custom URL for your Run portal. Configuring your Custom Domain is straightforward, but there are a few requirements to make it work.

## Pre-requisites

Before configuring your Custom Domain in your Admin, ensure you have:

- A domain or a sub‑domain for your organization; you can obtain one from any domain provider. Ensure you can edit the DNS (Domain Name System) records for your custom domain in the domain provider’s settings.
- The Custom Domain & Whitelabel add‑on is activated in your profile. Check the Pricing page for more information (see [Custom Domain & Whitelabel](/docs/tagoio/addons/custom-domain/) and [Pricing](https://tago.io/pricing)).

:::info

The Custom Domain & Whitelabel add‑on is available per profile. If you need to use a custom domain in another profile, you will need to acquire another add‑on.

:::

## Adding your Custom Domain

To configure the Custom Domain add‑on for your profile:

1. Access your Run module.
2. Click the **Domain** tab.
3. Paste your domain and sub‑domain in the respective fields.

You can also configure the e‑mail domain for messages sent from your application, choosing between the available options shown in the Domain tab of the Run module:

- **Use only the domain name:** The e‑mail address will contain only the domain. For example `noreply@mycompany.com`.
- **Use full address:** The e‑mail address will contain both domain and sub‑domain. For example `noreply@portal.mycompany.com`.

Once you are done, confirm your settings to start mapping your Custom Domain.

## DNS Configuration

After adding your custom domain, a new tab appears with the DNS records you need to add to your domain provider’s admin console.

1. **Create CNAME records** for each of the listed entries:
   - Record type: `CNAME`
   - Key (name): copy from the table.
   - Value (target): copy from the table.

   In total, you will create one record for the endpoint and SSL certificate, and three records for e‑mail.

2. Once all records are added, click **Check records** to verify your configuration. The status icons next to each record indicate whether the record is correctly set up. Hover over the icon on the right side of each record for more details about its status.

3. Due to DNS propagation, it may take a few minutes (up to 30 minutes) before TagoIO detects the changes. If after 30 minutes the domain still does not work, double‑check that the records were created exactly as shown.

:::info

SSL certificate is mandatory; if you click **Check records** without setting up the SSL certificate, the domain will be mapped but disabled.

:::
