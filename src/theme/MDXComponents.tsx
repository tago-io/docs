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

// Custom img component that wraps GIFs to apply border and clipping correctly
const Img = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const { src, className, ...rest } = props;
  // Check if src ends with .gif (case insensitive, ignoring query params)
  const srcPath = src?.split("?")[0] || "";
  const isGif = srcPath.toLowerCase().endsWith(".gif");

  if (isGif) {
    return (
      <span className="gif-wrapper">
        <img src={src} className="gif-image" {...rest} />
      </span>
    );
  }

  // For non-GIF images, use the original img component from MDXComponents
  const OriginalImg = MDXComponents.img || "img";
  return <OriginalImg src={src} className={className} {...rest} />;
};

export default {
  ...MDXComponents,
  YouTube,
  Mermaid,
  DocCardList,
  img: Img,
};
