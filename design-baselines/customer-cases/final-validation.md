# 客户案例最终验收记录

- 页面：`/customer-cases/`
- MasterGo：`page_id=6:33938`；画板 `6:33949`
- 视口：1440×900；全页基线 1440×3031
- 日期：2026-07-21

## 门禁状态

| 门禁 | 状态 | 证据 |
|---|---|---|
| G0 范围与冻结资产 | PASS | `scope.md`；Header/Footer/Logo/字体复用，仅路由接线 |
| G1 设计证据 | PASS | `customer-cases-mastergo-2x.png`；真实图层 SVG 与 `visual-ledger.md` |
| G2 文案台账 | PASS | `content-ledger.md`；实际 DOM 字符串复核 |
| G3 逐区实现 | PASS | `app/customer-cases/page.tsx` 与页面命名空间样式 |
| G4 内容验收 | PASS | Playwright accessibility snapshot 覆盖标题、正文、列表、表格、卡片 |
| G4 视觉验收 | PASS（含冻结资产例外） | `customer-cases-side-by-side.png`、`customer-cases-overlay.png` |
| G5 全页回归 | PASS | 1440 px 下 `scrollWidth === clientWidth === 1440`；唯一 H1；Footer 1 个 |
| G6 工程与最终检查 | PASS | `lint`、`tsc --noEmit`、`build`、`git diff --check`、`mastergo:check customer-cases` 全部通过 |

## 同视口对比结论

- 设计基线：`customer-cases-mastergo-1440.png`，1440×3031。
- 本地全页：`local/customer-cases-local-1440.png`，1440×3090。
- 并排对比：`customer-cases-side-by-side.png`；半透明叠加：`customer-cases-overlay.png`。
- 页面专属主体的 1216 px 边界、各区块顺序、Hero、详情卡、成效表和关联产品卡已逐区复核。
- 全页高度相差约 59 px，主要表现为主体整体纵向累计偏移；来源是用户明确冻结的现有公共 Header/Footer 与设计截图公共区节奏差异。没有使用页面级 CSS 覆盖公共资产。本例外意味着交付口径为“已视觉校准”，不报告严格无差异 1:1。
- 设计图标均为 MasterGo 真实图层 SVG。因浏览器原生懒加载会使首张全页截图未加载折下图标，页面将这些极小装饰 SVG 设置为 eager，复测 natural size 全部有效。

## SEO/GEO

- 独立 title、description、自指 canonical、唯一 H1、服务端正文、sitemap 路由已实现。
- 未新增可见 SEO 文案或隐藏营销内容；metadata 仅复用案例标题事实。
- 本地仅能报告已实现；线上状态码、抓取、索引与生成式答案抽样待部署后验证。

## 未验证项

- 无移动端 MasterGo 基线，未根据桌面稿猜测移动布局。
- 线上索引与 GEO 效果未验证。

## 完成等级

- [x] 已实现
- [x] 已视觉校准
- [x] 内容完整迁移通过
- [ ] 1:1 验证通过（冻结公共资产差异已明示）

## 2026-07-21 正式案例库扩展验收

| 项目 | 结果 | 证据 |
|---|---|---|
| 原型内容提取 | PASS | `prototype-evidence/products-all.txt`：18,782 字符、16 个案例 |
| 内容结构门禁 | PASS | `prototype-content-ledger.md`；生成器校验案例数、必填字段和四列表格 |
| 正式案例总数 | PASS | 16：与原型案例数严格一致 |
| 索引默认状态 | PASS | 按领域 → 全部；生产截图 `local/customer-cases-index-production.png` |
| 按产品筛选 | PASS | 实测 URL `?view=product&filter=Recov+AI`，仅返回 3 个 Recov AI 案例 |
| 整卡跳转 | PASS | 实测首张 Recov AI 卡片进入 `/customer-cases/property-arrears-recovery/` |
| 详情正文/表格 | PASS | `local/customer-case-recov-detail-1440.png`；H1、正文、挑战、方案、样本口径、表格均渲染 |
| 横向溢出 | PASS | 抽验详情 `scrollWidth === clientWidth === 1364`；索引生产截图无横向溢出 |
| 静态生成 | PASS | `pnpm build`：16 个原型详情路径全部 SSG，68 个静态页面生成完成 |
| 公共资产冻结 | PASS | Header、Footer、Logo、layout 交付 SHA-256 与扩展开工记录一致 |
| 工程门禁 | PASS | `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check` 全通过 |
| MasterGo 证据门禁 | PASS | `pnpm mastergo:check customer-cases` |

索引布局属于用户确认后的新增交互，没有对应 MasterGo 索引画板，因此完成等级为“已实现并完成生产截图/交互验收”，不将索引报告为 1:1。详情页继续复用并回归既有 MasterGo 视觉基线。

### 最终内容边界修正

用户明确要求“原型的内容为准，原型有多少个就多少个”。此前额外保留的深圳储能案例已从正式数据、索引、详情静态参数和 sitemap 中删除；其旧截图仅作为历史视觉证据，不代表当前正式案例。

最终复核：`out/customer-cases/` 仅有 16 个详情目录；索引包含 16/16 个原型标题；sitemap 包含 16 个详情 URL；旧深圳储能详情静态文件不存在。

## 2026-07-23 索引首屏调整

- 用户覆盖：删除可见面包屑和独立标题模块；筛选区采用解决方案导航的两级 Tab 视觉语法。
- 追加覆盖：16 个案例详情页的面包屑统一改为研究院详情同款“← 返回上一级”。
- 内容验收：PASS；主内容区无可见面包屑，独立标题模块已删除，保留唯一辅助 `h1`；16 个案例内容未改。
- 视觉验收：PASS；双层 Tab 的高度、颜色、边框、圆角、阴影、字号与解决方案导航计算样式一致；1440×900 无横向溢出。
- 交互验收：PASS；按产品 → Recov AI 的 URL 为 `?view=product&filter=Recov+AI`，显示 3 个案例；详情“← 返回上一级”回到 `/customer-cases/`。
- 工程验收：PASS；`lint`、`tsc --noEmit`、`build`、`git diff --check` 均通过，构建生成 16 个详情静态路径。
- 移动端未纳入当前官网范围。

## 2026-07-23 短内容筛选状态 Footer 贴底回归

- 用户覆盖：当公共 Header、主体和公共 Footer 的自然高度不足桌面视口时，主体吸收剩余高度，Footer 保持在视口底部；长页继续按内容自然增长。
- 修改前证据：1671 × 1258 的 `?view=product&filter=DeepDoc` 状态中，`body` 高 1139px，Footer 底边为 1139px，视口下方留白 119px。
- 修改后证据：同视口同筛选状态中，`body` 与文档高度均为 1258px，主体高度由 772px 增长到 891px，Footer 底边为 1258px，底部留白为 0px。
- 横向溢出：`scrollWidth - clientWidth = 0`。
- 截图：`output/playwright/sticky-footer-2026-07-23/customer-cases-deepdoc-before-1671x1258.png`、`customer-cases-deepdoc-after-1671x1258.png`。
- 长页回归：首页文档高度 3846px，Footer 仍为普通文档流 `position: static`；产品专项方案嵌套布局的 Header、SolutionTabs、main、Footer 顺序正常，文档高度 7142px；两页横向溢出均为 0。
- 公共组件：未修改 `components/site-header.tsx`、`components/site-footer.tsx` 或其内部视觉；仅调整根页面空间分配。
- 移动端未纳入当前官网范围。
