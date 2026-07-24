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
