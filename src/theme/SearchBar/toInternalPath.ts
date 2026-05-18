const SAME_ORIGIN_HOSTS = new Set(["docs.tago.io", "docs.beta.tago.io"]);

const isSafeRootedPath = (value: string): boolean =>
  value.startsWith("/") && !value.startsWith("//") && !value.includes(":") && !value.includes("\\");

export const toInternalPath = (permalink: string): string | null => {
  try {
    const url = new URL(permalink);
    if (SAME_ORIGIN_HOSTS.has(url.hostname)) {
      return url.pathname + url.search + url.hash;
    }
    return null;
  } catch {
    return isSafeRootedPath(permalink) ? permalink : null;
  }
};
