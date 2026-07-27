# DeepDoc MasterGo 页面最终验收记录

## 2026-07-21 Hero 用户授权优化

- 内容：未修改任何现有可见文案，文案台账继续有效。
- 桌面：1440×900 实测标题保持两行，左右双栏边界清晰，页面横向溢出为 0。
- 移动：390×844 实测退化为单列，定位说明自然换行，页面横向溢出为 0。
- 证据：`01-hero-local-before-optimization.png`、`01-hero-local-optimized.png`、`01-hero-local-optimized-mobile-390.png`。
- 性质：这是用户明确授权的视觉优化，不再以原 MasterGo Hero 1:1 为目标；公共 Header/Footer 未改。

## 基本信息

- 页面：产品矩阵－DeepDoc
- MasterGo：`page_id=33:024763`；根画板 `AI快搭-9636635`，1440×8778px
- 用户提供 `layer_id=33:128399`；研发模式打开后通过页面列表选择 DeepDoc，并以根画板属性及用户导出图双重确认
- 本地地址：`http://127.0.0.1:3000/products/deepdoc/`
- 验收视口：1440px；全页 1440×8778px
- 日期：2026-07-20

## 分区验收

| 区块 | MasterGo 基线 | 本地截图 | 对比图 | 内容 | 视觉 |
|---|---|---|---|---|---|
| 01 Hero | `01-hero-mastergo-100.png` | `01-hero-local.png` | `01-hero-comparison.png` | PASS | PASS（冻结 Header 例外） |
| 02 审单对比 | `02-ai-vs-agent-mastergo-100.png` | `02-ai-vs-agent-local.png` | `02-ai-vs-agent-comparison.png` | PASS | PASS |
| 03 三大挑战 | `03-three-challenges-mastergo-100.png` | `03-three-challenges-local.png` | `03-three-challenges-comparison.png` | PASS | PASS |
| 04 关键流程 | `04-business-flow-mastergo-100.png` | `04-business-flow-local.png` | `04-business-flow-comparison.png` | PASS | PASS |
| 05 审核体系 | `05-evidence-chain-mastergo-100.png` | `05-evidence-chain-local.png` | `05-evidence-chain-comparison.png` | PASS | PASS |
| 06 智能配置 | `06-value-results-mastergo-100.png` | `06-value-results-local.png` | `06-value-results-comparison.png` | PASS | PASS |
| 07 产品价值 | `07-enhancement-mastergo-100.png` | `07-enhancement-local.png` | `07-enhancement-comparison.png` | PASS | PASS |
| 08 商业价值 | `08-scenarios-mastergo-100.png` | `08-scenarios-local.png` | `08-scenarios-comparison.png` | PASS | PASS |
| 09 场景案例 | `09-scenarios-cases-mastergo-100.png` | `09-scenarios-cases-local.png` | `09-scenarios-cases-comparison.png` | PASS | PASS |
| 10 合作交付 | `10-cooperation-safety-mastergo-100.png` | `10-cooperation-safety-local.png` | `10-cooperation-safety-comparison.png` | PASS | PASS |

## 全页回归

- [x] 所有主体文本节点均有 MasterGo 证据和代码位置。
- [x] 设计稿中的错配销售获客副标题原样保留，没有擅自纠正或补写。
- [x] 公共 Header、Footer、Logo、Booking 组件未被页面样式覆盖。
- [x] 所有特殊图标均从原始 100% PNG 裁切，没有近似图标。
- [x] 全页同视口截图、并排图和差异图已归档。
- [x] 桌面 `scrollWidth === clientWidth === 1440`；390px 工程检查无横向溢出。
- [x] 本地总高度 8778px，与根画板一致；主体分区累计边界偏差不超过 2px。
- [x] Header“立即体验”打开公共 BookingModal；初始焦点、Escape、滚动锁定、关闭后焦点恢复通过。
- [x] 公共组件交付哈希已复核。

## 工程验证

| 命令 | 结果 | 备注 |
|---|---|---|
| `pnpm lint` | PASS | ESLint 0 error |
| `pnpm exec tsc --noEmit` | PASS | TypeScript 0 error |
| `pnpm build` | PASS | 11/11 静态页面生成；DeepDoc 为 static |
| `git diff --check` | PASS | 无空白错误 |
| `pnpm mastergo:check deepdoc` | PASS | `MasterGo 证据门禁通过: deepdoc` |

