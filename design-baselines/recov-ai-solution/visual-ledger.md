# Recov AI 解决方案页视觉属性台账

## 2026-07-22 原型内容同步视觉口径

- 视觉继续使用本文件记录的 `.ras-*` MasterGo 实现与冻结公共设计系统；内容改以原型为准。
- 原型新增“应用场景”“为什么选择”使用现有卡片、边框、圆角、蓝色标题与留白语言；路由独占样式位于 `prototype-sync.css`。
- 没有修改公共头尾、Logo、字体或预约弹窗，也没有新增语义 SVG；继续复用已核验正式素材。
- 新模块无旧 MasterGo 分区画板，只声明桌面端风格一致性回归，不声明新增区块 1:1。

| 元素 ID | 区块 | 元素 | 精确属性 | 图层/素材 | 状态 |
|---|---|---|---|---|---|
| RAS-V0001 | 全页 | 根画板 | 1440×6934；背景 `#FFFFFF` | `容器 42`；`full-mastergo-1440x6934.png` SHA-256 `e7b4e0f0d6610fed12ce81e1af8cd2075dd658fecb1145e8f8dac35fc0aa8b9e` | PASS |
| RAS-V0101 | Hero | 区块 | 根画板 y=160；1440×582.5；局部基线 1440×743 含冻结头部 | `组 17` / `33:249143`；`01-hero-mastergo-100.png` SHA-256 `af81f083621681a2e3a445207356b75f1cf43ff5f5da7ae1c6c43608f406e791` | PASS |
| RAS-V0102 | Hero | 标签容器 | Hero 内 x=60、y=112；197.31×30；padding 6px 12px；gap 8；圆角 9999；背景 `#EFF6FF`；1px `#BFDBFE` | `组 18` / `33:249150` | PASS |
| RAS-V0103 | Hero | 标签文字 | 157.31×15.5；DM Sans 12px/600/16px；letter-spacing .3px；`#1D4ED8` | `文本 20` / `33:249153` | PASS |
| RAS-V0104 | Hero | 标签圆点 | 6×6；圆角 9999；背景 `#3B82F6`；标签内 x=12、y=12 | `组 19` / `33:249151` | PASS |
| RAS-V0105 | Hero | H1 | 768×120；Space Grotesk 60px/700/60px；letter-spacing -1.5px；`#0F172A`；明确两行 | `文本 21` / `33:249144` | PASS |
| RAS-V0106 | Hero | 副标题 | Hero 内 x=60、y=310；768×32.5；DM Sans 20px/600/32.5px；`#1D4ED8` | `容器 6` / `33:249199`；文本 22 | PASS |
| RAS-V0107 | Hero | 正文 | Hero 内 x=60、y=358；672×26；DM Sans 16px/400/26px；`#475569` | `容器 8` / `33:249186`；文本 23 | PASS |
| RAS-V0108 | Hero | CTA 行 | Hero 内 x=60、y=416；768×54；Flex；gap 16；垂直居中 | `组 21` / `33:249169` | PASS |
| RAS-V0109 | Hero | 主 CTA | 184×52；padding 14px 32px；gap 8；圆角 12；背景 `#2563EB`；双层 `#BFDBFE` 阴影；文字 DM Sans 16px/600/24px、白色 | `组 22` / `33:249170` | PASS |
| RAS-V0110 | Hero | 主 CTA 箭头 | MasterGo 原始 SVG 16×16；白色描边 | `图标 3` / `33:249178`；`hero-arrow.svg` SHA-256 `92432ca8bd48c9e2bb3ac579b54278eaf4f049988c641bf39e68849c1eab996b` | PASS |
| RAS-V0111 | Hero | 次 CTA | 130×54；圆角 12；白底；1px `#E2E8F0`；文字 DM Sans 16px/600/24px、`#334155` | `组 25` / `33:249180`；文本 25 | PASS |
| RAS-V0112 | Hero | 背景渐变 1 | Hero 内 x=1024、y=80；288×288；圆形径向渐变；MasterGo 3x 原图 864×864，DPR=3 | `组 26` / `33:249159`；`hero-gradient-large@3x.png` SHA-256 `a429dbbb74991598361e7bdcca27f3b475ee662ac552eedd96298ffa3f0ebc2d` | PASS |
| RAS-V0113 | Hero | 背景渐变 2 | Hero 内 x=1168、y=350；192×192；圆形径向渐变；MasterGo 3x 原图 576×576，DPR=3 | `组 27` / `33:249164`；`hero-gradient-small@3x.png` SHA-256 `73ba2f4ad1cb378f06a5f500fdb9ffc203bb99052a5646efc91cb0003c1f652e` | PASS |

