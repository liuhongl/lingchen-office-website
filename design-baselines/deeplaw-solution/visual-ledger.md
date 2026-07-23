# DeepLaw 专项解决方案页视觉台账

## 2026-07-23 用户覆盖：末尾 CTA 留白

| 视觉 ID | 区块 | 修改前 | 用户覆盖后目标 | 实现位置 | 证据 | 状态 |
|---|---|---|---|---|---|---|
| DLS-V0702 | 末尾 CTA | 固定高 `633px`；顶部 `103px`；按钮下方 `254px`，原四项信任信息移除后形成无效空白 | 实测高 `428px`；`height:auto`、`min-height:0`；顶部 `72px`、底部 `80px`；文案和按钮样式不变 | `app/solutions/products/deeplaw/prototype-sync.css` | `07-cta-user-feedback-before-1671.png`、`07-cta-user-feedback-after-1671.png`；1671px 同视口并排人工核对 | PASS |

## 2026-07-22 原型内容同步视觉口径

- 视觉继续使用本文件记录的 MasterGo 既有实现与正式 SVG；内容改以原型为准。
- 4 指标、3 价值组、4 合作模式与 6 项可信能力仅通过 `.dls-page` 作用域样式适配数量变化。
- 飞轮补充“数据回流”文字，不新增或替换图标；公共头尾、Logo、字体、预约弹窗保持冻结。
- 内容数量变化后的页面只声明桌面端风格回归，不声明旧画板全页高度 1:1。

## 基线与实现口径

- MasterGo 根画板：`33:002648`，1440×7313；主体 7 区逐区以 100% PNG 为视觉真源。
- 本地桌面视口：1440px；主体区块固定高度依次为 `768 / 858 / 1706 / 1081 / 990 / 842 / 633px`，与设计分区逐像素一致。
- 页面专属实现：`app/solutions/products/deeplaw/page.tsx`、`app/globals.css` 的 `.dls-*` 规则。
- 全页字体：正文 `Outfit, Noto Sans SC, sans-serif`；大标题 `Songti SC, Noto Serif SC, serif`；数字强调 `Space Grotesk`。浏览器实际加载既有本地字体，无页面级字体替换。

| 元素 ID | 区块 | 尺寸/布局 | 字体/字号/字重/行高 | 颜色/渐变 | 边框/圆角/阴影 | 图标来源 | 基线与本地证据 | 结论 |
|---|---|---|---|---|---|---|---|---|
| DLS-V0101 | Hero | 1440×768；左右 576px，gap 64px；左列三行标题、双 CTA、四信任项；右列双环六节点 | H1 56/700/60；正文 18/400/28；按钮 15/600 | 背景双径向柔光；标题强调 `#2563EB → #06B6D4`；正文 `#475569` | 按钮 10px；节点 14px；中心方块浅蓝阴影 | MasterGo 原始 `icon-1` 至 `icon-12.svg` | `01-hero-mastergo-100.png`、`01-hero-local-1440.png`、comparison/diff | PASS |
| DLS-V0201 | 行业现状 | 1440×858；左右 110px；五列卡片；底部传导关系条 | H2 36px；卡标题 17/700；正文 12/19 | 区块 `#F9FBFD`；五卡白底，红/黄/蓝/蓝/紫角标 | 卡片 1px `#E2E8F0`、14px、轻阴影；关系条 12px | MasterGo 原始 `icon-13` 至 `icon-17.svg` | `02-pains-mastergo-100.png`、`02-pains-local-1440.png`、comparison/diff | PASS |
| DLS-V0301 | 五大智能体 | 1440×1706；左对齐区标题；主卡 5 列模块；下方 2×2 产品卡 | H2 38/700/48；主标题 22；产品标题 20；正文 11–13/17–21 | 白底；蓝/青/紫/橙/红分色 | 主卡 18px；产品卡 16px；轻边框与阴影 | MasterGo 原始 `icon-18` 至 `icon-24.svg`、`icon-27.svg`、`icon-28.svg` | `03-agents-mastergo-100.png`、`03-agents-local-1440.png`、comparison/diff | PASS |
| DLS-V0401 | 协同效应 | 1440×1081；居中标题；左侧 520px 飞轮，右侧四步及总结 | H2 38/700/48；右标题 28；正文 12/19 | 区块 `#F9FBFD`；飞轮浅蓝环；总结 `#EFF6FF` | 飞轮虚线/实线圆环；节点 14px、轻阴影；总结 12px | MasterGo 原始 `icon-23/24/27/28/63.svg` | `04-synergy-mastergo-100.png`、`04-synergy-local-1440.png`、comparison/diff | PASS |
| DLS-V0501 | 六维价值 | 1440×990；3×2 卡片；左右 110px | H2 38/700/48；卡标题 18；指标 26 | 白底；蓝/橙/紫/红/绿/蓝强调 | 卡片 1px `#E2E8F0`、16px、轻阴影 | MasterGo 原始 `icon-29/31/32/33/35/12.svg` | `05-value-mastergo-100.png`、`05-value-local-1440.png`、comparison/diff | PASS |
| DLS-V0601 | 合作模式 | 1440×842；三列方案卡；中卡高 30px | H2 38/700/48；卡标题 20；正文 12/19 | 区块 `#F9FBFD`；SaaS/Pro 蓝，定制橙 | 卡片 18px；Pro 2px 蓝边；按钮 10px | MasterGo 原始 `icon-42/45/49/50.svg` | `06-cooperation-mastergo-100.png`、`06-cooperation-local-1440.png`、comparison/diff | PASS |
| DLS-V0701 | 末尾 CTA | 1440×633；全部居中；标题、正文、按钮、四信任项 | H2 52/700/58；正文 15/25；按钮 14/600 | 纯色 `#2563EB`；白字与半透明白 | CTA 1px 半透明白边、10px | MasterGo 原始 `icon-42/45/49/50.svg` | `07-cta-mastergo-100.png`、`07-cta-local-1440.png`、comparison/diff | PASS |
| DLS-V0801 | 公共头尾 | 冻结公共 Header、SolutionTabs、Footer | 沿用冻结资产 | 沿用冻结资产 | 沿用冻结资产 | Logo 沿用正式资产 | `full-local-1440.png`；公共差异单独记录 | PASS |

