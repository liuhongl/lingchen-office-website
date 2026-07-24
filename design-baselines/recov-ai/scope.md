# Recov AI 产品详情页范围与证据

## 2026-07-22 原型内容同步批次

- 内容真源：Google AI Studio 当前交互原型 `https://ai.studio/apps/31940409-b4c4-420a-8018-a504586355a9`，以页面主体 `<main>` 的实际渲染文本为准。
- 视觉真源：本目录既有 MasterGo 基线、当前 `/products/recov-ai/` 已实现页面与冻结公共设计系统。
- 用户覆盖：执行 `1A / 2A / 3A`；有对应关系的大模块保留现有视觉，只同步模块内容、顺序、文案、指标和主体 CTA；明显错字修正，歧义保留原型。
- 当前范围：仅桌面端；移动端未纳入本轮官网实现和验收范围。
- 冻结资产：`SiteHeader`、`SiteFooter`、Logo、`ProductBreadcrumb`、`BookingModal`、`BookingTrigger`。
- 本节覆盖下方历史 MasterGo 内容真源口径；历史视觉证据继续有效。

- 页面名称：Recov AI 产品详情页
- MasterGo：https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=6%3A07885&devMode=true&layer_id=6%3A07886
- `page_id`：`6:07885`
- 正确 `layer_id`：`6:07886`
- 历史错误 `layer_id`：`33:060871`（实测属于 DeepDoc 的 16×16 盾牌图标，不是 Recov AI 根画板）
- Recov AI 根画板：`AI快搭-9627707`，1440×7709；必须从左侧页面“AI-不良资产-进入微沙盒体验底盘”进入
- 目标桌面视口：1440px；根画板 1440×7709
- 移动端设计基线：无，只做工程可用性检查
- 允许修改：`/products/recov-ai/`、产品矩阵 Recov AI 入口、sitemap、页面专属 CSS
- 禁止修改：公共 Header、Footer、Logo、字体、BookingTrigger；BookingModal 除已确认的 Portal 挂载修正外保持公共内容与视觉不变
- 用户确认覆盖：以当前 MasterGo 页面和 `AI快搭-9627707.png` 为 Recov AI 产品详情页主体视觉真源
- 用户确认视觉例外（2026-07-21）：保留现有全站公共 Footer，不按 Recov AI 专项稿将 Footer 从公共基线约 301px 调整为稿内约 349px；由此产生的约 48px 全页高度差异属于已确认覆盖，不通过页面级 CSS 补高，也不修改公共 Footer
- 用户确认公共交互修正（2026-07-21）：预约入口继续复用唯一 `BookingModal`，允许将公共弹窗通过 Portal 挂载至 `document.body`，以消除 Header、Hero、Closing 不同父级样式继承造成的弹窗差异
- 已排除素材：`图标 10` / `33:060871` 及本次从该图层导出的 SVG 均属于 DeepDoc，不得用于 Recov AI

## 公共资产冻结证据

| 资产 | 路径 | SHA-256 | 允许变化 |
|---|---|---|---|
| SiteHeader | `components/site-header.tsx` | `d3eea07b7d66968fec211fa373eb2faa467b7bfc34d0924ab5bbae621e0ff81f` | 仅路由高亮 |
| SiteFooter | `components/site-footer.tsx` | `ae7b55e3f972be01b0a80188d7f2404aee4c0c02431a131c1179ab9c018a0c55` | 保留当前公共版本；Recov AI 不做页面级覆盖 |
| Logo | `components/logo.tsx` | `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11` | 无 |
| BookingModal | `components/booking-modal.tsx` | `d99d2791ea1e82d3d6234385f1a92599782e8520805912487eb76bcb5f75c70f` | 已确认仅通过 Portal 挂载至 `document.body` |

## 分区

01 Hero；02 产品定位；03 行业压力；04 关键业务流；05 六大核心环节；06 多智能体矩阵；07 Agent 基座；08 产品价值；09 商业实效；10 落地场景；11 合作模式；12 Closing CTA。

## 2026-07-23 用户视觉覆盖

- 删除首个产品定位区块的“产品定位”标题标签；定位陈述、说明和对比内容全部保留。
- 最新浏览器批注覆盖先前 compact 口径：顶部统一复用标准 `ProductBreadcrumb`，预约交互继续复用公共 `BookingTrigger`，不修改公共组件本身。
- 业务流 `STEP` 去掉前导零；四项指标说明统一加粗；“过去 / 现在”标签与标题之间增加明确下间距。
- 当前官网仅验收桌面端，移动端未纳入本轮范围。
## 2026-07-24 用户覆盖

- Hero 改为参考 DeepLaw 的浅色系；定位区缩减上下间距。
- AI Agent 能力基座区显示完整标题并提升正文对比度。
- 商业实效区改为宽正文、2×2 结果卡、浅色左对齐流程框。
- 场景表采用合作模式表格语言；指定场景文案按用户原文替换。
- 合作模式说明保持单行。
