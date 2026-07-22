# Recov AI 解决方案页范围台账

## 2026-07-22 原型内容同步批次（当前有效范围）

- 内容真源：Google AI Studio 当前原型 `https://ai.studio/apps/31940409-b4c4-420a-8018-a504586355a9`，以 2026-07-22 登录态预览中 Recov AI 页签 iframe `<main>` 的完整渲染文本为准。
- 视觉真源：本目录现有 MasterGo 100% 分区基线、当前 `/solutions/products/recov-ai/` 已实现页面和冻结公共设计系统。
- 用户确认覆盖：`1A / 2A / 3A`。模块、顺序、逐字文案、指标与主体 CTA 按原型；有对应关系的大模块保留现有视觉，优先只换文字；原型完整新增或缺失的模块才增删；明显错字修正，歧义项保留原型并进入错字清单。
- 当前目标桌面视口：1440px 宽；移动端未纳入整个官网当前范围，不建立移动端基线、不做移动端验收，也不声明移动端完成。
- 允许修改：`app/solutions/products/recov-ai/page.tsx`、必要时该路由独占且以 `.ras-page` 为根作用域的样式、该页 metadata 与本目录证据文件。
- 冻结范围：`SiteHeader`、`SiteFooter`、Logo、字体、`BookingModal`、`BookingTrigger`、产品专项公共 Tabs 和其他页面。
- 当前公共资产 SHA-256：`SiteHeader=00a8a2bb1d30db5e77a6abf5825e95497d907d7c9356506f9feac9c5ec35ef76`；`SiteFooter=7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb`；`BookingModal=19c0a05920c86403b5f33ea5e5261abd6c464d2405cab54d1ef3d9faf42ebd7c`；`BookingTrigger=cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7`；Logo=`4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85`。
- 本节覆盖下方历史任务中“MasterGo 同时作为内容真源”和移动端工程适配口径；下方证据仍作为视觉历史基线保留。

- 页面名称：解决方案-产品专项解决方案-Recov AI
- MasterGo：`https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=33%3A024756&devMode=true`
- `page_id`：`33:024756`
- 根画板：`容器 42`，1440×6934，背景 `#FFFFFF`
- 目标路由：`/solutions/products/recov-ai/`
- 范围：整页；目标桌面视口：1440×1000px；分区证据宽度均为 1440px。
- 移动端设计基线：无；桌面门禁完成后不得自行猜测移动布局。
- 公共 Header、Footer、Logo、BookingModal、BookingTrigger 冻结复用；仅允许路由驱动导航和 Recov AI Tab 高亮。
- MasterGo 中 Header + 产品 Tab 高 160px；冻结公共实现当前高 178px。该 18px 差异属于已确认的公共基线冲突，本页不通过页面级 CSS 覆盖；主体视觉采用 section-local 同视口对比。

## 公共资产冻结基线

| 资产 | 路径 | 开工 SHA-256 | 允许变化 |
|---|---|---|---|
| Header | `components/site-header.tsx` | `2f0fbe8ad48667cb80e2c23026d27fc6f505b2cdfd7ce3496da22d9694a4a73d` | 仅路由高亮；用户确认统一冻结基线 |
| Footer | `components/site-footer.tsx` | `7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb` | 无 |
| Logo | `public/images/lingchen-logo.png` | `4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85` | 无 |
| BookingModal | `components/booking-modal.tsx` | `d7e294bd0d6384412725da78ec27fb9035341cf42ec4715e5a5f66810e387b31` | 无 |
| BookingTrigger | `components/booking-trigger.tsx` | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 无 |

## 字体证据

- MasterGo Hero：Space Grotesk 700；DM Sans 400/600。
- 仓库原先缺失正式字体，已从 Google Fonts 官方源取得可变 TTF 与 OFL：
  - `dm-sans-variable.ttf` SHA-256 `8cd08d97e89c24d0aa92edd2f0f4c8ee6195eee9b7c9f154865a58b02f0c1c0d`
  - `space-grotesk-variable.ttf` SHA-256 `acad6de1fc93436f5c0f1f4137751ef04f1aea3063e7036535970ffcfbd79f72`
  - `outfit-variable.ttf` SHA-256 `fc7287273e66929776e2ba54f144fe699080bec29f61bf649d70d871468aeade`
- 字体注册属于本次八页共用正式资产补齐；不改公共 Header/Footer 的字体声明。

## 转化按钮行为

| CTA | 区块 | 行为 | 实现 |
|---|---|---|---|
| 预约产品演示 | Hero | 打开全站公共预约弹窗 | `BookingTrigger` → `BookingModal` |
| 了解更多 | Hero | 跳转到本页“方案概述”区 | 页内锚点 |

## 分区清单

| 区块 | 纵向范围（1440px 基线） | 状态 |
|---|---:|---|
| Header + 产品 Tab | 0–159 | 冻结复用 |
| 01 Hero | 160–742 | G1–G4 PASS |
| 02 方案概述 | 743–1347 | G1–G4 PASS |
| 03 行业与企业面临的问题 | 1349–2266 | G1–G4 PASS |
| 04 解决方案 | 2267–4088 | G1–G4 PASS |
| 05 独特优势与核心能力 | 4089–4804 | G1–G4 PASS |
| 06 价值与成果 | 4805–5531 | G1–G4 PASS |
| 07 交付成果与实施 | 5532–6188 | G1–G4 PASS |
| 08 Closing CTA | 6190–6524 | G1–G4 PASS |
| Footer | 6525–6869 | 冻结复用 |
| 画板尾部留白 | 6870–6933 | 归属 MasterGo 公共 Footer 画板；冻结公共 Footer 当前不含该额外留白，本页不覆盖 |

## 最终说明

- Hero 无阻塞；公共 `BookingModal` 的初始焦点未设置，是冻结公共资产的既有全站问题，本页未越权修改。
- “了解更多”锚点已完成点击回归。
- G5 全页高度：MasterGo 6934px，本地 6842px。约 92px 差异来自冻结公共 Header/Footer 画板基线冲突；八个主体区块逐区高度和边界已独立验收，本页未使用页面级 CSS 修改公共头尾。
- 04 区四枚身份图标与 05 区五枚能力矩阵图标已从 MasterGo 原始图层导出为 SVG；05 区四枚能力基座图标、“智能大脑”图标与 06 区五枚小图形在 DevMode 中未暴露可与画板可见结果一致的独立导出源，保留自 100% 无干扰基线的逐像素原稿。它们不是近似图标，最终同视口对比与像素 diff 已覆盖这些元素。

## 2026-07-22 用户审查覆盖

- 视口：1671×1258，桌面端；移动端明确不在本轮范围。
- 范围：用户标注的 16 处布局、间距、序号、图标、指标与分区背景。
- 公共 Header、Footer、Logo、BookingModal、BookingTrigger 保持冻结。
- 本轮全页截图：`user-review-full-local-1671.png`。
