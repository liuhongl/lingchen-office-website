# Social Grow 专项解决方案范围与证据清单

## 任务范围

- 页面名称：解决方案-产品专项解决方案-Social Grow
- 内容真源：用户指定 Google AI Studio 原型 `https://ai.studio/apps/31940409-b4c4-420a-8018-a504586355a9`，2026-07-22 读取的 Social Grow 页面 `<main>` 完整文本。
- 视觉真源：当前已实现页面 `/solutions/products/social-grow/` 与本目录既有 MasterGo `page_id=33:024764` 基线；有对应模块时保留现有视觉，只同步原型内容。
- MasterGo 链接：`https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=33%3A024764&devMode=true`
- `page_id`：`33:024764`
- 根画板：`AI快搭-9636620`
- 目标桌面视口：1440 × 900；既有原始整页画板 1440×7325 继续作为视觉风格证据
- 移动端：未纳入当前官网范围；不建立基线、不做截图或交互验收，也不声明移动端完成
- 允许修改：`/solutions/products/social-grow/` 页面、其 metadata、sitemap，以及当前页面专属样式
- 禁止修改：冻结的公共 Header、Footer、Logo、BookingModal、BookingTrigger；其他既有页面

## 公共资产冻结证据

| 资产 | 组件路径 | 基线证据 | 视口 | 开工 SHA-256 | 允许变化 |
|---|---|---|---|---|---|
| SiteHeader | `components/site-header.tsx` | `design-baselines/solution-batch/header-frozen-1440.png` | 1440 | `00a8a2bb1d30db5e77a6abf5825e95497d907d7c9356506f9feac9c5ec35ef76` | 仅路由高亮；用户确认统一冻结基线 |
| SiteFooter | `components/site-footer.tsx` | `design-baselines/solution-batch/footer-frozen-1440.png` | 1440 | `7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb` | 无 |
| Logo | `public/images/lingchen-logo.png` | Header/Footer 运行截图 | 1440 | `4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85` | 无 |
| BookingModal | `components/booking-modal.tsx` | `design-baselines/solution-batch/booking-modal-frozen-1440.png` | 1440 | `19c0a05920c86403b5f33ea5e5261abd6c464d2405cab54d1ef3d9faf42ebd7c` | 无 |
| BookingTrigger | `components/booking-trigger.tsx` | 已有公共基线 | 1440 | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 无 |

### 当前交付哈希复核

| 资产 | 当前 SHA-256 | 与本页开工基线 |
|---|---|---|
| SiteHeader | `00a8a2bb1d30db5e77a6abf5825e95497d907d7c9356506f9feac9c5ec35ef76` | 一致；PASS |
| SiteFooter | `7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb` | 一致；PASS |
| Logo | `4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85` | 一致；PASS |
| BookingModal | `19c0a05920c86403b5f33ea5e5261abd6c464d2405cab54d1ef3d9faf42ebd7c` | 一致；PASS |
| BookingTrigger | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 一致 |

## 用户确认覆盖项

| 项目 | MasterGo 原值 | 用户确认值 | 对话证据 |
|---|---|---|---|
| 产品二级 Tab 高亮 | 用户导出整页图误显示 `DeepDoc` 高亮 | 当前路由必须高亮 `Social Grow` | 用户明确说明这些方案放在产品矩阵 Tab 下，并以 Sales in 举例要求当前产品高亮 |
| 公共 Header / Footer / BookingModal | 开工后检测到哈希变化 | 接受 `public-assets-freeze.md` 当前版本并作为统一冻结基线 | 用户回复“接受” |
| NPA 白皮书/电话 CTA | 设计稿可见 | 仅 NPA 页面隐藏 | 不扩展到本页 |
| 原型内容迁移 | MasterGo 与现有实现中的旧文案 | 页面模块、顺序、可见文案、指标和主体 CTA 以原型为准；有对应大模块时保留现有视觉 | 用户于 2026-07-22 确认 `1A、2A、3A` |
| 错字处理 | 原型可能存在疑似错字 | 明显错字按建议修正；有歧义保留原型原文 | 用户于 2026-07-22 确认 `3A` |
| 02–04 局部视觉审查 | 旧 MasterGo 基线为卡片弹性图标、闪电图标、区块标题贴顶、双列流程 | 图标固定右上；03/04 标题增加顶部间距；解决方案改为对号并与挑战文字列对齐；流程改为 1→6 单列纵向时间线 | 用户于 2026-07-22 在本地页面逐项批注 1–6 |
| 02 底部留白复审 | 旧区块固定高度 430px，卡片下方约 198px 空白 | 改为内容驱动高度，卡片下方保留 64px | 用户于 2026-07-22 批注“下间距太高了” |

