# MasterGo 页面范围与证据清单

## 2026-07-22 原型内容同步批次

- 内容真源：Google AI Studio 当前交互原型 `https://ai.studio/apps/31940409-b4c4-420a-8018-a504586355a9`，以页面主体 `<main>` 的实际渲染文本为准。
- 视觉真源：本目录既有 MasterGo 基线、当前 `/products/sales-in/` 已实现页面与冻结公共设计系统。
- 用户覆盖：执行 `1A / 2A / 3A`；有对应关系的大模块保留现有视觉，只同步模块内容、顺序、文案、指标和主体 CTA；明显错字修正，歧义保留原型。
- 当前范围：仅桌面端；移动端未纳入本轮官网实现和验收范围。
- 冻结资产：`SiteHeader`、`SiteFooter`、Logo、`ProductBreadcrumb`、`BookingModal`、`BookingTrigger`。
- 本节覆盖下方历史 MasterGo 内容真源口径；历史视觉证据继续有效。

## 任务范围

- 页面名称：AI 出海获客智能体 - Sales in
- MasterGo 链接：https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=33%3A130393&devMode=true
- `page_id`：`33:130393`
- `layer_id`：`33:130394`
- 目标桌面视口：根画板 1440×7482px；已取得 100% 原尺寸 PNG
- 移动端设计基线：当前文件未提供独立移动端画板；本次视觉还原与 1:1 结论仅覆盖 1440px 桌面根画板，移动端只做工程可用性检查，不声称视觉还原
- 允许修改的页面与区块：整页新页面主体、该页路由元数据、站内入口与 sitemap
- 禁止修改的区域：公共 `SiteHeader`、`SiteFooter`、Logo、字体、`BookingModal`、`BookingTrigger` 及其全局样式

## 公共资产

- `SiteHeader`：冻结
- `SiteFooter`：冻结
- Logo：已确认，冻结
- 字体：冻结；正式字体加载事实仍须在逐区视觉台账核验
- 其他共享组件：`BookingModal`、`BookingTrigger` 冻结

## 公共资产冻结证据

| 资产 | 组件路径 | 基线截图 | 视口 | 文件 SHA-256 | 允许变化 |
|---|---|---|---|---|---|
| SiteHeader | `components/site-header.tsx` | `design-baselines/home/final-mastergo.png` | 900×618 归档图；页面验收使用 1440px 视口复核 | `a5edbe507ea4338ccf61f7c50018a2c6863e3fdfebf7b47ac9603c34cfd033ec` | 仅由既有路由逻辑产生导航高亮 |
| SiteFooter | `components/site-footer.tsx` | `design-baselines/about/07-cta-footer-mastergo.png` | 1220×440 归档图；页面验收使用 1440px 视口复核 | `5816ee5da601620216059640fcaace7f3f25c030d8280423f42e08759ddec20b` | 无 |
| Logo | `components/logo.tsx` | 同上 | 同上 | `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11` | 无 |
| BookingModal | `components/booking-modal.tsx` | `booking-modal-desktop.png` / `booking-modal-mobile-final.png` | 1440px 桌面 + 390px 工程检查 | 开工 `57409cdad8a53fca2140b64be1b72c7f86481eb213101396ca54d9435d0886aa`；授权后 `1ef9eb10296ff62a52157d0afc0f92d63c321655a30f746d537a08abafa26842` | 用户 2026-07-20 授权补焦点管理 |
| BookingTrigger | `components/booking-trigger.tsx` | 公共组件交互回归 | 1440px 桌面 + 390px 工程检查 | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 无 |

## 用户确认覆盖项

| 项目 | MasterGo 原值 | 用户确认值 | 对话证据 |
|---|---|---|---|
| 公共头尾 | 当前设计稿呈现 | 复用并冻结项目公共头尾 | 2026-07-20 当前任务：公共头尾冻结 |
| 文案与图标 | 当前设计稿 | 禁止补写文案、禁止近似图标 | 2026-07-20 当前任务 |
| BookingModal 键盘可访问性 | 原公共组件无初始焦点和焦点循环 | 用户授权修改公共组件 | 2026-07-20 用户回复“可以” |

## 转化按钮行为

| CTA 文案 | 区块 | 设计动作 | 实现组件 | 是否为例外 | 例外依据 |
|---|---|---|---|---|---|
| 立即预约体验产品 | 01 | 打开预约弹窗 | `BookingTrigger → BookingModal` | 否 | 项目规则 |

## 分区清单

| 区块 ID | 区块名称 | MasterGo 100% 基线 | 文案台账 | 视觉台账 | 内容验收 | 视觉验收 |
|---|---|---|---|---|---|---|
| 01 | Header、面包屑、Hero、现状对比 | `01-hero-mastergo-100.png` | PASS | PASS | PASS | PASS（冻结 Header 高亮差异已记录） |
| 02 | 销售流程与核心产品能力 | `02-process-capabilities-mastergo-100.png` | PASS | PASS | PASS | PASS |
| 03 | 差异化竞争力与产品价值 | `03-differentiation-metrics-mastergo-100.png` | PASS | PASS | PASS | PASS |
| 04 | 指标闭环、POC 体系与行业改变 | `04-poc-industry-mastergo-100.png` | PASS | PASS | PASS | PASS |
| 05 | 优先场景与典型落地示例 | `05-scenarios-mastergo-100.png` | PASS | PASS | PASS | PASS |
| 06 | 合作模式与落地路径 | `06-cooperation-mastergo-100.png` | PASS | PASS | PASS | PASS |
| 07 | 落地建议与 Footer | `07-path-footer-mastergo-100.png` | PASS | PASS | PASS | PASS（冻结 Footer） |

## 范围边界

| 区块 | 属性或素材 | 阻塞原因 | 处理状态 |
|---|---|---|---|
| 全页 | 独立移动端画板 | 当前文件没有独立移动端设计基线 | 不把桌面推导结果计入视觉还原结论 |
| Header | 产品矩阵高亮 | 设计稿显示高亮，但公共 Header 冻结且既有组件无 products 路由高亮参数 | 保持冻结，作为授权例外记录 |

## 2026-07-23 用户视觉覆盖

- 删除 Hero 顶部“产品定位”标签；后续“一图读懂产品定位”模块标题保留。
- 共享面包屑预约按钮改为蓝色描边弱化样式；公共 Header/Footer 不变。
- 最新浏览器批注：恢复差异化与行业改变列表圆点；补齐差异化、AI 对比、产品价值、价值验证、商业实效、落地场景标题图标；补齐三张价值卡、商业实效双卡、六行落地场景和两张场景示例图标。
- MasterGo 当前画板中“图标 11 / 图标 12”已在 100% 缩放下直接选中并导出 SVG；其余图标复用本页此前从 MasterGo 资源面板导出的正式 SVG，不使用 Lucide、Emoji 或截图裁切。
- 当前官网仅验收桌面端，移动端未纳入本轮范围。
