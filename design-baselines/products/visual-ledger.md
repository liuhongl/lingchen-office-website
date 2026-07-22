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
| PM-V0104 | 01 | 七张卡片 hover / focus-within | 同通用卡片 | 同上 | 所有文字与标签保持默认态 | 白底保持不变 | `#5e9ef2` 1px 边框；`0 18px 42px rgba(23,105,242,.14)` 轻蓝阴影 | `.product-card:hover` / `:focus-within`；2026-07-22 用户二次覆盖 | 已实现，待浏览器视觉复核 |
| PM-V0105 | 01 | 原固定色变体 | 已移除 `featured` / `warm` 数据与 class，七张卡片使用同一默认态 | 同通用卡片 | 同通用卡片 | 默认白底 | 同通用卡片 | 用户覆盖优先于原型 | PASS |
| PM-V0106 | 01 | 分类/类型标签 | 内容自适应 | 6px 10px | 12px / 700 / 1.35 | 淡蓝或淡金 | 6px；无阴影 | `.product-card__tag` / `__type` | PASS |
| PM-V0107 | 01 | 产品标题 | 内容自适应 | 上 22px | 22px / 800 / 1.2 | `#111b2f`；首卡白色 | 无 | `.product-card h2` | PASS |
| PM-V0108 | 01 | 交付结果与描述 | 卡片内容宽 | 间距 6px/24px | 13px / 700 与 14px / 400 / 1.75 | 官网蓝与 `#526078` | 无 | `.product-card__result` / `__description` | PASS |
| PM-V0109 | 01 | 卡片底部 | 卡片底边 | margin-top auto | 13px / 600 | 蓝灰；链接为深蓝 | 顶部细分隔线 | `.product-card__footer` | PASS |
| PM-V0110 | 01 | 箭头图标 | 16×16 | 与链接 7px gap | 无 | currentColor | 无 | `lucide-react` `ArrowRight` | PASS |

## 区块门禁结论

- 元素总数：10
- `PASS`：10
- 阻塞：0
- 未通过：0
- 结论：允许进入实现；页面无 MasterGo 1:1 资格
