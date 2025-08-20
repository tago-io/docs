# TagoIO Documentation

A Docusaurus v3 site (TypeScript) for the TagoIO ecosystem: TagoIO Platform, TagoRUN, TagoCore, and TagoDeploy.

## Tech Stack
- Docusaurus 3 (TypeScript)
- React 19
- Markdown/MDX content

## Requirements
- Node.js >= 18
- npm (recommended)

## Quick Start
```bash
# Install dependencies
npm install

# Start dev server
npm start

# Build for production
npm run build

# Preview production build
npm run serve

# Clear cache/artifacts
npm run clear

# Type-check the project
npm run typecheck
```

## Project Structure
```
.
├── docs/                    # Documentation content (Markdown/MDX)
│   ├── intro.md
│   ├── tagoio/
│   ├── tagorun/
│   ├── tagocore/
│   └── tagodeploy/
├── src/                     # Site source (pages, components, styles)
│   ├── components/
│   ├── css/
│   └── pages/
├── static/                  # Static assets (images, files)
├── docusaurus.config.ts     # Site configuration
├── sidebars.ts              # Sidebar configuration
└── package.json             # Scripts and dependencies
```

## Editing Content
- Add or edit documentation under `docs/`
- Use `.md` or `.mdx` for rich content
- Place images in `static/img/` and reference them with `/img/...`

## Development Notes
- Follow existing styling and component patterns under `src/`
- Keep navigation in sync via `sidebars.ts`
- Use `npm run typecheck` before committing

## Deployment
- Production builds are generated in `build/`
- A GitHub Actions workflow exists at `.github/workflows/deploy.yml` for automated deployments (if configured)

## Useful Docusaurus Commands
```bash
# Component/theme customization
npm run swizzle

# Generate i18n translation files
npm run write-translations

# Generate stable heading IDs
npm run write-heading-ids
```

## Contributing
- Create a feature branch, make changes, and open a PR
- Ensure `npm run typecheck` and `npm run build` complete without errors
- Keep docs accurate and consistent with product behavior
