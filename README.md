# PodPick Guide（podpickguide.com）

内容 / SEO 站：静态 Astro，文章从商城 `/info/*` 迁出。

## 本地

```bash
npm install
npm run dev
```

## SEO（已内建）

- 每页 title / description / canonical / OG
- 首页 `WebSite` + `ItemList` JSON-LD
- 文章 `Article` + `BreadcrumbList` JSON-LD
- 文末「相关阅读」3 篇内链
- `sitemap-index.xml` + `robots.txt`
- 构建后自动 IndexNow 通知 Bing（密钥见 `public/{INDEXNOW_KEY}.txt`，文件内容必须**只有 key、无换行**）

### IndexNow / Bing 站长（若构建日志出现 403）

1. 打开 [Bing Webmaster Tools](https://www.bing.com/webmasters/) 添加站点 `https://podpickguide.com`
2. 验证方式任选其一：上传 Bing 提供的 XML/HTML 文件到 `public/`，或使用现有 `public/podpick7f3a9c2b1e8d4f06.txt`（内容与 `INDEXNOW_KEY` 完全一致、无换行）
3. 在 Bing 提交 Sitemap：`https://podpickguide.com/sitemap-index.xml`
4. 重新部署后，构建日志应出现 `[indexnow] submitted ... status 200/202`

可选环境变量见 `.env.example`（GA4：`PUBLIC_GA_MEASUREMENT_ID`）。

## 部署（Vercel）

1. 新建 Vercel 项目，Root Directory 选 `podpick-guide`（若 monorepo 在子目录）或单独导入本文件夹。
2. Build: `npm run build`，Output: `dist`。
3. 域名添加 `podpickguide.com` 与 `www.podpickguide.com`。

## DNS（Cloudflare）

1. 在注册商把 **NS 改为 Cloudflare**（可以，推荐）。
2. Cloudflare 中添加记录（Vercel 项目 → Settings → Domains 会显示具体值）：
   - `@` → A `76.76.21.21` 或 CNAME 到 `cname.vercel-dns.com`
   - `www` → CNAME `cname.vercel-dns.com`
3. SSL/TLS 选 **Full**。
4. 可选：`www` → 301 到根域。

商城 `lanatw1.com` 的文章 `/info/*` 可在對應商城 Vercel 配置 301 到本站。
