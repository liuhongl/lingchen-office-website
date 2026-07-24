# 产品详情页公共面包屑范围

- 内容真源：七个产品详情页当前已确认的产品名称、描述和用户 2026-07-24 批注。
- 视觉真源：用户当前对话中的面包屑截图，以及 `design-baselines/sales-in/01-hero-mastergo-100.png` 中的同一公共组件。
- 目标桌面视口：1616×1258；历史 1440×900 证据保留。
- 用户确认视觉来源：当前对话截图 `codex-clipboard-79e20e5b-9eec-4fc6-8847-92642e19402f.png`
- MasterGo 精确属性复用来源：`design-baselines/sales-in/visual-ledger.md` 的 `V-0102`、`V-0103`
- 目标视口：当前官网桌面端；移动端未纳入本轮范围
- 允许修改：七个 `/products/*` 详情页的面包屑 JSX、对应重复 CSS、公共 `ProductBreadcrumb`
- 冻结资产：`SiteHeader`、`SiteFooter`、Logo、字体、`BookingModal`、`BookingTrigger`
- 用户确认覆盖：七个产品详情页统一采用截图中的面包屑结构和视觉规格

## 页面范围

- `/products/sales-in/`
- `/products/social-grow/`
- `/products/mine-geo/`
- `/products/deepdoc/`
- `/products/ai-acquisition-harness/`
- `/products/deeplaw/`
- `/products/recov-ai/`

## 2026-07-23 用户确认覆盖

- 保留当前非紧凑面包屑中的“立即预约体验该产品”，不向三个紧凑面包屑页面新增按钮。
- 现有四页按钮统一改为蓝色描边、白色背景、蓝色文字、无投影，弱化与公共 Header 主按钮的视觉竞争。
- 公共 Header、Footer、BookingModal 与 BookingTrigger 仍冻结；本次只修改 `ProductBreadcrumb` 的 CTA 页面样式。

## 验证证据

- 桌面截图：`output/playwright/product-breadcrumb-<slug>-1440.png`
- 移动截图：`output/playwright/product-breadcrumb-deeplaw-390.png`
- 公共弹窗：`output/playwright/product-breadcrumb-modal-production-1440.png`

## 2026-07-24 用户位置覆盖

- 非紧凑详情页的“立即预约体验该产品”统一紧跟面包屑文字轨迹，左侧保留合适间距，不再推到容器最右侧。
- 紧凑面包屑仍不新增按钮；按钮文案、描边样式和 `BookingTrigger` 行为不变。
- 2026-07-24 用户确认：产品矩阵全部详情页面包屑桌面字号统一调整为 15px。
