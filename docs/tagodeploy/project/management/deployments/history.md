---
title: "Deployments"
description: "View the full history of deployments in your project, with status, search, and date filtering."
keywords: [tagodeploy, iot, deployments, history, audit]
tags: ["tagodeploy"]
slug: /tagodeploy/project/deployments/history
---

# Deployments

The Deployments page keeps a chronological record of every deployment in your
project. It gives you visibility into recent and past deployments so you can
track, audit, and review how your project has changed over time.

Open it from the Management sidebar under **Deployments**. The page header reads
"Deployments" and the card is titled "Manage Deployments", with the subtitle
"Complete history of every deployment in this project."

While a deployment is in progress you can not make further changes to the
project. You keep accessing the previous version until the deployment finishes.

## When do deployments happen?

A deployment occurs whenever you change the project using the TagoDeploy
console. The following changes do not trigger a deployment:

- Editing MQTT broker clients, groups, group rules, or pipelines
- Adding or removing collaborators
- Adding or removing developer accounts
- Adding or editing domains

When a change needs a deployment, you are taken to the deployment view where you
can watch its status.

## Browsing the history

The "History" section lists each deployment, and a refresh button reloads the
list. To find a specific entry, use the controls at the top of the page:

- A search box (placeholder "Search a deployment...") to match by token or
  description.
- A status filter that defaults to "All".
- A "Select Date Range" button to narrow the list to a time window.

Each entry records the deployment token or description, the status, and the date
and time of the event. The token is a unique identifier for the deployment. The
status tells you whether it succeeded, is still running, or failed.

Deployment statuses are:

- **Success**: the deployment completed and the resources are operational.
- **In Progress**: the deployment is underway and has not reached a final state.
- **Error**: the deployment hit a failure and did not complete as expected.

When a project has no deployments yet, the page shows "No deployments yet" with
the note that deployment history appears here once deployments are made.

**Note:** if a deployment fails, contact TagoIO support and provide the
deployment ID along with the date and time of the deployment.
