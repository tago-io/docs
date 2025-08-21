---
title: "Serial Number Format"
description: "This article explains how to define custom serial number masks for a Network in TagoIO, describing the allowed characters for each mask symbol and providing usage examples."
tags: ["tagoio"]
---

You can specify a custom mask/format for your Network's Serial Number.

To create your format, use the characters defined below.

## Definitions

| Symbol | Meaning |
|---|---|
| `F` | Allows characters that range from `a-f` and digits that range from `0-9` |
| `P` | Allows any alphanumeric character (`a-z`, `0-9`) |
| `0` | Allows only digits (`0-9`) |
| `A` | Allows only characters (`a-z`) |

## Examples

- To create a serial number that allows only digits, use the following format: `0000`.  
  This allows 4 digits in the serial number.
  ```text
  0000
  ```

- To use 16 characters in your serial number, allowing characters that range from `a-f` and digits that range from `0-9`, use the following format:
  ```text
  FF-FF-FF-FF-FF-FF-FF-FF
  ```
  This would allow combinations like:
  ```text
  08-86-AB-56-82-6C-F2-EE
  ```