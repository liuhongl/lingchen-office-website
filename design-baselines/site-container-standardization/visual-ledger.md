# 官网 1200px 主容器视觉属性台账

## 视觉规则

| 元素 ID | 区块 | 元素 | 修改前 | 用户确认目标 | 对齐/间距 | 素材或代码位置 | 核对 |
|---|---|---|---|---|---|---|---|
| V-001 | 01 | 公共 Header 内部容器 | 1440px 视口：x=130，w=1180 | x=120，w=1200 | 水平居中；两侧 120px | `app/globals.css` `.shell` | PASS：x=120，w=1200 |
| V-002 | 01 | 公共 Footer 内部容器 | 1440px 视口：x=130，w=1180 | x=120，w=1200 | 与 Header 同网格 | `app/globals.css` `.shell` | PASS：x=120，w=1200 |
| V-003 | 02 | 默认页面容器 | 1152 / 1180 / 1216 / 1224px | 1200px | `width:min(1200px, calc(100% - 80px))`；居中 | `app/globals.css`、页面 CSS module | PASS：代表页均为 1200px |
| V-004 | 02 | 普通产品面包屑 | 1152px | 1200px | 与默认页面容器同网格 | `.product-breadcrumb__inner` | PASS：x=120，w=1200 |
| V-005 | 02 | 解决方案公共 Tab | 1216px | 1200px | 与默认页面容器同网格 | `.solution-tabs__inner` | PASS：x=120，w=1200 |
| V-006 | 03 | 原宽版页面容器 | 第一阶段：1440px 下 x=60，w=1320 | x=120，w=1200 | 与公共 Header / Footer 同一垂直网格 | `.mine-geo-shell`、`.ahs-shell`、`.sgs-shell` | PASS：1440px 下 x=120、1280px 下 x=40，均 w=1200 |
| V-007 | 03 | 紧凑型产品面包屑 | 第一阶段：1440px 下 x=60，w=1320 | x=120，w=1200 | 与默认页面容器同网格 | `.product-breadcrumb--compact` | PASS：1440px 下 x=120、1280px 下 x=40，均 w=1200 |
| V-008 | 04 | DeepLaw 专项 Hero | 1216px 组合网格 | 1200px 组合网格 | 两列等宽，64px gap，居中 | `.dls-hero` | PASS：568px + 64px + 568px |
| V-009 | 04 | DeepLaw 专项主体 | 1440px 下左右各 110px、内容 1220px；大屏继续拉伸 | 默认 1200px 封顶 | `padding-inline:max(40px, calc((100% - 1200px)/2))` | `.dls-pains/.dls-agents/.dls-synergy/.dls-values/.dls-cooperation` | PASS：1440px 与 1671px 下内容均封顶 1200px |
| V-010 | 全站 | 横向溢出 | 8 个代表页面均 `scrollWidth=clientWidth` | 保持相等 | 无水平滚动 | 浏览器实测 | PASS：23 个正式路由 overflow=0 |
| V-011 | 03 | Mine GEO 五能力卡片 | 1320px 下卡片 245px 宽，固定高 295px；已有最大 2px 内容溢出 | 1200px 下卡片等宽且正文不裁切 | 保持五列、24px gap；卡片改为内容驱动的最小高度 | `.mine-geo-five-grid article` | PASS：五列约 220.8px × 319px，正文纵向溢出均为 0 |
| V-012 | 03 | Social Grow 场景表格 | 行固定高 117px，1320px 下已有 3px 内容溢出 | 1200px 下四行完整显示 | 保持三列定义与 24px 行距；行高改为内容驱动 | `.sgs-scenarios`、`.sgs-scenarios__row` | PASS：四行均为 1200px × 134px，横纵溢出均为 0 |
| V-013 | 03 | AI 获客 Harness 概览卡片 | 文案固定宽 368.93px；1320px 下网格已有 33px 内部横向溢出 | 1200px 下三列等宽且内部横向溢出为 0 | 卡片允许收缩，段落宽度跟随卡片 | `.ahs-overview__card`、`.ahs-overview__card p` | PASS：三列均为 384px，卡片横纵溢出均为 0 |
| V-014 | 03 | Social Grow 指标卡片 | 1200px 模拟下四列会被长指标最小内容撑成不等宽 | 四列等宽且指标完整显示 | 保持 24px gap；网格项允许收缩 | `.sgs-results__metric` | PASS：四列均为 282px；长指标字号 46px，横纵溢出均为 0 |

## 图标与图片

本次不新增、不替换、不缩放图标或图片；所有素材映射继续沿用各页面既有视觉台账。

## 区块门禁结论

- 元素总数：14
- 已确认目标：14
- 未确认目标：0
- 当前结论：页面主体 PASS；已完成 1320px 运行态基线、1200px 本地截图、并排对比及 1440×900 / 1280×720 尺寸与溢出核对。公共 `SiteHeader` 冻结哈希因执行期间的并发改动未通过，详见 `scope.md` 与 `final-validation.md`
