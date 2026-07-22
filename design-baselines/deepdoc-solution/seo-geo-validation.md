# DeepDoc·智眸智能解决方案页 SEO / GEO 验收台账

## 2026-07-22 原型内容同步复核

- title：`DeepDoc·智眸智能解决方案｜跨境单证智能审核｜灵宸智能`。
- description：取自原型可见产品定位，不新增页面外事实。
- canonical：`/solutions/products/deepdoc/`；唯一 H1 为 `DeepDoc · 智眸 智能解决方案`。
- 页面主体关键内容存在于服务端 JSX；本地只声明“SEO/GEO 已实现，待线上验证”。

## 页面定义

- 页面名称：DeepDoc·智眸智能解决方案
- 路由：`/solutions/products/deepdoc/`
- 正式 URL：`https://lingchen-ai.com/solutions/products/deepdoc/`
- canonical URL：`https://lingchen-ai.com/solutions/products/deepdoc/`
- 索引策略：index
- 页面主主题：跨境单证智能审核产品解决方案
- 目标受众：处理国际单证、跨境单证及票据审核的企业与银行团队
- 内容负责人：待业务指定
- 事实审核人：待业务指定
- 最后复核日期：2026-07-21

## 元数据与语义

| 项目 | 有效值 | 代码位置 | 验证结果 |
|---|---|---|---|
| title | `DeepDoc·智眸智能解决方案｜跨境单证智能审核｜灵宸智能` | `app/solutions/products/deepdoc/layout.tsx` | PASS |
| description | `DeepDoc·智眸是面向国际单证、跨境单证及票据的新一代跨境单证智能审核解决方案。` | `app/solutions/products/deepdoc/layout.tsx` | PASS |
| canonical | `/solutions/products/deepdoc/`，由站点 `metadataBase` 解析为正式绝对 URL | `app/solutions/products/deepdoc/layout.tsx` | PASS |
| Open Graph | type、locale、url、title、description 与本页一致 | `app/solutions/products/deepdoc/layout.tsx` | PASS |
| 唯一 h1 | `DeepDoc·智眸 智能解决方案` | `app/solutions/products/deepdoc/page.tsx` | PASS |
| 标题层级 | 1 个 H1；已实现区块使用 H2；卡片使用 H3/H4 | `app/solutions/products/deepdoc/page.tsx` | PASS |
| lang | `zh-CN` | 根布局 | PASS |

## 实体与事实

| 实体/事实 ID | 正式名称或陈述 | 类型 | 来源 | 页面位置 | 审核状态 |
|---|---|---|---|---|---|
| DDS-E001 | DeepDoc·智眸 | Product | MasterGo Hero 当前可见原文 | Hero | PASS |
| DDS-E002 | 新一代跨境单证智能审核产品解决方案 | Service | MasterGo Hero 当前可见原文 | Hero | PASS |
| DDS-E003 | OCR 与大语言模型双引擎 | Capability | MasterGo Hero、核心流程和结果区当前可见原文 | 多区 | PASS |
| DDS-E004 | UCP 600、ISBP 821 | Domain concept | MasterGo 当前可见原文 | Hero、核心流程 | PASS |
| DDS-E005 | 页面指标、案例与交付结果 | Metric / Case | 仅使用 `content-ledger.md` 已逐字核录的 MasterGo 可见内容 | 交付结果、应用场景 | PASS；全页运行态复核完成 |

## 结构化数据

| Schema 类型 | 适用理由 | 事实来源 | 验证工具与结果 |
|---|---|---|---|
| WebPage | 页面可由标准 HTML、metadata 与 canonical 明确表达，无需额外隐藏事实 | 页面可见标题、描述、正文 | 当前不额外注入 JSON-LD；符合“不强行添加”规则 |
| Product / Service | 指标缺少结构化统计口径，避免把营销文案升级为结构化确定事实 | MasterGo 当前可见内容 | 不生成，PASS |

## 抓取与站内关系

- [x] 页面已加入 `app/sitemap.ts` 的 `/solutions/products/deepdoc/`。
- [x] `robots` 未禁止正式 solutions 路由。
- [x] `components/solution-tabs.tsx` 提供 DeepDoc 可抓取站内入口。
- [x] canonical 与 sitemap 的解决方案路由一致。
- [x] 关键内容由 Next.js 服务端组件输出为 HTML，不依赖 Canvas 或客户端展开。
- [x] 本地 GET `200 OK`、服务端 HTML、独立 canonical 已复核；旧 `/products/deepdoc/` 保留其独立产品页语义与 canonical。

## GEO 抽样计划

| 问题 ID | 用户真实问题 | 等价问法 | 目标事实 | 引擎/地区 | 发布前基线 | 发布后结果 |
|---|---|---|---|---|---|---|
| DDS-Q001 | 跨境单证如何使用 AI 自动审核？ | 信用证和跨境票据的智能审单方案有哪些？ | DeepDoc 可见的双引擎、四维审核与交付结果 | 中国大陆 | 本地服务端内容已具备 | 待上线 |
| DDS-Q002 | DeepDoc 支持哪些复杂单证场景？ | 非标版式和多语言单证能否审核？ | 页面可见挑战、能力和应用场景 | 中国大陆 | 本地服务端内容已具备 | 待上线 |

## 门禁结论

- 本地实现：metadata、canonical、H1、标题层级、sitemap、站内入口与全部关键服务端内容已实现并核对。
- 线上抓取与索引：待上线。
- GEO 抽样：待上线。
- 未验证项：线上抓取、索引和生成式答案抽样。
- 最终状态：SEO/GEO 已实现，待线上验证。
