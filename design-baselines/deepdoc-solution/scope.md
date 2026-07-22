# DeepDoc 智眸智能解决方案页范围台账

## 2026-07-22 原型内容同步批次（当前有效范围）

- 内容真源：Google AI Studio 当前原型 `https://ai.studio/apps/31940409-b4c4-420a-8018-a504586355a9`，以 2026-07-22 登录态预览中 DeepDoc 页签 iframe `<main>` 的完整渲染文本为准。
- 视觉真源：本目录现有 MasterGo 100% 分区基线、当前 `/solutions/products/deepdoc/` 已实现页面和冻结公共设计系统。
- 用户确认覆盖：`1A / 2A / 3A`。模块、顺序、逐字文案、指标与主体 CTA 按原型；有对应关系的大模块保留现有视觉，优先只换文字；原型完整新增或缺失的模块才增删；明显错字修正，歧义项保留原型并进入错字清单。
- 当前目标桌面视口：1440px 宽；移动端未纳入整个官网当前范围，不建立移动端基线、不做移动端验收，也不声明移动端完成。
- 允许修改：`app/solutions/products/deepdoc/page.tsx`、必要时该路由独占且以 `.dds-page` 为根作用域的样式、该页 metadata 与本目录证据文件。
- 冻结范围：`SiteHeader`、`SiteFooter`、Logo、字体、`BookingModal`、`BookingTrigger`、产品专项公共 Tabs 和其他页面。
- 当前公共资产 SHA-256：`SiteHeader=00a8a2bb1d30db5e77a6abf5825e95497d907d7c9356506f9feac9c5ec35ef76`；`SiteFooter=7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb`；`BookingModal=19c0a05920c86403b5f33ea5e5261abd6c464d2405cab54d1ef3d9faf42ebd7c`；`BookingTrigger=cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7`；Logo=`4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85`。
- 本节覆盖下方历史任务中“MasterGo 同时作为内容真源”和移动端工程适配口径；下方证据仍作为视觉历史基线保留。

- 页面名称：解决方案-产品专项解决方案-DeepDoc
- MasterGo：`https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=33%3A16598&devMode=true&layer_id=33%3A249089`
- `page_id`：`33:16598`
- `layer_id`：`33:249089`
- 根画板：1440×7779；全页基线 `full-mastergo-1440x7779.png`，SHA-256 `f7c55f9cf81047465ecfd8f0144332fabb69f64fe94fdc1b771608bbafda0bfb`
- 目标路由：`/solutions/products/deepdoc/`
- 范围：整页；目标桌面视口：1440×1000px。
- 移动端设计基线：无；不得根据桌面稿猜测移动端视觉完成度。
- 公共 Header、Footer、Logo、BookingModal、BookingTrigger 冻结复用；仅允许路由驱动 DeepDoc Tab 高亮。
- MasterGo Header + Tab 高 167px；冻结公共实现当前高 178px。11px 公共基线冲突不得由页面 CSS 覆盖，主体采用 section-local 同视口验收。

## 公共资产冻结基线

| 资产 | 路径 | 开工 SHA-256 | 允许变化 |
|---|---|---|---|
| Header | `components/site-header.tsx` | `2f0fbe8ad48667cb80e2c23026d27fc6f505b2cdfd7ce3496da22d9694a4a73d` | 仅路由高亮；用户确认统一冻结基线 |
| Footer | `components/site-footer.tsx` | `7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb` | 无 |
| Logo | `public/images/lingchen-logo.png` | `4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85` | 无 |
| BookingModal | `components/booking-modal.tsx` | `d7e294bd0d6384412725da78ec27fb9035341cf42ec4715e5a5f66810e387b31` | 无 |
| BookingTrigger | `components/booking-trigger.tsx` | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 无 |

## 转化按钮行为

| CTA | 区块 | 行为 | 实现 |
|---|---|---|---|
| 预约产品演示 | Hero | 打开公共预约弹窗 | `BookingTrigger` → `BookingModal` |

## 分区清单

| 区块 | 状态 |
|---|---|
| Header + 产品 Tab | 冻结复用 |
| 01 Hero | G4 内容/视觉通过 |
| 02 一图读懂 | G4 内容/视觉通过 |
| 03 审单困局 | G4 内容/视觉通过 |
| 04 核心数字化处理流 | G4 内容/视觉通过 |
| 05 四维审核体系 | G4 内容/视觉通过 |
| 06 核心能力 | G4 内容/视觉通过 |
| 07 支付成果与落地价值 | G4 内容/视觉通过 |
| 08 部分应用场景示例 | G4 内容/视觉通过 |
| 09 合作模式 | G4 内容/视觉通过 |
| Closing CTA | G4 内容/视觉通过 |
| Footer | 冻结复用 |

## 用户确认覆盖项

- 无。禁止补写文案。

## 2026-07-22 用户审查覆盖

- 桌面视口 1671×1258；移动端不在范围。
- 处理四维编号、`99%+`、`1个月`、合作模式徽标及重复序号。
- 本轮全页截图：`user-review-full-local-1671.png`。
