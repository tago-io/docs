---
title: "Domain Management"
description: "View custom and default domains for a project's services, and add a custom domain with the New Domain wizard."
keywords: [tagodeploy, iot, domains, dns, ssl]
tags: ["tagodeploy"]
slug: /tagodeploy/project/domains
---

# Domains

The **Domains** page manages the domains that route to your project's services,
including TagoIO Admin, TagoRUN applications, the API, middlewares, and the MQTT
broker. Open it from the Management sidebar at `/projects/{id}/management/domains`.
The page splits domains into two sections: Custom Domains and Default Domains.

**Important:** Middleware domains are visible and configurable only by project
owners. Collaborators cannot view or modify them, which keeps routing and
service configuration secure.

## Custom Domains

Custom domains are external domains that let you use your own branding for the
project's services. When the project has none, the section shows "No custom
domains yet". Use **New Domain** to add one.

## Default Domains

Default domains are the standard domains assigned to your project for immediate
access. They are listed in a sortable table with these columns:

- **URL**: the full address used to reach the service.
- **Application**: the service the domain serves, such as TagoIO API, TagoIO
  Admin, TagoIO SSE, a middleware, a container, or the MQTT broker.
- **Endpoint**: the endpoint type, for example "API". The MQTT broker row uses
  an `mqtts://` URL.

## Adding a custom domain

Click **New Domain** to open the wizard. It runs in three steps: **Form**,
**Review**, and **Records**.

1. On the **Form** step, fill in the fields:
   - **Subdomain**: the prefix to use, for example `api`, `portal`, or `iot`.
   - **Domain**: your primary domain, for example `mycompany.com`.
   - **Target**: the service the domain should point to.
   Click **Next**.
2. On the **Review** step, confirm the details.
3. On the **Records** step, copy the DNS records shown and add them to your DNS
   provider's settings.

After DNS propagation, the custom domain becomes available for the target
service.