## 原始素材核验

- 所有页面图标均从 MasterGo 导出的原始 SVG 保存到 `public/images/solutions/deeplaw/`，没有使用 Lucide、emoji、截图裁片或 CSS 近似图标。
- 关键对勾 SHA-256：`icon-42.svg`=`97f0d19c...e577b`；`icon-45.svg`=`548ec16d...373b`；`icon-49.svg`=`1993ddf4...29ff`；`icon-50.svg`=`97494c66...04c`。
- 其余导出文件已用 `shasum -a 256 public/images/solutions/deeplaw/*.svg` 建立本地校验记录，页面只引用该目录内的已导出资产。

## 同视口结论

- 7 个主体区块均生成 1440px 本地截图、左右并排图和增强差异图；区块边界、顺序、高度、背景、主要网格、图标来源、颜色和文字层级已人工核对。
- 首轮差异中 Hero 文案纵向位置与“五大智能体”标题对齐已校准；复核后无横向溢出，`scrollWidth === clientWidth === 1440`。
- 全页本地高度 7357px；MasterGo 根画板 7313px。差额来自冻结公共 Header/SolutionTabs/Footer 与专项画板公共区不一致，不通过页面级 CSS 覆盖公共资产。
- 桌面视觉门禁：`PASS（已视觉校准）`；移动端仅做工程适配，因无 MasterGo 移动画板不声明移动端 1:1。

## 2026-07-22 用户审查视觉台账

| 区域 | 正式素材与布局 | 本地证据 | 状态 |
|---|---|---|---|
| Hero 轨道 / 特征 | 使用现有 MasterGo 导出图标；特征统一对号图标 | `user-review-full-local-1671.png` | PASS |
| 痛点 / 智能体 | 按语义映射现有正式图标；卡片统一 390px 最小高度 | 同上 | PASS |
| 数据飞轮 | 节点样式统一，中心文案与原型一致 | 同上 | PASS |
| 价值分组 | 成本、业务、风控分别映射正式语义图标 | 同上 | PASS |

## 2026-07-22 图标显示修正

| 区域 | MasterGo 正式素材 | 修正 | 复核证据 | 状态 |
|---|---|---|---|---|
| Hero 环形节点 | `icon-7/8/9/10/11/12.svg` | 按律师广场、内容引擎、AI 入口、主动获客、合同审查、知识库重新映射；中心副标改为“法律AI” | `user-review-followup-local-1265.png` | PASS |
| 行业痛点 | `icon-13/14/15/16/17.svg` | 移除作用于图标与背景整体的反白滤镜，保留 SVG 原色并使用浅色承载底 | 同上 | PASS |
| 五大智能体 | MasterGo 导出的主智能体与产品智能体 SVG | 移除整体反白滤镜，图标路径、颜色和透明边界完整显示 | 同上 | PASS |
| 数据飞轮 | `icon-23/24/27/28/63.svg` | 外圈节点与中心图标均使用正式 SVG；外圈改为浅色底，避免白图标与白底重叠 | 同上 | PASS |
| 价值与合作 | MasterGo 导出的价值图标 | 按效率、成本、业务、管理、风险、技术语义映射；合作卡片上下留白统一 | 同上 | PASS |

- 浏览器实测：所有上述 SVG `naturalWidth/naturalHeight > 0`，可见尺寸 30–40px；`filter: none`；页面横向溢出为 0。
- 本次为用户审查后的显示修正，使用既有 MasterGo 原始图层导出文件，没有新增近似图标或截图裁片。
