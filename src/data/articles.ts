import { HERO_HEIGHT, HERO_WIDTH } from "./articleDefaults";

/** Kept for JSON-LD helpers / legacy types — zh article routes removed (301 to AU). */
export type ArticleCard = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  dateIso: string;
  dateModifiedIso?: string;
  heroImage: string;
  imageAlt: string;
  heroWidth: number;
  heroHeight: number;
  featured?: boolean;
};

export const articles: ArticleCard[] = [];

export function getArticle(_slug: string | undefined): ArticleCard | undefined {
  return undefined;
}

export const featuredArticles: ArticleCard[] = [];

export { HERO_WIDTH, HERO_HEIGHT };
