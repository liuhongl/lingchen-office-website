# 关于灵宸 SEO / GEO 验收台账

## 页面定义

- 页面名称：关于灵宸
- 路由：`/about`
- 正式 URL：`https://lingchen-ai.com/about/`
- canonical URL：`https://lingchen-ai.com/about/`
- 索引策略：index
- 页面主主题：灵宸智能的产品布局、团队、品牌故事、合作模式与安全承诺
- 目标受众：评估灵宸智能公司与交付能力的企业决策者和合作伙伴
- 内容负责人：待用户指定
- 事实审核人：待用户指定
- 最后复核日期：2026-07-20

## 元数据与语义

| 项目 | 有效值 | 代码位置 | 验证结果 |
|---|---|---|---|
| title | 关于灵宸｜灵宸智能 | `app/about/page.tsx` | PASS |
| description | 了解灵宸智能的 AI 原生 Agent 产品布局… | `app/about/page.tsx` | PASS |
| canonical | `https://lingchen-ai.com/about/` | `app/about/page.tsx` | PASS |
| Open Graph | 关于页独立 URL、标题与描述 | `app/about/page.tsx` | PASS |
| 唯一 h1 | 关于灵宸可见主标题 | `app/about/page.tsx` | PASS |
| 标题层级 | 1 个 h1，后续 h2/h3 | `app/about/page.tsx` | PASS |
| lang | `zh-CN` | `app/layout.tsx` | PASS |

## 实体与事实

| 实体/事实 ID | 正式名称或陈述 | 类型 | 来源 | 页面位置 | 审核状态 |
|---|---|---|---|---|---|
| E-001 | 灵宸智能 | Organization | 现有官网公开信息 | 全页 | PASS（现有公开信息） |
| E-002 | AI 原生 Agent 产品布局 | Service | 关于页 MasterGo 已确认文案 | 产品布局区 | PASS |
| E-003 | 团队履历、客户交付经验与安全承诺 | Organization | MasterGo 可见原文；用户于 2026-07-20 确认为企业自述 | 团队与安全区 | PASS（企业自述；不得表述为第三方背书、认证或客户授权案例） |

## 结构化数据

| Schema 类型 | 适用理由 | 事实来源 | 验证工具与结果 |
|---|---|---|---|
| AboutPage | 页面用于介绍组织 | 页面标题和正文 | 本地 JSON 解析 PASS；待线上 Schema Validator |

## 抓取与站内关系

- [x] 页面包含在 sitemap。
- [x] robots 与 index 策略一致。
- [x] 主导航存在明确入口。
- [x] 没有错误重定向或孤岛页面。
- [x] 关键内容存在于预渲染 HTML。

## GEO 抽样计划

| 问题 ID | 用户真实问题 | 等价问法 | 目标事实 | 引擎/地区 | 发布前基线 | 发布后结果 |
|---|---|---|---|---|---|---|
| Q-001 | 灵宸智能是一家什么公司？ | 灵宸智能的团队和产品方向是什么？ | 公司、团队与产品事实 | 待指定 / 中国 | 待线上执行 | 待上线 |

## 门禁结论

- 本地实现：通过
- 线上抓取与索引：待上线
- GEO 抽样：待上线
- 未验证项：团队履历、客户经验与安全承诺尚无逐项第三方证明材料；线上索引和生成式答案表现
- 事实限定：相关陈述按用户确认作为企业自述发布，不作为第三方背书、资质认证或客户授权案例
- 最终状态：SEO/GEO 已实现，待线上验证；本地事实治理无阻塞项
