# 灵宸研究院页面范围

- MasterGo：`https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=6%3A20765&devMode=true`
- 页面名称：灵宸研究院
- `page_id`：`6:20765`
- 范围：整页（公共 Header / Footer 仅复用，不修改）
- 目标桌面视口：`1440 × 1080`；MasterGo 在 `1920 × 1080` 浏览器中以画板 `100%` 缩放取证
- 目标路由：`/research`（稳定英文小写路径；未修改冻结导航链接）
- 用户确认覆盖项：无；禁止补写文案
- 内容真源：MasterGo `page_id=6:20765` 的逐字原文，以及现有 28 篇正式文章素材；本次宽度调整不改文案。
- 视觉真源：原 MasterGo 研究院画板；2026-07-23 用户确认的公共 Header 1180px 栅格覆盖原 1336px 主体宽度，并允许摘要与封面尺寸随之优化。

## 冻结公共资产

| 资产 | 文件 | 开工 SHA-256 | 基线 | 允许变更 |
|---|---|---|---|---|
| Header | `components/site-header.tsx` | `ea5b1626042d5b6e8d26e7b4c878d27f7301d51e41cd3f82058c06196b065227` | 当前已确认公共基线 | 仅路由驱动的导航高亮 |
| Footer | `components/site-footer.tsx` | `5816ee5da601620216059640fcaace7f3f25c030d8280423f42e08759ddec20b` | 当前已确认公共基线 | 无 |

## 初步分区

1. `01-hero`：研究院首屏
2. `02-tabs`：文章分类标签
3. `03-articles`：6 条研究文章卡片
4. `04-pagination`：分页
5. 公共 Footer（冻结复用）

## 当前门禁

- G0：PASS
- G1：PASS；逐区 100% 基线、研发属性与正式素材已取证
- G2：PASS；全页逐字台账已完成，设计原文异常字符串未纠正
- G3：PASS；按 Hero、分类栏、文章卡片、加载更多逐区实现
- G4：PASS；逐区完成内容与视觉双验收
- G5：PASS；全页文案、截图、横向溢出与公共资产回归通过
- G6：PASS；工程命令与 MasterGo 证据门禁通过

## 2026-07-23 公共栅格对齐覆盖

- 用户确认研究院首页主体内容宽度与公共 Header 一致；若列表变窄后失衡，允许优化摘要行数与右侧封面尺寸。
- 当前事实：公共 `.shell` 为 `min(1180px, calc(100% - 80px))`；研究院 `.research-shell` 原为 `min(1336px, calc(100% - 104px))`。1440×900 实测 Header 内容宽 1180px、研究院内容宽 1321px，左右边界不一致。
- 视觉覆盖：研究院 Hero、分类 Tab、文章列表统一采用公共 Header 的 1180px 栅格；文章摘要固定两行省略，封面缩为 180×126，卡片高度调整为 272px。
- 允许修改：`app/globals.css` 中 `.research-*` 页面命名空间样式及本页证据台账。
- 禁止修改：公共 Header、Footer、Logo、字体、文章文案、分类交互、文章链接、正式插图文件。
- 公共资产开工 SHA-256：`SiteHeader=00a8a2bb1d30db5e77a6abf5825e95497d907d7c9356506f9feac9c5ec35ef76`；`SiteFooter=7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb`；`Logo=badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11`；`layout.tsx=5f62b96be5fddb33551996f8a3f343e9c3f9876016111c6fee66d5dcfc388da0`。
- 本次继续只验收桌面端；移动端未纳入当前官网范围。

## 2026-07-25 浏览器批注覆盖

- 目标视口：`1576 × 1258`，仅验收桌面端。
- Hero 改为参考首页视觉语言的浅蓝色系，删除固定高度，内容区上下 `padding: 60px`。
- 分类 Tab 删除“全部”后的文章数量徽标；未选中项改为黑色、加粗。
- 文章区顶部留白与列表卡片间距统一；文章卡片删除固定高度并缩小上下内边距。
- 本轮不修改文章文案、分类交互、文章链接、正式插图或公共 Header / Footer。
- 开工公共资产 SHA-256：`SiteHeader=5aef1bd27e0a0a57ffdc65dbb80df4ab5cc30aa2c17b1283f3791a17da345bfa`；`SiteFooter=8732972918addddddbbcbec095ff0b2b7c34797ea74522bf019427956ceae2ae`；`BookingModal=3e143bc70f5cc270231d3961ff5eb1b92481be637c55bcbc36269cfedbb32206`；`BookingTrigger=cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7`；`Logo=badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11`。
- 追加用户覆盖：分类栏背景改为纯白，文章列表区背景改为浅蓝灰 `#F4F7FB`，白色卡片保持内容层级。

## 2026-07-25 第二轮浏览器批注覆盖

- Hero 左侧不能接近白色，需要从左到右都保持可辨识的浅蓝色，与下方纯白分类栏形成明确分区。
- 所有文章卡片右侧正式封面与“立即阅读”按钮之间增加稳定间距，不只修用户指出的单张卡片。
- 本轮仍只允许修改 `.research-*` 页面命名空间样式与研究院证据台账；不改文案、文章数据、链接、正式图片和公共资产。
