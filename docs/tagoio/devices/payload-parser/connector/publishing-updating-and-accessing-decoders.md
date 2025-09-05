---
title: "Publishing, updating and accessing decoders"
description: "This article explains how to publish, update, and share custom decoders (connectors) in TagoIO, including how to make a connector public via the GitHub repository and a video walkthrough."
tags: ["tagoio"]
---
TagoIO provides a list of [pre-integrated IoT devices](https://admin.tago.io/connectors) for easy connection. However, due to the wide variety of manufacturers and ongoing sensor development, you might not find a connector for your specific device.

In such cases, you can [create your own connector](/docs/tagoio/devices/payload-parser/building-your-own-parser) and optionally make it available to all TagoIO users. This allows users and manufacturers to submit decoders that convert raw payloads to the TagoIO format. This collaborative approach facilitates the creation of new connectors, bug fixes, and updates to existing ones, improving the overall IoT integration ecosystem.

## Making your connector public
If you wish to make your connector accessible to all TagoIO users, request to make your connector public by submitting a Pull Request to our GitHub repository:
https://github.com/tago-io/decoders

## Video walkthrough

<YouTube videoId="7ejN2q0YWo0" title="
How to publish Connectors using the Open Connector Github repository" />


:::tip 

When you publish your connector, anyone on the internet will be able to see the decoder code because our GitHub is open‑source.

If you want to keep your code private, share your connector directly with others instead of publishing it. Read more about [Sharing Connectors & Networks](/docs/tagoio/devices/payload-parser/connector/sharing-connectors-networks).

:::

## Repository Overview
The repository offers comprehensive resources for:

1. **Adding, fixing, and updating connectors** – by submitting pull requests in the GitHub repository.
2. **Validation and testing** – commands and tools to ensure decoders are properly formatted and functional.
3. **Access to the payload parser (decoder)** – since the repository is open‑source, you will find the parser code of every connector available in our list.

## Getting Started
To publish connectors or manage existing ones, refer to the repository [README file](https://github.com/tago-io/decoders/blob/main/README.md). This file includes detailed instructions on:

* Folder structure and manifest file formats  
* Steps for creating and managing decoders  
* Validation and testing procedures  
* Submission process for pull requests  

## Accessing the Repository
For detailed information and resources on working with decoders, visit the GitHub repository:

 - [TagoIO Decoders Repository](https://github.com/tago-io/decoders)

 The repository contains all necessary guidelines, examples, and schema files to support work with decoders.