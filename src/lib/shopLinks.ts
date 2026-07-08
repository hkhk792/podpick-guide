import { SHOP_LABEL, SHOP_URL } from "../config";

const shopBase = SHOP_URL.replace(/\/+$/, "");

/** 商城商品路径（相对 lanatw1.com） */
export const SHOP_PRODUCTS = {
  sp2sUniversalPods: "/product/sp2s-universal-pods",
  sp2sGen1Pods: "/product/sp2s-gen1-pods",
  lanaPods: "/product/lana-pods",
  lanaHost: "/product/lanna",
} as const;

export function shopProductUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${shopBase}${normalized}`;
}

export function shopLinkHtml(label = SHOP_LABEL): string {
  return `<a href="${shopBase}" rel="noopener noreferrer">${label}</a>`;
}

export function shopProductLinkHtml(path: string, label: string): string {
  return `<a href="${shopProductUrl(path)}" rel="noopener noreferrer">${label}</a>`;
}

const SHOP_LINK = shopLinkHtml();

/** 將正文中的商城提及與舊域名統一導向 lanatw1.com */
export function linkifyShopMentions(html: string): string {
  if (!html) return html;

  let out = html
    .replace(/https?:\/\/(?:www\.)?sp2spods\.com/gi, shopBase)
    .replace(/https?:\/\/(?:www\.)?lanatw\.com/gi, shopBase);

  const replacements: [string, string][] = [
    ["官方選購站", SHOP_LINK],
    ["LANA 官方商城", SHOP_LINK],
    ["正規通路", SHOP_LINK],
    ["可追蹤的通路", SHOP_LINK],
    ["可追蹤通路", SHOP_LINK],
  ];

  for (const [phrase, replacement] of replacements) {
    if (!out.includes(phrase)) continue;
    out = out.split(phrase).join(replacement);
  }

  return out;
}
