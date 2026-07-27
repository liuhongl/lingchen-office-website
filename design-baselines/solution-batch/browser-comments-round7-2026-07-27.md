# 产品矩阵浏览器批注第七批（2026-07-27）

## 范围与真源

- 目标视口：桌面端 `1576×1258`；移动端未纳入当前官网范围。
- 内容真源：当前产品详情原型快照；本轮可见文案新增、删除、改写均为 `0`。
- 视觉真源：用户本轮三条浏览器批注、对应选区截图、当前官网实现与冻结公共设计系统。
- Sales in：`.sales-capability-grid > article` 五卡统一 `padding:20px`，删除固定最小高度，由内容撑高并保持同一 Grid 行等高。
- AI 获客 Harness：仅收紧 `.acq-modes-table > .head` 表头高度，不修改两条数据行。
- DeepDoc：“这个界面的所有这种卡片”映射为页面内 11 组独立 `article` 卡片网格：
  - `.deepdoc-contrast-grid`
  - `.deepdoc-challenge-grid`
  - `.deepdoc-flow-grid`
  - `.deepdoc-evidence-grid`
  - `.deepdoc-engine-grid`
  - `.deepdoc-metrics`
  - `.deepdoc-value-grid`
  - `.deepdoc-business-grid`
  - `.deepdoc-case-grid`
  - `.deepdoc-safety-grid`
  - `.deepdoc-assurance-grid`
- DeepDoc 表格、标题、单独的 `.deepdoc-advice` 结果面板不属于同类网格卡，本轮不改。
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
| Sales in 五张核心能力卡 | 五卡均高 `273px`；`min-height:273px`；padding `32px`；第一卡正文下方空白 `82.63px` | padding `20px`、内容撑高、同排等高 | BASELINE |
| Harness 合作表头 | 实际高 `82px`；`min-height:52px`；padding `16px 20px`；`box-sizing:content-box` | 收紧高度 | BASELINE |
| DeepDoc 11 组卡片 | 顶部 padding 为 `20–32px`；Flow/Value/Business 仍有 `190/190/288px` 最小高度 | 顶部 padding `20px`、内容撑高、同一模块下同排等高 | BASELINE |

## 修改前截图

- `output/playwright/browser-comments-round7-2026-07-27/01-sales-capabilities-before-1576x1258.png`
- `output/playwright/browser-comments-round7-2026-07-27/02-harness-modes-before-1576x1258.png`
- `output/playwright/browser-comments-round7-2026-07-27/03-deepdoc-evidence-before-1576x1258.png`

## 修改后验收

| 页面 / 元素 | `1576×1258` 计算结果 | 状态 |
|---|---|---|
| Sales in 五张核心能力卡 | padding 均为 `20px`、`min-height:0`；第一行三卡均 `248.56px`，第二行两卡均 `222.47px`；内容溢出均为 `0` | PASS |
| Harness 合作表头 | 实际高 `52px`；`box-sizing:border-box`；padding `10px 20px`；三个表头单元格额外 padding 已归零；内容溢出 `0` | PASS |
| DeepDoc 11 组卡片 | 所有卡 `padding-top:20px`、`min-height:0`；每一 Grid 行内卡片高度完全一致；内容溢出均为 `0` | PASS |

- DeepDoc 代表性实测：审核体系四卡两行均 `193.25px`；审核引擎两卡均 `272.28px`；价值卡两行均 `166.28px`；商业实效两卡均 `265.34px`。
- 三页均满足 `document.documentElement.scrollWidth === document.documentElement.clientWidth`，各有且只有一个 `h1`，破图数均为 `0`。
- 三页全部可见预约类 CTA 均实点打开公共 `BookingModal`；弹窗打开后 `role=dialog` 数量为 `1`、页面滚动锁定生效、焦点落在关闭按钮；Escape 关闭后恢复。
- 浏览器错误日志为空。
- 修改后局部截图：
  - `output/playwright/browser-comments-round7-2026-07-27/04-sales-capabilities-after-1576x1258.png`
  - `output/playwright/browser-comments-round7-2026-07-27/05-harness-modes-after-1576x1258.png`
  - `output/playwright/browser-comments-round7-2026-07-27/06-deepdoc-evidence-after-1576x1258.png`
- 修改后全页截图：`sales-in-full-after-1576.png`、`ai-acquisition-harness-full-after-1576.png`、`deepdoc-full-after-1576.png`。
- 工程门禁：`pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check` 全部通过。
- MasterGo 证据门禁：`sales-in`、`ai-acquisition-harness`、`deepdoc` 全部通过。
- 交付公共资产 SHA-256 与开工记录逐项一致。
- 完成等级：已视觉校准；本轮证据来自用户浏览器批注与本地同视口截图，不新增 MasterGo 1:1 声明。
