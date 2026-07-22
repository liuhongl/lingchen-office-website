# Mine GEO 专项解决方案范围与证据清单

## 任务范围

- 页面名称：解决方案-产品专项解决方案-Mine GEO
- 内容真源：用户指定 Google AI Studio 原型 `https://ai.studio/apps/31940409-b4c4-420a-8018-a504586355a9`，2026-07-22 读取的 Mine GEO 页面 `<main>` 完整文本。
- 视觉真源：当前已实现页面 `/solutions/products/mine-geo/` 与本目录既有 MasterGo 基线；有对应模块时保留现有视觉，只同步原型内容。
- MasterGo 链接：`https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=24%3A11356&devMode=true&layer_id=33%3A024765`
- `page_id`：`24:11356`
- `layer_id`：`33:024765`
- 根画板：`AI快搭-9636595`
- 目标桌面视口：1440 × 900；原始整页画板 1440×9938 继续作为视觉风格证据
- 移动端：未纳入当前官网范围；不建立基线、不做截图或交互验收，也不声明移动端完成
- 允许修改：`/solutions/products/mine-geo/` 页面、其 metadata、sitemap，以及当前页面专属样式
- 禁止修改：冻结的公共 Header、Footer、Logo、BookingModal、BookingTrigger；其他既有页面

## 公共资产冻结证据

| 资产 | 组件路径 | 基线证据 | 视口 | 开工 SHA-256 | 允许变化 |
|---|---|---|---|---|---|
| SiteHeader | `components/site-header.tsx` | `design-baselines/solution-batch/header-frozen-1440.png` | 1440 | `00a8a2bb1d30db5e77a6abf5825e95497d907d7c9356506f9feac9c5ec35ef76` | 仅路由高亮；用户确认统一冻结基线 |
| SiteFooter | `components/site-footer.tsx` | `design-baselines/solution-batch/footer-frozen-1440.png` | 1440 | `7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb` | 无 |
| Logo | `public/images/lingchen-logo.png` | Header/Footer 运行截图 | 1440 | `4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85` | 无 |
| BookingModal | `components/booking-modal.tsx` | `design-baselines/solution-batch/booking-modal-frozen-1440.png` | 1440 | `19c0a05920c86403b5f33ea5e5261abd6c464d2405cab54d1ef3d9faf42ebd7c` | 无 |
| BookingTrigger | `components/booking-trigger.tsx` | 已有公共基线 | 1440 | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 无 |

## 用户确认覆盖项

| 项目 | MasterGo 原值 | 用户确认值 | 对话证据 |
|---|---|---|---|
| 产品二级 Tab 高亮 | 用户导出整页图误显示 `DeepDoc` 高亮 | 当前路由必须高亮 `Mine GEO` | 用户明确说明这些方案放在产品矩阵 Tab 下，并要求当前产品高亮 |
| 公共 Header / Footer / BookingModal | 开工后检测到哈希变化 | 接受 `public-assets-freeze.md` 当前版本并作为统一冻结基线 | 用户回复“接受” |
| NPA 白皮书/电话 CTA | 设计稿可见 | 仅 NPA 页面隐藏 | 不扩展到本页 |
| 原型内容迁移 | MasterGo 与现有实现中的旧文案和旧模块 | 页面模块、顺序、可见文案、指标和主体 CTA 以原型为准；有对应大模块时保留现有视觉 | 用户于 2026-07-22 确认 `1A、2A、3A` |
| 错字处理 | 原型可能存在疑似错字 | 明显错字按建议修正；有歧义保留原型原文 | 用户于 2026-07-22 确认 `3A` |
| 2026-07-22 页面复审 | 原型迁移后的现有布局 | Hero 正文左缘与公共 Header Logo 左缘对齐；系统架构编号去掉句点；成果区图标缩小并修复拉伸；成果标题跟随图标配色；传统方案与 Mine GEO 闭环增加视觉区分；场景区采用现有 MasterGo 表格语言；落地路径标题增加业务语义图标 | 用户在本地 Mine GEO 页面提交 8 条浏览器批注 |
| 2026-07-22 二次页面复审 | 首轮复审后的本地页面 | Hero 两段正文向右放宽并移除人工断行；五个能力图标保留正式素材并增加四边安全距；痛点标题复用官网正式警示/勾选图标；四张流程卡顶部色条压薄；合作模式徽标改为低高度、宽内边距的胶囊形 | 用户在本地 Mine GEO 页面继续提交 7 条浏览器批注 |

