import type { HubBrand, HubComparison, HubGuide, HubProduct, HubReview } from "./types";
import { hubBrands, getBrand } from "./brands";
import { hubComparisons } from "./comparisons";
import { hubGuides } from "./guides";
import { hubProducts } from "./products";
import { hubReviews } from "./reviews";
import { AU, AU_LIFESTYLE, AU_PACKS, AU_PRODUCTS } from "./australiaImages";

export type AustraliaSectionSlug =
  | "best-disposable-vape"
  | "alibarbar"
  | "hqd"
  | "iget"
  | "kuz";

export type AustraliaSection = {
  slug: AustraliaSectionSlug;
  title: string;
  navLabel: string;
  description: string;
  intro: string;
  heroImage: string;
  imageAlt: string;
  brandSlug?: "alibarbar" | "iget" | "hqd" | "kuz";
};

export const AUSTRALIA_SECTIONS: AustraliaSection[] = [
  {
    slug: "best-disposable-vape",
    title: "Best Disposable Vape Australia",
    navLabel: "Best Disposable",
    description:
      "Independent roundup of the best disposable vapes in Australia — capacity, flavours, value and who each brand suits.",
    intro:
      "Australia's disposable market spans compact pocket devices, familiar legacy brands and newer high-puff models with displays. " +
      "This column compares the category honestly: no single brand wins every use case, but clear patterns emerge on capacity, flavour breadth and buying simplicity.",
    heroImage: `${AU_PACKS}/custom-5-pack.png`,
    imageAlt: "Best disposable vape brands in Australia compared",
  },
  {
    slug: "alibarbar",
    title: "Alibarbar Guides",
    navLabel: "Alibarbar",
    description:
      "Alibarbar Ingot 9000 buying guides, flavour picks, battery FAQs and Australian market context.",
    intro:
      "Alibarbar's Ingot 9000 is one of the clearest high-capacity disposables in Australia: up to 9000 puffs, 22ml e-liquid, LED display and custom flavour packs. " +
      "These guides cover specs, lifespan, flavours and how Alibarbar compares with IGET, HQD and KUZ.",
    heroImage: `${AU_LIFESTYLE}/hero-pair.png`,
    imageAlt: "Alibarbar Ingot 9000 Australia guides",
    brandSlug: "alibarbar",
  },
  {
    slug: "hqd",
    title: "HQD Guides",
    navLabel: "HQD",
    description:
      "HQD disposable vape guides for Australia — compact designs, model specs and when portability beats capacity.",
    intro:
      "HQD built recognition on compact, pocket-friendly disposables. In Australia it often represents the portability side of the market: smaller devices, simpler activation and familiar fruit or mint profiles. " +
      "Use these guides to decide when HQD's form factor makes more sense than a high-puff display device.",
    heroImage: `${AU_PRODUCTS}/flavor-peach-ice.png`,
    imageAlt: "HQD disposable vape guides Australia",
    brandSlug: "hqd",
  },
  {
    slug: "iget",
    title: "IGET Guides",
    navLabel: "IGET",
    description:
      "IGET disposable guides for Australian buyers — model line-up, flavour familiarity and fair comparisons.",
    intro:
      "IGET is one of Australia's most recognised disposable names. The challenge is model variety: Bar, Legend, King and other SKUs do not share the same puff count or capacity. " +
      "These guides help adults compare exact IGET models and understand where IGET still leads on familiarity.",
    heroImage: `${AU_PRODUCTS}/flavor-grape.png`,
    imageAlt: "IGET disposable vape guides Australia",
    brandSlug: "iget",
  },
  {
    slug: "kuz",
    title: "KUZ Guides",
    navLabel: "KUZ",
    description:
      "KUZ disposable vape guides for Australia — high-puff alternatives, model checks and value comparisons.",
    intro:
      "KUZ competes in the high-puff disposable segment alongside Alibarbar and other capacity-focused brands. " +
      "Because specs vary by model, these guides focus on what to verify before buying and how KUZ positions on flavour and value.",
    heroImage: `${AU_PRODUCTS}/flavor-lychee.png`,
    imageAlt: "KUZ disposable vape guides Australia",
    brandSlug: "kuz",
  },
];

export const AUSTRALIA_SECTION_NAV = [
  { label: "Overview", href: "/australia" },
  ...AUSTRALIA_SECTIONS.map((s) => ({
    label: s.navLabel,
    href: `/australia/${s.slug}`,
  })),
];

const BEST_DISPOSABLE_GUIDES = new Set([
  "best-disposable-vape-australia",
  "how-to-use-a-disposable-vape",
  "disposable-vape-laws-in-australia",
]);

export function getAustraliaSection(slug: string | undefined): AustraliaSection | undefined {
  if (!slug) return undefined;
  return AUSTRALIA_SECTIONS.find((section) => section.slug === slug);
}

export function getGuidesForAustraliaSection(section: AustraliaSection): HubGuide[] {
  if (section.slug === "best-disposable-vape") {
    return hubGuides.filter((g) => BEST_DISPOSABLE_GUIDES.has(g.slug));
  }
  if (section.brandSlug) {
    return hubGuides.filter((g) => g.brandSlug === section.brandSlug);
  }
  return [];
}

export function getComparisonsForAustraliaSection(section: AustraliaSection): HubComparison[] {
  const au = hubComparisons.filter((c) => c.region === "australia");
  if (section.slug === "best-disposable-vape") return au;
  if (section.brandSlug) {
    return au.filter((c) => c.relatedSlugs.includes(section.brandSlug!));
  }
  return [];
}

export function getBrandForSection(section: AustraliaSection): HubBrand | undefined {
  if (!section.brandSlug) return undefined;
  return getBrand(section.brandSlug);
}

export function getProductsForSection(section: AustraliaSection): HubProduct[] {
  if (section.brandSlug === "alibarbar") {
    return hubProducts.filter((p) => p.brandSlug === "alibarbar");
  }
  return [];
}

export function getReviewsForSection(section: AustraliaSection): HubReview[] {
  if (section.brandSlug === "alibarbar") return hubReviews;
  return [];
}

export function getOtherAustraliaSections(current: AustraliaSectionSlug): AustraliaSection[] {
  return AUSTRALIA_SECTIONS.filter((s) => s.slug !== current);
}

/** AU-market brands featured in editorial columns (excludes Taiwan-only pod brands). */
export const AU_EDITORIAL_BRANDS = hubBrands.filter((b) =>
  ["alibarbar", "iget", "hqd", "kuz"].includes(b.slug)
);
