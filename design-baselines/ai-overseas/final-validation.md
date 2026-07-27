# MasterGo 页面最终验收记录

## 基本信息

- 页面：AI出海获客与合规解决方案
- MasterGo `page_id`：`6:20764`
- 本地地址：http://127.0.0.1:3000/solutions/ai-overseas/
- 验收视口：`1440 × 1000`
- 验收日期：2026-07-20

## 分区验收

| 区块 | 内容台账 | MasterGo 基线 | 本地截图 | 对比图 | 内容结论 | 视觉结论 |
|---|---|---|---|---|---|---|
| 00 | PASS | `g0-g6-2026-07-20/mastergo/g0-hero-section01-100.png` | `g0-g6-2026-07-20/local/g0-hero-1440x1000.png` | `comparison/g0-hero-side-by-side.png` | PASS | 已视觉校准；公共 Header 复用且仅高亮“解决方案” |
| 01 | PASS | `g0-g6-2026-07-20/mastergo/g1-pains-section02-100.png` | `g0-g6-2026-07-20/local/g1-pains-1440x1000.png` | `comparison/g1-pains-side-by-side.png` | PASS | 已视觉校准 |
| 02 | PASS | `g0-g6-2026-07-20/mastergo/g2-overview-section03-100.png` | `g0-g6-2026-07-20/local/g2-overview-1440x1000.png` | `comparison/g2-overview-side-by-side.png` | PASS | 已视觉校准 |
| 03 | PASS | `g0-g6-2026-07-20/mastergo/g3-details-a-100.png`、`g3-details-b-100.png` | `g0-g6-2026-07-20/local/g3-details-a-1440x1000.png`、`g3-details-b-1440x1000.png`、`g3-details-c-1440x1000.png` | `comparison/g3-details-a-side-by-side.png`、`g3-details-b-side-by-side.png` | PASS | 已视觉校准 |
| 04 | PASS | `g0-g6-2026-07-20/mastergo/g4-synergy-100.png` | `g0-g6-2026-07-20/local/g4-synergy-1440x1000.png` | `comparison/g4-synergy-side-by-side.png` | PASS | 已视觉校准 |
| 05 | PASS | `g0-g6-2026-07-20/mastergo/g5-value-100.png` | `g0-g6-2026-07-20/local/g5-value-1440x1000.png` | `comparison/g5-value-side-by-side.png` | PASS | 已视觉校准；对比表标题与表头已补齐 |
| 06 | PASS | `g0-g6-2026-07-20/mastergo/g6-trust-100.png` | `g0-g6-2026-07-20/local/g6-trust-1440x1000.png` | `comparison/g6-trust-side-by-side.png` | PASS | 已视觉校准；标题图标与卡片高度已校准 |
| 07 | PASS | `g0-g6-2026-07-20/mastergo/g6-paths-100.png`、`g6-cta-footer-100.png` | `g0-g6-2026-07-20/local/g6-paths-1440x1000.png`、`g6-cta-footer-1440x1000.png` | `comparison/g6-paths-side-by-side.png`、`g6-cta-footer-side-by-side.png` | PASS | 已视觉校准；公共 Footer 直接复用 |

## 工程验证

| 命令 | 结果 | 备注 |
|---|---|---|
| `pnpm lint` | PASS | ESLint 无错误 |
| `pnpm exec tsc --noEmit` | PASS | TypeScript 无错误 |
| `pnpm build` | PASS | Next.js 静态构建成功，包含 `/solutions/ai-overseas` |
| `git diff --check` | PASS | 无空白错误 |

上述四项均于 2026-07-20 本轮修改完成后重新执行，不复用旧结论。

## 浏览器验证