## Hero 视觉门禁

- 正式字体已补齐并登记来源与哈希。
- Hero 视觉台账 `无阻塞项`，可进入单区块实现。
- 两枚渐变使用 MasterGo 原始图层 3x 位图，不以近似 CSS 色标重绘。
- 本地同视口截图：`01-hero-local-1440.png`；并排证据：`01-hero-comparison.png`；差异证据：`01-hero-diff.png`。
- Playwright 1440×1000 实测：Hero 1440×582.5；标签相对坐标 (60,112)；H1 相对 y=166；副标题 y=310；正文 y=358；CTA 行 y=416；`scrollWidth=clientWidth=1440`。
- 内容边界、宽高、间距、换行、字重、颜色、圆角、阴影和原始渐变素材人工核对通过；公共 Header/Tab 的 18px 高度冲突单独记录，不覆盖冻结资产。
- 主 CTA 已验证打开公共 `BookingModal`，Escape 关闭、body 滚动锁定与恢复正常；初始焦点未设置为冻结公共弹窗既有问题。
- Hero G4 内容与视觉双验收：PASS。

## 02 方案概述

| 元素 ID | 区块 | 元素 | 精确属性 | 图层/素材 | 状态 |
|---|---|---|---|---|---|
| RAS-V0201 | 方案概述 | 区块 | 1440×605；白底；MasterGo 全页 y=743–1347 | `02-overview-mastergo-100.png` SHA-256 `7b239dbffc2e8d5bed6db70172ae9d12116f3985687c2f2c9036c9c3557e337c` | PASS |
| RAS-V0202 | 方案概述 | H2 组 | x=60、y=79；左侧蓝色竖线 4×32、圆角；标题左缘 x=77，单行 | 1440px 像素基线 | PASS |
| RAS-V0203 | 方案概述 | H2 | 约 28px/700；深色 `#0F172A`；中文系统回退字体 | 1440px 像素基线 | PASS |
| RAS-V0204 | 方案概述 | 左正文列 | x=60、y=157；宽约 770；两段；段间 26px；16px/约30px；`#334155` | 1440px 像素基线 | PASS |
| RAS-V0205 | 方案概述 | 强调文字 | `Recov Agent`、描述短语、指标和“现金流增量”按基线局部蓝色/加粗，禁止整段统一加粗 | 1440px 像素基线 | PASS |
| RAS-V0206 | 方案概述 | 右卡片 | x=875、y=151；约 505×374；背景 `#F8FAFC`；1px `#E2E8F0`；圆角 18px | 1440px 像素基线 | PASS |
| RAS-V0207 | 方案概述 | 卡片标题行 | x=901、y=181；问号图标约 20×20；标题 16px/700；gap 12px | 问号为 MasterGo 原始 SVG `social-grow-solution/why-question.svg`，同一图形实例 | PASS |
| RAS-V0208 | 方案概述 | 编号 | 20×20 圆形；背景浅蓝；数字蓝色 12px；五项垂直间距约 24px | 1440px 像素基线 | PASS |
| RAS-V0209 | 方案概述 | 问题文本 | 16px/约28px；标签 700，解释 400；`#0F172A`/`#334155` | 1440px 像素基线 | PASS |

