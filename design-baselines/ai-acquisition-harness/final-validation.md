# AI 获客 Harness 最终验收

> 2026-07-21 用户反馈复审：原完成结论再次撤销；以下仅记录本轮重新取得的证据和实际门禁状态。

## 内容门禁

- 区块 01–07 文案台账均为 `PASS`，无 `BLOCKED`、待核对或未完成项。
- 页面实际渲染保留唯一 H1：`AI获客 Harness`。
- 未补写设计稿外卖点、指标或功能；增长闭环、合作模式标题及商业实效功能图标均改用 MasterGo 当前目标图层直接导出的 SVG，不再以近似 Unicode、手绘 SVG、图标库或错误旧位图替代。
- 全页 H2/H3 计算字重均为 700；低于 2× DPR 的图片数量为 0，图片实际宽高偏差数量为 0。
- 六枚价值图标和四枚合作/指引图标已从区块 100% 基线重新精确裁切，原空白/残缺素材已撤销。

## 视觉门禁

- MasterGo 全页基线：1440×7809。
- 本轮本地全页截图：1440×8023，见 `full-local-final-20260721.png`。高度差包含冻结公共 Footer，以及用户确认删除四圆点图标、修复末区固定高度后的内容流变化。
- 已重新核对核心能力、价值模型、商业实效、落地场景与合作模式局部图；模块灰白分层、图标阴影、标签颜色、列表标记和底部留白均已恢复。
- 根元素宽度验证：`scrollWidth === clientWidth === 1440`，无横向溢出。
- 公共 Header、Footer、Logo、BookingTrigger、BookingModal 按冻结基线复用；MasterGo 主体画板未绘制公共 Footer，依项目规则保留冻结 Footer 并声明该公共资产差异。
- [x] 已视觉校准（包含用户确认覆盖项；不再使用“整页 1:1”表述掩盖画板高度与冻结 Footer 的已声明差异）。

### 第二次反馈复验

- 能力区灰白背景分界由任意固定断点改为实测相邻区块边界，核心能力卡片不再被上一区块灰底侵入。
- “三大核心子功能差异化竞争优势”、四个商业实效功能、“增长闭环链”、“灵活多元的合作模式”的图标均有 MasterGo 图层、SVG、尺寸与 SHA-256 证据。
- 合作模式标题图标距模块顶部 40px；末尾指引与 Footer 保留安全间距。

### 第三次反馈复验

- `.acq-reasons` 的 `padding-top` 已按用户覆盖改为 130px。
- 价值说明段已从能力区移入价值区；说明段、四项指标与六项价值卡共享灰底，“价值跃迁模型”位于后续白底。
- 1280px 同视口几何检查确认灰白分界位于价值卡底部与价值表顶部之间，无横向溢出。
- 本轮 `pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check`、`pnpm mastergo:check ai-acquisition-harness` 通过；全仓 `pnpm lint` 被冻结公共 Footer 的既有 `<a href="/research/">` 规则错误阻塞，本次未越权修改公共组件。

### 第四次反馈复验

- 原因卡模块上/下留白均为 130px；差异化竞争优势、技术底座作为独立模块，与相邻模块间距均为 128px。
- 五张原因卡内容已逐卡验证垂直居中，上下余量相等；页面无横向溢出。
- `pnpm lint`、构建后稳定产物上的 `pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check`、`pnpm mastergo:check ai-acquisition-harness` 均通过；本地页面返回 HTTP 200。

### 第五次反馈复验

- 原因卡、三核心能力、差异优势、技术底座已拆成四个独立 section，背景依次为灰、白、灰、白，各 section 自己拥有对称的上下内边距。
- `.acq-tech` 使用内容驱动高度 `auto`，不再设置固定高度；当前自然渲染高度 210px。
- 1280px 同视口截图与 DOM 几何已复核，无横向溢出。

## 交互门禁

- Hero 预约 CTA 打开公共 `BookingModal`：PASS。
- Header “立即体验”打开同一个公共 `BookingModal`：PASS。
- 弹窗打开时滚动锁定：PASS。
- Escape 关闭弹窗：PASS。
- `127.0.0.1` 开发态 hydration：PASS；`next.config.ts` 已显式允许该本地开发来源，HMR 已连接。

## SEO / GEO 门禁

- 独立 title、description、自指 canonical、唯一 H1：PASS。
- sitemap：PASS。
- 线上抓取、索引与生成式答案抽样：待部署后验证。

## 工程门禁

