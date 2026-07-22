# Recov AI MasterGo 页面最终验收记录

## 2026-07-22 原型内容同步验收（当前结论）

- 内容：`prototype-content-snapshot.md` → `prototype-sync-ledger.md` → 页面实际字符串，逐区 PASS。
- 模块：新增原型的应用场景、商业模式、为什么选择；删除原型不存在的 Hero 次级链接与底部双 CTA。
- 视觉：沿用现有 `.ras-*` / MasterGo 桌面风格；新增区块完成风格一致性回归，不声明其旧画板 1:1。
- 交互：页面唯一预约 CTA 使用公共 `BookingTrigger`。
- 范围：仅桌面端；移动端未纳入整个官网当前交付范围。
- 当前截图：`prototype-sync-local-1440.png`；当前工程结果见本文件末尾追加记录。
- 下方为迁移前历史 MasterGo 验收。

## 基本信息

- 页面：解决方案-产品专项解决方案-Recov AI
- MasterGo：`page_id=33:024756`，根画板 `容器 42`（1440×6934）
- 本地地址：`/solutions/products/recov-ai/`
- 验收视口：1440×1000；分区截图宽度 1440
- 验收日期：2026-07-22

## 分区验收

| 区块 | 内容台账 | MasterGo 基线 | 本地截图 | 对比 / diff | 内容结论 | 视觉结论 |
|---|---|---|---|---|---|---|
| 01 Hero | `content-ledger.md` RAS-T0101–0107 | `01-hero-mastergo-100.png` | `01-hero-local-1440.png` | `01-hero-comparison.png` / `01-hero-diff.png` | PASS | PASS |
| 02 方案概述 | RAS-T0201–0209 | `02-overview-mastergo-100.png` | `02-overview-local-1440.png` | `02-overview-comparison.png` / `02-overview-diff.png` | PASS | PASS |
| 03 行业问题 | RAS-T0301–0313 | `03-problems-mastergo-100.png` | `03-problems-local-1440.png` | `03-problems-comparison.png` / `03-problems-diff.png` | PASS | PASS |
| 04 解决方案 | RAS-T0401–0432 | `04-solution-mastergo-100.png` | `04-solution-local-1440.png` | `04-solution-comparison.png` / `04-solution-diff.png` | PASS | PASS；四枚身份图标为原始 SVG |
| 05 独特优势 | RAS-T0501–0514 | `05-advantages-mastergo-100.png` | `05-advantages-local-1440.png` | `05-advantages-comparison.png` / `05-advantages-diff.png` | PASS | PASS；五枚矩阵图标为原始 SVG，其余为精确基线像素 |
| 06 价值与成果 | RAS-T0601–0618 | `06-outcomes-mastergo-100.png` | `06-outcomes-local-1440.png` | `06-outcomes-comparison.png` / `06-outcomes-diff.png` | PASS | PASS；小图形为精确基线像素 |
| 07 交付与实施 | RAS-T0701–0715 | `07-delivery-mastergo-100.png` | `07-delivery-local-1440.png` | `07-delivery-comparison.png` / `07-delivery-diff.png` | PASS | PASS |
| 08 Closing CTA | RAS-T0801–0805 | `08-closing-mastergo-100.png` | `08-closing-local-1440.png` | `08-closing-comparison.png` / `08-closing-diff.png` | PASS | PASS |

## 全页回归

- [x] 所有可见文本节点均有 MasterGo 证据和代码位置；页面运行态逐项审计无补写、漏句或误录。
- [x] 产品专项 Tab 在服务端 HTML 中存在，`Recov AI` 由路由高亮，无客户端切换闪屏。
- [x] 公共 Header/Footer 未被页面级 CSS 覆盖；页面只复用公共组件。
- [x] 全页截图 `full-local-1440.png` 为 1440×6842；MasterGo 全页 1440×6934。92px 累计差异来自已记录的冻结 Header/Footer 画板冲突，八个主体分区已逐区对齐。
- [x] 1440px 实测 `scrollWidth === clientWidth === 1440`，`bodyHeight=6842`，唯一 h1。
- [x] 重复卡片与共享样式抽查无跨区污染。
- [x] 所有页面预约 CTA（Hero、Closing 两枚）以及公共 Header CTA 均打开同一个 `BookingModal`。
- [x] 弹窗关闭按钮初始聚焦、Escape、遮罩关闭、滚动锁定与焦点恢复通过；移动端显示沿用已冻结公共弹窗实现。
- [x] “了解更多”是 `#recov-ai-overview` 页内锚点，例外已记录于 `scope.md`。
- [x] 身份图标与五枚能力矩阵图标来自 MasterGo 原始 SVG；剩余不可独立导出的微型图形来自 100% 无干扰基线逐像素裁片，无图标库近似替代。

