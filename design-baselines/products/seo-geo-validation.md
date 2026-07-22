# 产品矩阵 SEO / GEO 验收台账

## 页面定义

- 页面名称：产品矩阵
- 路由：`/products/`
- 正式 URL：`https://lingchen-ai.com/products/`
- canonical URL：`https://lingchen-ai.com/products/`
- 索引策略：index
- 页面主主题：灵宸智能产品矩阵总览
- 目标受众：需要了解灵宸智能产品与对应详情页的企业用户
- 内容负责人：用户
- 事实审核人：用户
- 最后复核日期：2026-07-20

## 元数据与语义

| 项目 | 有效值 | 代码位置 | 验证结果 |
|---|---|---|---|
| title | `产品矩阵｜灵宸智能 AI Agent 产品` | `app/products/layout.tsx` | PASS |
| description | `了解灵宸智能面向出海获客、不良资产处置、跨境风控与法律服务的 AI Agent 产品矩阵。` | `app/products/layout.tsx` | PASS |
| canonical | `/products/` | `app/products/layout.tsx` | PASS |
| Open Graph | 与本页 title、description、URL 一致 | `app/products/layout.tsx` | PASS |
| 唯一 h1 | `产品矩阵`，仅作为页面结构标题，不新增营销事实 | `app/products/page.tsx` | PASS |
| 标题层级 | h1 → 各产品 h2 | `app/products/page.tsx` | PASS |
| lang | zh-CN | `app/layout.tsx` | PASS |

## 实体与事实

| 实体/事实 ID | 正式名称或陈述 | 类型 | 来源 | 页面位置 | 审核状态 |
|---|---|---|---|---|---|
| E-001 | Sales in、Social Grow、Mine GEO、AI获客Harness、Recov AI、DeepDoc、DeepLaw | Product | 用户指定 AI Studio 原型 | 产品卡片 | 用户确认作为实现来源 |

## 结构化数据

不新增页面级 JSON-LD；原型没有提供足以审定各 Product Schema 字段的正式证据。

## 抓取与站内关系

- [x] 计划加入 sitemap。
- [x] 根布局 robots 允许索引。
- [x] Header 产品矩阵入口连接 `/products/`。
- [x] 关键内容计划存在于服务端 HTML。

## GEO 抽样计划

线上抓取、索引与生成式答案抽样待发布后执行。

## 门禁结论

- 本地实现：通过
- 线上抓取与索引：待上线
- GEO 抽样：待上线
- 未验证项：线上状态码、索引、生成式答案抽样
- 最终状态：SEO/GEO 已实现，待线上验证
