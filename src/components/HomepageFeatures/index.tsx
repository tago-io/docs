import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imgSrc: string;
  href: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'TagoIO Platform',
    imgSrc: '/img/tagoio-icon-original.png',
    href: '/docs/tagoio/getting-started/overview',
    description: (
      <>
        The core IoT cloud platform for connecting devices, visualizing data, and building automated solutions.
        <strong> Get started with our comprehensive guides and tutorials.</strong>
      </>
    ),
  },
  {
    title: 'TagoRUN',
    imgSrc: '/img/tagorun-icon-original.png',
    href: '/docs/tagorun/getting-started/overview',
    description: (
      <>
        Deploy custom IoT applications to end-users with full control over branding and user management.
        <strong> Perfect for white-label solutions and customer-facing portals.</strong>
      </>
    ),
  },
  {
    title: 'TagoCore',
    imgSrc: '/img/tagocore-icon-original.png',
    href: '/docs/tagocore/overview',
    description: (
      <>
        Free, fast, and open-source IoT platform for edge computing.
        <strong> Deploy on-premises or at the edge with full source code access.</strong>
      </>
    ),
  },
  {
    title: 'TagoDeploy',
    imgSrc: '/img/tagodeploy-icon-original.png',
    href: '/docs/tagodeploy/overview',
    description: (
      <>
        Enterprise-grade infrastructure and dedicated resources for mission-critical IoT deployments.
        <strong> Premium support and guaranteed performance for your business.</strong>
      </>
    ),
  },
];

import Link from '@docusaurus/Link';

function Feature({title, imgSrc, href, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3', styles.featureCol)}>
      <Link to={href} className={styles.featureLink}>
        <div className={styles.featureCard}>
          <div className="text--center">
            <img src={imgSrc} alt={title} className={styles.featureImg} />
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
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
