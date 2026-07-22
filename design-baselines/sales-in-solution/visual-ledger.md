# Sales in 视觉台账

## 视觉真源说明

- 本次不复刻 AI Studio 原型视觉。
- 用户确认沿用现有官网界面风格；基线为改造前 `/solutions/products/sales-in/` 的 `visual-source-current-1280.png`，并对齐当前产品专项方案已有的蓝白卡片、交替浅灰背景、1216px 内容壳和公共字体体系。
- 原型只决定模块、顺序和内容，不决定颜色、间距、阴影或卡片形态。
- 用户已明确授权按语义生成卡片图标；图标参考项目内 MasterGo 导出素材的圆角端点、约 `1.8px` 线宽、24px 视图和克制留白，不使用机器人、脑形、星芒或魔法棒。

## 全局视觉属性

| 元素 | 属性 | 精确值 | 来源 | 状态 |
|---|---|---|---|---|
| 页面主体 | 文字 / 背景 | `#101b2d` / `#ffffff` | 现有 `.sis-page` | PASS |
| 内容壳 | 桌面宽度 | `min(1216px, calc(100% - 80px))` | 当前官网专项方案通用壳 | PASS |
| 章节标题 | 字号 / 字重 / 行高 | `34px / 800 / 48px`，左侧 4px 蓝色短竖线 | 当前官网卡片层级 | PASS |
| 正文 | 字号 / 行高 / 颜色 | `14–16px / 22–28px / #4b5563–#607086` | 当前官网正文体系 | PASS |
| 卡片 | 边框 / 圆角 / 阴影 | `1px #dbe1e8 / 14–16px / 0 8px 24px rgba(29,43,68,.06)` | 改造前 Sales in | PASS |
| 主色 | 蓝色 | `#2563eb`，深色状态 `#1d4ed8` | 当前产品专项方案 | PASS |
| 交替背景 | 浅灰 / 淡蓝 | `#f8fafc` / `#eff6ff` | 当前官网 | PASS |
| CTA | 高度 / 圆角 / 背景 | `58px / 10px / #1684e8`，白字 17px 600 | 改造前 Sales in Hero | PASS |

## 分区视觉属性

| 区块 | 布局 | 关键属性 | 交互状态 | 状态 |
|---|---|---|---|---|
| Hero | 居中单栏 | 淡蓝径向背景；eyebrow 胶囊；h1 48px；正文最大宽 900px | CTA hover 提亮，focus-visible 蓝色外环 | PASS |
| 一图读懂 | 已删除 | 三张定位卡及空标题模块整体移除；后续章节编号顺延 | 无额外交互 | 用户覆盖 |
| 痛点 | 两列四卡 | 每卡上半痛点、下半方案；红色问题标识、蓝色方案标识 | 无额外交互 | PASS |
| 数字化处理流 | 单列纵向五步 | 1040px 内按 1→5 自上而下排列，数字胶囊 + 连续竖线；尾部淡蓝差异化说明 | 无额外交互 | 用户覆盖 |
| 竞争优势 | 三列五卡 + 对比面板 | 白卡、淡灰背景；五张卡分别使用规则、复核、评分、追踪、治理语义图标 | 无额外交互 | 用户覆盖 |
| 商业成果 | 四指标 + 三价值卡 | 指标卡蓝/绿/紫/橙弱色；价值卡三列 | 无额外交互 | PASS |
| 场景 | 桌面三列表格 + 两张示例卡 | 行边框、圆角、首列标签；既有移动端规则保留但不纳入当前验收 | 无额外交互 | PASS |
| 合作模式 | 三列卡片 | 模式标签悬浮在卡片顶部；第一张淡蓝强调但不新增“推荐”字样 | 无额外交互 | PASS |
| 落地路径 | 四步网格 | 业务梳理、模型构建、系统集成、规模运营四个语义图标；阶段标签、标题和正文完整展示 | 无额外交互 | 用户覆盖 |
| Why | 白色面板三行 | 结果、合规、闭环三个语义图标；蓝/绿/紫弱色背景 | 无额外交互 | 用户覆盖 |
| Closing | 居中收束 | 蓝色标题、径向淡蓝背景；无原型外新增 CTA | 无额外交互 | PASS |

## 响应式规则

