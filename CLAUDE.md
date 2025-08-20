# TagoIO Documentation Project

## Overview
Docusaurus-based documentation for the TagoIO ecosystem:
- TagoIO Platform (cloud)
- TagoRUN (white-label apps)
- TagoCore (edge/local)
- TagoDeploy (enterprise)

## Stack
- Docusaurus v3.8.1
- TypeScript + React 19
- Markdown/MDX content
- CSS modules + custom theme variables

## Repository Layout
```
/docs                 # Documentation content
/src                  # Components, pages, styles
/static               # Static assets (images)
docusaurus.config.ts  # Site configuration
sidebars.ts           # Sidebar/navigation
```

## Scripts
```bash
npm install                 # Install dependencies
npm start                   # Start dev server (0.0.0.0)
npm run build               # Build production site
npm run serve               # Preview production build
npm run clear               # Clear cache/artifacts
npm run swizzle             # Customize theme/components
npm run write-translations  # Export i18n strings
npm run write-heading-ids   # Generate stable heading IDs
npm run typecheck           # TypeScript type-check
```

## Content Conventions
- Organize by product under `docs/` (tagoio, tagorun, tagocore, tagodeploy)
- Prefer `.md` for plain content and `.mdx` when you need React/JSX
- Store images in `static/img/` and reference via `/img/...`
- Keep sidebars in sync via `sidebars.ts`

## Branding
- Black/white theme with TagoIO accent colors
- Responsive layout; dark/light mode supported

## External Links
- Main site: https://tago.io
- Admin: https://admin.tago.io
- Help Center: https://help.tago.io
- API Docs: https://api.docs.tago.io
- Community: https://help.tago.io/portal/en/community
- GitHub: https://github.com/tago-io

## Maintenance Checklist
- Keep dependencies updated (Docusaurus and TypeScript)
- Validate builds with `npm run build` and `npm run typecheck`
- Verify external links and images regularly
- Align docs with product updates and UI changes

## Roadmap
- Complete content migration from legacy sources
- Improve search relevance and SEO metadata
- Add analytics (e.g., GA4) if desired
- Optimize images and performance
