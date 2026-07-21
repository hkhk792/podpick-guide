import type { HubProduct } from "./types";
import { AU, AU_LIFESTYLE, AU_PACKS, AU_PRODUCTS } from "./australiaImages";

type ProductSectionProfile = {
  productName: string;
  format: string;
  specStory: string;
  batteryStory: string;
  chargingStory: string;
  flavourStory: string;
  performanceStory: string;
  buyerStory: string;
  tradeoffStory: string;
  buyingStory: string;
};

function makeProductSections(profile: ProductSectionProfile): HubProduct["sections"] {
  return [
    {
      heading: "Overview",
      paragraphs: [
        `${profile.productName} is a ${profile.format}. The most useful way to evaluate it is not by a single headline claim, but by how the format behaves after repeated daily use.`,
        "PodPick Guide looks at setup, draw style, capacity, flavour stability, maintenance and regional buying context so adults can compare it against both disposables and pod systems without mixing categories.",
      ],
    },
    {
      heading: "Specs narrative",
      paragraphs: [
        profile.specStory,
        "Specifications are most helpful when they answer a practical question: how long it may last, whether it needs charging, what parts need replacing and how much the buyer has to manage after opening the box.",
      ],
    },
    {
      heading: "Battery",
      paragraphs: [
        profile.batteryStory,
        "Battery behaviour affects flavour more than many shoppers expect. Stable output helps the coil perform consistently, while low charge can make vapour feel weak or uneven.",
      ],
    },
    {
      heading: "Charging",
      paragraphs: [
        profile.chargingStory,
        "Do not improvise charging on any product that is not designed for it. Rechargeable hosts should use appropriate cables, while sealed non-rechargeable devices should be replaced or recycled when finished.",
      ],
    },
    {
      heading: "Flavours",
      paragraphs: [
        profile.flavourStory,
        "The best first purchase is usually a small range across flavour families. Once sweetness, cooling and profile preference are known, repeat buying becomes much easier.",
      ],
    },
    {
      heading: "Performance",
      paragraphs: [
        profile.performanceStory,
        "Performance should be judged across the full product life, not only the first ten puffs. Watch for flavour fade, leaking, weak output, burnt taste and whether the product gives clear end-of-life signals.",
      ],
    },
    {
      heading: "Who Should Buy",
      paragraphs: [
        profile.buyerStory,
        "Adults who do not already smoke or vape should not start. Buyers should also check local rules, nicotine labelling and retailer policies before ordering.",
      ],
    },
    {
      heading: "Pros/Cons analysis",
      paragraphs: [
        profile.tradeoffStory,
        "A good product is not universal. Capacity, portability, flavour choice, setup time, waste profile and compatibility risk all push buyers toward different formats.",
      ],
    },
    {
      heading: "Buying Tips",
      paragraphs: [
        profile.buyingStory,
        "Keep packaging until the product has been checked, buy from traceable retailers, avoid suspiciously cheap listings and compare exact product names rather than relying only on brand recognition.",
      ],
    },
  ];
}

