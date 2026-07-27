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

## 2026-07-24 浏览器批注覆盖

- Hero 标题、副标题、导语和“极度跃迁”按用户逐字覆盖；Hero 与“一图读懂产品定位”区块收紧上下留白。
- “重构关键业务流”四张卡的说明文字统一为 14px。
- 公共 Header/Footer、Logo、BookingModal、BookingTrigger 保持冻结；只继承共享面包屑的位置调整。

## 2026-07-24 间距与表格批注覆盖

- 目标视口：`1616×1258`；只修改 Sales in 主体区块，不修改公共 Header/Footer、Logo、BookingModal、BookingTrigger。
- 所有 `.sales-section` 改为内容自然撑高，桌面端上下 `padding` 统一为 `60px`；“一图读懂产品定位”和“重构关键业务流”不再保留额外不对称留白。
- 落地场景表首列删除装饰图标；两张典型场景卡删除顶部装饰图标，原文、顺序与表格字段不变。
- 最终“为什么选择灵宸 Sales in？”提示卡改为浅色信息面板。
- 本批次冻结资产 SHA-256：Header `5aef1bd27e0a0a57ffdc65dbb80df4ab5cc30aa2c17b1283f3791a17da345bfa`；Footer `8732972918addddddbbcbec095ff0b2b7c34797ea74522bf019427956ceae2ae`；Logo `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11`；BookingModal `3e143bc70f5cc270231d3961ff5eb1b92481be637c55bcbc36269cfedbb32206`；BookingTrigger `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7`。
- 用户再次确认：全部 `.sales-section` 必须保持 `60px` 上下内边距，Hero 除外。

## 2026-07-25 浏览器批注范围

- Hero 与 Closing 均改为 `padding-block: 60px`，删除固定/最小高度。
- 痛点卡、优势卡、落地路径卡改为内容驱动高度；优势标题与路径步骤分别跟随图标水平对齐。
- 本轮含用户明确文案覆盖；目标视口 `1576×1258`，移动端与公共资产不在范围。

## 2026-07-26 Hero 间距批注范围

- 目标视口：`1576×1258`；只修改 `/products/sales-in/` Hero 的桌面端间距，不改文案、结构、图标与交互。
- Hero 内两张“过去 / 现在”对比卡取消固定高度和最小高度，四侧内边距统一为 `20px`。
- Hero 主标题顶部留白与对比卡底部留白改为等距；内容自然撑高，不设置固定高度。
- 公共 Header/Footer、Logo、BookingModal、BookingTrigger 继续冻结；本轮开工 SHA-256：Header `5aef1bd27e0a0a57ffdc65dbb80df4ab5cc30aa2c17b1283f3791a17da345bfa`，Footer `8732972918addddddbbcbec095ff0b2b7c34797ea74522bf019427956ceae2ae`，Logo `4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85`，BookingModal `3e143bc70f5cc270231d3961ff5eb1b92481be637c55bcbc36269cfedbb32206`。
- 当前官网仅验收桌面端；移动端不在本轮范围。

## 2026-07-26 20:27 纯文字批注范围

- 目标路由：`/solutions/products/sales-in/`；目标桌面视口 `1576 × 1258`。
- BC-01：Hero 副标题逐字替换为“构建您的出海获客能力体系 · 让获客到成交的每一步都可衡量、可复制”，并同步当前路由 description / Open Graph description，避免元数据继续使用旧表述。
- BC-02：优势区“不是一次性使用……”长说明在目标桌面视口单行展示；仅在 `min-width:1280px` 的桌面范围解除旧 `900px` 文本宽度并禁止换行，较窄历史响应式代码不在本轮修改范围。
- 公共 Header、Footer、Logo、BookingModal、BookingTrigger 均保持冻结；本批不修改图标、交互或其他可见文案。

## 2026-07-26 浏览器批注第二批

- 用户覆盖 ID 6–8：第三张成果卡降低高度、场景表行高收紧、同类场景标题移除背景。
- 不改可见字符串；桌面视口 1576×1258，移动端不在本轮范围。

## 2026-07-27 浏览器批注第三批

- 用户覆盖：四张结果指标卡恢复同一高度；新要求取代第二批中“仅第三卡降到 150px”的局部覆盖。
- 目标视口 `1576×1258`；可见文案、配色、公共资产与其他区块不变。

## 2026-07-27 浏览器批注第四批

- 覆盖 `/products/sales-in/` 两张典型场景卡、四张路径卡及同类价值卡 `20px` 内边距。
- 标签/步骤与标题同排并相距 10px、垂直居中；正文进入下一行。目标视口 `1576×1258`，公共资产冻结。

## 2026-07-27 浏览器批注第六批

- 仅覆盖 `.sales-examples` 两张典型落地场景卡：四边内边距 `20px`、内容驱动高度、同一 Grid 行等高。
- 文案、图标与公共资产不变；桌面端 `1576×1258`，移动端不在范围。

## 2026-07-27 浏览器批注第七批

- 仅覆盖 `.sales-capability-grid > article` 五张核心能力卡：四边内边距 `20px`、移除固定最小高度、内容撑高、同一 Grid 行等高。
- 文案、图标、网格列数与公共资产不变；桌面端 `1576×1258`，移动端不在范围。
