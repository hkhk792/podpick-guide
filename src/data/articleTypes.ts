export type FlavorItem = {
  name: string;
  text: string;
  sweetness?: 1 | 2 | 3 | 4 | 5;
  coolness?: 1 | 2 | 3 | 4 | 5;
  beginner?: 1 | 2 | 3 | 4 | 5;
  overall?: 1 | 2 | 3 | 4 | 5;
  suitableFor?: string[];
  notSuitableFor?: string[];
  entityTags?: string[];
};

export type ArticleGeo = {
  quickAnswer?: string[];
  tldr?: string;
  keyTakeaways?: string[];
  testingMethod?: string[];
  pros?: string[];
  cons?: string[];
  summary?: string[];
  speakable?: string[];
  aggregateRating?: {
    ratingValue: number;
    ratingCount: number;
    bestRating?: number;
  };
  reviewDimensions?: { name: string; ratingValue: number; bestRating?: number }[];
};

export type ArticleSection =
  | { kind: "text"; title?: string; paragraphs: string[]; html?: boolean }
  | { kind: "list"; title: string; items: string[]; ordered?: boolean; html?: boolean }
  | { kind: "flavors"; title: string; lead?: string; items: FlavorItem[]; html?: boolean }
  | {
      kind: "table";
      title: string;
      lead?: string;
      headers: string[];
      rows: string[][];
      caption?: string;
    }
  | { kind: "faq"; title: string; items: { q: string; a: string }[]; html?: boolean }
  | { kind: "prosCons"; title?: string; pros: string[]; cons: string[] }
  | { kind: "keyTakeaways"; title?: string; items: string[] }
  | { kind: "summary"; title?: string; paragraphs: string[]; html?: boolean };

export type ArticleBody = {
  intro: string[];
  introHtml?: boolean;
  disclaimer?: string;
  geo?: ArticleGeo;
  heroCaption?: string;
  sections: ArticleSection[];
};
