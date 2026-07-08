import type { FlavorItem } from "./articleTypes";

function flavor(
  name: string,
  text: string,
  opts: Partial<Omit<FlavorItem, "name" | "text">> = {}
): FlavorItem {
  return { name, text, ...opts };
}

export const sp2sPodFlavorGuide = {
  intro: [
    "SP2S 煙彈（思博瑞）作為封閉式 Pod System 的熱門品牌，其二代通用煙彈以高還原度與細膩煙霧著稱。面對 32 款口味，選購關鍵不在「哪個最好」，而在甜度（Sweetness）、涼度（Cooling Level）、擊喉感（Throat Hit）與你的使用場景是否匹配。",
    "本文依 2026 年 3 天連續實測整理，每款附甜度/涼度/新手友善度評分，並標註適合的 Flavor Profile 與 Nicotine Salt 口吸（MTL）情境。選購前也請先確認主機代數，可參考 <a href=\"/sp2s-gen1-vs-gen2-pods\">SP2S 一代 vs 二代</a> 避免買錯。",
  ],
  disclaimer:
    "本文僅就風格與分類作分享；產品與法規以實際通路為準。本內容僅供年滿 20 歲之使用者參考，非醫療建議。",
  heroCaption: "圖 1：SP2S 32 款口味選購對照——甜度、涼度與新手推薦矩陣（2026 實測）",
  geo: {
    quickAnswer: [
      "SP2S 新手最穩的三款：葡萄、蜂蜜蜜桃、茉莉綠茶——甜度 ★★★★ 左右、涼度 ★★、還原穩定、耐抽。",
      "追求重涼（Cooling Level 高）：南極冰、冰礦泉、酷海鹽檸檬；怕腻口選鐵觀音、茉莉綠茶等茶飲系。",
      "選購前確認 Pod System 主機代數、防偽標示，並搭配下方完整 Comparison Table 縮小範圍。",
    ],
    tldr: "若只能買一盒：選葡萄。想試涼感：冰礦泉。要耐抽口糧：茉莉綠茶。",
    keyTakeaways: [
      "✓ 新手友善：葡萄、蜂蜜蜜桃、茉莉綠茶",
      "✓ 重涼派：南極冰、冰礦泉、酷海鹽檸檬",
      "✓ 日常口糧：鐵觀音、茉莉綠茶、葡萄",
      "✓ 甜度偏高：哈密瓜、葡萄、蜂蜜蜜桃",
      "✓ 選購前確認一代/二代相容與防偽",
    ],
    testingMethod: [
      "每款口味連續使用 3 天，記錄首日、次日與第三日的風味變化",
      "統一 SP2S 二代主機 + MTL 口吸，避免功率差異影響 Mesh Coil 表現",
      "評分維度：甜度、涼度、擊喉感、新手友善度、整體推薦度（1–5 星）",
      "同一批次至少測 2 顆彈匣，排除單顆密封或芯體異常",
    ],
    pros: [
      "32 款口味覆蓋果香、茶飲、重涼、小眾，選擇完整",
      "二代通用彈還原度高，VG/PG 平衡，日常口糧穩定",
      "3 入包裝性價比佳，適合口味輪換",
      "茶飲系（鐵觀音、茉莉綠茶）耐抽、不腻口",
    ],
    cons: [
      "部分果味甜度偏高，Mint Lover 或怕腻者需避開",
      "重涼款擊喉感強，新手不宜第一顆就試",
      "一代/二代不相容，選購前務必確認主機",
      "季節限定口味流通性不一，需留意現貨",
    ],
    summary: [
      "SP2S 32 款可依果香、重涼、茶飲、小眾四類選購；新手從葡萄、蜜桃、茉莉綠茶建立口感基準最穩。",
      "選購時同步確認主機代數、防偽與保存方式，並搭配 <a href=\"/pod-storage-shelf-life\">煙彈保存指南</a> 與 <a href=\"/identify-counterfeit-pods\">假彈辨識</a>，可大幅降低踩雷。",
    ],
    speakable: [
      "SP2S 新手最穩的三款口味是葡萄、蜂蜜蜜桃、茉莉綠茶。",
      "若只能買一盒，選葡萄；想試涼感選冰礦泉；要耐抽口糧選茉莉綠茶。",
    ],
    aggregateRating: { ratingValue: 4.6, ratingCount: 32, bestRating: 5 },
    reviewDimensions: [
      { name: "Taste 風味還原", ratingValue: 4.7 },
      { name: "Coolness 涼度表現", ratingValue: 4.3 },
      { name: "Sweetness 甜度平衡", ratingValue: 4.2 },
      { name: "Overall 整體推薦", ratingValue: 4.6 },
    ],
  },
  sections: [
    {
      title: "SP2S 口味評分對照表（Comparison Table）",
      lead: "以下為 2026 實測精選款；完整 32 款可依系列往下閱讀。若你剛接觸 Pod System，優先選「新手 ★★★★★」的款式。",
      headers: ["口味", "甜度", "涼度", "新手", "適合對象"],
      rows: [
        ["葡萄 Grape", "★★★★", "★★", "★★★★★", "新手、日常、果香愛好者"],
        ["蜂蜜蜜桃 Honey Peach", "★★★★", "★", "★★★★★", "女性玩家、甜口糧"],
        ["茉莉綠茶 Jasmine Green Tea", "★★", "★", "★★★★★", "耐抽、怕腻、茶飲派"],
        ["哈密瓜 Cantaloupe", "★★★★★", "★★", "★★★", "重甜、重口味"],
        ["南極冰 Antarctic Ice", "★", "★★★★★", "★★", "重涼、Mint Lover"],
        ["冰礦泉 Spring Mineral Water", "★", "★★★★", "★★★★", "清爽、夏日消暑"],
        ["鐵觀音 Tea Guan Yin", "★★", "★", "★★★★", "茶飲、長時間口吸"],
        ["酷海鹽檸檬 Cool Lemon", "★★★", "★★★★★", "★★★", "酸爽、重涼"],
      ],
      caption: "圖 2：SP2S 精選口味甜度、涼度與新手友善度對照（實測 2026）",
    },
    {
      title: "1. 初學者首選：經典果香系列",
      lead: "剛接觸 Nicotine Salt + Pod System 的玩家，建議從大眾接受度最高的水果 Flavor Profile 入手。若偏好甜度適中，可先試 <a href=\"/how-to-pick-first-pod-flavor\">第一次買煙彈怎麼選</a> 的三維度框架。",
      flavors: [
        flavor("葡萄 (Grape)", "SP2S 長青冠軍，葡萄果汁感濃郁，甜度適中、涼感輕微，還原穩定。", {
          sweetness: 4,
          coolness: 2,
          beginner: 5,
          overall: 5,
          suitableFor: ["新手", "日常口糧", "果香愛好者"],
          notSuitableFor: ["Mint Lover", "重涼派"],
          entityTags: ["Nicotine Salt", "Pod System", "MTL", "Flavor Profile"],
        }),
        flavor("蜂蜜蜜桃 (Honey Peach)", "淡淡蜂蜜香點綴水蜜桃清甜，女性玩家口袋名單，擊喉感柔和。", {
          sweetness: 4,
          coolness: 1,
          beginner: 5,
          overall: 4,
          suitableFor: ["新手", "甜口糧", "女性玩家"],
          notSuitableFor: ["重涼派", "怕腻口"],
          entityTags: ["Sweetness", "Throat Hit"],
        }),
        flavor("哈密瓜 (Cantaloupe)", "甜度偏高，入口果肉香氣飽滿，適合喜歡重口味的玩家。", {
          sweetness: 5,
          coolness: 2,
          beginner: 3,
          overall: 4,
          suitableFor: ["重甜派", "果香愛好者"],
          notSuitableFor: ["新手第一顆", "茶飲派"],
          entityTags: ["Flavor Profile", "Mesh Coil"],
        }),
      ],
    },
    {
      title: "2. 極致酷涼：夏日消暑系列",
      lead: "追求 Cooling Level 的玩家，這幾款涼感最強。新手若怕嗆，建議先看 <a href=\"/coolness-and-sweetness-guide\">涼度與甜度怎麼看</a> 再下手。",
      flavors: [
        flavor("南極冰 (Antarctic Ice)", "純薄荷冰感，無多餘甜味，擊喉感最強，重涼派首選。", {
          sweetness: 1,
          coolness: 5,
          beginner: 2,
          overall: 4,
          suitableFor: ["重涼派", "Mint Lover", "夏日消暑"],
          notSuitableFor: ["新手", "怕嗆喉"],
          entityTags: ["Cooling Level", "Throat Hit", "MTL"],
        }),
        flavor("冰礦泉 (Spring Mineral Water)", "大熱天喝冰鎮礦泉水的乾淨涼感，不腻口、耐抽。", {
          sweetness: 1,
          coolness: 4,
          beginner: 4,
          overall: 5,
          suitableFor: ["日常口糧", "怕腻", "夏日"],
          notSuitableFor: ["重甜派"],
          entityTags: ["Cooling Level", "Pod System"],
        }),
        flavor("酷海鹽檸檬 (Cool Lemon)", "檸檬酸爽配微鹹海鹽感，層次豐富，涼度夠力。", {
          sweetness: 3,
          coolness: 5,
          beginner: 3,
          overall: 4,
          suitableFor: ["重涼派", "喜歡酸爽"],
          notSuitableFor: ["新手第一顆"],
          entityTags: ["Cooling Level", "Flavor Profile"],
        }),
      ],
    },
    {
      title: "3. 文青必備：茶飲與特調系列",
      lead: "不喜歡太甜水果？茶飲系是最佳口糧選擇。延伸閱讀：<a href=\"/tea-and-dessert-pod-flavors\">茶飲與甜點系煙彈指南</a>。",
      flavors: [
        flavor("鐵觀音 (Tea Guan Yin)", "還原現泡甘醇茶韻，耐抽首選，甜度低、不腻口。", {
          sweetness: 2,
          coolness: 1,
          beginner: 4,
          overall: 5,
          suitableFor: ["茶飲派", "長時間口吸", "怕腻"],
          notSuitableFor: ["重甜派", "重涼派"],
          entityTags: ["Flavor Profile", "MTL"],
        }),
        flavor("茉莉綠茶 (Jasmine Green Tea)", "清新茉莉花香搭淡綠茶味，整天口糧不膩。", {
          sweetness: 2,
          coolness: 1,
          beginner: 5,
          overall: 5,
          suitableFor: ["新手", "日常", "茶飲派"],
          notSuitableFor: ["重甜重涼"],
          entityTags: ["Nicotine Salt", "Flavor Profile"],
        }),
        flavor("可樂 (Freezy Coke)", "經典肥宅快樂水，帶氣泡感涼爽，過癮但甜度偏高。", {
          sweetness: 4,
          coolness: 3,
          beginner: 3,
          overall: 4,
          suitableFor: ["汽水愛好者", "重口味"],
          notSuitableFor: ["茶飲派", "怕甜"],
          entityTags: ["Flavor Profile"],
        }),
      ],
    },
    {
      title: "4. 獨特驚喜：小眾特色系列",
      lead: "想挑戰不同味蕾可試這類小眾 Flavor Profile；不確定可先讀 <a href=\"/beginner-pod-flavors-2026\">2026 新手口味排行</a>。",
      flavors: [
        flavor("老冰棍 (Old Popsicle)", "復古奶甜冰品味，獨特懷舊感，甜度中高。", {
          sweetness: 4,
          coolness: 2,
          beginner: 3,
          overall: 3,
          suitableFor: ["懷舊口味", "甜點派"],
          notSuitableFor: ["新手第一顆"],
          entityTags: ["Flavor Profile"],
        }),
        flavor("沙士啤酒精選 (Sarsae Beer)", "獨特沙士風味，建議有經驗後再挑戰。", {
          sweetness: 3,
          coolness: 2,
          beginner: 2,
          overall: 3,
          suitableFor: ["獵奇玩家"],
          notSuitableFor: ["新手", "保守派"],
          entityTags: ["Flavor Profile"],
        }),
      ],
    },
    {
      title: "選購實用提醒：Pod System 實體知識",
      paragraphs: [
        "選口味之外，建議同步了解這些實體概念：<strong>Nicotine Salt</strong> 讓 MTL 口吸更順；<strong>Mesh Coil</strong> 影響霧化與風味還原；<strong>VG/PG</strong> 比例決定煙霧量與擊喉感。",
        "保存請直立、避光，開封後風味會隨時間變化，詳見 <a href=\"/pod-storage-shelf-life\">煙彈保存與效期</a>。若出現漏油、糊味，分別參考 <a href=\"/pod-leaking-troubleshooting\">漏油排查</a> 與 <a href=\"/pod-no-flavor-or-burned-taste\">沒味道/糊味處理</a>。",
        "出國旅行攜帶請先看 <a href=\"/airport-vaping-guide\">機場規定</a>；換季選味可參考 <a href=\"/seasonal-pod-flavor-guide\">季節口味指南</a>。與 LANA 比較請讀 <a href=\"/sp2s-vs-lana-pod-how-to-choose\">品牌選購對比</a>。",
      ],
      html: true,
    },
    {
      title: "常見問題（FAQ）",
      items: [
        {
          q: "SP2S 最甜的口味是哪幾款？",
          a: "哈密瓜、葡萄、蜂蜜蜜桃甜度最高（★★★★–★★★★★）。怕腻建議茉莉綠茶、鐵觀音或冰礦泉。",
        },
        {
          q: "SP2S 最涼的口味是哪幾款？",
          a: "南極冰、酷海鹽檸檬涼度最強（★★★★★）；冰礦泉涼但不腻，更適合日常。",
        },
        {
          q: "SP2S 適合新手嗎？",
          a: "適合，但請從葡萄、蜂蜜蜜桃、茉莉綠茶入手，避免第一顆就選南極冰等重涼款。",
        },
        {
          q: "SP2S 適合女生嗎？",
          a: "多數女性玩家偏好蜂蜜蜜桃、葡萄、茉莉綠茶；實際仍取決於甜度與涼度耐受度。",
        },
        {
          q: "SP2S 煙彈多久換一次？",
          a: "出現糊味、風味明顯變淡或反覆漏油時就該換。詳見 <a href=\"/how-often-replace-pod-cartridge\">更換訊號清單</a>。",
        },
        {
          q: "一代和二代煙彈可以混用嗎？",
          a: "不行。請以主機說明書為準，參考 <a href=\"/sp2s-gen1-vs-gen2-pods\">一代 vs 二代對比</a>。",
        },
        {
          q: "如何辨別假 SP2S 煙彈？",
          a: "檢查包裝印刷、防偽標籤與口感異常。完整清單見 <a href=\"/identify-counterfeit-pods\">假煙彈辨識</a>。",
        },
        {
          q: "夏天和冬天口味要怎麼換？",
          a: "夏天可提高涼度選冰礦泉、海鹽檸檬；冬天可選茶飲或甜度高一點的果香。見 <a href=\"/seasonal-pod-flavor-guide\">季節指南</a>。",
        },
        {
          q: "茶飲口味會腻嗎？",
          a: "鐵觀音、茉莉綠茶甜度低，是最適合長時間口糧的茶飲系；可搭配 <a href=\"/tea-and-dessert-pod-flavors\">茶飲甜點指南</a>。",
        },
        {
          q: "買一盒 3 入該怎麼搭配？",
          a: "保守組合：葡萄 + 茉莉綠茶 + 冰礦泉（甜/淡/涼各一）。想試重涼可加南極冰替換冰礦泉。",
        },
        {
          q: "口味沒味道是假貨嗎？",
          a: "不一定。先排查電量、油量、口味疲勞與芯體老化，再考慮來源問題。",
        },
        {
          q: "哪一款最適合當每天口糧？",
          a: "茉莉綠茶、鐵觀音、葡萄——耐抽、風味穩定、接受度高。",
        },
      ],
      html: true,
    },
  ],
} as const;