## SEO / GEO

- [x] 独立 title、description、自指 canonical、唯一 h1 和标题层级通过。
- [x] sitemap、robots、首页站内入口、200 状态码和服务端 HTML 通过。
- [x] 无模型补写事实或隐藏结构化营销内容。
- [x] 本地实现与线上抓取、索引、生成式答案抽样状态已区分。

## 范围边界

- 当前 MasterGo 文件未提供独立移动端画板；390px 仅做工程可用性检查，不计入视觉 1:1 结论。
- 设计稿 Footer 与冻结公共 Footer 存在高度差异；按用户要求复用冻结 Footer，保留设计存在的底部空白以维持根画板总高。
- SEO/GEO 线上效果待部署后验证。

## 完成等级

- [x] 已实现
- [x] 已视觉校准（不含图标来源与高清度；该项为 2026-07-23 用户批准的上线例外）
- [ ] 1:1 验证通过（原结论因字重遗漏和单倍位图图标发虚而撤销）

## 2026-07-20 用户反馈复核

- 字重：根因是 Tailwind 预设重置标题默认字重，而 DeepDoc 多数标题样式只声明字号、未声明 `font-weight`；已对全页同类文本显式补齐并读取计算样式确认关键标题为 `700`。
- 图标：`evidence-pill-icon.png` 已替换为 MasterGo 当前图层 `33:060871` 资源面板生成的 50×50 PNG，CSS 16×16、有效 DPR 3.125，清晰度问题已修正；但该文件不是官方 SVG 下载结果，其余页面专属 PNG 仍来自 100% MasterGo 截图单倍裁切。该素材来源缺口由用户在 2026-07-23 批准作为本次上线例外。
- 落地建议：三条正文已拆为三个块级文本节点，逐条折行；文案字符未增删。
## 2026-07-22 原型内容同步复验状态

- [x] 内容完整迁移通过
- 内容：已按 `prototype-content-snapshot.md` 完成源码级同步，差异与纠错决定见 `prototype-vs-local-review.md`、`typo-review.md`。
- 视觉：沿用既有页面与 MasterGo 风格；2026-07-22 主任务浏览器复验唯一 H1、无横向溢出，所有懒加载图片滚动后加载成功。
- 素材例外：历史页面专属位图尚未全部替换为 MasterGo 原始 SVG 或至少 2× 正式位图；用户已批准本次上线不校验图标，因此“已视觉校准”仅覆盖非图标视觉，仍不勾选“1:1 验证通过”。
- 公共资产：本批次未主动修改 `SiteHeader`、`SiteFooter`、Logo、`ProductBreadcrumb`、`BookingModal`、`BookingTrigger`。
- 当前范围：仅桌面端；移动端未纳入当前官网实现与验收范围。
- SEO/GEO：可见正文与页面 metadata 已按原型真源校正；线上抓取、索引与生成式答案抽样不在本地结论内。

## 2026-07-22 产品矩阵七页一致性回归

- [x] 原型标题完整保留；桌面模块改为内容驱动高度并统一上下节奏。
- [x] 页面可见编号已移除前导 `0`；无 `01`–`09` 残留。
- [x] 1440px 全页截图复验，无模块重叠或横向溢出。
- [x] 本轮截图：`output/playwright/product-matrix-final/deepdoc.png`。
- [x] `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check` 通过。
- [x] 历史页面专属位图仍缺少 MasterGo 原始 SVG 或至少 2× 正式位图；该项已登记为 2026-07-23 用户批准的上线例外，本轮不宣称严格 1:1。
- [x] 共享 `ProductBreadcrumb` 用户覆盖已同步；公共 Header/Footer 未修改。

## 2026-07-23 用户覆盖回归

- [x] Hero 定位条中的“产品定位”已删除，产品方案说明保留。
- [x] 顶部预约按钮已改为描边弱化样式。
- [x] 四张智能审核能力卡标题已删除“核心能力 1/2/3/4”，并补统一蓝色短下划线。
- [x] 六张产品价值卡的中文序号已删除顿号。
- [x] 本轮已在 1440×900 桌面视口复核批注区域：`visual-results/deepdoc/2026-07-23-ability-cards.png`、`visual-results/deepdoc/2026-07-23-value-cards.png`；无横向溢出。
- [x] 历史图标素材来源缺口已登记为本次上线用户例外；本轮不校验图标，也不宣称 1:1 验证通过。

