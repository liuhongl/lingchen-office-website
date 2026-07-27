# AI 获客 Harness 解决方案页视觉属性台账

> 设计证据对应 `page_id=17:4896`、根画板 `AI快搭-9636697`。旧产品页截图与裁图不计入本页证据。

| 元素 ID | 区块 | 元素 | 精确属性与证据 | 素材来源 | 状态 |
|---|---|---|---|---|---|
| AHS-V0001 | 全页 | 根画板 | 1440×8579；纵向边界见 `scope.md` | `full-mastergo-1440x8579.png` | PASS |
| AHS-V0101 | Hero | 区块 | 原型迁移后保留现有 Hero 排版与字体体系，桌面 1440 × 900 无横向溢出 | 当前页面与既有 MasterGo 基线 | PASS |
| AHS-V0102 | Hero | 右侧业务状态插画 | Google AI Studio 当前原型不存在该模块，按用户确认 2A 删除 | 用户确认覆盖 | REMOVED |
| AHS-V0201 | 一级认知 | 卡片正文 | Outfit；14px；400；line-height 23.8px；`#64748B` | MasterGo 研发属性 | PASS |
| AHS-V0202 | 一级认知 | 卡片标题 | Outfit；18px；700；line-height 27px；`#0F172A` | MasterGo 研发属性 | PASS |
| AHS-V0203 | 一级认知 | 标题组 | 图层 `组 614` / `33:243461`；x=52、y=80、1336×42；横向 Flex；居中；gap=16；文本 Outfit 28px/700/42px、`#0F172A`；左侧蓝条按原图层保留 | MasterGo 研发属性 | PASS |
| AHS-V0204 | 一级认知 | 卡片网格 | 图层 `组 616` / `33:243311`；x=52、y=170、1336×520.78；Flex wrap；行列 gap 均 24px | MasterGo 研发属性 | PASS |
| AHS-V0205 | 一级认知 | 单卡 | 429.33–429.34×248.39；padding 33px；16px 圆角；白底；1px `#F1F5F9`；`0 4px 24px rgba(15,23,42,.06)` | MasterGo 研发属性 | PASS |
| AHS-V0206 | 一级认知 | 图标底座 | 图层 `组 618` / `33:243393`；48×48；圆角 12；背景 `rgba(37,99,235,.1)`；居中；卡内 x=33、y=33 | MasterGo 研发属性 | PASS |
| AHS-V0207 | 一级认知 | 卡片标题 | 卡内 x=33、y=105；Outfit 18px/700/27px；`#0F172A` | MasterGo 研发属性 | PASS |
| AHS-V0208 | 一级认知 | 卡片正文 | Outfit 14px/400/23.8px；`#64748B`；卡 1 文本框 368.93×47.59 | MasterGo 研发属性 | PASS |
| AHS-V0209 | 一级认知 | 图标 1 | `图标 7` / `33:243395`；SVG 22×22；`viewBox 0 0 22 22`；`#2563EB` | `reason-contact.svg`；SHA-256 `5ae0cea5d180e3f480724a129744c5f22967beedd4b9a87414e24d370d120a92` | PASS |
| AHS-V0210 | 一级认知 | 图标 2 | `图标 8` / `33:243339`；SVG 22×22；`#2563EB` | `reason-growth.svg`；SHA-256 `3c356c9967550a28a793a0b2b96cb8edf2ef5237e0c257c99f6a072b101ea6f0` | PASS |
| AHS-V0211 | 一级认知 | 图标 3 | `图标 9`；SVG 22×22；`#2563EB` | `reason-ai-value.svg`；SHA-256 `1cb639df869357bd428f6b4cb8a3e29dd0da3e8b70d89d4e0c0eb6fe38fb0730` | PASS |
| AHS-V0212 | 一级认知 | 图标 4 | `图标 10`；SVG 22×22；`#2563EB` | `reason-trust.svg`；SHA-256 `e9b5a47bf0897ffd0e730e1289c047e0a9da4cdb350b88d0a57d33dcbccc9220` | PASS |
| AHS-V0213 | 一级认知 | 图标 5 | `图标 11`；SVG 22×22；`#2563EB` | `reason-evolution.svg`；SHA-256 `16b25c5d13f25d89784c8ca14cbe7fe89a8154705125b37e8aba3da215c9ccae` | PASS |
| AHS-V0214 | 一级认知 | 区块基线 | 根画板 y=851；整区研发高度 770.78px；背景与五卡可见范围见无编辑器 1440px 基线 | `02-first-principles-mastergo-100.png`；SHA-256 `a133d942563317707713169ca555cc934d2e46e754c1e230758e485413266b01` | PASS |