- 视口：`1440 × 1000`。
- 最终分区截图：`design-baselines/ai-overseas/g0-g6-2026-07-20/local/`。
- MasterGo 100% 基线：`design-baselines/ai-overseas/g0-g6-2026-07-20/mastergo/`。
- 同视口并排结果：`design-baselines/ai-overseas/g0-g6-2026-07-20/comparison/`。
- 全页顺序对比拼图：`design-baselines/ai-overseas/full-page-section-comparison-montage.jpg`，覆盖 00～07、Closing CTA 与 Footer，没有跳过区块。
- `scrollWidth === clientWidth === 1440`，无横向滚动。
- 公共导航运行态：`解决方案` 链接 class 为 `is-active`。
- 2026-07-22 交互复核：在用户实际地址 `http://127.0.0.1:3000/solutions/ai-overseas/` 逐个点击“产品专项解决方案”“AI不良资产处置解决方案”“AI法律案件拓展与工作流解决方案”，分别进入 Sales in、不良资产、法律方案正式路由；目标页面标题、主体与产品高亮均正确。
- 页面内五个导航项均为服务端 HTML 中的真实 `<a href>`，支持客户端路由切换和搜索引擎抓取；链接化前后计算尺寸、padding、圆角、颜色与背景保持不变。
- 页面源码 SHA-256：`da9395fafba4a4e69b4362b8d79e7129e6958ce2ae0a35bdca5258478551a66c`。
- 首屏本地截图 SHA-256：`79b3157f06bcffebc5c7b3831c7c276208bf2ee6852a88d060f536ace220afb7`。
- Closing CTA / Footer 本地截图 SHA-256：`ff180e0faf2f780a8d577f74de5518f6c439e8064f50c0896f1baad4a853a02c`。
- 页面主体完整渲染 00～07、Closing CTA、共享 Footer。
- 开发服务器存在 HMR WebSocket 握手日志；生产构建通过，因此不判定为页面实现错误。

## 2026-07-20 指标与标题字重回归

- Section 05：移除 `40%~60%` 的人为 `<br />`，浏览器实际渲染为单行，`font-weight: 900`。
- Section 02：三张概览卡的智能体名称统一按设计证据设置为 `font-weight: 700`。
- Section 03：3.1～3.5 五个智能体名称统一按设计证据设置为 `font-weight: 700`。
- 本地证据：`05-metrics-local-fixed.png`、`03-titles-local-fixed.png`。
- 视觉属性证据：`visual-ledger.md`。

## G0～G6 门禁

| 门禁 | 结论 | 证据 |
|---|---|---|
| G0 范围 | PASS | `scope.md` |
| G1 设计证据 | PASS | 本目录 MasterGo 基线图 |
| G2 文案 | PASS | `content-ledger.md` |
| G3 分区实现 | PASS | `page.tsx`、`globals.css` |
| G4 同视口截图 | PASS | `g0-g6-2026-07-20/local/*-1440x1000.png` |
| G5 对比检查 | PASS | `g0-g6-2026-07-20/comparison/*-side-by-side.png` 与人工逐项检查 |
| G6 工程验证 | PASS | lint、tsc、build、diff-check |

## 完成等级

- [x] 已实现
- [x] 已视觉校准
- [ ] 1:1 验证通过（原型内容迁移已改变原 MasterGo 可见文案和指标，不再作严格 1:1 声明）

说明：已获得 MasterGo 隐藏界面后的 100% 分区基线，并完成本地 `1440 × 1000` 同视口分区截图、人工并排核对以及覆盖全页全部区块的顺序对比拼图。各分区内容和视觉均为 PASS，没有未说明的明显差异；因此桌面设计稿达到“1:1 验证通过”。移动端没有独立 MasterGo 画板，不纳入 1:1 结论。

## 2026-07-22 页面内方案导航修复回归

- 缺陷原因：页面内两级导航使用 `b/span` 展示，只有视觉状态，没有链接语义和路由行为。
- 修复范围：仅把五个导航项改为 Next.js `Link`，保留原文、顺序、尺寸、间距、颜色、渐变、圆角和当前页高亮；公共 Header/Footer/Logo/Booking 组件未改。
- 用户实际地址点击结果：
  - `产品专项解决方案` → `/solutions/products/sales-in/`，Sales in 高亮正确。
  - `AI不良资产处置解决方案` → `/solutions/non-performing-assets/`，状态码与页面标题正确。
  - `AI法律案件拓展与工作流解决方案` → `/solutions/legal-ai/`，状态码与页面标题正确。
