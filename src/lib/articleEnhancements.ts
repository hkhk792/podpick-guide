import type { ArticleCard } from "../data/articles";
import { articles as allArticles } from "../data/articles";
import type { ArticleBody, ArticleGeo, ArticleSection } from "../data/articleTypes";
import { DEFAULT_AUTHOR } from "../data/author";

const CATEGORY_FAQ: Record<string, { q: string; a: string }[]> = {
  口味指南: [
    {
      q: "SP2S 最甜的口味是哪幾款？",
      a: "哈密瓜、葡萄、蜂蜜蜜桃甜度偏高；若怕腻可改選茉莉綠茶、冰礦泉等低甜款。詳見本文評分表。",
    },
    {
      q: "SP2S 最涼的口味是哪幾款？",
      a: "南極冰、冰礦泉、酷海鹽檸檬涼感最強；新手建議從微涼果香入手再往上試。",
    },
    {
      q: "女生適合什麼煙彈口味？",
      a: "多數女性玩家偏好蜂蜜蜜桃、茉莉綠茶、葡萄等甜度適中、涼感中等的口味，但仍以個人口感為準。",
    },
    {
      q: "口味描述裡的涼度怎麼看？",
      a: "可參考本站 <a href=\"/coolness-and-sweetness-guide\">涼度與甜度怎麼看？</a> 的刻度說明。",
    },
  ],
  新手指南: [
    {
      q: "第一次買煙彈最不容易踩雷的口味？",
      a: "葡萄、蜂蜜蜜桃、茉莉綠茶——甜度與涼度都偏中庸，適合建立口感基準。",
    },
    {
      q: "新手該選拋棄式還是換彈式？",
      a: "偶爾使用選拋棄式；想長期省錢、試多口味選換彈式。可讀 <a href=\"/disposable-vs-refillable-pods\">拋棄式 vs 換彈式</a>。",
    },
    {
      q: "買錯口味怎麼辦？",
      a: "先確認是否口味疲勞或設備問題；下次可從評分表選「新手友善 ★★★★★」的款式。",
    },
  ],
  選購對比: [
    {
      q: "SP2S 一代和二代可以混用嗎？",
      a: "不行。請以主機說明書標示的適用代數為準，詳見 <a href=\"/sp2s-gen1-vs-gen2-pods\">一代 vs 二代對比</a>。",
    },
    {
      q: "如何降低買到假煙彈的風險？",
      a: "選正規通路、核對包裝防偽，並參考 <a href=\"/identify-counterfeit-pods\">假煙彈辨識指南</a>。",
    },
  ],
  使用技巧: [
    {
      q: "煙彈多久換一次？",
      a: "出現糊味、風味明顯變淡或反覆漏油時就該換。可參考 <a href=\"/how-often-replace-pod-cartridge\">更換訊號清單</a>。",
    },
    {
      q: "漏油跟存放有關嗎？",
      a: "有。請直立存放、避免高溫，詳見 <a href=\"/pod-leaking-troubleshooting\">漏油排查</a> 與 <a href=\"/pod-storage-shelf-life\">保存效期</a>。",
    },
    {
      q: "咕噜聲、炸油要怎麼處理？",
      a: "多半是冷凝水或吸法過急，可參考 <a href=\"/pod-gurgling-spitback-fix\">咕噜聲處理指南</a>。",
    },
  ],
  旅行須知: [
    {
      q: "電子煙可以帶上飛機嗎？",
      a: "多數航司允許隨身行李攜帶，但禁止託運；機上禁止使用。詳見 <a href=\"/airport-vaping-guide\">機場旅行須知</a>。",
    },
    {
      q: "去日本韓國可以帶電子煙嗎？",
      a: "法規經常更新，出發前請查最新規定，並閱讀 <a href=\"/bring-vape-to-japan-korea\">日韓攜帶指南</a>。",
    },
  ],
  入門知識: [
    {
      q: "VG 和 PG 差在哪裡？",
      a: "VG 煙霧量大、口感厚；PG 擊喉感強、風味還原好。DIY 時需依設備調整比例。",
    },
    {
      q: "自製煙油安全嗎？",
      a: "需使用食品級原料、配戴防護，並了解當地法規。本文僅作知識參考，非操作教學。",
    },
  ],
};

const TOPIC_CLUSTER_LINKS: Record<string, string[]> = {
  "sp2s-pod-flavor-guide": [
    "/coolness-and-sweetness-guide",
    "/tea-and-dessert-pod-flavors",
    "/beginner-pod-flavors-2026",
    "/how-to-pick-first-pod-flavor",
    "/sp2s-gen1-vs-gen2-pods",
    "/identify-counterfeit-pods",
    "/pod-storage-shelf-life",
    "/how-often-replace-pod-cartridge",
    "/seasonal-pod-flavor-guide",
    "/sp2s-vs-lana-pod-how-to-choose",
  ],
};

function stars(n: number): string {
  return "★".repeat(n) + "☆".repeat(5 - n);
}

