const SAME_ORIGIN_HOSTS = new Set(["docs.tago.io", "docs.beta.tago.io"]);

const isSafeRootedPath = (value: string): boolean =>
  value.startsWith("/") && !value.startsWith("//") && !value.includes(":") && !value.includes("\\");

const isSameOriginHost = (hostname: string): boolean => {
  if (SAME_ORIGIN_HOSTS.has(hostname)) return true;
  return typeof window !== "undefined" && window.location.hostname === hostname;
};

export const toInternalPath = (permalink: string): string | null => {
  try {
    const url = new URL(permalink);
    if (isSameOriginHost(url.hostname)) {
      return url.pathname + url.search + url.hash;
    }
    return null;
  } catch {
    return isSafeRootedPath(permalink) ? permalink : null;
  }
};
