import { articles, getArticle, type ArticleCard } from "../data/articles";

/** 同分類優先，再補其他文章，用於文末內鏈 */
export function getRelatedArticles(slug: string, limit = 3): ArticleCard[] {
  const current = getArticle(slug);
  if (!current) return [];

  const same = articles.filter((a) => a.slug !== slug && a.category === current.category);
  const other = articles.filter((a) => a.slug !== slug && a.category !== current.category);
  return [...same, ...other].slice(0, limit);
}
