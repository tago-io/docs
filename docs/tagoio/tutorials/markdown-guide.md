---
title: "Markdown Guide"
description: "This article summarizes the basic Markdown syntax supported in TagoIO, including emphasis, headers, lists, links, quotes, images, tables, and how to display code examples."
tags: ["tagoio", "guide"]
---
## Emphasis

Use Markdown to emphasize text:

```markdown
**bold**
*italics*
~~strikethrough~~
```

Additional emphasis examples:
- Italic using underscores: `_italic_`
- Strikethrough with four tildes: `~~~~strikethrough~~~~`

## Headers

Examples of header levels:

```markdown
# Big header
## Medium header
### Small header
#### Tiny header
```

## Lists

Unordered list:

```markdown
* Generic list item
* Generic list item
* Generic list item
```

Ordered list:

```markdown
1. Numbered list item
2. Numbered list item
3. Numbered list item
```

## Links

Inline link example:

```markdown
[Text to display](http://www.example.com)
```

## Quotes

Block quote example:

```markdown
> This is a quote.
> It can span multiple lines!
```

## Images

Need to upload an image? [TagoIO Files](/docs/tagoio/files) can help you with that.

Example Markdown for an image:

```markdown
![Alt text](path/to/image.jpg)
```

## Tables

Basic Markdown table example:

```markdown
| Syntax    | Description |
|-----------|-------------|
| Header    | Title       |
| Paragraph | Text        |
```

Additional tables from the legacy guide:

```markdown
| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John     | Doe      | Male     |
| Mary     | Smith    | Female   |
```

_Or without aligning the columns..._

```markdown
| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John | Doe | Male |
| Mary | Smith | Female |
```

## Displaying code

Inline code example:

Use backticks for inline code: `var x = 1;`

Fenced code block example (JavaScript):

```javascript
function greet() {
  console.log("Hello, world!");
}
```

Additional code examples from the legacy guide:

Inline code:

```markdown
`var example = "hello!";`
```

Spanning multiple lines:

```markdown
var example = "hello!";
alert(example);
```

References:
- See the TagoIO Files interface for uploading images: [TagoIO Files](/docs/tagoio/files)