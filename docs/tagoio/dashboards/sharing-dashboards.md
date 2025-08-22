---
title: "Sharing Dashboards"
description: "This article explains how to share dashboards in TagoIO, including how to open the Share Public option and where to access related sharing features."
tags: ["tagoio", "dashboards"]
---
A great feature of TagoIO is its native sharing capability for dashboards — useful when a dashboard becomes a feature you want to share with others.

> If you want to share only the template of your dashboards, use the [Distribute](blueprint-dashboard) feature.

> To share applications with your end-users using your brand and a custom URL, use [TagoRUN](../../tagorun/).

## Share Public

To share a dashboard, open the menu for the dashboard you want to share and click on "Share Public". Example:

<!-- Image placeholder removed for build -->

The Share Public section can also be accessed from the dashboard settings page when viewing the dashboard in your Admin.

### Requirements for Public Sharing

In order to generate a public link, you must have **TagoRUN** enabled and an **Anonymous User** created. The Anonymous User should have sufficient permissions to access the resources that will appear on the public dashboard. You can grant these permissions by creating a policy in **Access Management**.

Once set up, the Share Public page allows you to copy a link for both normal dashboards and [Blueprint Dashboards](blueprint-dashboard). Anyone who receives this URL can view the dashboard without needing a TagoIO account or credentials.

### Data Output Considerations

Data accessed from widgets on public dashboards—including data downloaded in CSV format—counts toward your **Data Output for Dashboards** quota.

## Dashboard Templates

You can also share only the template of a dashboard using the [Distribute](blueprint-dashboard) feature. In this case, no data is shared; only the layout and widget configuration are exported.