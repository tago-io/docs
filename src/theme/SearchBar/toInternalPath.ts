const SAME_ORIGIN_HOSTS = new Set(["docs.tago.io", "docs.beta.tago.io"]);

export const toInternalPath = (permalink: string): string | null => {
  try {
    const url = new URL(permalink);
    if (SAME_ORIGIN_HOSTS.has(url.hostname)) {
      return url.pathname + url.search + url.hash;
    }
    return null;
  } catch {
    return permalink.startsWith("/") ? permalink : null;
  }
};
