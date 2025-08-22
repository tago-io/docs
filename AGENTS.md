# AGENTS.md - Documentation Scraping Knowledge Base

For local automation and maintenance scripts, see ./infra/AGENTS.md (the infra folder is ignored by GitHub and used only for local tooling and reports).

## Project Overview
Scrape and migrate TagoIO documentation from https://help.tago.io/portal/en/kb to Docusaurus, storing all assets locally and maintaining working internal links and sidebars.

## Current Repository Status (8/22/2025)
- Docusaurus site configured and running
  - Node >= 18 required
  - Root scripts: npm run start | build | serve | typecheck
- Documentation coverage in repo
  - tagoio: 246 markdown files
  - tagorun: 4 markdown files
  - tagodeploy: 3 markdown files
  - tagocore: 4 markdown files
  - Total: 257 markdown files
- Local images: 439 under static/docs_imagem/* (plus a few under static/img/docs)
- Sidebars fully wired in sidebars.ts
- URL mapping utilities present for converting help.tago.io links to local docs paths

## Site Structure Analysis (Source Site)
Main categories at help.tago.io:
1. TagoIO – https://help.tago.io/portal/en/kb/tagoio (219 articles, 21 sections)
2. TagoRUN – https://help.tago.io/portal/en/kb/tagorun (24 articles, 5 sections)
3. TagoDeploy – https://help.tago.io/portal/en/kb/tago-deploy (1 article)
4. TagoCore – https://help.tago.io/portal/en/kb/tagocore (3 articles)

TagoIO key sections and their mappings exist locally (Devices, Dashboards, Widgets, Actions, Analysis, Entities, Integration, Profiles, Services, Files, Notifications, Billing, API, Payload Parser, My Account, Tutorials, SDK, Support, Compliance). See sidebars.ts for the full tree.

## Technical Implementation Details

### Automation & Scripts (all under ./infra)
- Content fetching
  - fetch_original_markdown.js – Fetch original articles via Jina Reader; saves to infra/original_markdown/
  - scripts/fetch-articles.ts – Article discovery/fetch (TypeScript variant)
- Link and content maintenance
  - replace-help-links.js – Rewrites external help.tago.io links to local routes using mapping
  - audit-internal-links.js – Finds broken internal links
  - audit-and-fix-links.js – Attempts automated fixes for broken links
  - fix-internal-links.js – Deterministic normalization of internal links
  - comprehensive-mdx-fix.js – Batch MD/MDX cleanup
  - fix-remaining-mdx-errors.js – Final pass for build-breaking issues
  - fix-build-errors.js – Focused remediation for build failures
- Images and assets
  - images_download_list.json, external_images.json – Inventory of remote images
  - download_missing_images_*.sh – Bulk downloader for missing images
  - scripts/optimize-images.js – Image optimization
  - deduplicate-images.js, detect-duplicates.js – Image dedup; results in deduplication-results-*.json
  - duplicate-analysis-*.json – Reports for potential duplicates
- Mappings and data
  - url-mapping-solution.js – Functions to convert help.tago.io URLs to local paths
  - redirect-mappings.json, url-mappings.json – Mapping sources (root)
  - map_old2new.json, tagoio-sections.json – Additional mapping/structure helpers
  - articles-data.json, processed-articles.json, failed-articles.json – Processing logs
- Other utilities
  - scripts/process-articles.ts – End-to-end content processing
  - scripts/sync_missing_content.py – Sync missing content
  - merge_with_lmstudio.mjs – Assisted merge flow
  - README.md – Usage for fetching originals

Usage pattern
- cd infra; node <script>.js (or ts-node/ts compiler where applicable)

### Browser Automation
- Playwright used for exploration and extraction when needed (see infra/scripts and dependencies)

### Image Handling Strategy
- Sources: cdn.elev.io, contacts.zoho.com, desk.zoho.com/portal/api/publicImages
- Storage: static/docs_imagem/{tagoio|tagorun|tagodeploy|tagocore}/...
- Referencing in Markdown: /docs_imagem/<section>/<filename>

### Docusaurus Integration
- Config: docusaurus.config.ts
- Sidebars: sidebars.ts
- Root scripts
  - npm run start – local dev
  - npm run build – static build
  - npm run serve – serve built site
  - npm run typecheck – TS typecheck

## Content Extraction Challenges
- Complex DOM structure with dynamic loading
- Mixed content (text, images, code, videos)
- Need for selective image filtering vs UI icons
- Consistent internal linking across hundreds of pages

## What Works Well
- Programmatic mapping of URLs to local routes
- Local image storage and link rewriting
- Sidebars structure mirroring original taxonomy
- Batch link audits and automated fix passes

## Success Metrics (current)
- 257 docs present across all sections
- 439 local images
- Sidebars fully wired and navigable
- Build-ready structure with local images and internal links

## Standard Workflows
- Fetch original articles (for parity checks)
  - cd infra; node fetch_original_markdown.js [--test]
- Rewrite external links to local
  - cd infra; node replace-help-links.js
- Audit links
  - cd infra; node audit-internal-links.js
  - cd infra; node audit-and-fix-links.js
- Fix build and MDX issues
  - cd infra; node comprehensive-mdx-fix.js
  - cd infra; node fix-remaining-mdx-errors.js
  - cd infra; node fix-build-errors.js
- Optimize and deduplicate images
  - cd infra; node scripts/optimize-images.js
  - cd infra; node deduplicate-images.js
  - Review reports: deduplication-results-*.json, duplicate-analysis-*.json
- Run the site
  - npm run start | npm run build | npm run serve

## Backlog / Next Steps
- Normalize residual external image references and ensure all are local
- Consolidate image naming and consider moving long-term to static/img/docs with consistent naming
- Continue running link audits after bulk edits
- Add/standardize front matter (title/description/tags) across all pages
- Create redirect metadata for legacy help.tago.io links if needed (Docusaurus redirects)
- Periodic content parity checks against infra/original_markdown

## Comparison & QA Notes
- original_markdown contains fetched source content for reference
- Use processed-articles.json and failed-articles.json to identify outliers
- Use articles-summary.md (infra) and audit reports to guide manual review

## Earlier Plan (Kept for Reference)
- One-article-at-a-time high-quality conversion strategy proved reliable
- Local image storage and link rewriting are essential for stable builds
- Preserve internal linking structure and taxonomy for familiarity
