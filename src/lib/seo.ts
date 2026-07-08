import type { ArticleCard } from "../data/articles";
import type { ArticleGeo } from "../data/articleTypes";
import { buildAuthorPersonJsonLd } from "../data/author";
import { SITE_NAME, SITE_URL } from "../config";

export function articleUrl(slug: string): string {
  return `${SITE_URL}/${slug}`;
}

function buildPublisher() {
  return {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: new URL("/favicon.png", SITE_URL).href,
    },
  };
}

export function buildWebSiteJsonLd(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description,
    inLanguage: ["en", "zh-Hant-TW"],
    publisher: buildPublisher(),
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: new URL("/favicon.png", SITE_URL).href,
    description:
      "Independent vape reviews, buying guides, flavour guides and product comparisons for adult consumers.",
    inLanguage: ["en", "zh-Hant-TW"],
    founder: buildAuthorPersonJsonLd(),
  };
}

export function buildCollectionPageJsonLd(
  name: string,
  description: string,
  path: string,
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: new URL(path.replace(/^\//, ""), SITE_URL).href,
    inLanguage: "en",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };
}

export function buildBrandJsonLd(brand: {
  name: string;
  description: string;
  slug: string;
  heroImage: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: brand.name,
    description: brand.description,
    url: `${SITE_URL}/brands/${brand.slug}`,
    logo: new URL(brand.heroImage, SITE_URL).href,
  };
}

export function buildItemListJsonLd(items: ArticleCard[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE_NAME} 文章列表`,
    numberOfItems: items.length,
    itemListElement: items.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: a.title,
      url: articleUrl(a.slug),
    })),
  };
}

export function buildBreadcrumbJsonLd(article: ArticleCard) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "首頁",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: article.title,
        item: articleUrl(article.slug),
      },
    ],
  };
}

export function buildFaqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a.replace(/<[^>]+>/g, ""),
      },
    })),
  };
}

export function buildSpeakableJsonLd(article: ArticleCard, speakable: string[]) {
  if (!speakable.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": articleUrl(article.slug),
    name: article.title,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".geo-quick-answer", ".geo-tldr", ".geo-summary"],
    },
  };
}

export function buildReviewJsonLd(article: ArticleCard, geo?: ArticleGeo) {
  if (!geo?.aggregateRating) return null;
  const best = geo.aggregateRating.bestRating ?? 5;
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Product",
      name: article.title,
      description: article.description,
    },
    author: buildAuthorPersonJsonLd(),
    reviewRating: {
      "@type": "Rating",
      ratingValue: geo.aggregateRating.ratingValue,
      bestRating: best,
    },
    ...(geo.reviewDimensions?.length
      ? {
          additionalProperty: geo.reviewDimensions.map((d) => ({
            "@type": "PropertyValue",
            name: d.name,
            value: d.ratingValue,
            maxValue: d.bestRating ?? best,
          })),
        }
      : {}),
  };
}

export function buildArticleJsonLd(article: ArticleCard, geo?: ArticleGeo) {
  const imageUrl = new URL(article.heroImage, SITE_URL).href;
  const author = buildAuthorPersonJsonLd();
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: [imageUrl],
    datePublished: article.dateIso,
    dateModified: article.dateModifiedIso ?? article.dateIso,
    inLanguage: "zh-Hant-TW",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl(article.slug),
    },
    author,
    publisher: buildPublisher(),
    ...(geo?.aggregateRating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: geo.aggregateRating.ratingValue,
            ratingCount: geo.aggregateRating.ratingCount,
            bestRating: geo.aggregateRating.bestRating ?? 5,
          },
        }
      : {}),
  };
}
