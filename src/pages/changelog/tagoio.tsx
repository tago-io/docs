import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function TagoIOChangelog() {
  const releases = [
    {
      version: 'v3.2.0',
      date: 'August 22, 2025',
      description: 'Enhanced dashboard filtering and performance improvements',
      slug: '/changelog/tagoio/v3-2-0'
    },
    {
      version: 'v3.1.0',
      date: 'August 8, 2025',
      description: 'Widget enhancements and API improvements',
      slug: '/changelog/tagoio/v3-1-0'
    },
    {
      version: 'v3.0.0',
      date: 'July 15, 2025',
      description: 'Major release with new architecture and features',
      slug: '/changelog/tagoio/v3-0-0'
    }
  ];

  return (
    <Layout
      title="TagoIO Changelog"
      description="Release notes and updates for TagoIO platform">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2 changelog-page">
            <div className="margin-bottom--lg">
              <Link to="/changelog" className="button button--secondary button--sm">
                ← All Products
              </Link>
            </div>
            
            <h1>TagoIO Changelog</h1>
            <p>Latest changes and updates for the TagoIO IoT platform.</p>
            
            <div className="margin-top--lg">
              {releases.map((release) => (
                <div key={release.version} className="card margin-bottom--lg">
                  <div className="card__header">
                    <h3>
                      <Link to={release.slug}>
                        TagoIO {release.version}
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