- 该区视觉台账 `无阻塞项`；允许进入单区块实现。
- 本地同视口截图：`02-overview-local-1440.png`；并排证据：`02-overview-comparison.png`；差异证据：`02-overview-diff.png`。
- Playwright 实测：section 1440×605、标题 x=60/y=79、正文列 x=60/w=785、卡片 x=875/y=151/w=505/h=374，`scrollWidth=clientWidth=1440`。
- 同视口人工核对区块边界、标题、正文换行、局部字重/蓝色、卡片、编号、圆角和图标通过；字体抗锯齿差异不单列失败。
- “了解更多”点击后 URL hash=`#recov-ai-overview`，目标区块 top≈0，交互 PASS。
- 02 区 G4 内容与视觉双验收：PASS。

## 03 行业与企业面临的问题

| 元素 ID | 区块 | 元素 | 精确属性 | 图层/素材 | 状态 |
|---|---|---|---|---|---|
| RAS-V0301 | 问题 | 区块 | 1440×918；白底；MasterGo y=1349–2266 | `03-problems-mastergo-100.png` SHA-256 `c7e9c511d4f49f7b4ec56b54839afcf7500fcec3dad525d7980c4dc3973ae8a7` | PASS |
| RAS-V0302 | 问题 | 标题 | x=60/y=80；同款 4×32 蓝色竖线；H2 28px/700 | 像素基线 | PASS |
| RAS-V0303 | 问题 | 三压力卡 | x=60/y=212；三列，每卡 424×202，gap 24；1px `#E2E8F0`；圆角16；右上淡色 64px 四分之一圆 | 像素基线 | PASS |
| RAS-V0304 | 问题 | 指标与正文 | 指标约 48px/700（首卡）、32px/700（其余）；卡标题16px/700；正文15px/约28px | 像素基线 | PASS |
| RAS-V0305 | 问题 | 下部双卡 | 左 x=60、右 x=736、y=471；左 644×367，右 644×367；浅灰背景、1px 边框、圆角16 | 像素基线 | PASS |
| RAS-V0306 | 问题 | 柱状图 | 五柱从 M1 到 M12+ 逐级下降；颜色依次蓝至浅灰；柱顶圆角；横轴标签按原稿 | 像素基线 | PASS |
| RAS-V0307 | 问题 | 图表强调 | “早催、高频、高效触达”在原稿中覆盖正文中央并换行，按证据位置保留 | 像素基线 | PASS |
| RAS-V0308 | 问题 | 矛盾列表 | 红色 6px 圆点；三组标题/正文；底部浅红痛点条，圆角12、红色文字 | 像素基线 | PASS |

- `无阻塞项`，允许进入单区块实现。
- 本地同视口截图：`03-problems-local-1440.png`；并排证据：`03-problems-comparison.png`；差异证据：`03-problems-diff.png`。
- Playwright 实测：section 1440×918；三卡 x=60/508/956、w=424、h=202、y≈211；下部双卡 x=60/736、w=644、h=367、y≈470；与基线可测量偏差不超过 2px。
- 1440px 下 `scrollWidth=clientWidth=1440`；边界、间距、换行、局部字重、颜色、圆角、柱形与原稿重叠强调文字人工核对通过。
- 03 区 G4 内容与视觉双验收：PASS。

## 04 解决方案

