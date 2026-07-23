# 客户案例页面范围与证据清单

## 任务范围

- 页面名称：客户案例
- MasterGo 链接：`https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=6%3A33938&devMode=true`
- `page_id`：`6:33938`
- `layer_id`：父画板 `6:33939`；子容器 `组 2 = 6:33947`、`组 3 = 6:33949`
- 设计画板：1440 × 3031 CSS px
- 目标桌面视口：1440 × 900 px
- 移动端设计基线：无，禁止由桌面稿推测
- 允许修改范围：客户案例整页及必要的独立路由、页面专属样式、导航指向、sitemap
- 禁止修改区域：公共 Header、Footer、Logo、字体、BookingModal 的结构、文案、视觉和行为

## 公共资产冻结证据

| 资产 | 组件路径 | 基线 | 视口 | 文件 SHA-256 | 允许变化 |
|---|---|---|---|---|---|
| SiteHeader | `components/site-header.tsx` | 复用现有公共基线 | 1440 | `2f0fbe8ad48667cb80e2c23026d27fc6f505b2cdfd7ce3496da22d9694a4a73d` | 仅客户案例导航高亮与目标路由接线 |
| SiteFooter | `components/site-footer.tsx` | 复用现有公共基线 | 1440 | `7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb` | 仅客户案例目标路由接线 |
| Logo | `components/logo.tsx` | 复用现有公共基线 | 1440 | `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11` | 无 |
| 全局样式 | `app/globals.css` | 复用现有公共基线 | 1440 | `291986e637b83195dc0a3386d8631edd38c3c31482e8b273c0005669bb5fa263` | 只允许新增页面命名空间样式，不得覆盖公共资产 |
| 根布局/字体 | `app/layout.tsx` | 复用现有公共基线 | 1440 | `7f565d794db5dae4dafeecc6e15c83f92400ff897fc1aca14654474f9259fa88` | 无 |

## 用户确认覆盖项

| 项目 | MasterGo 原值 | 用户确认值 | 对话证据 |
|---|---|---|---|
| 实现范围 | 整页 | 整页 | 2026-07-21 当前任务 |
| 公共头尾 | 设计图中的公共头尾 | 冻结并复用现有公共组件 | 2026-07-21 当前任务 |
| 文案 | MasterGo 可见原文 | 禁止补写 | 2026-07-21 当前任务 |
| 图标 | 扁平设计图内可见图标 | 禁止近似图标 | 2026-07-21 当前任务 |
| 短内容筛选状态 | 主体按内容自然高度，超高桌面视口可能在 Footer 下方留白 | 全站短页采用弹性主体撑满剩余视口，Footer 保持在视口底部；不改 Footer 组件内部视觉 | 用户 2026-07-23 浏览器批注 1 |

## 转化按钮行为

| CTA 文案 | 区块 | 设计动作 | 实现组件 | 是否为例外 | 例外依据 |
|---|---|---|---|---|---|
| 立即体验 | 公共 Header | 打开预约弹窗 | 现有 SiteHeader → BookingModal | 否 | 公共资产冻结 |

## 分区清单

| 区块 ID | 区块名称 | MasterGo 基线 | 文案台账 | 视觉台账 | 内容验收 | 视觉验收 |
|---|---|---|---|---|---|---|
| 00 | 公共 Header | `customer-cases-mastergo-2x.png` | 冻结复用 | 冻结复用 | PASS | PASS |
| 01 | 面包屑与案例分类 | 同上 | PASS | PASS | PASS | PASS |
| 02 | 案例 Hero | 同上 | PASS | PASS | PASS | PASS |
| 03 | 客户案例详情 | 同上 | PASS | PASS | PASS | PASS |
| 04 | 关联 AI 产品 | 同上 | PASS | PASS | PASS | PASS |
| 05 | 公共 Footer | 同上 | 冻结复用 | 冻结复用 | PASS | PASS |

## 设计基线来源

