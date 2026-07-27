# Social Grow MasterGo 范围台账

## 2026-07-22 原型内容同步批次

- 内容真源：Google AI Studio 当前交互原型 `https://ai.studio/apps/31940409-b4c4-420a-8018-a504586355a9`，以页面主体 `<main>` 的实际渲染文本为准。
- 视觉真源：本目录既有 MasterGo 基线、当前 `/products/social-grow/` 已实现页面与冻结公共设计系统。
- 用户覆盖：执行 `1A / 2A / 3A`；有对应关系的大模块保留现有视觉，只同步模块内容、顺序、文案、指标和主体 CTA；明显错字修正，歧义保留原型。
- 当前范围：仅桌面端；移动端未纳入本轮官网实现和验收范围。
- 冻结资产：`SiteHeader`、`SiteFooter`、Logo、`ProductBreadcrumb`、`BookingModal`、`BookingTrigger`。
- 本节覆盖下方历史 MasterGo 内容真源口径；历史视觉证据继续有效。

- 页面名称：AI 出海获客智能体 - Social Grow
- MasterGo：`https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=33%3A105924&devMode=true`
- `page_id`：`33:105924`
- 根画板：`AI快搭-9636626`
- 原始画板：1440×5920，SHA-256 `c58d7ebc47dae408e48156ac1f7a81ce8bb93b7d7cce5db9f0f6174b6c1d0067`
- 实现路由：`/products/social-grow/`
- 范围：整页；目标桌面视口 1440×5920。当前文件没有独立移动端画板，移动端仅做工程可用性检查。
- 公共 `SiteHeader`、`SiteFooter`、Logo、`BookingTrigger`、`BookingModal` 冻结复用。

## 公共资产基线

| 资产 | 路径 | 开工 SHA-256 | 允许变化 |
|---|---|---|---|
| Header | `components/site-header.tsx` | `a5edbe507ea4338ccf61f7c50018a2c6863e3fdfebf7b47ac9603c34cfd033ec` | 既有路由高亮 |
| Footer | `components/site-footer.tsx` | `5816ee5da601620216059640fcaace7f3f25c030d8280423f42e08759ddec20b` | 无 |
| Logo | `components/logo.tsx` | `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11` | 无 |
| BookingModal | `components/booking-modal.tsx` | `1ef9eb10296ff62a52157d0afc0f92d63c321655a30f746d537a08abafa26842` | 无 |
| BookingTrigger | `components/booking-trigger.tsx` | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 无 |

## 分区

| ID | 分区 | 设计基线 | 当前门禁 |
|---|---|---|---|
| 01 | Header、面包屑、Hero、过去/现在 | `01-hero-mastergo-100.png` | G4 PASS |
| 02 | 产品效果数字、关键步骤 | `02-process-mastergo-100.png` | G4 PASS |
| 03 | 核心产品能力、治理能力 | `03-capabilities-mastergo-full.png` | G4 PASS |
| 04 | 工作流、产品价值 | `04-workflow-value-mastergo-100.png` | G4 PASS |
| 05 | 商业实效、应用场景 | `05-effect-scenarios-mastergo-100.png` | G4 PASS |
| 06 | 合作模式、选择理由、Footer | `06-cooperation-final-mastergo-100.png` | G4 PASS |

## 用户确认

- 整页还原；禁止补写文案、禁止近似图标。
- 公共头尾冻结。
- 三页按 Social Grow → Mine GEO → AI 获客 Harness 顺序执行。
- 2026-07-20 用户确认：删除“查看演示视频”；`01–04` 改为横向连续显示；两项降幅改为 `-70%~-90%`、`-60%~-85%`。
- 2026-07-20 用户要求重验：过去/现在卡、字体字重、价值清单上下间距、价值卡底距、商业对照背景、场景卡阴影、落地场景区块间距、场景/合作标题图标清晰度。
- 2026-07-20 用户确认保留并发产生的 Header 版本；交付冻结基线更新为 `ea5b1626042d5b6e8d26e7b4c878d27f7301d51e41cd3f82058c06196b065227`，原始开工哈希继续保留在上表用于追溯。
- 2026-07-23 用户确认删除 Hero 顶部“产品定位”标签；各主体模块按浅灰蓝/白色交替背景重新分区；共享面包屑预约按钮改为蓝色描边弱化样式。
- 2026-07-23 最新浏览器批注：区块标签与场景名称不折行；商业实效由两张不对齐的左右卡改为“环节 / 过去 / 现在”三列表格式对照；两张场景卡禁用截图裁图，改用当前 MasterGo `图标 29 / 图标 30` 原始 SVG；合作模式与场景卡的垂直间距按 MasterGo 166px 证据收敛。
- 本轮仅验收桌面端，移动端未纳入范围；公共 Header/Footer、Logo、BookingModal、BookingTrigger 继续冻结。

