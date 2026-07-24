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
