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
	url: "https://tago-io.github.io",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/docs/", // Changed from '/docs/' for local development

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
					showReadingTime: true,
					feedOptions: {
						type: ["rss", "atom"],
						xslt: true,
					},
					editUrl: "https://github.com/tago-io/docs/tree/main/",
					onInlineTags: "warn",
					onInlineAuthors: "warn",
					onUntruncatedBlogPosts: "warn",
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
		// Replace with your project's social card
		image: "img/docusaurus-social-card.jpg",
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
					sidebarId: "tutorialSidebar",
					position: "left",
					label: "Documentation",
				},
				{ to: "/blog", label: "Updates", position: "left" },
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
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