| 元素 ID | 区块 | 元素 | 精确属性 | 图层/素材 | 状态 |
|---|---|---|---|---|---|
| RAS-V0401 | 解决方案 | 区块 | 1440×1822；浅灰 `#F8FAFC`；MasterGo y=2267–4088 | `04-solution-mastergo-100.png` SHA-256 `4cdfda3257f6e2208e10f4f2d592e3447a6c1caeadec62d4e4856ddb79399aa8` | PASS |
| RAS-V0402 | 解决方案 | 上半基线 | 1440×911，无编辑器干扰 | `04a-solution-mastergo-100.png` SHA-256 `d7041f57da8d366f1550d1d11bc24895e1ba189c9c8d89a7ea9120c58f578492` | PASS |
| RAS-V0403 | 解决方案 | 下半基线 | 1440×911，无编辑器干扰 | `04b-solution-mastergo-100.png` SHA-256 `c1814b47d7f70770216c432b3fb7d37a46b0c7e344106a2cb234e2b1526db189` | PASS |
| RAS-V0404 | 解决方案 | 六环节卡片 | 三列两行；白底、1px 浅灰边框、16px 圆角；编号浅蓝方块；底部“【化解】”浅蓝标签 | 100% 分段基线 | PASS |
| RAS-V0405 | 解决方案 | 四身份卡片 | 四列；身份徽标、标题、职责和说明逐卡独立配色 | 100% 分段基线 | PASS |
| RAS-V0406 | 解决方案 | 身份徽标 1 | 徽标文字为服务端 HTML，图标来自 MasterGo 原始图层 `图标 6` | `project-manager-icon.svg` SHA-256 `4c73de52903b4bc8c736a843063fb630da87feecd8bdf359dc85913f38216299` | PASS |
| RAS-V0407 | 解决方案 | 身份徽标 2 | 徽标文字为服务端 HTML，图标来自 MasterGo 原始图层 `图标 7` | `customer-service-icon.svg` SHA-256 `655923a04983f2ba7461128b90b2c7deff84ca55119a14786fbfe96cfdc8ea57` | PASS |
| RAS-V0408 | 解决方案 | 身份徽标 3 | 徽标文字为服务端 HTML，图标来自 MasterGo 原始图层 `图标 8` | `legal-manager-icon.svg` SHA-256 `744ff3539140882a3e1c338444243245fcef5d1637b398c948f5457937381fb0` | PASS |
| RAS-V0409 | 解决方案 | 身份徽标 4 | 徽标文字为服务端 HTML，图标来自 MasterGo 原始图层 `图标 9` | `lawyer-icon.svg` SHA-256 `731b69c8943ab64159d045364b765d3a9fd65415cede4c908453e7da1323cd55` | PASS |
| RAS-V0410 | 解决方案 | 司法闭环 | 三列两行卡片；下方绿色独特优势条 | 100% 分段基线 | PASS |
| RAS-V0411 | 解决方案 | 底部双卡 | 3.5/3.6 两列；右卡含四节点箭头流程 | 100% 分段基线 | PASS |
| RAS-V0412 | 解决方案 | 身份图标 1 | MasterGo 原始 SVG，36×36 显示 | `project-manager-icon.svg`，哈希同 RAS-V0406 | PASS |
| RAS-V0413 | 解决方案 | 身份图标 2 | MasterGo 原始 SVG，36×36 显示 | `customer-service-icon.svg`，哈希同 RAS-V0407 | PASS |
| RAS-V0414 | 解决方案 | 身份图标 3 | MasterGo 原始 SVG，36×36 显示 | `legal-manager-icon.svg`，哈希同 RAS-V0408 | PASS |
| RAS-V0415 | 解决方案 | 身份图标 4 | MasterGo 原始 SVG，36×36 显示 | `lawyer-icon.svg`，哈希同 RAS-V0409 | PASS |

- 身份图标未使用近似图标库，全部来自当前 MasterGo 100% 基线原始像素。
- 本地同视口截图：`04-solution-local-1440.png`；并排证据：`04-solution-comparison.png`；差异证据：`04-solution-diff.png`。
- Playwright 实测：section 1440×1822；六环节网格 y≈258/h=394；身份网格 y≈801/h=196；司法网格 y≈1151/h=230；优势条 y≈1405/h=65；底部双卡 y≈1526/h=215，均与基线可测量边界控制在 2px 内。
- 四枚徽标文字已恢复为服务端真实 HTML，图标继续使用 MasterGo 原始像素；内容审计可读取“沟通温度：高 / 双重转化 / 启动法律 / 法律强度：高”。
- 1440px 下 `scrollWidth=clientWidth=1440`；边界、间距、特殊换行、字重、色彩、圆角、标签与流程箭头人工核对通过。
- 04 区 G4 内容与视觉双验收：PASS。

## 05 独特优势与核心能力

