const API_ENDPOINT = "https://api.ai.tago.io/docs/search";
const MIN_QUERY_LENGTH = 1;
const MAX_QUERY_LENGTH = 200;

export type SearchCategory = "documentation" | "api";

export type SearchResult = {
  title: string;
  permalink: string;
  score: number;
  category: SearchCategory;
};

export type SearchResponse = {
  results: SearchResult[];
  tier: string;
};

export const isQueryInRange = (query: string): boolean => {
  const length = query.trim().length;
  return length >= MIN_QUERY_LENGTH && length <= MAX_QUERY_LENGTH;
};

export const searchDocs = async (query: string, signal: AbortSignal, limit = 10): Promise<SearchResponse> => {
  const trimmed = query.trim();
  if (!isQueryInRange(trimmed)) {
    return { results: [], tier: "" };
  }

  const url = `${API_ENDPOINT}?q=${encodeURIComponent(trimmed)}&limit=${limit}`;
  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`Search request failed with status ${response.status}`);
  }

  return (await response.json()) as SearchResponse;
};
