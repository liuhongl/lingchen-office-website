# SiteHeader 公共头布局调整范围

- 任务日期：2026-07-24
- 内容真源：现有 `components/site-header.tsx`，本次不修改任何可见文案或链接。
- 视觉真源：用户在当前对话提供的 `1616 × 1258` 浏览器批注截图与明确覆盖要求。
- 用户确认覆盖：
  - 主导航模块放到 Header 容器的水平中间位置。
  - “立即体验”按钮放在最右侧。
- 目标桌面视口：`1616 × 1258`；页面有效 `clientWidth` 为 `1601px`。
- 修改范围：仅 `SiteHeader` 桌面布局。
- 不修改：Logo、导航文字、导航链接、按钮文案、按钮视觉、Header 高度、Footer、BookingModal、BookingTrigger。
- 移动端：未纳入当前官网验收范围；保留已有移动端代码，不以本轮桌面修改破坏已有行为。

## 开工基线

- 修改前截图及现有视觉真源：`visual-source-existing-header.png`
- 修改前 `components/site-header.tsx` SHA-256：`2c033c6ccdc416829083407865733942e344c2c3318ea61d5e885181f4a90c1f`
- 修改前布局：
  - Header 内容容器：`x=200.5`，`width=1200`，中心线 `x=800.5`
  - Logo：`x=200.5`，`width=72`
  - 主导航：`x=779.5`，`width=509`，中心线 `x=1034`
  - “立即体验”：`x=1310.5`，`width=90`，右边界与容器右边界一致
