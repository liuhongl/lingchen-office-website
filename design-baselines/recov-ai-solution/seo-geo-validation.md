# 页面 SEO / GEO 验收台账

## 2026-07-22 Recov AI 原型内容同步复核

- title：`批量债权催收解决方案｜Recov AI｜灵宸智能`。
- description 已同步原型“全链路、自进化、多智能体协作”定位。
- canonical：`/solutions/products/recov-ai/`；唯一 H1 为 `批量债权催收解决方案`。
- 应用场景、交付方式与选择理由来自页面可见原型内容；未额外注入结构化营销事实。
- 本地只声明“SEO/GEO 已实现，待线上验证”。

## 页面定义

- 页面名称：Recov AI 批量债权催收解决方案
- 路由：`/solutions/products/recov-ai/`
- 正式 URL：`https://lingchen-ai.com/solutions/products/recov-ai/`
- canonical URL：`https://lingchen-ai.com/solutions/products/recov-ai/`
- 索引策略：index
- 页面主主题：批量债权催收解决方案
- 目标受众：有批量逾期资产处置需求的企业
- 内容负责人：待用户指定
- 事实审核人：待用户指定
- 最后复核日期：2026-07-21

## 元数据与语义

| 项目 | 有效值 | 代码位置 | 验证结果 |
|---|---|---|---|
| title | 批量债权催收解决方案｜Recov AI｜灵宸智能 | `app/solutions/products/recov-ai/layout.tsx` | PASS |
| description | 基于 AI 催收智能体的全链路、自动化、多智能体协作方案，把逾期资产高效、合规地转化为企业现金流。 | `app/solutions/products/recov-ai/layout.tsx` | PASS，服务端 HTML 实测 |
| canonical | `https://lingchen-ai.com/solutions/products/recov-ai/` | `app/solutions/products/recov-ai/layout.tsx` | PASS，自指 canonical |
| Open Graph | 独立 title、description、url、type | `app/solutions/products/recov-ai/layout.tsx` | PASS |
| 唯一 h1 | 批量债权催收\n解决方案 | `app/solutions/products/recov-ai/page.tsx` | PASS |
| 标题层级 | 1 个 h1；7 个按页面顺序排列的 h2；卡片标题使用 h3/h4 | `app/solutions/products/recov-ai/page.tsx` | PASS |
| lang | zh-CN | `app/layout.tsx` | PASS |

## 实体与事实

| 实体/事实 ID | 正式名称或陈述 | 类型 | 来源 | 页面位置 | 审核状态 |
|---|---|---|---|---|---|
| E-001 | Recov AI 批量债权催收解决方案 | Product / Service | MasterGo `33:024756` 可见 Hero | Hero | PASS |

## 结构化数据

| Schema 类型 | 适用理由 | 事实来源 | 验证工具与结果 |
|---|---|---|---|
| 暂不添加 | 当前没有需要额外 Schema 才能表达的已确认实体；避免添加无证据营销字段 | MasterGo 可见内容 | PASS |

## 抓取与站内关系

- [x] 页面包含在 sitemap，或已记录不包含理由。
- [x] robots 与索引策略一致。
- [x] 至少存在一个可抓取的站内入口。
- [x] 没有错误重定向或孤岛页面；本地 GET 实测 `200 OK`，产品 Tab 提供服务端站内入口。
- [x] 关键内容存在于服务端 HTML。

## GEO 抽样计划

| 问题 ID | 用户真实问题 | 等价问法 | 目标事实 | 引擎/地区 | 发布前基线 | 发布后结果 |
|---|---|---|---|---|---|---|
| Q-001 | 批量逾期债权如何自动催收？ | 企业批量坏账可以用 AI 自动处理吗？ | Recov Agent 的六环节、多身份、司法闭环和实施周期 | 中文 / 中国 | 待上线 | 待上线 |

## 门禁结论

- 本地实现：通过
- 线上抓取与索引：待上线
- GEO 抽样：待上线
- 未验证项：线上状态码、抓取、索引与生成式答案抽样
- 最终状态：SEO/GEO 已实现，待线上验证
