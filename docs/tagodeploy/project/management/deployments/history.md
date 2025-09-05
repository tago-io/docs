---
title: "Deployment History"
description: "View past deployments, statuses, and when deployments are triggered in your project."
tags: ["tagodeploy"]
slug: /tagodeploy/project/deployments/history
---

# Deployment History

The Deployment History section provides a detailed and chronological record of
all deployment activities associated with your project. This feature gives you
comprehensive visibility into both recent and historical deployments, enabling
tracking, auditing, and management of your deployment processes.

While a deployment is in progress, you can not further modify the project. You
will continue to access the previous version of the project until the deployment
is complete.

## When do deployments happen?

Deployments occur whenever a modification is made to the project using the
TagoDeploy console. This **does not** include:

- Editing MQTT Broker Client/Group/Group Rule/Pipeline settings
- Adding or removing collaborators
- Adding or removing developer accounts
- Adding or Editing Domains

If a modification requires a deployment, you will be automatically redirected to
the deployment page, where you can monitor the deployment status.

## Deployment Record Details

Each entry in the deployment history captures the deployment token or
description, the deployment status, and the precise date and time of the event.
The deployment token provides a unique identifier for the deployment. The status
field gives immediate insight into whether the deployment was successful, is
still in progress, or encountered errors. The deployment date records when the
event was initiated or logged.

Deployment statuses are clearly defined:\
A status of **Success** indicates the deployment was completed and resources are
fully operational. **In Progress** means the deployment is currently underway
and has not yet reached a final state. **Error** signifies that the deployment
encountered issues or failures and did not complete as expected.

**Note:** If a deployment fails, please enter contact TagoIO support, please
provide the deployment ID and the date and time of the deployment.
