# 首页逐字文案台账

> MasterGo `6:2027` 100% 分区证据与页面实际渲染字符串已完成全页复核。相邻 `span/strong` 拆分仍按一个可见句子核对。

| 文本 ID | 区块 | 节点范围 | MasterGo 原文证据 | 实现位置 | 渲染核对 |
|---|---|---|---|---|---|
| H-001–H-009 | Header / Hero | 导航、眉题、主标题、双产品说明、双使命、双 CTA | 首页 100% Hero 基线 | `components/site-header.tsx`、`app/page.tsx` | PASS |
| H-010–H-024 | Problems | 标题、导语、四类问题、两张业务方向卡及要点 | `target-problems` | `app/page.tsx` | PASS |
| H-025–H-040 | Value | 理念标题/说明、四组指标标题/正文、三项 ribbon | `target-value-title`、`target-ribbon` | `app/page.tsx` | PASS |
| H-041–H-060 | Agent OS | 标题/说明、中心核、01–06 编号/标题/标签、三张定位卡；中心核按最新用户覆盖恢复 | `target-agent-node`、MasterGo 全画板、2026-07-23 用户最新覆盖 | `app/page.tsx` | PASS |
| H-084–H-089 | Agent OS 节点说明 | 01–06 节点说明文字 | Google AI Studio 交互原型，2026-07-23 从预览 iframe `<main>` 提取 | `app/page.tsx` | PASS |
| H-061–H-064 | CTA | 标题、说明、按钮 | MasterGo 全画板 | `app/page.tsx` | PASS |
| H-065–H-083 | Footer | 三列标题、全部链接/联系信息、版权与备案 | Header/Footer 公共基线 | `components/site-footer.tsx` | PASS |
| H-090 | Hero 右上口号 | 明道 · 优术 · 取势 · 合众 | 2026-07-23 用户覆盖 + Google AI Studio 首页原型 | `components/hero-motto.tsx`、`app/page.tsx` | PASS |

## 长文案核对

- Problems 导语及四条问题正文：首句、末句、句数和标点与设计基线一致。
- 两张业务方向卡、四张价值卡及三张定位卡：未发现增字、漏句或语义补写。
- 渐变标题和局部加粗只拆 DOM，不改变可见原文。

## 用户确认覆盖

- 2026-07-21：Agent OS 01 节点标题使用“ICP模型构建”。
- 2026-07-21：愿景强调文案使用“与企业共赴AI生产力时代，为您的商业结果服务。”。
- 2026-07-23：按用户要求补齐交互原型中的 Agent OS 六个节点说明：
  - H-084：目标客户或逾期群体千人千面AI画像
  - H-085：大模型思维链(CoT)流转决策
  - H-086：业务策略与个性化话术沉淀
  - H-087：原因结构化自动归档诊断
  - H-088：持续反思与递归进化，越来越懂您的业务。
  - H-089：完成意向线索挖掘或逾期资产回款

## 门禁结论

- 覆盖：原 MasterGo 全页可见文本节点；本轮新增 H-084–H-089 已与浏览器实际渲染逐字复核
- 增字 / 漏句 / 误录：0
- 结论：PASS
- 2026-07-23 Agent OS 视觉重设计仅调整 DOM 分组与布局；浏览器再次读取 01–06 的编号、标签、标题和说明共 24 个字段，与本台账逐项一致，未修改任何可见文案。
- 2026-07-23 用户确认删除与区块标题重复的蓝紫控制中枢，删除其中 `LINGCHEN AI`、`自进化 Agent OS`、`智能体内核` 三个文本节点；该删除属于用户最高优先级内容覆盖，六步闭环及下方三张品牌卡文案不变。
- 2026-07-23 用户随后明确要求恢复“上个圆环的版本”，该最新覆盖同时恢复蓝紫中心核及 `LINGCHEN AI`、`自进化 Agent OS`、`智能体内核` 三个历史文本节点；六个节点说明与下方三张品牌卡文案不变。

## 2026-07-24 浏览器批注覆盖台账

