---
title: "Entities"
description: "A concise overview of the TagoIO Entities feature, explaining its purpose, typical use cases, and instructions for creating a new Entity in the Admin interface."
tags: ["tagoio"]
---
The Entity feature is an excellent tool for storing data in a tabular format. Unlike the [Devices](/docs/tagoio/devices/) feature, which is optimized for storing sensor data with high-frequency write operations, the Entity feature provides a versatile solution for managing a wider variety of data types with less frequent writes.

Within an Entity, you can create custom fields similar to columns in a traditional database and define specific data types. You can also improve search and retrieval performance by implementing single or multiple indexes. Entities are well suited to store diverse data such as site information, organizational metadata, contact lists, equipment details, and product information.

Once your information is stored, you can access the data through [Analysis](/docs/tagoio/analysis/), the [TagoIO API](https://docs.tago.io/api/), and—soon—[Widgets](/docs/tagoio/widgets/).

## Creating an Entity

To create a new Entity, open the [Entity module](https://admin.tago.io/entities) on your Admin page and click on "+ New Entity" (or the equivalent action). You will be prompted to define a name and add fields. Note that once an entity is created, its name cannot be changed; however, you can still add or remove fields as needed.

### Mandatory default fields

| Field      | Description |
|------------|-------------|
| id         | A Universally Unique Identifier (UUID) for the data entry, automatically generated if not provided. |
| created_at | Timestamp of when the data entry was created. |
| updated_at | Timestamp of the last time the data was edited. |

These fields are always present and cannot be removed or modified.

## Managing fields

You can easily manage your fields by accessing the **Fields** tab within your Entity. Here, you have the option to add, edit, and remove fields.

### Data types

When adding new fields, you have several data types to choose from. It’s important to note that once a field is created, its data type cannot be changed.

| Data Type | Description |
|-----------|-------------|
| String    | A variable‑length string. Maximum size of 255 characters. |
| Integer   | An integer number (e.g., 10). |
| Float     | A floating‑point number (e.g., 10.5). |
| Text      | A long text string. Maximum size of 30,000 characters. |
| Timestamp | A date/time in ISO‑8601 format. |
| JSON Data | A JSON object, maximum size of 10 KB. |

## Indexing fields to improve searching and sorting

In order to optimize search operations and determine the order of results, you can index your data. Indexes play a crucial role in improving database performance and are required for API and Analysis requests.

By default, every entity will have an index on the field **id**.

### Adding new indexes

To create a new index, go to the **Fields** tab and click the "**+ Add Index**" button. From this menu, you can select the fields you want to include in the index and assign it a name. Note that indexes cannot be edited once created, but they can be deleted and recreated if necessary.

Since you can add multiple fields to your index, the order of selection is crucial because sorting is only possible by the last field chosen. Additionally, some dashboard functionalities will automatically select the most appropriate index based on the filters applied, unless a specific index is explicitly designated.

### Using Indexes

When filtering data, you must provide all filters matching the index from left to right:

1. You don’t need to use all fields in the index, but you must use them in order, starting from the leftmost field.
2. For example, if you have an index with fields (A, B, C):
   * You can filter using only field A.
   * You can filter using fields A and B.
   * You can filter using fields A, B, and C.
   * You cannot filter using only B, or B and C, without including A.

## Preprocessing data before insertion

Before storing data in your entity, you can preprocess it using the **Schema Parser**. This tool is especially beneficial for validating, normalizing, or transforming data before storage. The Schema Parser operates as a JavaScript code that executes during data insertion.

To activate it, go to the Schema Parser tab and toggle the "**Enable**" button. Once activated, you can begin writing your code.

### Global Variables

The following global variables are available in the Schema Parser:

| Variable | Description |
|----------|-------------|
| payload  | Content of the message being inserted. Usually an Array of data or a string. |
| dayjs    | Day.js library for date/time operations. |

## Managing the data in your Entity

Once the data is added to your Entity, you can easily manage it by viewing, filtering, inserting, editing, and deleting data entries. You can also manage your data through Analysis SDK or the [TagoIO API](https://docs.tago.io/api/).

Additionally, you can completely empty the data of your Entity by going to the **More** tab and clicking the "**Empty Entity Data**" button.

### Best Practices when managing your data

1. Regularly review and clean up outdated or invalid data.
2. Use Analysis scripts for bulk operations and complex data management tasks.
3. Implement robust validation in your Schema Parser to ensure data integrity.

The number of data entries available per entity is determined by your subscription plan. For more detailed information, please refer to the **Limits and Restrictions** section.

## Limits and Restrictions

The Entity has certain limits based on your TagoIO account plan. These limits apply to the number of entities, fields, indexes, and data entries you can create.

| Feature | Free | Starter | Scale |
|---------|------|--------|-------|
| Fields per Entity | 10 | 30 | 30 |
| Indexes per Entity | 2 | 10 | 10 |
| Fields per Index | 5 | 5 | 5 |
| Data Entries | 1,000 | 100,000 | 100,000 |

Entity operations are subject to the same rate limits (Requests Per Minute) as other mutable operations in your plan. For detailed information on these limits, please refer to the Rate Limits documentation.

---