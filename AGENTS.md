# AGENTS.md - Documentation Scraping Knowledge Base

## Project Overview
Scraping TagoIO documentation from https://help.tago.io/portal/en/kb and converting it to Docusaurus format with local images.

## Site Structure Analysis

### Main Categories Discovered
1. **TagoIO** - https://help.tago.io/portal/en/kb/tagoio
   - 219 articles, 21 sections
   - Most comprehensive section
   
2. **TagoRUN** - https://help.tago.io/portal/en/kb/tagorun  
   - 24 articles, 5 sections
   
3. **TagoDeploy** - https://help.tago.io/portal/en/kb/tago-deploy
   - 1 article
   
4. **TagoCore** - https://help.tago.io/portal/en/kb/tagocore
   - 3 articles

### TagoIO Section Breakdown
Main sections identified with their URLs:
- **Getting Started** - https://help.tago.io/portal/en/kb/articles/1-getting-started ✅ COMPLETED
- **Devices** - https://help.tago.io/portal/en/kb/articles/3-devices
- **Dashboards** - https://help.tago.io/portal/en/kb/articles/15-dashboard-overview  
- **Widgets** - https://help.tago.io/portal/en/kb/tagoio/9-widgets (65 articles, 35 sections)
- **Actions** - https://help.tago.io/portal/en/kb/articles/30-actions
- **Analysis** - https://help.tago.io/portal/en/kb/articles/29-analysis-overview
- **Entities** - https://help.tago.io/portal/en/kb/articles/entities
- **Integration** - https://help.tago.io/portal/en/kb/tagoio/integration (21 articles, 2 sections)
- **Profiles** - https://help.tago.io/portal/en/kb/articles/198-profiles
- **Services** - https://help.tago.io/portal/en/kb/articles/115-services-overview
- **Add-Ons** - https://help.tago.io/portal/en/kb/articles/control-tower
- **Files** - https://help.tago.io/portal/en/kb/articles/127-files
- **Notifications** - https://help.tago.io/portal/en/kb/articles/11-notification
- **Billing** - https://help.tago.io/portal/en/kb/articles/114-account-plans
- **API** - https://help.tago.io/portal/en/kb/articles/31-api-overview
- **Payload Parser** - https://help.tago.io/portal/en/kb/articles/147-payload-parser
- **My Account** - https://help.tago.io/portal/en/kb/articles/211-editing-accounts-details
- **Tutorials** - https://help.tago.io/portal/en/kb/articles/236-abs-telemetry
- **SDK** - https://help.tago.io/portal/en/kb/articles/python-sdk
- **Support** - https://help.tago.io/portal/en/kb/articles/ticket-severity-options
- **Compliance** - https://help.tago.io/portal/en/kb/articles/security-and-compliance

## Technical Implementation Details

### Playwright Browser Automation
- Successfully navigated help.tago.io using playwright_browser_navigate
- Used playwright_browser_snapshot for page analysis
- Extracted content using playwright_browser_evaluate with JavaScript
- Site uses complex nested structure with dynamic content loading

### Image Handling Strategy
Images found use CDN URLs from:
- `https://cdn.elev.io/file/uploads/...` (primary image source)
- `https://contacts.zoho.com/file/...` (secondary source)
- `https://desk.zoho.com/portal/api/publicImages/...` (third source)

**Image Processing Workflow:**
1. Extract all `img` elements from main content area
2. Filter for relevant images (exclude icons, avatars, etc.)
3. Download images using `curl` to `static/img/docs/`
4. Rename with descriptive names: `{section-name}-{index}.{ext}`
5. Update markdown to reference local paths: `/img/docs/{filename}`

### Content Extraction Challenges
- **Complex DOM Structure**: Site uses nested divs with generic class names
- **Dynamic Loading**: Some content loads after initial page render
- **Mixed Content**: Articles contain text, images, videos, code blocks, and links
- **Navigation Elements**: Need to filter out sidebars, footers, and related articles

### Successful Content Processing (Getting Started Example)
```javascript
// JavaScript evaluation strategy that worked:
const allImages = document.querySelectorAll('img');
// Extract image sources and metadata
// Filter for content images vs UI elements
// Process and clean content structure
```

**Content Structure Identified:**
- Main title (h1)
- Step-by-step sections with blockquotes
- Code blocks for API examples  
- Images with GIFs and PNGs
- Internal and external links
- YouTube video embeds

### File Organization
**Directory Structure Created:**
```
docs/
├── tagoio/
│   ├── index.md (overview)
│   └── getting-started.md ✅
├── tagorun/
├── tagodeploy/
└── tagocore/

static/img/docs/
├── getting-started-1.gif
├── getting-started-2.gif
├── getting-started-3.gif
├── getting-started-4.png
├── getting-started-5.png
├── getting-started-6.png
├── getting-started-7.png
├── getting-started-8.gif
└── getting-started-9.png
```

### Docusaurus Integration
- **Sidebar Configuration**: `sidebars.ts` already has comprehensive structure prepared
- **Image References**: Updated to use `/img/docs/` path for local images
- **Markdown Format**: Clean conversion with proper headers, code blocks, and links
- **Internal Links**: Preserved references to other documentation sections

## Lessons Learned

### What Works
1. **Playwright Browser Navigation**: Reliable for exploring site structure
2. **JavaScript Evaluation**: Effective for extracting content and image URLs
3. **Curl Downloads**: Fast and reliable for image downloading
4. **Manual Content Conversion**: Ensures quality and proper formatting

### Challenges Encountered  
1. **Scale**: 247+ articles total is massive undertaking
2. **Content Complexity**: Each article has unique structure and multiple images
3. **Dynamic Content**: Some elements load asynchronously
4. **Image Filtering**: Need to distinguish content images from UI elements

### Best Practices Established
1. **One Article at a Time**: Manual processing ensures quality control
2. **Image Organization**: Consistent naming scheme with section prefixes
3. **Local Image Storage**: All images downloaded and referenced locally
4. **Clean Markdown**: Remove navigation elements, focus on content
5. **Preserve Links**: Maintain both internal and external link references

## Tools and Commands Used

### Playwright Browser Automation
```bash
playwright_browser_navigate("https://help.tago.io/portal/en/kb")
playwright_browser_snapshot()
playwright_browser_evaluate("() => { /* JavaScript */ }")
```

### Image Download Commands
```bash
curl -o "static/img/docs/filename.ext" "https://cdn.elev.io/file/uploads/..."
```

### File Operations
```bash
mkdir -p docs/tagoio static/img/docs
find docs -type f | head -20
```

## Success Metrics
- ✅ 1 complete article processed (Getting Started)
- ✅ 9 images downloaded and integrated  
- ✅ Proper Docusaurus structure established
- ✅ Local image references working
- ✅ Clean markdown format achieved

## Next Article Processing Template
For each new article:
1. Navigate to article URL using playwright
2. Extract content structure and images using JavaScript evaluation
3. Download all content images to `static/img/docs/`
4. Convert content to clean markdown
5. Update image references to local paths
6. Create/update corresponding documentation file
7. Test in Docusaurus environment