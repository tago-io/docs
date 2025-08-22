import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useLocation, useHistory} from '@docusaurus/router';

export default function ChangelogIndex() {
  const location = useLocation();
  const history = useHistory();
  const [activeFilter, setActiveFilter] = useState('all');
  const [isReady, setIsReady] = useState(false);
  const validFilters = ['all','tagoio','tagocore','tagodeploy'] as const;

  const changelogs = [
    {
      product: 'tagoio',
      version: 'v3.2.0',
      title: 'TagoIO v3.2.0',
      date: 'August 22, 2025',
      description: 'Enhanced dashboard filtering and performance improvements',
      slug: '/changelog/tagoio/v3-2-0'
    },
    {
      product: 'tagocore',
      version: 'v1.4.0',
      title: 'TagoCore v1.4.0',
      date: 'August 22, 2025',
      description: 'Enhanced clustering and monitoring capabilities',
      slug: '/changelog/tagocore/v1-4-0'
    },
    {
      product: 'tagodeploy',
      version: 'v0.9.0',
      title: 'TagoDeploy v0.9.0',
      date: 'August 22, 2025',
      description: 'Docker support and deployment automation',
      slug: '/changelog/tagodeploy/v0-9-0'
    },
    {
      product: 'tagoio',
      version: 'v3.1.0',
      title: 'TagoIO v3.1.0',
      date: 'August 8, 2025',
      description: 'Widget enhancements and API improvements',
      slug: '/changelog/tagoio/v3-1-0'
    },
    {
      product: 'tagodeploy',
      version: 'v0.8.0',
      title: 'TagoDeploy v0.8.0',
      date: 'August 5, 2025',
      description: 'Load balancing and high availability features',
      slug: '/changelog/tagodeploy/v0-8-0'
    },
    {
      product: 'tagocore',
      version: 'v1.3.0',
      title: 'TagoCore v1.3.0',
      date: 'August 1, 2025',
      description: 'Performance improvements and security updates',
      slug: '/changelog/tagocore/v1-3-0'
    },
    {
      product: 'tagoio',
      version: 'v3.0.0',
      title: 'TagoIO v3.0.0',
      date: 'July 15, 2025',
      description: 'Major release with new architecture and features',
      slug: '/changelog/tagoio/v3-0-0'
    },
    {
      product: 'tagocore',
      version: 'v1.2.0',
      title: 'TagoCore v1.2.0',
      date: 'July 10, 2025',
      description: 'New data processing engine and API enhancements',
      slug: '/changelog/tagocore/v1-2-0'
    },
    {
      product: 'tagodeploy',
      version: 'v0.7.0',
      title: 'TagoDeploy v0.7.0',
      date: 'July 5, 2025',
      description: 'Infrastructure automation and scaling improvements',
      slug: '/changelog/tagodeploy/v0-7-0'
    }
  ];

  const getYear = (dateStr: string) => new Date(dateStr).getFullYear().toString();
  const getMonthIndex = (dateStr: string) => new Date(dateStr).getMonth();
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const currentYear = new Date().getFullYear().toString();

  const filteredChangelogs = activeFilter === 'all' 
    ? changelogs 
    : changelogs.filter(item => item.product === activeFilter);

  const years = Array.from(new Set(filteredChangelogs.map((c) => getYear(c.date)))).sort((a, b) => Number(b) - Number(a));

  const groupByYear = (items: typeof filteredChangelogs) => {
    const map = new Map<string, typeof filteredChangelogs>();
    for (const item of items) {
      const y = getYear(item.date);
      if (!map.has(y)) map.set(y, []);
      map.get(y)!.push(item);
    }
    // sort entries within year by date desc
    for (const [_y, arr] of map) {
      arr.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
    }
    return Array.from(map.entries()).sort((a, b) => Number(b[0]) - Number(a[0]));
  };

  const groupByMonth = (items: typeof filteredChangelogs) => {
    const map = new Map<number, typeof filteredChangelogs>();
    for (const item of items) {
      const m = getMonthIndex(item.date);
      if (!map.has(m)) map.set(m, []);
      map.get(m)!.push(item);
    }
    for (const [_m, arr] of map) {
      arr.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
    }
    return Array.from(map.entries()).sort((a, b) => b[0] - a[0]);
  };

  const grouped = groupByYear(filteredChangelogs);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const p = params.get('product');
    if (p && (validFilters as readonly string[]).includes(p)) {
      setActiveFilter(p);
    } else {
      setActiveFilter('all');
    }
    setIsReady(true);
  }, []);

  React.useEffect(() => {
    if (!isReady) return;
    const params = new URLSearchParams(location.search);
    const current = params.get('product') || 'all';
    if (activeFilter === current) return;
    if (activeFilter === 'all') {
      params.delete('product');
    } else {
      params.set('product', activeFilter);
    }
    const search = params.toString();
    const newUrl = location.pathname + (search ? `?${search}` : '') + (location.hash || '');
    history.replace(newUrl);
  }, [activeFilter, isReady]);

  const tagoioIcon = useBaseUrl('/img/tagoio-icon-original.png');
  const tagocoreIcon = useBaseUrl('/img/tagocore-icon-original.png');
  const tagodeployIcon = useBaseUrl('/img/tagodeploy-icon-original.png');
  const productIconSrc: Record<string, string> = {
    tagoio: tagoioIcon,
    tagocore: tagocoreIcon,
    tagodeploy: tagodeployIcon,
  };

  const getProductIcon = (product: string) => {
    const src = productIconSrc[product];
    if (!src) return null;
    return <img src={src} alt={product} width={18} height={18} style={{ borderRadius: 4 }} />;
  };



  return (
    <Layout
      title="Changelog"
      description="Changelog for TagoIO, TagoCore, and TagoDeploy">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--10 col--offset-1 changelog-page">
            <h1>Changelog</h1>
            <p className="margin-bottom--lg">Stay up to date with the latest changes and updates for all TagoIO products.</p>

            <div className="changelog-layout">
              <aside className="changelog-timeline">
                <ul className="changelog-timeline__list">
                  {years.map((y) => (
                    <li key={y} className={`changelog-timeline__item ${y === currentYear ? 'is-active' : ''}`}>
                      <Link to={`#year-${y}`}>{y}</Link>
                    </li>
                  ))}
                </ul>
              </aside>
              <div>

            {/* Filter Chips */}
            <div className="changelog-chips margin-bottom--lg" role="tablist" aria-label="Filter changelog by product">
              <button className={`changelog-chip ${activeFilter === 'all' ? 'changelog-chip--active' : ''}`} onClick={() => setActiveFilter('all')} role="tab" aria-selected={activeFilter === 'all'}>
                All
              </button>
              <button className={`changelog-chip ${activeFilter === 'tagoio' ? 'changelog-chip--active' : ''}`} onClick={() => setActiveFilter('tagoio')} role="tab" aria-selected={activeFilter === 'tagoio'}>
                TagoIO
              </button>
              <button className={`changelog-chip ${activeFilter === 'tagocore' ? 'changelog-chip--active' : ''}`} onClick={() => setActiveFilter('tagocore')} role="tab" aria-selected={activeFilter === 'tagocore'}>
                TagoCore
              </button>
              <button className={`changelog-chip ${activeFilter === 'tagodeploy' ? 'changelog-chip--active' : ''}`} onClick={() => setActiveFilter('tagodeploy')} role="tab" aria-selected={activeFilter === 'tagodeploy'}>
                TagoDeploy
              </button>
            </div>


            {/* Timeline by year */}
            {grouped.map(([year, items]) => (
              <section key={year} id={`year-${year}`} className="timeline-year">
                <h2 className="timeline-year__title">{year}</h2>
                <div className={`timeline ${year === currentYear ? 'timeline--current-year' : ''}`}>
                  {groupByMonth(items).map(([monthIndex, monthItems]) => (
                    <div key={monthIndex} className="timeline-month">
                      <h3 className="timeline-month__title">{monthNames[monthIndex]}</h3>
                      {monthItems.map((changelog) => (
                        <Link key={`${changelog.product}-${changelog.version}`} to={changelog.slug} className="timeline-item">
                          <span className="timeline-dot" />
                          <article className="timeline-card card changelog-card">
                            <div className="timeline-card__header">
                              <div className="timeline-card__title">
                                {getProductIcon(changelog.product)}
                                <h3>{changelog.title}</h3>
                              </div>
                              <div className="timeline-card__meta">
                                <small className="text--secondary">{changelog.date}</small>
                              </div>
                            </div>
                            <p className="timeline-card__desc">{changelog.description}</p>
                          </article>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {filteredChangelogs.length === 0 && (
              <div className="changelog-empty-state">
                <p>No changelog entries found for the selected filter.</p>
              </div>
            )}

              </div>{/* end right content */}
            </div>{/* end layout */}
          </div>
        </div>
      </div>
    </Layout>
  );
}