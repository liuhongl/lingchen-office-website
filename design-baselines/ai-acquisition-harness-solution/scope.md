# AI 获客 Harness 专项解决方案范围与证据清单

## 任务范围

- 页面名称：解决方案-产品专项解决方案-AI获客Harness
- 内容真源：用户指定 Google AI Studio 原型 `https://ai.studio/apps/31940409-b4c4-420a-8018-a504586355a9`，2026-07-22 读取的 AI 获客 Harness 页面 `<main>` 完整文本。
- 视觉真源：当前已实现页面 `/solutions/products/ai-acquisition-harness/` 与本目录既有 MasterGo 基线；有对应模块时保留现有视觉，只同步原型内容。
- MasterGo 链接：`https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=17%3A4896&devMode=true`
- `page_id`：`17:4896`
- 根画板：`AI快搭-9636697`
- 目标桌面视口：1440 × 900；现有整页设计证据继续作为视觉风格证据
- 移动端：未纳入当前官网范围；不建立基线、不做截图或交互验收，也不声明移动端完成
- 允许修改：`/solutions/products/ai-acquisition-harness/` 页面、专属 metadata、sitemap 与页面专属样式
- 禁止修改：冻结的公共 Header、Footer、Logo、BookingModal、BookingTrigger；其他既有页面

## 公共资产冻结证据

| 资产 | 组件路径 | SHA-256 | 允许变化 |
|---|---|---|---|
| SiteHeader | `components/site-header.tsx` | `00a8a2bb1d30db5e77a6abf5825e95497d907d7c9356506f9feac9c5ec35ef76` | 仅路由高亮；用户确认统一冻结基线 |
| SiteFooter | `components/site-footer.tsx` | `7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb` | 无 |
| Logo | `public/images/lingchen-logo.png` | `4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85` | 无 |
| BookingModal | `components/booking-modal.tsx` | `19c0a05920c86403b5f33ea5e5261abd6c464d2405cab54d1ef3d9faf42ebd7c` | 无 |
| BookingTrigger | `components/booking-trigger.tsx` | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 无 |

## 用户确认覆盖项

| 项目 | MasterGo 原值 | 用户确认值 |
|---|---|---|
| 产品二级 Tab 高亮 | 目标设计稿上下文可能显示其他产品 | 当前路由高亮 `AI获客Harness` |
| 公共 Header / Footer | 设计稿与当前公共组件可能存在差异 | 复用用户已接受的新冻结基线 |
| NPA 白皮书/电话 CTA | NPA 专属覆盖 | 不扩展到本页 |
| 观看视频介绍 | Hero 次 CTA | 2026-07-21 用户明确授权隐藏；不渲染按钮、链接或隐藏文案 |
| 原型内容迁移 | MasterGo 与现有实现中的旧文案和旧模块 | 页面模块、顺序、可见文案、指标和主体 CTA 以原型为准；有对应大模块时保留现有视觉 | 用户于 2026-07-22 确认 `1A、2A、3A` |
| 错字处理 | 原型可能存在疑似错字 | 明显错字按建议修正；有歧义保留原型原文 | 用户于 2026-07-22 确认 `3A` |

## 转化按钮行为

| CTA 文案 | 区块 | 实现 | 状态 |
|---|---|---|---|
| 预约产品演示 | 01 Hero | `BookingTrigger` → 公共 `BookingModal` | PASS：公共 `[role=dialog][aria-modal=true]`、滚动锁定、Escape 与焦点回归均已验证 |
| 观看视频介绍 | 01 Hero | 2026-07-21 用户明确授权隐藏 | 不渲染 |
| — | 12 Closing | 原型无可见 CTA | 不渲染额外按钮 |

## 分区清单

| 区块 ID | 区块名称 | MasterGo 基线 | 文案台账 | 视觉台账 | 内容验收 | 视觉验收 |
|---|---|---|---|---|---|---|
| 01 | Hero | `01-hero-mastergo-100.png`（1440×681） | PASS | PASS；4 枚原始 SVG 已导出并登记 | PASS | PASS（`01-hero-comparison.png`；视频按钮按用户覆盖隐藏） |
| 02 | 一图读懂 | `02-overview-mastergo-100.png`（1440×798） | PASS | PASS；5 枚原始 SVG 已登记 | PASS | PASS（`02-overview-comparison.png`） |
| 03 | 行业困局与核心痛点 | `03-pains-mastergo-100.png`（1440×838） | PASS | PASS；2 枚原始状态 SVG 已登记 | PASS | PASS（`03-pains-comparison.png`） |
| 04 | 核心数字化处理流 | `04-flow-mastergo-100.png`（1440×688） | PASS | PASS；4 枚原始 SVG 已导出并登记 | PASS | PASS（`04-flow-comparison.png`） |
| 05 | 关键竞争优势 | `05-advantages-mastergo-100.png`（1440×1037） | PASS | PASS；卡片与底座原始 SVG 已导出 | PASS | PASS（`05-advantages-comparison.png`） |
| 06 | 可交付商业成果与落地价值 | `06-outcomes-mastergo-100.png`（1440×823） | PASS | PASS | PASS | `06-outcomes-local.png` / `06-outcomes-comparison.png` / `06-outcomes-diff.png` |
| 07 | 价值跃迁模型 | `07-value-transition-mastergo-100.png`（1440×578） | PASS | PASS；无图标素材 | PASS | `07-value-transition-local.png` / `07-value-transition-comparison.png` / `07-value-transition-diff.png` |
| 08 | 部分应用场景示例 | `08-applications-mastergo-100.png`（1440×1177） | PASS | PASS；无图标素材 | PASS | `08-applications-local.png` / `08-applications-comparison.png` / `08-applications-diff.png` |
| 09 | 经典落地案例 | `09-cases-mastergo-100.png`（1440×442） | PASS | PASS；电话原始 SVG、地球完整像素资源已登记 | PASS | `09-cases-local.png` / `09-cases-comparison.png` / `09-cases-diff.png` |
| 10 | 部署模式 | `10-deployment-mastergo-100.png`（1440×591） | PASS | PASS；无图标素材 | PASS | `10-deployment-local.png` / `10-deployment-comparison.png` / `10-deployment-diff.png` |
| 11 | 服务保障条 | `11-service-strip-mastergo-100.png`（1440×328） | PASS | PASS；无图标素材 | PASS | `11-service-strip-local.png` / `11-service-strip-comparison.png` / `11-service-strip-diff.png` |
| 12 | 收尾 CTA | `12-closing-mastergo-100.png`（1440×239） | PASS；白皮书/电话引导按用户确认隐藏 | PASS；无图标素材 | PASS | `12-closing-local.png` / `12-closing-comparison.png` / `12-closing-diff.png` |
| 13 | 设计稿尾部留白 / 公共 Footer 冲突记录 | `13-footer-mastergo-100.png`（1440×189） | 设计稿无可见 Footer 文案 | 公共 Footer 冻结 | 冻结复用 | PASS：主体后直接复用冻结公共 Footer；不以设计稿留白覆盖公共资产 |

