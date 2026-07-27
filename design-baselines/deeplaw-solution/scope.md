# DeepLaw 专项解决方案页范围与证据清单

## 2026-07-23 末尾 CTA 间距覆盖

- 用户反馈：末尾蓝色 CTA “整个模块的上下间距太大了”。
- 允许修改：仅 `.dls-page .dls-cta` 的高度与上下内边距；标题、正文、预约按钮和冻结公共 Footer 均不修改。
- 修改前实测（1671×1258）：区块高 `633px`；标题顶部间距 `103px`；按钮底部到区块底部 `254px`。
- 原因：原型同步已移除四项信任信息，但旧 MasterGo 固定高度仍为四项信任信息预留空间。
- 用户覆盖目标：改为内容驱动高度，上下留白收敛且接近对称；桌面端验证，移动端仍不纳入当前范围。
- 修改前证据：`07-cta-user-feedback-before-1671.png`。
- 公共资产继续冻结：本轮不修改 `SiteHeader`、`SiteFooter`、Logo、字体、`BookingModal` 或 `BookingTrigger`。

## 2026-07-22 原型内容同步批次（当前有效范围）

- 内容真源：Google AI Studio 当前原型 `https://ai.studio/apps/31940409-b4c4-420a-8018-a504586355a9`，以 2026-07-22 登录态预览中 DeepLaw 页签 iframe `<main>` 的完整渲染文本为准。
- 视觉真源：本目录现有 MasterGo 100% 分区基线、当前 `/solutions/products/deeplaw/` 已实现页面和冻结公共设计系统。
- 用户确认覆盖：`1A / 2A / 3A`。模块、顺序、逐字文案、指标与主体 CTA 按原型；有对应关系的大模块保留现有视觉，优先只换文字；原型完整新增或缺失的模块才增删；明显错字修正，歧义项保留原型并进入错字清单。
- 当前目标桌面视口：1440px 宽；移动端未纳入整个官网当前范围，不建立移动端基线、不做移动端验收，也不声明移动端完成。
- 允许修改：`app/solutions/products/deeplaw/page.tsx`、必要时该路由独占且以 `.dls-page` 为根作用域的样式、该页 metadata 与本目录证据文件。
- 冻结范围：`SiteHeader`、`SiteFooter`、Logo、字体、`BookingModal`、`BookingTrigger`、产品专项公共 Tabs 和其他页面。
- 当前公共资产 SHA-256：`SiteHeader=00a8a2bb1d30db5e77a6abf5825e95497d907d7c9356506f9feac9c5ec35ef76`；`SiteFooter=7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb`；`BookingModal=19c0a05920c86403b5f33ea5e5261abd6c464d2405cab54d1ef3d9faf42ebd7c`；`BookingTrigger=cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7`；Logo=`4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85`。
- 本节覆盖下方历史任务中“MasterGo 同时作为内容真源”和移动端工程适配口径；下方证据仍作为视觉历史基线保留。

## 任务范围

- 页面名称：解决方案-产品专项解决方案-DeepLaw
- MasterGo 链接：`https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=33%3A002647&devMode=true`
- `page_id`：`33:002647`
- `layer_id`：当前链接未指定；目标根画板以 1440×7313 全页导出为准
- 目标桌面视口：1440×7313（设计画板）；本地浏览器对比宽度 1440px
- 移动端设计基线：无；桌面验收通过后移动端只能做工程适配，不宣称 1:1
- 允许修改的页面与区块：新增 `/solutions/products/deeplaw/` 路由、该页专属 JSX/CSS、逐页 metadata、sitemap 入口及本目录证据
- 禁止修改的区域：公共 `SiteHeader`、`SiteFooter`、Logo、字体、`BookingModal`、`BookingTrigger` 及其他页面

## 公共资产

- `SiteHeader`：冻结，仅允许路由驱动“解决方案”高亮
- `SiteFooter`：冻结，直接复用；设计稿尾部 Footer 与冻结基线冲突时以冻结资产为准
- Logo：已确认并冻结
- 字体：Outfit、DM Sans、Space Grotesk 已落地并冻结
- 其他共享组件：`SolutionTabs`、`BookingModal`、`BookingTrigger`

## 公共资产冻结证据