## 2026-07-23 上线例外与结论

- [x] 用户明确批准 DeepDoc 本次上线不校验图标。
- [x] 内容迁移、非图标视觉、桌面布局和交互继续使用现有验收证据。
- [x] 图标来源、DPR 与逐图视觉一致性不计入本次发布阻塞项。
- [x] 对外结论限定为“允许上线”；不得表述为“图标验收通过”或“1:1 验证通过”。

## 2026-07-24 用户批注发布复验

- [x] Hero 上下留白收敛、说明卡扩宽；区块标签字号统一增大。
- [x] 合作模式从两张独立卡片改为三列表格，逐行内容与台账一致。
- [x] 1616×1258 的 Hero、标签、合作模式与全页证据归档于 `output/playwright/product-feedback-2026-07-24-v3/`。
- [x] 唯一 H1、无横向溢出、无破损图片；工程四项及 `pnpm mastergo:check deepdoc` 全部通过。
- [x] 继续执行既有上线例外：本轮不校验 DeepDoc 历史图标来源/DPR，也不宣称图标验收或 1:1。
## 2026-07-24 Hero 与挑战卡回归

- Hero 高约 386px；定位标签与说明卡顶边均为 174px。
- 三张挑战卡无数字索引，等量上下 padding 24px，高约 238px。
- `1616×1258`：`scrollWidth=clientWidth=1601`；截图 `visual-results/feedback-2026-07-24-batch2/deepdoc-1616x1258.png`。
- 移动端未纳入本轮验收。
## 2026-07-24 区块节奏回归

- 1644 × 1258 桌面视口下，Hero 之外 9 个常规内容 section 最终计算值均为上下 `60px`。
- 固定高度影响已解除，横向溢出为 0。

## 2026-07-25 `/solutions/products/deepdoc/` 浏览器批注回归

- 验证视口：1576×1258；浏览器实际内容宽 1561px（15px 垂直滚动条）。
- Hero 两段正文计算宽度均为 1200px；正文 section 左右内边距均为 180.5px，与公共 1200px 内容轴一致。
- 挑战卡为图标＋标题同行，卡片 `height:auto; min-height:0; padding-block:20px`，首卡实测高 240.5px。
- 痛点卡、能力卡、结果卡、合作价值卡均取消固定/最小高度；实测上下内边距均为 20px。
- 两张合作模式卡实测均为 194px、`1px solid rgb(226, 232, 240)`、白底，视觉一致。
- Closing 实测 `height:auto; min-height:0; padding-block:60px`，内容撑高 208px。
- 唯一 H1；`scrollWidth=clientWidth=1561`；公共预约按钮打开同一 `BookingModal`，关闭后滚动锁恢复。
- 截图：`visual-results/feedback-2026-07-25-browser-comments/deepdoc-top-1576x1258.png`、`deepdoc-cooperation-1576x1258.png`、`deepdoc-full-1576x1258.png`。
- 本轮为用户浏览器批注覆盖；DeepDoc 历史图标上线例外继续有效，不宣称严格 1:1。

## 2026-07-26 BC-05 浅色区块说明文字回归

- `.dds-problems__intro`、`.dds-core-flow__intro`、`.dds-results__intro`、`.dds-cooperation__intro` 四个可见节点计算色均为 `rgb(17,24,39)`。
- 页面唯一 H1、横向溢出 0；DeepDoc 历史图标上线例外不变，本轮仍不宣称严格 1:1。

## 2026-07-27 浏览器批注第三批增量验收

- Hero 高度由 `598px` 收紧到 `527px`，上下 padding 为 `72/64px`。
- 三张挑战卡标题距卡左均 `73px`；六张结果价值卡标题中文序号已删除，装饰编号 `1–6` 保留。
- 同视口截图：`output/playwright/browser-comments-round3-2026-07-27/02-deepdoc-hero-1576x1258.png`、`03-deepdoc-results-1576x1258.png`。
- 页面横向溢出为 `0`；内容与视觉人工复核 PASS。
- 工程门禁与 `pnpm mastergo:check deepdoc` 均 PASS。
- 移动端未纳入当前官网范围；DeepDoc 历史图标上线例外继续有效。

