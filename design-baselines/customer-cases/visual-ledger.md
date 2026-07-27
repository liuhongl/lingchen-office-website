# 客户案例视觉与素材台账

## 基线

整页 `组 3`：`layer_id=6:33949`，1440×3031；资源面板 2× PNG 为 2880×6062，文件 `customer-cases-mastergo-2x.png`，SHA-256 `51d2546703ae5e290d905159cfb89e04a66a3602a563ebaecc305a5eb7c8b188`。

## 原始图层 SVG

方法：双击穿透整页组，逐个选中真实图标组，从当前图层“资源”面板导出 SVG。未使用截图裁切、缩略图、CSS 重画或图标库。

| 图标 | MasterGo 组 | viewBox | CSS 最大显示 | 文件 | SHA-256 | 状态 |
|---|---|---|---|---|---|---|
| 客户案例 | 组 6 | 16.667×16.667 | 20×20 | `case-title.svg` | `e1a2e14566e03c50526e5cdfe182cfde210222b650c83e289d83cf7fb6585926` | PASS |
| 案例摘要 | 组 7 | 16.667×16.667 | 20×20 | `summary-info.svg` | `295b2b22b8dc05ca320c0fffb326835753de2f50c5a6ec88fa4713bad9b1df81` | PASS |
| 客户介绍 | 组 8 | 13.333×13.333 | 20×20 | `customer-building.svg` | `663fb4126b4229598dc41d40784526f83ac8fa087fb0033046a56e20c9243b12` | PASS |
| 业务挑战 | 组 9 | 13.241×12 | 20×20 | `challenge-alert.svg` | `796be62c9f035753ea24b2c55df33cf464d8720e9625e586dd2c2eecce70a423` | PASS |
| 我们如何解决 | 组 10 | 13.333×13.333 | 20×20 | `solution-bulb.svg` | `a411361cf24bbcc998f52e1b98c011bdb04b8c49bbda12da9a745788b54daee0` | PASS |
| 落地成效 | 组 16 | 16.667×16.667 | 20×20 | `value-chart.svg` | `dd26681871079f720e77ece38d9b1a25419c028dbe0f8bdd67f60df452f84244` | PASS |
| 关联产品 | 组 30 | 16.96×15 | 20×20 | `related-products.svg` | `388fa32ddb29e4e9b1a74ca21f264cd11a0a377d4938353498c1d2d2159424f3` | PASS |
| Sales in | 组 31 | 20×20 | 20×20 | `sales-in.svg` | `a5cf7c006cea64b136874463c3a80f9544c9b2fb403a71ca2aa53d5d4a87b90c` | PASS |
| Social Grow | 组 32 | 20×12 | 20×12 | `social-grow.svg` | `7182a0f7302aec99bb60d0cf16745bef59809c7871e678fc7ec7a6a213b4e48b` | PASS |
| Mine GEO | 组 33 | 20×20 | 20×20 | `mine-geo.svg` | `d48630430b59c2b5002e74c7a476e007300b7915f3b4223bfde1d7b9eb14a9d3` | PASS |
| AI 销售获客 Harness | 组 34 | 22×18 | 20×16.36 | `ai-harness.svg` | `b13ccdd4578d7e85a1624a10c9b5093d1fee77b2b2f2e78897cb06937d96010d` | PASS |

## 逐区视觉记录

| 区块 | 关键尺寸与间距 | 字体 | 背景/边框/特殊图形 | 状态 |
|---|---|---|---|---|
| 面包屑/分类 | 1216 居中；两行各 64 高 | 13/14 px | 1 px 分隔；选中项蓝底白字、7 px 圆角 | PASS（历史详情基线；索引覆盖见下） |
| Hero | 1216×260；上距 60；内边距 48 | H1 36/43.2、800 | 淡蓝渐变、18 px 圆角；标签圆点为基础几何 | PASS |
| 案例详情 | 1216；上距 48；各段独立内边距 | 标题 17/21；正文 14、1.8 行高 | 1 px 边框、18 px 圆角、轻阴影 | PASS |
| 成效表 | 四列；表头 58；数据行 76 | 14 px | 蓝色横向渐变；12 px 圆角 | PASS |
| 关联产品 | 四列；24 px 间距 | 名称 16；说明 13 | 1 px 边框、16 px 圆角、轻阴影 | PASS |

## 2026-07-21 索引与通用详情扩展

| 区块 | 关键尺寸与间距 | 字体 | 背景/边框/交互 | 证据与状态 |
|---|---|---|---|---|
| 索引标题 | 1216 居中；上下留白 54/44 | H1 38/47.5、800 | 白至淡蓝页面背景 | 用户覆盖删除可见标题；保留辅助 `h1` |
| 一级 Tab | 62 高；左右 24；按钮 38 高 | 15 px、600 | 选中蓝色渐变、8 圆角、蓝色阴影 | 用户逐字确认 Tab；待交互验收 |
| 二级 Tab | 最小 66 高；14×24 内边距；12 间距 | 13 px | 胶囊；选中淡蓝底与蓝边 | 用户逐字确认 Tab；待交互验收 |
| 案例卡片 | 1216 宽；单卡单行；28/32/24 内边距 | 标题 20/29、700；摘要 14/24.5；底栏 13/20 | 1 边框、16 圆角、轻阴影；整卡链接；hover/focus 状态 | 已通过临时预览确认，待正式列表同视口截图 |
| 通用详情 | 复用既有 MasterGo 详情容器、区块、表格与关联产品布局 | 复用既有精确字号字重 | 仅复用已导出的 MasterGo SVG；Recov/DeepDoc/DeepLaw 不使用近似图标 | 待逐路由抽样截图 |

