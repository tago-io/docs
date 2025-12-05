---
title: "Creating Dashboard Tabs"
description: "Learn how to create and manage dashboard tabs in TagoIO to divide dashboards into multiple sections and add links to organize your applications effectively."
tags: ["tagoio", "dashboards"]
---

# Creating Dashboard Tabs

By using **Tabs**, you can divide [dashboards](/docs/tagoio/dashboards/) into multiple sections and add links to them. This is a great feature to create applications where the user has to deal with some setups and data in the same dashboard.

<!-- Dashboard tabs example image -->

Notice that in the example above we have three tabs: the dashboard itself, the configuration, and a link.

## Creating & Editing a Tab

To create a **tab** on your application, go to the dashboard you want to create it in, click the edit button to enter **edit mode**, and then click on the settings button.

<!-- Dashboard edit mode image -->

Then, go to the **Tabs** section and click the **plus button**.

<!-- Tabs section image -->

To create a tab, you must set the name of the tab and select its type. The type can be one of the following:

- **Dashboard**: The tab will be able to contain widgets.
- **Link**: The tab will be a link to another dashboard or another web page. You **cannot** put widgets inside of this tab.
- **Hidden tab**: The tab will be able to contain widgets, but it will be hidden from your users. You will only be able to access this tab in **edit mode**. Good use of this option is to use it with the [Widget Header](/docs/tagoio/widgets/general/widget-header.md).

<!-- Tab creation interface image -->
:::info

You can add up to **10** tabs in your dashboard.

:::

## Visibility Conditions

You can configure the tabs on your dashboard to restrict access for your end users on [TagoRun](/docs/tagoio/tagorun/) according to the **tags** you defined in the [User Management](/docs/tagoio/tagorun/access-management/) module. This functionality is very useful since you can have fine-grained control over which tabs are displayed for different types of users without having to duplicate the dashboards for different user roles.

In order to configure the visibility conditions, you will need to access your dashboard settings, then Tabs and click on the eye icon.

<!-- Visibility conditions interface image -->

For instance, you can have a dashboard where one of the tabs is only displayed for users that match the tag with key **user_type** and value **admin**.

<!-- Visibility conditions example image -->
