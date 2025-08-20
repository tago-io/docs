# TagoIO Documentation Project

## Project Overview
This is a Docusaurus-based documentation site for TagoIO's IoT platform ecosystem. The site provides comprehensive documentation for TagoIO Platform, TagoRUN, TagoCore, and TagoDeploy.

## Architecture
- **Framework**: Docusaurus v3.6.3
- **Language**: TypeScript
- **Styling**: CSS modules with custom CSS variables
- **Content**: Markdown-based documentation with MDX support

## Project Structure
```
docs/
├── docs/                     # Documentation content
│   ├── intro.md             # Main introduction page
│   ├── tagoio/              # TagoIO Platform docs
│   ├── tagorun/             # TagoRUN docs
│   ├── tagocore/            # TagoCore docs
│   └── tagodeploy/          # TagoDeploy docs
├── src/
│   ├── components/          # React components
│   │   └── HomepageFeatures/ # Homepage feature cards
│   ├── css/
│   │   └── custom.css       # Main styling with TagoIO theme
│   └── pages/
│       └── index.tsx        # Homepage component
├── static/
│   └── img/                 # Static assets (logos, images)
├── docusaurus.config.ts     # Main configuration
└── sidebars.ts             # Documentation navigation
```

## Key Features
- **Multi-product Documentation**: Covers TagoIO Platform, TagoRUN, TagoCore, and TagoDeploy
- **Custom Branding**: Black and white theme matching TagoIO's current branding
- **Responsive Design**: Mobile-friendly layout with proper navigation
- **Search Integration**: Built-in Docusaurus search functionality
- **External Links**: Integration with TagoIO's ecosystem (admin panel, main site, etc.)

## Configuration Files

### docusaurus.config.ts
- Site metadata and configuration
- Navigation structure
- Footer links and branding
- Theme configuration

### sidebars.ts
- Documentation navigation structure
- Organized by product (TagoIO, TagoRUN, TagoCore, TagoDeploy)

### src/css/custom.css
- TagoIO brand colors (black and white theme)
- Custom component styling
- Responsive design rules
- Dark/light mode support

## Development Commands
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy (if configured)
npm run deploy
```

## Content Organization

### TagoIO Platform (/docs/tagoio/)
- Getting Started guides
- Device management
- Dashboard creation
- API documentation
- Integration guides

### TagoRUN (/docs/tagorun/)
- Application deployment
- White-label solutions
- User management

### TagoCore (/docs/tagocore/)
- Open-source platform
- Edge computing
- Local deployments

### TagoDeploy (/docs/tagodeploy/)
- Enterprise infrastructure
- Dedicated resources
- Premium support

## Branding & Design

### Color Scheme
- **Primary**: Black (#000000)
- **Secondary**: White (#ffffff)
- **Accent**: Orange (#ff6b35) and Green (#00c851)
- **Gray tones**: Various shades for backgrounds and text

### Typography
- **Font Family**: 'Inter' for body text, 'JetBrains Mono' for code
- **Font Sizes**: Responsive scaling with proper hierarchy

### Components
- **Hero Section**: Black gradient background with white text
- **Feature Cards**: Clean white cards with black accents
- **Navigation**: Black theme with hover effects

## External Integrations
- **Main Site**: https://tago.io
- **Admin Panel**: https://admin.tago.io
- **Help Center**: https://help.tago.io
- **API Docs**: https://api.docs.tago.io
- **Community**: https://help.tago.io/portal/en/community
- **GitHub**: https://github.com/tago-io

## Current Status
- ✅ Basic site structure implemented
- ✅ TagoIO branding applied (black/white theme)
- ✅ Homepage with feature cards
- ✅ Navigation structure configured
- ✅ Footer with external links
- ⚠️ Content migration partially complete
- ❌ Complete documentation content needed
- ❌ Search optimization
- ❌ SEO meta tags
- ❌ Analytics integration

## Next Steps
1. **Content Migration**: Complete migration of all documentation from help.tago.io
2. **Content Review**: Ensure all content is up-to-date and accurate
3. **Search Optimization**: Configure and test search functionality
4. **SEO**: Add proper meta tags, descriptions, and structured data
5. **Analytics**: Integrate tracking (Google Analytics, etc.)
6. **Performance**: Optimize images and loading times
7. **Testing**: Cross-browser and device testing
8. **Deployment**: Set up CI/CD pipeline for automatic deployments

## Development Notes
- The site uses Docusaurus v3 with TypeScript configuration
- Custom CSS uses CSS variables for consistent theming
- Component structure follows Docusaurus best practices
- All external links open in new tabs for better UX
- Responsive design implemented for mobile devices

## Maintenance
- Regularly update Docusaurus and dependencies
- Monitor external link validity
- Keep content synchronized with product updates
- Test responsive design on various devices
- Maintain consistent branding across all pages