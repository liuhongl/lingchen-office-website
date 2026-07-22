# Sales in 产品专项解决方案范围与证据清单

## 任务范围

- 页面名称：Sales in 产品专项解决方案
- 适用的批次规则：`docs/product-solution-prototype-migration-rules.md`
- 语义图标授权规则：`docs/semantic-icon-generation-rules.md`
- 官网视口范围规则：`docs/website-desktop-only-scope.md`
- 内容真源：Google AI Studio 交互原型
- 内容真源链接与版本或访问时间：`https://aistudio.google.com/apps/31940409-b4c4-420a-8018-a504586355a9?showPreview=true&showAssistant=true`，2026-07-22 live 读取
- 视觉真源：现有官网 `/solutions/products/sales-in/` 的蓝白企业级卡片体系，并复用全站设计系统
- 视觉真源链接或实现路径：`app/solutions/products/sales-in/page.tsx`、`app/globals.css` 中 `.sis-*`；开工截图 `visual-source-current-1280.png`
- MasterGo 链接：不适用，本次用户明确要求内容以原型为准、视觉沿用现有实现
- `page_id`（视觉真源为 MasterGo 时必填）：不适用
- `layer_id`：不适用
- 目标桌面视口：1280 × 720
- 移动端设计基线：未纳入当前官网范围；用户于 2026-07-22 明确确认整个官网暂不考虑移动端
- 允许修改的页面与区块：`/solutions/products/sales-in/` 页面主体、该页专属 `.sis-*` 样式、该页 SEO 元数据、本证据目录与项目源规则
- 禁止修改的区域：公共 Header、Footer、Logo、字体、BookingModal、BookingTrigger、解决方案公共导航

## 公共资产

- `SiteHeader`：冻结
- `SiteFooter`：冻结
- Logo：已确认
- 字体：已确认
- `BookingModal` / `BookingTrigger`：冻结并复用

## 公共资产冻结证据

| 资产 | 组件路径 | 基线截图 | 视口 | 文件 SHA-256 | 允许变化 |
|---|---|---|---|---|---|
| SiteHeader | `components/site-header.tsx` | `visual-source-current-1280.png` | 1280 × 720 | `00a8a2bb1d30db5e77a6abf5825e95497d907d7c9356506f9feac9c5ec35ef76` | 仅路由高亮 |
| SiteFooter | `components/site-footer.tsx` | `visual-source-current-1280.png` | 1280 × 720 | `7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb` | 无 |
| BookingModal | `components/booking-modal.tsx` | 页面点击验收 | 1280 × 720 | `19c0a05920c86403b5f33ea5e5261abd6c464d2405cab54d1ef3d9faf42ebd7c` | 无 |
| BookingTrigger | `components/booking-trigger.tsx` | 页面点击验收 | 1280 × 720 | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 无 |

## 用户确认覆盖项

| 项目 | 已声明真源原值 | 用户确认值 | 对话证据 |
|---|---|---|---|
| 页面模块、顺序、文案、指标 | 旧实现曾按设计图录入 | 以用户指定 AI Studio 原型为准 | 2026-07-22 用户确认“内容需要以原型图为准”并提供原型版本 |
| 页面视觉 | 原型自身样式 | 沿用现有实现各界面的官网风格 | 2026-07-22 用户确认第 2 项“可以” |
| 疑似错字 | 原型逐字值 | 明确的建议候选按清单修正；不确定项保留原型原文 | 2026-07-22 用户确认“清单按照你建议候选的来改，不确定的以原文为准” |
| 量化指标 | 原型逐字值 | 原样保留 | 2026-07-22 用户确认“指标以原型为准” |
| 一图读懂模块 | 原型包含标题和三张定位卡 | 删除整个模块；后续编号顺延 | 2026-07-22 用户逐张标注三张定位卡“删除” |
| 数字化处理流 | 桌面两列排列 | 五个步骤按序竖向排列 | 2026-07-22 用户要求“序号像原型竖着排列” |
| 卡片图标 | 当前用圆点占位 | 按卡片语义生成正式 SVG；参考项目中 MasterGo 图标的圆角线性风格，避免 AI 符号 | 2026-07-22 用户要求按语义生成对应图标并参考 MasterGo 风格 |
| 桌面端验收 | 本轮反馈修改后的桌面效果 | 用户确认“可以”，按当前效果冻结 | 2026-07-22 用户确认第 1 项“可以” |
| 移动端验收 | 原计划补做 390px 复验 | 整个官网暂不考虑移动端，不作为桌面端交付阻塞 | 2026-07-22 用户明确确认“移动端暂不考虑也是说的整个官网” |

## 转化按钮行为

| CTA 文案 | 区块 | 设计动作 | 实现组件 | 是否为例外 | 例外依据 |
|---|---|---|---|---|---|
| 预约产品演示 | Hero | 打开预约弹窗 | BookingTrigger → BookingModal | 否 | 全站预约规则 |

## 分区清单

| 区块 ID | 区块名称 | 内容真源快照 | 视觉真源基线 | 文案台账 | 视觉台账 | 内容验收 | 视觉验收 |
|---|---|---|---|---|---|---|---|
| 01 | Hero | `prototype-content-snapshot.md` | `visual-source-current-1280.png` | FROZEN | PASS | PASS | PASS |
| 02 | 一图读懂 | 用户确认删除 | 不适用 | REMOVED | REMOVED | PASS | PASS |
| 03 | 行业困局与核心痛点 | 同上 | 同上 | FROZEN | PASS | PASS | PASS |
| 04 | 核心数字化处理流 | 同上 | 同上 | FROZEN | 用户覆盖：竖向流程 | PASS | PASS |
| 05 | 关键竞争优势 | 同上 | 同上 | FROZEN | 用户覆盖：语义图标 | PASS | PASS |
| 06 | 商业成果与落地价值 | 同上 | 同上 | FROZEN | PASS | PASS | PASS |
| 07 | 应用场景示例 | 同上 | 同上 | FROZEN | PASS | PASS | PASS |
| 08 | 合作模式、落地路径与收束 | 同上 | 同上 | FROZEN | 用户覆盖：语义图标 | PASS | PASS |

## 阻塞项

无。
