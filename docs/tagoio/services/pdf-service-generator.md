---
title: "PDF Service Generator"
description: "This article explains how to generate PDF documents using the TagoIO PDF service generator by making an HTTP POST request and receiving a base64-encoded PDF. It documents the endpoint, required headers, request body fields, and size limitations."
tags: ["tagoio"]
---

Learn how to create PDF documents using the TagoIO PDF service generator. Make an HTTP POST request to the PDF service endpoint and the response will be a base64-encoded PDF. The base64 response can be sent by an Analysis or saved in Files. See the Analysis and Files documentation for examples on sending or saving the response ([Analysis](link-to-analysis), [Files](link-to-files)).

## Notes
- You can generate a PDF with HTML size up to 256 KB.
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

Learn how to get your Analysis token: [Analysis token](link-to-analysis-token).

## Body Description
| KEY | TYPE | REQUIRED |
|-----|------|----------|
| html | string | yes |

- html: The HTML string used to render the PDF. Ensure the total HTML payload does not exceed 256 KB.

## Response
- The response body will contain the generated PDF as a base64-encoded string. You can decode and save it as a PDF file, or use Analysis to send it via email and Files to store it.

## Related documentation
- Analysis: [Analysis](link-to-analysis)
- Files: [Files](link-to-files)
- Analysis token: [Analysis token](link-to-analysis-token)