import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import type { ReactNode } from "react";

import styles from "./index.module.css";

function HomepageHeader() {
  const { colorMode } = useColorMode();
  const logoSrc =
    colorMode === "dark"
      ? "/img/tagoio-official-logo-white.svg"
      : "/img/tagoio-official-logo.svg";
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div className={styles.brandRow}>
          <span className={styles.brandDoc}>Documentation</span>
          <img
            src={useBaseUrl(logoSrc)}
            alt="TagoIO"
            width={160}
            height={40}
            className={styles.brandLogo}
          />
        </div>
        <Heading as="h1" className="hero__title">
          Easy IoT. Powerful Outcomes.
        </Heading>
        <p className="hero__subtitle">
          The Full-Stack IoT Platform to transform sensor data into smart
          solutions — simple, affordable, and free of cloud complexity.
        </p>
        <div className="home-status-badge">
          <iframe
            className="status-badge--light"
            src="https://status.tago.io/badge?theme=light"
            width={187}
            height={30}
            frameBorder={0}
            scrolling="no"
            title="System status"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <iframe
            className="status-badge--dark"
            src="https://status.tago.io/badge?theme=dark"
            width={187}
            height={30}
            frameBorder={0}
            scrolling="no"
            title="System status"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--lg", styles.demoButton)}
            to="https://tago.io/request-demo"
          >
            Request a Demo
          </Link>
          <Link
            className={clsx(
              "button button--outline button--lg",
              styles.getStartedButton,
            )}
            to="https://tago.io/pricing"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="IoT Cloud Platform | TagoIO"
      description="The Full-Stack IoT Platform to transform sensor data into smart solutions — simple, affordable, and free of cloud complexity."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
