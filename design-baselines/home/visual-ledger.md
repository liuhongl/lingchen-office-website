# 首页视觉属性台账

| 元素 ID | 区块 | 关键设计事实 | MasterGo 证据 | 本地证据 | 核对 |
|---|---|---|---|---|---|
| V-H-001 | Header | 1440 宽、66 高、白色半透明背景；Logo、导航、口号、蓝色 CTA | `01-mastergo-1440x720.jpg` | `01-local-1440x720.jpg` | PASS |
| V-H-002 | Hero | 620 高；浅蓝背景；居中标题；“新质生产力”蓝紫渐变；白色产品卡；双按钮 | `01-mastergo-1440x720.jpg` | `01-local-1440x720.jpg` | PASS |
| V-H-003 | Problems | `#EAF5FF` 背景；1220 内容宽；左右双栏；红点与蓝/紫方案卡 | `target-problems` | `02-problems.png` | PASS |
| V-H-004 | Value | 1180 内容宽；四张独立描边卡；四组重字重指标；白色 ribbon | `target-value-title`、`target-ribbon` | `03-value.png` | PASS |
| V-H-005 | Agent OS | 1120×680；六个白色圆节点；分段发光轨道；双层虚线内圆；蓝紫中心核 | `target-agent-node`、全画板 | `04-agent-os.png` | PASS |
| V-H-008 | Agent OS 节点说明 | 保留 200×200 圆形节点；说明置于标签下方，最大宽 156px；10px / 1.45，`#6B7C93`，居中；不改变轨道与节点定位 | 当前 Agent OS 视觉语言 + 用户新增内容要求 | `08-agent-os-prototype-copy-local.png` | PASS |
| V-H-006 | CTA | 深蓝背景、径向光、渐变标题、居中蓝色 CTA | MasterGo 全画板 | `05-closing-cta.png` | PASS |
| V-H-007 | Footer | `#050F23` 背景；三列信息；顶部/底部分隔线 | 公共 Footer 基线 | `06-contact.png` | PASS |
| V-H-009 | Hero 右上口号 | 19.2px / 900 / 28.8px；青 `#06b6d4` → 紫 `#7c3aed` 逐字渐变；逐字 `-12deg → 12deg` 浅弧；Hero `top=24px / right=24px` | 2026-07-23 Google AI Studio 原型实测 | `output/playwright/header-motto-2026-07-23/home-after-1671x1258.png` | PASS |
| V-H-026 | Hero 右上口号水平位置 | `top=24px` 不变；右边缘与公共 Header `.shell` 及“立即体验”右边缘对齐 | 2026-07-26 用户浏览器批注 | `visual-results/feedback-2026-07-26/home-motto-aligned-1576x1258.png` | PASS |
| V-H-010 | Agent OS 卡片方案（历史） | `1120px` 最大宽；不设置重复控制中枢；3×2 卡片按蛇形闭环排列 | 2026-07-23 历史用户覆盖 | `output/playwright/home-agent-os-redesign-2026-07-23/agent-os-no-core-1413x1258.png` | RETIRED |
| V-H-011 | Agent OS 圆环恢复 | 恢复 V-H-005 / V-H-008：1120×680、六个 200×200 白色圆节点、双层虚线内圆、蓝紫中心核；保留六段节点说明；六段轨道去除模糊滤镜，改为 3px 清晰蓝线并增加顺时针方向箭头 | 2026-07-23 最新用户覆盖 + 历史已验证圆环基线 | `output/playwright/home-agent-os-redesign-2026-07-23/agent-os-restored-ring-arrows-1440x1258.png` | PASS |
| V-H-012 | Agent OS 箭头与圆内文字清晰度 | 六个箭头尖端叠在目标圆边界；轨道层位于圆节点上层但不穿过正文；编号 30px/800，标题 14px/750，标签 10px/700，说明 11.5px/500/1.45，说明最大宽 168px | 2026-07-23 用户最新反馈 | `output/playwright/home-agent-os-redesign-2026-07-23/agent-os-arrows-on-circles-clear-text-1413x1258.png` | PASS |
| V-H-013 | Agent OS 椭圆闭环连接 | 每段连接线从源圆边沿两圆圆心方向出发，并沿同一中心方向以箭头落到目标圆边；六段曲线围合为近似椭圆；节点中心坐标与 100px 半径用于计算首尾交点 | 2026-07-23 用户最新反馈 | `output/playwright/home-agent-os-redesign-2026-07-23/agent-os-complete-ellipse-centerline-1413x1258.png` | PASS：六段首尾均落在相邻节点圆边，方向与两圆圆心连线一致，完整围合为椭圆闭环 |

## 布局测量

