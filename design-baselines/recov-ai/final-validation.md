# Recov AI 最终验证

- 页面：Recov AI 产品详情页
- MasterGo：`page_id=6:07885`、`layer_id=6:07886`；Recov AI 根画板 `AI快搭-9627707`。历史错误 `33:060871` 属于 DeepDoc 图标，已排除
- 本地：`http://127.0.0.1:3000/products/recov-ai/`
- 视口：1440×900

## 当前状态

- [x] 正确根画板归档
- [x] 页面结构与全部区块已实现
- [x] 产品矩阵入口修正
- [x] 独立 metadata、canonical、sitemap
- [x] lint、TypeScript、build、diff-check
- [x] Hero 结构、边界、关键文字属性及机器人/日历原始图标按基线校准
- [x] Hero 预约 CTA 打开公共 BookingModal；body 锁滚；Escape 关闭并恢复滚动
- [x] 正式图标逐图层导出并建立资源名、尺寸、路径和 SHA-256 记录
- [x] 12 个主体区块累计高度校准
- [x] 同视口逐区对比
- [x] 页面内两个预约 CTA 交互回归
- [x] `pnpm mastergo:check recov-ai`

## 当前测量

- 设计基线：1440×7709；Header 0–65；Hero 65–375。
- 本地截图：1440 浏览器视口；Header 0–66；Hero 66–376；`scrollWidth === clientWidth === 1440`。
- 本地主体 12 区块高度逐项与设计对齐；本地全页 7662px，设计 7709px。47px 差异来自冻结公共 Footer，未对页面级 CSS 做越权覆盖。
- 移动端 390px 工程检查：`scrollWidth === clientWidth === 390`，无横向溢出；MasterGo 未提供移动端视觉基线，不能宣称移动端视觉通过。
- Hero 与 Closing 两个页面预约 CTA 均打开同一公共 BookingModal；body 锁滚，Escape 关闭正常。
- 公共 Header、Footer、Logo 未修改；BookingModal 仅修正为通过 Portal 挂载到 `document.body`，用于消除不同触发位置造成的样式继承差异。

完成等级：页面结构、文案、主体尺寸与正式图标已完成并生成逐区视觉对比。用户于 2026-07-21 确认保留现有公共 Footer，约 48px 的高度差异已登记为用户视觉覆盖例外；当前完成等级为“已视觉校准”，不宣称严格 1:1。

## 2026-07-21 用户反馈纠偏

- [x] 公共 Header、Hero、Closing 的预约入口统一由 Portal 挂载同一个 BookingModal；构建后实测弹窗父节点均为 `BODY`，背景、文字颜色和文本对齐一致。
- [x] 产品定位强调卡背景、边框、阴影及“AI工作伙伴”局部蓝色恢复。
- [x] 过去/现在图标恢复；自动化文书图标替换为当前 MasterGo 导出素材。
- [x] 生命周期标题字重、编号块和“核心能力”药丸恢复。
- [x] 能力矩阵六个蓝色圆点恢复。
- [x] Agent 基座、产品价值、商业实效、落地场景标题接入对应 MasterGo 导出 SVG。
- [x] 四张产品价值卡顶部图标恢复。
- [x] Hero 机器人/预约日历、三张商业实效交付卡、合作模式握手图标均改为当前 Recov 图层资源面板原始 SVG。
- [x] 商业实效红蓝标签、三段蓝色强调及流程条尾部蓝色结论恢复。
- [x] 13 项同类元素计算样式审计完成；桌面当前实例无横向溢出。
- [x] 复盘与新增防错规则已写入 `correction-retrospective.md` 和项目 MasterGo Skill。

工程复验：`pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check` 通过。本地浏览器复验：Hero/价值卡/交付卡图标正常渲染，`scrollWidth === clientWidth`；Hero CTA 打开公共弹窗后 `dialog.parentElement === BODY`、body 锁滚，Escape 关闭并恢复滚动。用户已确认保留现有公共 Footer，相关差异登记为视觉覆盖例外。

## 用户确认覆盖与完成等级

- [x] 已视觉校准
- [ ] 1:1 验证通过
- 用户确认覆盖：保留现有公共 Footer，不按专项稿调整公共 Footer 高度；该差异不影响 Recov AI 页面主体视觉校准结论。

## 2026-07-21 浏览器批注二次校准

- [x] “过去”“现在”图标恢复设计稿中的浅红/浅蓝 32×32 背景小框、8px 圆角和 14×14 内部图标比例。
- [x] “自动化文书匹配”恢复与其他业务流卡片一致的 48×48 蓝色图标框；同时审计四张业务流卡片，统一为 93×93 原始资源画布和一致的视觉尺寸。
- [x] 本地浏览器读取计算样式并保存局部截图：对比图标均为 32×32；业务流 4 个资源画布均为 93×93，蓝色主体均为 48×48。
## 2026-07-22 原型内容同步复验状态