| 文本 ID | 区块 | 用户确认逐字文案 | 实现位置 | 核对状态 |
|---|---|---|---|---|
| H-091 | Hero 主标题第一行 | 让 AI Agent 成为企业商业结果增长 | `app/page.tsx` | PASS |
| H-092 | Hero 产品说明标题 | 灵宸 AI Agent | `app/page.tsx` | PASS |
| H-093 | Hero 产品说明正文 | 能自主执行复杂业务流程、按可量化指标交付商业结果、端到端的企业级智能体（AI Agent）架构与产品。 | `app/page.tsx` | PASS |
| H-094 | Problems 导语 | 在企业出海获客、批量债权催缴、法律案件拓展等领域中的每一个业务流程里，都在大量消耗人力，效率低、成本高、影响业务增长与现金流..... | `app/page.tsx` | PASS |
| H-095 | Problems 总结 | 把高频、重复的繁重工作交给 AI Agent 高并发、智慧化、批量、合规地执行，让人专注关键判断与商业决策。 | `app/page.tsx` | PASS |
| H-096 | Value 理念标题 | 我们的产品理念：把最先进的AI技术转化为可交付商业结果的生产力。 | `app/page.tsx` | PASS |
| H-097 | Agent OS 说明 | 数据飞轮、记忆科学与认知机制、持续学习深度结合，自我反思总结、递归式自我进化能力，自研金融级复杂任务决策架构与数据安全架构，持续交付商业结果、持续提升ROI。 | `app/page.tsx` | PASS |
| H-098 | Closing CTA 标题 | 开启您的 AI Agent生产力之旅 | `app/page.tsx` | PASS |
| H-099–H-105 | Footer 产品方案 | Sales in；Social Grow；Mine GEO；AI销售获客Harness；DeepDoc；Recov AI；DeepLaw | `components/site-footer.tsx` | PASS |
| H-106 | Footer 资源中心 | 解决方案 | `components/site-footer.tsx` | PASS |
| H-107 | Footer / 联系页邮箱 | jason@alshinelaw.com | `components/site-footer.tsx`、`app/contact/page.tsx` | PASS |

- Hero 眉题、Problems 总结和 Value ribbon 仅调整视觉字号，逐字文案保持不变。
- “查看产品矩阵”可见文案保持不变，交互目标覆盖为 `/products/`。
- H-091 严格采用用户引号内原话，不自行增加“的”。
- 浏览器读取首页与 Footer 实际渲染文本后逐项复核，H-091–H-107 增字、漏句、误录为 0。

## 2026-07-24 Hero 与 Problems 浏览器批注覆盖

| 文本 ID | 区块 | 用户确认逐字文案 / 顺序 | 实现位置 | 核对状态 |
|---|---|---|---|---|
| H-108 | Hero Agent 徽章 | 为您的商业结果服务 | `app/page.tsx` | PASS |
| H-109 | Hero 使命第一项 | 助力中企走向世界 | `app/page.tsx` | PASS |
| H-110 | Hero 使命第二项 | 助力信用中国建设 | `app/page.tsx` | PASS |
| H-111 | Problems 紫色业务卡第二条 | 控风险：话术全程合规、数据留痕 | `app/page.tsx` | PASS |
| H-112 | 公共 Header 品牌名称 | 灵宸智能 | `components/site-header.tsx` | PASS |

- H-109/H-110 仅交换现有两条文案的位置，不新增文本。
- H-111 严格采用用户引号内文案，不补写“无纠纷”等原句内容。
- `1616 × 1258` 实际 DOM 快照逐项复核：H-108–H-111 均存在且顺序正确；旧文案“控风险：话术绝对合规、留痕无纠纷”不存在。
- H-112 来自 2026-07-24 用户当前浏览器批注；Logo 图片与 `alt` 不变，只新增这一处可见文本。
- 浏览器 DOM 快照复核：品牌链接中只新增一处“灵宸智能”，导航文案、顺序和 CTA 文案均未变化。

## 2026-07-27 浏览器批注第四批内容门禁

- R4-28、R4-29 只调整首页价值卡密度和 Agent OS 区块间距；四张价值卡、Agent OS 标题、说明、六节点及下方品牌卡全部原文保持不变。状态：CONFIRMED。
# 2026-07-27 浏览器批注覆盖

| 文本 ID | 区块 | 修改前 | 用户确认覆盖 | 代码位置 | 状态 |
|---|---|---|---|---|---|
| HOME-20260727-01 | 首屏 H1 | 让 AI Agent 成为企业商业结果增长 / 新质生产力 | 让 AI Agent 成为企业商业结果增长的 / 新质生产力 | `app/page.tsx` | READY |
