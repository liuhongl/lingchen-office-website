# 2026-07-27 浏览器批注第三批

## 范围

- 内容真源：用户本轮 14 条浏览器批注；只删除 DeepDoc 六张结果价值卡标题中的中文序号，其余可见字符串不变。
- 视觉真源：用户提供的 `1576 × 1258` 浏览器选区截图与当前页面运行态。
- 允许修改：DeepLaw、DeepDoc、AI 获客 Harness、Mine GEO、Sales in、不良资产六页的页面级 JSX/CSS 与证据台账。
- 冻结资产：SiteHeader、SiteFooter、Logo、BookingModal、BookingTrigger、`app/layout.tsx`。
- 移动端未纳入当前官网范围；本批不新增或替换图标，不修改 SEO/GEO 元数据。

## 公共资产开工 SHA-256

| 文件 | SHA-256 |
|---|---|
| `components/site-header.tsx` | `5aef1bd27e0a0a57ffdc65dbb80df4ab5cc30aa2c17b1283f3791a17da345bfa` |
| `components/site-footer.tsx` | `8732972918addddddbbcbec095ff0b2b7c34797ea74522bf019427956ceae2ae` |
| `components/logo.tsx` | `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11` |
| `components/booking-modal.tsx` | `3e143bc70f5cc270231d3961ff5eb1b92481be637c55bcbc36269cfedbb32206` |
| `components/booking-trigger.tsx` | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` |
| `app/layout.tsx` | `729e233f1bc80bdd025ef9baf2cb5b8cf21cd0b8a141b99803fee32fa62f71c8` |

## 逐项门禁

| ID | 页面 / 元素 | 用户覆盖 | 开工运行态 | 状态 |
|---|---|---|---|---|
| R3-01 | DeepLaw 主 Agent 五卡 | 五卡等高 | `137/137/137/137/137px`，内容溢出 `0` | PASS |
| R3-02 | DeepLaw Agents 导语 | 整体水平居中 | `800px` 容器中心与 section 中心差 `0px` | PASS |
| R3-03 | DeepDoc Hero | 缩小上下留白 / 总高 | 高 `527px`；上下 padding `72/64px` | PASS |
| R3-04 | DeepDoc 挑战卡标题 | 保留合适左侧间距 | 三卡标题距卡左均 `73px`，内容溢出 `0` | PASS |
| R3-05 | DeepDoc 六张结果价值卡 | 删除标题中文序号 | 六个标题前缀已删除；装饰编号 `1–6` 保留 | PASS |
| R3-06 | Harness 应用场景表 | 删除列间竖线 | 三列 `border-right:0px` | PASS |
| R3-07 | Harness 合作模式两卡 | 两卡等高 | `224.59/224.59px`，内容溢出 `0` | PASS |
| R3-08 | Mine GEO 优势卡标题 / 图标 | 标题缩小且单行，图标同步缩小 | 标题 `18/26px` 单行；图标 `44px` | PASS |
| R3-09 | Mine GEO 场景表 | 降低行高 | 三行 `121/97/97px`；单元格上下 padding `12px` | PASS |
| R3-10 | Mine GEO 合作模式三卡 | 三卡等高 | `245/245/245px`，内容溢出 `0` | PASS |
| R3-11 | Sales in 四张指标卡 | 四卡等高 | `170/170/170/170px`，内容溢出 `0` | PASS |
| R3-12 | 不良资产矩阵导语 | 字色改黑 | `rgb(17,24,39)` | PASS |
| R3-13 | 不良资产能力基座四卡正文 | 字色改黑 | 四卡均 `rgb(17,24,39)` | PASS |
| R3-14 | 不良资产四张成果卡 | 前三卡与第 4 卡等高 | `174/174/174/174px`，内容溢出 `0` | PASS |

## 验收要求

- 每条必须在 `1576 × 1258` 重新读取计算样式、内容溢出和横向溢出。
- 等高卡片必须以同一 Grid 行的最大内容高度自然拉伸，不得裁切正文。
- 文案审计必须确认除 R3-05 外没有可见字符串变化；R3-05 只删除标题前缀，不删除装饰编号块。
- 同视口局部截图统一归档到 `output/playwright/browser-comments-round3-2026-07-27/`。
- 最终运行 `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check` 以及六页 `mastergo:check`。

## 同视口视觉证据

- 视口：`1576 × 1258`；页面实际内容宽 `1561px`（15px 垂直滚动条）。
- 11 张局部截图已逐张人工复核：`output/playwright/browser-comments-round3-2026-07-27/01-*.png` 至 `11-*.png`。
- 六个页面 `document.documentElement.scrollWidth === document.documentElement.clientWidth`，横向溢出均为 `0`。
- 内容审计：除 R3-05 明确删除六个中文序号前缀外，其余批注只改计算样式；DeepDoc 装饰编号块仍为 `1–6`。
- 移动端未纳入当前官网范围；本批不新增旧 MasterGo 严格 1:1 结论。

## 工程与公共资产复核

- `pnpm lint`：PASS。
- `pnpm exec tsc --noEmit`：PASS。
- `pnpm build`：PASS，74 个静态页面生成完成。
- `git diff --check`：PASS。
- `pnpm mastergo:check deeplaw deepdoc ai-acquisition-harness mine-geo sales-in non-performing-assets`：六页逐项 PASS。
- Header、Footer、Logo、BookingModal、BookingTrigger 与 `app/layout.tsx` 的收工 SHA-256 均与开工基线一致。
