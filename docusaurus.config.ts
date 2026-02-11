import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const SITE_URL = process.env.SITE_URL || "https://docs.tago.io";
const IS_BETA = SITE_URL.includes("docs.beta.tago.io");

const config: Config = {
  title: "TagoIO Docs",
  tagline: "Easy IoT. Powerful Outcomes.",
  favicon: "img/tagoio-favicon.png",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here (override with env SITE_URL for staging/beta builds)
  url: SITE_URL,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/", // Changed from '/docs/' for local development

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "tago-io", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
  },

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
          docItemComponent: "@theme/ApiItem",
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

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "tagoio-api",
        docsPluginId: "classic",
        config: {
          tagoio: {
            specPath: "specs/tagoio-api.yaml",
            outputDir: "docs/api",
          },
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs", "@docusaurus/theme-mermaid"],
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
  ],

  clientModules: [require.resolve("./src/theme/Openapi-Store.tsx")],

  themeConfig: {
    image: "img/tago-social-card.png",
    api: {
      methodLabelComponent: "MethodEndpoint",
      authPersistence: "localStorage",
    },
    // Add global meta for beta builds to prevent indexing
    ...(IS_BETA
      ? {
          metadata: [
            { name: "robots", content: "noindex, nofollow" },
            { name: "googlebot", content: "noindex, nofollow" },
          ],
        }
      : {}),
    algolia: {
      appId: "8HPN5WF45N",
      apiKey: "12cc282e7dcb99632185962ad2624a49",
      indexName: "TagoIO Docs",
      contextualSearch: true,
      searchPagePath: "search",
    },
    languageTabs: [
      {
        highlight: "bash",
        language: "curl",
        logoClass: "bash",
      },
      {
        highlight: "python",
        language: "python",
        logoClass: "python",
      },
      {
        highlight: "go",
        language: "go",
        logoClass: "go",
      },
      {
        highlight: "javascript",
        language: "nodejs",
        logoClass: "nodejs",
      },
      {
        highlight: "rust",
        language: "rust",
        logoClass: "rust",
      },
      {
        highlight: "swift",
        language: "swift",
        logoClass: "swift",
      },
    ],
    navbar: {
      title: "Docs",
      logo: {
        alt: "TagoIO Logo",
        src: "img/tagoio-official-logo.svg",
        srcDark: "img/tagoio-official-logo-white.svg",
        width: 110,
        height: 26,
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tagoioSidebar",
          position: "left",
          label: "TagoIO",
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
        {
          type: "docSidebar",
          sidebarId: "tagotipSidebar",
          position: "left",
          label: "TagoTiP",
        },
        {
          type: "docSidebar",
          sidebarId: "apiSidebar",
          position: "left",
          label: "API",
        },
        { to: "/changelog", label: "Changelog", position: "left" },
        {
          href: "https://support.tago.io/tickets-view",
          label: "Open a Ticket",
          position: "right",
        },
        {
          href: "https://community.tago.io/",
          label: "Community",
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
      additionalLanguages: ["abnf", "yaml"],
    },
    mermaid: {
      theme: {
        light: "base",
        dark: "dark",
      },
      options: {
        themeVariables: {
          primaryColor: "#2cb1bc",
          primaryTextColor: "#ffffff",
          primaryBorderColor: "transparent",
          lineColor: "#707070",
          edgeLabelBackground: "transparent",
          clusterBkg: "transparent",
          clusterBorder: "#2a2a2a",
        },
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
