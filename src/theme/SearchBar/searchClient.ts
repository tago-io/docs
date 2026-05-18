const API_ENDPOINT = "https://api.ai.tago.io/docs/search";
const MIN_QUERY_LENGTH = 1;
const MAX_QUERY_LENGTH = 200;

export const KNOWN_CATEGORIES = ["documentation", "api"] as const;
export type KnownCategory = (typeof KNOWN_CATEGORIES)[number];
export type SearchCategory = KnownCategory | (string & {});

export type SearchResult = {
  title: string;
  permalink: string;
  score: number;
  category: SearchCategory;
};

export type SearchResponse = {
  results: SearchResult[];
};

export const isQueryInRange = (query: string): boolean => {
  const length = query.trim().length;
  return length >= MIN_QUERY_LENGTH && length <= MAX_QUERY_LENGTH;
};

const isSearchResult = (value: unknown): value is SearchResult => {
  if (typeof value !== "object" || value === null) return false;
  const raw = value as Record<string, unknown>;
  return (
    typeof raw.title === "string" &&
    typeof raw.permalink === "string" &&
    typeof raw.score === "number" &&
    typeof raw.category === "string"
  );
};

export const searchDocs = async (query: string, signal: AbortSignal, limit = 10): Promise<SearchResponse> => {
  const trimmed = query.trim();
  const url = `${API_ENDPOINT}?q=${encodeURIComponent(trimmed)}&limit=${limit}`;
  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`Search request failed with status ${response.status}`);
  }

  const raw: unknown = await response.json();
  if (typeof raw !== "object" || raw === null || !Array.isArray((raw as { results?: unknown }).results)) {
    throw new Error("Search response is missing the results array");
  }
  const results = (raw as { results: unknown[] }).results.filter(isSearchResult);
  return { results };
};
