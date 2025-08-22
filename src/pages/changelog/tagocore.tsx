import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function TagoCoreChangelog() {
  const releases = [
    {
      version: 'v1.4.0',
      date: 'August 22, 2025',
      description: 'Enhanced clustering and monitoring capabilities',
      slug: '/changelog/tagocore/v1-4-0'
    },
    {
      version: 'v1.3.0',
      date: 'August 1, 2025',
      description: 'Performance improvements and security updates',
      slug: '/changelog/tagocore/v1-3-0'
    },
    {
      version: 'v1.2.0',
      date: 'July 10, 2025',
      description: 'New data processing engine and API enhancements',
      slug: '/changelog/tagocore/v1-2-0'
    }
  ];

  return (
    <Layout
      title="TagoCore Changelog"
      description="Release notes and updates for TagoCore">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2 changelog-page">
            <div className="margin-bottom--lg">
              <Link to="/changelog" className="button button--secondary button--sm">
                ← All Products
              </Link>
            </div>
            
            <h1>TagoCore Changelog</h1>
            <p>Latest changes and updates for the open-source TagoCore engine.</p>
            
            <div className="margin-top--lg">
              {releases.map((release) => (
                <div key={release.version} className="card margin-bottom--lg">
                  <div className="card__header">
                    <h3>
                      <Link to={release.slug}>
                        TagoCore {release.version}
                      </Link>
                    </h3>
                    <div className="text--secondary">
                      {release.date}
                    </div>
                  </div>
                  <div className="card__body">
                    <p>{release.description}</p>
                  </div>
                  <div className="card__footer">
                    <Link to={release.slug} className="button button--secondary">
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="margin-top--lg text--center">
              <Link to="/changelog" className="button button--secondary">
                View All Changelogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}