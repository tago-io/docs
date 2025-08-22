---
title: "Entities"
description: "A concise overview of the TagoIO Entities feature, explaining its purpose, typical use cases, and instructions for creating a new Entity in the Admin interface."
tags: ["tagoio"]
---

The Entity feature is an excellent tool for storing data in a tabular format. Unlike the [Devices](../devices/devices) feature, which is optimized for storing sensor data with high-frequency write operations, the Entity feature provides a versatile solution for managing a wider variety of data types with less frequent writes.

Within an Entity, you can create custom fields similar to columns in a traditional database and define specific data types. You can also improve search and retrieval performance by implementing single or multiple indexes. Entities are well suited to store diverse data such as site information, organizational metadata, contact lists, equipment details, and product information.

Once your information is stored, you can access the data through [Analysis](../analysis/analysis-overview), the [TagoIO API](https://docs.tago.io/api/), and—soon—[Widgets](../widgets/widgets-overview).

## Creating an Entity

To create a new Entity, open the [Entity module](../entities/entities) on your Admin page and click on "+ New Entity" (or the equivalent action). You will be prompted to define a name and add fields. Note that once an entity is created, its name cannot be changed; however, you can still add or remove fields as needed.

<!-- Image placeholder removed for build -->

## On this page

- Creating an Entity
- Managing fields
  - Data types
- Indexing fields to improve searching and sorting
- Preprocessing data before insertion
- Managing the data in your Entity
- Limits and Restrictions

## References and related documentation

- See [Devices](../devices/devices) for information about device-oriented data storage.
- See [Analysis](../analysis/analysis-overview) for processing and analyzing stored data.
- See [TagoIO API](https://docs.tago.io/api/) for programmatic access to Entities.
- See [Widgets](../widgets/widgets-overview) for planned UI components that will access Entity data.
- Refer to the Entity module in the Admin interface ([Entity module](../entities/entities)) to create and manage Entities.