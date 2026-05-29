---
title: "Project Tokens"
description: "Create and revoke API tokens that grant scripts and services programmatic access to a project."
keywords: [tagodeploy, iot, tokens, api, programmatic access]
tags: ["tagodeploy"]
slug: /tagodeploy/project/management/tokens
---

# Project Tokens

Project tokens give scripts and services programmatic access to a TagoDeploy
project. Open the page from the Management sidebar at
`/projects/{id}/management/tokens`. It lists the tokens that exist for the
project and lets you create new ones or revoke the ones you no longer need. When
the project has none, it shows "Create an API token to enable programmatic
access to this project."

## How tokens work

A token authenticates API requests to the project without a browser session. A
token has full access to the project and can be used with the API.

The list shows each token by its last four characters, who created it, and when.
The full secret is never shown after creation, so the last four characters are
how you tell tokens apart. A project can hold up to 10 tokens. Once you reach
that limit, the New Token button is disabled and the page shows a warning.
Delete a token to free a slot.

## Creating a token

Click **New Token** and confirm in the dialog. The dialog has no input fields:
the token is created with full access to the project for use with the API. The
secret is shown once, right after creation, with a Copy button. Copy it and
store it somewhere safe before you close the dialog, because it cannot be shown
again. If you lose it, delete the token and create a new one.

## Revoking a token

Use the Delete action on a token row, then confirm in the dialog, which
identifies the token by its last four characters. Revoking takes effect
immediately, and any request that uses the token after that fails. This cannot
be undone, so revoke a token whenever its secret may have leaked or it is no
longer in use.