export const hubProducts: HubProduct[] = [
  {
    slug: "alibarbar-ingot-9000",
    brandSlug: "alibarbar",
    name: "Alibarbar Ingot 9000",
    title: "Alibarbar Ingot 9000 Review & Specifications",
    description:
      "Full specs for the Alibarbar Ingot 9000 - up to 9000 puffs, 22ml e-liquid, LED display and Australian flavour range.",
    tldr:
      "The Alibarbar Ingot 9000 is the strongest long-life disposable in this hub: high capacity, display feedback, simple draw and flexible flavour packs.",
    overview: [
      "The Alibarbar Ingot 9000 is a high-capacity disposable vape for adult users who want longevity without refilling or charging. It is designed around a single-device lifecycle: open it, use it, monitor the display and replace or recycle it responsibly when finished.",
      "A 2350mAh built-in battery and 22ml e-liquid reservoir support the headline up-to-9000-puff rating. Real-world use depends on draw length and frequency, but the spec clearly places the Ingot in the long-life disposable category.",
      "The smart LED display is the most practical usability feature. It shows remaining battery and e-liquid, reducing the guesswork that often happens with sealed disposables.",
      "The device is inhale-activated, so there is no button sequence or setup. This makes it approachable for adults who want a simple mouth-to-lung experience without learning a pod or refillable system.",
      "Its main trade-off is size and single-use format. It is larger than compact disposables, and it is not rechargeable or refillable. Adults who want a reusable device should compare it with pod systems such as RELX, SP2S or LANA.",
    ],
    sections: makeProductSections({
      productName: "The Alibarbar Ingot 9000",
      format: "high-capacity all-in-one disposable vape for adult Australian buyers",
      specStory:
        "The core specification story is unusually clear: up to 9000 puffs, 22ml pre-filled e-liquid, a 2350mAh non-rechargeable battery, inhale activation, LED battery plus e-liquid display and an approximate 90g device weight.",
      batteryStory:
        "The built-in 2350mAh cell is sized to support the large e-liquid reservoir without asking the user to recharge. That is the key reason the device can remain simple while still targeting a high puff count.",
      chargingStory:
        "The Ingot 9000 is non-rechargeable. When the battery or e-liquid indicator reaches the end and vapour drops, the device has reached end-of-life.",
      flavourStory:
        "The range covers familiar fruit, ice, soda and tropical profiles, including Quadruple Berry, Peach Ice, Fanta, Mango, Grape and Strawberry Watermelon. Custom packs are useful because they let adults test several flavours in one order.",
      performanceStory:
        "The large battery and e-liquid capacity make the Ingot feel more consistent than many smaller disposables. The display also helps users understand whether a weak draw is likely battery, e-liquid or end-of-life related.",
      buyerStory:
        "It suits adults who want maximum simplicity, high capacity and no pod compatibility decisions. It is especially practical for buyers who dislike charging routines or want a device that can last longer between replacements.",
      tradeoffStory:
        "The main pros are longevity, display visibility and flavour-pack flexibility. The main cons are larger size, no recharging and the waste profile of a disposable device.",
      buyingStory:
        "Compare current flavour availability, pack pricing, shipping policy and authenticity details. Ailibarbar.com is a regional retailer reference for Australian Alibarbar stock and ordering information.",
    }),
    whoShouldBuy: [
      "Adult Australian buyers who want a long-lasting disposable with no setup",
      "Adults who value an LED battery and e-liquid display",
      "Flavour explorers who want custom pack flexibility",
      "Users who do not want pod generation or charging routines",
    ],
    performance: [
      "Best performance comes from gentle, moderate mouth-to-lung draws.",
      "The LED display helps users plan replacement before flavour and vapour fade unexpectedly.",
      "Cooling and sweetness vary by flavour, with Quadruple Berry and Peach Ice being approachable first picks.",
      "Heat exposure and chain-vaping can shorten perceived device life.",
    ],
    specifications: [
      { label: "Puff rating", value: "Up to 9000" },
      { label: "E-liquid", value: "22ml" },
      { label: "Battery", value: "2350mAh (non-rechargeable)" },
      { label: "Activation", value: "Inhale-activated" },
      { label: "Display", value: "LED battery + e-liquid" },
      { label: "Weight", value: "~90g" },
    ],
    battery: [
      "Built-in 2350mAh cell designed for full device lifecycle.",
      "LED indicator helps avoid surprise depletion mid-day.",
      "Battery is not intended for user charging or modification.",
    ],
    charging: ["Non-rechargeable - dispose responsibly when depleted per local recycling guidance."],
    flavours: [
      "Quadruple Berry",
      "Peach Ice",
      "Fanta",
      "Mango",
      "Grape",
      "Strawberry Watermelon",
      "5 Flavour Custom Pack",
    ],
    pros: ["Industry-leading puff rating", "Display visibility", "Custom multi-flavour ordering"],
    cons: ["Not rechargeable", "Larger footprint than 2000-puff class"],
    faq: [
      {
        q: "How long does the Ingot 9000 last?",
        a: "It depends on draw length and frequency. Light users may stretch a device for weeks, while heavy users will finish it faster.",
      },
      {
        q: "Is the Alibarbar Ingot 9000 rechargeable?",
        a: "No. It is a non-rechargeable disposable with a built-in battery sized for the device lifecycle.",
      },
      {
        q: "What does the LED display show?",
        a: "It shows remaining battery and e-liquid level so adults can see when the device is nearing end-of-life.",
      },
      {
        q: "Can I refill it?",
        a: "No. The Ingot 9000 is sealed and pre-filled. Do not open or refill it.",
      },
      {
        q: "Which flavour should I try first?",
        a: "Quadruple Berry is a safe fruit-first choice, while Peach Ice is a good first cooling flavour.",
      },
      {
        q: "Is it better than a pod system?",
        a: "It is better for zero setup and convenience. A pod system is better if you want a rechargeable host and replaceable pods.",
      },
      {
        q: "Where can Australians buy it?",
        a: "Regional retailers such as ailibarbar.com provide current stock, bundles and shipping information for Australian buyers.",
      },
      {
        q: "How should I store it?",
        a: "Store it upright in a cool, dry place away from heat, sunlight, children and pets.",
      },
      {
        q: "What should I do when it is empty?",
        a: "Stop using it and recycle it through battery or e-waste channels where available.",
      },
    ],
    relatedSlugs: ["alibarbar-vs-iget", "alibarbar-vs-hqd"],
    region: "australia",
    heroImage: `${AU}/hero-device.png`,
    imageAlt: "Alibarbar Ingot 9000 product hero",
    gallery: [
      `${AU_PRODUCTS}/flavor-quadruple-berry.png`,
      `${AU_PRODUCTS}/flavor-peach-ice.png`,
      `${AU_PRODUCTS}/flavor-fanta.png`,
      `${AU_PRODUCTS}/flavor-mango.png`,
      `${AU_PACKS}/custom-5-pack.png`,
      `${AU_PACKS}/alibarbar-10-pack.webp`,
      `${AU_LIFESTYLE}/hero-pair.png`,
      `${AU_LIFESTYLE}/unbox-01.jpg`,
      `${AU_LIFESTYLE}/device-hand-01.jpg`,
    ],
    shopUrl: "https://www.ailibarbar.com/product/custom-5-pack",
    priceNote: "Pricing varies by flavour and pack size - check the regional AU retailer.",
    datePublished: "2026-03-01",
    dateModified: "2026-07-21",
    score: {
      flavorAccuracy: 9.5,
      cooling: 8.8,
      sweetness: 8.1,
      batteryLife: 9.2,
      leakResistance: 9.4,
      beginnerFriendly: 9.0,
      overall: 9.3,
    },
  },
];

export function getProduct(slug: string | undefined): HubProduct | undefined {
  if (!slug) return undefined;
  return hubProducts.find((product) => product.slug === slug);
}

export function getProductsByBrand(brandSlug: string): HubProduct[] {
  return hubProducts.filter((product) => product.brandSlug === brandSlug);
}
