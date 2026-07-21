import { AU_SHOP_LABEL, AU_SHOP_URL } from "../config";

const shopBase = AU_SHOP_URL.replace(/\/+$/, "");

/** Deep paths on www.ailibarbar.com */
export const AU_SHOP_PATHS = {
  home: "/",
  productIngot: "/product/quadruple-berry",
  guides: "/guides",
  compare: "/compare",
  reviews: "/reviews",
  laws: "/guides/disposable-vape-laws-in-australia",
  buyingGuide: "/guides/alibarbar-buying-guide-australia",
  bestFlavours: "/guides/best-alibarbar-flavours-australia",
  authenticity: "/faq/authenticity",
  legal: "/faq/legal",
  ageVerification: "/age-verification",
} as const;

export const SHOP_PRODUCTS = {
  quadrupleBerry: "/product/quadruple-berry",
  peachIce: "/product/peach-ice",
  fanta: "/product/fanta",
  lychee: "/product/lychee",
  mangoMagic: "/product/mango-magic",
  grapeIce: "/product/grape-ice",
  blackberryIce: "/product/blackberry-ice",
} as const;

/** Guide slug on PPG → matching ailibarbar guide path */
export const GUIDE_TO_SHOP: Record<string, string> = {
  "what-is-alibarbar-ingot-9000": "/guides/what-is-alibarbar-ingot-9000",
  "how-long-does-alibarbar-ingot-9000-last": "/guides/how-long-does-alibarbar-ingot-9000-last",
  "how-many-puffs-does-alibarbar-ingot-9000-have": "/guides/how-many-puffs-does-alibarbar-ingot-9000-have",
  "can-you-recharge-alibarbar-ingot-9000": "/guides/can-you-recharge-alibarbar-ingot-9000",
  "how-to-use-a-disposable-vape": "/guides/how-to-use-a-disposable-vape",
  "best-alibarbar-flavours-australia": "/guides/best-alibarbar-flavours-australia",
  "disposable-vape-laws-in-australia": "/guides/disposable-vape-laws-in-australia",
  "alibarbar-buying-guide-australia": "/guides/alibarbar-buying-guide-australia",
  "how-to-open-alibarbar-vape": "/guides/how-to-open-alibarbar-vape",
  "best-disposable-vape-australia": "/blog/best-disposable-vape-australia-2026",
  "how-to-make-disposable-vape-last-longer": "/blog/how-to-make-your-disposable-vape-last-longer",
  "high-puff-disposable-capacity-australia-2026":
    "/research/high-puff-disposable-capacity-australia-2026",
};

/** Comparison slug → ailibarbar compare path */
export const COMPARE_TO_SHOP: Record<string, string> = {
  "alibarbar-vs-iget": "/compare/alibarbar-vs-iget",
  "alibarbar-vs-hqd": "/compare/alibarbar-vs-hqd",
  "alibarbar-vs-gunnpod": "/compare/alibarbar-vs-gunnpod",
  "alibarbar-vs-kuz": "/compare/alibarbar-vs-kuz",
  "alibarbar-vs-relx": "/compare/alibarbar-vs-relx",
};

/** Review slug → ailibarbar review + product paths */
export const REVIEW_TO_SHOP: Record<
  string,
  { review: string; product: string }
> = {
  "alibarbar-quadruple-berry-review": {
    review: "/reviews/alibarbar-quadruple-berry-review",
    product: "/product/quadruple-berry",
  },
  "alibarbar-peach-ice-review": {
    review: "/reviews/alibarbar-peach-ice-review",
    product: "/product/peach-ice",
  },
  "alibarbar-fanta-review": {
    review: "/reviews/alibarbar-fanta-review",
    product: "/product/fanta",
  },
  "alibarbar-lychee-review": {
    review: "/reviews/alibarbar-lychee-review",
    product: "/product/lychee",
  },
  "alibarbar-mango-magic-review": {
    review: "/reviews/alibarbar-mango-magic-review",
    product: "/product/mango-magic",
  },
  "alibarbar-grape-ice-review": {
    review: "/reviews/alibarbar-grape-ice-review",
    product: "/product/grape-ice",
  },
  "alibarbar-blackberry-ice-review": {
    review: "/reviews/alibarbar-blackberry-ice-review",
    product: "/product/blackberry-ice",
  },
};

export function shopProductUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${shopBase}${normalized}`;
}

export function shopUrl(path = "/"): string {
  if (!path || path === "/") return shopBase;
  return shopProductUrl(path);
}

export function shopLinkHtml(label = AU_SHOP_LABEL): string {
  return `<a href="${shopBase}" rel="noopener noreferrer">${label}</a>`;
}

export function shopProductLinkHtml(path: string, label: string): string {
  return `<a href="${shopProductUrl(path)}" rel="noopener noreferrer">${label}</a>`;
}

export function guideShopUrl(guideSlug: string): string {
  const path = GUIDE_TO_SHOP[guideSlug] ?? AU_SHOP_PATHS.guides;
  return shopUrl(path);
}

export function compareShopUrl(compareSlug: string): string {
  const path = COMPARE_TO_SHOP[compareSlug] ?? AU_SHOP_PATHS.compare;
  return shopUrl(path);
}

export function reviewShopUrls(reviewSlug: string): { review: string; product: string } {
  const mapped = REVIEW_TO_SHOP[reviewSlug];
  if (mapped) {
    return { review: shopUrl(mapped.review), product: shopUrl(mapped.product) };
  }
  return { review: shopUrl(AU_SHOP_PATHS.reviews), product: shopBase };
}

/** Normalize old TW/shop domains in residual HTML to AU store */
export function linkifyShopMentions(html: string): string {
  if (!html) return html;
  return html
    .replace(/https?:\/\/(?:www\.)?lanatw1?\.com/gi, shopBase)
    .replace(/https?:\/\/(?:www\.)?sp2spods\.com/gi, shopBase)
    .replace(/https?:\/\/(?:www\.)?ailibarbar\.com(?!\/)/gi, shopBase);
}
