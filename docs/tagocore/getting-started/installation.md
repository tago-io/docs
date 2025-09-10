---
sidebar_position: 2
title: Download & Installation
slug: /tagocore/installation
---

# Download & Installation

TagoCore offers two installation methods to fit your needs: a quick Docker setup for immediate use, or a source code installation for development and customization.

## Method 1: Docker Installation (Recommended)

The fastest way to get TagoCore running is with Docker. This method requires no additional setup or dependencies.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed on your system

### Quick Start

Run this single command to start TagoCore:

```shell
docker run -p 8888:8888 -p 8999:8999 tagoio/tagocore
```

TagoCore will be available at `http://localhost:8888` in your browser.

## Method 2: Source Code Installation

Install from source code when you need to customize TagoCore or contribute to its development.

### Prerequisites

- Node.js (version 20 or higher)
- [Just](https://github.com/casey/just) command runner

### Download

Download the latest release from the [GitHub releases page](https://github.com/tago-io/tagocore/releases/latest). 

Choose your preferred format:
- **community_images.tar.gz** (Linux/macOS)
- **community_images.zip** (Windows/Cross-platform)

### Extract the Files

Navigate to your download folder and extract the archive:

**For .tar.gz files:**
```shell
tar -xvzf community_images.tar.gz
```

**For .zip files:**
```shell
unzip community_images.zip
```

### Install and Run

Navigate to the extracted folder and run these commands:

```shell
just install
just build-console
just server
```

TagoCore will start and display:
```shell
TagoCore is now available at http://localhost:8888
```

## Verification

Once TagoCore is running, open your browser and navigate to `http://localhost:8888`. You should see the TagoCore setup screen, confirming your installation was successful.

## Next Steps

With TagoCore installed, you're ready to start building IoT applications. Check out our [Core Concepts](/docs/tagocore/) to understand how Devices, Analyses, Actions, and Plugins work together.
