# 客户案例 SEO / GEO 验收台账

- 正式 URL：`https://lingchen-ai.com/customer-cases/`
- canonical URL：`https://lingchen-ai.com/customer-cases/`
- 索引策略：index
- 最后复核日期：2026-07-21

| 项目 | 有效值 | 代码位置 | 状态 |
|---|---|---|---|
| title | 客户案例｜灵宸智能 | `app/customer-cases/page.tsx` | PASS |
| description | 深圳某储能热管理设备制造商-四产品协同打开欧洲与中东客户。 | 同上 | PASS |
| canonical | `/customer-cases/`，由根布局 `metadataBase` 解析为正式绝对 URL | 同上 | PASS |
| Open Graph | 独立 title、description、URL | 同上 | PASS |
| 唯一 h1 | 设计稿案例名称 | 同上 | PASS |
| 标题层级 | h1 → h2 → h3 | 同上 | PASS |
| 服务端正文 | 案例正文、指标表与关联产品均为静态 HTML | 同上 | PASS |
| sitemap | `/customer-cases/` 已登记 | `app/sitemap.ts` | PASS |
| robots | 沿用站点公开索引策略 | `app/robots.ts` | PASS |

元数据只复用设计稿可见案例事实；没有新增可见 SEO 文案、隐藏营销内容、客户身份、引用或结构化数据。

本地 SEO/GEO 实现与静态构建已验证。线上状态码、抓取、索引和生成式答案抽样属于部署后验证范围，不作为本地效果结论。

## 2026-07-21 案例库扩展

| 项目 | 有效值 | 代码位置 | 状态 |
|---|---|---|---|
| 索引唯一 H1 | 客户案例 | `app/customer-cases/page.tsx` | PASS |
| 索引服务端内容 | 16 个原型案例标题、摘要、领域与关联产品静态输出 | `app/customer-cases/customer-cases-client.tsx` | PASS |
| 详情独立 metadata | 每个案例使用自身标题与摘要 | `app/customer-cases/[slug]/page.tsx` | PASS |
| 详情自指 canonical | `/customer-cases/[slug]/` | 同上 | PASS |
| 详情唯一 H1 | 对应案例完整原型标题 | 同上 | PASS |
| 详情服务端正文 | 客户介绍、挑战、方案、样本口径、指标与成效总结 | 同上 | PASS |
| sitemap | 索引 + 16 个详情 URL | `app/sitemap.ts` | PASS |
| 静态输出 | 16 个详情均由 `generateStaticParams` 生成 | `pnpm build` | PASS |

本地 SEO/GEO 已实现并通过静态构建；线上抓取、索引和生成式答案抽样仍待部署后验证。
