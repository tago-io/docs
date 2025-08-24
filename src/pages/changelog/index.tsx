import Link from "@docusaurus/Link";
import { useHistory, useLocation } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import React, { useState } from "react";

type FrontMatter = {
  slug?: string;
  title?: string;
  description?: string;
  date?: string;
  product?: string;
  version?: string;
};

type Meta = {
  frontMatter?: FrontMatter;
  permalink?: string;
  slug?: string;
  title?: string;
  description?: string;
  date?: string;
};

type ChangelogContent = {
  metadata?: Record<string, unknown> | Meta;
};

export default function ChangelogIndex({
  items,
}: {
  items: Array<{ content: ChangelogContent }>;
}) {
  const location = useLocation();
  const history = useHistory();
  const [activeFilter, setActiveFilter] = useState("all");
  const [isReady, setIsReady] = useState(false);

  const parsePost = (c: ChangelogContent) => {
    const metaRaw = c?.metadata as Meta | undefined;
    const meta: Meta = metaRaw || ({} as Meta);
    const fm: FrontMatter = (meta.frontMatter as FrontMatter) || {};
    const slug = meta.permalink || meta.slug || fm.slug || "";
    const title = meta.title || fm.title || "";
    const description = meta.description || fm.description || "";
    const dateISO = meta.date || "";
    const d = dateISO ? new Date(dateISO) : undefined;
    const date = d
      ? `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`
      : "";
    const displayDate = d
      ? d.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC",
        })
      : "";
    const product = fm.product || "tagoio";
    const version = fm.version || "";
    return { product, version, title, date, displayDate, description, slug };
  };
  const changelogs = items
    .map((i) => parsePost(i.content))
    .filter((p) => p.version && p.product);
  const hasTagoDeploy = changelogs.some((p) => p.product === "tagodeploy");
  const allowedFilters: string[] = [
    "all",
    "tagoio-admin",
    "tagoio-api",
    "tagocore",
    ...(hasTagoDeploy ? ["tagodeploy"] : []),
  ];

  const getYear = (dateStr: string) =>
    new Date(dateStr).getFullYear().toString();
  const getMonthIndex = (dateStr: string) => new Date(dateStr).getMonth();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentYear = new Date().getFullYear().toString();

  const filteredChangelogs =
    activeFilter === "all"
      ? changelogs
      : changelogs.filter((item) => item.product === activeFilter);

  const groupByYear = (items: typeof filteredChangelogs) => {
    const map = new Map<string, typeof filteredChangelogs>();
    for (const item of items) {
      const y = getYear(item.date);
      if (!map.has(y)) map.set(y, []);
      map.get(y)?.push(item);
    }
    // sort entries within year by date desc
    for (const [_y, arr] of map) {
      arr.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
    }
    return Array.from(map.entries()).sort(
      (a, b) => Number(b[0]) - Number(a[0]),
    );
  };

  const groupByMonth = (items: typeof filteredChangelogs) => {
    const map = new Map<number, typeof filteredChangelogs>();
    for (const item of items) {
      const m = getMonthIndex(item.date);
      if (!map.has(m)) map.set(m, []);
      map.get(m)?.push(item);
    }
    for (const [_m, arr] of map) {
      arr.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
    }
    return Array.from(map.entries()).sort((a, b) => b[0] - a[0]);
  };

  const grouped = groupByYear(filteredChangelogs);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const p = params.get("product");
    if (p && allowedFilters.includes(p)) {
      setActiveFilter(p);
    } else {
      setActiveFilter("all");
    }
    setIsReady(true);
  }, [allowedFilters.includes]);

  React.useEffect(() => {
    if (!isReady) return;
    const params = new URLSearchParams(location.search);
    const current = params.get("product") || "all";
    if (activeFilter === current) return;
    if (activeFilter === "all") {
      params.delete("product");
    } else {
      params.set("product", activeFilter);
    }
    const search = params.toString();
    const newUrl =
      location.pathname + (search ? `?${search}` : "") + (location.hash || "");
    history.replace(newUrl);
  }, [
    activeFilter,
    isReady,
    history.replace,
    location.hash,
    location.pathname,
    location.search,
  ]);

  const tagoioIcon = useBaseUrl("/img/tagoio-icon-original.png");
  const tagocoreIcon = useBaseUrl("/img/tagocore-icon-original.png");
  const tagodeployIcon = useBaseUrl("/img/tagodeploy-icon-original.png");
  const productIconSrc: Record<string, string> = {
    "tagoio-admin": tagoioIcon,
    "tagoio-api": tagoioIcon,
    tagocore: tagocoreIcon,
    tagodeploy: tagodeployIcon,
  };

  const getProductIcon = (product: string) => {
    const src = productIconSrc[product];
    if (!src) return null;
    const isBW = product === "tagoio-api";
    return (
      <img
        src={src}
        alt={product}
        width={18}
        height={18}
        style={{
          borderRadius: 4,
          filter: isBW ? "grayscale(100%)" : undefined,
        }}
      />
    );
  };

  return (
    <Layout
      title="Changelog"
      description="Changelog for TagoIO, TagoCore, and TagoDeploy"
    >
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--10 col--offset-1 changelog-page">
            <h1>Changelog</h1>
            <p className="margin-bottom--lg">
              Stay up to date with the latest changes and updates for all TagoIO
              products.
            </p>

            <div className="changelog-layout">
              <div className="changelog-chips-wrapper">
                <div
                  className="changelog-chips"
                  role="tablist"
                  aria-label="Filter changelog by product"
                >
                  <button
                    type="button"
                    className={`changelog-chip ${activeFilter === "all" ? "changelog-chip--active" : ""}`}
                    onClick={() => setActiveFilter("all")}
                    role="tab"
                    aria-selected={activeFilter === "all"}
                  >
                    All
                  </button>
                  <button
                    type="button"
                    className={`changelog-chip ${activeFilter === "tagoio-admin" ? "changelog-chip--active" : ""}`}
                    onClick={() => setActiveFilter("tagoio-admin")}
                    role="tab"
                    aria-selected={activeFilter === "tagoio-admin"}
                  >
                    TagoIO Admin
                  </button>
                  <button
                    type="button"
                    className={`changelog-chip ${activeFilter === "tagoio-api" ? "changelog-chip--active" : ""}`}
                    onClick={() => setActiveFilter("tagoio-api")}
                    role="tab"
                    aria-selected={activeFilter === "tagoio-api"}
                  >
                    TagoIO API
                  </button>
                  <button
                    type="button"
                    className={`changelog-chip ${activeFilter === "tagocore" ? "changelog-chip--active" : ""}`}
                    onClick={() => setActiveFilter("tagocore")}
                    role="tab"
                    aria-selected={activeFilter === "tagocore"}
                  >
                    TagoCore
                  </button>
                  {hasTagoDeploy && (
                    <button
                      type="button"
                      className={`changelog-chip ${activeFilter === "tagodeploy" ? "changelog-chip--active" : ""}`}
                      onClick={() => setActiveFilter("tagodeploy")}
                      role="tab"
                      aria-selected={activeFilter === "tagodeploy"}
                    >
                      TagoDeploy
                    </button>
                  )}
                </div>
              </div>
              <aside className="changelog-timeline">
                <h3 className="changelog-timeline__title">Years</h3>
                <ul className="changelog-timeline__list">
                  {grouped.length > 0 &&
                    grouped.map(([year], index) => (
                      <li
                        key={year}
                        className={`changelog-timeline__item ${year === currentYear ? "is-active" : ""}`}
                        data-year-index={index}
                      >
                        <a href={`#year-${year}`}>{year}</a>
                      </li>
                    ))}
                </ul>
              </aside>
              <div>
                {/* Timeline by year */}
                {grouped.length > 0 &&
                  grouped.map(([year, items]) => (
                    <section
                      key={year}
                      id={`year-${year}`}
                      className="timeline-year"
                    >
                      <h2 className="timeline-year__title">{year}</h2>
                      <div
                        className={`timeline ${year === currentYear ? "timeline--current-year" : ""}`}
                      >
                        {groupByMonth(items).map(([monthIndex, monthItems]) => (
                          <div key={monthIndex} className="timeline-month">
                            <h3 className="timeline-month__title">
                              {monthNames[monthIndex]}
                            </h3>
                            {monthItems.map((changelog) => (
                              <Link
                                key={`${changelog.product}-${changelog.version}`}
                                to={changelog.slug}
                                className="timeline-item"
                              >
                                <article className="timeline-card card changelog-card">
                                  <div className="timeline-card__header">
                                    <div className="timeline-card__title">
                                      {getProductIcon(changelog.product)}
                                      <h3>{changelog.title}</h3>
                                    </div>
                                    <div className="timeline-card__meta">
                                      <small className="text--secondary">
                                        {changelog.displayDate ||
                                          changelog.date}
                                      </small>
                                    </div>
                                  </div>
                                  <p className="timeline-card__desc">
                                    {changelog.description}
                                  </p>
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
              </div>
              {/* end right content */}
            </div>
            {/* end layout */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
