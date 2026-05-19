import { type SyntheticEvent, useEffect, useRef, useState } from "react";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ThemeClassNames } from "@docusaurus/theme-common";
import EditMetaRow from "@theme/EditMetaRow";
import TagsListInline from "@theme/TagsListInline";
import { clsx } from "clsx";

type Status = "idle" | "sending" | "success" | "error";

const DocItemFooter = () => {
  const { metadata } = useDoc();
  const { editUrl, lastUpdatedAt, lastUpdatedBy, tags } = metadata;
  const { siteConfig } = useDocusaurusContext();
  const [open, setOpen] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const [visible, setVisible] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const fabRef = useRef<HTMLButtonElement>(null);

  const portalId = siteConfig.customFields?.hubspotPortalId as string | undefined;
  const formId = siteConfig.customFields?.hubspotDocGapFormId as string | undefined;
  const pageUrl = `${siteConfig.url}${metadata.permalink}`;

  const hasTags = tags.length > 0;
  const hasEditMeta = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  const hasFeedbackConfig = !!portalId && !!formId;

  useEffect(() => {
    setOpen(false);
    setVisible(false);
    setSucceeded(false);
  }, [metadata.permalink]);

  useEffect(() => {
    if (!succeeded) return;
    const timer = setTimeout(() => {
      setOpen(false);
      setSucceeded(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [succeeded]);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [metadata.permalink]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        fabRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <footer
        ref={footerRef}
        className={clsx(
          (hasTags || hasEditMeta) && ThemeClassNames.docs.docFooter,
          (hasTags || hasEditMeta) && "docusaurus-mt-lg"
        )}
      >
        {hasTags && (
          <div className={clsx("row margin-top--sm", ThemeClassNames.docs.docFooterTagsRow)}>
            <div className="col">
              <TagsListInline tags={tags} />
            </div>
          </div>
        )}
        {hasEditMeta && (
          <EditMetaRow
            className={clsx("margin-top--sm", ThemeClassNames.docs.docFooterEditMetaRow)}
            editUrl={editUrl}
            lastUpdatedAt={lastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
          />
        )}
      </footer>

      {hasFeedbackConfig && (
        <>
          <button
            ref={fabRef}
            type="button"
            id="doc-gap-fab"
            className={clsx("doc-gap-fab", visible && !open && "doc-gap-fab--visible")}
            onClick={() => {
              setOpen(true);
              setFormKey((k) => k + 1);
            }}
            aria-label="Send feedback"
            aria-expanded={open}
            aria-controls="doc-gap-drawer"
            tabIndex={visible && !open ? 0 : -1}
            aria-hidden={!visible || open}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              aria-hidden="true"
              style={{ fill: "currentColor", flexShrink: 0 }}
            >
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
            Send feedback
          </button>

          <div
            id="doc-gap-drawer"
            className={clsx("doc-gap-drawer", open && "doc-gap-drawer--open")}
            role="dialog"
            aria-label="Send feedback"
          >
            {!succeeded && (
              <div className="doc-gap-drawer__header">
                <span className="doc-gap-drawer__title">Something missing from this page?</span>
                <button
                  type="button"
                  className="doc-gap-drawer__close"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(false);
                    fabRef.current?.focus();
                  }}
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            )}
            <div className="doc-gap-drawer__body">
              {succeeded ? (
                <p className="doc-gap-success">Thanks — we'll look into it.</p>
              ) : (
                <FeedbackForm
                  key={formKey}
                  portalId={portalId as string}
                  formId={formId as string}
                  pageUrl={pageUrl}
                  onSuccess={() => setSucceeded(true)}
                />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DocItemFooter;

type FeedbackFormProps = {
  portalId: string;
  formId: string;
  pageUrl: string;
  onSuccess: () => void;
};

const FeedbackForm = ({ portalId, formId, pageUrl, onSuccess }: FeedbackFormProps) => {
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: [
            { name: "email", value: email },
            { name: "your_feedback", value: feedback },
          ],
          context: { pageUri: pageUrl },
        }),
      });
      if (res.ok) {
        onSuccess();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="doc-gap-form" onSubmit={handleSubmit}>
      <label className="doc-gap-label">
        <span>
          What were you looking for?{" "}
          <span className="doc-gap-required" aria-hidden="true">
            *
          </span>
        </span>
        <textarea
          className="doc-gap-textarea"
          placeholder="Describe what you couldn't find..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={3}
          maxLength={2000}
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
          maxLength={254}
          disabled={status === "sending"}
        />
      </label>
      {status === "error" && <p className="doc-gap-error">Something went wrong. Try again.</p>}
      <button type="submit" className="doc-gap-submit" disabled={status === "sending" || !feedback.trim()}>
        {status === "sending" ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};
