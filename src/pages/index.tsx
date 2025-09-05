import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import type { ReactNode } from "react";

import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div className={styles.brandRow}>
          <span className={styles.brandDoc}>Documentation</span>
          <img
            src={useBaseUrl("/img/tagoio-official-logo.svg")}
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
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--lg", styles.demoButton)}
            to="https://tago.io/request-demo"
          >
            Request a Demo
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
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