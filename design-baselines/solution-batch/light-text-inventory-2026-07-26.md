# 2026-07-26 全站浅色文字影响盘点

## 用户要求与定义

- 用户示例：`/solutions/products/social-grow/` 的 `.sgs-scenarios__subtitle`，当前计算色为 `rgb(107,114,128)`。
- 用户要求：全站“这种浅色的字体”改为黑色，但必须先盘点同类文本与影响范围，不得只改示例或盲目全局覆盖。
- 本批“同类”定义：**位于白色、浅灰或浅蓝主体区块，直接解释区块标题的 section-level subtitle / lead / intro 支撑文案**。
- 目标黑色：项目既有正文黑 `#111827`（浏览器计算值 `rgb(17,24,39)`）。

## 静态盘点结果

对 `app/**/*.css` 中现有灰色文字声明进行规则级扫描，覆盖：

`#64748b`、`#6b7280`、`#94a3b8`、`#607086`、`#607089`、`#5b687b`、`#475569`、`#4b5563`

共命中 248 条规则，按语义分为：

| 类别 | 数量 | 本批处理 |
|---|---:|---|
| section subtitle / lead / intro 支撑文案 | 27 | 改为 `#111827` |
| 卡片、表格、长正文等 body copy | 190 | 不在本批直接覆盖；需逐元素视觉证据，避免抹平信息层级 |
| small / meta / tag / label / eyebrow | 20 | 保留；承担次级信息和状态层级 |
| Closing、Footer、Modal、Toast 等特殊表面 | 9 | 保留；需结合背景对比度单独判断 |
| 输入占位符、产品未选中说明等表单状态 | 2 | 保留；属于交互状态，不是正文 |

## 纳入的 27 条 CSS 规则

### 综合/专项解决方案

- `.ras-solution__lead`
- `.dds-problems__intro`
- `.dds-core-flow__intro`
- `.dds-results__intro`
- `.dds-cooperation__intro`
- `.mgs-hero__lead`
- `.mgs-capabilities__heading > span`
- `.mgs-pain-points__heading > span`
- `.mgs-flow__heading > span`
- `.mgs-advantages__heading > span`
- `.mgs-outcomes__heading > span`
- `.mgs-scenarios__heading > span`
- `.mgs-cooperation__heading > span`
- `.ahs-hero__lead`
- `.ahs-advantages__lead`
- `.ahs-outcomes__lead`
- `.ahs-applications__lead`
- `.ahs-deployment__lead`
- `.sgs-advantages__subtitle`
- `.sgs-results__subtitle`
- `.sgs-scenarios__subtitle`
- `.sgs-cooperation__subtitle`
- `.sis-section-lead`
- `.sis-section-subtitle`

### 产品详情

- `.sales-in-hero__lead`
- `.social-grow-results__intro`
- `.social-grow-scenarios__intro`
- `.social-grow-cooperation__intro`

> 原始扫描中 `.social-grow-scenarios__intro,.social-grow-cooperation__intro` 为一条 CSS 规则，实施与 DOM 验收按两个可见节点分别计数，因此静态规则数为 27、可见 selector 项为 28。

## 明确排除

- `input::placeholder`、`textarea::placeholder`。
- 产品按钮未选中说明、禁用态、错误态、辅助状态。
- Footer / 深色背景内的低层级文字。
- 颜色本身承担蓝、绿、红、橙等业务语义的标签、指标和状态。
- 普通卡片正文、表格正文和长段落；它们虽然也使用灰色，但不与用户给出的“区块副标题”示例属于同一语义类别。

## 回归范围

- `/products/sales-in/`
- `/products/social-grow/`
- `/solutions/products/sales-in/`
- `/solutions/products/social-grow/`
- `/solutions/products/mine-geo/`
- `/solutions/products/ai-acquisition-harness/`
- `/solutions/products/deepdoc/`

每页至少核对：目标节点实际为 `rgb(17,24,39)`、唯一 H1、横向溢出为 0、公共 Header/Footer 未受样式覆盖。移动端未纳入当前官网范围。

## 实施与运行态回归

- 2026-07-26 已将上列 28 个 selector 项统一设置为 `#111827`，未使用通配符、`body:has(...)` 或 `!important`。
- 七个回归路由的所有实际可见目标节点计算色均为 `rgb(17, 24, 39)`；每页唯一 H1，横向溢出均为 0。
- Mine GEO 的 `.mgs-capabilities__heading > span`、`.mgs-pain-points__heading > span`、`.mgs-flow__heading > span` 在当前 JSX 中不存在，记为 `N/A`，没有据此补写文案。
- `.ras-solution__lead` 当前只有历史 CSS 定义、没有当前 JSX 节点，记为 `N/A`。
- 其余 221 条灰色规则按上方语义排除项保留，避免破坏正文层级、交互状态和深色表面对比度。
- 当前状态：`PASS`。