## 阻塞项

- 01 Hero 已清零阻塞并完成 G4 内容/视觉双验收。
- 02 一图读懂：内容与视觉双验收 PASS；Local SHA `bbe69353cad11addedb2a8451c91ae0f1f13dc3744363786d4bc3b943cee7aa7`，Comparison SHA `6a234a4ad7f472885232e18c8443c0e14fe0c52e31258c475dc0bd864b06eaee`，Diff SHA `e426d42711231cc30364b741fbc3260aa1d475c14fa84e43adc96a2d4e27f686`。
- 03 行业困局：内容与视觉双验收 PASS；Local SHA `f842bd1929d5c00cb2e7b10e0b49cf67c7a94562e03e55bb07758c41afe43f6d`，Comparison SHA `a8c7353b848e11bce671fe3f62ecae6295b338a69e71c1b3ba0fc3b3ab4cdb81`，Diff SHA `b5f1e7b394583cd872650274f8606d068315ff72fd7a16f94a5ffcb6416e7d66`。
- 04 核心数字化处理流：内容与视觉双验收 PASS；Local SHA `2d3cab4847c09fab8bc93960d5cfff41469af3c5afd6052eb7dd19731b75ad8b`，Comparison SHA `6eebe6f6756d3f12c6427255500f2a9ea2273711cfa75529b5442efe5f6465ca`，Diff SHA `3e1adbe363eae5890de1a9690fd2a94ba1f7c7e4e0f06ef03495f4508d1d0624`。
- 05 关键竞争优势：内容与视觉双验收 PASS；Local SHA `24d28a7e6919ced413c41ebf65b686d7238d3624a40e80b0f9fdb58c4d85b060`，Comparison SHA `7ad6c4f03628e5ae44780ed93d7a5b79733502dacb5eb7363b56261b6089982b`，Diff SHA `6e7a32a412e822ae0b8045a95622ff530c6814f5efa1360f099e96a5c4a9efa2`。
- 06–12 均已完成逐区内容审计和 1440px 同视口视觉对比；证据文件及 SHA-256 已登记在 `visual-ledger.md`。
- 全页主体回归 PASS：设计与本地主体均为 1440×8220；本地 SHA `2aa63c059f7ea5b07d7d6f5392266141847658d033bb8a2391cec46036fa2642`，并排对比 SHA `bab690d730d7d386994aacaf087cf8715f14d692efd29ceb9465ffe503a65d86`，差异图 SHA `5ed6e5b635415f4ae8e5c6830aad4eae48179e9a0d5ebe87f157df1d3ec9f8da`。
- 原型正文已完整读取，主体区块无内容阻塞；视觉沿用既有 MasterGo 基线与现有实现。
- 素材合规历史例外仍保留：09 案例区地球为设计稿中不可单独导出的复合图层，使用同一 1440px 基线的 40×40 完整像素裁片。

## 2026-07-22 用户页面复审覆盖

| 区块 | 用户确认覆盖 | 实施边界 |
|---|---|---|
| 02 一图读懂 | “放心采用的底气”图标语义不匹配，优化 | 不改卡片文字与布局；以安全采用语义替换该枚图标 |
| 05 技术底座 | 三个“对比”标题不要折行 | 不改逐字文案；只调整标题列宽和断行策略 |
| 07 价值跃迁 | 表格增加“维度 / 传统做法 / Harness 闭环”表头 | 表头文字来自既有内容台账；不改五行数据 |

本次仍只验收桌面端；公共 Header、Footer、Logo、BookingModal 与 BookingTrigger 继续冻结。

## 2026-07-22 Hero 用户审查覆盖

- 视口：1671×1258；只处理桌面端。
- 扩宽两段正文并保持两行；“千人千面”使用蓝色强调；CTA 上移并保留下方呼吸空间。
- 本轮全页截图：`user-review-full-local-1671.png`。
