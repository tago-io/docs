# TagoIO Documentation (Docusaurus)

Docusaurus-based documentation site for TagoIO. Content originates from https://help.tago.io/portal/en/kb and is converted to Markdown with local images and working internal links.

## Quick Start

Requirements
- Node.js >= 18

Install and run
```bash
npm ci
npm run start
```
- Starts the dev server (default: http://localhost:3000)

Build and preview
```bash
npm run build
npm run serve
```

Typecheck
```bash
npm run typecheck
```

## Project Structure

- docs/ – Markdown content organized by product areas
  - tagoio/
  - tagorun/
  - tagodeploy/
  - tagocore/
- static/ – Static assets
  - docs_imagem/ – Local images used by docs (organized by section)
  - img/ – Site images (logos, etc.)
- src/ – Docusaurus site code (theme/customizations)
- blog/ – Optional blog posts
- sidebars.ts – Sidebars and navigation tree
- docusaurus.config.ts – Docusaurus configuration
- .github/workflows/deploy.yml – GitHub Pages deployment workflow
- infra/ – Local-only automation and maintenance scripts (ignored by GitHub)

## Local Automation (infra)
All scraping, mapping, link auditing, and image tools live in ./infra. These files are not tracked in Git and are intended for local maintenance.
- See ./infra/AGENTS.md for the complete list of scripts, workflows, and reports

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
- Store images under static/docs_imagem/<section>/
- Reference in Markdown using absolute paths, for example:
  - `![Alt text](/docs_imagem/tagoio/example.png)`

Links
- Prefer relative links between docs in the same area (e.g., `../services/services-overview`)
- Cross-area links should follow the docs path (e.g., `/tagoio/widgets/widgets-overview`)

## URL Mappings (maintainers)
- redirect-mappings.json and url-mappings.json provide mapping sources for converting old help.tago.io URLs to the new docs paths
- url-mapping-solution.js contains mapping helpers (search, stats, conversions)
- Additional automation lives under infra (see ./infra/AGENTS.md)

## Deployment

GitHub Actions deploys to GitHub Pages on pushes to main
- Workflow: .github/workflows/deploy.yml
- Steps: install → build → upload Pages artifact → deploy

Base URL
- docusaurus.config.ts currently sets baseUrl to "/" for local development
- If deploying under a project subpath (e.g., https://<org>.github.io/<repo>/), set baseUrl to "/<repo>/" before building and deploying

## NPM Scripts
- npm run start – Start dev server
- npm run build – Build static site to build/
- npm run serve – Serve the static build
- npm run clear – Clear Docusaurus cache
- npm run write-translations – Extract strings for i18n
- npm run write-heading-ids – Generate stable heading IDs
- npm run swizzle – Customize theme components
- npm run typecheck – TypeScript typecheck

## Contributing
- Add or update Markdown files under docs/
- Keep images local and referenced by absolute paths under /docs_imagem
- Validate changes locally: npm run typecheck and npm run build
- Do not commit files from infra/ (ignored by Git)