- 当前选中对象：MasterGo `组 3`
- 图层核查：父级初始只显示整块子容器；在画布中双击穿透后可选中内部真实图标组，并已逐项从资源面板导出 SVG
- 研发属性：`width: 1440px; height: 3031px; background: url(组 3.png)`
- 导出方式：当前选中图层资源面板直接导出 2× PNG
- 导出尺寸：2880 × 6062 px
- 文件：`customer-cases-mastergo-2x.png`
- SHA-256：`51d2546703ae5e290d905159cfb89e04a66a3602a563ebaecc305a5eb7c8b188`
- 有效 DPR：2

## 已解除的阻塞项

| 区块 | 属性或素材 | 阻塞原因 | 处理状态 |
|---|---|---|---|
| 03/04 | 11 个图标 | 已双击穿透整页组并从真实图层资源面板导出 SVG | PASS |
| 全页 | 布局与视觉属性 | 已以 1440 px 同视口基线逐区测量并生成并排/叠加证据 | PASS（冻结头尾例外） |

## G0/G1 结论

- G0 范围与公共资产门禁：PASS。
- G1 整页 2× 视觉基线：PASS。
- G1 逐元素设计证据与正式图标素材：PASS。
- G2 内容台账、G3 实现、G4 双验收与 G5 全页回归：PASS；冻结公共资产差异见 `final-validation.md`。

## 2026-07-21 正式案例库扩展范围

- 用户确认以 AI Studio 右侧原型为新增案例内容真源，以既有 MasterGo 客户案例详情为视觉风格真源。
- 正式索引包含“按领域 / 按产品”双层筛选、16 个案例单行卡片及独立详情路由。
- 原型提供 16 个案例；用户最终确认“原型有多少个就多少个”，不保留任何原型之外的额外案例。
- 默认状态：按领域 → 全部；全部案例一次展示，不分页；筛选状态写入 URL。
- 临时 `/customer-cases/card-preview/` 在正式实现后删除。
- 新增索引交互在 MasterGo 原详情稿中没有逐像素基线，因此只能做同视口内部一致性验收，不宣称索引 1:1；既有详情页继续以原 MasterGo 基线验收。
- 公共 Header、Footer、Logo、字体继续冻结。

## 2026-07-23 索引首屏精简与 Tab 视觉覆盖

- 内容真源：用户在当前对话中明确要求删除索引页可见面包屑与独立“客户案例”标题模块。
- SEO / 可访问性约束：删除的是可见模块；页面保留仅供文档结构与辅助技术使用的唯一 `h1`，不新增营销文案。
- 视觉真源：现有 `components/solution-tabs.tsx` 与 `app/globals.css` 中 `.solution-tabs*` 的桌面端实现；不修改该共享组件或全局样式，只在客户案例页命名空间内复用其视觉语法。
- 目标区块：索引筛选区；目标桌面视口沿用 1440×900，用户截图参考视口为 1671×1258。
- 允许修改：`app/customer-cases/page.tsx`、`customer-cases-client.tsx`、`page.module.css` 及本页证据台账。
- 禁止修改：公共 Header、Footer、Logo、字体、`SolutionTabs`、`BookingModal`、案例内容与筛选逻辑。
- 当前公共资产 SHA-256：`SiteHeader=00a8a2bb1d30db5e77a6abf5825e95497d907d7c9356506f9feac9c5ec35ef76`；`SiteFooter=7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb`；`Logo=badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11`；`globals.css=ba347b7261262d758f39bec97659ca7b5d2810a575522194a4be442e96c34aa0`；`layout.tsx=5f62b96be5fddb33551996f8a3f343e9c3f9876016111c6fee66d5dcfc388da0`。
- 移动端继续不纳入当前官网验收范围。
- 追加允许修改：16 个 `/customer-cases/[slug]/` 详情页顶部导航；用户要求全部由三段面包屑统一为“← 返回上一级”。视觉真源为 `app/research/[slug]/page.tsx` 与其 `page.module.css` 的返回链接。
