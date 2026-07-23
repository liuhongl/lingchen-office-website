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
