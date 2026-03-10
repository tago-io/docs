import Head from "@docusaurus/Head";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { PageMetadata } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function DocItemMetadata() {
  const { metadata, frontMatter, assets } = useDoc();
  const { siteConfig } = useDocusaurusContext();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: metadata.title,
    description: metadata.description || "",
    url: `${siteConfig.url}${metadata.permalink}`,
    dateModified: metadata.lastUpdatedAt ? new Date(metadata.lastUpdatedAt * 1000).toISOString() : undefined,
    publisher: {
      "@type": "Organization",
      name: "TagoIO",
      url: "https://tago.io",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${metadata.permalink}`,
    },
  };

  return (
    <>
      <PageMetadata
        title={metadata.title}
        description={metadata.description}
        keywords={frontMatter.keywords}
        image={assets.image ?? frontMatter.image}
      />
      <Head>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>
    </>
  );
}
