---
title: "Docker Image Configuration"
description: "The Docker Image and Registry Authentication sections of the Docker Settings page: pick an image and authenticate to private registries."
keywords: [tagodeploy, iot, docker, container, registry]
tags: ["tagodeploy", "container"]
slug: /tagodeploy/project/container/docker-image
---

# Docker Image Configuration

The **Docker Image** and **Registry Authentication** sections sit at the top of
the container **Docker Settings** page. They decide which image the container
pulls and how it authenticates to a private registry. Edit the fields and use
**Save** to stage the change, which is applied through the project deploy flow.

## Docker Image

This section sets the image the container runs:

- **Image Name**: the name of the Docker image to use, including the registry
  and repository path when it is not on Docker Hub (for example
  `nginx`, `docker.io/library/postgres`, `ghcr.io/company/app`).
- **Image Tag**: the tag of the Docker image to use (for example `latest`,
  `v1.2.0`, `main`).

Pin a specific tag instead of `latest` for production so deploys stay
reproducible.

## Registry Authentication

Use this section to provide credentials for private Docker registries. Public
images from Docker Hub do not need credentials.

- **Registry Username**: the username for the Docker registry.
- **Registry Access Password**: the access password or token for the Docker
  registry. The field has a reveal toggle and is treated as a secret, so it is
  only sent when you edit it.

### Docker Hub

For a private Docker Hub repository, create a personal access token instead of
using your account password:

1. Sign in to [Docker Hub](https://hub.docker.com).
2. Open **Account Settings** then **Security**.
3. Click **New Access Token**, give it a description, and pick **Read** access
   for pulling images.
4. Generate the token, then enter your Docker Hub username as the Registry
   Username and the token as the Registry Access Password.

### GitHub Container Registry

For images on `ghcr.io`, create a GitHub personal access token:

1. Open [GitHub token settings](https://github.com/settings/tokens).
2. Generate a classic token with `read:packages` (and `repo` if the image lives
   in a private repository).
3. Enter your GitHub username as the Registry Username and the token as the
   Registry Access Password.

### Other registries

The same two fields work for AWS ECR, Google GCR, Azure ACR, and other private
registries. Use the registry's username or access key as the Registry Username
and its password, token, or secret key as the Registry Access Password.
