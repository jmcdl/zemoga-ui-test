export interface VoteCounts {
  positive: number;
  negative: number;
}

export interface ImageUrls {
  big: string;
  small: string;
}

export interface CelebrityDocument {
  name: string;
  description: string;
  category: string;
  imgUrls: ImageUrls;
  lastUpdated?: string;
  votes: VoteCounts;
}

export type SelectedVote = "up" | "down" | null;

export type SelectedView = "grid" | "list";
