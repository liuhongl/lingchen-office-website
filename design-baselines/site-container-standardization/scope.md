# 官网容器规范调整范围与证据清单

## 任务范围

- 页面名称：官网公共容器与桌面页面容器规范
- 适用的批次规则：`docs/product-solution-prototype-migration-rules.md`（仅涉及 `/solutions/products/` 页面时）
- 语义图标授权规则：`docs/semantic-icon-generation-rules.md`（本次不修改图标）
- 官网视口范围规则：`docs/website-desktop-only-scope.md`
- 内容真源：现有页面已确认内容；本次不修改任何可见文案
- 内容真源链接与版本或访问时间：当前工作区，2026-07-23
- 视觉真源：当前已实现页面与冻结公共组件；容器尺寸由用户本轮确认覆盖
- 视觉真源链接或实现路径：`app/globals.css`、`app/product-matrix-desktop.css`、`app/customer-cases/page.module.css`、`app/research/[slug]/page.module.css`
- MasterGo 链接：不适用，本次为用户明确授权的全站设计系统覆盖
- `page_id`：不适用
- `layer_id`：不适用
- 目标桌面视口：`1440 × 900`
- 移动端设计基线与本轮范围：未纳入当前官网范围
- 允许修改的页面与区块：公共容器、页面主体容器、面包屑与解决方案 Tab 的桌面宽度；DeepLaw 专项解决方案的桌面横向容器；第二阶段将 Mine GEO 产品页、Social Grow 专项页、AI 获客 Harness 专项页和紧凑型产品面包屑由 1320px 收口到 1200px，并仅修复因收口暴露的固定尺寸裁切
- 禁止修改的区域：文案、图标、字体、颜色、间距（容器宽度引发的自然重排除外）、表单、CTA 行为、SEO 元数据

## 公共资产

- `SiteHeader`：允许全站修改内部容器宽度；组件 JSX 冻结
- `SiteFooter`：允许全站修改内部容器宽度；组件 JSX 冻结
- Logo：已确认且冻结
- 字体：已确认；本次不修改
- 其他共享组件：`BookingModal` 冻结；`ProductBreadcrumb`、`SolutionTabs` 仅允许容器宽度变化

## 公共资产冻结证据

| 资产 | 组件路径 | 基线截图 | 视口 | 文件 SHA-256 | 允许变化 |
|---|---|---|---|---|---|
| SiteHeader | `components/site-header.tsx` | `output/playwright/container-standardization-2026-07-23/before/public-header-1440.png` | 1440px | `00a8a2bb1d30db5e77a6abf5825e95497d907d7c9356506f9feac9c5ec35ef76` | 仅 CSS 内部容器 1180 → 1200；组件文件不变 |
| SiteFooter | `components/site-footer.tsx` | `output/playwright/container-standardization-2026-07-23/before/public-footer-1440.png` | 1440px | `cb2b70d580ef03b0318c2b9ba77693e8ad87d1d54242c3e37ca19b9b2c7148eb` | 仅 CSS 内部容器 1180 → 1200；组件文件不变 |
| Logo | `components/logo.tsx` | 同 Header 基线 | 1440px | `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11` | 无 |
| BookingModal | `components/booking-modal.tsx` | 沿用联系页既有基线 | 1440px | `3e143bc70f5cc270231d3961ff5eb1b92481be637c55bcbc36269cfedbb32206` | 无 |

最终复核发现 `components/site-header.tsx` 在本任务执行期间被并发移除 `header-motto` 文本，SHA-256 变为 `2c033c6ccdc416829083407865733942e344c2c3318ea61d5e885181f4a90c1f`。该文件不在本任务补丁范围内，未擅自回退；因此公共 Header 冻结门禁需用户确认该并发改动后重新建立基线。

## 用户确认覆盖项

| 项目 | 已声明真源原值 | 用户确认值 | 对话证据 |
|---|---|---|---|
| 默认主容器 | 1152 / 1180 / 1216 / 1224px 等并存 | `1200px` | 2026-07-23 用户同意按推荐方案修改并要求审核效果 |
| 宽版容器 | 第一阶段保留 `1320px` | 第二阶段统一为 `1200px` | 2026-07-23 用户在逐页可行性评估后确认“好的，你做吧” |
| 桌面页边距 | 40 / 52 / 56 / 60 / 112px 等并存 | 最小 `40px` | 同上 |

## 转化按钮行为

本次不修改任何 CTA 文案、样式或行为；继续复用现有 `BookingTrigger → BookingModal`。

## 分区清单

| 区块 ID | 区块名称 | 内容真源快照 | 视觉真源基线 | 文案台账 | 视觉台账 | 内容验收 | 视觉验收 |
|---|---|---|---|---|---|---|---|
| 01 | 公共 Header / Footer | 当前组件源码 | `before/public-header-1440.png`、`before/public-footer-1440.png` | 完成 | 完成 | PASS | PASS |
| 02 | 默认 1200px 页面容器 | 当前页面源码 | `before/home`、`before/product-sales-in`、`before/about`、`before/research`、`before/customer-cases` | 完成 | 完成 | PASS | PASS |
| 03 | 原宽版页面统一为 1200px | 当前页面源码 | `output/playwright/container-1200-unification-2026-07-23/before/` 四页基线 | 完成 | 完成 | PASS | PASS：1440×900 与 1280×720 |
| 04 | DeepLaw 专项解决方案 | 当前页面源码 | `before/solution-deeplaw-1440x900.png` | 完成 | 完成 | PASS | PASS |

## 阻塞项

无。该任务不新增素材、不修改内容，第二阶段 1200px 目标值已由用户确认。
