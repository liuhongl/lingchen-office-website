# DeepDoc 智眸智能解决方案页视觉属性台账

## 2026-07-22 原型内容同步视觉口径

- 视觉继续使用本文件记录的 MasterGo 既有实现与冻结公共设计系统；内容不再以 MasterGo 文案为准。
- 新文案仅通过 `.dds-page` 作用域内的 `prototype-sync.css` 调整排版，没有修改公共头尾、Logo、字体或预约弹窗。
- 内容变化导致的自然换行和区块高度变化属于用户确认的 `1A / 2A / 3A` 迁移结果；本轮只声明桌面端视觉风格回归，不声明旧画板全页高度 1:1。
- 没有新增生成式语义 SVG；继续复用本文件已核验的正式 MasterGo 素材。

| 元素 ID | 区块 | 元素 | 精确属性 | 图层/素材 | 状态 |
|---|---|---|---|---|---|
| DDS-V0001 | 全页 | 根画板 | 1440×7779 | `full-mastergo-1440x7779.png` SHA-256 `f7c55f9cf81047465ecfd8f0144332fabb69f64fe94fdc1b771608bbafda0bfb` | PASS |
| DDS-V0101 | Hero | 区块 | MasterGo y=167；1440×598；淡蓝灰背景 | `01-hero-mastergo-100.png` SHA-256 `018abc1c71a53eb9cf67502df9a22bd6c2912b53b059de7a5590c59aaf98bfb1` | PASS |
| DDS-V0102 | Hero | 内容列 | x=32；宽约 780；顶部约 95px；左对齐 | 100% 基线 | PASS |
| DDS-V0103 | Hero | H1 | 单行；约 48px/700；`DeepDoc·智眸` 蓝色，余文深色 | 100% 基线 | PASS |
| DDS-V0104 | Hero | 副标题 | 20px/600；蓝色；H1 下约 24px | 100% 基线 | PASS |
| DDS-V0105 | Hero | 正文 | 宽约 780；16px/约30px；深灰；明确 6 行 | 100% 基线 | PASS |
| DDS-V0106 | Hero | 引用 | 左侧 3px 浅蓝竖线；约 14px/24px；两行 | 100% 基线 | PASS |
| DDS-V0107 | Hero | CTA | 184×52；蓝底白字；12px 圆角；右箭头；蓝色阴影 | 100% 基线 | PASS |

- Hero 视觉 `无阻塞项`，可进入实现。
- Hero G4 同视口验收：`01-hero-local-1440.png` 与 `01-hero-mastergo-100.png` 均为 1440×598；并排与差异证据为 `01-hero-comparison.png`、`01-hero-diff.png`；区块边界、文本换行、渐变标题、引用竖线、按钮尺寸与阴影核对通过。
- Hero 交互验收：预约按钮打开公共 `BookingModal`；打开时滚动锁定，`Escape` 可关闭。
| DDS-V0201 | 一图读懂 | 区块 | MasterGo y=765；1440×590；白色背景；底部 1px 分隔线 | `02-one-picture-mastergo-100.png` SHA-256 `d07e317745d4d31b0493cc69d209e7cec8d56e9a5bbc400e5665739713448974` | PASS |
| DDS-V0202 | 一图读懂 | H2 | x=48；顶部约 80px；左侧 4px×32px 蓝色竖线；32px/700 | 100% 基线 | PASS |
| DDS-V0203 | 一图读懂 | 卡片组 | 3 列；左右 32px；列间 24px；卡片约 443×288 | 100% 基线 | PASS |
| DDS-V0204 | 一图读懂 | 卡片 | 白底；1px `#F1F5F9`；16px 圆角；阴影 `0 4px 20px rgba(0,0,0,.03), 0 1px 3px rgba(0,0,0,.04)`；内边距 32px | MasterGo 检查面板 | PASS |
| DDS-V0205 | 一图读懂 | 图标 | 24×24 蓝色 SVG；48×48 淡蓝图标底；三枚均由 MasterGo 资源面板原始导出 | `challenge-documents.svg`、`challenge-layouts.svg`、`challenge-extraction.svg` | PASS |
| DDS-V0206 | 一图读懂 | 标题/正文 | 标题 20px/700 蓝色；正文 16px/约28px `#475569` | 100% 基线 | PASS |

