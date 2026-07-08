import { HERO_HEIGHT, HERO_WIDTH } from "./articleDefaults";

export type ArticleCard = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  dateIso: string;
  dateModifiedIso?: string;
  heroImage: string;
  imageAlt: string;
  heroWidth: number;
  heroHeight: number;
  featured?: boolean;
};

type ArticleInput = Omit<ArticleCard, "heroWidth" | "heroHeight"> & {
  heroWidth?: number;
  heroHeight?: number;
};

function defineArticles(items: ArticleInput[]): ArticleCard[] {
  return items.map((a) => ({
    ...a,
    heroWidth: a.heroWidth ?? HERO_WIDTH,
    heroHeight: a.heroHeight ?? HERO_HEIGHT,
    dateModifiedIso: a.dateModifiedIso ?? a.dateIso,
  }));
}

export const articles = defineArticles([
  {
    slug: "sp2s-pod-flavor-guide",
    title: "SP2S 煙彈 32 款完整評測（2026）：甜度、涼度、推薦排行榜",
    description:
      "SP2S 32 款口味實測評分：甜度、涼度、新手友善度對照表，附 Quick Answer、FAQ 與選購建議。",
    category: "口味指南",
    date: "2026/4/3",
    dateIso: "2026-04-03",
    heroImage: "/images/podpick-flavor-selection.png",
    imageAlt: "多款 SP2S 煙彈與水果、茶飲風味選購示意圖",
    featured: true,
  },
  {
    slug: "how-to-pick-first-pod-flavor",
    title: "第一次買煙彈：口味怎麼選才不踩雷？（2026 入門指南）",
    description:
      "從甜度、涼度、擊喉感三維度入門，附入門對照表、Quick Answer 與 10+ FAQ，適合封閉式 Pod 新手。",
    category: "新手指南",
    date: "2026/5/10",
    dateIso: "2026-05-10",
    heroImage: "/images/podpick-cool-sweet-flavors.png",
    imageAlt: "新手選擇煙彈口味時的涼度與甜度對照示意",
    featured: true,
  },
  {
    slug: "sp2s-gen1-vs-gen2-pods",
    title: "SP2S 一代 vs 二代煙彈：差在哪裡？",
    description: "外觀、相容主機、口味線與選購建議，避免買錯代數。",
    category: "選購對比",
    date: "2026/5/8",
    dateIso: "2026-05-08",
    heroImage: "/images/podpick-gen-comparison.png",
    imageAlt: "SP2S 一代與二代煙彈規格並排對比圖",
    featured: true,
  },
  {
    slug: "beginner-pod-flavors-2026",
    title: "2026 新手煙彈口味排行：入門不踩雷清單（實測評分）",
    description: "葡萄、茉莉綠茶、蜜桃等入門排行 TOP 5，附甜度涼度對照表與避坑清單。",
    category: "新手指南",
    date: "2026/5/20",
    dateIso: "2026-05-20",
    heroImage: "/images/podpick-beginner-ranking.png",
    imageAlt: "2026 新手煙彈口味排行與入門選擇示意",
  },
  {
    slug: "sp2s-vs-lana-pod-how-to-choose",
    title: "SP2S 煙彈 vs LANA 怎麼選？",
    description: "相容主機、口味風格與選購邏輯，沒有絕對好壞只有是否適合你。",
    category: "選購對比",
    date: "2026/5/18",
    dateIso: "2026-05-18",
    heroImage: "/images/podpick-brand-choice.png",
    imageAlt: "SP2S 與 LANA 兩種煙彈品牌選擇對比示意",
  },
  {
    slug: "disposable-vs-refillable-pods",
    title: "拋棄式 vs 換彈式：哪種適合你？",
    description: "成本、便利度、口味變化與環保考量，一次看懂兩種型態。",
    category: "選購對比",
    date: "2026/5/5",
    dateIso: "2026-05-05",
    heroImage: "/images/podpick-disposable-refillable.png",
    imageAlt: "拋棄式電子煙與換彈式主機並排對比",
  },
  {
    slug: "pod-no-flavor-or-burned-taste",
    title: "煙彈沒味道、有糊味怎麼辦？完整排查指南",
    description: "味道變淡與糊味分線排查，附症狀對照表、Quick Answer 與 10+ FAQ。",
    category: "使用技巧",
    date: "2026/5/15",
    dateIso: "2026-05-15",
    dateModifiedIso: "2026-06-01",
    heroImage: "/images/podpick-burnt-taste.png",
    imageAlt: "煙彈沒味道與糊味排查警示示意",
  },
  {
    slug: "pod-leaking-troubleshooting",
    title: "煙彈漏油怎麼辦？常見原因與 5 步排查（2026）",
    description: "密封、存放、氣道與彈匣老化——附情境速查表、Quick Answer 與 10+ FAQ。",
    category: "使用技巧",
    date: "2026/5/1",
    dateIso: "2026-05-01",
    dateModifiedIso: "2026-06-01",
    heroImage: "/images/podpick-leak-storage.png",
    imageAlt: "煙彈漏油原因排查與直立保存示意",
  },
  {
    slug: "pod-gurgling-spitback-fix",
    title: "煙彈咕噜聲、炸油怎麼處理？",
    description: "吸油、冷凝水與吸法造成的异响，按步驟排查。",
    category: "使用技巧",
    date: "2026/5/12",
    dateIso: "2026-05-12",
    heroImage: "/images/podpick-spitback.png",
    imageAlt: "煙彈咕噜聲、炸油與冷凝水處理示意",
  },
  {
    slug: "pod-storage-shelf-life",
    title: "煙彈保存與效期：開封後能放多久？",
    description: "避光、直立存放、未開封保存期限與風味變化的實用提醒。",
    category: "使用技巧",
    date: "2026/4/28",
    dateIso: "2026-04-28",
    heroImage: "/images/podpick-leak-storage.png",
    imageAlt: "煙彈開封後保存期限與收納方式示意",
  },
  {
    slug: "how-often-replace-pod-cartridge",
    title: "煙彈多久換一次？該換的 5 個訊號（2026）",
    description: "依使用頻率與體感訊號判斷更換時機，附對照表與延長壽命技巧。",
    category: "使用技巧",
    date: "2026/5/14",
    dateIso: "2026-05-14",
    dateModifiedIso: "2026-06-01",
    heroImage: "/images/podpick-replace-schedule.png",
    imageAlt: "煙彈更換週期、日曆與時鐘提醒示意",
  },
  {
    slug: "identify-counterfeit-pods",
    title: "如何辨別假煙彈？包裝檢查與風險對照表",
    description: "仿品常見特徵、風險等級對照與正規通路建議，附 10+ FAQ。",
    category: "選購對比",
    date: "2026/5/16",
    dateIso: "2026-05-16",
    dateModifiedIso: "2026-06-01",
    heroImage: "/images/podpick-counterfeit.png",
    imageAlt: "使用放大鏡辨別真假煙彈包裝示意",
  },
  {
    slug: "coolness-and-sweetness-guide",
    title: "涼度與甜度怎麼看？口味描述入門",
    description: "「微涼、中涼、重涼」與甜度標示如何對應你的口感偏好。",
    category: "口味指南",
    date: "2026/4/20",
    dateIso: "2026-04-20",
    heroImage: "/images/podpick-cool-sweet-flavors.png",
    imageAlt: "煙彈口味涼度與甜度刻度對照圖",
  },
  {
    slug: "tea-and-dessert-pod-flavors",
    title: "茶飲與甜點系煙彈：適合當口糧的口味",
    description: "鐵觀音、茉莉綠茶、奶類甜點風味——耐抽與不腻口的選法。",
    category: "口味指南",
    date: "2026/4/15",
    dateIso: "2026-04-15",
    heroImage: "/images/podpick-flavor-selection.png",
    imageAlt: "茶飲與甜點風格煙彈口味推薦示意",
  },
  {
    slug: "seasonal-pod-flavor-guide",
    title: "夏天冬天適合什麼煙彈口味？",
    description: "依季節調整涼感與甜度，換季選味不踩雷。",
    category: "口味指南",
    date: "2026/5/22",
    dateIso: "2026-05-22",
    heroImage: "/images/podpick-seasonal.png",
    imageAlt: "夏天與冬天煙彈口味選擇對比示意",
  },
  {
    slug: "bring-vape-to-japan-korea",
    title: "帶電子煙去日本、韓國要注意什麼？",
    description: "行李、海關與當地使用限制的概念整理，出發前請查最新法規。",
    category: "旅行須知",
    date: "2026/5/19",
    dateIso: "2026-05-19",
    heroImage: "/images/podpick-jp-kr-travel.png",
    imageAlt: "前往日本韓國旅行攜帶電子煙注意事項示意",
  },
  {
    slug: "diy-e-liquid-guide",
    title: "如何自製電子煙油？新手 DIY 入門",
    description: "VG/PG、香精比例、調配步驟與安全須知，僅作知識參考。",
    category: "入門知識",
    date: "2026/3/27",
    dateIso: "2026-03-27",
    heroImage: "/images/diy-liquid-mixing-workbench-hero.webp",
    imageAlt: "自製電子煙油 VG PG 香精調配工作台",
  },
  {
    slug: "airport-vaping-guide",
    title: "可以在機場吸電子煙嗎？旅行須知",
    description: "禁吸區、指定吸菸區與機上規定，出發前請以現場標示為準。",
    category: "旅行須知",
    date: "2026/3/27",
    dateIso: "2026-03-27",
    dateModifiedIso: "2026-06-01",
    heroImage: "/images/podpick-travel-airport.png",
    imageAlt: "機場禁煙區與電子煙旅行規定示意",
  },
]);

export function getArticle(slug: string): ArticleCard | undefined {
  return articles.find((a) => a.slug === slug);
}

export const featuredArticles = articles.filter((a) => a.featured);