## 门禁结论

- 一级认知区视觉台账已清零；当前原型迁移版本的 Hero 用户覆盖已登记并完成桌面复验。
- 五枚图标均由当前 MasterGo 原始图层导出；没有复用旧截图裁图。
## 2026-07-22 原型内容同步批次视觉声明

- 视觉继续以当前产品详情实现和本文件既有 MasterGo 台账为准；原型仅作为内容真源。
- 本批次优先复用已归档正式图标与图片，没有以 Emoji、Unicode 或通用图标库替代正式素材。
- 当前页面未新增需要按业务语义生成的独立 SVG；用户的官网级语义 SVG 授权继续有效，但不替代已有 MasterGo 正式素材。
- 仅验收桌面端；2026-07-22 主任务浏览器复验确认唯一 H1、无横向溢出，所有懒加载图片滚动后完整加载。

## 2026-07-22 产品矩阵桌面视觉统一覆盖

- 大标题采用现有 MasterGo/官网的蓝色高字重强调，小标题使用同色系较小字号与稳定层级，不新增原型外文案。
- 正文模块统一使用约 `92px` 桌面端上下节奏；内容型卡片改用 `height:auto` 与必要的 `min-height`，避免文字增长后重叠。
- “重构关键业务流”作为独立白底区块，四张卡横向铺满，并复用已归档的正式价值图标。
- 本覆盖只适用于桌面端产品矩阵详情页，公共 Header/Footer 不在修改范围。

## 2026-07-23 浏览器批注覆盖

- “落地建议与指引”保留原有面板、字体、颜色与行高，仅将第 1、2、3 点拆成三个 `display:block` 文本节点，确保每点从新行开始。

## 2026-07-23 模块拆分视觉覆盖

| 元素 ID | 区块 | 用户覆盖 | 实现要求 | 状态 |
|---|---|---|---|---|
| AHS-V0901 | 产品价值 / 价值跃迁 | “价值跃迁模型”作为独立大模块 | 两个独立 `section`；产品价值 `#f7f9fc`，价值跃迁 `#eef5ff`；保留 92px 桌面区块节奏 | PASS |
| AHS-V1101 | 落地场景 | 独立大模块 | 独立 `section`，背景 `#f7f9fc`，保留现有标题、表格与案例卡片 | PASS |
| AHS-V1201 | 落地场景标题图标 | 去掉浅色/白色背景 | 保留正式 `cases-title@3x.png`，不换用近似图标；以 `contrast(300%) + mix-blend-mode:multiply` 消除浅色底，40×40 CSS px 显示 | PASS |
| AHS-V1301 | 合作模式 | 独立大模块 | 独立 `section`，背景 `#fff`，与落地场景形成清晰色带区分 | PASS |
| AHS-V1102 | 经典落地案例 | 标题垂直间距 | 1413×1258 运行时基线实测：上间距 0px、下间距 72px；调整后上 48px、下 28px，标题仍为 16px/700/`rgb(17, 26, 45)`，文案保持不变；无横向溢出 | `output/playwright/ai-harness-case-spacing-2026-07-23/` | PASS |

- 同视口证据：`output/playwright/ai-harness-module-split-2026-07-23/after/` 下的 `value.png`、`value-transition.png`、`cases.png`、`cases-icon.png`、`cooperation.png`。

## 2026-07-24 用户视觉覆盖

- Hero 与介绍模块由固定高度/大 padding 改为更紧凑的内容节奏。
- `.acq-tech` 去掉深蓝填充，使用透明背景与现有边框体系；文字切回深色以保持可读性。
- `.acq-tech p` 为 14px。
| 2026-07-24-TABLE | 价值跃迁三列、场景四列 | 普通浅色表格；各列独立；列间距 20px；桌面 1616×1258 验收 | 用户浏览器批注 1-4 | PASS；`output/playwright/product-feedback-2026-07-24-v3/harness-value-cua2-1616x1258.png`、`harness-cases-cua-1616x1258.png` |
| AHS-V2404 | Hero / 介绍 | 用户浏览器批注 6-7 | 取消固定高度，使用紧凑内容 padding；介绍区下间距接近段落间距 | CONFIRMED |
| AHS-V2405 | 场景与合作表格 | 用户浏览器批注 9-14 | 表头 14px/700，正文 12px；行垂直居中；合作卡改表格；提示框浅色 | CONFIRMED |
| AHS-V2406 | 全部正文大模块 | 用户 2026-07-24 浏览器批注 | `height:auto; min-height:0; padding-block:60px`；Hero、介绍区除外 | CONFIRMED |