| 元素 ID | 区块 | 元素 | 精确属性 | 图层/素材 | 状态 |
|---|---|---|---|---|---|
| RAS-V0501 | 优势 | 区块 | 1440×716；白底；MasterGo y=4089–4804 | `05-advantages-mastergo-100.png` SHA-256 `a352db81869e249eef94aac4c374921693244978395e4a22ea62eb4387dccba1` | PASS |
| RAS-V0502 | 优势 | 左列 | x=60；宽640；四张横卡，约90px 高、16px 间距；浅灰背景与边框 | 100% 基线 | PASS |
| RAS-V0503 | 优势 | 右列 | x=740；宽640；两列三行卡片；卡片约312×119 | 100% 基线 | PASS |
| RAS-V0504 | 优势 | 图标资产 | 4 枚 40×40 与“智能大脑”24×24 为 MasterGo 100% 无干扰基线精确裁片；其余 5 枚 24×24 已由原始图层导出 SVG。`图标 17` 导出结果与画板“智能大脑”可见图形不一致，故未使用该近似源 | `advantages/brain.png`、`identities.svg`、`channels.svg`、`document.svg`、`concurrency.svg`、`litigation.svg`；SHA-256 已登记 | PASS |

- 文案逐字台账进行中；G2 完成前不实现本区 JSX。
- 本地同视口截图：`05-advantages-local-1440.png`；并排证据：`05-advantages-comparison.png`；差异证据：`05-advantages-diff.png`。
- Playwright 实测：section 1440×716；左列卡片 x=60/w=640/y=212/318/424/530/h=90；右列卡片 x=740/1068、w=312、y=248/383/518、h=119，均与基线边界控制在 2px 内。
- 10 枚图标使用原稿像素资产；边界、间距、换行、字重、颜色、圆角、背景人工核对通过；1440px 无横向溢出。
- 05 区 G4 内容与视觉双验收：PASS。

## 06 价值与成果

| 元素 ID | 区块 | 元素 | 精确属性 | 图层/素材 | 状态 |
|---|---|---|---|---|---|
| RAS-V0601 | 价值 | 区块 | 1440×727；浅灰背景；MasterGo y=4805–5531 | `06-outcomes-mastergo-100.png` SHA-256 `e76fcaa2e336529a3eb988efe61310abe3577f8a60583cba31fb7423306f1952` | PASS |
| RAS-V0602 | 价值 | 指标卡 | x=60 起四列；每卡约312×178；白底、边框、16px 圆角 | 100% 基线 | PASS |
| RAS-V0603 | 价值 | 流程卡 | x=60/y=397；1320×249；三节点等分、两枚蓝色箭头 | 100% 基线 | PASS |
| RAS-V0604 | 价值 | 流程图标 | 3 枚 64×64 来自 MasterGo 100% 无干扰基线逐像素裁片；未使用图标库替代 | `outcomes/assets-pool.png`、`agent.png`、`cashflow.png`；SHA-256 已登记于命令输出 | PASS |

- G1/G2 PASS，可进入结构实现。
- 本地同视口截图：`08-closing-local-1440.png`；并排证据：`08-closing-comparison.png`；差异证据：`08-closing-diff.png`。
- Playwright 实测区块 1440×335，1440px 无横向溢出；标题、正文、背景、按钮尺寸、间距、圆角、边框和阴影人工核对通过。
- 两个 CTA 均实点打开公共 `BookingModal`；Escape 关闭、body 滚动锁定与恢复 PASS。
- 08 区 G4 内容与视觉双验收：PASS。
- 本地同视口截图：`07-delivery-local-1440.png`；并排证据：`07-delivery-comparison.png`；差异证据：`07-delivery-diff.png`。
- Playwright 实测：section 1440×657；左卡 x=60/w=640/y≈212/318/424/h=90；周期结论 x=740/y≈524/w=640/h=54，关键边界与基线控制在 2px 内。
- 时间轴圆点、竖线、日期列、内容列、编号卡和总结条人工核对通过；1440px 无横向溢出。
- 07 区 G4 内容与视觉双验收：PASS。

