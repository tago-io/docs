/** biome-ignore-all lint/suspicious/noExplicitAny: Don't care */
import YouTube from "@site/src/components/youtube";
import DocCardList from "@theme/DocCardList";
import MDXComponents from "@theme-original/MDXComponents";
import type React from "react";
import { lazy, Suspense } from "react";

// Lazily load Mermaid to avoid shipping it on pages that don't use it
const MermaidLazy = lazy(async () => await import("@theme/Mermaid"));
const Mermaid = (props: React.ComponentProps<any>) => (
  <Suspense fallback={null}>
    <MermaidLazy {...props} />
  </Suspense>
);

export default {
  ...MDXComponents,
  YouTube,
  Mermaid,
  DocCardList,
};
