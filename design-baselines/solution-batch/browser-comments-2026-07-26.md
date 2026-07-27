# 2026-07-26 浏览器纯文字批注状态台账

## 范围与证据边界

- 批注时间：2026-07-26 20:27（Asia/Shanghai）。
- 证据类型：用户从旧任务消息中逐条提取的 14 条纯文字要求。
- 禁止事项：不请求、不复用、不引用、不重新提交旧任务中的 14 张图片。
- 当前状态依据：2026-07-26 当前工作区源码、Git diff、`http://127.0.0.1:3000` 实际 DOM 与计算样式。
- 目标桌面视口：`1576 × 1258`；当前浏览器控制层实测 CSS 客户区为 `1425px` 宽，所有计算值同时记录实际客户区。
- 公共 Header、Footer、Logo、BookingModal、BookingTrigger 保持冻结。
- 移动端未纳入当前官网范围。

## 14 项首轮现场映射

| ID | 页面 | 用户要求 | 2026-07-26 当前证据 | 首轮状态 |
|---|---|---|---|---|
| BC-01 | Sales in | Hero 副标题改为“构建您的出海获客能力体系 · 让获客到成交的每一步都可衡量、可复制” | 当前 selector 唯一匹配；DOM 逐字一致，元数据同步 | PASS |
| BC-02 | Sales in | “不是一次性使用……”优势说明一行展示 | 当前正文 `1102 × 26px`，等于一个 `26px` 行高，无横向溢出 | PASS |
| BC-03 | Social Grow | “分钟级”卡片图标在左、文字在右并垂直居中 | 第二批覆盖后四张卡统一为 `.sgs-change__heading > img + strong`；均 `align-items:center`，长说明无裁切 | PASS |
| BC-04 | Social Grow | 场景表每行内容上下居中 | 四行共 12 个单元格均为纵向 flex，`justify-content:center` | PASS |
| BC-05 | 全站 | 同类浅色字体改黑 | 248 条灰色规则已分语义盘点；28 个 section-level selector 项目标色 `#111827`，七路由可见节点回归通过 | PASS |
| BC-06 | Social Grow | “私有化部署或定制”标题下间距调小 | 第二批覆盖后标题 `margin-bottom` 为 `12px`，仍小于原 `23px` | PASS |
| BC-07 | Mine GEO | 标题逐字改为“一、 五大能力 · 一个闭环” | 当前 DOM 逐字一致 | PASS |
| BC-08 | Mine GEO | 页面内容宽度与公共 Header Logo 至“立即体验”宽度一致 | 七个主体 section 内容边界均为 `112.5–1312.5px`，与 Header `1200px` shell 一致 | PASS |
| BC-09 | Mine GEO | 核心功能三卡删除固定高度、不得遮挡 | 2026-07-27 最新 R6-03 明确改为“四张核心功能卡统一固定高度”；当前固定 `358px`，无裁切 | SUPERSEDED：以最新 R6-03 为准 |
| BC-10 | Mine GEO | 核心功能四卡删除固定高度、不得遮挡 | 2026-07-27 最新 R6-03 明确改为“四张核心功能卡统一固定高度”；当前固定 `358px`，无裁切 | SUPERSEDED：以最新 R6-03 为准 |
| BC-11 | Mine GEO | 合作模式 1 RaaS 卡片高度调小 | 第二批三卡内容驱动覆盖后模式 1 为 `223px`，内容溢出为 0 | PASS |
| BC-12 | Mine GEO | “托管运营服务”标题放到“模式 2”后面 | 徽标与标题同排，中心差 `0px` | PASS |
| BC-13 | AI获客 Harness | “海外客户开发与线索筛选”卡片高度调低 | 第二批表格覆盖后首行为 `158px`，仍低于原 `160.98px`，内容溢出为 0 | PASS |
| BC-14 | AI获客 Harness | “RaaS 模式 / 托管运营”标题放到“模式 1”后面 | 徽标与标题同排，中心差 `0px` | PASS |

## 首轮门禁

- `pnpm mastergo:check sales-in`：PASS。
- `pnpm mastergo:check social-grow`：PASS。
- `pnpm mastergo:check mine-geo`：PASS。
- `pnpm mastergo:check ai-acquisition-harness`：PASS。
- 以上只证明既有证据结构闭环，不代表本批 14 项已完成。
- 现有四页证据目录没有有效 `BLOCKED`、`待核对` 或 `未完成` 条目；除 BC-09/10 被 2026-07-27 最新固定高度要求覆盖外，其余首轮项均为 PASS。

## DOM 定位复核

- 用户提供的 BC-01–BC-14 精确 selector 已在对应当前页面逐项执行，14 项均唯一匹配，`count=1`。
- 每个匹配节点的目标原文或邻近文本与用户提供内容一致；本轮无需替换 selector。
- 后续 DOM 改动只允许在对应组件内部增加最小必要包装；验收时优先复用原 selector，若因已授权包装失效，再记录新 selector。

## 实施后的 selector 更新

- BC-12 因“模式 2 / 托管运营服务”同排所需包装，旧 selector 失效；新 selector：`article.mgs-cooperation-card--purple:nth-of-type(2) > div.mgs-cooperation-card__heading > h3`，当前唯一匹配。
- BC-14 因“模式 1 / RaaS 模式 / 托管运营”同排所需包装，旧 selector 失效；新 selector：`article.ahs-deployment-card:nth-of-type(1) > header.ahs-deployment-card__heading > h3`，当前唯一匹配。

## 同视口证据

- Sales in：`output/playwright/browser-comments-2026-07-26/01-sales-in-advantages-1576x1258.png`
- Social Grow：`02-social-grow-change-1576x1258.png`、`03-social-grow-scenarios-1576x1258.png`、`04-social-grow-cooperation-1576x1258.png`
- Mine GEO：`05-mine-geo-width-1576x1258.png`、`06-mine-geo-flow-1576x1258.png`、`07-mine-geo-cooperation-1576x1258.png`
- AI 获客 Harness：`08-ai-harness-applications-1576x1258.png`、`09-ai-harness-deployment-1576x1258.png`
- 上述文件均位于 `output/playwright/browser-comments-2026-07-26/`；当前批次为用户覆盖后的同视口视觉校准，不新增旧 MasterGo 严格 1:1 声明。

## 最终门禁

- `pnpm lint`：PASS。
- `pnpm exec tsc --noEmit`：PASS。
- `pnpm build`：PASS，74 个静态页面生成完成。
- `git diff --check`：PASS。
- `pnpm mastergo:check contact|sales-in|social-grow|mine-geo|ai-acquisition-harness|deepdoc`：全部 PASS。

## 2026-07-26 第二批覆盖后的再回归

- BC-01–BC-02：Hero 文案逐字一致；长说明 1102×26px，`white-space:nowrap`，横向溢出 0。
- BC-03–BC-06：四张改变卡统一为图标在前标题在后；场景单元格继续垂直居中；浅色 subtitle 为 `rgb(17,24,39)`；合作标题下距为 12px。
- BC-07–BC-12：标题逐字一致；主体内容仍使用 1200px shell；核心功能三、四内容无裁切；模式 1 为 223px；模式 2 标题仍与徽标同排。
- BC-13–BC-14：表格化后首行应用场景为 158px，仍低于最初 160.98px 且无裁切；模式 1 标题仍与徽标同排。
- 第二批完成后的统一最终命令：lint、tsc、build、diff check 与 contact / non-performing-assets / legal-ai / sales-in / social-grow / mine-geo / ai-acquisition-harness 七个 `mastergo:check` 全部 PASS。
