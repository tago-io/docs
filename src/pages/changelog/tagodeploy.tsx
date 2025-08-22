import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function TagoDeployChangelog() {
  const releases = [
    {
      version: 'v0.9.0',
      date: 'August 22, 2025',
      description: 'Docker support and deployment automation',
      slug: '/changelog/tagodeploy/v0-9-0'
    },
    {
      version: 'v0.8.0',
      date: 'August 5, 2025',
      description: 'Load balancing and high availability features',
      slug: '/changelog/tagodeploy/v0-8-0'
    },
    {
      version: 'v0.7.0',
      date: 'July 5, 2025',
      description: 'Infrastructure automation and scaling improvements',
      slug: '/changelog/tagodeploy/v0-7-0'
    }
  ];

  return (
    <Layout
      title="TagoDeploy Changelog"
      description="Release notes and updates for TagoDeploy">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2 changelog-page">
            <div className="margin-bottom--lg">
              <Link to="/changelog" className="button button--secondary button--sm">
                ← All Products
              </Link>
            </div>
            
            <h1>TagoDeploy Changelog</h1>
            <p>Latest changes and updates for the TagoDeploy infrastructure platform.</p>
            
            <div className="margin-top--lg">
              {releases.map((release) => (
                <div key={release.version} className="card margin-bottom--lg">
                  <div className="card__header">
                    <h3>
                      <Link to={release.slug}>
                        TagoDeploy {release.version}
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