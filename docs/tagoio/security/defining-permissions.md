---
title: "Defining Permissions"
description: "This article explains how to configure Permissions for Targets in TagoIO, what resources are available depending on the selected Target, and how permission rules are evaluated (including how Deny interacts with Allow)."
tags: ["tagoio"]
---
## Overview
You need to set up Permissions to define which types of resources your Targets will be allowed or denied access to.

The resources available to grant permission depend on the Target you select, and the rules available depend on the resource selected. See [Defining Targets](../defining-targets).

![Permissions editor showing Targets and Permissions](/docs_imagem/tagoio/defining-permissions-2.png)

## Adding resources and how rules are applied
You can add as many resources as needed. An OR operation is applied between permissions: as you add more permissions, more resources will be included in the verification process.

## Important: Deny overrides Allow
![Caution](https://static.zohocdn.com/zoho-desk-editor/static/images/caution.png)

> If you use one permission with Deny, it will override any options using an Allow that contain the same condition.