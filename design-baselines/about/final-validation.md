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
