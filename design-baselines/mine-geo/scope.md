# Mine GEO MasterGo 范围台账

## 2026-07-22 原型内容同步批次

- 内容真源：Google AI Studio 当前交互原型 `https://ai.studio/apps/31940409-b4c4-420a-8018-a504586355a9`，以页面主体 `<main>` 的实际渲染文本为准。
- 视觉真源：本目录既有 MasterGo 基线、当前 `/products/mine-geo/` 已实现页面与冻结公共设计系统。
- 用户覆盖：执行 `1A / 2A / 3A`；有对应关系的大模块保留现有视觉，只同步模块内容、顺序、文案、指标和主体 CTA；明显错字修正，歧义保留原型。
- 当前范围：仅桌面端；移动端未纳入本轮官网实现和验收范围。
- 冻结资产：`SiteHeader`、`SiteFooter`、Logo、`ProductBreadcrumb`、`BookingModal`、`BookingTrigger`。
- 本节覆盖下方历史 MasterGo 内容真源口径；历史视觉证据继续有效。

- 页面名称：品牌生成式引擎优化与获客 AI Agent
- MasterGo：`https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=33%3A088500&devMode=true`
- `page_id`：`33:088500`
- 原始画板：1440×6959，SHA-256 `f789ec245e236107b20f03c2818b4e591f7a9f8a3d572a7f0896554ae50ac346`
- 实现路由：`/products/mine-geo/`
- 范围：整页；目标桌面视口 1440×6959。
- 公共 `SiteHeader`、`SiteFooter`、Logo、`BookingTrigger`、`BookingModal` 冻结复用。

## 公共资产基线

| 资产 | 开工 SHA-256 | 允许变化 |
|---|---|---|
| Header | `a5edbe507ea4338ccf61f7c50018a2c6863e3fdfebf7b47ac9603c34cfd033ec` | 既有路由高亮 |
| Footer | `5816ee5da601620216059640fcaace7f3f25c030d8280423f42e08759ddec20b` | 无 |
| Logo | `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11` | 无 |
| BookingModal | `1ef9eb10296ff62a52157d0afc0f92d63c321655a30f746d537a08abafa26842` | 无 |
| BookingTrigger | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 无 |

## 用户确认

- 整页还原；禁止补写文案、禁止近似图标。
- 公共头尾冻结。
- 本页在 Social Grow 门禁通过后开始。
- 2026-07-20 用户确认保留当前 Header；交付冻结基线更新为 `ea5b1626042d5b6e8d26e7b4c878d27f7301d51e41cd3f82058c06196b065227`，原始开工哈希继续保留用于追溯。
- 2026-07-21 用户确认优化四张指标卡的重复箭头：保留 MasterGo 正式方向图标，移除标题文字中的 `↑/↓`，其余指标文案不变。
- 2026-07-21 并发接入的共享 `ProductBreadcrumb` 默认高度为 74px，和本页 46px 设计基线冲突；本页使用不影响其他页面的 `compact` 变体恢复原高度、分隔符和无额外 CTA 的设计状态。
- 2026-07-23 用户确认删除 Hero 顶部“产品定位”标签；本页继续使用 compact 面包屑，不新增预约按钮。
- 2026-07-23 用户确认将“五大能力 · 一个闭环”（含横向箭头）、“重构关键业务流”、“核心产品能力”、“产品价值与实效指标归因”和“品牌生成式引擎优化与获客 AI Agent”按独立大模块展示，并在各模块底部保留明确间距；本次只调整 Mine GEO 主体分区，不改文案、卡片内容和公共组件。
- 当前官网仅验收桌面端，移动端未纳入本轮范围。