function buildDefaultGeo(article: ArticleCard, body: ArticleBody): ArticleGeo {
  const existing = body.geo ?? {};
  const quickAnswer =
    existing.quickAnswer ??
    (article.slug === "sp2s-pod-flavor-guide"
      ? [
          "SP2S 新手最穩的三款口味是葡萄、蜂蜜蜜桃、茉莉綠茶——甜度適中、涼感中等、還原穩定。",
          "追求重涼可選南極冰、冰礦泉；怕腻口可選鐵觀音、茉莉綠茶等茶飲系。",
          "選購前請確認主機代數（一代/二代），並參考下方完整評分對照表。",
        ]
      : [article.description]);

  const tldr =
    existing.tldr ??
    (article.slug === "sp2s-pod-flavor-guide"
      ? "若只能買一盒：選葡萄。想試涼感：冰礦泉。要耐抽口糧：茉莉綠茶。"
      : `重點：${article.description}`);

  const keyTakeaways =
    existing.keyTakeaways ??
    (article.category === "口味指南"
      ? ["✓ 新手友善", "✓ 日常口糧", "✓ 甜度分級", "✓ 涼度分級", "✓ 實測評分"]
      : ["✓ 實用排查", "✓ 步驟清單", "✓ 常見情境", "✓ 延伸閱讀"]);

  const testingMethod = existing.testingMethod ?? [...DEFAULT_AUTHOR.testingMethod];

  const summary =
    existing.summary ??
    (article.slug === "sp2s-pod-flavor-guide"
      ? [
          "SP2S 32 款口味可依果香、重涼、茶飲、小眾四類選購；新手從葡萄、蜜桃、茉莉綠茶建立基準最穩。",
          "選購時同步確認主機代數、防偽與保存方式，可大幅降低踩雷機率。",
        ]
      : [`${article.title}：${article.description}`]);

  const speakable =
    existing.speakable ?? [quickAnswer[0], tldr, ...summary.slice(0, 1)].filter(Boolean);

  return {
    ...existing,
    quickAnswer,
    tldr,
    keyTakeaways,
    testingMethod,
    summary,
    speakable,
  };
}

function mergeFaqSections(sections: ArticleSection[], article: ArticleCard): ArticleSection[] {
  const faqIndex = sections.findIndex((s) => s.kind === "faq");
  const categoryFaqs = CATEGORY_FAQ[article.category] ?? [];
  const clusterLinks = TOPIC_CLUSTER_LINKS[article.slug] ?? [];

  const clusterFaq =
    clusterLinks.length > 0
      ? [
          {
            q: "還有哪些相關主題值得一起讀？",
            a: clusterLinks
              .slice(0, 6)
              .map((path) => {
                const slug = path.replace(/^\//, "");
                const title =
                  allArticles.find((a) => a.slug === slug)?.title ??
                  slug.replace(/-/g, " ");
                return `<a href="${path}">${title}</a>`;
              })
              .join("、") + " 等文章可組成完整選購知識庫。",
          },
        ]
      : [];

  const supplemental = [...categoryFaqs, ...clusterFaq];
  if (supplemental.length === 0) return sections;

  if (faqIndex === -1) {
    return [
      ...sections,
      {
        kind: "faq" as const,
        title: "常見問題（FAQ）",
        html: true,
        items: supplemental,
      },
    ];
  }

  const faq = sections[faqIndex];
  if (faq.kind !== "faq") return sections;

  const existingQs = new Set(faq.items.map((i) => i.q));
  const merged = [
    ...faq.items,
    ...supplemental.filter((item) => !existingQs.has(item.q)),
  ];

  const updated = [...sections];
  updated[faqIndex] = { ...faq, items: merged, html: true };
  return updated;
}

function ensureSummarySection(sections: ArticleSection[], geo: ArticleGeo): ArticleSection[] {
  if (!geo.summary?.length) return sections;
  if (sections.some((s) => s.kind === "summary")) return sections;
  const hasHtml = geo.summary.some((p) => p.includes("<"));
  return [
    ...sections,
    {
      kind: "summary" as const,
      title: "重點摘要（Summary）",
      paragraphs: geo.summary,
      html: hasHtml,
    },
  ];
}

function ensureTestingMethod(sections: ArticleSection[], geo: ArticleGeo): ArticleSection[] {
  if (!geo.testingMethod?.length) return sections;
  if (sections.some((s) => s.kind === "text" && s.title?.includes("測試方法"))) return sections;
  return [
    {
      kind: "text" as const,
      title: "實測方法（Testing Method）",
      paragraphs: geo.testingMethod,
    },
    ...sections,
  ];
}

/** 為文章補齊 GEO 模板欄位與 FAQ，不改動已有自訂內容 */
export function enrichArticleBody(article: ArticleCard, body: ArticleBody): ArticleBody {
  const geo = buildDefaultGeo(article, body);
  let sections = [...body.sections];
  sections = ensureTestingMethod(sections, geo);
  sections = mergeFaqSections(sections, article);
  sections = ensureSummarySection(sections, geo);
  return { ...body, geo, sections };
}

export function collectAllFaqItems(sections: ArticleSection[]): { q: string; a: string }[] {
  return sections
    .filter((s): s is Extract<ArticleSection, { kind: "faq" }> => s.kind === "faq")
    .flatMap((s) => s.items);
}

export { stars };
