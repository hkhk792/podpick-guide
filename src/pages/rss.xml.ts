import type { APIRoute } from "astro";
import { SITE_NAME, SITE_URL } from "../config";
import { hubGuides } from "../data/hub/guides";
import { hubReviews } from "../data/hub/reviews";
import { hubNewsPosts } from "../data/hub/news";
import { hubComparisons } from "../data/hub/comparisons";

type FeedItem = {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  category: string;
};

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function rfc822(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toUTCString();
}

export const GET: APIRoute = () => {
  const items: FeedItem[] = [
    ...hubGuides.map((g) => ({
      title: g.title,
      description: g.description,
      link: `${SITE_URL}/buying-guides/${g.slug}`,
      pubDate: g.dateModified,
      category: g.category,
    })),
    ...hubReviews.map((r) => ({
      title: r.title,
      description: r.description,
      link: `${SITE_URL}/reviews/${r.slug}`,
      pubDate: r.dateModified,
      category: r.category,
    })),
    ...hubNewsPosts.map((n) => ({
      title: n.title,
      description: n.description,
      link: `${SITE_URL}/news/${n.slug}`,
      pubDate: n.dateModified,
      category: n.category,
    })),
    ...hubComparisons.map((c) => ({
      title: c.title,
      description: c.description,
      link: `${SITE_URL}${c.path ?? `/comparisons/${c.slug}`}`,
      pubDate: c.dateModified,
      category: "Comparison",
    })),
  ].sort((a, b) => (a.pubDate < b.pubDate ? 1 : -1));

  const xmlItems = items
    .map(
      (item) => `    <item>
      <title>${esc(item.title)}</title>
      <description>${esc(item.description)}</description>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <category>${esc(item.category)}</category>
      <pubDate>${rfc822(item.pubDate)}</pubDate>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(SITE_NAME)}</title>
    <link>${SITE_URL}</link>
    <description>Independent vape reviews, buying guides, flavour guides and product comparisons for adult consumers.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
${xmlItems}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
};
