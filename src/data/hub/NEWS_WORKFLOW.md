# PodPick Guide News Workflow

Publish about two News posts per week.

1. Add each post to `src/data/hub/news.ts`.
2. Use a unique `slug`, clear `title`, short `description`, `excerpt`, and 2-4 body paragraphs.
3. Choose one category from the `HubNewsPost` union: `Australia News`, `Taiwan News`, `Industry News`, `New Product`, `Regulations`, or `Market`.
4. Set `region` to `australia`, `taiwan`, or `global`.
5. Use `weekTag` in `YYYY-Www` format, for example `2026-W28`.
6. Keep `datePublished` and `dateModified` as ISO dates.
7. Add `relatedSlugs` for relevant brand, product, FAQ, guide, review or comparison pages.

`hubNewsPosts` is sorted by newest `datePublished` first, so add posts to the source array and let the export handle ordering.
