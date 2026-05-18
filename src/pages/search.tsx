import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useHistory, useLocation } from "@docusaurus/router";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { clsx } from "clsx";
import { isQueryInRange, searchDocs, type SearchResult } from "@site/src/theme/SearchBar/searchClient";
import { toInternalPath } from "@site/src/theme/SearchBar/toInternalPath";
import { groupResults, permalinkBreadcrumb } from "@site/src/theme/SearchBar/groupResults";
import { CategoryIcon } from "@site/src/theme/SearchBar/CategoryIcon";
import styles from "./search.module.css";

type Status = "idle" | "loading" | "success" | "no-results" | "error";

const PAGE_LIMIT = 20;
const DEBOUNCE_MS = 250;

const readQueryParam = (search: string): string => {
  const params = new URLSearchParams(search);
  return (params.get("q") ?? "").slice(0, 200);
};

const SearchPageBody: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const initialQuery = useMemo(() => readQueryParam(location.search), [location.search]);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [status, setStatus] = useState<Status>(initialQuery ? "loading" : "idle");

  const groups = useMemo(() => groupResults(results), [results]);

  const runSearch = useCallback(async (q: string) => {
    abortRef.current?.abort();
    if (!isQueryInRange(q)) {
      setStatus("idle");
      setResults([]);
      return;
    }
    const controller = new AbortController();
    abortRef.current = controller;
    setStatus("loading");
    try {
      const response = await searchDocs(q, controller.signal, PAGE_LIMIT);
      if (controller.signal.aborted) return;
      setResults(response.results);
      setStatus(response.results.length === 0 ? "no-results" : "success");
    } catch (error) {
      if (controller.signal.aborted || (error instanceof DOMException && error.name === "AbortError")) {
        return;
      }
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const params = new URLSearchParams(location.search);
      const current = params.get("q") ?? "";
      const trimmed = query.trim();
      if (trimmed !== current) {
        if (trimmed) {
          params.set("q", trimmed);
        } else {
          params.delete("q");
        }
        const nextSearch = params.toString();
        history.replace({ pathname: location.pathname, search: nextSearch ? `?${nextSearch}` : "" });
      }
      void runSearch(query);
    }, DEBOUNCE_MS);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, runSearch, history, location.pathname, location.search]);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  const navigateToResult = useCallback(
    (permalink: string) => {
      const internal = toInternalPath(permalink);
      if (internal !== null) {
        history.push(internal);
        return;
      }
      if (permalink.startsWith("https://") || permalink.startsWith("http://")) {
        window.location.href = permalink;
        return;
      }
      console.warn("search: refusing to navigate to non-http(s) target", permalink);
    },
    [history]
  );

  const trimmedQuery = query.trim();
  const total = results.length;

  return (
    <div className={styles.page}>
      <div className={styles.headerBlock}>
        <span className={styles.eyebrow}>Search</span>
        <h1 className={styles.heading}>
          {trimmedQuery ? (
            <>
              Results for <span className={styles.headingQuery}>&ldquo;{trimmedQuery}&rdquo;</span>
            </>
          ) : (
            "Search the TagoIO docs"
          )}
        </h1>
        {status === "success" && (
          <p className={styles.summary}>
            {total} {total === 1 ? "result" : "results"}
          </p>
        )}
      </div>

      <div className={styles.inputCard}>
        <svg
          className={styles.inputIcon}
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          placeholder="Search guides, integrations, API…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          maxLength={200}
          spellCheck={false}
          autoComplete="off"
          aria-label="Search the TagoIO docs"
        />
        {query && (
          <button type="button" className={styles.clearButton} onClick={() => setQuery("")} aria-label="Clear search">
            Clear
          </button>
        )}
      </div>

      {status === "idle" && (
        <div className={styles.empty}>
          <span className={styles.emptyEyebrow}>Start typing</span>
          <p>Find guides, integrations, tutorials, and API references in one place.</p>
        </div>
      )}

      {status === "loading" && (
        <div className={styles.empty}>
          <span className={styles.spinner} aria-hidden="true" />
          <p>Searching…</p>
        </div>
      )}

      {status === "error" && (
        <div className={clsx(styles.empty, styles.emptyError)}>
          <span className={styles.emptyEyebrow}>Something went wrong</span>
          <p>The search service is temporarily unavailable.</p>
          <button type="button" className={styles.retryButton} onClick={() => void runSearch(query)}>
            Try again
          </button>
        </div>
      )}

      {status === "no-results" && (
        <div className={styles.empty}>
          <span className={styles.emptyEyebrow}>No matches</span>
          <p>
            Nothing found for <strong>&ldquo;{trimmedQuery}&rdquo;</strong>. Try a different keyword or check the
            spelling.
          </p>
        </div>
      )}

      {status === "success" && (
        <div className={styles.groups}>
          {groups.map((group) => (
            <section key={group.category} className={styles.group}>
              <header className={styles.groupHeader}>
                <span className={styles.groupLabel}>{group.label}</span>
                <span className={styles.groupCount}>{group.results.length}</span>
              </header>
              <ul className={styles.resultsList}>
                {group.results.map((result) => {
                  const crumbs = permalinkBreadcrumb(result.permalink);
                  return (
                    <li key={result.permalink} className={styles.resultItem}>
                      <a
                        href={result.permalink}
                        className={styles.resultLink}
                        onClick={(event) => {
                          event.preventDefault();
                          navigateToResult(result.permalink);
                        }}
                      >
                        <span className={styles.resultIcon} aria-hidden="true">
                          <CategoryIcon category={result.category} size={20} />
                        </span>
                        <span className={styles.resultText}>
                          <span className={styles.resultTitle}>{result.title}</span>
                          {crumbs.length > 0 && (
                            <span className={styles.resultPath}>
                              {crumbs.map((segment, segmentIndex) => {
                                const segmentKey = crumbs.slice(0, segmentIndex + 1).join("/");
                                return (
                                  <React.Fragment key={segmentKey}>
                                    {segmentIndex > 0 && <span className={styles.resultPathSep}>›</span>}
                                    <span className={styles.resultPathSegment}>{segment}</span>
                                  </React.Fragment>
                                );
                              })}
                            </span>
                          )}
                        </span>
                        <svg
                          className={styles.chevron}
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
};

const SearchPage: React.FC = () => {
  return (
    <Layout title="Search" description="Search the TagoIO documentation">
      <main className={styles.main}>
        <BrowserOnly>{() => <SearchPageBody />}</BrowserOnly>
      </main>
    </Layout>
  );
};

export default SearchPage;
