# SiteHeader SEO / GEO 验收台账

## 变更定义

- 组件名称：全站公共 `SiteHeader`
- 路由：全站共享组件，不对应独立 URL
- canonical URL：由各正式页面继续使用既有自指 canonical，例如 `https://lingchen-ai.com/products/recov-ai/`
- 变更类型：纯视觉布局调整
- 最后复核日期：2026-07-24

## 元数据与语义

| 项目 | 本轮影响 | 代码位置 | 验证结果 |
|---|---|---|---|
| title | 无 | 各页面 metadata | PASS |
| description | 无 | 各页面 metadata | PASS |
| canonical | 无 | 各页面 metadata | PASS |
| Open Graph | 无 | 各页面 metadata | PASS |
| 唯一 h1 | 无 | 各页面主体 | PASS |
| 标题层级 | 无 | 各页面主体 | PASS |
| lang | 无 | 根布局 | PASS |

## 导航语义

- 导航仍使用 `<nav aria-label="主导航">`。
- 所有导航文本、顺序和 `href` 均未修改。
- “立即体验”仍为按钮并打开既有公共 BookingModal。
- 本轮不新增或删除站内入口，不改变 sitemap、robots 或结构化数据。

## 门禁结论

- 本地实现：通过
- 线上抓取与索引：不适用，本轮没有 SEO/GEO 内容变更
- GEO 抽样：不适用，本轮没有事实或可索引正文变更
- 未验证项：线上部署后的最终视觉
- 最终状态：SEO/GEO 无变化
