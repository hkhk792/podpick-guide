import { SITE_NAME, SITE_URL } from "../config";

export const DEFAULT_AUTHOR = {
  slug: "jason-chen",
  name: "Jason Chen",
  nameZh: "陳傑森",
  title: "Pod Reviewer & Editor",
  titleZh: "煙彈評測編輯",
  bio: "自 2021 年起專注封閉式 Pod System 實測，累計評測 500+ 顆煙彈，涵蓋 SP2S、LANA 等主流品牌。",
  experienceSince: 2021,
  reviewsCount: 500,
  expertise: [
    "Nicotine Salt",
    "Pod System",
    "MTL 口吸",
    "Mesh Coil",
    "Flavor Profile",
    "Cooling Level",
    "VG/PG",
    "Throat Hit",
  ],
  testingMethod: [
    "每款口味連續使用至少 3 天，避免單次印象偏差",
    "統一使用 SP2S 二代主機，固定 MTL 口吸設定",
    "記錄甜度、涼度、擊喉感、耐抽度與還原度五項指標",
    "同一批次至少測試 2 顆彈匣，排除單顆異常",
  ],
  url: `${SITE_URL}/author/jason-chen`,
  image: "/images/author-jason-chen.svg",
} as const;

export function buildAuthorPersonJsonLd() {
  return {
    "@type": "Person",
    name: DEFAULT_AUTHOR.name,
    alternateName: DEFAULT_AUTHOR.nameZh,
    jobTitle: DEFAULT_AUTHOR.title,
    description: DEFAULT_AUTHOR.bio,
    url: DEFAULT_AUTHOR.url,
    image: new URL(DEFAULT_AUTHOR.image, SITE_URL).href,
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    knowsAbout: DEFAULT_AUTHOR.expertise,
  };
}
