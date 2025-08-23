import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "TagoIO Docs",
  tagline: "Easy IoT. Powerful Outcomes.",
  favicon: "img/tagoio-favicon.png",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://new-docs.tago-io.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/", // Changed from '/docs/' for local development

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "tago-io", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/tago-io/docs/tree/main/",
        },
        blog: {
          path: "changelog",
          routeBasePath: "changelog",
          showReadingTime: false,
          blogTitle: "Changelog",
          blogDescription: "Changelog for TagoIO, TagoCore, and TagoDeploy",
          blogSidebarCount: "ALL",
          blogSidebarTitle: "Recent Changes",
          blogListComponent: "@site/src/pages/changelog/index.tsx",
          postsPerPage: "ALL",
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
            title: "TagoIO Changelog",
            description: "Latest changelog and updates",
          },
          processBlogPosts: async ({ blogPosts }) =>
            blogPosts.map((post) => ({
              ...post,
              metadata: {
                ...post.metadata,
                frontMatter: {
                  ...post.metadata.frontMatter,
                  unlisted: true,
                },
              },
            })),
          editUrl: "https://github.com/tago-io/docs/tree/main/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "ignore",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
  ],

  themeConfig: {
    image: "img/tago-social-card.png",
    algolia: {
      appId: "8HPN5WF45N",
      apiKey: "12cc282e7dcb99632185962ad2624a49",
      indexName: "TagoIO Docs",
      contextualSearch: true,
      searchPagePath: "search",
    },
    navbar: {
      title: "Docs",
      logo: {
        alt: "TagoIO Logo",
        src: "img/tagoio-official-logo.svg",
        width: 110,
        height: 26,
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tagoioSidebar",
          position: "left",
          label: "TagoIO Platform",
        },
        {
          type: "docSidebar",
          sidebarId: "tagorunSidebar",
          position: "left",
          label: "TagoRUN",
        },
        {
          type: "docSidebar",
          sidebarId: "tagodeploySidebar",
          position: "left",
          label: "TagoDeploy",
        },
        {
          type: "docSidebar",
          sidebarId: "tagocoreSidebar",
          position: "left",
          label: "TagoCore",
        },
        { to: "/changelog", label: "Changelog", position: "left" },
        {
          type: "html",
          position: "right",
          value:
            '<div class="navbar-status-badge" style="display:inline-flex;align-items:center;height:var(--ifm-navbar-height)"><iframe class="status-badge--light" src="https://status.tago.io/badge?theme=light" width="187" height="30" frameborder="0" scrolling="no" title="System status" style="vertical-align: middle;"></iframe><iframe class="status-badge--dark" src="https://status.tago.io/badge?theme=dark" width="187" height="30" frameborder="0" scrolling="no" title="System status" style="vertical-align: middle;"></iframe></div>',
        },
        {
          href: "https://admin.tago.io",
          label: "Login",
          position: "right",
        },
        {
          href: "https://tago.io",
          label: "Main Site",
          position: "right",
        },
      ],
    },

    prism: {
      theme: prismThemes.nightOwlLight,
      darkTheme: prismThemes.nightOwl,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
