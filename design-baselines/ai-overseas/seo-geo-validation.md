# AI 出海获客解决方案 SEO / GEO 验收台账

## 页面定义

- 页面名称：AI 出海获客全链路解决方案
- 路由：`/solutions/ai-overseas`
- 正式 URL：`https://lingchen-ai.com/solutions/ai-overseas/`
- canonical URL：`https://lingchen-ai.com/solutions/ai-overseas/`
- 索引策略：index
- 页面主主题：以五类 AI 能力连接出海品牌入口、线索发现、触达转化和合规履约
- 目标受众：需要海外获客和跨境合规履约能力的企业决策者
- 内容负责人：待用户指定
- 事实审核人：待用户指定
- 最后复核日期：2026-07-20

## 元数据与语义

| 项目 | 有效值 | 代码位置 | 验证结果 |
|---|---|---|---|
| title | AI 出海获客全链路解决方案｜灵宸智能 | `app/solutions/ai-overseas/layout.tsx` | PASS |
| description | 五类 AI 能力及覆盖链路 | `app/solutions/ai-overseas/layout.tsx` | PASS |
| canonical | `https://lingchen-ai.com/solutions/ai-overseas/` | `app/solutions/ai-overseas/layout.tsx` | PASS |
| Open Graph | 方案页独立 URL、标题与描述 | `app/solutions/ai-overseas/layout.tsx` | PASS |
| 唯一 h1 | AI 出海获客全链路解决方案 | `app/solutions/ai-overseas/page.tsx` | PASS |
| 标题层级 | 1 个 h1，区块 h2，细项 h3 | `app/solutions/ai-overseas/page.tsx` | PASS |
| lang | `zh-CN` | `app/layout.tsx` | PASS |

## 实体与事实

| 实体/事实 ID | 正式名称或陈述 | 类型 | 来源 | 页面位置 | 审核状态 |
|---|---|---|---|---|---|
| E-001 | Mine GEO、Social Grow、Sales in、AI 获客 Harness、跨境单证智能审核 | Service | MasterGo 页面及逐字台账 | 方案全景、产品拆解 | PASS |
| E-002 | 品牌入口、线索发现、主动触达、合规履约链路 | Service | MasterGo 页面及逐字台账 | Hero、方案全景 | PASS |
| E-003 | 效率、成本、准确率、周期等量化指标 | Metric | MasterGo 可见原文；用户于 2026-07-20 确认为企业自述 | 产品拆解、价值成果 | PASS（企业自述；不得表述为第三方验证或行业基准） |
| E-004 | UCP600/ISBP 等规则适用描述 | Service | MasterGo 可见原文；用户于 2026-07-20 确认为企业方案自述 | 产品拆解 | PASS（方案能力描述；不构成法律意见、规则认证或适用性保证） |

## 结构化数据

| Schema 类型 | 适用理由 | 事实来源 | 验证工具与结果 |
|---|---|---|---|
| WebPage | 综合解决方案介绍页 | 页面 Metadata 与可见内容 | 本地 JSON 解析 PASS；待线上 Schema Validator |

## 抓取与站内关系

- [x] 页面包含在 sitemap。
- [x] robots 与 index 策略一致。
- [x] 主导航存在明确“解决方案”入口。
- [x] 两级方案导航均使用真实链接；综合方案可切换至 AI 出海、不良资产、法律案件方案，产品专项可进入 Sales in。
- [x] 没有错误重定向或孤岛页面。
- [x] 关键内容存在于预渲染 HTML。

## GEO 抽样计划

| 问题 ID | 用户真实问题 | 等价问法 | 目标事实 | 引擎/地区 | 发布前基线 | 发布后结果 |
|---|---|---|---|---|---|---|
| Q-001 | AI 如何帮助企业做出海获客？ | 出海企业怎样用 AI 找客户并完成触达？ | 解决方案链路与产品关系 | 待指定 / 中国 | 待线上执行 | 待上线 |
| Q-002 | 灵宸智能的 AI 出海获客方案包含什么？ | 灵宸有哪些海外获客 AI 产品？ | 五类能力及边界 | 待指定 / 中国 | 待线上执行 | 待上线 |

## 门禁结论

- 本地实现：通过
- 线上抓取与索引：待上线
- GEO 抽样：待上线
- 未验证项：量化指标尚无第三方统计证明；UCP600/ISBP 的具体业务适用性仍需按项目由业务及法务确认；线上 Schema/索引与生成式答案表现
- 事实限定：指标按企业自述发布；规则相关内容只描述方案能力，不构成法律意见、规则认证或适用性保证
- 最终状态：SEO/GEO 已实现，待线上验证；本地事实治理无阻塞项
