export interface VoteCounts {
  positive: number;
  negative: number;
}

export interface CelebrityDocument {
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated?: string;
  votes: VoteCounts;
}

export type Vote = "up" | "down" | null;
