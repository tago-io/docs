
---
title: "PDF Service Generator"
description: "This article explains how to generate PDF documents using the TagoIO PDF service generator by making an HTTP POST request and receiving a base64-encoded PDF. It documents the endpoint, required headers, request body fields, and size limitations."
tags: ["tagoio"]
---
Learn how to create PDF documents using the TagoIO PDF service generator. Make an HTTP POST request to the PDF service endpoint and the response will be a base64‑encoded PDF. The base64 response can be sent by an Analysis or saved in Files. See the Analysis and Files documentation for examples on sending or saving the response ([Analysis](/docs/tagoio/analysis/), [Files](../files)).

## Notes
- You can generate a PDF with HTML size up to 256 KB.
- The service returns the PDF content as a base64 string.

## Endpoint
Use the following endpoint with an HTTP POST request:

```text
POST https://pdf.middleware.tago.io
```

## Headers
| KEY | TYPE | REQUIRED |
|-----|------|----------|
| authorization | your analysis token here | yes |

Learn how to get your Analysis token: [Analysis token](/docs/tagoio/analysis/).

## Body Description
| KEY | TYPE | REQUIRED |
|-----|------|----------|
| html | string | yes |

### Optional Parameters

| KEY | TYPE | DESCRIPTION |
|-----|------|-------------|
| format | string | Paper format. If set, it takes priority over `width` or `height`. Defaults to `'A4'`. Options: `Letter`, `Legal`, `Tabloid`, `Ledger`, `A0`–`A6`. |
| printBackground | boolean | Prints background graphics. Defaults to `false`. |
| displayHeaderFooter | boolean | Displays header and footer. Defaults to `false`. |
| headerTemplate | string | HTML template for the print header. Should be a valid HTML markup with classes: `date`, `title`, `url`, `pageNumber`, `totalPages`. |
| footerTemplate | string | HTML template for the print footer. Same format as `headerTemplate`. |
| scale | number | Scale of the webpage rendering. Defaults to `1`. Must be between `0.1` and `2`. |
| landscape | boolean | Paper orientation. Defaults to `false`. |
| pageRanges | string | Page ranges to print, e.g., `'1-5,8,11-13'`. Defaults to empty string (print all pages). |
| margin | object | Paper margins. Example: `{ top:'1.5cm', right:'1.5cm', left:'1.5cm', bottom:'1.5cm' }`. |

## Response
The response body will contain the generated PDF as a base64‑encoded string in the `result` field, and a boolean `status` indicating success.

| KEY | TYPE | DESCRIPTION |
|-----|------|-------------|
| status | boolean | `true` if successful, `false` if error. |
| result | string | Base64 string of the PDF document. |

You can decode and save it as a PDF file, or use Analysis to send it via email and Files to store it.

## Using the PDF Service in Analysis
You can also generate PDFs directly from TagoIO Analysis by following this example: [analysis-example-generatepdf-report](https://github.com/tago-io/analysis-example-generatepdf-report).

## Related documentation
- Analysis: [Analysis](/docs/tagoio/analysis/)
- Files: [Files](../files)
- Analysis token: [Analysis token](/docs/tagoio/analysis/)