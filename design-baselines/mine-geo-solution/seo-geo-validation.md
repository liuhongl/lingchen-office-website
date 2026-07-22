# 页面 SEO / GEO 验收台账

## 页面定义

- 页面名称：Mine GEO 智能解决方案
- 路由：`/solutions/products/mine-geo/`
- 正式 URL：`https://lingchen-ai.com/solutions/products/mine-geo/`
- canonical URL：`https://lingchen-ai.com/solutions/products/mine-geo/`
- 索引策略：index / follow
- 页面主主题：Mine GEO 品牌生成式引擎优化与获客 AI Agent
- 目标受众：需要管理品牌在 AI 搜索、AI 聊天和生成式答案中可见度、推荐率与情感倾向的企业品牌、市场、销售、公关与管理团队
- 内容负责人：用户指定 Google AI Studio 原型
- 事实审核人：用户当前对话确认 `1A/2A/3A`
- 最后复核日期：2026-07-22

## 元数据与语义

| 项目 | 有效值 | 代码位置 | 验证结果 |
|---|---|---|---|
| title | `Mine GEO 智能解决方案｜灵宸智能` | `app/solutions/products/mine-geo/layout.tsx` | PASS |
| description | `Mine GEO 品牌生成式引擎优化与获客 AI Agent，持续管理品牌在 AI 搜索、AI 聊天和生成式答案中的可见度、推荐率与情感倾向。` | 同上 | PASS |
| canonical | `/solutions/products/mine-geo/`，由 metadataBase 解析为自指绝对 URL | 同上、`app/layout.tsx` | PASS |
| Open Graph | title、description、url 与本页一致 | `app/solutions/products/mine-geo/layout.tsx` | PASS |
| 唯一 h1 | `Mine GEO / 智能解决方案`，同一 h1 内两行 | `app/solutions/products/mine-geo/page.tsx` | PASS |
| 标题层级 | 1 个 h1；各主区 h2；卡片 h3/h4 | `app/solutions/products/mine-geo/page.tsx` | PASS |
| lang | zh-CN | `app/layout.tsx` | PASS |

## 实体与事实

| 实体/事实 ID | 正式名称或陈述 | 类型 | 来源 | 页面位置 | 审核状态 |
|---|---|---|---|---|---|
| E-001 | 上海灵宸智能科技有限公司 / 灵宸智能 | Organization | 全站已核验 Organization JSON-LD | `app/layout.tsx` | PASS |
| E-002 | Mine GEO 是品牌生成式引擎优化与获客 AI Agent | Product / Service | 原型 Hero 可见原文 | Hero | PASS |
| E-003 | Mine GEO 提供诊断、治理、创作、分发、监控五大能力 | Product capability | 原型一图读懂与数字流区 | 02、04 区 | PASS |
| E-004 | 页面列出的平台、场景、指标与预期效果 | Product facts / Metrics | 原型 05–07 区可见原文；未补写 | 05–07 区 | PASS |

## 结构化数据

| Schema 类型 | 适用理由 | 事实来源 | 验证工具与结果 |
|---|---|---|---|
| Organization / WebSite | 全站主体与网站实体 | `app/layout.tsx` 中可见公司事实与全站配置 | JSON 可序列化；本页不重复注入 |
| 页面专属 Schema | 当前无必须且不会增加隐藏事实的类型；不强行添加 Product/FAQ | — | 不适用 |

## 抓取与站内关系

- [x] 页面已加入 `app/sitemap.ts`。
- [x] `app/robots.ts` 允许抓取，与 index/follow 一致。
- [x] `SolutionTabs` 提供可抓取站内入口，且当前路由高亮 Mine GEO。
- [x] 路由直接返回 200，不依赖客户端 Tab 切换，不是孤岛页。
- [x] 页面为服务端组件，关键标题、正文、卡片与表格存在于服务端 HTML。

## GEO 抽样计划

| 问题 ID | 用户真实问题 | 等价问法 | 目标事实 | 引擎/地区 | 发布前基线 | 发布后结果 |
|---|---|---|---|---|---|---|
| Q-001 | 待用户提供真实问题集 | 待提供 | Mine GEO 的正式定位与五大能力 | 待约定 | 待上线 | 待上线 |

## 门禁结论

- 本地实现：元数据、语义结构、robots、sitemap、站内入口与 09 区可见内容已实现；生产构建静态生成通过
- 线上抓取与索引：待上线
- GEO 抽样：待上线；真实问题集尚待用户提供或另行确认
- 未验证项：线上最终 URL、索引状态、生成式引擎抽样
- 用户确认覆盖：`下载产品白皮书` 不进入可见 DOM，也不作为隐藏 SEO 文案或结构化数据输出
- 最终状态：SEO/GEO 已实现，待线上验证
