import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Heading from "@theme/Heading";
import ThemedImage from "@theme/ThemedImage";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  imgLight: string;
  imgDark: string;
  href: string;
  description: ReactNode;
};

function Feature({ title, imgLight, imgDark, href, description }: FeatureItem) {
  return (
    <div className={styles.featureCol}>
      <Link to={href} className={styles.featureLink}>
        <div className={styles.featureCard}>
          <div className="text--center">
            <ThemedImage
              sources={{
                light: useBaseUrl(imgLight),
                dark: useBaseUrl(imgDark),
              }}
              alt={title}
              width={80}
              height={80}
              className={styles.featureImg}
            />
          </div>
          <div className="text--center">
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  const FeatureList: FeatureItem[] = [
    {
      title: "TagoIO Platform",
      imgLight: "/img/tagoio-mark-black.svg",
      imgDark: "/img/tagoio-mark-white.svg",
      href: "/docs/tagoio/getting-started",
      description: (
        <>
          The core IoT cloud platform for connecting devices, visualizing data, and building automated solutions.
          <br />
          <strong>Get started with our comprehensive guides and tutorials.</strong>
        </>
      ),
    },
    {
      title: "TagoRUN",
      imgLight: "/img/tagorun-mark-black.svg",
      imgDark: "/img/tagorun-mark-white.svg",
      href: "/docs/tagoio/tagorun",
      description: (
        <>
          Deploy custom IoT applications to end-users with full control over branding and user management.
          <br />
          <strong>Perfect for white-label solutions and customer-facing portals.</strong>
        </>
      ),
    },
    {
      title: "TagoDeploy",
      imgLight: "/img/tagodeploy-mark-black.svg",
      imgDark: "/img/tagodeploy-mark-white.svg",
      href: "/docs/tagodeploy",
      description: (
        <>
          Enterprise-grade infrastructure and dedicated resources for mission-critical IoT deployments.
          <br />
          <strong>Premium support and guaranteed performance for your business.</strong>
        </>
      ),
    },
    {
      title: "TagoCore",
      imgLight: "/img/tagocore-mark-black.svg",
      imgDark: "/img/tagocore-mark-white.svg",
      href: "/docs/tagocore",
      description: (
        <>
          Free, fast, and open-source IoT platform for edge computing.
          <br />
          <strong>Deploy on-premises or at the edge with full source code access.</strong>
        </>
      ),
    },
    {
      title: "TagoTiP",
      imgLight: "/img/tagotip-mark-black.svg",
      imgDark: "/img/tagotip-mark-white.svg",
      href: "/docs/tagotip",
      description: (
        <>
          Lightweight IoT protocol. Human-readable, type-safe and transport-agnostic.
          <br />
          <strong>Best for UDP, TCP, MQTT, and HTTP.</strong>
        </>
      ),
    },
  ];

  return (
    <section className={styles.features}>
      <div className={styles.featureRow}>
        {FeatureList.map((props) => (
          <Feature key={props.title} {...props} />
        ))}
      </div>
    </section>
  );
}
