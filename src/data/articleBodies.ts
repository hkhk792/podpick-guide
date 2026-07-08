import type { ArticleBody, ArticleSection } from "./articleTypes";
import { articleBodiesNew } from "./articleBodiesNew";
import { expandedArticles } from "./expandedArticles";
import { sp2sPodFlavorGuide } from "./sp2sPodFlavorGuide";
import { diyEliquidGuide } from "./diyEliquidGuide";
import { airportVapingGuide } from "./airportVapingGuide";

function mapSp2sSections(
  sections: (typeof sp2sPodFlavorGuide.sections)[number][]
): ArticleSection[] {
  return sections.map((s) => {
    if ("flavors" in s) {
      return {
        kind: "flavors" as const,
        title: s.title,
        lead: s.lead,
        html: "html" in s ? s.html : true,
        items: [...s.flavors],
      };
    }
    if ("headers" in s) {
      return {
        kind: "table" as const,
        title: s.title,
        lead: s.lead,
        headers: [...s.headers],
        rows: s.rows.map((row) => [...row]),
        caption: "caption" in s ? s.caption : undefined,
      };
    }
    if ("paragraphs" in s) {
      return {
        kind: "text" as const,
        title: s.title,
        paragraphs: [...s.paragraphs],
        html: "html" in s ? s.html : false,
      };
    }
    if ("items" in s && "q" in s.items[0]) {
      return {
        kind: "faq" as const,
        title: s.title,
        items: [...s.items],
        html: "html" in s ? s.html : true,
      };
    }
    throw new Error(`Unknown sp2s section: ${s.title}`);
  });
}

