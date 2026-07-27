# DeepDoc MasterGo 页面最终验收记录

## 2026-07-22 原型内容同步验收（当前结论）

- 内容：`prototype-content-snapshot.md` → `prototype-sync-ledger.md` → 页面实际字符串，逐区 PASS。
- 视觉：沿用现有 DeepDoc / MasterGo 桌面风格，路由内排版回归通过；不把内容变更后的总高度称为旧画板 1:1。
- 交互：原型唯一 Hero 预约 CTA 继续使用公共 `BookingTrigger`；原型无底部 CTA，已删除。
- 范围：仅桌面端；移动端未纳入整个官网当前交付范围。
- 当前截图：`prototype-sync-local-1440.png`；当前工程结果见本文件末尾追加记录。
- 下方为迁移前历史 MasterGo 验收。

## 基本信息

- 页面：解决方案-产品专项解决方案-DeepDoc
- MasterGo：`page_id=33:16598`，`layer_id=33:249089`，根画板 1440×7779
- 本地地址：`/solutions/products/deepdoc/`
- 验收视口：1440×1000；分区截图宽度 1440
- 验收日期：2026-07-22

## 分区验收

| 区块 | 内容台账 | MasterGo 基线 | 本地截图 | 对比 / diff | 内容结论 | 视觉结论 |
|---|---|---|---|---|---|---|
| 01 Hero | DDS-T0101 起 | `01-hero-mastergo-100.png` | `01-hero-local-1440.png` | `01-hero-comparison.png` / `01-hero-diff.png` | PASS | PASS |
| 02 一图读懂 | 内容台账 02 | `02-one-picture-mastergo-100.png` | `02-one-picture-local-1440.png` | comparison / diff | PASS | PASS |
| 03 审单困局 | 内容台账 03 | `03-problems-mastergo-100.png` | `03-problems-local-1440.png` | comparison / diff | PASS | PASS |
| 04 核心处理流 | 内容台账 04 | `04-core-flow-mastergo-100.png` | `04-core-flow-local-1440.png` | comparison / diff | PASS | PASS |
| 05 四维审核 | 内容台账 05 | `05-four-dimensions-mastergo-100.png` | `05-four-dimensions-local-1440.png` | comparison / diff | PASS | PASS |
| 06 核心能力 | 内容台账 06 | `06-capabilities-mastergo-100.png` | `06-capabilities-local-1440.png` | comparison / diff | PASS | PASS |
| 07 交付价值 | 内容台账 07 | `07-results-mastergo-100.png` | `07-results-local-1440.png` | comparison / diff | PASS | PASS |
| 08 应用场景 | DDS-T0801–0815 | `08-applications-mastergo-100.png` | `08-applications-local-1440.png` | comparison / diff | PASS | PASS |
| 09 合作模式 | DDS-T0901–0912 | `09-cooperation-mastergo-100.png` | `09-cooperation-local-1440.png` | `09-cooperation-comparison.png` / `09-cooperation-diff.png` | PASS | PASS |
| 10 Closing CTA | DDS-T1001–1003 | `10-closing-mastergo-100.png` | `10-closing-local-1440.png` | `10-closing-comparison.png` / `10-closing-diff.png` | PASS | PASS |

## 全页回归

- [x] 102 条文案台账与运行态可见文本逐项核对，无概括、补写、漏句、标点或大小写偏差。
- [x] 公共 Header/Footer 未被页面级 CSS 覆盖，DeepDoc Tab 由服务端可抓取链接和路由高亮实现。
- [x] 全页截图 `full-local-1440.png` 为 1440×7701；MasterGo 为 1440×7779。78px 差异全部来自冻结 Header/Tab/Footer 公共画板高度差，十个主体区块高度合计与设计一致。
- [x] 1440px 实测 `scrollWidth === clientWidth === 1440`，唯一 h1，十个 section 高度分别为 598/590/828/781/584/671/856/947/1007/360。
- [x] 所有图片和图标来源已登记；盾牌使用当前 100% 无干扰基线逐像素原稿，无图标库或 CSS 近似。
- [x] Hero 与 Closing 的预约按钮均通过 `BookingTrigger` 打开同一个 `BookingModal`；初始焦点、Escape、滚动锁定和焦点恢复通过。
- [x] 页面没有非预约 CTA 例外，也没有用户要求隐藏的白皮书或电话文案。

## 公共资产冻结复核