- 一图读懂视觉 `无阻塞项`，可进入实现；未使用截图裁片或近似图标。
- 一图读懂 G4 同视口验收：`02-one-picture-local-1440.png` 与基线均为 1440×590；`02-one-picture-comparison.png`、`02-one-picture-diff.png` 已生成；区块边界、三列卡片、原始 SVG、字体、换行、圆角和阴影核对通过。
| DDS-V0301 | 审单困局 | 区块 | MasterGo y=1355；1440×828；淡灰背景 | `03-problems-mastergo-100.png` SHA-256 `a91163e8b360ab795165efd94a487ccabd4169fbfda5927efe839040ea3449c2` | PASS |
| DDS-V0302 | 审单困局 | 双列布局 | 左右各 672px；列间 32px；标签在卡片组上方 | 100% 基线 | PASS |
| DDS-V0303 | 审单困局 | 痛点卡片 | 1px 浅红边框；16px 圆角；白底；编号为 24px 浅红圆 | 100% 基线 | PASS |
| DDS-V0304 | 审单困局 | 方案卡片 | 1px 浅蓝边框；16px 圆角；白底；编号为 24px 浅蓝圆 | 100% 基线 | PASS |
| DDS-V0305 | 审单困局 | 列标签图形 | 24px 浅色圆；红色 × / 蓝色 ✓ 为 MasterGo 文本型标记 | MasterGo 检查面板 | PASS |
| DDS-V0306 | 审单困局 | 总结条 | x=32；宽 1376；高约 70px；浅蓝底、浅蓝边框、16px 圆角；蓝色居中文字 | 100% 基线 | PASS |

- 审单困局视觉 `无阻塞项`，可进入实现。
- 审单困局 G4 同视口验收：`03-problems-local-1440.png` 与基线均为 1440×828；`03-problems-comparison.png`、`03-problems-diff.png` 已生成；双列边界、纵向节奏、卡片尺寸、换行、颜色与总结条核对通过。
| DDS-V0401 | 核心流程 | 区块 | MasterGo y=2183；1440×781；白底；底部 1px 分隔线 | `04-core-flow-mastergo-100.png` SHA-256 `4fde757975881101a9b6bc35a8e50457ad3c39fb633cde9872f86cdb87294b8b` | PASS |
| DDS-V0402 | 核心流程 | 卡片组 | 2×2；左右 32px；列间 24px；行间 24px | 100% 基线 | PASS |
| DDS-V0403 | 核心流程 | 卡片 | 白底；浅灰边框；16px 圆角；阴影；左侧 56px 蓝色编号方块 | 100% 基线 | PASS |
| DDS-V0404 | 核心流程 | 总结条 | x=32；高约 89px；浅蓝底、浅蓝边框、16px 圆角；左侧 40px 蓝色信息图形 | 100% 基线 | PASS |

- 核心流程视觉 `无阻塞项`，可进入实现。
- 核心流程 G4 同视口验收：`04-core-flow-local-1440.png` 与基线均为 1440×781；`04-core-flow-comparison.png`、`04-core-flow-diff.png` 已生成；标题、导语、2×2 卡片、编号块、总结条的边界与换行核对通过。
| DDS-V0501 | 四维审核 | 区块 | MasterGo y=2964；1440×584；淡灰背景；底部 1px 分隔线 | `05-four-dimensions-mastergo-100.png` SHA-256 `52d20322eb2954c258848b2ee79a6ed0b89f7f800d916a915cdb0b178baa70f8` | PASS |
| DDS-V0502 | 四维审核 | 卡片组 | 2×2；左右 32px；列间 24px；行间 24px | 100% 基线 | PASS |
| DDS-V0503 | 四维审核 | 卡片 | 高约 160px；白底；浅灰边框；16px 圆角；轻阴影；左上 32px 蓝色编号块 | 100% 基线 | PASS |

