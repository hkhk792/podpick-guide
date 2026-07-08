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

export type HubBrand = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
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
  items: { q: string; a: string }[];
};

export type HubNavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};
