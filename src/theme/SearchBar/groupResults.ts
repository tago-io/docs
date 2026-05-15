import type { SearchCategory, SearchResult } from "./searchClient";

export type ResultGroup = {
  category: SearchCategory;
  label: string;
  results: SearchResult[];
};

const GROUP_ORDER: SearchCategory[] = ["documentation", "api"];
const GROUP_LABELS: Record<SearchCategory, string> = {
  documentation: "Documentation",
  api: "API Reference",
};

export const groupResults = (results: SearchResult[]): ResultGroup[] => {
  const buckets = new Map<SearchCategory, SearchResult[]>();
  for (const result of results) {
    const list = buckets.get(result.category) ?? [];
    list.push(result);
    buckets.set(result.category, list);
  }
  return GROUP_ORDER.filter((category) => buckets.has(category)).map((category) => ({
    category,
    label: GROUP_LABELS[category],
    results: buckets.get(category) ?? [],
  }));
};

export const flatOrderedResults = (groups: ResultGroup[]): SearchResult[] => {
  return groups.flatMap((group) => group.results);
};

const MAX_BREADCRUMB_SEGMENTS = 3;

const CANONICAL_NAMES: Record<string, string> = {
  tagoio: "TagoIO",
  "tago-io": "TagoIO",
  tagodeploy: "TagoDeploy",
  "tago-deploy": "TagoDeploy",
  tagocore: "TagoCore",
  "tago-core": "TagoCore",
  tagotip: "TagoTiP",
  "tago-tip": "TagoTiP",
  tagotips: "TagoTiPs",
  tagorun: "TagoRUN",
  "tago-run": "TagoRUN",
  api: "API",
  sdk: "SDK",
  iot: "IoT",
  mqtt: "MQTT",
  http: "HTTP",
  https: "HTTPS",
  tcp: "TCP",
  udp: "UDP",
  tls: "TLS",
  ssl: "SSL",
  json: "JSON",
  xml: "XML",
  yaml: "YAML",
  csv: "CSV",
  url: "URL",
  uri: "URI",
  jwt: "JWT",
  rest: "REST",
  cli: "CLI",
  ui: "UI",
  ux: "UX",
  "2fa": "2FA",
  mfa: "MFA",
  sso: "SSO",
  cdn: "CDN",
  dns: "DNS",
  aws: "AWS",
  gcp: "GCP",
};

const canonical = (token: string): string | null => CANONICAL_NAMES[token.toLowerCase()] ?? null;

const humanize = (segment: string): string => {
  const stripped = segment.replace(/\.[a-z0-9]+$/i, "");
  const wholeMatch = canonical(stripped);
  if (wholeMatch) return wholeMatch;

  return stripped
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => canonical(word) ?? word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const permalinkBreadcrumb = (permalink: string): string[] => {
  try {
    const path = new URL(permalink).pathname;
    const segments = path.split("/").filter(Boolean);
    if (segments[0] === "docs") segments.shift();
    if (segments.length > 1) segments.pop();
    if (segments.length === 0) return [];
    const trimmed = segments.length > MAX_BREADCRUMB_SEGMENTS ? segments.slice(-MAX_BREADCRUMB_SEGMENTS) : segments;
    return trimmed.map(humanize);
  } catch {
    return [];
  }
};