- 四维审核视觉 `无阻塞项`，可进入实现。
- 四维审核 G4 同视口验收：`05-four-dimensions-local-1440.png` 与基线均为 1440×584；`05-four-dimensions-comparison.png`、`05-four-dimensions-diff.png` 已生成；区块边界、2×2 卡片、编号、文字换行和阴影核对通过。
| DDS-V0601 | 核心能力 | 区块 | MasterGo y=3548；1440×671；白底；底部 1px 分隔线 | `06-capabilities-mastergo-100.png` SHA-256 `938fe0cff3a12a41b1dbe5bade4d0d677248830de6fe3933f877d23c682c5c3d` | PASS |
| DDS-V0602 | 核心能力 | 引擎条 | 左右 32px；高约 74px；淡灰底；浅灰边框；16px 圆角；红/蓝模式胶囊 | 100% 基线 | PASS |
| DDS-V0603 | 核心能力 | 卡片组 | 3×2；列间 24px；行间 24px；卡片高约 166px | 100% 基线 | PASS |
| DDS-V0604 | 核心能力 | 图标 | 六枚 20×20 蓝色 SVG，置于 40×40 淡蓝圆角底 | MasterGo 原始导出：`business-context.svg`、`knowledge-reasoning.svg`、`continuous-learning.svg`、`hidden-risk.svg`、`zero-shot-extraction.svg`、`complex-scenes.svg` | PASS |

- 核心能力视觉 `无阻塞项`；六枚图标均为 MasterGo 原始 SVG，不使用近似图标。
- 核心能力 G4 同视口验收：`06-capabilities-local-1440.png` 与基线均为 1440×671；`06-capabilities-comparison.png`、`06-capabilities-diff.png` 已生成；原始 SVG 经无损 PNG 转换后完整加载，卡片边界、图标、换行和引擎条核对通过。
| DDS-V0701 | 交付结果 | 区块 | MasterGo y=4219；1440×856；淡灰背景；底部 1px 分隔线 | `07-results-mastergo-100.png` SHA-256 `8c7641c2943795e088daca28458050f1c4a1f3016c4d5447816c04cc45e43480` | PASS |
| DDS-V0702 | 交付结果 | 指标卡 | 4 列；白底；16px 圆角；轻阴影；蓝色大号数字居中 | 100% 基线 | PASS |
| DDS-V0703 | 交付结果 | 价值卡 | 2×3；白底；浅灰边框；16px 圆角；32px 蓝色编号块 | 100% 基线 | PASS |

- 交付结果视觉 `无阻塞项`，可进入实现。
- 交付结果 G4 同视口验收：`07-results-local-1440.png` 与基线均为 1440×856；`07-results-comparison.png`、`07-results-diff.png` 已生成；四列指标、`99 / % +` 特殊排版、2×3 价值卡、文字换行和区块边界核对通过。
| DDS-V0801 | 应用场景 | 区块 | MasterGo y=5075；1440×947；白底；底部 1px 分隔线 | `08-applications-mastergo-100.png` SHA-256 `4d13428a35ceaec168c86e30e706f78b5ec29faf7a1c0b0450cbfdfd9eb5424e` | PASS |
| DDS-V0802 | 应用场景 | 场景表 | 左右 32px；2 列、1 表头＋6 数据行；16px 圆角；浅灰表头和分隔线 | 100% 基线 | PASS |
| DDS-V0803 | 应用场景 | 标签 | 5 枚淡蓝胶囊标签；蓝色文字；横向排列 | 100% 基线 | PASS |
| DDS-V0804 | 应用场景 | 客户案例面板 | 浅灰底；16px 圆角；内部 2 列白色案例卡 | 100% 基线 | PASS |
| DDS-V0805 | 应用场景 | 案例标题图标 | MasterGo 图层 `图标 18`；设计尺寸 20×20；颜色 `#2563EB`；资源面板原始预览为 50×50 透明 PNG，按 20×20 显示 | `public/images/solutions/deepdoc/case-building.png` SHA-256 `383aedffaa9064142884bf45128ed8b0632510f051d3974d476631589ccb484c` | PASS |

