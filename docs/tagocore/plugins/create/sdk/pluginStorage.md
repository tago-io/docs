---
sidebar_position: 5
title: Plugin Storage
slug: /tagocore/plugins/create/pluginstorage
---

# Plugin Storage

Each plugin has its own key-value database, and you can store any kind of information there by using the `pluginStorage`
object from the TagoCore Plugin SDK.

:::info Important
A Plugin **cannot** access the key-value pairs from another Plugin. Everything you store in this database is only
accessible by your plugin.
:::

## Storing data

To store a key-value pair in the database, use the `set` function. If the key already exists in the database,
the value will be overridden, otherwise the key-value pair will be added. Here is a code sample using that function:

```js
const { pluginStorage } = require("@tago-io/tcore-sdk");

async function addKeyValuePair() {
  const key = "name";
  const value = "John";
  await pluginStorage.set(key, value);
}

addKeyValuePair();
```

## Retrieving a single value

To retrieve a value associated to a key, use the `get` function. If the key doesn't exist, `undefined` will be
returned as a result.

Here is a code sample using that function:

```js
const { pluginStorage } = require("@tago-io/tcore-sdk");

async function getKeyValuePair() {
  const key = "name";
  const value = await pluginStorage.get(key);
  console.log(value); // outputs "John"
}

getKeyValuePair();
```

## Retrieving all key-value pairs

At some point you may want to retrieve all key-value pairs in the database. If that's the case, use the
`getAllItems` function. This function will return a key-value array containing all pairs in your Plugin's database.

Here is a code sample using that function:

```js
const { pluginStorage } = require("@tago-io/tcore-sdk");

async function getAllKeyValuePairs() {
  const pairs = await pluginStorage.getAllItems();
  console.log(pairs[0]); // outputs { key: "name", value: "John" }
  console.log(pairs[1]); // outputs { key: "location", value: "NC" }
  console.log(pairs[2]); // outputs { key: "hobby", value: "IoT" }
}

getAllKeyValuePairs();
```

## Removing data

To remove a key-value pair from the database, use the `delete` function. If the key doesn't exist, nothing will happen.

Here is a code sample using that function:

```js
const { pluginStorage } = require("@tago-io/tcore-sdk");

async function removeKeyValuePair() {
  const key = "name";
  await pluginStorage.delete(key);
}

removeKeyValuePair();
```
