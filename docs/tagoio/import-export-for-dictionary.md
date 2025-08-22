---
title: "Import & Export for Dictionary"
description: "A brief guide explaining how to import and export key/value pairs in a Dictionary on TagoIO, including supported file formats, typical use cases, import behavior, and where to get sample files."
tags: ["tagoio"]
---

The Dictionary provides a quick and easy way to import and export a Dictionary's key/value pairs via the two buttons at the top of a Dictionary page.

## Overview
All data in a Dictionary can be exported into a CSV or JSON file. Exported files are useful for:
- Editing in another program (such as Excel or another editor)
- Sending for translation to another language by keeping the keys and editing only the values
- Keeping a backup to revert any changes to a known state

![Dictionary Pairs menu showing Import/Export options and sample downloads](/docs_imagem/tagoio/import-export-for-dictionary-2.png)

## Exporting a Dictionary
- Use the Export button at the top of the Dictionary page to download all key/value pairs as a CSV or JSON file.
- Choose CSV or JSON based on how you plan to edit or process the data.

## Importing a Dictionary
- A CSV or JSON file can be imported into a specific language in the Dictionary after being edited (e.g., translated).
- Importing will overwrite the values for all existing keys in the selected language.
- Any new keys and values present in the imported file will be added to the selected language.

## Behavior when adding new keys
- When you add new keys to a language via import, the Dictionary will also add those keys with empty values to all other languages in the Dictionary.

## Samples
TagoIO provides sample CSV and JSON files accessible from the Import and Export buttons for convenience and reference. In the Dictionary UI the menu includes options such as:
- Import CSV
- Import JSON
- Get CSV sample
- Get JSON sample

## See also
- See [Using Dictionaries & Multi-language](../using-dictionaries-multi-language) for additional details about language handling and dictionary usage.
- See [Learn more](../dictionaries) for further information about the Dictionary Pairs configuration and substitution behavior.