- 本页未修改公共组件。当前 SHA-256：Header `00a8a2bb1d30db5e77a6abf5825e95497d907d7c9356506f9feac9c5ec35ef76`；Footer `7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb`；Logo `4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85`；BookingModal `c606ca6d3040962ccf1a6b15db4c0003423c6466c395cf92864021a4804a0efe`；BookingTrigger `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7`。
- Header 与 BookingModal 相对开工登记哈希的变化来自已登记的全站 Contact 页面任务，不是 DeepDoc 页面改动；Footer、Logo、BookingTrigger 与开工哈希一致。

## 工程验证

| 命令 | 结果 | 备注 |
|---|---|---|
| `pnpm lint` | PASS | 2026-07-21 八页统一终检，0 退出码 |
| `pnpm exec tsc --noEmit` | PASS | 2026-07-21 八页统一终检，0 退出码 |
| `pnpm build` | PASS | Next.js 生产构建成功，71 个静态页面生成 |
| `git diff --check` | PASS | 2026-07-21 八页统一终检，0 退出码 |
| `pnpm mastergo:check deepdoc-solution` | PASS | 2026-07-22 最后运行，证据门禁通过 |

## SEO / GEO 验收

- [x] 独立 title、description、自指 canonical、唯一 h1 和标题层级已核对；本地 SSR GET 为 `200 OK`。
- [x] sitemap、robots、产品 Tab 站内入口和不添加无证据 Product Schema 的结论已核对。
- [x] 页面实体、指标、案例和交付内容全部来自 MasterGo 可见证据。
- [x] 本地 SEO/GEO 已实现；线上抓取、索引和生成式答案抽样待发布后验证。

## 未验证项与阻塞项

- 移动端没有 MasterGo 基线，未声明移动端 1:1。
- 线上抓取、索引和生成式答案抽样待发布后执行。

## 完成等级

- [x] 已实现
- [x] 已视觉校准
- [x] 1:1 验证通过

## 2026-07-22 原型同步最终工程记录

| 验证项 | 结果 |
|---|---|
| 原型正文覆盖审计 | PASS：145 条原型文本，0 缺失（按 `typo-review.md` 显式替换后） |
| 1440px 桌面截图 | PASS：`prototype-sync-local-1440.png`，1440×7713 |
| H1 / 横向溢出 / Footer 衔接 | PASS：H1=1；1440=1440；mainBottom=footerTop=7412 |
| 预约交互 | PASS：打开公共弹窗、滚动锁定、Escape 关闭、焦点恢复 |
| `pnpm lint` | PASS |
| `pnpm exec tsc --noEmit` | PASS |
| `pnpm build` | PASS：71 个静态页面生成 |
| `git diff --check` | PASS |
| `pnpm mastergo:check deepdoc-solution` | PASS |

公共资产交付哈希与开工记录一致；移动端、线上抓取、索引和生成式答案抽样未纳入本地结论。

## 2026-07-22 用户审查回归

- 1671×1258 全页截图：`user-review-full-local-1671.png`。
- 横向溢出：0；预约类 CTA：PASS；控制台 error：0。
- lint、TypeScript、build、diff check 与 `mastergo:check deepdoc-solution`：PASS。

## 2026-07-22 末轮批注复核

- 新复核截图：`user-review-followup-local-1265.png`。
- Hero 左边界与公共 Logo 左边界对齐；正文可用宽度 1000px，页面横向溢出为 0。
- “核心数字化处理流”和“四维审核体系”卡片标题均去除内部重复序号。
- 指标区 `99%+` 与 `1个月` 均在同一基线上显示；模式标签保持统一胶囊样式。
- 收尾正文 `用灵宸Deepdoc构建跨境单证专属审单大脑，让单证处理更快、更准、更可追溯，降低企业损失。` 单行显示。
- 工程门禁结果以下方本轮命令为准。

### 本轮工程门禁

- `pnpm lint`：PASS
- `pnpm exec tsc --noEmit`：PASS
- `pnpm build`：PASS（71 个静态页面生成完成）
- `git diff --check`：PASS
- `pnpm mastergo:check deepdoc-solution`：PASS

## 2026-07-27 浏览器批注第六批

- R6-05 内容/视觉双验收 PASS：三张挑战卡图标列均为 48px，图标到标题实际净距均 16px，垂直居中且无裁切。
- 1576×1258 分区与全页证据：`output/playwright/browser-comments-round6-2026-07-27/04-deepdoc-challenges-after.png`、`full-deepdoc-solution.png`；横向溢出 0。
- “立即体验”和“预约产品演示”均实点打开公共 BookingModal，Escape 与滚动锁定恢复 PASS。
- lint、tsc、build、diff check 与 `mastergo:check deepdoc-solution` PASS；公共资产哈希未变；移动端不在范围，不声明新的 1:1。
