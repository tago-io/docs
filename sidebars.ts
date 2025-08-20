import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Main sidebar with all available content
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'TagoIO Platform',
      items: [
        'tagoio/main-overview',
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'tagoio/getting-started/overview', 
            'tagoio/getting-started/quick-start',
            'tagoio/getting-started/complete-guide'
          ],
          collapsed: false,
        },
        {
          type: 'category',
          label: 'Devices',
          items: [
            'tagoio/devices/overview',
            'tagoio/devices/devices-comprehensive',
            'tagoio/devices/device-creation',
            'tagoio/devices/device-tokens',
            'tagoio/devices/data-storage',
            'tagoio/devices/live-inspector',
            'tagoio/devices/mqtt-setup',
            'tagoio/devices/mqtt-integration',
          ],
          collapsed: true,
        },
        {
          type: 'category',
          label: 'Dashboards',
          items: [
            'tagoio/dashboards/overview',
            'tagoio/dashboards/dashboards-overview',
          ],
          collapsed: true,
        },
        {
          type: 'category',
          label: 'Widgets',
          items: [
            'tagoio/widgets/overview',
            'tagoio/widgets/widgets-main',
            'tagoio/widgets/widget-types-reference',
            'tagoio/widgets/custom-widget-development',
          ],
          collapsed: true,
        },
        {
          type: 'category',
          label: 'API',
          items: [
            'tagoio/api/api-overview',
          ],
          collapsed: true,
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            'tagoio/tutorials/tutorials-overview',
          ],
          collapsed: true,
        },
        {
          type: 'category',
          label: 'Account Management',
          items: [
            'tagoio/my-account/account-management',
          ],
          collapsed: true,
        },
        'tagoio/navigation-index',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'TagoRUN',
      items: [
        'tagorun/overview',
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'tagorun/getting-started/overview',
            'tagorun/getting-started/quick-start',
            'tagorun/getting-started/branding-deployment',
            'tagorun/getting-started/theme-customization',
            'tagorun/getting-started/navigation-bar',
            'tagorun/getting-started/sidebar',
            'tagorun/getting-started/custom-settings',
            'tagorun/getting-started/mobile-app',
            'tagorun/getting-started/user-notifications',
            'tagorun/getting-started/security-protection',
            'tagorun/getting-started/email-templates',
            'tagorun/getting-started/analytics-setup',
            'tagorun/getting-started/deployment-guide',
            'tagorun/getting-started/domain-setup',
            'tagorun/getting-started/ssl-configuration',
          ],
          collapsed: false,
        },
        {
          type: 'category',
          label: 'Access Management',
          items: [
            'tagorun/access-management/access-management-overview',
            'tagorun/access-management/user-management',
            'tagorun/access-management/roles-permissions',
            'tagorun/access-management/security-protection',
          ],
          collapsed: true,
        },
        {
          type: 'category',
          label: 'Dictionaries',
          items: [
            'tagorun/dictionaries/multi-language',
            'tagorun/dictionaries/dictionary-management',
          ],
          collapsed: true,
        },
        {
          type: 'category',
          label: 'Single Sign-On (SSO)',
          items: [
            'tagorun/sso/single-sign-on',
          ],
          collapsed: true,
        },
        {
          type: 'category',
          label: 'Integrations',
          items: [
            'tagorun/integrations/overview',
            'tagorun/integrations/webhooks',
          ],
          collapsed: true,
        },
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'TagoCore',
      items: [
        'tagocore/comprehensive-overview',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'TagoDeploy',
      items: [
        'tagodeploy/enterprise-overview',
      ],
      collapsed: true,
    },
  ],
};

export default sidebars;
