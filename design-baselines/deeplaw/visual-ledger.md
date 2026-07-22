# DeepLaw 视觉映射台账

本页没有独立 MasterGo 目标画板，因此不伪造“目标稿 1:1”。每个区块使用已存在的 MasterGo 精确组件语言，交付结论为“产品矩阵风格一致”。

| ID | 区块 | 视觉来源 | 布局与字体 | 背景/边框/图形 | 状态 |
|---|---|---|---|---|---|
| V-0101 | 01 | DeepDoc Hero + 用户截图反馈 | 1152px 容器；H1 50/800/1.08；产品名深色、第二行蓝紫渐变；正文 15/27.75 | 浅蓝 Hero、定位 pill、首段半透明信息面板、双卡对比 | PASS |
| V-0102 | 01 | Sales in 面包屑 | 74px 高；14/20；14px 间距；CTA 190×41 | 白底、斜杠分隔、蓝色 CTA 与投影 | PASS |
| V-0201 | 02 | Sales in 流程 + DeepLaw 原型 | 3×2 编号卡；18/700 标题；卡间 20×20 右箭头 | 白卡、浅蓝编号、1px 浅边框；箭头为原型 `ArrowRight` 精确 SVG path | PASS |
| V-0202 | 02 | Mine GEO 业务流 + DeepLaw 原型 | 4 列业务卡；标题前 34×34 图标底座，SVG 17×17 | 精确使用原型 `Users` / `Compass` / `FileCheck` / `Database` SVG path，不使用近似图标库 | PASS |
| V-0203 | 02 | DeepDoc 能力卡 + 用户确认覆盖 | 桌面首行 3 列、次行居中 2 列，平板/移动端 1 列 | 蓝色序号、浅灰卡面；五张卡按 3+2 排列 | PASS |
| V-0204 | 02 | DeepDoc 提示区 | 六项要点 + 单张说明卡 | 浅蓝底、蓝色圆点，不使用近似图标 | PASS |
| V-0301 | 03 | Social Grow 指标 | 4 列指标 + 3 列价值卡 | 蓝色指标、白卡阴影 | PASS |
| V-0302 | 03 | Sales in 商业实效 | 两列表格与三张结果卡 | 红/绿对照语义色 | PASS |
| V-0401 | 04 | DeepDoc 场景表 | 3 列 6 行 + 2 张深度场景卡 | 白表格、浅边框 | PASS |
| V-0501 | 05 | Social Grow 合作模式 | 2 列 4 行 | 白底、蓝色强调 | PASS |
| V-0502 | 05 | 公共 Footer | 冻结组件 | 冻结 | PASS |

## 特殊元素

- 业务流四枚图标来自 AI Studio 原型实际 DOM 中的 SVG 源码，原型类名分别为 `lucide-users`、`lucide-compass`、`lucide-file-check`、`lucide-database`；统一 `viewBox="0 0 24 24"`、`stroke-width="2"`、圆角端点和连接。
- 六环节卡间箭头来自原型 `lucide-arrow-right` 的两条 path：`M5 12h14` 与 `m12 5 7 7-7 7`；CSS 显示 20×20，桌面仅在同排相邻卡之间展示，移动端隐藏。
- 所有页面专属样式限定在 `.deeplaw-page` 下，不覆盖公共头尾。

## 2026-07-22 产品矩阵桌面视觉统一覆盖

- 大标题采用现有 MasterGo/官网的蓝色高字重强调，小标题使用同色系较小字号与稳定层级，不新增原型外文案。
- 正文模块统一使用约 `92px` 桌面端上下节奏；内容型卡片使用自适应高度，避免文字增长后重叠。
- 本覆盖只适用于桌面端产品矩阵详情页，公共 Header/Footer 不在修改范围。

## 2026-07-23 浏览器批注与正式图标覆盖

- 五张核心能力卡保持 6 列网格和每卡跨 2 列；第 4、5 张改为 `grid-column:1/3`、`3/5`，第二行左对齐。
- 四类 SectionHeading 小标题统一为浅蓝背景、`#b8d3ff` 1px 边框、999px 圆角、`7px 14px` 内边距。
- 产品价值三卡现场计算样式均已有 `1px solid #e1e7ef` 边框，不重复添加。
- 业务流正式图标：MasterGo DeepLaw 方案原始导出 `icon-18.svg` 至 `icon-21.svg`；SHA-256 分别为 `532e2bf49e411f87942721fd8661ecbf0934c2714773a440265146a38b843c4b`、`c380ce1e5f23bb018983faca3d3221c550cf41a4133fb6cf7316e4605b50ef23`、`11ad3477502a2ee639207752a38405177130beda553c734c10129444d59900b3`、`e143ab6a74fa506ca2fa46f38f9dcaafea9574d3fd96bf43014f6a72fa90c600`；CSS 17×17px。
- 环节箭头使用 MasterGo 原始导出 `icon-5.svg`，SHA-256 `af04a0008d43e727272b1e495b17b658e34027d850aec4dc64a55840469757cc`；白色箭头路径显示于 22×22px 蓝色圆形底座中，素材本身显示 12×12px。
- 三项交付标题使用 MasterGo 原始对号 `icon-42.svg`，SHA-256 `97f0d19c588df5ef2ece787dbb4d9882b6a7fd70d938b0164c22f583806e577b`；CSS 18×18px。
