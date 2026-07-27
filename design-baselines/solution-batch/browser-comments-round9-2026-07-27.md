# 产品矩阵浏览器批注第九批（2026-07-27）

## 范围与真源

- 目标视口：桌面端 `1576×1258`；移动端未纳入当前官网范围。
- 内容真源：当前产品详情原型与用户本轮两条浏览器批注。
- 视觉真源：用户本轮选区截图、当前官网实现与冻结公共设计系统。
- AI 获客 Harness：第一组五张原因卡的序号与标题行统一顶部位置；保持已确认的 `36×36px` 序号和 `10px` 正文间距。
- 产品详情共享面包屑：七个 `/products/*` 产品详情页统一使用完整模式；Mine GEO、AI 获客 Harness 取消 `compact` 特例。
- 公共 Header、Footer、Logo、BookingModal、BookingTrigger、`components/product-breadcrumb.tsx` 与 `app/layout.tsx` 冻结。

## 修改前计算证据

| 页面 / 元素 | 开工运行态 | 用户覆盖 | 状态 |
|---|---|---|---|
| Harness 五卡标题行 | 距卡顶依次约 `41.80/31.39/21/21/31.39px`；`align-content:center` | 五张标题行顶部统一对齐 | BASELINE |
| 七页面包屑 | 五页 `74px` 完整模式；Mine GEO 与 Harness 为 `46px` compact 模式 | 七页样式、高度与交互统一 | BASELINE |
| compact 面包屑内容 | 返回符号为 `‹`，无预约按钮 | 与完整模式统一为 `←`，展示公共预约入口 | BASELINE |

## 修改前视觉证据

- 用户本轮两张带选区与批注标记的浏览器截图。
- `output/playwright/browser-comments-round9-2026-07-27/01-harness-title-row-before-1576x1258.jpg`

## 修改后验收

| 页面 / 元素 | `1576×1258` 计算结果 | 状态 |
|---|---|---|
| Harness 五卡标题行 | 五张均距卡顶 `21px`，标题绝对 top 相同 | PASS |
| Harness 五卡正文 | 五张均距标题行 `10px`，均高 `191.98px`，内容溢出 `0` | PASS |
| 七页面包屑 | 全部类名 `product-breadcrumb`、高度 `74px`、返回符号 `←`、展示预约 CTA | PASS |
| 七页面包屑吸附 | 滚动后全部 `top:66px`，与 Header `bottom:66px` 零缝贴合 | PASS |

- 七页均满足 `scrollWidth === clientWidth`、唯一 H1、破图数 `0`。
- 原 compact 页面 Harness 的新显示预约 CTA 实点打开公共 `BookingModal`：单一 dialog、滚动锁定、焦点落在关闭按钮；Escape 关闭后恢复。
- 浏览器 error 级日志为 `0`。
- 修改后截图：
  - `output/playwright/browser-comments-round9-2026-07-27/02-harness-title-row-after-1576x1258.jpg`
  - `output/playwright/browser-comments-round9-2026-07-27/03-sales-in-breadcrumb-unified-1576x1258.jpg`
- 工程门禁：`pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check` 全部 PASS。
- 页面门禁：`pnpm mastergo:check ai-acquisition-harness`、`pnpm mastergo:check mine-geo` 全部 PASS。
- 冻结资产交付 SHA-256：`SiteHeader=5aef1bd27e0a0a57ffdc65dbb80df4ab5cc30aa2c17b1283f3791a17da345bfa`；`SiteFooter=8732972918addddddbbcbec095ff0b2b7c34797ea74522bf019427956ceae2ae`；`LogoComponent=badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11`；`LogoImage=4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85`；`BookingModal=3e143bc70f5cc270231d3961ff5eb1b92481be637c55bcbc36269cfedbb32206`；`BookingTrigger=cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7`；`Layout=729e233f1bc80bdd025ef9baf2cb5b8cf21cd0b8a141b99803fee32fa62f71c8`；`ProductBreadcrumb=0f86c6e22a1a960cdf12deed1b61b13356acfa9c4a3c412510eb10d26241eb8f`；均未被本批修改。
- 当前完成等级：已视觉校准；本批次没有相同视口 MasterGo 原画板，不新增 `1:1` 声明。
