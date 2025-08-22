---
title: "Upgrading Plans & Services"
description: "This article explains how billing behaves when you upgrade TagoIO plans or services, including proration rules and when charges are applied, and points to a tutorial for enabling auto-scaling of profile limits."
tags: ["tagoio"]
---
When you upgrade your plan from Free to a Starter or Scale plan for the first time, the date and hour of that upgrade define the billing cycle for your account. You will be charged for the full month at that time, and the plan will be automatically renewed until you cancel or downgrade it.

![Image 1: Alert](/docs_imagem/tagoio/exclamation-4.png)

If you make additional upgrades to your plan during a billing cycle, we will apply a one-time prorated charge at the moment of the upgrade for the remaining days in that billing cycle.

For example, if you upgrade from the Starter to the Scale plan when there are 10 days remaining in the billing cycle, we will charge one-third of the Scale monthly price immediately (pro‑rated for the remaining days), minus the amount you already paid for the Starter plan. On the next billing cycle, we will charge the full price of the Scale plan and its provisioned services.

> Note: Some services are not prorated if they are consumable. For example, if you increase the SMS limit in the middle of your billing cycle, you will be charged the full price (minus the amount already paid for the previous setting) because you then have the right to use all available SMS messages.

To upgrade your billing, go to the [Billing](../billing/billing-summary) option in the top‑right dropdown menu.

## How to auto-scale

If you want to automate upgrades of your account using an auto‑scaling feature, see the following tutorial:

- [How to auto-scale your profile limit](../analysis/analysis-overview)