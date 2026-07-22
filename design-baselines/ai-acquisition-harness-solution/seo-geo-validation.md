# 页面 SEO / GEO 验收台账

## 页面定义

- 页面名称：AI 获客 Harness 专项解决方案
- 路由：`/solutions/products/ai-acquisition-harness/`
- 正式 URL：`https://lingchen-ai.com/solutions/products/ai-acquisition-harness/`
- canonical URL：`https://lingchen-ai.com/solutions/products/ai-acquisition-harness/`
- 索引策略：index
- 页面主主题：AI获客Harness 智能解决方案
- 目标受众：需要智能化、数字化、个性化销售获客能力的企业
- 内容负责人：用户指定 Google AI Studio 原型
- 事实审核人：用户当前对话确认 `1A/2A/3A`
- 最后复核日期：2026-07-22

## 元数据与语义

| 项目 | 有效值 | 代码位置 | 验证结果 |
|---|---|---|---|
| title | `AI获客Harness 智能解决方案｜灵宸智能` | `app/solutions/products/ai-acquisition-harness/layout.tsx` | PASS |
| description | `专为各行各业打造的智能化、数字化、个性化销售获客AI Harness。以AI主动外呼/呼入、自适应邮件/文本、场景化动态短信三大子系统构建获客矩阵。` | 同上；取自 Hero 可见原文，不新增事实 | PASS |
| canonical | `/solutions/products/ai-acquisition-harness/` | 同上 | PASS |
| Open Graph | website / zh_CN / 自指 URL / 与页面 metadata 同标题描述 | 同上 | PASS |
| 唯一 h1 | `AI获客Harness`＋明确换行＋`智能解决方案` | `app/solutions/products/ai-acquisition-harness/page.tsx`；SSR HTML 实测 1 个 H1 | PASS |
| 标题层级 | H1 页面主题；各主区块 H2；卡片标题按内容层级使用 H3 | 同上；服务端 HTML 与 DOM 核对 | PASS |
| lang | `zh-CN` | `app/layout.tsx` | PASS |

## 实体与事实

| 实体/事实 ID | 正式名称或陈述 | 类型 | 来源 | 页面位置 | 审核状态 |
|---|---|---|---|---|---|
| E-001 | AI获客Harness | Product | 原型 Hero | Hero H1 | PASS |
| E-002 | AI主动外呼/呼入、自适应邮件/文本、场景化动态短信三大子系统 | Product capability | 原型 Hero 正文 | Hero 正文 | PASS |
| E-003 | 全场景销售 AI 获客 Harness | Product definition | 原型 Hero 副标题 | Hero 副标题 | PASS |

## 结构化数据

| Schema 类型 | 适用理由 | 事实来源 | 验证工具与结果 |
|---|---|---|---|
| WebPage | 正式产品专项解决方案页面 | 页面可见标题、描述与正式自指 URL | PASS：SSR HTML 解析得到 `WebPage`；同时保留全站 `Organization`、`WebSite` |

## 抓取与站内关系

- [x] 页面已加入 sitemap，正式路由以尾斜杠输出。
- [x] robots 未阻止正式 solutions 路由，与 index 策略一致。
- [x] `components/solution-tabs.tsx` 已存在指向该正式路由的服务端站内链接。
- [x] 本地正式路径返回 200；`SolutionTabs` 提供服务端站内链接，不是孤岛页面。
- [x] H1、主体文案和 JSON-LD 均存在于服务端 HTML。

## GEO 抽样计划

| 问题 ID | 用户真实问题 | 等价问法 | 目标事实 | 引擎/地区 | 发布前基线 | 发布后结果 |
|---|---|---|---|---|---|---|
| Q-001 | AI获客Harness 是什么？ | AI获客Harness 能做什么？ | 页面可见定义与三大子系统 | 待上线后按约定引擎/中国地区抽样 | 待页面完成建立基线 | 待上线 |
| Q-002 | AI获客Harness 是否支持主动外呼和邮件触达？ | AI获客Harness 有哪些获客通道？ | AI主动外呼/呼入、自适应邮件/文本、场景化动态短信 | 待上线后按约定引擎/中国地区抽样 | 待页面完成建立基线 | 待上线 |

## 门禁结论

- 本地实现：PASS；独立 metadata、自指 canonical、唯一 H1、标题层级、WebPage JSON-LD、sitemap、robots、站内入口和 SSR 关键内容均已核对
- 线上抓取与索引：待上线
- GEO 抽样：待上线
- 未验证项：线上 canonical 实际响应、搜索引擎抓取/索引和生成式答案抽样
- 最终状态：SEO/GEO 已实现，待线上验证