## 08 Closing CTA

| 元素 ID | 区块 | 元素 | 精确属性 | 图层/素材 | 状态 |
|---|---|---|---|---|---|
| RAS-V0801 | Closing CTA | 区块 | 1440×335；蓝色背景；MasterGo y=6190–6524 | `08-closing-mastergo-100.png` SHA-256 `f9b9e20cbd790a60e41747d82a854bc97243e97a048deaac27dc9c844de8fbec` | PASS |
| RAS-V0802 | Closing CTA | 标题 | 居中；约 36px/700；白色 | 100% 基线 | PASS |
| RAS-V0803 | Closing CTA | CTA | 两枚 160×56；gap 16；左白底蓝字，右深蓝底白字与浅色边框；圆角12 | 100% 基线 | PASS |

- G1/G2 PASS，可进入结构实现。
- 趋势箭头使用 MasterGo 100% 无干扰基线精确像素：`trend-up.png` SHA-256 `2e0d10c37e4ca8407eb3054b97c1126d3f0805bd38acad54dd10f1c6698bf90f`；`trend-down.png` SHA-256 `66de81d7fb418afa9af2e1faa341449da09d3db4477950391aa95da781b5cead`；未使用近似图标，状态 `PASS`。
- 本地同视口截图：`06-outcomes-local-1440.png`；并排证据：`06-outcomes-comparison.png`；差异证据：`06-outcomes-diff.png`。
- Playwright 实测：section 1440×727；指标网格 x=60/y=162/w=1320/h=178；流程卡 x=60/y=397/w=1320/h=249，与基线边界偏差不超过 1px。
- 文案、图标、趋势箭头、节点、间距、字重、颜色、圆角与背景人工核对通过；1440px 无横向溢出。
- 06 区 G4 内容与视觉双验收：PASS。

## 07 交付成果与实施

| 元素 ID | 区块 | 元素 | 精确属性 | 图层/素材 | 状态 |
|---|---|---|---|---|---|
| RAS-V0701 | 交付 | 区块 | 1440×657；白底；MasterGo y=5532–6188 | `07-delivery-mastergo-100.png` SHA-256 `2f5b869fb5ef3892c0dec4946fbc7ae8ccc64d4d03a42fbe37b002b426703f12` | PASS |
| RAS-V0702 | 交付 | 左列 | x=60/w=640；三张 90px 横卡，16px 间距；编号 40×40 浅蓝方块 | 100% 基线 | PASS |
| RAS-V0703 | 交付 | 右列时间轴 | x=740/w=640；4 阶段；蓝色圆点、1px 竖线、日期列和内容列 | 100% 基线 | PASS |
| RAS-V0704 | 交付 | 周期结论 | 右列底部 640×54；浅蓝背景和边框，16px 圆角 | 100% 基线 | PASS |

- G1/G2 PASS，可进入结构实现。

## 2026-07-22 用户审查视觉台账

| 区域 | 用户覆盖 | 本地证据 | 状态 |
|---|---|---|---|
| Hero / 概述 / 应用 / 为什么选择 | 统一内容轴并用交替浅色背景区分模块 | `user-review-full-local-1671.png` | PASS |
| 解决方案流程 | 图标尺寸与标签不折行，内容居中 | 同上 | PASS |
| 结果指标与价值流 | 指标去除重复文字箭头，正式图标着色并居中 | 同上 | PASS |
| 交付与合作 | 单列纵向结构、圆角编号与强调面板 | 同上 | PASS |

## 2026-07-25 页面复用视觉覆盖

- `/solutions/products/recov-ai/` 的主体 DOM 与样式统一复用 `/solutions/non-performing-assets/` 当前页面。
- 产品专项路由加载 `app/solutions/non-performing-assets/user-review.css`，不再加载旧 `.ras-*` 专属覆盖。
- 验收标准：两条路由 `.npa-page` 的区块数量、类名序列、可见文字与计算宽高一致；公共 Header/Footer 各自仅渲染一次。
