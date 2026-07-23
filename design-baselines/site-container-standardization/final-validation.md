# 官网容器规范最终验收记录

## 基本信息

- 页面：全站公共与页面主体容器
- 内容真源与版本：各页面当前已确认内容；本次零文本变更
- 视觉真源：修改前运行态截图 + 用户先确认的 1200 / 1320 两级容器覆盖 + 第二阶段确认四处原宽版区域统一为 1200px
- MasterGo `page_id` / `layer_id`：不适用（用户明确授权全站设计系统覆盖）
- 本地地址：`http://127.0.0.1:3000/`
- 验收视口：`1440 × 900`
- 移动端本轮范围：未纳入当前官网范围
- 验收日期：2026-07-23

## 分区验收

| 区块 | 内容台账 | 视觉真源基线 | 本地截图 | 内容结论 | 视觉结论 |
|---|---|---|---|---|---|
| 公共头尾 | `content-ledger.md` | `before/public-header`、`before/public-footer` | `after/public-header-1440.png`、`after/public-footer-1440.png` | PASS | PASS |
| 默认容器 | `content-ledger.md` | 代表页面 before 截图 | home、Sales in、Social Grow、About、Research、Customer Cases 的 after 截图 | PASS | PASS |
| 原宽版容器第二阶段 | `content-ledger.md` | `output/playwright/container-1200-unification-2026-07-23/before/` | `output/playwright/container-1200-unification-2026-07-23/after/` 四页同视口截图 | PASS | PASS |
| DeepLaw 专项 | `content-ledger.md` | DeepLaw solution before 截图 | `after/solution-deeplaw-1440x900.png`、`after/solution-deeplaw-1671x1258.png` | PASS | PASS |

第二阶段并排对比保存在：

- `output/playwright/container-1200-unification-2026-07-23/comparison/mine-geo-core-before-after.png`
- `output/playwright/container-1200-unification-2026-07-23/comparison/social-grow-scenarios-before-after.png`
- `output/playwright/container-1200-unification-2026-07-23/comparison/ahs-overview-before-after.png`
- `output/playwright/container-1200-unification-2026-07-23/comparison/product-ahs-breadcrumb-before-after.png`

## 全页回归

- [x] Git diff 中没有本任务引入的可见文案变化。
- [ ] 公共 SiteHeader 哈希保持不变：最终复核失败；执行期间出现并发改动，`header-motto` 被移除，当前哈希为 `2c033c6ccdc416829083407865733942e344c2c3318ea61d5e885181f4a90c1f`。
- [x] SiteFooter、Logo 与 BookingModal 哈希保持不变。
- [x] Header、Footer、默认页面容器均为 1200px。
- [x] 原宽版容器均统一为 1200px。
- [x] 四个直接受影响路由在 1440px 与 1280px 下均无根节点横向溢出；第一阶段 23 个正式路由基线继续保留。
- [x] 卡片、表格和主要标题无裁切、重叠或异常换行。
- [x] 页面背景仍铺满视口，内部内容保持居中。
- [x] 移动端未纳入当前官网范围。

## 工程验证

| 命令 | 结果 | 备注 |
|---|---|---|
| `pnpm lint` | PASS | ESLint 无报错 |
| `pnpm exec tsc --noEmit` | PASS | TypeScript 无报错 |
| `pnpm build` | PASS | Next.js 生成 71 个静态页面 |
| `git diff --check` | PASS | 无空白错误 |
| `pnpm mastergo:check site-container-standardization` | PASS | MasterGo 证据门禁通过 |

## SEO / GEO 验收

- [x] SEO/GEO 相关源码无变化。
- [x] 页面可见内容与语义结构无变化。

## 未验证项与阻塞项

- 1200px 容器实现、视觉和工程验证无阻塞项。
- 公共资产冻结门禁存在 1 个外部阻塞：`SiteHeader` 在本任务期间被并发修改；本任务未修改或回退该文件，需用户确认该变化是否作为新基线。
- 本轮只验收桌面端；旧移动端 media query 中保留的历史宽度不属于本轮交付范围。
- 本任务是用户确认的设计系统覆盖，未使用单页 MasterGo 像素基线，因此不报告 MasterGo 1:1。

## 完成等级

- [x] 已实现
- [x] 内容零变更审计通过
- [x] 内容完整迁移通过（本任务零文案变更，现有内容完整保留）
- [x] 已视觉校准
- [ ] 1:1 验证通过

本任务是用户确认的设计系统覆盖，不以 MasterGo 单页像素 1:1 为目标；最终最多报告“已视觉校准”。
