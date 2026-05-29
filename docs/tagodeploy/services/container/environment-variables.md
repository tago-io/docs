---
title: "Container Environment Variables"
description: "The Environment Variables section of the Docker Settings page: key/value pairs passed to your container at runtime."
keywords: [tagodeploy, iot, container, environment variables, configuration]
tags: ["tagodeploy", "container"]
slug: /tagodeploy/project/container/environment-variables
---

# Environment Variables

The **Environment Variables** section on the container **Docker Settings** page
holds the key/value pairs passed to your container at runtime. Use them for
configuration the container reads from its environment, such as connection
strings, feature flags, and API keys.

## Managing variables

The section starts empty, with "No environment variables configured". Use
**Add variable** to add a key/value row, and repeat for each variable. Edit the
values and use **Save** to stage the change, which is applied through the
project deploy flow.

## Best practices

- **Use clear names**: make each variable's purpose obvious, and group related
  ones with a prefix (for example `DB_`, `SMTP_`).
- **Keep secrets out of the image**: pass credentials as environment variables
  instead of baking them into the image.
- **Provide defaults in your app**: handle missing optional variables and
  validate the critical ones at startup.
