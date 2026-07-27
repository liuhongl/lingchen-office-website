# 页面 SEO / GEO 验收台账

## 页面定义

- 页面名称：批量债权催收解决方案
- 路由：`/solutions/non-performing-assets/`
- 正式 URL：`https://lingchen-ai.com/solutions/non-performing-assets/`
- canonical URL：https://lingchen-ai.com/solutions/non-performing-assets/
- 索引策略：index, follow
- 页面主主题：基于 Recov Agent 的批量债权催收解决方案
- 目标受众：设计稿所述存在批量、小额、标准化逾期债权处置需求的企业
- 内容与事实来源：MasterGo `page_id=6:89588`、用户本轮确认覆盖
- 最后复核日期：2026-07-20

## 元数据与语义

| 项目 | 有效值 | 代码位置 | 验证结果 |
|---|---|---|---|
| title | 批量债权催收解决方案｜灵宸智能 | `app/solutions/non-performing-assets/layout.tsx` | PASS |
| description | 基于AI催收智能体的全链路、自进化、多智能体协作方案。 | 同上 | PASS |
| canonical | 自指 `/solutions/non-performing-assets/` | 同上 | PASS |
| Open Graph | 与 title、description、canonical 一致 | 同上 | PASS |
| 唯一 h1 | 批量债权催收解决方案 | `page.tsx` | PASS（实渲染 1 个） |
| 标题层级 | h1 → 分区 h2 → 子区 h3 → 卡片 h4 | `page.tsx` | PASS |
| lang | zh-CN | `app/layout.tsx` | PASS |

## 实体与事实

| 实体/事实 ID | 正式名称或陈述 | 类型 | 来源 | 页面位置 | 审核状态 |
|---|---|---|---|---|---|
| E-001 | Recov Agent | Product | MasterGo 可见文案 | 全页 | PASS |
| E-002 | 批量债权催收解决方案 | Service | MasterGo H1 | Hero | PASS |
| E-003 | 380%、50%、0 起、7×24 | Metric | MasterGo 指标卡；仅原样呈现，不扩写口径 | 价值与成效 | PASS |
| E-004 | 最快 15 天上线 | Service fact | MasterGo 实施路径 | 交付成果与实施 | PASS |

## 结构化数据

- 复用根布局中已核验的 `Organization` 与 `WebSite`。
- 本页不新增 Schema：页面没有超出普通解决方案页面且能满足必填事实证据的专用类型，避免把营销文案隐藏写入 JSON-LD。

## 抓取与站内关系

- [x] 已加入 `app/sitemap.ts`。
- [x] `robots.ts` 允许抓取且声明 sitemap。
- [x] `/products/` 的 Recov AI 卡片提供语义明确的站内入口。
- [x] 页面关键内容均为服务端组件输出，不依赖客户端交互显示。
- [x] 本地路由状态码、canonical、语言声明待 production build 后复核。

## GEO 抽样计划

- 发布前不伪造 GEO 效果结论。
- 上线后围绕“批量债权催收 AI 解决方案”“Recov Agent 如何处理逾期资产”等真实查询进行多引擎、多表达重复抽样，并保存日期、地区、引用页面和事实错误。

## 门禁结论

- 本地实现：待 production build 最终复核
- 线上抓取与索引：待上线
- GEO 抽样：待上线
- 最终状态：SEO/GEO 已实现，待线上验证

## 2026-07-24 用户文案覆盖复核

- Hero 可见副标题与说明已同步用户确认文本。
- 页面 metadata description 与 Open Graph description 已同步为“基于灵宸智能推出的Recov Agent催收智能体的全链路、自进化、多智能体催收协作方案。”。
- 独立 title、自指 canonical、唯一 H1、sitemap 与 robots 策略未改变。
- 本地状态：SEO/GEO 已实现，待线上验证；未宣称线上索引或 GEO 效果已验证。
