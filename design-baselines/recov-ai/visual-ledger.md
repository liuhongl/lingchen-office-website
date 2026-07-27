# Recov AI 视觉台账

| ID | 区块 | 视觉证据 | 实现 | 状态 |
|---|---|---|---|---|
| R-V01 | 全页 | 1440×7709；SHA-256 `37e80770414e9f3bdd6757548191a13f477f8e760ea926a8b36ad5d412ad229f` | `full-mastergo-1440x7709.png` | PASS |
| R-V02 | Hero | 1440 视口：Header 0–65px；Hero 65–375px；内容左边界 112px；标题 Inter 48/48、bold、-1.2px；白色 Recov + 蓝色 AI；右侧蓝色 CTA；资源面板 `图标 2`（机器人 12×10.2）、`图标 3`（日历 14×16） | `.recov-hero`；`hero-agent.svg` / `hero-booking.svg` | PASS |
| R-V03 | 产品定位 | 白底、强调卡、红蓝双卡；标题图标 `组 7` SVG；过去/现在均为 32×32、8px 圆角浅红/浅蓝底图标框，内部图标 14×14 | `.recov-positioning` / `.recov-contrast b img` | PASS |
| R-V04 | 行业压力 | 浅灰背景、3 列、蓝线、蓝蓝红指标 | `.recov-pressure` | PASS |
| R-V05 | 业务流/生命周期 | 白灰分区、4 列与 3×2 卡片；业务流 4 个图标统一使用 93×93 外部资源画布，内部蓝色图标框 48×48；自动化文书使用原始 `图标 9` 并补同尺寸蓝色基础几何容器；`组 13/56/60/64/68` 均按原图层导出 SVG | `.recov-flow/.recov-stages` / `.recov-flow-icon` | PASS |
| R-V06 | 能力/基座 | 2 列矩阵；深蓝横向 Agent 基座；矩阵标题 `组 100`；Agent 标题 `组 31` | `.recov-collaboration/.recov-agent`；`heading-collaboration.svg` / `heading-agent.svg` | PASS |
| R-V07 | 价值/实效 | 四指标四色语义；价值卡资源 `图标 15–18`（目标/盾牌/循环/治理）；商业实效标题 `组 38`；交付卡资源 `图标 20–22`（现金/文书/数据） | `.recov-value/.recov-results` 及 9 枚原图层 SVG | PASS |
| R-V08 | 场景/合作 | 表格、双色示例卡、合作模式表；场景标题 `组 43`；合作标题资源 `图标 24`（握手 13.99×12.44） | `.recov-scenes/.recov-cooperation`；`heading-scenes.svg` / `heading-cooperation.svg` | PASS |
| R-V09 | Closing | 蓝底、白字、白色 CTA | `.recov-closing` | PASS |
| R-V10 | 正式图标 | Hero、对比卡、业务流、矩阵/Agent/价值/实效/场景/合作标题、4 张价值卡、3 张交付卡均使用当前 Recov 图层资源面板导出的 SVG；Closing 设计稿按钮本身无图标；`33:060871` 已确认是 DeepDoc 图标并排除 | 不使用 Emoji、图标库或截图裁切近似替代 | PASS |

关键新增素材实际文件 SHA-256：Hero 机器人 `447854d16914f7dc5bb73fc0e2b753d49f0695f495aa3c13e47955b94a6ce664`、Hero 日历 `587abadbff0d9b669bcba1329577786b5e0248641db51f6ea681a84df35548ea`、Agent 标题 `cea14d307b994ab4cc3e2a8ad7f58dbd65f198837be6259f4d51248554f94f0c`、价值标题 `11e9ef98229600edc9a498a32ef7a248ed9c6bca8f72a895c57e46a0c48d36ce`、实效标题 `488d80f8d293578035801bddc5366e541034c704087d3fee95f70b3f02006f17`、场景标题 `b35aec436ef06a343b6c7e5cd68b03e309d76e04747f41992030013f13424ef9`、合作握手 `06251e849f65e8d9b42f85a9548fe57981b66d842163cdcbade4ef2f7728404a`。

桌面主体各区块高度与 MasterGo 对齐；先前本地全页 7662px，设计 7709px，47px 差异来自公共 Footer（设计约 349px、公共组件约 301px）。12 个分区已生成同视口 `*-comparison.png` 与 `*-diff.png`；正式图标阻塞已解除。用户于 2026-07-21 明确确认保留现有公共 Footer，该高度差异登记为视觉覆盖例外，页面状态为“已视觉校准”，不报告严格 1:1。
## 2026-07-22 原型内容同步批次视觉声明