## 2026-07-27 浏览器批注第四批

- R4-10–14 内容/视觉双验收 PASS：指标卡 `143px`，同类价值卡 `padding:20px`，建议区全文白色，安全卡编号 `44px/20px` 且标题间距 `12px`。
- 同视口全页证据：`output/playwright/browser-comments-round4-2026-07-27/deepdoc-full-1576.png`；横向溢出 0。
- 本轮统一门禁：lint、tsc、build、diff check、`mastergo:check deepdoc` PASS；移动端不在范围，不声明新的 MasterGo 1:1。

## 2026-07-27 浏览器批注第六批

- `.deepdoc-case-grid > article` 两卡实测均 `166.28px`，四边内边距 `20px`，`min-height:0`，内容溢出 `0`，同排等高。
- 同视口局部证据：`output/playwright/browser-comments-round6-2026-07-27/11-deepdoc-cases-after-1576x1258.png`；全页证据：`deepdoc-full-after-1576.png`。
- 横向溢出、破图与浏览器错误均为 `0`；Header 与页面预约入口均打开公共 BookingModal。
- lint、tsc、build、diff check 与 `mastergo:check deepdoc` PASS；移动端不在范围，不新增 1:1 声明。

## 2026-07-27 浏览器批注第七批

- 页面 11 组独立 `article` 卡片网格全部为 `padding-top:20px`、`min-height:0`；各 Grid 行内卡片高度一致，内容溢出均为 `0`。
- 代表性实测：审核体系四卡两行均 `193.25px`；审核引擎两卡均 `272.28px`；价值卡两行均 `166.28px`；商业实效两卡均 `265.34px`。
- 同视口局部证据：`output/playwright/browser-comments-round7-2026-07-27/06-deepdoc-evidence-after-1576x1258.png`；全页证据：`deepdoc-full-after-1576.png`。
- 横向溢出、破图与浏览器错误均为 `0`；Header 与页面预约入口均打开公共 BookingModal。
- lint、tsc、build、diff check 与 `mastergo:check deepdoc` PASS；移动端不在范围；本轮不新增 MasterGo 1:1 声明。

## 2026-07-27 浏览器批注第八批

- 面包屑滚动后实测 `position:sticky; top:66px; z-index:30`，与公共 Header 的 `bottom:66px` 零缝贴合；白色背景完整遮挡下层内容。
- 同一共享规则已回归 Sales in、Social Grow、Mine GEO、AI 获客 Harness、Recov AI、DeepDoc、DeepLaw 七个产品详情页：全部吸附位置正确、横向溢出 `0`、破图 `0`、唯一 H1。
- 吸附态“立即预约体验该产品”实点打开公共 BookingModal：单一 dialog、滚动锁定、焦点落在关闭按钮；Escape 关闭后恢复。
- 同视口证据：`output/playwright/browser-comments-round8-2026-07-27/05-deepdoc-breadcrumb-sticky-after-1576x1258.jpg`。
- lint、tsc、build、diff check 与 `mastergo:check deepdoc` 全部 PASS；移动端不在范围，本轮不新增 MasterGo 1:1 声明。

## 2026-07-27 浏览器批注第十批

- Footer 后的 `.deepdoc-tail` 页面专属占位已删除，文档总高从 `7757px` 降至 `7237px`，准确减少 `520px`。
- 页面主体与公共 Footer 的 top、bottom 和高度均未改变；Footer bottom 现在与文档 bottom 一致。
- `1576×1258` 下横向溢出 `0`、破图 `0`、唯一 H1、浏览器 error `0`。
- 同视口证据：`output/playwright/browser-comments-round10-2026-07-27/01-deepdoc-tail-before-1576x1258.png`、`02-deepdoc-footer-after-1576x1258.png`。
- 发布前复验 Header 与面包屑两个预约入口：均打开唯一公共 BookingModal，滚动锁定与焦点进入 PASS；Escape 关闭后焦点分别恢复到原触发按钮。
- `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check` 与 `pnpm mastergo:check deepdoc` 全部 PASS。
- 当前完成等级：已视觉校准；不新增 MasterGo `1:1` 声明。移动端未纳入当前官网范围。