| 资产 | 组件路径 | 基线截图 | 视口 | 文件 SHA-256 | 允许变化 |
|---|---|---|---|---|---|
| SiteHeader | `components/site-header.tsx` | `../solution-batch/header-frozen-1440.png` | 1440px | `00a8a2bb1d30db5e77a6abf5825e95497d907d7c9356506f9feac9c5ec35ef76` | 仅导航高亮；当前哈希变化来自已记录的 Contact 任务，本页未修改 |
| SiteFooter | `components/site-footer.tsx` | `../solution-batch/footer-frozen-1440.png` | 1440px | `7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb` | 无 |
| Logo | `public/images/lingchen-logo.png` | Header/Footer 运行截图 | 1440px | `4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85` | 无 |
| BookingModal | `components/booking-modal.tsx` | `../solution-batch/booking-modal-frozen-1440.png` | 桌面/移动 | `c606ca6d3040962ccf1a6b15db4c0003423c6466c395cf92864021a4804a0efe` | 当前哈希变化来自已记录的 Contact 任务，本页未修改 |
| BookingTrigger | `components/booking-trigger.tsx` | 既有交互基线 | 桌面/移动 | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 无 |
| Outfit | `public/fonts/google/outfit-variable.ttf` | 字体文件 | 全页 | `fc7287273e66929776e2ba54f144fe699080bec29f61bf649d70d871468aeade` | 无 |
| DM Sans | `public/fonts/google/dm-sans-variable.ttf` | 字体文件 | 全页 | `8cd08d97e89c24d0aa92edd2f0f4c8ee6195eee9b7c9f154865a58b02f0c1c0d` | 无 |
| Space Grotesk | `public/fonts/google/space-grotesk-variable.ttf` | 字体文件 | 全页 | `acad6de1fc93436f5c0f1f4137751ef04f1aea3063e7036535970ffcfbd79f72` | 无 |

## 用户确认覆盖项

| 项目 | MasterGo 原值 | 用户确认值 | 对话证据 |
|---|---|---|---|
| 公共头尾 | 当前专项画板未包含 Header；尾部含设计稿 Footer | 复用已冻结公共 Header/Footer，只允许导航高亮 | 用户要求“公共头尾冻结” |
| 可见文案与图标 | MasterGo 当前画板 | 禁止补写文案，禁止近似图标 | 用户当前任务明确要求 |

## 转化按钮行为

| CTA 文案 | 区块 | 设计动作 | 实现组件 | 是否为例外 | 例外依据 |
|---|---|---|---|---|---|
| 预约演示 | Hero | 打开预约弹窗 | `BookingTrigger` → `BookingModal` | 否 | 公共预约弹窗规则 |
| 了解五大智能体 | Hero | 页内跳转至五大智能体 | 原生锚点 | 是 | 设计稿明确为了解内容入口 |
| 预约产品演示 | 末尾 CTA | 打开预约弹窗 | `BookingTrigger` → `BookingModal` | 否 | 公共预约弹窗规则 |

## 分区清单

| 区块 ID | 区块名称 | MasterGo 100% 基线 | 文案台账 | 视觉台账 | 内容验收 | 视觉验收 |
|---|---|---|---|---|---|---|
| 01 | Hero | `01-hero-mastergo-100.png`（1440×768） | PASS | PASS | PASS | 已视觉校准 |
| 02 | 行业现状 | `02-pains-mastergo-100.png`（1440×858） | PASS | PASS | PASS | 已视觉校准 |
| 03 | 五大智能体 | `03-agents-mastergo-100.png`（1440×1706） | PASS | PASS | PASS | 已视觉校准 |
| 04 | 协同闭环 | `04-synergy-mastergo-100.png`（1440×1081） | PASS | PASS | PASS | 已视觉校准 |
| 05 | 六维价值 | `05-value-mastergo-100.png`（1440×990） | PASS | PASS | PASS | 已视觉校准 |
| 06 | 合作模式 | `06-cooperation-mastergo-100.png`（1440×842） | PASS | PASS | PASS | 已视觉校准 |
| 07 | 末尾 CTA | `07-cta-mastergo-100.png`（1440×633） | PASS | PASS | PASS | 已视觉校准 |
| 08 | Footer 对照 | `08-footer-mastergo-100.png`（1440×345） | 冻结资产 | 冻结资产 | PASS | 冻结基线复用 |

## 已知边界

| 区块 | 属性或素材 | 原因 | 处理状态 |
|---|---|---|---|
| 全页 | 移动端 1:1 | MasterGo 未提供移动端画板 | 已完成响应式工程适配；不声明移动端 1:1 |
| 08 | 设计稿 Footer 与冻结 Footer 差异 | 公共资产禁止修改 | 已复用冻结 Footer，并在最终对比中单独记录 |

## 2026-07-22 用户审查覆盖

- 桌面视口 1671×1258；移动端不在范围。
- 范围：Hero 轨道、特征、行业痛点、五大智能体、数据飞轮、价值分组的正式图标与布局。
- 原型文字覆盖：中心改为“数据飞轮 / 越用越懂你”。
- 本轮全页截图：`user-review-full-local-1671.png`。

## 2026-07-27 浏览器批注第六批

- 全页所有当前计算字号 12px 的可见文字提升到 13px。
- 五张行业痛点卡统一图标高度、标题加粗及标题/副标题/正文行起点；不修改文字和正式图标资源。
- 目标视口 `1576×1258`；移动端不在范围，无新 1:1 结论。
