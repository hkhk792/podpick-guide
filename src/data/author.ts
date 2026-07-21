import { SITE_NAME, SITE_URL } from "../config";

export const DEFAULT_AUTHOR = {
  slug: "jason-chen",
  name: "Jason Chen",
  nameZh: "Jason Chen",
  title: "Editor — Australia Disposable Reviews",
  titleZh: "Editor",
  bio: "Jason Chen edits PodPick Guide's Australia disposable coverage — Alibarbar Ingot 9000 reviews, buying guides and brand comparisons for adult consumers (18+).",
  experienceSince: 2021,
  reviewsCount: 500,
  expertise: [
    "Disposable vapes",
    "Alibarbar Ingot 9000",
    "Flavour profiles",
    "Cooling & sweetness",
    "Mesh coil",
    "Australia buying guides",
    "Product comparisons",
  ],
  testingMethod: [
    "Note flavour, cooling and sweetness across multiple sessions — not a single first puff",
    "Compare display readability, draw activation and late-stage flavour fade",
    "Cross-check packaging and retailer claims against published specs",
    "Prefer side-by-side notes when comparing Alibarbar with IGET, HQD, KUZ or RELX formats",
  ],
  url: `${SITE_URL}/author/jason-chen`,
  image: "/images/author-jason-chen.svg",
} as const;

export function buildAuthorPersonJsonLd() {
  return {
    "@type": "Person",
    name: DEFAULT_AUTHOR.name,
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
