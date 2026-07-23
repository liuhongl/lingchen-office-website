# 官网容器规范 SEO / GEO 验收台账

## 页面定义

- 页面名称：官网公共容器规范调整
- 路由：既有正式页面，不新增路由
- 索引策略：沿用各页面现状
- 最后复核日期：2026-07-23

## 元数据与语义

本次不修改 title、description、canonical、Open Graph、h1、标题层级、结构化数据、sitemap 或 robots。SEO/GEO 验收以 Git diff 确认这些文件与字段无变化。

- canonical URL：`https://lingchen-ai.com/`（首页代表值；其他正式页面继续保留各自既有自指 canonical）

## 门禁结论

- 本地实现：PASS；任务范围内仅修改 CSS 容器宽度与验收文档，SEO/GEO 源码与可见语义结构均未改变
- 线上抓取与索引：不适用，本次不改变页面语义或 URL
- GEO 抽样：不适用，本次不改变内容
- 最终状态：PASS；`pnpm build` 已完成 71 个静态页面生成，既有 robots、sitemap 与正式路由保持可构建
