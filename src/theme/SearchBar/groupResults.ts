import type { KnownCategory, SearchResult } from "./searchClient";

export type ResultGroup = {
  category: string;
  label: string;
  results: SearchResult[];
};

const GROUP_ORDER: KnownCategory[] = ["documentation", "api"];
const GROUP_LABELS: Record<KnownCategory, string> = {
  documentation: "Documentation",
  api: "API Reference",
};

const labelForUnknown = (category: string): string => {
  if (category.length === 0) return "Other";
  return category.charAt(0).toUpperCase() + category.slice(1).replace(/[-_]+/g, " ");
};

export const groupResults = (results: SearchResult[]): ResultGroup[] => {
  const buckets = new Map<string, SearchResult[]>();
  for (const result of results) {
    const list = buckets.get(result.category) ?? [];
    list.push(result);
    buckets.set(result.category, list);
  }
  const groups: ResultGroup[] = [];
  for (const category of GROUP_ORDER) {
    const items = buckets.get(category);
    if (!items) continue;
    groups.push({ category, label: GROUP_LABELS[category], results: items });
    buckets.delete(category);
  }
  if (buckets.size > 0) {
    const unknownCategories = [...buckets.keys()];
    console.warn("search: unknown result categories", unknownCategories);
    for (const category of unknownCategories) {
      groups.push({
        category,
        label: labelForUnknown(category),
        results: buckets.get(category) ?? [],
      });
    }
  }
  return groups;
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
