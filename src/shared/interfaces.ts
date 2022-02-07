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

export type VoteSelection = "up" | "down" | null;