export const articleBodies: Record<string, ArticleBody> = {
  ...articleBodiesNew,
  ...expandedArticles,
  "sp2s-pod-flavor-guide": {
    intro: [...sp2sPodFlavorGuide.intro],
    introHtml: true,
    disclaimer: sp2sPodFlavorGuide.disclaimer,
    heroCaption: sp2sPodFlavorGuide.heroCaption,
    geo: { ...sp2sPodFlavorGuide.geo },
    sections: mapSp2sSections([...sp2sPodFlavorGuide.sections]),
  },

  "sp2s-gen1-vs-gen2-pods": {
    intro: [
      "SP2S（思博瑞）煙彈常見「一代」「二代」說法，主要差在相容主機與口味線是否相同。買錯代數會出現裝不上或接觸不良，選購前先確認手邊主機型號。",
    ],
    sections: [
      {
        kind: "text",
        title: "外觀與結構",
        paragraphs: [
          "二代通用彈多為扁長型磁吸或卡扣結構，與對應主機的彈倉尺寸綁定；一代產品線較早，部分口味與彈匣形狀與二代不互通。",
          "若你不確定，請以主機包裝或說明書上的「適用煙彈」標示為準，或向通路確認。",
        ],
      },
      {
        kind: "list",
        title: "選購檢查清單",
        items: [
          "確認主機品牌與型號（例如 SP2S Pro、通用杆等）",
          "確認要買的是「一代」還是「二代」彈匣",
          "同一口味不同代數可能風味接近，但不能混用彈倉",
          "批量購買前可先買單顆或 3 入試口味",
        ],
      },
      {
        kind: "text",
        title: "口味數量與更新",
        paragraphs: [
          "二代線口味選擇通常較多，季節限定與茶飲、涼感系列較完整；若你已習慣某一代口感，建議在同一世代內換口味，減少適應成本。",
        ],
      },
    ],
  },

  "disposable-vs-refillable-pods": {
    intro: [
      "「拋棄式」整支用完即丟；「換彈式」主機可重複使用，只更換煙彈。兩者沒有絕對好壞，取決於你在意成本、便利還是口味變化。",
    ],
    sections: [
      {
        kind: "text",
        title: "拋棄式：省事、帶出門友善",
        paragraphs: [
          "優點：不用充電焦慮（內建電池與油量）、開箱即用、旅行隨手丟。",
          "缺點：長期單口成本通常較高；環保負擔較大；口味固定在同一支內。",
        ],
      },
      {
        kind: "text",
        title: "換彈式：長期較省、口味可換",
        paragraphs: [
          "優點：主機一次投資，之後只買煙彈；可隨時換口味；部分主機可調功率或顯示電量。",
          "缺點：需充電與保養；彈匣與主機需匹配；漏油或接觸不良時要自行排查。",
        ],
      },
      {
        kind: "list",
        title: "怎麼選？",
        items: [
          "偶爾使用、怕麻煩 → 拋棄式較合適",
          "每天使用、想試很多口味 → 換彈式較合適",
          "已有固定品牌主機 → 優先買該品牌相容煙彈",
        ],
      },
    ],
  },

  "pod-storage-shelf-life": {
    intro: [
      "未開封與已開封的煙彈，保存方式不同。正確存放能減少漏油、風味變淡或變苦。",
    ],
    sections: [
      {
        kind: "text",
        title: "未開封",
        paragraphs: [
          "置於陰涼乾燥處，避免陽光直射與高溫。可依包裝標示的製造或建議期限為參考；若包裝鼓脹或漏油，請勿使用。",
        ],
      },
      {
        kind: "text",
        title: "已開封",
        paragraphs: [
          "建議一週內使用完畢風味最佳；若使用頻率低，仍應直立存放並蓋好防塵帽（若有）。",
          "放久後若出現明顯變苦、刺喉或油色變深，建議停止使用。",
        ],
      },
      {
        kind: "list",
        title: "三個不要",
        items: [
          "不要冷凍（可能影響油液稠度與密封）",
          "不要與钥匙、硬物混放，避免擠壓破裂",
          "不要反覆拆裝同一顆彈匣，以免密封圈鬆動",
        ],
      },
    ],
  },

  "coolness-and-sweetness-guide": {
    intro: [
      "選煙彈口味時，最容易讓人卡住的不是口味名稱，而是商家描述裡的「微涼、中涼、重涼」與「低甜、中甜、高甜」。這些詞沒有統一的國家標準，是各家自己的相對描述，但只要掌握「涼度」與「甜度」這兩條軸，就能把幾十款口味快速分類、縮小到適合自己的範圍。",
      "本頁先說明兩條軸各自代表什麼，接著用一張對照表把它們交叉起來，再給幾個常見口味的定位舉例，最後用 FAQ 回答最常被問到的幾個情況。比起死記口味名稱，理解這套座標更實用。",
    ],
    disclaimer: "以下為一般選購與口感參考，實際感受會因主機、吸法與個人習慣而異；涼度／甜度描述各家標準不同，請以同一品牌內的相對刻度來看待。",
    sections: [
      {
        kind: "text",
        title: "涼度軸：風味為主，還是涼感為主？",
        paragraphs: [
          "涼感主要來自薄荷或合成冰感配方，它會影響入口的清涼程度與擊喉感（喉嚨的衝擊感）。涼度越高，吸法越猛、一口越長，刺激就越明顯。",
          "微涼：以風味為主，尾韻只帶一點清涼，適合怕嗆、想專心感受果香或茶香的人。中涼：涼感與甜味大致平衡，多數「水果冰」系列屬於這一層，接受度最廣。重涼：以薄荷或冰感為主軸，擊喉感明顯，例如南極冰、純涼礦泉，適合喜歡強烈清涼或想要「透心涼」感覺的人。",
        ],
      },
      {
        kind: "text",
        title: "甜度軸：要明確甜味，還是要耐抽？",
        paragraphs: [
          "甜度決定了口感是「濃郁明確」還是「清爽收斂」。甜度高的口味第一口很討喜，但長時間使用容易膩；甜度低的口味風味更耐抽，適合當整天使用的「口糧」。",
          "低甜：茶類、礦泉、部分煙草調，甜味收斂但茶香、礦泉感仍清楚。中甜：多數水果口味落在這裡，平衡好上手。高甜：哈密瓜、奶類、甜點、老冰棍類，甜香濃郁，喜歡明確甜味的人會喜歡，怕膩者要斟酌。",
        ],
      },
      {
        kind: "table",
        title: "涼度 × 甜度 對照表",
        lead: "把兩條軸交叉起來，就能大致定位一款口味落在哪一格。表格內為常見口味方向舉例（非特定品牌型號）：",
        headers: ["涼度 ＼ 甜度", "低甜（茶・礦泉）", "中甜（多數水果）", "高甜（奶類・甜點）"],
        rows: [
          ["微涼", "茉莉綠茶、鐵觀音", "微涼葡萄、蜜桃", "微涼奶茶、布丁"],
          ["中涼", "冰礦泉、烏龍冰", "葡萄冰、蜜桃冰、芒果冰", "哈密瓜冰、優格冰"],
          ["重涼", "純涼礦泉、薄荷", "海鹽檸檬、青提冰", "老冰棍、可樂冰"],
        ],
      },
      {
        kind: "flavors",
        title: "幾個常見口味的定位舉例",
        lead: "對照上表，挑幾款最常被問到的口味說明它們大致落在哪裡：",
        items: [
          {
            name: "葡萄（中甜・微涼～中涼）",
            text: "最大眾的入門款，辨識度高、容錯率高。不確定喜好時很適合當第一顆。",
          },
          {
            name: "南極冰／純涼（低甜・重涼）",
            text: "涼感與擊喉感都強，幾乎沒有甜味干擾。怕嗆的新手不建議第一顆就選。",
          },
          {
            name: "鐵觀音（低甜・微涼）",
            text: "茶韻明顯、甘醇耐抽、不易膩，適合長時間使用、不喜歡太甜的人。",
          },
          {
            name: "海鹽檸檬（中甜・重涼）",
            text: "酸甜帶一點鹹的清爽感配上重涼，夏天戶外很受歡迎。",
          },
          {
            name: "哈密瓜（高甜・中涼）",
            text: "濃郁果肉甜香，喜歡明確甜味的人會很愛；怕膩的人建議短時間換著抽。",
          },
        ],
      },
      {
        kind: "list",
        title: "快速配對：照情境選",
        items: [
          "怕膩、想當整天口糧 → 低甜 + 微涼（茶類、礦泉）",
          "夏天戶外、想要清爽 → 中涼～重涼 + 中甜水果（葡萄冰、海鹽檸檬）",
          "冬天室內、不想太刺激 → 茶飲或低甜、微涼果味",
          "從傳統菸過渡 → 先試中涼水果，再依感受調整涼度",
          "喜歡明確甜味 → 高甜（哈密瓜、奶類、甜點），但接受偏濃甜口感",
        ],
      },
      {
        kind: "faq",
        title: "常見問題",
        html: true,
        items: [
          {
            q: "買到的口味「太涼」、嗆喉怎麼辦？",
            a: "先確認是不是吸法太猛或一口吸太久——涼感會隨吸法被放大。若本身就是重涼款（如南極冰、薄荷），改用較短、較緩的吸法會舒服很多；若還是不適應，下次換成「微涼／中涼」的果味款即可。重涼通常不是壞掉，而是配方取向。",
          },
          {
            q: "怎麼從「微涼」換到「中涼」而不踩雷？",
            a: "不要一次跳到重涼。先固定甜度（例如都選中甜水果），只把涼度往上動一格，例如「微涼葡萄 → 葡萄冰」。一次只改一條軸，最容易感受到差異，又不會因為變化太大而不適應。",
          },
          {
            q: "「低甜」是不是就等於沒味道？",
            a: "不是。低甜指的是甜味收斂，但茶香、礦泉感、煙草調等風味仍然清楚，反而更耐抽、不容易膩。怕膩、想長時間使用的人通常更適合低甜。",
          },
          {
            q: "同一個口味，不同商家標的涼度為什麼不一樣？",
            a: "因為「微涼／中涼／重涼」沒有統一標準，是各家各自的相對描述。把它當成「同一品牌內部的相對刻度」來看比較準；跨品牌比較時，用本頁的對照表＋實際口味舉例去推估會更可靠。想看更完整的口味分類與實測心得，可參考〈<a href=\"/sp2s-pod-flavor-guide\">SP2S 煙彈口味推薦：32 款怎麼選</a>〉。",
          },
        ],
      },
      {
        kind: "text",
        html: true,
        paragraphs: [
          "掌握「涼度 × 甜度」這套座標後，再去看任何一份口味清單都會輕鬆很多。想知道具體有哪些口味、各自落在哪個區間，可延伸閱讀〈<a href=\"/sp2s-pod-flavor-guide\">SP2S 煙彈口味推薦：32 款怎麼選？</a>〉，再回到本頁的對照表定位即可。",
        ],
      },
    ],
  },

  "tea-and-dessert-pod-flavors": {
    intro: [
      "茶飲與甜點系口味適合當「口糧」——長時間使用不易腻。與高糖水果相比，茶類通常甜度較低、層次較細。",
    ],
    sections: [
      {
        kind: "flavors",
        title: "茶飲系常見方向",
        lead: "適合不喜歡過甜、想要耐抽口感的人：",
        items: [
          { name: "鐵觀音", text: "茶韻明顯，甘醇感強，適合全天。" },
          { name: "茉莉綠茶", text: "花香清新，甜度低，不易腻。" },
          { name: "烏龍 / 四季春類", text: "介於茶香與淡甜之間，偏清爽。" },
        ],
      },
      {
        kind: "flavors",
        title: "甜點系常見方向",
        lead: "適合偶爾換口味、喜歡奶甜感的人：",
        items: [
          { name: "老冰棍 / 奶冰", text: "復古甜感，甜度偏高。" },
          { name: "布丁、奶油類", text: "浓甜，建議短時間使用。" },
          { name: "可樂、沙士類", text: "帶氣泡感調性，涼感通常較足。" },
        ],
      },
    ],
  },

  "diy-e-liquid-guide": {
    intro: diyEliquidGuide.intro,
    disclaimer: diyEliquidGuide.materialsIntro,
    sections: [
      {
        kind: "list",
        title: diyEliquidGuide.toolsAndIngredients.title,
        items: [
          ...diyEliquidGuide.toolsAndIngredients.materials.lines.map(
            (l) => `材料：${l}`
          ),
          ...diyEliquidGuide.toolsAndIngredients.tools.lines.map((l) => `工具：${l}`),
        ],
      },
      {
        kind: "list",
        title: diyEliquidGuide.steps.title,
        ordered: true,
        items: [...diyEliquidGuide.steps.lines],
      },
      { kind: "text", paragraphs: [diyEliquidGuide.steps.outro] },
      {
        kind: "text",
        title: diyEliquidGuide.freshUse.title,
        paragraphs: [diyEliquidGuide.freshUse.lead, ...diyEliquidGuide.freshUse.body],
      },
      {
        kind: "text",
        title: diyEliquidGuide.diyVsRetail.title,
        paragraphs: [
          diyEliquidGuide.diyVsRetail.p1,
          diyEliquidGuide.diyVsRetail.p2,
          diyEliquidGuide.diyVsRetail.p3,
        ],
      },
      {
        kind: "text",
        title: diyEliquidGuide.shelfLife.title,
        paragraphs: [
          ...diyEliquidGuide.shelfLife.leadBeforeList,
          diyEliquidGuide.shelfLife.outro,
        ],
      },
      {
        kind: "list",
        title: "保存三點",
        items: [...diyEliquidGuide.shelfLife.tips],
      },
      {
        kind: "text",
        title: diyEliquidGuide.safety.title,
        paragraphs: [...diyEliquidGuide.safety.body],
      },
      {
        kind: "faq",
        title: diyEliquidGuide.faq.title,
        items: [...diyEliquidGuide.faq.items],
      },
    ],
  },

  "airport-vaping-guide": {
    intro: airportVapingGuide.intro,
    disclaimer: airportVapingGuide.disclaimer,
    sections: [
      ...airportVapingGuide.sections.map((s) => ({
        kind: "text" as const,
        title: s.title,
        paragraphs: [...s.paragraphs],
      })),
      {
        kind: "list" as const,
        title: "出發前 5 分鐘檢查清單",
        items: [
          "確認航空公司對電子煙與備用電池的規定",
          "主機放隨身行李，避免托運鋰電池設備",
          "煙油遵守液體容量與封袋規範",
          "抵達機場後只在明確標示吸煙區使用",
          "轉機機場重新確認規定，不沿用上一站經驗",
        ],
      },
      {
        kind: "faq" as const,
        html: true,
        title: "常見問題",
        items: [
          {
            q: "在機場洗手間偷偷吸一口可以嗎？",
            a: "不建議，且風險高。多數機場洗手間有偵測設備，觸發後可能導致安檢與行程延誤。",
          },
          {
            q: "指定吸煙區就一定能吸電子煙嗎？",
            a: "不一定。部分機場對電子煙另有規定，建議先看現場標示，必要時直接詢問工作人員。",
          },
          {
            q: "去日韓旅行要另外注意什麼？",
            a: "目的地法規與海關限制常有差異，建議搭配閱讀 <a href=\"/bring-vape-to-japan-korea\">帶電子煙去日本、韓國要注意什麼？</a>。",
          },
        ],
      },
    ],
  },
};

export function getArticleBody(slug: string): ArticleBody | undefined {
  return articleBodies[slug];
}