## 转化按钮行为

| CTA 文案 | 区块 | 设计动作 | 实现组件 | 是否为例外 | 例外依据 |
|---|---|---|---|---|---|
| 预约产品演示 → | 01 Hero | 打开预约弹窗 | `BookingTrigger` → `BookingModal` | 否 | 公共预约规则 |
| — | 07 合作模式与 08 Closing | 原型无可见 CTA，页面不保留旧按钮 | — | 是 | 原型内容真源 |

## 分区清单

| 区块 ID | 区块名称 | MasterGo 100% 基线 | 文案台账 | 视觉台账 | 内容验收 | 视觉验收 |
|---|---|---|---|---|---|---|
| 01 | Hero | `01-hero-mastergo.png` | PASS | PASS | PASS | PASS（`01-hero-local.png`、`01-hero-comparison.png`） |
| 02 | 五大能力 · 一个闭环 | `02-capabilities-mastergo.png` | PASS | PASS | PASS | PASS（`02-capabilities-local.png`、`02-capabilities-comparison.png`） |
| 03 | 行业困局与核心痛点 | `03-pain-points-mastergo.png`（MasterGo `图片 3` 1432×904.25） | PASS | PASS | PASS | PASS（`03-pain-points-local.png`、`03-pain-points-comparison.png`） |
| 04 | 核心数字化处理流 | `04-digital-flow-mastergo.png`（MasterGo `图片 4` 1432×1327） | PASS | PASS | PASS | PASS（`04-digital-flow-local.png`、`04-digital-flow-comparison.png`） |
| 05 | 关键竞争优势 | `05-advantages-mastergo.png`（MasterGo `图片 5` 1432×1120.25） | PASS | PASS | PASS | PASS（`05-advantages-local.png`、`05-advantages-comparison.png`） |
| 06 | 可交付商业成果与落地价值 | `06-outcomes-mastergo.png`（MasterGo `图片 13` 1432×1220） | PASS | PASS | PASS | PASS（`06-outcomes-local.png`、`06-outcomes-comparison.png`） |
| 07 | 应用场景示例 | `07-scenarios-mastergo.png`（MasterGo `图片 14` 1432×1329） | PASS | PASS | PASS | PASS（`07-scenarios-local.png`、`07-scenarios-comparison.png`） |
| 08 | 灵活的合作模式 | `08-cooperation-mastergo.png`（MasterGo `图片 15` 1432×955.5） | PASS | PASS | PASS | PASS（`08-cooperation-local.png`、`08-cooperation-comparison.png`） |
| 09 | Closing | `09-closing-mastergo.png`（MasterGo `图片 16` 1432×532.5） | PASS（1 项用户确认隐藏） | PASS | PASS | PASS（`09-closing-local.png`、`09-closing-comparison.png`、`09-closing-diff.png`） |

## 阻塞项

- 原型正文已完整读取，主体区块无内容阻塞；视觉沿用既有 MasterGo 基线与现有实现。
- Header、Footer、BookingModal 按本轮开工哈希冻结，页面代码不覆盖公共组件。

## 2026-07-22 能力图标复审覆盖

- 用户在 `1671×1258` 桌面视口指出 02“五大能力 · 一个闭环”整组图标仍有截断感。
- 本轮不替换五枚正式 PNG，也不修改卡片文字、结构和图标外框；统一将 56×56 图像安全边距从 4px 增至 8px，使可见图形缩至 40×40 并保持居中。
- 该覆盖适用于诊断、治理、创作、分发、监控全部五枚图标；移动端仍不在当前官网验收范围。