- 1440：`scrollWidth=clientWidth=1440`，全页高 3844；100% MasterGo 分区基线已补齐为完整 1440 宽。
- 移动端未纳入当前官网范围；历史响应式结果不作为本轮结论。
- 2026-07-23 用户授权的公共 Header 哈希变化仅对应口号节点删除；Footer、Logo 与 BookingModal 未因本任务修改。
- 2026-07-23 Agent OS 六段说明补齐后：6 个节点 `clientHeight=scrollHeight=200`，节点间重叠 0，页面横向溢出 0。
- 2026-07-23 口号迁移后：Header 高度仍为 66px；Header 中 `.header-motto` 数量为 0；Hero 口号实际为 `232.9375 × 28.796875`；`scrollWidth=clientWidth=1656`（1671 视口含 15px 竖向滚动条）。
- 2026-07-23 Agent OS 卡片方案曾属于用户授权的视觉重设计；用户最新要求恢复圆环后，`V-H-005` / `V-H-008` 重新成为当前视觉验收标准，`V-H-010` 退役。
- 2026-07-23 Agent OS 新主图在 `1671 × 1258` 桌面视口实测：核心面板 `620 × 98`；六张卡片均为 `331 × 132`；卡片重叠 0；蛇形闭环连接线 6 段；末行卡片与品牌卡间距 `68px`；`scrollWidth=clientWidth=1671`。
- 2026-07-23 删除重复控制中枢后，在用户当前 `1413 × 1258` 桌面视口实测：`.agent-system__core` 数量为 0；标题到首行卡片 `62px`；六张卡片均为 `331 × 132`；卡片重叠 0；末行卡片到品牌卡 `68px`；`scrollWidth=clientWidth=1413`。
- 2026-07-23 圆环恢复并优化轨道后，在 `1413 × 1258` 实测：六个节点均为 `200 × 200`，各节点 `clientHeight=scrollHeight=200`，节点重叠 0；六段轨道 `filter=none` 且均应用方向箭头；蓝紫中心核 1 个；`scrollWidth=clientWidth=1398`（视口含 15px 竖向滚动条）。
- 2026-07-23 在 `1440 × 1258` 桌面视口复验：六个节点均为 `200 × 200`，各节点 `clientHeight=scrollHeight=200`；蓝紫中心核 1 个；`scrollWidth=clientWidth=1425`（视口含 15px 竖向滚动条）。
- 2026-07-23 箭头与文字清晰度优化后，在用户当前 `1413 × 1258` 桌面视口实测：6 个箭头均应用 `marker-end` 并叠至目标圆边界；轨道层级为 4；六个节点仍均为 `200 × 200` 且 `clientHeight=scrollHeight=200`；页面 `scrollWidth=clientWidth=1413`。计算样式为：编号 `30px/800`、标题 `14px/750`、标签 `10px/700`、说明 `11.5px/500/16.675px`。
- 2026-07-26 在 `1576 × 1258` 桌面视口实测：Hero 口号右边缘 `1380.5px`，公共 Header `.site-header__inner` 与“立即体验”右边缘均为 `1380.5px`，偏差 `0px`；口号相对 Hero 顶部仍为 `24px`；页面横向溢出 `0px`。

## 门禁结论

- 旧 MasterGo 首页视觉基线：历史 PASS。
- 当前 Agent OS 主图：已按最新用户覆盖恢复圆环版本，并完成轨道清晰化与六段方向箭头优化。
- 当前结论：以 `V-H-005` / `V-H-008` 与用户最新轨道覆盖为当前圆环视觉标准；已完成同视口桌面校准，卡片方案只保留为历史证据。

## 2026-07-24 浏览器批注视觉覆盖

| 元素 ID | 区块 | 用户确认设计事实 | 修改前证据 | 本地证据 | 核对 |
|---|---|---|---|---|---|
| V-H-014 | Hero 眉题 | 保留现有字体、字重、字距、胶囊边框与背景；字号由 12px 调整为 15.6px（130%） | `output/playwright/home-feedback-2026-07-24/00-home-before.png` | `01-home-after.png` | PASS |
| V-H-015 | Hero 说明正文 | 正文纯黑；仅“企业级智能体（AI Agent）架构与产品”使用 120% 字号并加粗 | 同上 | `01-home-after.png` | PASS |
| V-H-016 | Problems 总结 | 整个总结条字号由 15px 调整为 18px（120%）；其他颜色、强调节点与容器视觉保持 | 同上 | `01-home-after.png` | PASS |
| V-H-017 | Value 标题 | “可交付商业结果”与前一句连续排版，不再使用绝对定位错位分栏；渐变与加粗保持 | 同上 | `05-value-after.png` | PASS |
| V-H-018 | Value ribbon | 字号由 12px 调整为 14.4px（120%）；三段颜色、圆点、边框与容器视觉保持 | 同上 | `05-value-after.png` | PASS |
| V-H-019 | 公共 Footer | 只更新可见链接文案、顺序、目标地址和邮箱；Footer 容器、列布局、字号、颜色、Logo 与版权视觉保持 | 公共 Footer 冻结基线 | `04-footer-after.png`、`06-contact-email-after.png` | PASS |

