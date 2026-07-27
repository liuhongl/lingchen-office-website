# MasterGo 页面范围与证据清单

## 2026-07-22 原型内容同步批次

- 内容真源：Google AI Studio 当前交互原型 `https://ai.studio/apps/31940409-b4c4-420a-8018-a504586355a9`，以页面主体 `<main>` 的实际渲染文本为准。
- 视觉真源：本目录既有 MasterGo 基线、当前 `/products/deepdoc/` 已实现页面、用户确认的 Hero 视觉覆盖与冻结公共设计系统。
- 用户覆盖：执行 `1A / 2A / 3A`；有对应关系的大模块保留现有视觉，只同步模块内容、顺序、文案、指标和主体 CTA；明显错字修正，歧义保留原型。
- 当前范围：仅桌面端；移动端未纳入本轮官网实现和验收范围。
- 冻结资产：`SiteHeader`、`SiteFooter`、Logo、`ProductBreadcrumb`、`BookingModal`、`BookingTrigger`。
- 本节覆盖下方历史 MasterGo 内容真源口径；历史视觉证据继续有效。

## 任务范围

- 页面名称：产品矩阵－DeepDoc
- MasterGo 链接：https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=33%3A024763&devMode=true&layer_id=33%3A128399
- `page_id`：`33:024763`
- `layer_id`：`33:128399`
- 目标桌面视口：1440×8778px；用户提供的无编辑器遮挡 PNG，SHA-256 `122b267d606946542b561c20a77d456c578d98d9b5db0ed71298f793ce06acfb`
- 移动端设计基线：当前未提供；不根据桌面稿猜测移动端视觉
- 允许修改的页面与区块：DeepDoc 新页面主体、页面级元数据、sitemap 与站内入口
- 禁止修改的区域：公共 `SiteHeader`、`SiteFooter`、Logo、字体、`BookingModal`、`BookingTrigger` 及其全局样式

## 公共资产

- `SiteHeader`：冻结
- `SiteFooter`：冻结
- Logo：冻结
- 字体：冻结
- 其他共享组件：`BookingModal`、`BookingTrigger` 冻结

## 公共资产冻结证据

| 资产 | 组件路径 | 基线截图 | 视口 | 文件 SHA-256 | 允许变化 |
|---|---|---|---|---|---|
| SiteHeader | `components/site-header.tsx` | 既有首页基线 | 1440px | `00a8a2bb1d30db5e77a6abf5825e95497d907d7c9356506f9feac9c5ec35ef76` | 仅既有路由逻辑产生的导航高亮；当前交付哈希复核 |
| SiteFooter | `components/site-footer.tsx` | 既有公共 Footer 基线 | 1440px | `cb2b70d580ef03b0318c2b9ba77693e8ad87d1d54242c3e37ca19b9b2c7148eb` | 2026-07-23 用户授权全站联系方式以联系页为准 |
| Logo | `components/logo.tsx` | 同公共头尾基线 | 1440px | `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11` | 无 |
| BookingModal | `components/booking-modal.tsx` | `design-baselines/sales-in/booking-modal-desktop.png` | 1440px | `2f9bc6af8ddd00535ad511424100c3c8d605351ac97e1cd9e9569816f075e47f` | 当前交付哈希复核；字段文案沿用已确认公共表单 |
| BookingTrigger | `components/booking-trigger.tsx` | 同上 | 1440px | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 无 |

## 用户确认覆盖项

| 项目 | MasterGo 原值 | 用户确认值 | 对话证据 |
|---|---|---|---|
| 批次 | DeepDoc 设计页 | 纳入 DeepDoc 相关页面批次 | 2026-07-20 当前对话 |
| 公共资产 | 设计稿中的公共头尾 | 延续已冻结公共头尾 | 上一页既定规则与当前 AGENTS.md |
| Hero 视觉优化 | MasterGo 灰蓝纯色背景、内容单列左对齐 | 保留全部现有文案，将首屏优化为浅蓝白渐变背景、左标题右正文卡片的双栏结构 | 2026-07-21 用户明确要求优化第一个大模块，并允许调整背景颜色 |
| 2026-07-23 上线图标例外 | 页面专属图标需逐图层取得原始 SVG 或至少 2× 位图 | 本次上线不再校验 DeepDoc 图标；保留素材来源缺口记录，允许发布，但不得宣称图标验收通过或页面达到 1:1 | 2026-07-23 用户明确确认“DeepDoc界面先不用校验图标了” |
| 公共 Footer 联系方式 | 历史冻结联系方式 | 全站统一采用联系页已确认地址和邮箱，属于用户授权的公共资产更正 | 2026-07-23 用户确认“以联系页的为准” |

## 转化按钮行为

当前 100% 导出图中未确认页面主体预约类 CTA；若放大取证发现预约/体验/演示/合作咨询按钮，必须使用 `BookingTrigger → BookingModal`。

## 分区清单

