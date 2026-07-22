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

## 回归

- 当前 1440 页面主体与 MasterGo 100% 分区基线的顺序、背景衔接和累计高度一致；公共头尾按冻结基线独立验收。
- 390 本地截图无根节点横向溢出；因无移动端画板，不纳入桌面 1:1 结论。
- 本次任务未编辑公共资产；但交付复核发现 SiteHeader、SiteFooter、BookingModal 当前哈希与本文件既有冻结值不一致，详见 `scope.md`，因此不据此重新声明全页 1:1。

## 门禁结论

- 背景、渐变、字体层级、图标、卡片、边框、圆角与阴影：PASS
- 桌面关键布局未发现超过 2 CSS px 的已知偏差
- 结论：已视觉校准