## 转化按钮行为

| CTA 文案 | 区块 | 设计动作 | 实现组件 | 是否为例外 | 例外依据 |
|---|---|---|---|---|---|
| 预约产品演示 | 01 Hero | 打开预约弹窗 | `BookingTrigger` → `BookingModal` | 否 | 公共预约规则 |
| — | 09 Closing | 原型无 Closing CTA，页面不保留额外预约按钮 | — | 是 | 原型内容真源 |

## 分区清单

| 区块 ID | 区块名称 | MasterGo 100% 基线 | 文案台账 | 视觉台账 | 内容验收 | 视觉验收 |
|---|---|---|---|---|---|---|
| 01 | Hero | `01-hero-mastergo.png` | PASS | PASS | PASS | PASS（`01-hero-comparison.png`） |
| 02 | 一图读懂 | `02-change-mastergo.png` | 完整 | 完整，原始 SVG 组 26/29/32/35 | PASS | PASS（`02-change-local.png`、`02-change-comparison.png`） |
| 03 | 行业困局与核心痛点 | `03-problems-mastergo.png` | 完整 | 完整，原始 SVG 组 60/80 | PASS | PASS（`03-problems-local.png`、`03-problems-comparison.png`） |
| 04 | 核心数字化处理流 | `04-flow-mastergo.png` | 完整 | 完整，原始 SVG 组 132 | PASS | PASS（`04-flow-local.png`、`04-flow-comparison.png`） |
| 05 | 关键竞争优势 | `05-advantages-mastergo.png`、`05-advantages-mastergo-section.png` | 完整 | 完整，原始 SVG 组 844/848/852/856/860/864 | PASS | PASS（`05-advantages-local.png`、`05-advantages-comparison.png`） |
| 06 | 商业成果与落地价值 | `06-results-mastergo.png`、`06-results-mastergo-section.png` | 完整 | 完整，原始 SVG 组 889/893/897/901 | PASS | PASS（`06-results-local.png`、`06-results-comparison.png`） |
| 07 | 应用场景 | `07-scenarios-mastergo.png`、`07-scenarios-mastergo-section.png` | 完整 | 完整，原始 SVG `图标 31` | PASS | PASS（`07-scenarios-local.png`、`07-scenarios-comparison.png`） |
| 08 | 合作模式 | `08-cooperation-mastergo.png`、`08-cooperation-mastergo-section.png` | 完整 | 完整，无独立图标 | PASS | PASS（`08-cooperation-local.png`、`08-cooperation-comparison.png`） |
| 09 | 选择理由与 Closing | `09-why-mastergo-section.png`、`09-closing-mastergo-section.png` | 完整 | 完整，原始 SVG `图标 32` | PASS | PASS（`09-why-comparison.png`、`09-closing-comparison.png`） |

## 阻塞项

- 原型正文已完整读取，主体 01–09 无内容阻塞；视觉沿用既有 MasterGo 基线与现有实现。
- 公共资产已按本轮开工值复核：Header `00a8a2bb...`、Footer `7f609bb2...`、Logo `4bdd8b35...`、BookingModal `19c0a059...`、BookingTrigger `cf6bfae2...`。
