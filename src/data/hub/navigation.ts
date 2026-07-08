import type { HubNavItem } from "./types";

export const MAIN_NAV: HubNavItem[] = [
  { label: "Brands", href: "/brands" },
  { label: "Products", href: "/products" },
  { label: "Reviews", href: "/reviews" },
  { label: "Comparisons", href: "/comparisons" },
  { label: "Buying Guides", href: "/buying-guides" },
  { label: "Flavour Guides", href: "/flavour-guides" },
  { label: "FAQ", href: "/faq" },
  { label: "News", href: "/news" },
];

export const REGION_NAV = [
  { label: "Australia", href: "/australia", flag: "🇦🇺" },
  { label: "Taiwan", href: "/taiwan", flag: "🇹🇼" },
] as const;

export const HOME_BRANDS = [
  { name: "Alibarbar", slug: "alibarbar" },
  { name: "SP2S", slug: "sp2s" },
  { name: "LANA", slug: "lana" },
  { name: "IGET", slug: "iget" },
  { name: "HQD", slug: "hqd" },
  { name: "RELX", slug: "relx" },
  { name: "KUZ", slug: "kuz" },
] as const;

export const HOME_GUIDE_LINKS = [
  { label: "Buying Guides", href: "/buying-guides" },
  { label: "Best Flavours", href: "/flavour-guides" },
  { label: "Reviews", href: "/reviews" },
  { label: "Comparisons", href: "/comparisons" },
  { label: "FAQ", href: "/faq" },
] as const;