- 应用场景视觉 `无阻塞项`；案例标题图标取自 MasterGo 资源面板的原始图层预览，不使用截图裁片、图标库或 CSS 近似。
- 应用场景 G4 同视口验收：`08-applications-local-1440.png` 与基线均为 1440×947；`08-applications-comparison.png`、`08-applications-diff.png` 已生成。标题、表格、标签、案例面板与原始建筑图标的边界和纵向位置逐项核对通过；`scrollWidth === clientWidth`。
| DDS-V0901 | 合作模式 | 区块 | MasterGo y=6022；1440×1007；淡灰背景 | `09-cooperation-mastergo-100.png` SHA-256 `12a40ab7f49f623f35a89e199c00921ace99f8be7bc4a6e30e92d01335526153` | PASS |
| DDS-V0902 | 合作模式 | 标题/导语 | 左右 32px；H2 左侧 4×32 蓝色竖线；导语位于标题下 | 100% 基线 | PASS |
| DDS-V0903 | 合作模式 | 付费模式卡 | 2 列；首卡蓝色 2px 边框；次卡浅灰边框；16px 圆角；轻阴影 | 100% 基线 | PASS |
| DDS-V0904 | 合作模式 | 交付标准面板 | 白底、浅灰边框、16px 圆角；标题下 4 列交付标准 | 100% 基线 | PASS |
| DDS-V0905 | 合作模式 | 交付标准标题图标 | 20×20 蓝色盾牌线性图标；DevMode 未暴露与画板可见结果一致的独立下载源，使用 100% 无干扰基线的逐像素原稿；未使用图标库或 CSS 近似 | `public/images/solutions/deepdoc/cooperation-shield.png` SHA-256 `155dce11ac99c52f6db06284f7aee1ca660e568ca7d7ddbb802d583417875900` | PASS |
| DDS-V0906 | 合作模式 | 蓝色价值卡 | 3 列；纯蓝底、白字；16px 圆角；蓝色阴影 | 100% 基线 | PASS |

- 合作模式 G4：`09-cooperation-local-1440.png`、`09-cooperation-comparison.png`、`09-cooperation-diff.png` 已生成；区块边界、两列付费卡、交付标准面板、盾牌、四列标准和三列价值卡逐项核对通过。
| DDS-V1001 | Closing CTA | 区块 | MasterGo y=7029；1440×360；淡蓝灰背景；标题、正文、按钮居中 | `10-closing-mastergo-100.png` SHA-256 `e3a14b7b188b05876ade40a96a2297c8c3c02fab98914d94b37448858f24b7c8` | PASS |
| DDS-V1002 | Closing CTA | 标题 | 深色与蓝色短语混排；居中；约 32px/700 | 100% 基线 | PASS |
| DDS-V1003 | Closing CTA | CTA | 蓝底白字；右箭头；约 204×56；12px 圆角；蓝色阴影 | 100% 基线 | PASS |
| DDS-V1101 | Footer | MasterGo 尾部 | y=7389；1440×390；深色 Footer | `11-footer-mastergo-100.png` SHA-256 `899665e7df9697782e19d62169a4b6bdbc95cb00ce37fea55334645a07fe1e06` | 设计证据 PASS；实现冻结复用公共 `SiteFooter` |

## 2026-07-22 用户审查视觉台账

| 元素 | 用户覆盖 | 本地证据 | 状态 |
|---|---|---|---|
| 数字徽标 | 等宽数字、无尾点 | `user-review-full-local-1671.png` | PASS |
| 结果指标 | 数字与单位使用 baseline 对齐且不换行 | 同上 | PASS |
| 模式徽标 | 两侧统一为紧凑圆角胶囊 | 同上 | PASS |
| 价值卡 | 去除重复顶部序号并垂直居中 | 同上 | PASS |

## 2026-07-27 浏览器批注第六批

| 元素 ID | 元素 | 开工运行态 | 用户覆盖 | 状态 |
|---|---|---|---|---|
| DDS-R6-01 | 三张挑战卡标题 | 图标与标题间距均 4px | 三卡图标列 48px、gap 16px，实际净距均 16px并垂直居中 | PASS |