- `pnpm lint`：PASS。
- `pnpm exec tsc --noEmit`：PASS。
- `pnpm build`：PASS。
- `git diff --check`：PASS。
- `pnpm mastergo:check ai-acquisition-harness`：PASS。
- 公共资产复核：Header、Footer、BookingTrigger、BookingModal 哈希均与冻结/用户确认基线一致。
## 2026-07-22 原型内容同步复验状态

- [x] 内容完整迁移通过
- [x] 已视觉校准
- 内容：已按 `prototype-content-snapshot.md` 完成源码级同步，差异与纠错决定见 `prototype-vs-local-review.md`、`typo-review.md`。
- 视觉：沿用既有页面与 MasterGo 风格；2026-07-22 主任务浏览器复验唯一 H1、无横向溢出，所有懒加载图片滚动后加载成功。
- 公共资产：本批次未主动修改 `SiteHeader`、`SiteFooter`、Logo、`ProductBreadcrumb`、`BookingModal`、`BookingTrigger`。
- 当前范围：仅桌面端；移动端未纳入当前官网实现与验收范围。
- SEO/GEO：可见正文与页面 metadata 已按原型真源校正；线上抓取、索引与生成式答案抽样不在本地结论内。

## 2026-07-22 产品矩阵七页一致性回归

- [x] 已处理本页 10 条浏览器批注：标题层级、重复序号、卡片高度、重构业务流独立背景、四卡铺满与正式图标、核心能力编号及产品价值标题样式。
- [x] 补回原型标题“一、一图读懂（AI 赋能企业获客，沉淀为企业可持续、可进化的核心价值）”。
- [x] 页面可见编号已移除前导 `0`；1440px 全页无模块重叠或横向溢出。
- [x] 本轮截图：`output/playwright/product-matrix-final/ai-acquisition-harness.png`。
- [x] 工程四项与 `pnpm mastergo:check ai-acquisition-harness` 通过。
- [x] 共享 `ProductBreadcrumb` 用户覆盖已同步；公共 Header/Footer 未修改。

## 2026-07-23 用户覆盖回归

- [x] `/products/ai-acquisition-harness/` Hero “产品定位”标签已删除。
- [x] compact 面包屑保持无顶部预约按钮。
- [x] “落地建议与指引”第 1、2、3 点已拆为三个独立折行节点。
- [x] 已在 1440×900 桌面视口复核：`visual-results/ai-acquisition-harness/2026-07-23-advice-line-breaks.png`；三点逐条折行，无横向溢出。

## 2026-07-23 模块拆分回归

- [x] 产品价值与价值跃迁为两个独立 section，背景区分清晰。
- [x] 落地场景与合作模式为两个独立 section，背景区分清晰。
- [x] 落地场景标题图标无浅色底，蓝色定位图形保持清晰。
- [x] 1671×1258 同视口截图与运行时 section 边界完成复核。
- [x] 可见文案节点无新增、删除或改写。
- [x] 无横向溢出；公共资产哈希与本轮开工基线一致。

- 运行时 section 高度：产品价值 `936.31px`、价值跃迁 `669px`、落地场景 `1251.56px`、合作模式 `867.78px`。
- 工程门禁：`pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check`、`pnpm mastergo:check ai-acquisition-harness` 全部 PASS。
- 当前结论：已视觉校准；本次为用户视觉覆盖，不宣称与旧 MasterGo 原画板严格 1:1。

## 2026-07-23 经典案例标题间距复验

- [x] 1413×1258 同视口实测标题上间距由 0px 调整为 48px。
- [x] 标题至案例卡片下间距由 72px 调整为 28px。
- [x] 标题文案、字体、字重、颜色与案例卡片内容未变化。
- [x] 页面无横向溢出，公共资产 SHA-256 与本轮开工基线一致。
- [x] `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check` 与 `pnpm mastergo:check ai-acquisition-harness` 全部通过。
- 同视口证据：`output/playwright/ai-harness-case-spacing-2026-07-23/before/viewport-1413x1258.png` 与 `output/playwright/ai-harness-case-spacing-2026-07-23/after/viewport-1413x1258.png`。
- 当前结论：已视觉校准；本次为用户间距覆盖，不宣称与旧 MasterGo 原画板严格 1:1。

## 2026-07-24 用户批注发布复验

- [x] “一图读懂”标题按用户覆盖更新，浏览器实际字符串与内容台账一致。
- [x] 价值跃迁与经典案例均改为普通浅色多列表格；Hero、价值区和案例区的内容边界与留白已按 1616×1258 证据复核。
- [x] 唯一 H1、无横向溢出、无破损图片；页面预约入口继续打开公共 BookingModal。
- [x] 截图归档于 `output/playwright/product-feedback-2026-07-24-v3/`。
- [x] 工程四项及 `pnpm mastergo:check ai-acquisition-harness` 全部通过；本轮不宣称与旧 MasterGo 原画板严格 1:1。
## 2026-07-24 紧凑布局与合作表格回归

