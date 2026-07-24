# SiteHeader 最终验收

- [x] 内容完整迁移通过：导航文字、顺序、链接和 CTA 文案均未改变。
- [x] 已视觉校准：用户确认覆盖“导航模块居中、立即体验按钮放在最右侧”已实现。
- [x] 导航中心点与 Header 内容容器中心线误差不超过 2 CSS px；实测误差 `0px`。
- [x] “立即体验”按钮右边界与 Header 内容容器右边界误差不超过 2 CSS px；实测误差 `0px`。
- [x] Logo 左边界、Header 高度、按钮视觉和导航文案未改变。
- [x] 首页、产品矩阵页、Recov AI 页完成同视口回归。
- [x] 无横向溢出。
- [x] Header CTA 仍打开公共 BookingModal，关闭后滚动恢复。
- [x] 公共 Footer、Logo、BookingModal、BookingTrigger 哈希未变化。
- [x] `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check` 通过。
- [x] `pnpm mastergo:check site-header` 通过。
- [x] 已保存本地同视口截图和对比证据。

移动端未纳入当前官网验收范围；仅确认本轮桌面布局未删除或覆盖原有移动端规则。