- `<= 800px`：内容壳为 `calc(100% - 32px)`；Hero h1 36px；所有多列网格改为单列；表头隐藏、表格行改为三段卡片；section 使用内容驱动高度。
- 移动端未纳入当前官网范围，不设置 `390px` 验收目标；既有响应式代码不在本轮删除或重构。

## 用户授权图标清单

| 分组 | 语义 | 文件 | 源格式 / 视图 | CSS 显示 | SHA-256 | 设计依据 | 状态 |
|---|---|---|---|---|---|---|---|
| 竞争优势 | 规则配置 | `public/images/sales-in-solution/advantage-rules.svg` | SVG / 24×24 | 24×24 | `6716b105a879be8eb7268509d9eee6075cd9d648c99a9b6d7ebbd5090e2e53a7` | 用户授权生成；参考 MasterGo 圆角线性语法 | PASS |
| 竞争优势 | 洞察复核 | `public/images/sales-in-solution/advantage-review.svg` | SVG / 24×24 | 24×24 | `bc7b7171962b8fc1de57600ee65c6c626357010fdc14930d78ac248b84791a6d` | 同上 | PASS |
| 竞争优势 | 评分进化 | `public/images/sales-in-solution/advantage-score.svg` | SVG / 24×24 | 24×24 | `1440dadca585dc526d81c273cfeb3fab7034e2ce47c8af71bd61ce835abec334` | 同上 | PASS |
| 竞争优势 | 动作追踪 | `public/images/sales-in-solution/advantage-tracking.svg` | SVG / 24×24 | 24×24 | `2b5bfb565b6bab6b8d0dcd6d32f476af115949731022a2d58aeb6b215d3db2d5` | 同上 | PASS |
| 竞争优势 | 边界治理 | `public/images/sales-in-solution/advantage-governance.svg` | SVG / 24×24 | 24×24 | `c528856ada0bfe541255b06c1078faa6a8077f4cf98af1b1c050ab4d7c696d0b` | 同上 | PASS |
| 落地路径 | 业务梳理 | `public/images/sales-in-solution/path-discovery.svg` | SVG / 24×24 | 24×24 | `6a7d67a1d2c9f14648d11e5ceebad156af450d04e46d00356b9e82645957000e` | 用户授权生成；白色描边置于蓝色容器 | PASS |
| 落地路径 | 模型构建 | `public/images/sales-in-solution/path-model.svg` | SVG / 24×24 | 24×24 | `1f278092734ad4da1e3120fbb233186e73d9cfc804b3d711b2464f4e9f98a18a` | 同上 | PASS |
| 落地路径 | 系统集成 | `public/images/sales-in-solution/path-integration.svg` | SVG / 24×24 | 24×24 | `768d0f26cf45d8923dcf9fc9c10df618660fef0b2ae348cd2e058a04ed54f04d` | 同上 | PASS |
| 落地路径 | 规模运营 | `public/images/sales-in-solution/path-scale.svg` | SVG / 24×24 | 24×24 | `4902cfa56de4c4dd102e9a0e0c52e941b9c1c1760ca5ea37ef3d434ad502cbcf` | 同上 | PASS |
| Why | 结果导向 | `public/images/sales-in-solution/reason-results.svg` | SVG / 24×24 | 24×24 | `99d697f1d2bef42dbeaa1ddb86aa9c94b023c1ee4ded6a23b16d07a0f0541311` | 用户授权生成；蓝色语义组 | PASS |
| Why | 合规安全 | `public/images/sales-in-solution/reason-compliance.svg` | SVG / 24×24 | 24×24 | `ab5c8e77652aeedb3e89d4840f0395e90ae4810b95600535a8c8d633cdec6773` | 用户授权生成；绿色语义组 | PASS |
| Why | 全链路闭环 | `public/images/sales-in-solution/reason-loop.svg` | SVG / 24×24 | 24×24 | `7b99c3e0b7f2002096353dd60b2ed3f28bdae6846e90abc87bb78e83edfde252` | 用户授权生成；紫色语义组 | PASS |

局部视觉证据：`feedback-flow-vertical-desktop.png`、`feedback-advantage-icons-desktop.png`、`feedback-path-icons-desktop.png`、`feedback-why-icons-desktop.png`。浏览器实测 12 枚图标均为 `natural 24×24 / rendered 24×24`，无拉伸、空白或加载失败。

## 视觉门禁结论

- 阻塞项：0
- 视觉真源：已明确并保存开工截图
- 可开始实现：是
