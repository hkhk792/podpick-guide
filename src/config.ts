export const SITE_NAME = "PodPick Guide";
export const SITE_URL = "https://podpickguide.com";
export const SITE_TAGLINE = "Australia Disposable Vape Reviews, Buying Guides & Comparisons";
export const SITE_SUBTITLE =
  "Independent English reviews, flavour guides and comparisons for adult consumers in the Australian disposable vape market.";

/** Public data on GitHub Organization (SEO / citation) */
export const GITHUB_ORG_URL = "https://github.com/PodPickGuide";
export const GITHUB_ORG_LABEL = "Data on GitHub";

/** Australia official store (Alibarbar) */
export const AU_SHOP_URL = "https://www.ailibarbar.com";
export const AU_SHOP_LABEL = "Shop Alibarbar Australia";

/** @deprecated Use AU_SHOP_URL — kept for any residual imports */
export const SHOP_URL = AU_SHOP_URL;
export const SHOP_LABEL = AU_SHOP_LABEL;

export const REGIONS = {
  australia: {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    locale: "en-AU",
    shopUrl: AU_SHOP_URL,
    shopLabel: AU_SHOP_LABEL,
    heroImage: "/images/australia/hero-device.png",
  },
} as const;

/** 在 Vercel / .env 设置 PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXX */
export const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID ?? "";

/** IndexNow 密钥文件名（对应 public 下 {key}.txt） */
export const INDEXNOW_KEY = import.meta.env.INDEXNOW_KEY ?? "12d65cc48c06483a96c304e1e51e4e3c";
