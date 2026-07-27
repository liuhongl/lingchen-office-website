# 产品矩阵浏览器批注第五批（2026-07-27）

## 范围与成功标准

- 路由：`/products/mine-geo/`、`/products/social-grow/`。
- 视口：桌面端 `1576×1258`；移动端不在当前官网实现与验收范围。
- 内容真源：用户本轮 8 条浏览器批注；不增删或改写可见文案。
- 视觉真源：当前冻结页面实现叠加用户本轮明确覆盖。
- 允许改动：`app/product-matrix-desktop.css` 与两页对应证据台账。
- 成功标准：Mine GEO 7 条视觉要求、Social Grow 1 条字体要求全部可计算复核；页面无横向溢出、无内容裁切；工程与页面门禁通过。

## 开工公共资产 SHA-256

| 资产 | SHA-256 |
|---|---|
| `components/site-header.tsx` | `5aef1bd27e0a0a57ffdc65dbb80df4ab5cc30aa2c17b1283f3791a17da345bfa` |
| `components/site-footer.tsx` | `8732972918addddddbbcbec095ff0b2b7c34797ea74522bf019427956ceae2ae` |
| `components/logo.tsx` | `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11` |
| `components/booking-modal.tsx` | `3e143bc70f5cc270231d3961ff5eb1b92481be637c55bcbc36269cfedbb32206` |
| `components/booking-trigger.tsx` | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` |
| `app/layout.tsx` | `729e233f1bc80bdd025ef9baf2cb5b8cf21cd0b8a141b99803fee32fa62f71c8` |

## 批注映射

| ID | 路由 / 区域 | 用户覆盖 | 状态 |
|---|---|---|---|
| R5-01 | Mine GEO Hero 图标 | 去掉两枚图标白色背景观感 | PASS |
| R5-02 | Mine GEO Hero 背景 | 下半部分与上半部分同色，并与下一大模块区分 | PASS |
| R5-03 | Mine GEO Hero 对比卡 | 两模块之间 `20px` | PASS |
| R5-04 | Mine GEO 五张能力卡正文 | 保留统一合适上间距 | PASS |
| R5-05 | Mine GEO 五张能力卡编号 | 同组统一缩小 | PASS |
| R5-06 | Mine GEO 四张工作流卡正文 | 保留统一合适上间距 | PASS |
| R5-07 | Mine GEO 同类处理 | 图标、编号、正文间距均按同组整体处理 | PASS |
| R5-08 | Social Grow 场景表 | 四行同类正文统一放大，提升可读性 | PASS |

## 开工计算证据

- Mine GEO：Hero 高 `585.06px`；背景在 `445px` 由 `#f8fafc` 切白；对比卡 `gap:0`；两卡约 `169.28px`；图标显示 `40×40px`；能力编号 `49×49px / 18px`；能力正文上距约 `11px`；工作流正文上距约 `7.25px`。
- Social Grow：四行非标题正文均为 `12px / 18.6px`，四行高度约 `84.78 / 103.38 / 84.78 / 103.38px`，无内容溢出。
- 两页均满足 `scrollWidth === clientWidth`。

## 证据路径

- Mine GEO 修改前运行态沿用：`output/playwright/browser-comments-round4-2026-07-27/mine-geo-full-1576.png`。
- Social Grow 修改前：`output/playwright/browser-comments-round5-2026-07-27/02-social-scenarios-before-1576x1258.png`。
- 修改后：`03-mine-top-after-1576x1258.png`、`04-mine-workflow-after-1576x1258.png`、`05-social-scenarios-after-1576x1258.png`、`06-social-grow-full-after-1576.png`、`07-mine-geo-full-after-1576.png`。

## 1576×1258 收工实测

- Mine GEO：Hero `#f8fafc`、下一模块 `#f1f5f9`；两张对比卡 `gap:20px`、等高 `171.28px`；图标 `mix-blend-mode:multiply`；五张编号 `40×40px / 16px`；能力与工作流正文上距同组一致，九张卡内容溢出均为 0。
- Social Grow：四行同类正文均为 `14px / 21.7px`，四行均高 `115.75px`，所有单元格内容溢出为 0。
- 两页均唯一 H1、横向溢出 0、懒加载完成后无破损图片；浏览器 error 日志为 0。
- 两页预约入口均打开同一个 `BookingModal`；单一 dialog、滚动锁定、焦点进入弹窗、Escape 关闭均 PASS。
- 公共资产收工 SHA-256 与开工值逐项一致。
- 工程门禁：`pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check`、`pnpm mastergo:check mine-geo`、`pnpm mastergo:check social-grow` 全部 PASS。
- 工作树开工前已有大量未提交改动；本批未覆盖、暂存、提交或清理其他修改。
