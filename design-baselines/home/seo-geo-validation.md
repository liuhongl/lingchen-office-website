# 首页 SEO / GEO 验收台账

## 页面定义

- 页面名称：首页
- 路由：`/`
- 正式 URL：`https://lingchen-ai.com/`
- canonical URL：`https://lingchen-ai.com/`
- 索引策略：index
- 页面主主题：灵宸智能及其企业级 AI Agent 产品与业务方向
- 目标受众：寻找企业级 AI Agent 产品和解决方案的企业决策者
- 内容负责人：待用户指定
- 事实审核人：待用户指定
- 最后复核日期：2026-07-20

## 元数据与语义

| 项目 | 有效值 | 代码位置 | 验证结果 |
|---|---|---|---|
| title | 灵宸智能｜让 AI Agent 成为企业增长的新质生产力 | `app/layout.tsx` | PASS |
| description | 灵宸智能以企业级 AI Agent 架构与产品… | `app/layout.tsx` | PASS |
| canonical | `https://lingchen-ai.com/` | `app/layout.tsx` | PASS |
| Open Graph | 首页独立 URL、标题与描述 | `app/layout.tsx` | PASS |
| 唯一 h1 | 让 AI Agent 成为企业增长的新质生产力 | `app/page.tsx` | PASS |
| 标题层级 | 1 个 h1，后续 h2/h3 | `app/page.tsx` | PASS |
| lang | `zh-CN` | `app/layout.tsx` | PASS |

## 实体与事实

| 实体/事实 ID | 正式名称或陈述 | 类型 | 来源 | 页面位置 | 审核状态 |
|---|---|---|---|---|---|
| E-001 | 上海灵宸智能科技有限公司 / 灵宸智能 | Organization | 现有官网页脚及备案展示 | 全站 JSON-LD、Footer | PASS（现有公开信息） |
| E-002 | 企业级 AI Agent 产品与解决方案 | Service | 首页 MasterGo 已确认文案 | Hero、产品矩阵 | PASS |
| E-003 | 首页量化指标 | Metric | MasterGo 可见原文；用户于 2026-07-20 确认为企业自述 | 价值卡片 | PASS（企业自述；不得表述为第三方验证或行业基准） |

## 结构化数据

| Schema 类型 | 适用理由 | 事实来源 | 验证工具与结果 |
|---|---|---|---|
| Organization | 官网主体 | Footer 公开公司名称 | 本地 JSON 解析 PASS；待线上 Schema Validator |
| WebSite | 官网站点 | 正式域名与站点名称 | 本地 JSON 解析 PASS；待线上 Schema Validator |
| WebPage | 首页主题与站点关系 | 页面 Metadata 与可见内容 | 本地 JSON 解析 PASS；待线上 Schema Validator |

## 抓取与站内关系

- [x] 页面包含在 sitemap。
- [x] robots 与 index 策略一致。
- [x] 主导航和 Logo 均可到达首页。
- [x] 没有错误重定向或孤岛页面。
- [x] 关键内容存在于预渲染 HTML。

## GEO 抽样计划

| 问题 ID | 用户真实问题 | 等价问法 | 目标事实 | 引擎/地区 | 发布前基线 | 发布后结果 |
|---|---|---|---|---|---|---|
| Q-001 | 灵宸智能是做什么的？ | 灵宸智能提供哪些企业 AI 产品？ | 公司定位与产品方向 | 待指定 / 中国 | 待线上执行 | 待上线 |
| Q-002 | 哪些公司提供企业级 AI Agent 解决方案？ | 企业 AI Agent 服务商有哪些？ | 品牌发现与事实准确性 | 待指定 / 中国 | 待线上执行 | 待上线 |

## 门禁结论

- 本地实现：通过
- 线上抓取与索引：待上线
- GEO 抽样：待上线
- 未验证项：首页量化指标尚无第三方验证及公开统计口径；线上 Schema、索引与生成式答案表现
- 事实限定：首页量化指标按用户确认作为企业自述发布，不作为第三方验证结论、行业基准或对外引用证明
- 最终状态：SEO/GEO 已实现，待线上验证；本地事实治理无阻塞项
