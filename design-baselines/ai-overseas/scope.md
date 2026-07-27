# MasterGo 页面范围与证据清单

## 任务范围

- 页面名称：解决方案-综合-AI出海获客与合规解决方案
- 内容真源：用户指定 Google AI Studio 原型 `https://ai.studio/apps/31940409-b4c4-420a-8018-a504586355a9`，2026-07-22 读取的该页面 `<main>` 完整文本。
- 视觉真源：当前已实现页面与本目录 MasterGo `page_id=6:20764` 既有基线；对应大模块保留现有视觉，只同步原型内容。
- MasterGo 链接：https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=6%3A20764&devMode=true
- `page_id`：`6:20764`
- `layer_id`：目标页面根画板 `AI快搭-9627717`
- 目标桌面视口：`1440 × 1000` CSS px
- 移动端设计基线：无，本次不实现移动端视觉还原
- 允许修改的页面与区块：`/solutions/ai-overseas/` 页面主体 01–07、Closing CTA
- 禁止修改的区域：公共 `SiteHeader`、`SiteFooter`、Logo、全局字体和其他页面

## 公共资产

- `SiteHeader`：冻结，仅由当前路由高亮“解决方案”
- `SiteFooter`：冻结
- Logo：复用现有公共组件
- 字体：复用项目已确认全局字体
- 其他共享组件：`BookingModal` 复用，不修改

## 用户确认覆盖项

| 项目 | MasterGo 原值 | 用户确认值 | 对话证据 |
|---|---|---|---|
| Section 02 底座描述 | 设计稿对应位置原文 | `统一知识中枢 + 数据飞轮` | 用户明确要求替换“AI Agent OS 智能体内核” |
| 页面内两级方案导航 | 设计稿可见标签，原实现为不可交互文本 | 保持原视觉和文案，改为可抓取、可点击的真实路由链接 | 2026-07-22 浏览器批注指出三个入口不能切换 |
| 原型内容迁移 | 现有 MasterGo 文案 | 页面模块、顺序、文案、指标与主体 CTA 以原型为准，保留现有视觉 | 用户于 2026-07-22 确认 1A / 2A / 3A |

## 分区清单

| 区块 ID | 区块名称 | MasterGo 100% 基线 | 文案台账 | 内容验收 | 视觉验收 |
|---|---|---|---|---|---|
| 00 | 页面内方案导航与 Hero | `g0-g6-2026-07-20/mastergo/g0-hero-section01-100.png` | 完成 | PASS | 已视觉校准 |
| 01 | 出海获客之困 | `g0-g6-2026-07-20/mastergo/g1-pains-section02-100.png` | 完成 | PASS | 已视觉校准 |
| 02 | 解决方案全景 | `g0-g6-2026-07-20/mastergo/g2-overview-section03-100.png` | 完成 | PASS | 已视觉校准 |
| 03 | 五大智能体逐一拆解 | `g0-g6-2026-07-20/mastergo/g3-details-a-100.png`、`g3-details-b-100.png` | 完成 | PASS | 已视觉校准 |
| 04 | 五体协同乘数效应 | `g0-g6-2026-07-20/mastergo/g4-synergy-100.png` | 完成 | PASS | 已视觉校准 |
| 05 | 价值成果 | `g0-g6-2026-07-20/mastergo/g5-value-100.png` | 完成 | PASS | 已视觉校准 |
| 06 | 产品矩阵与可信底座 | `g0-g6-2026-07-20/mastergo/g6-trust-100.png` | 完成 | PASS | 已视觉校准 |
| 07 | 落地路径与 Closing CTA | `g0-g6-2026-07-20/mastergo/g6-paths-100.png`、`g6-cta-footer-100.png` | 完成 | PASS | 已视觉校准 |

## G0～G6 门禁定义

| 门禁 | 成功标准 | 当前结果 |
|---|---|---|
| G0 范围冻结 | 仅修改当前页面主体；公共 Header、Footer、Logo、全局字体不改 | PASS |
| G1 设计证据 | MasterGo 100% 缩放，按区保存桌面基线 | PASS |
| G2 文案台账 | 所有可见文案逐字登记并在渲染 DOM 中复核 | PASS |
| G3 分区实现 | 00～07 与 Closing CTA 结构、样式完整 | PASS |
| G4 同视口校准 | 本地 `1440 × 1000` 分区截图与 MasterGo 基线逐项并排核对 | PASS |
| G5 全页回归 | 当前导航正确，公共组件未污染，`scrollWidth === clientWidth` | PASS |
| G6 工程交付 | lint、TypeScript、生产构建、空白检查全部通过 | PASS |

## 阻塞项

| 区块 | 属性或素材 | 阻塞原因 | 处理状态 |
|---|---|---|---|
| 全页 | 移动端布局 | MasterGo 未提供移动端设计基线 | 本次明确不实现移动端视觉还原 |

## 2026-07-22 用户审查覆盖

- 痛点卡片编号去掉斜线；章节编号原为中文“一、”至“七、”。
- 2026-07-23 用户覆盖：七个大章节序号统一去掉结尾顿号，显示为“一”至“七”；标题其余文字、结构和视觉保持不变。
- 桌面视口 1671×1258；本轮全页截图：`user-review-full-local-1671.png`。

## 2026-07-24 浏览器批注覆盖

- 内容真源：用户在 `http://localhost:3000/solutions/ai-overseas/` 的浏览器逐元素批注，共 12 项。
- 视觉真源：当前页面实现；本轮用户批注覆盖 Hero 换行与宽度、正文 section 纵向间距、指标字号和可信底座布局。
- 目标桌面视口：`1644 × 1258` CSS px。
- 页面内容区块统一为 `padding-block: 60px`、`height: auto`、`min-height: 0`；Hero 和 Closing CTA 不纳入该统一规则。
- 公共 `SiteHeader`、`SiteFooter`、Logo、字体、`BookingModal` 继续冻结。

## 2026-07-25 浏览器批注范围

- 仅调整可信底座六项的左右列顺序，以及 Closing CTA 的桌面端垂直节奏。
- Closing CTA 纳入本轮统一规则：`padding-block: 60px`、`height: auto`、`min-height: 0`。
- 目标视口为 `1576×1258`；移动端不在本轮范围。

## 2026-07-26 浏览器批注范围

- 目标视口：`1576×1258`；仅调整痛点卡编号与标题同行、智能体图标与标签同行、价值指标说明字号。
- 内容真源不变；不新增、不删改可见文案。
- 公共 `SiteHeader`、`SiteFooter`、Logo、字体与 `BookingModal` 保持冻结。
- 开工哈希：Header `5aef1bd27e0a0a57ffdc65dbb80df4ab5cc30aa2c17b1283f3791a17da345bfa`；Footer `8732972918addddddbbcbec095ff0b2b7c34797ea74522bf019427956ceae2ae`；BookingModal `3e143bc70f5cc270231d3961ff5eb1b92481be637c55bcbc36269cfedbb32206`；Logo `4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85`；layout `729e233f1bc80bdd025ef9baf2cb5b8cf21cd0b8a141b99803fee32fa62f71c8`。
