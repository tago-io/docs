# AGENTS.md - Documentation Scraping Knowledge Base

For local automation and maintenance scripts, see ./infra/AGENTS.md (the infra folder is ignored by GitHub and used only for local tooling and reports).

## Project Overview

Scrape and migrate TagoIO documentation from https://help.tago.io/portal/en/kb to Docusaurus, storing all assets locally and maintaining working internal links and sidebars.

## Domains & Deployments (Updated)

- Production domains
  - docs.tago.io – main documentation site (Docusaurus via CloudFront/S3)
  - changelog.tago.io – redirects to /changelog on docs.tago.io
  - api.docs.tago.io – redirects to /docs/api/tagoio-api on docs.tago.io
- Beta domain
  - docs.beta.tago.io – GitHub Pages environment for not‑ready docs
- Indexing policy
  - Beta: blocked from indexing (robots.txt Disallow all + meta robots noindex)
  - Production: controlled by static/robots.txt in repo root under static/
    - Note: current static/robots.txt disallows /changelog; adjust as desired

## Current Repository Status

- Docusaurus site configured and running
  - Node >= 18 required
  - Root scripts: npm run start | build | serve | typecheck | check
- Documentation coverage in repo
  - Total: 327 markdown files across tagoio, tagocore, tagodeploy, tagotip sections
  - Changelog: extensive historical posts under changelog/
- Local images: 440 under static/docs_imagem/\* (plus site images under static/img)
- Sidebars fully wired in sidebars.ts
- URL mapping utilities present for converting help.tago.io links to local docs paths

## Site Structure Analysis (Source Site)

Main categories at help.tago.io:

1. TagoIO – https://help.tago.io/portal/en/kb/tagoio
2. TagoRUN – https://help.tago.io/portal/en/kb/tagorun
3. TagoDeploy – https://help.tago.io/portal/en/kb/tago-deploy
4. TagoCore – https://help.tago.io/portal/en/kb/tagocore

Local mapping mirrors the original taxonomy (Devices, Dashboards, Widgets, Actions, Analysis, Entities, Integration, Profiles, Services, Files, Notifications, Billing, API, Payload Parser, My Account, Tutorials, SDK, Support, Compliance). See sidebars.ts for the full tree.

## Technical Implementation Details

### Docusaurus Integration