- Hero 高 140px；介绍区上下 padding 为 36px / 18px；技术底座标题图标数量为 0。
- 场景表表头 14px、正文 12px、行垂直居中；场景名称已去数字前缀。
- 合作模式为三列三行表格，落地建议背景为 `rgb(245,249,255)`。
- `1616×1258`：`scrollWidth=clientWidth=1601`；截图位于 `visual-results/feedback-2026-07-24-batch2/harness-*.png`。
- 移动端未纳入本轮验收。
## 2026-07-24 区块节奏回归

- 1644 × 1258 桌面视口下，Hero 与紧凑 Intro 之外 11 个常规内容 section 最终计算值均为上下 `60px`。
- 固定高度影响已解除，横向溢出为 0。

## 2026-07-25 浏览器批注回归

- [x] 产品导航与唯一 H1 更新为“AI销售获客Harness”；H1 两段在桌面截图中同一行显示。
- [x] Hero 高度由内容撑开，计算值 `height=522px`、`padding-top=60px`、`padding-bottom=60px`；两段正文宽度均为内容容器全宽。
- [x] 一级认知标题按用户逐字覆盖；图标与卡片标题同一行并垂直居中。
- [x] 优势卡、技术底座、指标卡、价值卡、场景卡、案例卡删除固定/最小高度；场景卡计算上下内边距均为 `20px`。
- [x] 黄金矩阵标题与正文同一行；场景表四行标题删除序号，前两列垂直居中。
- [x] 价值跃迁表头与正文前缀按用户覆盖更新。
- [x] 服务保障面板内容驱动高度，计算上下内边距均为 `30px`。
- [x] Closing 删除固定/最小高度，计算值 `height=247.2px`、上下内边距均为 `60px`。
- [x] 唯一 H1、无横向溢出；预约 CTA 打开公共 `BookingModal`，关闭后 dialog 数量恢复为 0。
- [x] 截图：`visual-results/feedback-2026-07-25-browser-comments/harness-hero-1280x720.png`、`harness-closing-1280x720.png`。用户批注证据为 1576×1258；受当前浏览器控制层 CSS 视口限制，本地截图为 1280×720，因此本轮结论为“已视觉校准”，不宣称旧 MasterGo 严格 1:1。
- [x] `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check`、`pnpm mastergo:check ai-acquisition-harness` 全部 PASS。
- [x] Header、Footer、BookingModal、BookingTrigger、Logo 哈希与开工基线一致；`SolutionTabs` 的变更仅为本轮用户授权的产品名称。

## 2026-07-26 20:27 纯文字批注回归

- [x] BC-13：第一张应用卡从 `160.98px` 最小降至 `152.98px`，上下 padding `16px`，内容溢出 0。
- [x] BC-14：模式 1 徽标与标题同排且中心差 0；新 selector 已记录于批次台账。
- [x] BC-05：Hero、优势、成果、应用、合作五个区块级 lead 计算色均为 `rgb(17,24,39)`。
- [x] 页面唯一 H1、横向溢出 0；局部截图为 `output/playwright/browser-comments-2026-07-26/08-09-*.png`。
- [x] `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check` 与 `pnpm mastergo:check ai-acquisition-harness` 全部 PASS。
- 当前完成等级：已视觉校准；本轮为用户覆盖，不新增旧 MasterGo 严格 1:1 声明。

## 2026-07-26 浏览器批注第二批增量验收

- ID 20–25 内容与视觉双验收 PASS；旧 BC-13–BC-14 继续作为叠加门禁。
- 痛点卡降至 283px；优势区背景统一；应用场景为连续表格；两张合作卡标签与标题同排、内容驱动。
- 1576×1258 横向溢出为 0；证据见 `output/playwright/browser-comments-round2-2026-07-26/ai-harness-*.png`。
- 本节最终门禁：lint、tsc、build、diff check 与 `mastergo:check ai-acquisition-harness` 全部 PASS。

## 2026-07-27 浏览器批注第三批增量验收

- 应用场景表三列 `border-right` 均为 `0px`，仅保留横向分行。
- 两张合作模式卡实测均高 `224.59px`，内容溢出为 `0`。
- 同视口截图：`output/playwright/browser-comments-round3-2026-07-27/04-harness-applications-1576x1258.png`、`05-harness-deployment-1576x1258.png`。
- 页面横向溢出为 `0`；视觉人工复核 PASS。
- 工程门禁与 `pnpm mastergo:check ai-acquisition-harness` 均 PASS。
- 移动端未纳入当前官网范围；本批不更新旧 MasterGo 严格 1:1 结论。

