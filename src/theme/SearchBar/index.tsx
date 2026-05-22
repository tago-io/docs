import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";
import { SearchModal } from "./SearchModal";

const isMac = (): boolean => {
  if (typeof navigator === "undefined") return false;
  return navigator.platform.toUpperCase().includes("MAC") || /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);
};

const SearchBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [shortcutLabel, setShortcutLabel] = useState("Ctrl K");
  const triggerRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef(open);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    setShortcutLabel(isMac() ? "⌘ K" : "Ctrl K");
  }, []);

  useEffect(() => {
    const isEditableTarget = (target: HTMLElement | null): boolean => {
      const tag = target?.tagName.toLowerCase();
      return tag === "input" || tag === "textarea" || Boolean(target?.isContentEditable);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const triggerKey = event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey);
      if (triggerKey && !isEditableTarget(target)) {
        event.preventDefault();
        setOpen(true);
        return;
      }
      if (event.key === "/" && !openRef.current && !isEditableTarget(target)) {
        event.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleClose = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) {
      requestAnimationFrame(() => triggerRef.current?.focus());
    }
  }, []);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={styles.searchBarTrigger}
        onClick={() => setOpen(true)}
        aria-label="Search docs"
      >
        <svg
          className={styles.triggerIcon}
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
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span className={styles.triggerLabel}>Search docs</span>
        <span className={styles.triggerShortcut}>{shortcutLabel}</span>
      </button>
      {open && typeof document !== "undefined"
        ? createPortal(<SearchModal onClose={handleClose} />, document.body)
        : null}
    </>
  );
};

export default SearchBar;
