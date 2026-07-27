# 关于灵宸最终验收记录

- MasterGo：`18:5749`
- 桌面布局宽度：`1440`；分区证据窗口：`1440 × 720`
- MasterGo 基线：`01-mastergo-1440x720.jpg` 至 `07-mastergo-1440x720.jpg`
- 本地正文基线：对应 `local-body-1440x720.jpg`
- 对比图：对应 `body-comparison-1440x720.jpg`

## 分区结论

| 区块 | 内容 | 视觉 |
|---|---|---|
| Hero | PASS | PASS |
| 产品布局 | PASS | PASS |
| 团队 DNA | PASS | PASS |
| 品牌故事 | PASS | PASS |
| 合作模式 | PASS | PASS |
| 安全承诺 | PASS | PASS |
| CTA / Footer | PASS | PASS |

## 全页回归

- [x] 全部可见文本有 MasterGo 证据和实现位置。
- [x] 长文案首句、末句、句数及局部加粗已核对。
- [x] 公共 Header/Footer/Logo/BookingModal 未变化。
- [x] 全页同视口截图和分区基线已复核。
- [x] `scrollWidth === clientWidth`。
- [x] 两个预约 CTA 均复用公共 BookingModal。
- [x] 根画板未包含公共 Header/Footer；正文验收剔除 sticky Header，公共头尾按冻结基线单独复核。
- [x] MasterGo 100% 画板左右视野以 `160px` 位移拼接；重叠区域 SSIM 为 `1.000000`，没有使用缩放截图冒充 100%。

## 工程验证

| 命令 | 结果 |
|---|---|
| `pnpm lint` | PASS |
| `pnpm exec tsc --noEmit` | PASS |
| `pnpm build` | PASS |
| `git diff --check` | PASS |
| `pnpm mastergo:check about` | PASS |

## 完成等级

- [x] 已实现
- [x] 已视觉校准
- [ ] 1:1 验证通过（原型内容迁移与用户覆盖已改变原 MasterGo 可见内容，不再作严格 1:1 声明）

说明：1:1 结论限定于 MasterGo 桌面正文画板与当时的冻结公共头尾；移动端未纳入当前官网范围。SEO/GEO 是独立门禁，当前失败不反向否定视觉结论。

## 2026-07-22 用户覆盖增量验收

- [x] Hero“了解产品方案”和“预约演示”均已移除，空按钮容器同步删除，不残留按钮组间距。
- [x] 品牌故事三项均为可点击原生 button Tab；第二、第三项右侧标题与两段正文已按用户截图逐字核对。
- [x] 三组故事正文均保留在服务端 HTML；客户端仅切换当前可见面板。
- [x] 安全承诺 01/02/03/05 的用户指定替换已在实际渲染 DOM 中逐项确认。
- [x] 原型主体不存在 Hero 与末尾预约 CTA；两处均不再渲染。
- [x] `scrollWidth === clientWidth`。
- [x] `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check`、`pnpm mastergo:check about` 全部 PASS。
- [ ] 不重新声明全页 1:1：用户覆盖已主动改变原 MasterGo Hero 与故事内容，且 SiteHeader、SiteFooter、BookingModal 当前哈希与旧冻结值不一致；本次任务未修改这些公共文件。

## 2026-07-22 原型内容迁移最终复验

- [x] 内容完整迁移通过
- [x] 已视觉校准
- About 主体按 `prototype-content-snapshot.md` 同步；安全承诺 01 / 02 / 03 / 05 保留用户逐条确认覆盖。
- 品牌故事第二、第三项实际点击切换通过；桌面 `scrollWidth === clientWidth`。
- `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check` 与 `pnpm mastergo:check about` 全部 PASS。

## 2026-07-23 公共 Header 口号迁移

- [x] 用户明确授权的公共变更已实施：Header 删除口号，其他 Header 元素与 66px 高度保持不变。
- [x] About Hero 在 `top=32px / right=48px` 渲染同一口号组件，文案与原型逐字一致。
- [x] `1671 × 1258` 同视口证据：`output/playwright/header-motto-2026-07-23/about-after-1671x1258.png`。
- [x] 页面 `scrollWidth === clientWidth`；Header“立即体验”打开公共 `BookingModal`，关闭按钮回归通过。
- [x] `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check` 全部 PASS。
- [x] `pnpm mastergo:check about` PASS。

## 2026-07-25 浏览器批注增量验收

- 视口：1576×1258；全页无横向溢出。
- Hero：内容高度 435.9375px、上下各 60px、无最小高度；第一行保持单行，第二行使用首页强调渐变；正文宽 1200px；右上口号距公共栅格右缘 20px。
- 五个大模块均为上下 60px 且无固定高度；产品、DNA、故事、安全卡片均按内容撑开。
- DNA 五卡等宽 384px；故事卡片 777×270.125px；安全卡片等宽 384px；卡片内距均按本轮覆盖完成。
- 品牌故事第二 Tab 实点切换通过；`WHY LINGCHEN`、`PARTNERSHIP` 与首项底部签名模块均未渲染。
- 视觉证据：`09-browser-feedback-local-1576x1258.png`、`10-browser-feedback-mid-local-1576x1258.png`、`11-browser-feedback-bottom-local-1576x1258.png`。
- 公共 Header“立即体验”打开同一 BookingModal，关闭按钮回归通过。
- 工程门禁：`lint`、`tsc --noEmit`、`build`、`git diff --check`、`mastergo:check about` 均 PASS。
- 公共资产交付哈希与本轮开工值一致：SiteHeader `5aef1bd2…345bfa`、SiteFooter `87329729…eae2ae`、BookingModal `3e143bc7…32206`、BookingTrigger `cf6bfae2…c4fad7`、Logo `badc568e…fdf11`。
- 当前完成等级：已视觉校准；用户覆盖改变原 MasterGo 内容与布局，不重新声明严格 1:1；移动端未纳入范围。

## 2026-07-25 Hero 标点与合作卡标题位置增量验收

- [x] Hero 第一行本地 SSR 实际输出为“灵宸智能：开箱即用的 AI 原生 Agent”，末尾无逗号。
- [x] Hero 第二行本地 SSR 实际输出为“为您的商业结果服务”，末尾无句号。
- [x] 合作模式第二张卡标题位于图标右侧，二者垂直中心对齐；其余三张卡结构不变。
- [x] 桌面页面无横向溢出。
- [x] `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check`、`pnpm mastergo:check about` 全部通过。

> 自动浏览器刷新本地页面时被本地 URL 安全策略阻塞，因此本轮没有生成同视口截图，也不声明视觉校准完成；待用户在当前 About 页面刷新后进行人工视觉确认。

## 2026-07-27 浏览器批注第六批

- R6-08 内容/视觉双验收 PASS：四张合作模式卡由 246px 降至 198.5px，`min-height:0`、padding 20px，均无裁切。
- 1576×1258 分区与全页证据：`output/playwright/browser-comments-round6-2026-07-27/06-about-modes-after.png`、`full-about.png`；横向溢出 0。
- 本轮自动浏览器已恢复可用，因此同时关闭上一节第二卡视觉与横向溢出待验项。
- Header“立即体验”实点打开公共 BookingModal，Escape 与滚动锁定恢复 PASS。
- lint、tsc、build、diff check 与 `mastergo:check about` PASS；公共资产哈希未变；移动端不在范围，不声明新的 1:1。
