# Social Grow SEO / GEO 验收台账

## 页面定义

- 页面名称：Social Grow 智能解决方案
- 路由：`/solutions/products/social-grow/`
- 正式 URL：`https://lingchen-ai.com/solutions/products/social-grow/`
- canonical URL：https://lingchen-ai.com/solutions/products/social-grow/
- 索引策略：index, follow
- 页面主主题：专业知识内容 AI 生产与全域分发 Agent
- 目标受众：自媒体从业者、专业人士、企业市场/品牌团队、MCN 与代运营服务商
- 事实来源：用户指定 Google AI Studio 原型内容快照；MasterGo `page_id=33:024764` 仅作为视觉真源
- 最后复核日期：2026-07-22

## 元数据与语义

| 项目 | 有效值 | 代码位置 | 验证结果 |
|---|---|---|---|
| title | Social Grow 智能解决方案｜灵宸智能 | `app/solutions/products/social-grow/layout.tsx` | PASS；使用 absolute，未重复站点后缀 |
| description | Social Grow 专业知识内容 AI 生产与全域分发 Agent，连接专业知识与公域流量。 | 同上 | PASS |
| canonical | https://lingchen-ai.com/solutions/products/social-grow/ | 同上 | PASS；自指本页 |
| Open Graph | title、description、url 与本页一致 | 同上 | PASS |
| 唯一 h1 | Social Grow 智能解决方案 | `page.tsx` | PASS；浏览器实测 1 个 |
| 标题层级 | h1 → 各区 h2 → 卡片 h3/h4 | `page.tsx` | PASS |
| lang | zh-CN | `app/layout.tsx` | PASS |

## 实体与事实

| 实体/事实 ID | 正式名称或陈述 | 类型 | 来源 | 页面位置 | 审核状态 |
|---|---|---|---|---|---|
| E-001 | Social Grow 智能解决方案 | Product / Service | 原型 Hero | Hero | PASS |
| E-002 | 专业知识内容 AI 生产与全域分发 Agent | Service | 原型 Hero | Hero | PASS |
| E-003 | 内容生产周期、短视频成本、账号矩阵与更新频次指标 | Metric | 原型商业成果区 | 商业成果 | PASS；仅复述可见原文，不扩写统计口径 |
| E-004 | 律师、自媒体人士、企业品牌与 MCN 四类场景 | Service | 原型应用场景区 | 应用场景 | PASS |

## 结构化数据

| Schema 类型 | 适用理由 | 事实来源 | 验证工具与结果 |
|---|---|---|---|
| Organization / WebSite | 全站实体与网站关系 | 根布局现有正式信息 | PASS；复用根布局 JSON-LD |
| 页面专用营销 Schema | 页面没有额外正式证据支撑新增属性 | — | 不添加，避免隐藏营销文案或夸大事实 |

## 抓取与站内关系

- [x] 页面已加入 `app/sitemap.ts`。
- [x] `app/robots.ts` 允许抓取，且与 index/follow 一致。
- [x] 产品专项解决方案共享 Tab 提供可抓取站内入口。
- [x] 路由直接返回 200，无重定向或孤岛状态。
- [x] 关键内容由服务端页面组件直出 HTML。

## GEO 抽样计划

| 问题 ID | 用户真实问题 | 等价问法 | 目标事实 | 发布前基线 | 发布后结果 |
|---|---|---|---|---|---|
| Q-001 | Social Grow 能解决什么问题？ | 专业内容如何用 AI 批量生产与分发？ | 页面可见的端到端流程、价值与适用场景 | 本地内容与语义门禁通过 | 待上线抽样 |
| Q-002 | Social Grow 适合哪些客户？ | 律师、自媒体、企业品牌和 MCN 是否适用？ | 页面四类应用场景 | 本地内容与语义门禁通过 | 待上线抽样 |

## 门禁结论

- 本地实现：通过
- 线上抓取与索引：待上线
- GEO 抽样：待上线
- 未验证项：搜索引擎实际抓取、索引覆盖与生成式答案引用效果
- 最终状态：SEO/GEO 已实现，待线上验证
