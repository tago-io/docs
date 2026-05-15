import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useHistory } from "@docusaurus/router";
import { clsx } from "clsx";
import styles from "./styles.module.css";
import { isQueryInRange, searchDocs, type SearchResult } from "./searchClient";
import { toInternalPath } from "./toInternalPath";
import { flatOrderedResults, groupResults, permalinkBreadcrumb } from "./groupResults";
import { CategoryIcon } from "./CategoryIcon";

type Status = "idle" | "loading" | "success" | "no-results" | "error";

type Props = {
  onClose: () => void;
};

const DEBOUNCE_MS = 250;
const RESULT_LIMIT = 10;
const LISTBOX_ID = "tagoio-search-listbox";
const SEE_ALL_ID = "tagoio-search-see-all";

const optionId = (index: number) => `tagoio-search-option-${index}`;

export const SearchModal: React.FC<Props> = ({ onClose }) => {
  const history = useHistory();
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [activeIndex, setActiveIndex] = useState(0);

  const groups = useMemo(() => groupResults(results), [results]);
  const orderedResults = useMemo(() => flatOrderedResults(groups), [groups]);
  const seeAllIndex = orderedResults.length;
  const totalSelectable = orderedResults.length + (status === "success" && orderedResults.length > 0 ? 1 : 0);

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
      const response = await searchDocs(q, controller.signal, RESULT_LIMIT);
      if (controller.signal.aborted) return;
      setResults(response.results);
      setActiveIndex(0);
      setStatus(response.results.length === 0 ? "no-results" : "success");
    } catch (error) {
      if (controller.signal.aborted || (error instanceof DOMException && error.name === "AbortError")) {
        return;
      }
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!isQueryInRange(query)) {
      abortRef.current?.abort();
      setStatus("idle");
      setResults([]);
      return;
    }
    debounceRef.current = setTimeout(() => {
      void runSearch(query);
    }, DEBOUNCE_MS);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, runSearch]);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const previouslyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previouslyOverflow;
    };
  }, []);

  const navigateToPath = useCallback(
    (target: string) => {
      onClose();
      const internal = toInternalPath(target);
      if (internal !== null) {
        history.push(internal);
      } else {
        window.location.href = target;
      }
    },
    [history, onClose]
  );

  const goToSearchPage = useCallback(() => {
    const trimmed = query.trim();
    navigateToPath(`/search?q=${encodeURIComponent(trimmed)}`);
  }, [navigateToPath, query]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (status !== "success" || totalSelectable === 0) return;
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((current) => (current + 1) % totalSelectable);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((current) => (current - 1 + totalSelectable) % totalSelectable);
      } else if (event.key === "Enter") {
        event.preventDefault();
        if (activeIndex === seeAllIndex) {
          goToSearchPage();
          return;
        }
        const result = orderedResults[activeIndex];
        if (result) navigateToPath(result.permalink);
      }
    },
    [status, totalSelectable, activeIndex, seeAllIndex, orderedResults, navigateToPath, goToSearchPage, onClose]
  );

  const handleBackdropClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) onClose();
    },
    [onClose]
  );

  const activeDescendantId =
    status === "success" && totalSelectable > 0
      ? activeIndex === seeAllIndex
        ? SEE_ALL_ID
        : optionId(activeIndex)
      : undefined;

  const renderBody = () => {
    if (status === "idle") {
      return (
        <div className={styles.statusRow}>
          <span className={styles.statusEyebrow}>Start typing</span>
          <p className={styles.statusBody}>Search across guides, integrations, tutorials, and the TagoIO API.</p>
        </div>
      );
    }
    if (status === "loading") {
      return (
        <div className={styles.statusRow}>
          <span className={styles.spinner} aria-hidden="true" />
          <span className={styles.statusBody}>Searching the docs…</span>
        </div>
      );
    }
    if (status === "error") {
      return (
        <div className={clsx(styles.statusRow, styles.statusRowError)}>
          <span className={styles.statusEyebrow}>Something went wrong</span>
          <p className={styles.statusBody}>The search service is temporarily unavailable.</p>
          <button type="button" className={styles.retryButton} onClick={() => void runSearch(query)}>
            Try again
          </button>
        </div>
      );
    }
    if (status === "no-results") {
      return (
        <div className={styles.statusRow}>
          <span className={styles.statusEyebrow}>No matches</span>
          <p className={styles.statusBody}>
            Nothing found for <strong>&ldquo;{query.trim()}&rdquo;</strong>. Try a different keyword.
          </p>
        </div>
      );
    }

    let flatIndex = 0;
    return (
      <div className={styles.resultsScroll}>
        <ul className={styles.results} role="listbox" id={LISTBOX_ID}>
          {groups.map((group) => (
            <li key={group.category} className={styles.group}>
              <div className={styles.groupHeader}>
                <span className={styles.groupLabel}>{group.label}</span>
                <span className={styles.groupCount}>{group.results.length}</span>
              </div>
              <ul className={styles.groupList}>
                {group.results.map((result) => {
                  const index = flatIndex++;
                  const selected = index === activeIndex;
                  const crumbs = permalinkBreadcrumb(result.permalink);
                  return (
                    <li
                      key={result.permalink}
                      role="option"
                      id={optionId(index)}
                      aria-selected={selected}
                      className={styles.resultItem}
                      onMouseEnter={() => setActiveIndex(index)}
                    >
                      <a
                        href={result.permalink}
                        className={styles.resultLink}
                        onClick={(event) => {
                          event.preventDefault();
                          navigateToPath(result.permalink);
                        }}
                      >
                        <span className={styles.resultIcon} aria-hidden="true">
                          <CategoryIcon category={result.category} size={18} />
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
                          width="18"
                          height="18"
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
            </li>
          ))}
        </ul>
        <button
          type="button"
          id={SEE_ALL_ID}
          className={clsx(styles.seeAll, activeIndex === seeAllIndex && styles.seeAllActive)}
          onClick={goToSearchPage}
          onMouseEnter={() => setActiveIndex(seeAllIndex)}
        >
          <span>
            See all results for <strong>&ldquo;{query.trim()}&rdquo;</strong>
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick} role="presentation" aria-live="polite">
      <div className={styles.modal} role="dialog" aria-modal="true" aria-label="Search TagoIO docs">
        <div className={styles.inputRow}>
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
            placeholder="Search the TagoIO docs"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={status === "success"}
            aria-controls={LISTBOX_ID}
            aria-activedescendant={activeDescendantId}
            maxLength={200}
            spellCheck={false}
            autoComplete="off"
          />
          <button type="button" className={styles.closeKey} onClick={onClose} aria-label="Close search">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        {renderBody()}
        <div className={styles.footer}>
          <span className={styles.footerHint}>
            <kbd className={styles.footerKey}>↑</kbd>
            <kbd className={styles.footerKey}>↓</kbd>
            navigate
          </span>
          <span className={styles.footerHint}>
            <kbd className={styles.footerKey}>↵</kbd>
            select
          </span>
          <span className={styles.footerHint}>
            <kbd className={styles.footerKey}>esc</kbd>
            close
          </span>
        </div>
      </div>
    </div>
  );
};
