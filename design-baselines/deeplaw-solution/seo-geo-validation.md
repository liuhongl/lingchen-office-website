# DeepLaw 专项解决方案页 SEO / GEO 验收台账

## 2026-07-22 原型内容同步复核

- title/description 已由 `Harness` 同步为原型的 `DeepLaw 法律 AI Agent`。
- canonical：`/solutions/products/deeplaw/`；唯一 H1 为 `让案件拓展与办案，成为可运营、可复盘的能力`。
- 页面能力、指标、合作模式与可信能力均来自原型可见内容；未新增隐藏事实。
- 本地只声明“SEO/GEO 已实现，待线上验证”。

## 页面定义

- 页面名称：DeepLaw 法律 AI Harness 专项解决方案
- 路由：`/solutions/products/deeplaw/`
- 正式 URL：`https://lingchen-ai.com/solutions/products/deeplaw/`
- canonical URL：`https://lingchen-ai.com/solutions/products/deeplaw/`
- 索引策略：index
- 页面主主题：法律人的案件拓展、承办、知识管理与终身成长一体化 AI 解决方案
- 目标受众：个人律师、律师事务所及法律服务团队
- 内容负责人：待业务确认
- 事实审核人：待业务确认
- 最后复核日期：2026-07-21

## 元数据与语义

| 项目 | 有效值 | 代码位置 | 验证结果 |
|---|---|---|---|
| title | `DeepLaw 法律 AI Harness 解决方案｜灵宸智能` | `app/solutions/products/deeplaw/layout.tsx` | PASS |
| description | `DeepLaw 法律 AI Harness 整合五大智能体，贯通法律人的品牌、案源、转化、案件承办、知识管理与终身成长全链路。` | 同上；只归纳 Hero 可见定位，不增加事实 | PASS |
| canonical | `https://lingchen-ai.com/solutions/products/deeplaw/` | 同上 | PASS |
| Open Graph | 与 title/description/canonical 同源 | 同上 | PASS |
| 唯一 h1 | `让案件拓展与办案，成为可运营、可复盘的能力` | `app/solutions/products/deeplaw/page.tsx` | PASS（1 个） |
| 标题层级 | H1 1 个；各大区 H2；卡片 H3/H4 | 同上 | PASS |
| lang | `zh-CN` | 根布局 | PASS |

## 实体与事实

| 实体/事实 ID | 正式名称或陈述 | 类型 | 来源 | 页面位置 | 审核状态 |
|---|---|---|---|---|---|
| DLS-E001 | DeepLaw 法律 AI Harness | Product | MasterGo Hero | Hero | PASS |
| DLS-E002 | Social Grow、Mine GEO、AI 销售获客 Harness、合同智能审查 Agent | Product | MasterGo 五大智能体区 | 五大智能体 | PASS |
| DLS-E003 | 获客成本、审查效率、漏审率等设计稿指标 | Metric | MasterGo 六维价值区 | 六维价值 | PASS（按设计原文呈现） |
| DLS-E004 | SaaS、私有化部署、联合共创 | Service | MasterGo 合作模式区 | 合作模式 | PASS |

## 结构化数据

| Schema 类型 | 适用理由 | 事实来源 | 验证工具与结果 |
|---|---|---|---|
| WebPage | 正式可索引解决方案页 | 页面可见标题、描述、canonical | 由 metadata 与服务端 HTML 表达，未额外注入 JSON-LD |
| Product / Service | 本页未提供正式结构化数据证据 | MasterGo 可见产品定位 | 不生成，避免过度声明 |

## 抓取与站内关系

- [x] 页面加入 sitemap，保留既有旧产品入口且新增正式专项 URL。
- [x] robots 为 `index, follow`，与索引策略一致。
- [x] 产品专项 tabs 使用普通可抓取链接并高亮 DeepLaw。
- [x] 本地路由返回 200，无错误重定向或孤岛页面。
- [x] H1、定位、能力、指标、方案及 CTA 等关键内容存在于服务端 HTML。

## GEO 抽样计划

| 问题 ID | 用户真实问题 | 等价问法 | 目标事实 | 引擎/地区 | 发布前基线 | 发布后结果 |
|---|---|---|---|---|---|---|
| DLS-Q001 | 法律团队如何用 AI 同时做案源拓展与办案？ | 律所 AI 获客和承办一体化方案有哪些？ | DeepLaw 当前画板可见的五大智能体与闭环定位 | 中国大陆 | 页面服务端内容已覆盖 | 待上线抽样 |
| DLS-Q002 | DeepLaw 支持哪些部署方式？ | 法律 AI 能否私有化部署？ | SaaS、私有化部署、联合共创三种可见方案 | 中国大陆 | 页面服务端内容已覆盖 | 待上线抽样 |

## 门禁结论

- 本地实现：PASS；独立 metadata、自指 canonical、唯一 H1、索引策略、sitemap、站内入口与服务端正文均已验证。
- 线上抓取与索引：待上线。
- GEO 抽样：待上线。
- 未验证项：线上抓取、搜索引擎索引及生成式答案抽样。
- 最终状态：SEO/GEO 已实现，待线上验证。