- [x] 内容完整迁移通过
- [x] 已视觉校准
- 内容：已按 `prototype-content-snapshot.md` 完成源码级同步，差异与纠错决定见 `prototype-vs-local-review.md`、`typo-review.md`。
- 视觉：沿用既有页面与 MasterGo 风格；2026-07-22 主任务浏览器复验唯一 H1、无横向溢出，所有懒加载图片滚动后加载成功。
- 公共资产：本批次未主动修改 `SiteHeader`、`SiteFooter`、Logo、`ProductBreadcrumb`、`BookingModal`、`BookingTrigger`。
- 当前范围：仅桌面端；移动端未纳入当前官网实现与验收范围。
- SEO/GEO：可见正文与页面 metadata 已按原型真源校正；线上抓取、索引与生成式答案抽样不在本地结论内。

## 2026-07-22 产品矩阵七页一致性回归

- [x] 原型标题完整保留；桌面模块改为内容驱动高度并统一上下节奏。
- [x] 页面可见编号已移除前导 `0`；无 `01`–`09` 残留。
- [x] 1440px 全页截图复验，无模块重叠或横向溢出。
- [x] 本轮截图：`output/playwright/product-matrix-final/recov-ai.png`。
- [x] 工程四项与 `pnpm mastergo:check recov-ai` 通过。
- [x] 共享 `ProductBreadcrumb` 用户覆盖已同步；公共 Header/Footer 未修改。

## 2026-07-23 用户覆盖回归

- [x] 首个定位区块的“产品定位”标题标签已删除，正文内容保留。
- [x] 最新批注已将 compact 面包屑统一为标准 `ProductBreadcrumb`；公共组件本身未修改。
- [x] 业务流 STEP 去掉前导零；指标说明字重为 700；过去/现在标签增加 32px 下间距。
- [x] 1440×900 浏览器计算样式与局部截图复核；`scrollWidth === clientWidth === 1425`，无横向溢出。
- [x] 本轮截图：`visual-results/recov-ai/2026-07-23-breadcrumb-hero.png`、`2026-07-23-contrast-spacing.png`、`2026-07-23-step-numbers.png`、`2026-07-23-metric-weight.png`。
- [x] `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check`、`pnpm mastergo:check recov-ai` 全部通过。

## 2026-07-24 用户批注发布复验

- [x] Hero、商业实效、落地场景与合作模式按用户批注收敛间距、卡片和表格布局；可见文案覆盖已写入内容台账。
- [x] 1616×1258 局部截图覆盖 Hero、商业实效、场景、Agent 基座和合作模式，归档于 `output/playwright/product-feedback-2026-07-24-v3/`。
- [x] 唯一 H1、无横向溢出、无破损图片，公共面包屑和 Footer 入口正常。
- [x] 工程四项及 `pnpm mastergo:check recov-ai` 全部通过；当前结论仍为已视觉校准，不宣称严格 1:1。
## 2026-07-24 区块节奏与背景回归

- 1644 × 1258 桌面视口下，10 个 `.recov-section` 最终计算值均为上下 `60px`。
- `.recov-results` 最终背景为 `rgb(238, 245, 255)`（`#eef5ff`），与相邻模块区分明确。
- 同视口截图：`visual-results/feedback-2026-07-24-spacing60/recov-results-1644x1258.png`。
- 横向溢出：0。

## 2026-07-27 浏览器批注第四批

- R4-08–09、R4-11 内容/视觉双验收 PASS：序号按蓝/蓝/红跟随指标色；四枚正式流程图形均清晰可见；价值卡 `padding:20px`。
- 同视口全页证据：`output/playwright/browser-comments-round4-2026-07-27/recov-ai-full-1576.png`；横向溢出 0。
- 本轮统一门禁：lint、tsc、build、diff check、`mastergo:check recov-ai` PASS；移动端不在范围，不声明新的 MasterGo 1:1。

## 2026-07-27 浏览器批注第六批

- `.recov-case-grid > article` 两卡实测均 `244.5px`，四边内边距 `20px`，`min-height:0`，内容溢出 `0`，同排等高。
- 同视口局部证据：`output/playwright/browser-comments-round6-2026-07-27/13-recov-cases-after-1576x1258.png`；全页证据：`recov-ai-full-after-1576.png`。
- 横向溢出、破图与浏览器错误均为 `0`；Header 与页面预约入口均打开公共 BookingModal。
- lint、tsc、build、diff check 与 `mastergo:check recov-ai` PASS；移动端不在范围，不新增 1:1 声明。
# 2026-07-27 浏览器批注回归

- Hero CTA 数量实测为 `0`。
- 新描述逐字核对通过；实际宽 `1200px`、`max-width:none`，覆盖 Shell 全宽。
- 公共产品面包屑返回链接为 `#2868E8`。
- 证据：`2026-07-27-browser-comments-after-1486x1258.png`；无横向溢出。

## 2026-07-27 Hero 对称留白复验

- Hero 从 `280px` 改为内容撑高的 `227px`。
- 标签顶边到 Hero 顶边、描述底边到 Hero 底边均为 `42px`。
- 页面 `scrollWidth === clientWidth === 1471`。
- 同视口证据：`2026-07-27-round2-hero-after-1486x1258.png`。
