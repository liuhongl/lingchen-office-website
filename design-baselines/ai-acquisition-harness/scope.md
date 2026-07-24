# AI 获客 Harness 解决方案页范围台账

## 2026-07-22 产品详情原型内容同步批次

- 本轮目标路由是 `/products/ai-acquisition-harness/`，不是 `/solutions/products/ai-acquisition-harness/`；下方历史解决方案页记录不作为本轮产品详情内容证据。
- 内容真源：Google AI Studio 当前交互原型 `https://ai.studio/apps/31940409-b4c4-420a-8018-a504586355a9`，以产品详情主体 `<main>` 的实际渲染文本为准。
- 视觉真源：本目录既有产品详情 MasterGo 基线、当前产品详情实现与冻结公共设计系统。
- 用户确认覆盖：执行 `1A / 2A / 3A`；有对应关系的大模块保留现有视觉，只同步模块内容、顺序、文案、指标和主体 CTA；明显错字修正，歧义保留原型。
- 当前范围：仅桌面端；移动端未纳入本轮官网实现和验收范围。
- 冻结资产：`SiteHeader`、`SiteFooter`、Logo、`ProductBreadcrumb`、`BookingModal`、`BookingTrigger`。

- 页面名称：解决方案-产品专项解决方案-AI获客Harness
- MasterGo：`https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=17%3A4896&devMode=true`
- `page_id`：`17:4896`
- 根画板：`AI快搭-9636697`
- 目标路由：`/solutions/products/ai-acquisition-harness/`
- 目标桌面视口：1440 × 900 CSS px；范围为整页主体。
- 公共 Header、Footer、Logo、BookingModal、BookingTrigger 冻结复用；只允许路由驱动导航与产品 Tab 高亮。
- 产品矩阵 Tab：一级高亮“产品专项解决方案”，二级高亮“AI获客Harness”。

## 公共资产冻结基线

| 资产 | 开工 SHA-256 | 允许变化 |
|---|---|---|
| Header | `d3eea07b7d66968fec211fa373eb2faa467b7bfc34d0924ab5bbae621e0ff81f` | 仅路由高亮 |
| Footer | `f27c99b55aa3fb3e078922bdcce80100f26859792688672bdae76829d44e592f` | 无 |
| Logo | `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11` | 无 |
| BookingModal | `1ef9eb10296ff62a52157d0afc0f92d63c321655a30f746d537a08abafa26842` | 无 |
| BookingTrigger | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 无 |

## 当前门禁

- 当前产品详情原型内容迁移与桌面浏览器回归已完成；旧解决方案页门禁不作为本轮产品详情完成状态。

## 已确认交互与阻塞

- `预约产品演示`：使用公共 `BookingTrigger` 打开冻结的 `BookingModal`。
- `观看视频介绍`：Google AI Studio 当前原型不存在该入口，按用户确认 2A 从当前产品详情页移除，不补写、不空跳转。
- Hero 右侧旧状态插画与遮挡文案：Google AI Studio 当前原型不存在该模块，按用户确认 2A 从当前产品详情页移除。
- Mine GEO 末屏 `下载产品白皮书` 仍缺正式文件/URL；该阻塞不扩散到本页。

## 分区清单（按 1440px 基线纵向边界）

1. Header / 产品 Tab：0–170（冻结复用）
2. Hero：171–850
3. 一级认知：851–1648
4. 行业困局：1649–2486
5. 灵宸重构：2487–3174
6. 关键竞争优势：3175–3679
7. 可交付成果：3680–4211
8. 价值跃迁模型：4212–5034
9. 场景案例：5035–5612
10. 经典落地案例：5613–6789
11. 部署模式：6790–7231
12. 选择理由：7232–7822
13. Closing CTA：7823–8150
14. Footer：8151–8578（冻结复用）

## 2026-07-23 用户视觉覆盖

- 删除 `/products/ai-acquisition-harness/` Hero 顶部“产品定位”标签。
- 该产品页继续使用 compact 面包屑，不新增预约按钮。
- “落地建议与指引”中的第 1、2、3 点分别独立折行，文案保持不变。
- “价值跃迁模型”从“产品价值”中拆为独立大模块，并与相邻模块使用不同背景色。
- “落地场景”和“合作模式”拆为两个独立大模块，并使用不同背景色区分。
- “落地场景”标题图标去掉素材自带的浅色底，仅保留原有蓝色定位图形；不替换图标语义。
- 本次模块拆分只调整结构、背景与留白，不新增、删除或改写任何可见文案。
- 当前官网仅验收桌面端，移动端未纳入本轮范围。

## 2026-07-24 浏览器批注覆盖

- Hero 与介绍模块收紧上下留白。
- “一图读懂”标题按用户逐字替换。
- NLP 技术底座卡片去掉深色背景，正文统一 14px；不改该模块原有图标与正文。
- 公共 Header/Footer、Logo、BookingModal、BookingTrigger 保持冻结。

## 2026-07-23 经典案例标题间距覆盖

- 目标区域：`/products/ai-acquisition-harness/` 落地场景区中的“经典落地案例示例”标题。
- 用户反馈：标题上间距过小、下间距过大。
- 目标桌面视口：1413 × 1258 CSS px。
- 调整范围：只调整标题与上方表格、下方案例卡片之间的垂直间距；文案、图标、案例卡片、公共 Header/Footer/Logo/BookingModal 均不修改。
- 开工公共资产 SHA-256：Header `2c033c6ccdc416829083407865733942e344c2c3318ea61d5e885181f4a90c1f`；Footer `cb2b70d580ef03b0318c2b9ba77693e8ad87d1d54242c3e37ca19b9b2c7148eb`；Logo `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11`；BookingModal `3e143bc70f5cc270231d3961ff5eb1b92481be637c55bcbc36269cfedbb32206`。
- 当前官网仅验收桌面端，移动端未纳入本轮范围。
## 2026-07-24 表格结构覆盖

- 用户确认将价值跃迁表拆为「验证维度 / 传统做法 / Harness价值跃迁」三列。
- 用户确认将场景表拆为「落地场景 / 适用角色 / 痛点 / 可衡量指标或解决的问题」四列，并增加列间距。
- 内容仅拆分现有 `【传统做法】`、`【Harness 闭环】`、`【痛点】` 后的原文，不补写文案。
