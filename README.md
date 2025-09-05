# TagoIO Documentation (Docusaurus)

Docusaurus-based documentation site for TagoIO. Content is migrated from https://help.tago.io/portal/en/kb and stored as Markdown with local images and working internal links.

## Quick Start

Requirements
- Node.js >= 18

Install and run
```bash
npm ci
npm run start
```
- Dev server: http://localhost:3000

Build and preview
```bash
npm run build
npm run serve
```

Typecheck
```bash
npm run typecheck
```

Code quality (Biome)
```bash
npm run biome       # check
npm run biome:lint  # lint only
npm run biome:format # format only
npm run biome:fix   # lint + format (write)
```

## Project Structure

- docs/ – Markdown content organized by product areas
  - tagoio/
  - tagorun/
  - tagodeploy/
  - tagocore/
- static/ – Static assets
  - docs_imagem/ – Local images used by docs (organized by section)
  - img/ – Site images (logos, social cards, icons)
- changelog/ – Changelog posts (surfaced via the Blog plugin at /changelog)
- cdk/ – AWS CDK infrastructure for static site hosting
  - cdk.ts – CDK stack definition (S3 + CloudFront + redirects)
  - redirect-function.js – CloudFront edge function for URL mappings
- src/ – Docusaurus site code
  - components/
    - youtube.tsx – YouTube MDX component wrapper
  - theme/
    - MDXComponents.tsx – Registers custom MDX components (YouTube, Mermaid)
  - pages/ – Home and custom pages
- sidebars.ts – Sidebars and navigation tree
- docusaurus.config.ts – Docusaurus configuration
- .github/workflows/deploy.yml – GitHub Pages deployment workflow
- redirect-mappings.json / url-mappings.json – URL mapping sources

## Authoring Guidelines

Front matter
```markdown
---
title: "Page Title"
description: "Short description for SEO and previews"
tags: ["tagoio"]
---
```

Images
- Store under static/docs_imagem/<section>/
- Reference using absolute paths:
  - `![Alt text](/docs_imagem/tagoio/example.png)`

Links
- Prefer relative links within the same area (e.g., `../services/services-overview`)
- Cross-area links should use docs paths (e.g., `/tagoio/widgets/widgets-overview`)

Embeds
- YouTube: use the YouTube component registered in MDX:
  - `<YouTube videoId="XXXXXXXXXXX" />`
- Mermaid diagrams: use the Mermaid component registered in MDX:
  - `<Mermaid chart={`graph LR\n  A[Start] --> B{Choice} \n  B -->|Yes| C[Do thing] \n  B -->|No| D[Stop]`} />`

## URL Mappings (maintainers)
- redirect-mappings.json and url-mappings.json provide mapping sources for converting legacy help.tago.io URLs to new docs paths
- Additional automation and helpers live under a local-only infra folder (see AGENTS.md)

## Deployment

### GitHub Pages (Default)
GitHub Actions deploys to GitHub Pages on pushes to main
- Workflow: .github/workflows/deploy.yml
- Steps: install → build → upload Pages artifact → deploy

### AWS Infrastructure (Alternative)
AWS CDK deployment for production hosting with custom domain and redirects
```bash
npm run cdk:deploy
```
- Creates S3 bucket for static hosting
- Sets up CloudFront distribution with custom domain support
- Configures edge redirects for legacy help.tago.io URLs
- Outputs CloudFront URL for access

CDK Commands
```bash
npm run cdk:build   # Compile CDK TypeScript
npm run cdk:watch   # Watch mode for development
npm run cdk:deploy  # Full deployment (build + deploy)
```

Site URL and base path
- docusaurus.config.ts
  - url: https://new-docs.tago-io.com
  - baseUrl: "/"
- If deploying under a subpath (https://<org>.github.io/<repo>/), set baseUrl to "/<repo>/" before building

Search (Algolia)
- Configured in docusaurus.config.ts
- Update appId, apiKey, and indexName as needed

## NPM Scripts
- npm run start – Start dev server
- npm run build – Build static site to build/
- npm run serve – Serve the static build
- npm run clear – Clear Docusaurus cache
- npm run write-translations – Extract strings for i18n
- npm run write-heading-ids – Generate stable heading IDs
- npm run swizzle – Customize theme components
- npm run typecheck – TypeScript typecheck
- npm run biome – Run Biome checks (lint/format)
- npm run cdk:build – Compile CDK TypeScript
- npm run cdk:watch – Watch CDK files for changes
- npm run cdk:deploy – Deploy to AWS (build docs + CDK + deploy)

## Contributing
- Add or update Markdown files under docs/
- Keep images local and referenced by absolute paths under /docs_imagem
- Validate locally: npm run typecheck, npm run biome, and npm run build
- Do not commit local automation files (infra/ is not tracked in Git)

## Troubleshooting
- MDX component not found: ensure src/theme/MDXComponents.tsx exports the component and paths use the @site alias (e.g., `@site/src/components/youtube`)
- Broken links: run link audits via local automation (see AGENTS.md) or search for the path in sidebars.ts and docs/
- Build failures from MD/MDX: normalize headings, code blocks, and links; prefer absolute image paths under /docs_imagem