## 2026-07-25 浏览器视觉覆盖

| 元素 ID | 区块 | 用户覆盖 | 实现要求 | 状态 |
|---|---|---|---|---|
| AHS-V2501 | Hero | 上下内容间距统一 60px，合适高度 | `height:auto; min-height:0; padding-block:60px`，内容自然撑高 | CONFIRMED |
| AHS-V2502 | Hero 标题 | 两段同一行 | 标题组横向排列、基线对齐、禁止桌面端换行 | CONFIRMED |
| AHS-V2503 | Hero 正文 | 撑满右侧宽度 | 两段正文宽度 `100%`，不再保留旧 1080/1120px 固定宽度 | CONFIRMED |
| AHS-V2504 | 一级认知卡 | 标题位于图标右侧 | 图标与标题同一行、垂直居中、间距 12px；卡片内容驱动高度 | CONFIRMED |
| AHS-V2505 | 黄金矩阵 | 标题与正文同一行 | 左侧图标、标题、正文整体垂直居中 | CONFIRMED |
| AHS-V2506 | 优势与技术底座 | 删除固定高度 | `height:auto; min-height:0`；优势卡上下 20px，技术底座自然撑高 | CONFIRMED |
| AHS-V2507 | 成果卡 | 收紧高度并删除固定高度 | 指标卡、价值卡上下 20px，内容自然撑高 | CONFIRMED |
| AHS-V2508 | 场景卡 | 前两列垂直居中 | 卡片无固定/最小高度，上下 20px；前两列 `justify-content:center` | CONFIRMED |
| AHS-V2509 | 案例卡 | 卡片上下 20px | 删除固定/最小高度，由内容与内边距撑开 | CONFIRMED |
| AHS-V2510 | 服务保障面板 | 高度调小 | 删除固定/最小高度，上下内边距 30px | CONFIRMED |

- 同视口验收目标：`1576 × 1258`；需要复核唯一 H1、无横向溢出、指定卡片计算高度为 `auto` 结果且上下内边距符合覆盖值。

## 2026-07-26 20:27 浏览器批注视觉覆盖

| 元素 ID | 元素 | 当前计算证据 | 用户覆盖与实现值 | 状态 |
|---|---|---|---|---|
| AHS-V2601 | 第一张应用卡 | 首卡 `160.98px`，其余三卡 `137.19px`；当前上下 padding `20px` | 仅首卡上下 padding 最小收紧至 `16px`，保持 `height:auto` | CONFIRMED |
| AHS-V2602 | 模式 1 标题行 | 徽标与标题中心纵向差 `54.5px` | 使用独立 `header` 包装，水平排列、`align-items:center`、间距 `12px` | CONFIRMED |
| AHS-V2603 | 五个区块级 lead | BC-05 全站语义盘点 | Hero、优势、成果、应用、合作 lead 改为 `#111827` | PASS：可见节点计算色均为 `rgb(17,24,39)` |

## 2026-07-26 浏览器批注第二批

| 元素 | 采样前 | 用户覆盖后 | 状态 |
|---|---|---|---|
| 痛点卡 | 323px，外层 20px + 内层 24px | 283px，外层 0、内层 24px | PASS |
| 优势区 | 上白下灰渐变；卡片浅灰/白不一 | section `#EEF5FF`；内容卡统一白底 | PASS |
| 应用场景 | 四个独立圆角卡、gap 32px | 单一表头/表体边框、连续行分隔、行无圆角 | PASS |
| 合作模式 | 仅模式 1 同排；两卡约 298px stretch | 两个标题均同排；200.8/224.6px 内容驱动；padding 20px | PASS |

证据：`output/playwright/browser-comments-round2-2026-07-26/ai-harness-*.png`。

## 2026-07-27 浏览器批注第三批

