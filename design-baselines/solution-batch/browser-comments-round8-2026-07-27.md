# 产品矩阵浏览器批注第八批（2026-07-27）

## 范围与真源

- 目标视口：桌面端 `1576×1258`；移动端未纳入当前官网范围。
- 内容真源：当前产品详情原型快照；本轮可见文案新增、删除、改写均为 `0`。
- 视觉真源：用户本轮四条浏览器批注、对应选区截图、当前官网实现与冻结公共设计系统。
- AI 获客 Harness：
  - 第一组五张 `.acq-reasons` 卡片正文与标题行之间统一为 `10px`。
  - 五张卡片序号由运行态 `48×36px` 收紧为 `36×36px`，字号由 `18px` 收紧为 `15px`。
  - “重构关键业务流”四卡删除 `176px` 最小高度，四边 `padding:20px`，由内容撑开并保持同一 Grid 行等高。
- 产品详情共享面包屑：桌面端 `main > .product-breadcrumb` 滚动时吸附在公共 Header 下方；公共 Header 实测高 `66px`，因此使用 `top:66px`；层级为面包屑 `30`、Header `40`。
- 公共 Header、Footer、Logo、BookingModal、BookingTrigger 与 `app/layout.tsx` 冻结。

## 开工公共资产 SHA-256

| 资产 | SHA-256 |
|---|---|
| `components/site-header.tsx` | `5aef1bd27e0a0a57ffdc65dbb80df4ab5cc30aa2c17b1283f3791a17da345bfa` |
| `components/site-footer.tsx` | `8732972918addddddbbcbec095ff0b2b7c34797ea74522bf019427956ceae2ae` |
| `components/logo.tsx` | `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11` |
| `components/booking-modal.tsx` | `3e143bc70f5cc270231d3961ff5eb1b92481be637c55bcbc36269cfedbb32206` |
| `components/booking-trigger.tsx` | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` |
| `app/layout.tsx` | `729e233f1bc80bdd025ef9baf2cb5b8cf21cd0b8a141b99803fee32fa62f71c8` |

## 修改前计算证据

| 页面 / 元素 | 开工运行态 | 用户覆盖 | 状态 |
|---|---|---|---|
| Harness 首组五卡正文上间距 | 第 1–5 卡依次约 `20.80/10.41/0/0/10.41px` | 全部统一为第 2 卡基准约 `10px` | BASELINE |
| Harness 五个序号 | 实际 `48×36px`，字号 `18px` | 整体收紧 | BASELINE |
| Harness 业务流四卡 | 四卡均高 `176px`，`min-height:176px`，padding `28px` | 高度收紧、内容撑开、同排等高 | BASELINE |
| DeepDoc 面包屑 | 初始 `top:66px`；滚动至 `398px` 后 `top:-332px`，position `static` | 吸附到 Header 下方 | BASELINE |

## 修改前视觉证据

- 用户本轮四张带选区与批注标记的浏览器截图。
- 本文件“修改前计算证据”中的同视口 DOM 实测。

## 修改后验收

| 页面 / 元素 | `1576×1258` 计算结果 | 状态 |
|---|---|---|
| Harness 首组五卡正文上间距 | 五卡全部精确为 `10px`，卡片均高 `191.98px`，内容溢出均为 `0` | PASS |
| Harness 五个序号 | 五个均为 `36×36px`、字号 `15px` | PASS |
| Harness 业务流四卡 | 四卡均高 `135.89px`、`min-height:0`、padding `20px`，内容溢出均为 `0` | PASS |
| 七个产品详情页共享面包屑 | 滚动后 `position:sticky; top:66px; z-index:30`，均与 Header `bottom:66px` 零缝贴合 | PASS |

- 七个产品详情页均满足 `scrollWidth === clientWidth`、唯一 H1、破图数 `0`。
- DeepDoc 吸附态面包屑预约 CTA 实点打开公共 `BookingModal`：单一 dialog、滚动锁定、焦点落在关闭按钮；Escape 关闭后恢复。
- 浏览器 error 级日志为 `0`；Sales in、Social Grow、Recov AI 各有一条与本轮无关的既有 Next Image 比例警告，本轮未扩大范围处理。
- 修改后截图：
  - `output/playwright/browser-comments-round8-2026-07-27/03-harness-reasons-after-1576x1258.jpg`
  - `output/playwright/browser-comments-round8-2026-07-27/04-harness-flow-after-1576x1258.jpg`
  - `output/playwright/browser-comments-round8-2026-07-27/05-deepdoc-breadcrumb-sticky-after-1576x1258.jpg`
- 工程门禁：`pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check` 全部通过。
- MasterGo 证据门禁：`pnpm mastergo:check ai-acquisition-harness`、`pnpm mastergo:check deepdoc` 全部通过。
- 交付公共资产 SHA-256 与开工记录逐项一致；共享 `components/product-breadcrumb.tsx` 也保持原哈希 `0f86c6e22a1a960cdf12deed1b61b13356acfa9c4a3c412510eb10d26241eb8f`。
- 完成等级：已视觉校准；本轮证据来自用户浏览器批注与本地同视口截图，不新增 MasterGo 1:1 声明。
