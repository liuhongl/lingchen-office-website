# SiteHeader 视觉台账

| 视觉 ID | 元素 | 修改前证据 | 用户覆盖目标 | 实现约束 | 状态 |
|---|---|---|---|---|---|
| HEADER-V01 | Header 内容容器 | `1200px` 宽，中心线 `x=800.5` | 保持 | 高度、宽度、背景、边框不变 | PASS |
| HEADER-V02 | Logo | 左边界 `x=200.5` | 保持左对齐 | 宽 `72px`，素材与组件不变 | PASS |
| HEADER-V03 | 主导航 | 中心线 `x=1034`，明显偏右 | 中心线与容器 `x=800.5` 重合 | 桌面端三列布局，中列 `justify-self:center` | PASS：实测 `x=800.5` |
| HEADER-V04 | 立即体验 | 右边界与容器右边界一致 | 保持最右侧 | 右列 `justify-self:end`，按钮视觉不变 | PASS：右边界保持 `x=1400.5` |
| HEADER-V05 | 移动端菜单 | 现有折叠菜单 | 保留既有行为 | `max-width:760px` 恢复 Flex 布局 | PASS：原规则保留；移动端不在本次视觉验收范围 |

无新增图标、图片或特殊图形；Logo 使用现有冻结正式素材。

## 同视口证据

- 修改前：`01-before-1616x1258.png`
- 修改后：`02-after-1616x1258.png`
- 修改前后对比：`05-before-after-comparison.png`
- 首页和产品矩阵页均实测：
  - 容器中心线：`x=800.5`
  - 导航中心线：`x=800.5`
  - CTA 右边界：`x=1400.5`
  - `scrollWidth === clientWidth === 1601`

| HEADER-V06 | 主导航字体 | 用户 2026-07-24 浏览器批注 | 桌面端 `15px`、`600` | 仅调整字号；导航位置、gap、激活态和 CTA 不变 | CONFIRMED |

## 2026-07-27 用户全站覆盖

| 视觉 ID | 元素 | 修改前实测（1486×1258） | 用户覆盖目标 | 实现约束 | 状态 |
|---|---|---|---|---|---|
| HEADER-V07 | 桌面主导航字号 | `15px` | `16px` | 仅桌面；公共 Header 全站生效 | READY |
| HEADER-V08 | 桌面主导航间距 | `21px` | 适度增大 | 调为 `28px`，保持导航整体居中 | READY |
| HEADER-V09 | Header 高度 | `66px`；导航实际高 `40.5px`，上下各约 `12.25px` | 字号放大后评估是否需增高 | `16px` 导航仍可容纳，保留冻结高度 `66px` | READY |

公共组件基线：`components/site-header.tsx` SHA-256 `5aef1bd27e0a0a57ffdc65dbb80df4ab5cc30aa2c17b1283f3791a17da345bfa`；本轮只改公共 CSS，不改 Header 结构、Logo、CTA 或素材。
