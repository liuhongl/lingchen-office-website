# MasterGo 视觉属性台账（本轮修正）

| 元素 ID | 区块 | 元素 | MasterGo 证据 | 实现属性 | 代码位置 | 核对 |
|---|---|---|---|---|---|---|
| V-0501 | 05 | `40%~60%` 指标 | 用户截图及 `05-value-mastergo-*.png`：整段单行 | 删除 JSX 强制 `<br />`；`white-space: normal` 下容器宽度足够单行显示 | `page.tsx` | PASS |
| V-0201 | 02 | 三张概览卡智能体名称 | `02-03-mastergo.png`：标题为明显粗体 | `font-size: 17px; font-weight: 700` | `globals.css` | PASS |
| V-0301 | 03 | 3.1～3.5 智能体名称 | `03-2/3/4/5-mastergo-large.png`：标题为明显粗体 | `font-size: 22px; font-weight: 700` | `globals.css` | PASS |
| V-0001 | 00 | Hero、页内方案导航、主 CTA | `g0-hero-section01-100.png` | 白底导航；左对齐蓝黑标题；浅蓝 Hero；蓝色主按钮；公共 Header 仅改变解决方案高亮；导航由 `span/b` 改为 `Link` 后计算尺寸、颜色、背景、padding、圆角与基线保持一致 | `page.tsx`、`globals.css` | PASS |
| V-0101 | 01 | 四张痛点卡和底部总结条 | `g1-pains-section02-100.png` | 四列卡片、独立彩色图标、浅色总结条；背景和留白按分区基线 | `page.tsx`、`globals.css` | PASS |
| V-0202 | 02 | 三张方案概览卡与知识中枢条 | `g2-overview-section03-100.png` | 蓝/青/绿三卡；图标、圆角、描边和底部知识中枢横条分别对应设计 | `page.tsx`、`globals.css` | PASS |
| V-0302 | 03 | 五类智能体双栏拆解卡 | `g3-details-a-100.png`、`g3-details-b-100.png` | 灰色问题卡 + 对应色能力卡；标签、圆点、标题字重和分区间距独立核对 | `page.tsx`、`globals.css` | PASS |
| V-0401 | 04 | 五体协同双卡与三条协同结果 | `g4-synergy-100.png` | 蓝/青双卡、纵向圆点连线、结果卡布局与背景作用范围对应设计 | `page.tsx`、`globals.css` | PASS |
| V-0502 | 05 | 五项指标与三列表格 | `g5-value-100.png` | 五种指标色、重字重数字、单行 `40%~60%`、浅蓝表头及三列表格 | `page.tsx`、`globals.css` | PASS |
| V-0601 | 06 | 产品矩阵、可信底座、落地路径 | `g6-trust-100.png`、`g6-paths-100.png` | 产品/保障卡片、路径圆点连线、渐变建议条及区块标题图标分别核对 | `page.tsx`、`globals.css` | PASS |
| V-0701 | 07 | Closing CTA 与 Footer | `g6-cta-footer-100.png` | 浅蓝 CTA、居中按钮；公共 Footer 直接复用冻结组件 | `page.tsx`、公共组件 | PASS |

## 区块门禁结论

- 元素总数：11
- `PASS`：11
- 阻塞项：0
- 结论：通过

## 2026-07-22 用户审查视觉台账

| 元素 | 用户覆盖 | 本地证据 | 状态 |
|---|---|---|---|
| 痛点编号 | 去掉 `/`，保留原有徽标视觉 | `user-review-full-local-1671.png` | PASS |
| 章节编号（历史状态） | 中文序号与既有标题组件统一 | 同上 | SUPERSEDED |

## 2026-07-23 章节序号覆盖

| 元素 | 用户覆盖 | 实现要求 | 状态 |
|---|---|---|---|
| 七个 `.overseas-title > b` | 去掉中文序号后的“、” | 仅改 `no` 文本；保留字体、颜色、底座尺寸、标题间距和标题正文 | PASS |

- 同视口证据：`output/playwright/ai-overseas-sequence-2026-07-23/after/first-section.png`。

## 2026-07-24 浏览器批注视觉覆盖

| 元素 ID | 区块 | 用户覆盖 | 精确实现要求 | 门禁状态 |
|---|---|---|---|---|
| V-2401 | Hero 标题 | 改为一行 | 移除强制换行；运行时 52px/800、标题高度 48px | PASS |
| V-2402 | Hero 正文 | 宽度延伸到右侧 | 宽度为当前 `.shell` 的 100%（1200px），不设置额外 max-width | PASS |
| V-2403 | Hero | 下间距与上间距一致 | 取消 520px 最小高度；运行时上下 padding 均为 42px | PASS |
| V-2404 | 正文 section | 上下间距统一 | 桌面端运行时 `padding-block:60px; height:auto; min-height:0` | PASS |
| V-2405 | 36 个月指标 | 缩小字号适配一行 | 运行时 `font-size:24px; white-space:nowrap`，未溢出卡片 | PASS |
| V-2406 | 可信底座 | 左三右三 | 六项运行时为两列三行，左列前三项、右列后三项 | PASS |
| AO-V2501 | 可信底座 | 用户 2026-07-25 浏览器批注 | 两列三行，按用户指定的列内顺序排列 | CONFIRMED |
| AO-V2502 | Closing CTA | 用户 2026-07-25 浏览器批注 | 高度由内容与 `60px` 上下 padding 撑开，不设固定高度 | CONFIRMED |
# 2026-07-26 浏览器批注视觉台账

| 元素 | 布局 / 字体 | 背景 / 图形 | 图标来源 | 状态 |
|---|---|---|---|---|
| 痛点卡标题行 | 编号与标题横向排列，`gap:12px`，垂直居中 | 保留现有编号色块与卡片背景 | 无新增图标 | PASS |
| 智能体标签行 | 图标与标签横向排列，`gap:12px` | 保留现有图标渐变与标签色 | 复用现有正式图标 | PASS |
| 指标说明 | `font-size:14px` | 原背景不变 | 无 | PASS |

- 同视口证据：`visual-results/feedback-2026-07-26/ai-overseas-top-1576x1258.png`、`visual-results/feedback-2026-07-26/ai-overseas-cards-1576x1258.png`。