## 2026-07-23 索引 Tab 视觉覆盖

视觉真源为现有解决方案导航：`components/solution-tabs.tsx` 和 `app/globals.css:643-650`。该区块不涉及图标、图片或特殊图形，证据无阻塞项。

| 元素 | 精确属性 | 客户案例实现映射 | 状态 |
|---|---|---|---|
| 外层导航 | 高 124px；白底；底部 `1px solid #edf0f4` | `.filters` | PASS |
| 内层容器 | 宽 `min(1216px, calc(100% - 80px))`；高 100%；顶部内边距 11px | `.filterInner` | PASS |
| 一级默认 | 高 36px；最小宽 110px；左右 18px；`#f6f8fa`；`1px solid #dce4ec`；12px 圆角；14px/600；字色 `#67768b` | `.primaryTabs a` | PASS |
| 一级选中 | `#2d6cec` 蓝底与边框；白字；`0 7px 15px rgba(45,108,236,.23)` 阴影 | `[aria-selected="true"]` | PASS：计算样式与解决方案一致 |
| 二级行 | 高 59px；上距 6px；底部对齐；间距 8px | `.secondaryTabs` | PASS |
| 二级默认 | 高 37px；左右 18px；14px/500；字色 `#718096`；透明底 | `.secondaryTabs a` | PASS |
| 二级选中 | `#eaf2ff` 底；`#235fc4` 字；8px 圆角；14px/700 | `[aria-selected="true"]` | PASS：计算样式与解决方案一致 |
| 焦点 | 3px 半透明蓝色外轮廓；2px 偏移 | 两级 Tab `:focus-visible` | PASS |

评价结论：解决方案样式的两级层次更清楚，且去除索引标题后能自然承接公共 Header；采用该视觉语法优于原有带完整卡片外框、内部分隔线与重复胶囊的方案。

## 2026-07-23 详情页返回链接覆盖

视觉真源：灵宸研究院详情页 `app/research/[slug]/page.module.css` 的 `.breadcrumb` 返回链接。案例详情仅复用左侧返回动作，不复制研究院右侧分类路径。

| 元素 | 精确属性 | 实现映射 | 状态 |
|---|---|---|---|
| 返回导航 | 1216px 案例容器；高 64px；纵向居中 | `.customer-cases-back` | PASS |
| 返回链接 | `#7a808c`；13px；20px 行高；文案“← 返回上一级” | `.customer-cases-back a` | PASS |
| Hover | 字色 `#1f4e79` | `.customer-cases-back a:hover` | PASS |
| 焦点 | 3px 半透明蓝色轮廓；2px 偏移 | `.customer-cases-back a:focus-visible` | PASS |

## 2026-07-23 短内容筛选状态 Footer 贴底覆盖

该覆盖只调整全站根页面的纵向空间分配，不修改公共 Header/Footer 的组件结构、文案、尺寸、颜色、边框或内部间距。

| 元素 | 精确属性 | 实现映射 | 状态 |
|---|---|---|---|
| 根页面 | `min-height: 100dvh`；纵向 flex | `app/globals.css` 的 `body` | PASS |
| 主体 | 直属 `main` 使用 `flex: 1 0 auto`，短页吸收剩余高度，长页按内容增长 | `body > main` | PASS |
| 公共 Footer | 保持普通文档流，`flex: 0 0 auto`；禁止 fixed/sticky 覆盖正文 | `body > .site-footer` | PASS |
| 报告视口 | 1671 × 1258；DeepDoc 产品筛选状态 Footer 底边等于视口底边 | 浏览器实测：修改前下方留白 119px，修改后 0px | PASS |

## 2026-07-25 详情模板视觉覆盖

用户当前明确覆盖优先于历史详情基线；无图标新增需求，且明确删除两处图标/外框，因此不存在素材阻塞。

| 元素 | 精确实现目标 | 状态 |
|---|---|---|
| Hero | 内容驱动高度；桌面 `margin-top:0`、`padding-block:30px`；保留现有 18px 圆角与淡蓝渐变 | 待同视口复核 |
| Hero 元信息 | 领域标签后同一行显示“客户案例” | PASS |
| 独立标题行 | 删除原 112px 固定高标题行及其 `case-title.svg` 图标 | PASS：DOM 中无 `.customer-cases-detail__title` |
| 摘要 | 标题和正文同一行；内容驱动高度；保留浅蓝背景 | PASS：桌面为两列 Grid，32px + 剩余宽度 |
| 样本口径 | 标签和正文同一行，正文占剩余宽度 | PASS：桌面为两列 Grid，56px + 剩余宽度 |
| 成效表 | 表头和数据行压缩；数据行不设固定高度；变化列仅蓝色字，无背景/圆角 | PASS：数据行实测 58px；变化列透明背景、0 圆角、蓝色字 |
| 关联产品 | 标题和产品名称同一行；删除卡片边框、背景、阴影和固定高度 | PASS：Flex 同行；链接 `border:0`、`box-shadow:none`、`padding:0` |
| 返回链接 | `#000`；链接返回来源 view/filter，直接访问则回到当前案例所属领域 | PASS：纯黑；实测按产品 → Recov AI → 详情 → 返回后两级 Tab 均恢复 |

同视口截图：

- `visual-results/customer-cases-feedback-2026-07-25/domain-all-viewport-1576x1258.png`
- `visual-results/customer-cases-feedback-2026-07-25/product-all-viewport-1576x1258.png`
- `visual-results/customer-cases-feedback-2026-07-25/property-detail-viewport-1576x1258.png`
- `visual-results/customer-cases-feedback-2026-07-25/property-detail-hero-margin0-1576x1258.png`
