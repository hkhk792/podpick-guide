export type HubRegion = "global" | "australia" | "taiwan";

export type PodPickScore = {
  flavorAccuracy: number;
  cooling: number;
  sweetness: number;
  batteryLife: number;
  leakResistance: number;
  beginnerFriendly: number;
  overall: number;
};

export type HubContentSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type HubBrand = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  overview?: string[];
  sections?: HubContentSection[];
  latestArticleSlugs?: string[];
  history: string[];
  popularProducts: string[];
  mainFeatures: string[];
  compatibleProducts: string[];
  flavourRange: string[];
  pros: string[];
  cons: string[];
  faq: { q: string; a: string }[];
  relatedSlugs: string[];
  compareSlug?: string;
  productSlug?: string;
  region: HubRegion | "global";
  heroImage: string;
  imageAlt: string;
  shopUrl?: string;
  datePublished: string;
  dateModified: string;
  score?: PodPickScore;
};

export type HubProduct = {
  slug: string;
  brandSlug: string;
  name: string;
  title: string;
  description: string;
  overview: string[];
  sections?: HubContentSection[];
  tldr?: string;
  whoShouldBuy?: string[];
  performance?: string[];
  specifications: { label: string; value: string }[];
  battery: string[];
  charging: string[];
  flavours: string[];
  pros: string[];
  cons: string[];
  faq: { q: string; a: string }[];
  relatedSlugs: string[];
  region: HubRegion;
  heroImage: string;
  imageAlt: string;
  gallery?: string[];
  shopUrl?: string;
  priceNote?: string;
  datePublished: string;
  dateModified: string;
  score?: PodPickScore;
};

export type HubComparison = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  quickWinner: string;
  leftLabel: string;
  rightLabel: string;
  rows: { feature: string; left: string; right: string }[];
  leftStrengths: string[];
  rightStrengths: string[];
  verdict: string[];
  faq: { q: string; a: string }[];
  region: HubRegion;
  heroImage: string;
  imageAlt: string;
  relatedSlugs: string[];
  datePublished: string;
  dateModified: string;
};

export type HubFaqTopic = {
  slug: string;
  title: string;
  description: string;
  intro?: string;
  items: { q: string; a: string }[];
};

export type HubGuide = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  intro: string;
  sections: HubContentSection[];
  faq?: { q: string; a: string }[];
  relatedGuides?: string[];
  relatedProductSlugs?: string[];
  region: HubRegion;
  heroImage: string;
  imageAlt: string;
  datePublished: string;
  dateModified: string;
};

export type HubReview = {
  slug: string;
  productSlug?: string;
  brandSlug?: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  intro: string;
  tldr?: string;
  dimensions?: { label: string; value: number; note: string }[];
  sections: HubContentSection[];
  pros: string[];
  cons: string[];
  verdict: string[];
  faq: { q: string; a: string }[];
  relatedReviews?: string[];
  region: HubRegion;
  heroImage: string;
  imageAlt: string;
  score?: PodPickScore;
  datePublished: string;
  dateModified: string;
};

export type HubNewsPost = {
  slug: string;
  title: string;
  description: string;
  category: "Australia News" | "Taiwan News" | "Industry News" | "New Product" | "Regulations" | "Market";
  region: HubRegion;
  excerpt: string;
  body: string[];
  heroImage?: string;
  relatedSlugs?: string[];
  datePublished: string;
  dateModified: string;
  /** ISO week tag for editorial calendar e.g. 2026-W28 */
  weekTag: string;
};

export type HubNavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};