## 2026-07-27 浏览器批注第四批

- R4-11、R4-15–18 内容/视觉双验收 PASS：对比卡 `142.5px`，核心图标 `56×56px` 等比，差异面板上下留白均 `21px`，指引图标无深色底。
- 指引图标使用已有 MasterGo 导出记录的透明 SVG，不新绘、不使用近似图标库；证据见本页视觉台账。
- 同视口全页证据：`output/playwright/browser-comments-round4-2026-07-27/ai-acquisition-harness-full-1576.png`；横向溢出 0。
- 本轮统一门禁：lint、tsc、build、diff check、`mastergo:check ai-acquisition-harness` PASS；移动端不在范围，不声明新的 MasterGo 1:1。

## 2026-07-27 浏览器批注第六批

- R6-01–02 内容/视觉双验收 PASS：三卡图标均 48×48px，Grid 图标列 48px、gap 20px，标签位置一致且无裁切。
- 1576×1258 分区与全页证据：`output/playwright/browser-comments-round6-2026-07-27/01-acq-core-after.png`、`full-product-acq.png`；横向溢出 0。
- Header“立即体验”实点打开公共 BookingModal，Escape 与滚动锁定恢复 PASS。
- lint、tsc、build、diff check 与 `mastergo:check ai-acquisition-harness` PASS；公共资产哈希未变；移动端不在范围，不声明新的 1:1。

## 2026-07-27 浏览器批注第六批

- `.acq-case-cards > article` 两卡实测均 `144.06px`，四边内边距 `20px`，`min-height:0`，内容溢出 `0`，同排等高。
- 同视口局部证据：`output/playwright/browser-comments-round6-2026-07-27/10-harness-cases-after-1576x1258.png`；全页证据：`ai-acquisition-harness-full-after-1576.png`。
- 横向溢出、破图与浏览器错误均为 `0`；Header 预约入口打开公共 BookingModal。
- lint、tsc、build、diff check 与 `mastergo:check ai-acquisition-harness` PASS；移动端不在范围，不新增 1:1 声明。

## 2026-07-27 浏览器批注第七批

- 合作模式表头由 `82px` 收紧为 `52px`；padding 为 `10px 20px`，三列文字完整，内容溢出 `0`；两条数据行保持原高度。
- 同视口局部证据：`output/playwright/browser-comments-round7-2026-07-27/05-harness-modes-after-1576x1258.png`；全页证据：`ai-acquisition-harness-full-after-1576.png`。
- 横向溢出、破图与浏览器错误均为 `0`；Header 预约入口打开公共 BookingModal。
- lint、tsc、build、diff check 与 `mastergo:check ai-acquisition-harness` PASS；移动端不在范围；本轮不新增 MasterGo 1:1 声明。

## 2026-07-27 浏览器批注第八批

- 首组五卡正文与标题行的间距全部为 `10px`；五个序号全部为 `36×36px`、字号 `15px`，内容溢出均为 `0`。
- 业务流四卡从 `176px` 收紧到 `135.89px`，四卡同排等高、padding `20px`、`min-height:0`、内容溢出 `0`。
- 同视口证据：`output/playwright/browser-comments-round8-2026-07-27/03-harness-reasons-after-1576x1258.jpg`、`04-harness-flow-after-1576x1258.jpg`。
- 页面横向溢出与破图均为 `0`、唯一 H1；lint、tsc、build、diff check 与 `mastergo:check ai-acquisition-harness` 全部 PASS。
- 移动端未纳入当前官网范围；本轮不新增 MasterGo 1:1 声明。

## 2026-07-27 浏览器批注第九批

- 五张原因卡标题行全部距卡顶 `21px`，绝对 top 一致；正文间距保持 `10px`，卡高保持 `191.98px`，内容溢出均为 `0`。
- 面包屑取消 compact 特例，统一为 `74px` 完整模式；返回符号、预约 CTA 与其他六页一致，滚动吸附 top `66px`。
- 新显示的面包屑预约 CTA 实点打开唯一公共 BookingModal，焦点、滚动锁定和 Escape 关闭 PASS。
- 同视口证据：`output/playwright/browser-comments-round9-2026-07-27/02-harness-title-row-after-1576x1258.jpg`。
- 页面横向溢出、破图与浏览器 error 均为 `0`；`pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check` 与 `pnpm mastergo:check ai-acquisition-harness` 全部 PASS。
- 移动端未纳入当前官网范围；本轮不新增 MasterGo 1:1 声明。
