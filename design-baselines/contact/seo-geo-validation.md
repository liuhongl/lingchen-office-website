# 联系我们页 SEO / GEO 验收台账

## 页面定义

- 页面名称：联系我们
- 路由：`/contact/`
- 正式 URL：`https://lingchen-ai.com/contact/`
- canonical URL：https://lingchen-ai.com/contact/
- 索引策略：index
- 页面主主题：联系灵宸智能并提交产品合作需求
- 目标受众：寻求 AI 产品合作与解决方案的企业用户
- 事实来源：MasterGo 当前画板与冻结公共组件
- 最后复核日期：2026-07-21

## 元数据与语义

| 项目 | 有效值 | 代码位置 | 验证结果 |
|---|---|---|---|
| title | 联系我们｜灵宸智能 | `app/contact/page.tsx` | PASS |
| description | 联系灵宸智能，提交产品合作需求或预约解决方案，获取面向企业业务场景的智能化解决方案支持。 | `app/contact/page.tsx` | PASS |
| canonical | `/contact/` | `app/contact/page.tsx` | PASS |
| Open Graph | website / zh_CN / `/contact/` | `app/contact/page.tsx` | PASS |
| 唯一 h1 | 联系我们 | `app/contact/page.tsx` | PASS（浏览器实测 1 个） |
| 标题层级 | h1 → h2 | `app/contact/page.tsx`、`contact-form.tsx` | PASS |
| lang | zh-CN | `app/layout.tsx` | PASS |

## 实体与事实

| 实体/事实 ID | 正式名称或陈述 | 类型 | 来源 | 页面位置 | 审核状态 |
|---|---|---|---|---|---|
| E-001 | 灵宸智能 | Organization | 公共品牌资产 | title / Header | PASS |
| E-002 | 联系电话、邮箱、公司地址 | ContactPoint | MasterGo 联系我们画板 | 联系方式卡片 | PASS |
| E-003 | 7 个产品选项 | Product | MasterGo 表单原文 | 产品多选区 | PASS |

## 结构化数据

本页未新增 JSON-LD：当前任务没有独立、已审核的 ContactPage Schema 契约；避免把未确认字段写成隐藏内容。页面可见关键内容均存在于服务端 HTML。

## 抓取与站内关系

- sitemap：已加入 `app/sitemap.ts`。
- robots：沿用全站允许抓取策略。
- 站内入口：公共 Header 的“联系我们”已按用户授权改为 `/contact/`，页面同时包含在 sitemap。
- 状态码与服务端 HTML：本地 `/contact/` 返回并渲染正常，唯一 h1 与关键联系内容存在。

## GEO 抽样计划

| 问题 ID | 用户真实问题 | 目标事实 | 发布前状态 | 发布后状态 |
|---|---|---|---|---|
| Q-001 | 如何联系灵宸智能？ | 电话、邮箱、地址 | 页面可见内容已核对 | 待上线抽样 |
| Q-002 | 灵宸智能有哪些产品可以合作？ | 7 个产品选项 | 页面可见内容已核对 | 待上线抽样 |

## 门禁结论

- 本地实现：通过
- 线上抓取与索引：待上线
- GEO 抽样：待上线
- 未验证项：线上状态码、搜索引擎抓取、索引与生成式答案抽样
- 最终状态：SEO/GEO 已实现，待线上验证
