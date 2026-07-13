export const SITE_NAME = "PodPick Guide";
export const SITE_URL = "https://podpickguide.com";
export const SITE_TAGLINE = "Independent Vape Reviews, Buying Guides & Comparisons";
export const SITE_SUBTITLE =
  "Helping adult consumers choose the right vape products through independent reviews, flavour guides and comparisons.";

/** Public data on GitHub Organization (SEO / citation) */
export const GITHUB_ORG_URL = "https://github.com/PodPickGuide";
export const GITHUB_ORG_LABEL = "Data on GitHub";

/** 台灣官方選購站 */
export const SHOP_URL = "https://lanatw1.com";
export const SHOP_LABEL = "LANA 官方商城";

/** 澳洲官方商城 */
export const AU_SHOP_URL = "https://www.alibarbar.mom";
export const AU_SHOP_LABEL = "Shop Alibarbar Australia";

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
  taiwan: {
    slug: "taiwan",
    name: "Taiwan",
    flag: "🇹🇼",
    locale: "zh-Hant-TW",
    shopUrl: SHOP_URL,
    shopLabel: SHOP_LABEL,
    heroImage: "/images/podpick-flavor-selection.png",
  },
} as const;

/** LINE 諮詢（口味、規格、現貨、售後） */
export const LINE_ID = "kao28992";
export const LINE_URL = "https://line.me/ti/p/2_fR9iUP_1";

/** 在 Vercel / .env 设置 PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXX */
export const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID ?? "";

/** IndexNow 密钥文件名（对应 public 下 {key}.txt） */
export const INDEXNOW_KEY = import.meta.env.INDEXNOW_KEY ?? "podpick7f3a9c2b1e8d4f06";