## 2026-07-24 浏览器批注覆盖

- Hero 主图区与整个 Hero 底部留白继续收敛。
- 价值清单中的“热点雷达价值：”等六个标签禁止折行。
- 商业实效对照改为原型信息结构下的普通三列表格，去除装饰图标与卡片化表头。
- 场景表新增“痛点”列，位于“适用角色”之后；末列删除“【落地业务收益】”标签但保留其后全部原文；场景名称前的装饰圆点删除。

## 2026-07-24 间距与表格批注覆盖

- 目标视口：`1616×1258`；只修改 Social Grow 主体区块，不修改公共 Header/Footer、Logo、BookingModal、BookingTrigger。
- 产品改变、核心能力、产品价值、落地场景、合作模式等主体 section 改为内容自然撑高，桌面端上下 `padding` 统一为 `60px`。
- 商业实效三列表格压缩行高并删除列间竖线；场景表表头文字上下居中。
- 合作模式由左右卡片改成两列表格，保持两列标题与两行内容逐项对应；最终蓝色面板上间距收紧。
- 本批次冻结资产 SHA-256 与 Sales in 同批次记录一致。
- 用户再次确认：Hero 以外全部顶层正文 section 统一为 `60px` 上下内边距。

## 2026-07-25 浏览器批注范围

- Hero 与 Closing 同样纳入 `60px` 上下内边距，删除固定/最小高度。
- Hero 两段正文扩展至容器右边界；Closing 正文在目标桌面视口保持一行。
- 目标视口 `1576×1258`；移动端及公共资产不在范围。

## 2026-07-26 20:27 浏览器纯文字批注范围

- 证据仅来自用户逐条提供的纯文字要求、当前源码、当前 DOM 与计算样式；不读取、不复用旧任务中的图片。
- BC-03：第一张“分钟级”改变卡仅调整图标与文字布局，图标在左、文字在右并上下居中。
- BC-04：场景表每行三个单元格内容上下居中，不修改表格文案和列结构。
- BC-05：示例 `.sgs-scenarios__subtitle` 纳入全站浅色区块说明文字盘点；语义范围、排除项和回归路由见 `design-baselines/solution-batch/light-text-inventory-2026-07-26.md`。
- BC-06：第二张合作卡“私有化部署或定制”标题下距由当前 `23px` 最小收紧为 `16px`。
- 目标桌面视口 `1576×1258`；移动端未纳入范围。
- 公共 `SiteHeader`、`SiteFooter`、Logo、`BookingModal`、`BookingTrigger` 继续冻结。

## 2026-07-26 浏览器批注第二批

- 用户覆盖 ID 9–16：四张改变卡统一为图标在前、标题在后；收紧痛点标题下距；统一缩小成果指标；收紧成果正文上距；移除场景标题背景；第四行内容驱动；调整第二张合作标题上下距。
- 新覆盖取代“仅第一张改变卡”和“合作标题只调下距”的旧局部范围；不修改可见字符串或公共资产。

## 2026-07-27 浏览器批注第四批

- 覆盖 `/products/social-grow/` 内容生产线高度、浅色模块正文颜色、深蓝最终卡正文颜色及同类结果价值卡 `20px` 内边距。
- “浅色字体改黑”仅作用于浅色背景的正文/说明/表格文本；彩色指标、步骤图形、深色按钮和深蓝最终卡排除。目标视口 `1576×1258`。

## 2026-07-27 浏览器批注第五批

- 仅覆盖“典型应用场景示例”桌面表格的正文单元格字号与行高；四行同类正文统一处理，避免只放大用户点中的一格造成层级不一致。
- 不修改表格结构、文案、列宽、背景、图标或公共组件；目标视口 `1576×1258`，移动端不在范围。

## 2026-07-27 浏览器批注第六批

- 仅覆盖 `.social-grow-scenario-cards` 两张典型场景卡：四边内边距 `20px`、内容驱动高度、同一 Grid 行等高。
- 文案、正式 SVG 与公共资产不变；桌面端 `1576×1258`，移动端不在范围。
