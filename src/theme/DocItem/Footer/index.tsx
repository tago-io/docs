import { useEffect, useRef, useState } from "react";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ThemeClassNames } from "@docusaurus/theme-common";
import EditThisPage from "@theme/EditThisPage";
import LastUpdated from "@theme/LastUpdated";
import TagsListInline from "@theme/TagsListInline";
import clsx from "clsx";

type Status = "idle" | "sending" | "success" | "error";

export default function DocItemFooter() {
  const { metadata } = useDoc();
  const { editUrl, lastUpdatedAt, lastUpdatedBy, tags } = metadata;
  const { siteConfig } = useDocusaurusContext();
  const [open, setOpen] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const [bouncing, setBouncing] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  const portalId = (siteConfig.customFields?.hubspotPortalId as string) ?? "";
  const formId = (siteConfig.customFields?.hubspotDocGapFormId as string) ?? "";
  const pageUrl = `${siteConfig.url}${metadata.permalink}`;

  const hasTags = tags.length > 0;
  const hasEditMeta = !!(editUrl || lastUpdatedAt || lastUpdatedBy);

  useEffect(() => {
    setOpen(false);
    setBouncing(false);
  }, [metadata.permalink]);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBouncing(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [metadata.permalink]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  if (!hasTags && !hasEditMeta) return null;

  return (
    <footer ref={footerRef} className={clsx(ThemeClassNames.docs.docFooter, "docusaurus-mt-lg")}>
      {hasTags && (
        <div className={clsx("row margin-top--sm", ThemeClassNames.docs.docFooterTagsRow)}>
          <div className="col">
            <TagsListInline tags={tags} />
          </div>
        </div>
      )}
      {hasEditMeta && (
        <div className={clsx("row margin-top--sm", ThemeClassNames.docs.docFooterEditMetaRow)}>
          <div className="col doc-gap-edit-col">
            {editUrl && <EditThisPage editUrl={editUrl} />}
            <button
              type="button"
              className={clsx("doc-gap-toggle", bouncing && "doc-gap-toggle--bounce")}
              onClick={() => { setOpen((v) => !v); setFormKey((k) => k + 1); }}
              aria-expanded={open}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{ fill: "currentColor", flexShrink: 0 }}>
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              Send feedback
            </button>
          </div>
          <div className="col" style={{ textAlign: "right" }}>
            {(lastUpdatedAt || lastUpdatedBy) && (
              <LastUpdated lastUpdatedAt={lastUpdatedAt} lastUpdatedBy={lastUpdatedBy} />
            )}
          </div>
        </div>
      )}

      <div
        className={clsx("doc-gap-drawer", open && "doc-gap-drawer--open")}
        role="dialog"
        aria-modal="true"
        aria-label="Send feedback"
      >
        <div className="doc-gap-drawer__header">
          <span className="doc-gap-drawer__title">Something missing from this page?</span>
          <button
            type="button"
            className="doc-gap-drawer__close"
            onClick={(e) => { e.stopPropagation(); setOpen(false); }}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="doc-gap-drawer__body">
          <FeedbackForm key={formKey} portalId={portalId} formId={formId} pageUrl={pageUrl} />
        </div>
      </div>
    </footer>
  );
}

function FeedbackForm({ portalId, formId, pageUrl }: { portalId: string; formId: string; pageUrl: string }) {
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [
              { name: "email", value: email },
              { name: "your_feedback", value: feedback },
            ],
            context: { pageUri: pageUrl },
          }),
        }
      );
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="doc-gap-success">Thanks — we'll look into it.</p>;
  }

  return (
    <form className="doc-gap-form" onSubmit={handleSubmit}>
      <label className="doc-gap-label">
        <span>What were you looking for? <span className="doc-gap-required" aria-hidden="true">*</span></span>
        <textarea
          className="doc-gap-textarea"
          placeholder="Describe what you couldn't find..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={3}
          required
          disabled={status === "sending"}
        />
      </label>
      <label className="doc-gap-label">
        Email address
        <input
          className="doc-gap-input"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "sending"}
        />
      </label>
      {status === "error" && <p className="doc-gap-error">Something went wrong. Try again.</p>}
      <button
        type="submit"
        className="doc-gap-submit"
        disabled={status === "sending" || !feedback.trim()}
      >
        {status === "sending" ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
