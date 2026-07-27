# 产品矩阵浏览器批注第六批（2026-07-27）

## 范围与解释

- 目标视口：桌面端 `1576×1258`；移动端未纳入当前官网范围。
- DeepLaw：五张核心能力卡的标题移动到“核心能力 N”标签后同排；Hero 收紧纵向高度。
- “这种卡片”按用户点中的 DeepDoc 双列客户案例卡，映射为各产品详情页落地场景区的同类独立双列案例/场景卡。
- 适用页面与 selector：
  - Sales in：`.sales-examples > article`
  - Social Grow：`.social-grow-scenario-cards > article`
  - AI 获客 Harness：`.acq-case-cards > article`
  - DeepDoc：`.deepdoc-case-grid > article`
  - DeepLaw：`.deeplaw-cases > article`
  - Recov AI：`.recov-case-grid > article`
- Mine GEO 的对应区域 `.mine-geo-rollout` 是一个整体路径面板，内部两列没有独立卡片边框或内边距，记为结构不适用；本轮不强行套用。
- 可见文案、图标资源、公共 Header/Footer/Logo/BookingModal/BookingTrigger 均不修改。

## 开工公共资产 SHA-256

| 资产 | SHA-256 |
|---|---|
| `components/site-header.tsx` | `5aef1bd27e0a0a57ffdc65dbb80df4ab5cc30aa2c17b1283f3791a17da345bfa` |
| `components/site-footer.tsx` | `8732972918addddddbbcbec095ff0b2b7c34797ea74522bf019427956ceae2ae` |
| `components/logo.tsx` | `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11` |
| `components/booking-modal.tsx` | `3e143bc70f5cc270231d3961ff5eb1b92481be637c55bcbc36269cfedbb32206` |
| `components/booking-trigger.tsx` | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` |
| `app/layout.tsx` | `729e233f1bc80bdd025ef9baf2cb5b8cf21cd0b8a141b99803fee32fa62f71c8` |

## 开工计算证据

| 页面 / 元素 | 开工运行态 | 用户覆盖 | 状态 |
|---|---|---|---|
| DeepLaw Hero | 高 `607.45px`；padding `72px 0 88px`；标题→正文 `34px`；正文→对比卡 `48px` | 缩短纵向高度，内容保持完整 | BASELINE |
| DeepLaw 五张能力卡 | 五卡均 `220.88px`；标签与标题上下排列，间距 `12px` | 标签和标题同排；五张一致 | BASELINE |
| Sales in 案例卡 | `171.28px`；padding `28px` | 四边 `20px`，内容撑高，相邻等高 | BASELINE |
| Social Grow 场景卡 | `184px`；padding `31px 32px` | 四边 `20px`，内容撑高，相邻等高 | BASELINE |
| Harness 案例卡 | `168.06px`；padding `32px` | 四边 `20px`，内容撑高，相邻等高 | BASELINE |
| DeepDoc 案例卡 | `190px`；padding `31px 32px` | 四边 `20px`，内容撑高，相邻等高 | BASELINE |
| DeepLaw 场景卡 | `201.39px`；padding `30px` | 四边 `20px`，内容撑高，相邻等高 | BASELINE |
| Recov AI 场景卡 | `258.5px`；padding `27px` | 四边 `20px`，内容撑高，相邻等高 | BASELINE |

## 修改前截图

- `output/playwright/browser-comments-round6-2026-07-27/01-deepdoc-cases-before-1576x1258.png`
- `output/playwright/browser-comments-round6-2026-07-27/02-deeplaw-hero-before-1576x1258.png`
- `output/playwright/browser-comments-round6-2026-07-27/03-deeplaw-capabilities-before-1576x1258.png`

## 修改后同视口验收

| 页面 / 元素 | `1576×1258` 计算结果 | 状态 |
|---|---|---|
| DeepLaw Hero | 高 `525.45px`；padding `48px 0 56px`；Hero copy 上距 `24px`；对比卡上距 `32px` | PASS |
| DeepLaw 五张能力卡 | 五卡均 `182.38px`；标签与标题位于同一 Grid 行；正文进入第二行；内容溢出 `0` | PASS |
| Sales in 案例卡 | 两卡均 `155.28px`；padding `20px`；`min-height:0`；内容溢出 `0` | PASS |
| Social Grow 场景卡 | 两卡均 `166.17px`；padding `20px`；`min-height:0`；内容溢出 `0` | PASS |
| Harness 案例卡 | 两卡均 `144.06px`；padding `20px`；`min-height:0`；内容溢出 `0` | PASS |
| DeepDoc 案例卡 | 两卡均 `166.28px`；padding `20px`；`min-height:0`；内容溢出 `0` | PASS |
| DeepLaw 场景卡 | 两卡均 `154.39px`；padding `20px`；`min-height:0`；内容溢出 `0` | PASS |
| Recov AI 场景卡 | 两卡均 `244.5px`；padding `20px`；`min-height:0`；内容溢出 `0` | PASS |

- 六个适用页面 `document.documentElement.scrollWidth === document.documentElement.clientWidth`，各有且只有一个 `h1`，破图数均为 `0`。
- 所有可见预约类 CTA 均实点打开公共 `BookingModal`；弹窗打开后 `role=dialog` 数量为 `1`、`body` 滚动锁定生效、焦点落在关闭按钮；Escape 关闭后恢复。
- 浏览器错误日志为空。
- 修改后局部截图：`04-deeplaw-hero-after-1576x1258.png`、`05-deeplaw-capabilities-after-1576x1258.png`、`08-sales-cases-after-1576x1258.png` 至 `13-recov-cases-after-1576x1258.png`。
- 修改后全页截图：`sales-in-full-after-1576.png`、`social-grow-full-after-1576.png`、`ai-acquisition-harness-full-after-1576.png`、`deepdoc-full-after-1576.png`、`deeplaw-full-after-1576.png`、`recov-ai-full-after-1576.png`。
- 工程门禁：`pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check` 全部通过。
- MasterGo 证据门禁：`sales-in`、`social-grow`、`ai-acquisition-harness`、`deepdoc`、`deeplaw`、`recov-ai` 全部通过。
- 交付公共资产 SHA-256 与开工记录逐项一致。
- 完成等级：已视觉校准；本轮证据来自用户浏览器批注与本地同视口截图，不新增 MasterGo 1:1 声明。
