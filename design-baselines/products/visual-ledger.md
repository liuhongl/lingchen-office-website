# 产品矩阵视觉属性台账

## 有效视觉来源

- 页面级 MasterGo：无，用户已确认。
- 布局来源：AI Studio 原型全屏预览，2026-07-20 浏览器取证。
- 视觉语言来源：冻结公共 Header/Footer 与官网既有 MasterGo 基线；数值采用项目既有 CSS token 与 1440px 原型可测布局。

| 元素 ID | 区块 | 元素/图标 | x/y/w/h | 间距/对齐 | 字体/字号/字重/行高 | 填充/渐变 | 边框/圆角/阴影 | 素材或代码位置 | 核对 |
|---|---|---|---|---|---|---|---|---|---|
| PM-V0101 | 01 | 页面背景 | 全宽；最小视口高减 Header/Footer | 上下 56px | 既有官网字体栈 | `#f4f9ff` 与轻量蓝色径向渐变 | 无 | `app/globals.css` `.product-matrix-page` | PASS |
| PM-V0102 | 01 | 卡片网格 | 容器 1180px；桌面 3 列 | 24px gap | 无 | 透明 | 无 | `.product-matrix-grid` | PASS |
| PM-V0103 | 01 | 七张卡片默认态 | 等宽；最小高 320px | padding 28px；纵向布局 | 深色标题、蓝色结果、蓝灰正文 | `rgba(255,255,255,.94)` | 1px `#d6e4f3`；14px；既有蓝灰阴影 | `.product-card`；2026-07-22 用户覆盖 | PASS |
| PM-V0104 | 01 | 七张卡片 hover / focus-within | 同通用卡片 | 同上 | 所有文字与标签保持默认态 | 白底保持不变 | `#5e9ef2` 1px 边框；`0 18px 42px rgba(23,105,242,.14)` 轻蓝阴影 | `.product-card:hover` / `:focus-within`；2026-07-22 用户二次覆盖 | PASS（2026-07-24 浏览器计算样式复核） |
| PM-V0105 | 01 | 原固定色变体 | 已移除 `featured` / `warm` 数据与 class，七张卡片使用同一默认态 | 同通用卡片 | 同通用卡片 | 默认白底 | 同通用卡片 | 用户覆盖优先于原型 | PASS |
| PM-V0106 | 01 | 分类/类型标签 | 内容自适应 | 6px 10px | 12px / 700 / 1.35 | 淡蓝或淡金 | 6px；无阴影 | `.product-card__tag` / `__type` | PASS |
| PM-V0107 | 01 | 产品标题 | 内容自适应 | 上 22px | 22px / 800 / 1.2 | `#111b2f`；首卡白色 | 无 | `.product-card h2` | PASS |
| PM-V0108 | 01 | 交付结果与描述 | 卡片内容宽 | 间距 6px/24px | 13px / 700 与 14px / 400 / 1.75 | 官网蓝与 `#526078` | 无 | `.product-card__result` / `__description` | PASS |
| PM-V0109 | 01 | 卡片底部 | 卡片底边 | margin-top auto | 13px / 600 | 蓝灰；链接为深蓝 | 顶部细分隔线 | `.product-card__footer` | PASS |
| PM-V0110 | 01 | 箭头图标 | 16×16 | 与链接 7px gap | 无 | currentColor | 无 | `lucide-react` `ArrowRight` | PASS |
| PM-V0111 | 01 | 前五张出海类卡片默认 / Hover | 同通用卡片 | padding 与网格不变 | 默认深色文字；Hover 白色文字 | 默认 `linear-gradient(135deg, rgba(191,219,254,.96), rgba(147,197,253,.88))`；Hover `#1d4ed8` | 默认 `rgba(96,165,250,.95)`；Hover 同色；2px 圆角；Hover `6px 6px rgba(29,78,216,.15)` | 原型 `.geo-card-outbound` / `:hover` 实际 CSS；`02-products-default.png`、`03-products-outbound-focus.png` | PASS |
| PM-V0112 | 01 | Recov AI 默认 / Hover | 同通用卡片 | 同上 | 默认深色文字；Hover 白色文字 | 默认 `linear-gradient(135deg, rgba(254,243,199,.95), rgba(253,230,138,.82))`；Hover `#ca8a04` | 默认 `#fcd34d`；Hover 同色；2px 圆角；Hover `6px 6px rgba(202,138,4,.15)` | 原型 `.geo-card-legal` / `:hover` 实际 CSS；`02-products-default.png`、`04-products-recov-focus.png` | PASS |
| PM-V0113 | 01 | DeepLaw 默认 / Hover | 同通用卡片 | 同上 | 默认深色文字；Hover 白色文字 | 默认 `linear-gradient(135deg, rgba(209,250,229,.95), rgba(167,243,208,.82))`；Hover `#047857` | 默认 `#6ee7b7`；Hover 同色；2px 圆角；Hover `6px 6px rgba(4,120,87,.15)` | 原型 `.geo-card-debt` / `:hover` 实际 CSS；`02-products-default.png`、`05-products-deeplaw-focus.png` | PASS |
| PM-V0114 | 01 | 七张卡片最新密度 | 等宽；最小高 320px | 上下 20px、左右 28px；正文与底部区上间距 16px | 沿用现有字体 | 沿用三类配色 | 1px 现有分类边框；5px 圆角；阴影不变 | 2026-07-26 用户浏览器批注；`visual-results/feedback-2026-07-26/products-card-density-1576x1258.png` | PASS |

## 区块门禁结论

- 元素总数：10
- `PASS`：14
- 阻塞：0
- 待本轮复核：0
- 结论：原型默认态与三类交互态均已复验；页面无 MasterGo 1:1 资格

## 2026-07-24 三类卡片浏览器实测

- 前五张卡片计算样式：默认蓝色渐变和 `rgba(96,165,250,.95)` 边框；键盘焦点态为 `#1d4ed8`，文字白色，阴影 `rgba(29,78,216,.15) 6px 6px`。
- Recov AI：默认黄色渐变和 `#fcd34d` 边框；焦点态为 `#ca8a04`，文字白色，阴影 `rgba(202,138,4,.15) 6px 6px`。
- DeepLaw：默认绿色渐变和 `#6ee7b7` 边框；焦点态为 `#047857`，文字白色，阴影 `rgba(4,120,87,.15) 6px 6px`。
- 七张卡片圆角均为 2px；产品矩阵在 `1280 × 720` 桌面视口 `scrollWidth=clientWidth=1265`，无横向溢出。
- 本轮没有新增或替换图标、图片素材。
- 2026-07-26 在 `1576 × 1258` 桌面视口实测：七张卡片均为 `464 × 320px`；计算圆角均为 `5px`；内边距均为 `20px 28px`；正文上间距与 Footer 上内边距均为 `16px`；页面横向溢出 `0px`。

| PM-V2403 | 产品矩阵容器 | 用户浏览器批注 1 | 桌面最大宽度 1440px，左右保留至少 32px；三列及 24px gap 不变 | CONFIRMED |
