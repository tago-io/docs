import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'TagoIO Docs',
  tagline: 'Easy IoT. Powerful Outcomes.',
  favicon: 'img/tagoio-favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.tago.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tago-io', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/tago-io/docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/tago-io/docs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/tago-social-card.jpg',
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'TagoIO Logo',
        src: 'img/tagoio-official-logo.svg',
        width: 110,
        height: 26,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Updates', position: 'left'},
        {
          href: 'https://admin.tago.io',
          label: 'Login',
          position: 'right',
        },
        {
          href: 'https://tago.io',
          label: 'Main Site',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Products',
          items: [
            {
              label: 'TagoIO',
              to: '/docs/tagoio/getting-started/overview',
            },
            {
              label: 'TagoRUN',
              to: '/docs/tagorun/getting-started/overview',
            },
            {
              label: 'TagoCore',
              to: '/docs/tagocore/comprehensive-overview',
            },
            {
              label: 'TagoDeploy',
              to: '/docs/tagodeploy/enterprise-overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Help Center',
              href: 'https://help.tago.io',
            },
            {
              label: 'Community Forum',
              href: 'https://help.tago.io/portal/en/community',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tago-io',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'API Documentation',
              href: 'https://api.docs.tago.io',
            },
            {
              label: 'Changelog',
              href: 'https://changelog.tago.io',
            },
            {
              label: 'System Status',
              href: 'https://status.tago.io',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Main Website',
              href: 'https://tago.io',
            },
            {
              label: 'Pricing',
              href: 'https://tago.io/pricing',
            },
            {
              label: 'Request Demo',
              href: 'https://tago.io/request-demo',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TagoIO Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