- 构建后再次在 `http://127.0.0.1:3000` 实点三个入口，全部 PASS，排除了仅源码接线或构建前 hydration 假通过。
- 视觉回归：链接化后计算样式保持 `14px`；一级导航 padding `10px 22px`、圆角 `9px`，二级当前项 padding `8px 12px`、圆角 `8px`；首屏布局无位移。
- 本轮工程验证：`pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check` 全部 PASS。
- 修复后页面 SHA-256：`65170a252aad3848403c2dd540473a23f59962d7e787144d0ca609f2b5a70dcb`。
- 公共资产复核：Header `00a8a2...`、Footer `7f609b...`、Logo `4bdd8b...`、BookingModal `c606ca...`、BookingTrigger `cf6bfa...`，本轮未发生变化。

## 2026-07-22 原型内容迁移最终复验

- [x] 内容完整迁移通过
- [x] 已视觉校准
- 主体模块、顺序、逐字文案、指标与 CTA 已按 `prototype-content-snapshot.md` 同步；视觉沿用当前 MasterGo 风格。
- 桌面无横向溢出；Hero 预约 CTA 打开公共 `BookingModal`，打开时锁滚，关闭后恢复。
- `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check` 与 `pnpm mastergo:check ai-overseas` 全部 PASS。

## 2026-07-22 用户审查回归

- 1671×1258 全页截图：`user-review-full-local-1671.png`。
- 痛点编号与七个章节编号运行时逐项读取：PASS。
- 横向溢出：0；3 个预约类 CTA：PASS；控制台 error：0。
- lint、TypeScript、build、diff check 与 `mastergo:check ai-overseas`：PASS。

## 2026-07-23 章节序号回归

- [x] 七个章节序号运行时依次为“一、二、三、四、五、六、七”，均不包含“、”。
- [x] 标题正文与既有标题布局未变化。
- [x] 1671×1258 同视口截图和横向溢出检查完成。

- 运行时 `scrollWidth === clientWidth === 1671`；控制台 error 为 0。
- 工程门禁：`pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check`、`pnpm mastergo:check ai-overseas` 全部 PASS。

## 2026-07-24 浏览器批注回归

- [x] Hero 标题运行时为单行，标题高度 48px；正文宽度为 `.shell` 的 100%（1200px）。
- [x] Hero 取消固定最小高度，上下内边距运行时均为 42px。
- [x] 七个正文 section 上下内边距均为 60px，由内容高度撑开，无内容溢出。
- [x] `36个月→1个月` 以 24px 单行显示；可信底座为左三右三；其余用户确认文案逐字匹配，旧文案均未进入 DOM。
- [x] Hero“预约产品演示”实点打开公共 `BookingModal`；标题为“立刻预约演示与体验”，关闭按钮实点后弹窗不可见。
- [x] `1644 × 1258` 运行时 `scrollWidth === clientWidth`。
- 视觉证据：`visual-results/feedback-2026-07-24-browser-comments/ai-overseas-top-1644x1258.png`；全页关键属性使用运行时 DOM 量测核对。
- 工程门禁：`pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check`、`pnpm mastergo:check ai-overseas` 全部 PASS。
- 完成等级：已视觉校准；本轮为用户覆盖后的实现，不宣称与旧 MasterGo 画板严格 1:1。
- 移动端未纳入当前官网范围，不作为桌面端冻结阻塞项。

## 2026-07-25 浏览器批注验证

- `1576×1258` 运行态：可信底座实际坐标为左列三项 `x=830`、右列三项 `x=1097`，列内顺序与用户覆盖一致。
- Closing CTA 计算值：`padding-top/bottom=60px`、`min-height=0px`、`height=338.594px`；横向溢出 `0`。
- 顶部分区截图：`visual-results/feedback-2026-07-25-browser-comments/ai-overseas-top-1576x1258.png`。
- 工程门禁：`pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check`、`pnpm mastergo:check ai-overseas` 全部 PASS。

## 2026-07-26 浏览器批注验证

- [x] 四张痛点卡的编号与标题同行；三张智能体卡的正式图标与标签同行。
- [x] 指标说明计算字号为 `14px`；页面横向溢出为 `0`。
- [x] 公共 Header、Footer、Logo、BookingModal 未在本轮修改。
- 同视口证据：`visual-results/feedback-2026-07-26/ai-overseas-top-1576x1258.png`、`visual-results/feedback-2026-07-26/ai-overseas-cards-1576x1258.png`。
- 工程门禁：`pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check`、`pnpm mastergo:check ai-overseas` 全部 PASS。
- 移动端未纳入当前官网范围。
