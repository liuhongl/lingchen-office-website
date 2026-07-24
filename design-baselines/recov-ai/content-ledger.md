# Recov AI 文案台账

| ID | 区块 | MasterGo 原文节点 | 代码位置 | 状态 |
|---|---|---|---|---|
| R-T01 | Hero | 返回产品矩阵 / Recov AI；AI Agent；企业级解决方案；Recov AI；AI不良资产处置 Agent——重塑不良资产处置，提升企业服务水平，交付现金流回收结果。；立即预约体验产品 | `page.tsx` | PASS（两个图标另见视觉台账） |
| R-T02 | 产品定位 | 标题、定位句、两段产品说明、过去/现在两张对比卡全部按 `02-positioning-mastergo.png` 逐字录入；长文首句“Recov Agent 全国首个全链路”、末句“助力信用中国建设。” | `page.tsx` | PASS |
| R-T02A | 产品定位区标题 | 产品定位 | 用户 2026-07-23 确认删除标题标签，定位正文与对比内容保留 | `page.tsx` | REMOVED |
| R-T03 | 行业压力 | 60%+；数月+；零容忍及三组说明 | `pressures` | PASS |
| R-T04 | 业务流 | 重构关键业务流及四项流程 | `flows` | PASS |
| R-T05 | 生命周期 | 六大核心处理环节及说明 | `stages` | PASS |
| R-T06 | 能力矩阵 | 全链路多智能体协作与六项能力 | `capabilities` | PASS |
| R-T07 | Agent 基座 | 完善的 AI Agent 能力基座支撑及完整基座说明 | `page.tsx` | PASS |
| R-T08 | 产品价值 | ↑300%；↓50%；0起；RaaS 及四项价值 | `metrics` | PASS |
| R-T09 | 商业实效 | 降本增效；传统人工与 Recov AI 对照；三项交付资产；流程条 | `page.tsx` | PASS |
| R-T10 | 落地场景 | 六类场景及两个典型示例 | `scenes` | PASS |
| R-T11 | 合作模式 | RaaS、私有化、SaaS/API 三种模式 | `page.tsx` | PASS |
| R-T12 | Closing | 开启您的智能催收之旅；副标题；立即预约体验产品 | `page.tsx` | PASS |

已将 12 个区块的 MasterGo 分区基线、OCR 台账与浏览器实际渲染文本逐项复核；设计稿中疑似不规范措辞仍按原文保留，不擅自润色。
## 2026-07-22 原型内容同步批次

- 内容真源：Google AI Studio 当前原型，完整逐字快照见 `prototype-content-snapshot.md`。
- 视觉真源：当前产品详情实现与已归档 MasterGo 基线；本批次不复刻原型视觉。
- 执行规则：1A（模块、顺序、文案、指标、主 CTA 以原型为准）/ 2A（明显错字与标点修正，歧义原文保留）/ 3A（批量实施，仅冲突时暂停）。
- 公共 `SiteHeader`、`SiteFooter`、Logo、`ProductBreadcrumb`、`BookingModal`、`BookingTrigger` 冻结复用。
- 当前范围：桌面端；移动端未纳入当前官网实现与验收范围。
- 原型与本地的分区差异、纠错决定和代码位置见 `prototype-vs-local-review.md` 与 `typo-review.md`。

## 2026-07-22 产品矩阵统一覆盖

- 可见顺序编号去掉前导零：`01`–`09` 显示为 `1`–`9`，不改动指标、日期和技术参数。
- 原型已有的大标题、小标题不得省略；标题文案以原型为准，标题视觉沿用 MasterGo 蓝色强调与既有官网层级。
- 页面模块之间使用统一桌面端上下节奏，不允许固定高度导致内容重叠或标题被遮挡。

## 2026-07-23 浏览器批注

- 业务流编号实际渲染为 `STEP 1`、`STEP 2`、`STEP 3`、`STEP 4`；仅删除前导零，流程标题与说明文案不变。
- 顶部面包屑的产品名与说明文案不变，仅由 compact 形态切换为全站标准形态。
| 2026-07-24-AGENT | 能力基座 | 完善的AI Agent 能力基座支撑 | 用户浏览器批注 11 | `app/products/recov-ai/page.tsx` | PASS |
| 2026-07-24-SCENE | 场景表 | 教育培训分期贷款、医疗美容消费违约分期等各类分期场景...... | 用户浏览器批注 16 | `app/products/recov-ai/page.tsx` | PASS |
