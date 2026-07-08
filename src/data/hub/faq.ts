import type { HubFaqTopic } from "./types";

export const hubFaqTopics: HubFaqTopic[] = [
  {
    slug: "charging",
    title: "Charging & Power",
    description: "Battery, charging and power FAQs for pods and disposables.",
    items: [
      {
        q: "Are disposable vapes rechargeable?",
        a: "Some models are rechargeable; many high-capacity disposables like Alibarbar Ingot 9000 are single-lifecycle non-rechargeable. Always check the product page.",
      },
      {
        q: "Why does my pod taste weak when battery is low?",
        a: "Host output can sag at low charge — charge the device and retest before blaming the pod.",
      },
    ],
  },
  {
    slug: "battery",
    title: "Battery Life",
    description: "How long devices last and what affects battery performance.",
    items: [
      {
        q: "What affects disposable battery life?",
        a: "Draw length, draw frequency, ambient temperature and device capacity all matter. LED displays help track remaining charge.",
      },
    ],
  },
  {
    slug: "flavours",
    title: "Flavours",
    description: "Choosing, mixing and understanding flavour profiles.",
    items: [
      {
        q: "How do I pick a first pod flavour?",
        a: "Start with moderate sweetness and cooling — grape, peach or jasmine tea profiles are common beginner anchors.",
      },
    ],
  },
  {
    slug: "compatibility",
    title: "Compatibility",
    description: "Pods, hosts and generation matching.",
    items: [
      {
        q: "Can SP2S Gen 1 pods fit Gen 2 hosts?",
        a: "No — mismatched generations cause poor contact or no vapour. Verify host labels before buying.",
      },
    ],
  },
  {
    slug: "safety",
    title: "Safety",
    description: "Responsible use and product authenticity.",
    items: [
      {
        q: "How do I spot counterfeit pods?",
        a: "Check packaging print quality, batch codes, retailer traceability and abnormal taste or leakage on first use.",
      },
    ],
  },
];

export function getFaqTopic(slug: string): HubFaqTopic | undefined {
  return hubFaqTopics.find((t) => t.slug === slug);
}
