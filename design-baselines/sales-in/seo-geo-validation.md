# 页面 SEO / GEO 验收台账

## 页面定义

- 页面名称：AI 出海获客智能体 - Sales in
- 路由：`/products/sales-in/`
- 正式 URL：`https://lingchen-ai.com/products/sales-in/`
- canonical URL：`https://lingchen-ai.com/products/sales-in/`
- 索引策略：index
- 页面主主题：Sales in AI 出海获客 Agent
- 目标受众：设计稿可见内容明确面向出海销售、外贸、跨境 B2B 与制造业团队
- 内容负责人：MasterGo 设计稿与当前用户确认
- 事实审核人：当前用户；页面不新增设计稿外事实
- 最后复核日期：2026-07-20

## 元数据与语义

| 项目 | 有效值 | 代码位置 | 验证结果 |
|---|---|---|---|
| title | `Sales in｜AI 出海获客 Agent｜灵宸智能` | `app/products/sales-in/layout.tsx` | PASS |
| description | `AI 出海获客 Agent—客户线索数据挖掘与筛选，交付高意向客户线索。` | 同上 | PASS |
| canonical | `/products/sales-in/`（由 metadataBase 解析为正式 URL） | 同上 | PASS |
| Open Graph | 与页面 title、description、canonical 一致 | 同上 | PASS |
| 唯一 h1 | `出海企业的AI销售Harness 让获客到成交的每一步都可衡量、可复制` | `app/products/sales-in/page.tsx` | PASS |
| 标题层级 | 1 个 h1；各区块 h2；卡片 h3 | 同上 | PASS |
| lang | zh-CN | `app/layout.tsx` | PASS |

## 实体与事实

| 实体/事实 ID | 正式名称或陈述 | 类型 | 来源 | 页面位置 | 审核状态 |
|---|---|---|---|---|---|
| E-001 | Sales in｜AI 出海获客 Agent | Product / Service | MasterGo `page_id=33:130393` 可见标题和面包屑 | Hero、全页 | PASS |

## 结构化数据

| Schema 类型 | 适用理由 | 事实来源 | 验证工具与结果 |
|---|---|---|---|
| 无新增 Schema | 当前页没有经正式确认、必须结构化的数据对象；避免隐藏营销事实 | 不适用 | PASS |

## 抓取与站内关系

- [x] 页面已加入 `app/sitemap.ts`。
- [x] `app/robots.ts` 允许抓取并指向正式 sitemap。
- [x] 首页“AI 出海获客智能体”卡片提供可抓取入口。
- [x] 本地路由直接返回 200，无重定向。
- [x] 关键内容存在于服务端 HTML。

## GEO 抽样计划

| 问题 ID | 用户真实问题 | 等价问法 | 目标事实 | 引擎/地区 | 发布前基线 | 发布后结果 |
|---|---|---|---|---|---|---|
| Q-001 | 灵宸 Sales in 是什么？ | 灵宸的 AI 出海获客 Agent 能做什么？ | 页面可见的产品定位、能力、指标和合作路径 | 中国大陆 / 主流搜索与生成式引擎 | 待上线采样 | 待上线采样 |

## 门禁结论

- 本地实现：通过
- 线上抓取与索引：待上线
- GEO 抽样：待上线
- 未验证项：线上抓取、索引状态与生成式答案抽样
- 最终状态：SEO/GEO 已实现，待线上验证