| 元素 ID | 元素 | 开工运行态 | 用户覆盖 | 状态 |
|---|---|---|---|---|
| AHS-R3-01 | 应用场景表列 | 前两列 `border-right:1px` | 三列均 `border-right:0px` | PASS |
| AHS-R3-02 | 合作模式两卡 | `200.8/224.6px` | 实测 `224.59/224.59px`，内容溢出 `0` | PASS |

## 2026-07-27 浏览器批注第四批

| 元素 ID | 元素 | 开工运行态 | 用户覆盖 | 状态 |
|---|---|---|---|---|
| ACQ-R4-01 | 对比卡 | `229px`、`padding:78px 40px 30px` | 内容撑开并降低高度 | PASS |
| ACQ-R4-02 | 核心能力图标 | 源 168×168，实际 `46×56px` | 56×56 等比显示 | PASS |
| ACQ-R4-03 | 差异优势 | 内部上下留白 `21/39px` | 上下留白一致 | PASS |
| ACQ-R4-04 | 指引图标 | PNG 深色底可见 | 使用已有 MasterGo 导出透明信息图标 `public/images/customer-cases/summary-info.svg`；34×34 容器、18×18 图形；原始 SVG SHA 见客户案例视觉台账 | PASS |
| ACQ-R4-05 | 同类价值卡 | `padding:24px` | `padding:20px` | PASS |

## 2026-07-27 浏览器批注第六批

| 元素 ID | 元素 | 开工运行态 | 用户覆盖 | 状态 |
|---|---|---|---|---|
| ACQ-R6-01 | 三张核心能力标签 | 首列 46px、gap 12px，56px 图标侵入间距 | 三卡均为 48px 图标列、20px gap，标签距卡左 89px | PASS |
| ACQ-R6-02 | 三张核心能力图标 | 56×56px | 三枚均为 48×48px，1:1 比例与正式位图来源不变 | PASS |

## 2026-07-27 浏览器批注第六批

| 元素 | 开工运行态 | 用户覆盖 | 状态 |
|---|---|---|---|
| `.acq-case-cards > article` 两卡 | `168.06px`；padding `32px` | 四边 `20px`、内容撑高；实测两卡均 `144.06px`、内容溢出 `0` | PASS |

## 2026-07-27 浏览器批注第七批

| 元素 | 开工运行态 | 用户覆盖 | 状态 |
|---|---|---|---|
| `.acq-modes-table > .head` | 实际高 `82px`；`min-height:52px`；padding `16px 20px`；content-box | `52px`；border-box；padding `10px 20px`；三个单元格 padding `0`，内容溢出 `0` | PASS |

## 2026-07-27 浏览器批注第八批

| 元素 | 开工运行态 | 用户覆盖 | 状态 |
|---|---|---|---|
| 首组 `.acq-reasons > article` 五卡 | 正文距首行约 `20.80/10.41/0/0/10.41px` | 显式 `row-gap:10px`；实测五卡全部精确为 `10px` | PASS |
| 首组五个序号 | 实际 `48×36px`、字号 `18px` | 五个均为 `36×36px`、字号 `15px` | PASS |
| `.acq-flow-module .acq-reasons > article` 四卡 | `176px`、`min-height:176px`、padding `28px` | 实测四卡均高 `135.89px`、`min-height:0`、padding `20px`、内容溢出 `0` | PASS |

## 2026-07-27 浏览器批注第九批

| 元素 | 开工运行态 | 用户覆盖 | 状态 |
|---|---|---|---|
| 首组五张原因卡标题行 | 距卡顶约 `41.80/31.39/21/21/31.39px` | `align-content:start`；实测五张均距卡顶 `21px` | PASS |
| 页面面包屑 | compact 高 `46px`、无预约 CTA | 实测完整模式高 `74px`、显示预约 CTA、吸附 top `66px` | PASS |
# 2026-07-27 浏览器批注覆盖

| 视觉 ID | 元素 | 修改前实测（1486×1258） | 用户覆盖目标 | 实现值 | 状态 |
|---|---|---|---|---|---|
| ACQ-V-20260727-01 | 产品介绍两段正文 | Shell `1200px`，正文 `max-width:900px` | 撑到最右侧 | `max-width:none; width:100%` | READY |
| ACQ-V-20260727-02 | 三大核心差异正文 | `12px` | `14px` | `14px` | READY |