| 区块 ID | 区块名称 | MasterGo 100% 基线 | 文案台账 | 视觉台账 | 内容验收 | 视觉验收 |
|---|---|---|---|---|---|---|
| 01 | Header、面包屑与 Hero | `01-hero-mastergo-100.png` | PASS | PASS | PASS | PASS（冻结 Header 例外） |
| 02 | 人工审单与智能审单对比 | `02-ai-vs-agent-mastergo-100.png` | PASS | PASS | PASS | PASS |
| 03 | 三大业务难题 | `03-three-challenges-mastergo-100.png` | PASS | PASS | PASS | PASS |
| 04 | 面向关键业务流程 | `04-business-flow-mastergo-100.png` | PASS | PASS | PASS | PASS |
| 05 | 360°封堵单证风险 | `05-evidence-chain-mastergo-100.png` | PASS | PASS | PASS | PASS |
| 06 | 传统模式 VS 智能配置 | `06-value-results-mastergo-100.png` | PASS | PASS | PASS | PASS |
| 07 | 产品价值与实效指标 | `07-enhancement-mastergo-100.png` | PASS | PASS | PASS | PASS |
| 08 | 商业价值对比 | `08-scenarios-mastergo-100.png` | PASS | PASS | PASS | PASS |
| 09 | 落地场景与客户案例 | `09-scenarios-cases-mastergo-100.png` | PASS | PASS | PASS | PASS |
| 10 | 合作模式与交付保障 | `10-cooperation-safety-mastergo-100.png` | PASS | PASS | PASS | PASS |
| 11 | 公共 Footer 与设计留白 | `11-footer-mastergo-100.png` | 冻结 | 冻结 | PASS | PASS（冻结 Footer 例外） |

## 当前门禁

- G0–G5 已完成：根画板经 MasterGo 研发模式复核为 `AI快搭-9636635`、1440×8778、背景 `#F8FAFC`。
- 页面主体没有引入图标库或近似图标；历史实现中的页面专属图标多为 MasterGo 100% 截图单倍裁切。该素材来源缺口已记录，并由用户在 2026-07-23 明确批准作为本次上线例外，不再阻塞发布。
- 设计稿底部公共 Footer 高度与冻结 Footer 不同，按用户冻结要求复用公共 Footer，并用设计存在的空白尾区保持根画板总高度 8778px。

## 2026-07-23 用户视觉覆盖

- 四张智能审核能力卡删除标题前的“核心能力 1/2/3/4”，标题下增加统一蓝色短下划线。
- 六张产品价值卡保留中文序号，删除序号后的顿号。

- 删除 Hero 定位条中的“产品定位”文字，保留“新一代跨境单证智能审核产品解决方案”。
- 共享面包屑预约按钮改为蓝色描边弱化样式；公共 Header/Footer 不变。
- 当前官网仅验收桌面端，移动端未纳入本轮范围。

## 2026-07-23 上线范围确认

- DeepDoc 图标来源与高清度不纳入本次上线验收；后续如恢复严格 1:1，仍需重新完成原始图层导出与逐图核对。
- 本次可报告“内容迁移通过、非图标视觉已校准、图标为用户批准的上线例外”，不得报告“图标验收通过”或“1:1 验证通过”。
## 2026-07-24 用户覆盖

- 缩减首屏上下留白并扩大说明卡宽度。
- 所有 `.deepdoc-pill` 文字增大，与区块标题协调。
- 合作服务模式与付费结算方式改为逐行对应的表格。
- Hero 标签下移并与右侧说明卡上边缘对齐，继续压缩首屏垂直留白。
- 三张挑战卡删除重复数字索引和横线，卡片由内容与等量上下 padding 撑高。
- 用户再次确认：Hero 以外全部顶层正文 section 统一为 `60px` 上下内边距。

## 2026-07-25 `/solutions/products/deepdoc/` 浏览器批注范围

- 内容真源：用户本轮 14 条浏览器批注；只覆盖明确指定的挑战标题，其他正文保持现有原型内容。
- 视觉真源：用户提供的 1576×1258 浏览器选区截图与当前官网公共 1200px 内容轴。
- 允许修改：DeepDoc 页面 JSX、页面级 `prototype-sync.css` 与本页台账。
- 冻结资产：公共 Header、Footer、Logo、BookingModal、BookingTrigger 不修改。
- 桌面端范围：正文内容轴 1200px；同类内容卡取消固定/最小高度，以 20px 上下内边距和内容撑高；Closing 为 60px 上下内边距。
- 移动端不在当前官网验收范围。

## 2026-07-27 浏览器批注第三批

- 用户覆盖：Hero 缩小上下留白；挑战卡继续保留明确左侧安全距；结果价值卡标题删除中文序号。
- 目标视口 `1576×1258`；允许修改本页 JSX、`prototype-sync.css` 与证据台账，公共资产和图标不变。

## 2026-07-27 浏览器批注第四批

- 覆盖 `/products/deepdoc/` 四张指标卡、六张价值卡、落地建议与四张安全卡；同类价值卡 `padding:20px` 覆盖扩展至七个产品详情页。
- 不改可见文案或图标；目标视口 `1576×1258`，公共资产冻结，移动端不在范围。

## 2026-07-27 浏览器批注第六批

- 覆盖 `.deepdoc-case-grid` 两张客户案例卡：四边内边距 `20px`、删除固定高度、由内容撑开且同一 Grid 行等高。
- 文案、正式图标与公共资产不变；桌面端 `1576×1258`，移动端不在范围。

## 2026-07-27 浏览器批注第七批

- 覆盖 DeepDoc 页面内 11 组独立 `article` 卡片网格：对比、挑战、业务流、审核体系、审核引擎、指标、价值、商业实效、客户案例、安全体系、交付保障。
- 各卡顶部 padding 统一为 `20px`，删除固定/最小高度，由内容撑高；同一个 Grid 模块内的同排卡片保持等高。
- 表格、区块标题和单独的 `.deepdoc-advice` 结果面板不在本轮范围；文案、正式图标与公共资产不变。
- 目标桌面视口 `1576×1258`；移动端不在范围。