- 本轮没有新增或替换图标，不触发素材导出门禁。
- V-H-014–V-H-019 均来自用户当前浏览器批注明确授权，不宣称为历史 MasterGo 原画板 1:1。
- `1736 × 1258` 实测：眉题 15.6px；局部加粗 15.6px / 800；Problems 总结 18px；Value ribbon 14.4px；页面 `scrollWidth === clientWidth`。
- 首页、Value、Footer 和联系页邮箱局部截图均已人工检查，无文字裁切、卡片重叠或横向溢出。

## 2026-07-24 Hero 浏览器批注视觉覆盖

| 元素 ID | 区块 | 用户确认设计事实 | 视觉证据 | 本地证据 | 核对 |
|---|---|---|---|---|---|
| V-H-020 | Hero Agent 徽章第二行 | 金黄色渐变；字号大于第一行；单行不折行；徽章原蓝色背景保持 | 用户浏览器批注 1；暖金沿用官网现有视觉语言 | `output/playwright/home-feedback-2026-07-24-v2/03-home-1616x1258.png` | PASS |
| V-H-021 | Hero 两条使命文字 | 两项交换位置；`Outfit`；同一条蓝 `#2563eb` → 靛 `#4f46e5` → 青 `#06b6d4` 水平文字渐变；原型实测 `900` 字重 | Google AI Studio iframe 实际计算样式，2026-07-24 | `output/playwright/home-feedback-2026-07-24-v2/03-home-1616x1258.png` | PASS |
| V-H-022 | Header 品牌名称 | Logo 图片保持 72px 宽；右侧新增“灵宸智能”，18px / 800、深海军蓝、0.08em 字距，与 Logo 垂直居中并留 10px 间距 | 2026-07-24 用户浏览器批注；沿用当前 Header 字体与品牌深色 | `output/playwright/header-hero-products-feedback-2026-07-24/01-home-header-hero.png` | PASS |
| V-H-023 | Header 导航 | 导航字号由 13px 调整为 14px，字重 600；导航文案、间距、高亮与 Header 66px 高度保持 | 2026-07-24 用户浏览器批注 | 同上 | PASS |
| V-H-024 | Hero 主标题两行间距 | 保留 56px 上限字号、字重、渐变和明确两行结构；行高由 1.14 调整为 1.24，扩大两行视觉间距 | 2026-07-24 用户浏览器批注 | 同上 | PASS |
| V-H-025 | Hero 使命文字 | 保留 `Outfit`、900 字重和蓝靛青渐变；字号由 13px 增加 2px 至 15px，圆点同步居中 | 2026-07-24 用户浏览器批注 | 同上 | PASS |

- 本轮不新增图标或图片素材。
- 公共组件开工哈希：SiteHeader `2c033c6ccdc416829083407865733942e344c2c3318ea61d5e885181f4a90c1f`；SiteFooter `8732972918addddddbbcbec095ff0b2b7c34797ea74522bf019427956ceae2ae`；Logo `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11`；BookingModal `3e143bc70f5cc270231d3961ff5eb1b92481be637c55bcbc36269cfedbb32206`；BookingTrigger `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7`。
- `1616 × 1258` 实测：徽章第一行 `15px/700`，第二行 `16px/800`、`white-space: nowrap`、`scrollWidth=clientWidth=144px`；徽章宽 `190px`，右侧说明仍为两行且无裁切。
- 两条使命文字均为 `Outfit / 13px / 900`，计算渐变为 `rgb(37,99,235) → rgb(79,70,229) → rgb(6,182,212)`；页面 `scrollWidth=clientWidth=1616`。

## 2026-07-24 Header 与 Hero 最新复验

- 在更窄的 `1280 × 720` 桌面视口实测：Header 高度 66px；品牌组合宽 159.77px；导航宽 536px，`14px / 600`；品牌、导航和 CTA 无重叠。
- 主标题计算行高为 `67.456px`（1.24）；两行总高 134.91px，渐变第二行完整显示。
- 使命文字计算字号为 15px；两项仍居中单行显示。
- 页面 `scrollWidth=clientWidth=1265`（视口含 15px 纵向滚动条），无横向溢出。
- Logo 图片与 `components/logo.tsx` 未修改。

## 2026-07-27 浏览器批注第四批

| 元素 ID | 元素 | 开工运行态 | 用户覆盖 | 状态 |
|---|---|---|---|---|
| V-H-R4-01 | 四张价值卡 | `214.06px`、`padding:24px` | 内容撑开、`padding:20px`、全组减高 | PASS |
| V-H-R4-02 | Agent OS | `padding:105px 0 49px` | `padding:60px 0` | PASS |
