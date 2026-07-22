# 官网原型内容批量同步范围

## 1. 用户确认

- 确认日期：2026-07-22。
- 执行口径：`1A / 2A / 3A`。
- 内容真源：Google AI Studio 当前交互原型的页面主体 `<main>`。
- 视觉真源：现有已实现页面、对应 MasterGo 设计基线与冻结公共组件。
- 当前只实现和验收桌面端，统一执行 `docs/website-desktop-only-scope.md`。

## 2. 已确认的实施规则

1. 对应业务大模块存在时，保留现有/MasterGo视觉，包括背景、布局、字体层级、间距、卡片、按钮和图标风格；只同步原型中的模块内容、顺序、逐字文案、指标和主体 CTA。
2. 原型新增完整业务模块而本地缺失时，在现有视觉体系内补入；本地业务模块在原型中完全不存在且无法建立内容对应关系时删除。
3. 原型只决定内容，不复制原型自身的视觉样式。
4. 差异台账归档后自动批量实施，不逐页等待用户审批。
5. 明显错别字和明显漏标点按候选建议修正；存在歧义时保留原型原文并记入错字清单。
6. 仅在原型不可读、页面映射冲突或高风险事实不确定时暂停找用户确认。
7. 公共 Header、Footer、Logo、BookingModal、BookingTrigger 与 ProductBreadcrumb 保持冻结；预约类主体 CTA 继续使用公共 BookingModal。
8. 图标统一执行 `docs/semantic-icon-generation-rules.md`：先查正式素材，确无正式素材时才按已授权业务语义制作 SVG。

## 3. 批量页面清单

### 产品专项解决方案（6 页）

- `/solutions/products/social-grow/`
- `/solutions/products/mine-geo/`
- `/solutions/products/ai-acquisition-harness/`
- `/solutions/products/deepdoc/`
- `/solutions/products/recov-ai/`
- `/solutions/products/deeplaw/`

`/solutions/products/sales-in/` 已完成并冻结，不在本批次重做范围。

### 综合解决方案（2 页）

- `/solutions/ai-overseas/`
- `/solutions/non-performing-assets/`

`/solutions/legal-ai/` 不在本批次重做范围。

### 关于灵宸（1 页）

- `/about/`

### 产品矩阵详情（6 页）

- `/products/sales-in/`
- `/products/social-grow/`
- `/products/mine-geo/`
- `/products/ai-acquisition-harness/`
- `/products/deepdoc/`
- `/products/recov-ai/`

## 4. 并行边界

- 可以跨页面并行完成内容提取、差异审计、页面实现和独立证据产物。
- 单个页面内部仍按 G0-G6 门禁顺序推进，不得用批量处理跳过逐字台账、视觉台账或逐页验收。
- 并行任务不得同时修改 `app/globals.css` 或冻结公共组件；结构变化需要补充样式时，使用当前路由独占且由根类限定作用域的样式文件。
- 全部页面完成后，由主任务统一执行全站工程命令和共享资产哈希复核。