- 视觉继续以当前产品详情实现和本文件既有 MasterGo 台账为准；原型仅作为内容真源。
- 本批次优先复用已归档正式图标与图片，没有以 Emoji、Unicode 或通用图标库替代正式素材。
- 当前页面未新增需要按业务语义生成的独立 SVG；用户的官网级语义 SVG 授权继续有效，但不替代已有 MasterGo 正式素材。
- 仅验收桌面端；内容更新后的同视口截图需重新归档后才能形成新的视觉校准结论。

## 2026-07-22 产品矩阵桌面视觉统一覆盖

- 大标题采用现有 MasterGo/官网的蓝色高字重强调，小标题使用同色系较小字号与稳定层级，不新增原型外文案。
- 正文模块统一使用约 `92px` 桌面端上下节奏；内容型卡片改用 `height:auto` 与必要的 `min-height`，避免文字增长后重叠。
- 相邻正文模块交替使用白色与浅灰蓝背景，保持 MasterGo 现有对比语言。
- 本覆盖只适用于桌面端产品矩阵详情页，公共 Header/Footer 不在修改范围。

## 2026-07-23 浏览器批注视觉覆盖

- 顶部面包屑复用冻结的标准 `ProductBreadcrumb`；未修改公共组件、Header、Footer、Logo 或全局字体。
- Hero 在标准面包屑之后保留原 310px 深色区块，主体增加 48px 顶部内距，避免依赖已移出的 compact 面包屑占位。
- 四项指标说明使用 `font-weight: 700`；“过去 / 现在”标签下间距为 32px，后续标题不再叠加顶部外边距。
- 当前只验收 1440×900 桌面视口；移动端未纳入范围。
| 2026-07-24-HERO | Hero | DeepLaw 同系浅色渐变，正文深色 | 用户浏览器批注 9 | PASS；`output/playwright/product-feedback-2026-07-24-v3/recov-hero-1616x1258.png` |
| 2026-07-24-RESULTS | 商业实效 | 正文满宽、结果卡 2×2、流程框浅色左对齐 | 用户浏览器批注 13-15 | PASS；正文 1200px、卡片列 590px + 590px；`output/playwright/product-feedback-2026-07-24-v3/recov-results-1616x1258.png` |
| 2026-07-24-SCENES | 场景表 | 沿用合作模式的边框、表头和行分隔 | 用户浏览器批注 17 | PASS；圆角 12px、无横向溢出 |
| R-V11 | 全部正文大模块 | 用户 2026-07-24 浏览器批注 | `height:auto; min-height:0; padding-block:60px`；Hero 除外 | CONFIRMED |
| R-V12 | 商业实效背景 | 用户 2026-07-24 浏览器批注 | 独立浅蓝 `#eef5ff`，与相邻模块背景可辨识 | CONFIRMED |

## 2026-07-27 浏览器批注第四批

| 元素 ID | 元素 | 开工运行态 | 用户覆盖 | 状态 |
|---|---|---|---|---|
| R-R4-01 | 压力卡序号 | 三项均为深黑 | 跟随指标蓝/蓝/红 | PASS |
| R-R4-02 | 四张流程图标 | 93px 正式 SVG 被二次缩小；文书图标为 16×13.6 白色正式图层 | 原图层裁切到 48px 容器，图形清晰可见 | PASS |
| R-R4-03 | 同类价值卡 | `padding:22px` | `padding:20px` | PASS |

## 2026-07-27 浏览器批注第六批

| 元素 | 开工运行态 | 用户覆盖 | 状态 |
|---|---|---|---|
| `.recov-case-grid > article` 两卡 | `258.5px`；padding `27px` | 四边 `20px`、内容撑高；实测两卡均 `244.5px`、内容溢出 `0` | PASS |
# 2026-07-27 浏览器批注覆盖

| 视觉 ID | 元素 | 修改前实测（1486×1258） | 用户覆盖目标 | 实现值 | 状态 |
|---|---|---|---|---|---|
| RECOV-V-20260727-01 | Hero 描述宽度 | `660px`；右侧为 238px CTA | 删除 CTA 后撑到右侧 | `max-width:none; width:100%` | READY |

## 2026-07-27 Hero 对称留白覆盖

| 视觉 ID | 元素 | 修改前实测（1486×1258） | 用户覆盖目标 | 实现要求 | 状态 |
|---|---|---|---|---|---|
| RECOV-V-20260727-02 | Hero 容器 | 高 `280px`；顶部 `42px`、底部 `95px` | 高度缩小；上下留白一致 | 内容撑高；`.recov-shell` 上下各 `42px`，预计 Hero 高 `227px` | PASS；实测 Hero `227px`，上下均 `42px` |
