# DeepDoc SEO / GEO 验收台账

## 页面定义

- 路由：`/products/deepdoc/`
- 正式 URL：`https://lingchen-ai.com/products/deepdoc/`
- canonical URL：`https://lingchen-ai.com/products/deepdoc/`
- 索引策略：index
- 主题：新一代跨境单证智能审核产品解决方案
- 事实来源：MasterGo `AI快搭-9636635` 可见内容；未新增页面外事实

## 元数据与语义

| 项目 | 有效值 | 代码位置 | 结果 |
|---|---|---|---|
| title | `DeepDoc｜新一代跨境单证智能审核产品解决方案｜灵宸智能` | `app/products/deepdoc/layout.tsx` | PASS |
| description | Hero 第一条可见事实 | 同上 | PASS |
| canonical | `/products/deepdoc/` | 同上 | PASS |
| 唯一 h1 | 新一代跨境单证智能审核 产品解决方案 | `page.tsx` | PASS |
| 标题层级 | h1→区块 h2→卡片 h3 | `page.tsx` | PASS |
| 关键内容服务端 HTML | 全部页面主体 | 静态导出 | PASS |

## 抓取与站内关系

- [x] 已加入 `app/sitemap.ts`。
- [x] `app/robots.ts` 允许抓取。
- [x] 首页“90%~95%+ 风控价值”卡片提供可抓取链接，不改变可见设计。
- [x] 本地 `/products/deepdoc/` 返回 200。
- [x] 没有新增未经证实的结构化数据。

## 门禁结论

- SEO/GEO 本地实现：PASS。
- 线上抓取、索引状态和生成式答案抽样：待部署后验证。
