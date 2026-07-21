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
] as const;

export const HOME_BRANDS = [
  { name: "Alibarbar", slug: "alibarbar" },
  { name: "IGET", slug: "iget" },
  { name: "HQD", slug: "hqd" },
  { name: "KUZ", slug: "kuz" },
  { name: "RELX", slug: "relx" },
] as const;

export const HOME_GUIDE_LINKS = [
  { label: "Australia Hub", href: "/australia" },
  { label: "Best Disposable AU", href: "/australia/best-disposable-vape" },
  { label: "Buying Guides", href: "/buying-guides" },
  { label: "Comparisons", href: "/comparisons" },
  { label: "FAQ", href: "/faq" },
] as const;
