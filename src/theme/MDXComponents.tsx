/* oxlint-disable @typescript-eslint/no-explicit-any */
import YouTube from "@site/src/components/youtube";
import DocCardList from "@theme/DocCardList";
import MDXComponents from "@theme-original/MDXComponents";

// Custom img component that wraps GIFs to apply border and clipping correctly
const Img = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const { src, className, ...rest } = props;
  // Check if src ends with .gif (case insensitive, ignoring query params)
  const srcPath = src?.split("?")[0] || "";
  const isGif = srcPath.toLowerCase().endsWith(".gif");

  if (isGif) {
    return (
      <span className="gif-wrapper">
        <img src={src} className="gif-image" alt="" {...rest} />
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
  DocCardList,
  img: Img,
};