- Config: docusaurus.config.ts (url, baseUrl, navbar, Algolia, blog as changelog)
- SITE_URL env var: overrides `url` at build time (beta uses https://docs.beta.tago.io)
- Beta builds inject meta robots noindex/nofollow automatically
- Sidebars: sidebars.ts
- MDX Components: src/theme/MDXComponents.tsx registers custom components
  - YouTube component available as `<YouTube videoId="..." />`
  - Mermaid diagrams available via `<Mermaid chart={`...`} />` (renders client-side using mermaid)

### AWS CDK Infrastructure

- CDK Stacks (split to allow individual deployments):
  - cdk/docs-cdk.ts – Docs distribution for `docs.tago.io` (serves Docusaurus from S3; no edge function)
  - cdk/redirects-cdk.ts – Redirects distribution for `help.tago.io` + `changelog.tago.io` + `api.docs.tago.io` (edge redirects only)
  - Automatic deployment of built Docusaurus site to S3 with cache invalidation (docs distribution)
- Custom certificates (us-east-1) — provided via environment variables:
  - `DOCS_CERT_ARN`: ACM cert ARN for `docs.tago.io` (CN `docs.tago.io`).
  - `REDIRECTS_CERT_ARN`: ACM cert ARN for `help.tago.io` (CN) with SAN `changelog.tago.io`, `api.docs.tago.io`.
  - Set these in GitHub Actions as secrets and export to env for the CDK step.
- Redirect Function: cdk/redirect-function.js - CloudFront edge function (attached to the redirects distribution)
  - Maps 250+ legacy `help.tago.io/portal/en/kb/...` URLs to new documentation paths under docs.tago.io
  - Handles community topics: `/portal/en/community/topic/{topic}` → `https://community.tago.io/t/{topic}`
  - Root of help: `/` → `https://support.tago.io`
  - Fallbacks:
    - Any `/portal/en/kb*` not explicitly mapped → `https://docs.tago.io`
    - Any other help path → `https://support.tago.io{path}[?query]` (preserves path and query)
  - Handles `Host: changelog.tago.io` by redirecting to `https://docs.tago.io/changelog`
  - Handles `Host: api.docs.tago.io` by redirecting to `https://docs.tago.io/docs/api/sidebar/tagoio-api-intro`
- CDK Scripts (package.json):
  - `npm run cdk:build` - Compile CDK TypeScript
  - `npm run cdk:watch` - Watch mode for CDK development
  - `npm run cdk:deploy:docs` - Deploy only docs stack (cdk/docs-cdk.ts)
  - `npm run cdk:deploy:redirects` - Deploy only redirects stack (cdk/redirects-cdk.ts)
  - `npm run cdk:deploy` - Deploy both stacks sequentially
- CDK Dependencies (devDependencies):
  - aws-cdk-lib: AWS CDK library v2.149.0
  - constructs: CDK constructs framework
  - source-map-support: Enhanced error reporting

### Automation & Scripts (local-only under ./infra)

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
  - download*missing_images*\*.sh – Bulk downloader for missing images
  - scripts/optimize-images.js – Image optimization
  - deduplicate-images.js, detect-duplicates.js – Image dedup; results in deduplication-results-\*.json
  - duplicate-analysis-\*.json – Reports for potential duplicates
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

## Success Metrics (snapshot)

- 250+ docs present across all sections
- 400+ local images
- Sidebars fully wired and navigable
- Build-ready structure with local images and internal links

## Standard Workflows

### CI/CD

- Beta (GitHub Pages)
  - Workflow: `.github/workflows/beta-deploy.yml`
  - Trigger: push to `main`
  - Build with `SITE_URL=https://docs.beta.tago.io`, write `CNAME` and `robots.txt` (Disallow all), deploy to Pages
- Production (AWS)
  - Workflow: `.github/workflows/production-deploy.yml`
  - Trigger: GitHub Release published (tags)
  - Uses GitHub OIDC to assume IAM role (provided via secret):
    - `AWS_ROLE_TO_ASSUME` → e.g., `arn:aws:iam::154399404768:role/github-actions-deploy-role` (region: us-east-1)
  - Runs `npm run cdk:deploy` to push to S3/CloudFront
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
  - Review reports: deduplication-results-_.json, duplicate-analysis-_.json
- Run the site
  - npm run start | npm run build | npm run serve
- Deploy infrastructure
  - npm run cdk:deploy (builds docs + deploys to AWS)
  - Ensure ACM validations complete for both distributions (docs cert, redirects cert)

## Code style & OXC rules (for agents)

- Always run OXC tools (oxlint + oxfmt) before committing
  - `npm run check` to verify; `npm run lint:fix && npm run fmt` to auto-fix
- Formatting (oxfmt)
  - Print width: 120 characters
  - Indentation: 2 spaces
  - Line endings: LF
  - Strings: double quotes
  - Semicolons: always
  - Trailing commas: ES5 style
  - Bracket spacing: true
  - Arrow parentheses: always
  - Ensure a final newline at EOF
- Linting (oxlint)
  - Plugins: react, typescript, import
  - Categories: correctness (error), suspicious (warn)
- Scope
  - OXC tools process all files except: node_modules, build, .docusaurus, infra, cdk, cdk.out, .crush, .claude, .mdx, lib
  - Do not edit infra/ in PRs (local-only automation not tracked by GitHub)
- TypeScript/React
  - Prefer explicit types; avoid implicit any
  - Prefer const over let when possible
  - Use arrow functions for React components
  - Use the @site alias for local imports (e.g., `@site/src/components/youtube`)
- MDX/Docs
  - Images must be local under static/docs_imagem/<section>/ and referenced with absolute paths `/docs_imagem/...`
  - YouTube embeds must use `<YouTube videoId="..." />`
  - Mermaid diagrams must use the `<Mermaid />` component: `<Mermaid chart={`graph LR; A-->B`} />`
    - Pass the diagram definition as a template literal wrapped in `{``}` to preserve newlines
    - Supported examples: `graph LR`, `sequenceDiagram`, etc.
  - Keep headings in Markdown; avoid inline HTML unless necessary
- Validation order
  1. npm run lint:fix && npm run fmt
  2. npm run typecheck
  3. npm run build

## Runtime & commands etiquette (for agents)

- Never run `npm run start` – the dev host usually runs it; assume the dev server is already running
- Avoid starting additional dev servers or background processes
- Prefer `npm run typecheck` and `npm run build` for validation
- If a preview is needed, coordinate to use an existing dev server; do not start new ones yourself

OXC configuration reference

- Linter config: `.oxlintrc.json` (see file for plugins, categories, ignorePatterns)
- Formatter config: `.oxfmtrc.json` (see file for printWidth, semi, quotes, etc.)

## How to write a new documentation article (for agents)

- Pick the right location
  - Choose the product area and folder under docs/: tagoio/, tagorun/, tagodeploy/, or tagocore/
  - Use existing subfolders (e.g., widgets/, dashboards/, devices/, etc.) to match taxonomy
- Name the file
  - Use kebab-case for filenames, e.g., `my-new-topic.md`
  - Keep names concise and descriptive; avoid special characters
- Add front matter and title
  - Required front matter keys: title, description, keywords, tags
  - H1 at the top should match the title; keep one H1 per page
  - description: under 160 characters, concise summary of the page's purpose
  - keywords: inline YAML array with 3-6 terms; always include the product name (`tagoio`, `tagocore`, `tagodeploy`, or `tagotip`) and `iot`, plus topic-specific terms
  - Example:

    ```markdown
    ---
    title: "My New Topic"
    description: "Short summary of what this page covers."
    keywords: [tagoio, iot, devices, mqtt, integration]
    tags: ["tagoio"]
    ---

    # My New Topic
    ```

- Images
  - Save images under static/docs_imagem/<section>/ (e.g., static/docs_imagem/tagoio/)
  - Reference with absolute paths in Markdown: `![Alt text](/docs_imagem/tagoio/my-image.png)`
  - Use meaningful alt text
- Links
  - Prefer relative links within the same area: `../services/services-overview`
  - Cross-area links should use absolute docs paths: `/tagoio/widgets/widgets-overview`
  - If replacing a legacy help.tago.io article, add a mapping entry in url-mappings.json (and redirects if needed)
- Embeds and code
  - YouTube: `<YouTube videoId="XXXXXXXXXXX" />`
  - Mermaid: `<Mermaid chart={`graph LR\n A[Start] --> B{Choice} \n B -->|Yes| C[Do thing] \n B -->|No| D[Stop]`} />`
  - Use fenced code blocks with language hints for syntax highlighting
- Sidebars
  - Add the new page path (without .md) to sidebars.ts in the correct category
  - Keep ordering consistent with existing items
- Quality and formatting
  - Follow OXC rules: 2-space indentation, LF line endings, double quotes, final newline
  - Keep headings simple; avoid HTML when Markdown suffices
- Validation steps
  1. npm run lint:fix && npm run fmt
  2. npm run typecheck
  3. npm run build
  - Never run `npm run start` (the dev host usually runs it)

## AI & SEO Enhancements

### Frontmatter requirements

Every doc page must have these frontmatter fields:

- `title` - page title
- `description` - under 160 characters, summarizes the page (used for `<meta name="description">`, OG images, and llms.txt)
- `keywords` - inline YAML array, 3-6 terms: always include the product name (`tagoio`, `tagocore`, `tagodeploy`, or `tagotip`) and `iot`, plus topic-specific terms (renders as `<meta name="keywords">`)
- `tags` - array with product name for Docusaurus tagging

### Schema.org structured data (TechArticle JSON-LD)

- Swizzled component: `src/theme/DocItem/Metadata/index.tsx`
- Adds `TechArticle` JSON-LD to every doc page alongside the existing `BreadcrumbList`
- Uses `useDoc()` for metadata and `useDocusaurusContext()` for site URL
- Fields: headline, description, url, dateModified, publisher (TagoIO), mainEntityOfPage
- If modifying this component, run `npm run lint:fix && npm run fmt` and `npm run build` to verify

### robots.txt

- `static/robots.txt` includes `Llms-Txt: https://docs.tago.io/llms.txt` for AI crawler discovery
- Keep this directive when editing robots.txt

### llms.txt

- Generated at build time by `docusaurus-plugin-llms`
- Quality depends on every page having a good `description` frontmatter
- Config in `docusaurus.config.ts` under the `docusaurus-plugin-llms` plugin entry

### Auto-synced files (no frontmatter)

- `docs/tagotip/specification/tagotip-specification.md` and `docs/tagotip/specification/tagotips-specification.md` are fetched from GitHub during build (`scripts/sync-tagotip.mjs`) and do not have managed frontmatter

## Backlog / Next Steps

- Normalize residual external image references and ensure all are local
- Consolidate image naming and consider moving long-term to static/img/docs with consistent naming
- Continue running link audits after bulk edits
- Add frontmatter to auto-synced TagoTiP spec files (requires changes to sync-tagotip.mjs)
- Create redirect metadata for legacy help.tago.io links if needed (Docusaurus redirects)
- Periodic content parity checks against infra/original_markdown

## Comparison & QA Notes

- original_markdown contains fetched source content for reference
- Use processed-articles.json and failed-articles.json to identify outliers
- Use articles-summary.md (infra) and audit reports to guide manual review
