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

## 门禁结论

- 旧 MasterGo 首页视觉基线：历史 PASS。
- 当前 Agent OS 主图：已按最新用户覆盖恢复圆环版本，并完成轨道清晰化与六段方向箭头优化。
- 当前结论：以 `V-H-005` / `V-H-008` 与用户最新轨道覆盖为当前圆环视觉标准；已完成同视口桌面校准，卡片方案只保留为历史证据。