## 公共资产冻结复核

- 本页未修改公共组件。交付时当前 SHA-256：Header `00a8a2bb1d30db5e77a6abf5825e95497d907d7c9356506f9feac9c5ec35ef76`；Footer `7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb`；Logo `4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85`；BookingModal `c606ca6d3040962ccf1a6b15db4c0003423c6466c395cf92864021a4804a0efe`；BookingTrigger `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7`。
- Header 与 BookingModal 相对本页开工登记哈希的变化来自已单独登记的全站 Contact 页面任务（`design-baselines/contact/scope.md`），不是 Recov AI 页面级改动；Footer、Logo、BookingTrigger 与开工哈希一致。

## 工程验证

| 命令 | 结果 | 备注 |
|---|---|---|
| `pnpm lint` | PASS | 2026-07-21 八页统一终检，0 退出码 |
| `pnpm exec tsc --noEmit` | PASS | 2026-07-21 八页统一终检，0 退出码 |
| `pnpm build` | PASS | Next.js 生产构建成功，71 个静态页面生成 |
| `git diff --check` | PASS | 2026-07-21 八页统一终检，0 退出码 |
| `pnpm mastergo:check recov-ai-solution` | PASS | 2026-07-22 最后运行，证据门禁通过 |

## SEO / GEO 验收

- [x] 独立 title、description、自指 canonical、唯一 h1 和标题层级已核对；本地 SSR GET 为 `200 OK`。
- [x] sitemap、robots、服务端产品 Tab 站内入口与“暂不添加无证据 Schema”的结论已核对。
- [x] 页面所有实体、能力与指标均来自 MasterGo 可见证据，未新增隐藏营销内容。
- [x] 本地 SEO/GEO 已实现；线上抓取、索引和生成式答案抽样待发布后验证。

## 未验证项与阻塞项

- 移动端没有 MasterGo 基线，未猜测移动版 1:1；仅验证公共响应式实现可用。
- 线上抓取、索引、生成式答案抽样待发布后执行。
- 05/06 区部分微型图形在 DevMode 中没有与画板可见结果一致的独立导出源，使用 100% 基线逐像素原稿；该来源限制已记录，但同视口可见结果与设计一致。

## 完成等级

- [x] 已实现
- [x] 已视觉校准
- [x] 1:1 验证通过

## 2026-07-22 原型同步最终工程记录

| 验证项 | 结果 |
|---|---|
| 原型正文覆盖审计 | PASS：199 条原型文本，0 缺失 |
| 1440px 桌面截图 | PASS：`prototype-sync-local-1440.png`，1440×7966 |
| H1 / 横向溢出 / Footer 衔接 | PASS：H1=1；1440=1440；mainBottom=footerTop=7665 |
| 预约交互 | PASS：打开公共弹窗、滚动锁定、Escape 关闭、焦点恢复 |
| `pnpm lint` | PASS |
| `pnpm exec tsc --noEmit` | PASS |
| `pnpm build` | PASS：71 个静态页面生成 |
| `git diff --check` | PASS |
| `pnpm mastergo:check recov-ai-solution` | PASS |

公共资产交付哈希与开工记录一致；新增原型区块只声明现有风格回归，不声明旧 MasterGo 分区 1:1；移动端和线上 GEO 验证未纳入本地结论。

## 2026-07-22 用户审查回归

- 1671×1258 全页截图：`user-review-full-local-1671.png`。
- `scrollWidth === clientWidth`：PASS。
- 预约类 CTA 打开公共 `BookingModal`：PASS。
- 浏览器控制台 error：0。
- `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check`：PASS。
- `pnpm mastergo:check recov-ai-solution`：PASS。

## 2026-07-22 末轮批注复核

- 新复核截图：`user-review-followup-local-1265.png`。
- 方案定位首段已单行连续表达，“全链路主动执行催收作业的 AI 工作伙伴”不再另起一行。
- 3.5 与 3.6 改为纵向排列，外层边框移除；两区块间距 44px。
- 7.1 交付成果卡片已去除重复圆形序号；7.2 时间线保持 `01–04` 纵向排列；商业模式标题为 `7.3`。
- 浏览器实测横向溢出为 0；工程门禁结果以下方本轮命令为准。

### 本轮工程门禁

- `pnpm lint`：PASS
- `pnpm exec tsc --noEmit`：PASS
- `pnpm build`：PASS（71 个静态页面生成完成）
- `git diff --check`：PASS
- `pnpm mastergo:check recov-ai-solution`：PASS
