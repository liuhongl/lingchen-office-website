# 关于灵宸视觉属性台账

| 元素 ID | 区块 | 关键设计事实 | 证据 | 核对 |
|---|---|---|---|---|
| V-A-001 | Header | 公共 66px Header；关于导航高亮；右侧蓝色 CTA | 冻结公共 Header 基线（根画板不含 Header） | PASS |
| V-A-002 | Hero | 约 800px 高浅蓝纵向渐变；左对齐大标题；“AI原生Agent”蓝紫渐变；三胶囊；用户覆盖后移除全部 Hero CTA，按钮容器同步删除，不保留额外间距 | `01-mastergo-1440x720.jpg` + 2026-07-22 用户覆盖 | PASS |
| V-A-003 | 产品布局 | 白底；左右双卡；独立蓝/紫图标与翼标签；轻描边圆角 | `02-layout-mastergo.png` | PASS |
| V-A-004 | 团队 DNA | 浅蓝背景；居中标题；3+2 卡片排列；蓝色大编号 | `03-dna-mastergo.png` | PASS |
| V-A-005 | 品牌故事 | 左侧三项为原生 button Tab；选中项深蓝底；右侧白卡随选择切换；首项保留深蓝 Agent OS 图标，第二、第三项内容以用户截图为准 | `04-story-mastergo.png` + 2026-07-22 用户截图 1/2 | PASS |
| V-A-006 | 合作模式 | 浅蓝背景；四等宽白卡；圆形 check 图标 | `05-cooperation-mastergo.png` | PASS |
| V-A-007 | 安全承诺 | 浅蓝背景；3×2 白卡；蓝色编号与盾牌图标 | `06-security-mastergo.png` | PASS |
| V-A-008 | CTA / Footer | 白底居中 CTA；双蓝按钮；深蓝公共 Footer | `07-cta-footer-mastergo.png` | PASS |
| V-A-009 | Hero 右上口号 | `top=32px / right=48px`；19.2px / 900 / 28.8px；青 `#06b6d4` → 紫 `#7c3aed` 逐字渐变；逐字旋转与上移形成浅弧 | 2026-07-23 Google AI Studio 原型实测；`output/playwright/header-motto-2026-07-23/about-after-1671x1258.png` | PASS |

## 回归

- 当前 1440 页面主体与 MasterGo 100% 分区基线的顺序、背景衔接和累计高度一致；公共头尾按冻结基线独立验收。
- 移动端未纳入当前官网范围；历史响应式结果不作为本轮结论。
- 2026-07-22 原型迁移任务未编辑公共资产；当时发现 SiteHeader、SiteFooter、BookingModal 当前哈希与旧冻结值不一致，详见 `scope.md`。
- 2026-07-23 用户已明确授权修改公共 Header：仅删除口号节点；Header 高度仍为 66px，其他结构不变。About Hero 口号为 `232.9375 × 28.796875`，页面 `scrollWidth=clientWidth=1656`。

## 门禁结论

- 背景、渐变、字体层级、图标、卡片、边框、圆角与阴影：PASS
- 桌面关键布局未发现超过 2 CSS px 的已知偏差
- 结论：已视觉校准

## 2026-07-25 浏览器批注视觉覆盖

| 区块 | 覆盖事实 | 精确实现目标 | 状态 |
|---|---|---|---|
| Hero | 内容驱动、上下等距；标题两行；正文撑满；口号对齐公共头 | `padding-block:60px`；无固定高；第二行复用首页渐变；正文宽 `100%`；口号距公共栅格右缘 `20px` | PASS：实测高 435.9375px、上下各 60px、正文宽 1200px、口号右缘内缩 20px |
| 产品布局 | 大模块 60px；卡片顶距 30px；标题与图标同行；卡片内容驱动 | section `60px`；grid 顶距 `30px`；标题行 flex；删除卡片和正文 `min-height`；结果条缩小 margin/padding | PASS：两卡实测 585×237.25px、无最小高度 |
| 团队 DNA | 浅色背景；标签删除；说明一行；卡片 20px；编号与标题同行；第 5 卡同宽 | `#f5f9ff`；3 列等宽；`padding:20px`；无固定高 / 跨列；正文黑色 | PASS：5 卡均宽 384px、内距 20px、无最小高度 |
| 品牌故事 | 白底；左侧浅色文字黑色；右卡 20px；删除底部签名模块 | section `60px`；article `padding:20px/min-height:0`；inactive tab 与正文黑色 | PASS：卡片实测 777×270.125px；第二 Tab 点击切换通过 |
| 合作模式 | 浅色背景；英文标签删除；正文黑色 | section `60px`；背景 `#f5f9ff`；正文 `#111827` | PASS：实测上下各 60px、背景 `rgb(245,249,255)` |
| 安全承诺 | 白底；卡片 20px；编号与标题同行；正文黑色 | section `60px`；card `padding:20px/min-height:0`；top row 包含编号、标题、图标 | PASS：卡片均宽 384px、内距 20px、无最小高度 |

## 2026-07-25 Hero 标点与合作卡标题位置增量

| 区块 | 用户覆盖 | 精确实现目标 | 状态 |
|---|---|---|---|
| Hero | 两行标题分别删除末尾逗号与句号 | 保持既有两行结构、字号、渐变和间距，只修改可见标点 | 已实现；自动浏览器受本地 URL 策略阻塞，待人工视觉复验 |
| 合作模式 | 第二张卡标题放到图标右侧并上下居中 | 仅第二张卡使用 `display:flex; align-items:center; gap:14px`；图标保持 `48×48px`；标题行下距 `16px`；其余卡片不变 | 已实现；自动浏览器受本地 URL 策略阻塞，待人工视觉复验 |

## 2026-07-27 浏览器批注第六批

| 元素 ID | 元素 | 开工运行态 | 用户覆盖 | 状态 |
|---|---|---|---|---|
| ABOUT-R6-01 | 四张合作模式卡 | 四卡均 246px、`min-height:246px`、`padding:28px 24px` | 四卡均 198.5px、`min-height:0`、padding 20px，内容无裁切 | PASS |
