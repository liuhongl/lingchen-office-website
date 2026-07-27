# 解决方案页正文区块节奏回归（2026-07-24）

## 范围

- 用户覆盖：`/solutions/` 下正式解决方案页面的顶层正文 section。
- 桌面视口：`1644 × 1258` CSS px。
- 统一规则：`padding-top:60px; padding-bottom:60px; height:auto; min-height:0`。
- 排除：Hero、Closing/CTA、公共 Header/Footer；移动端不在本轮范围。

## 运行态核对

| 路由 | 命中正文 section 数 | 60px 上下内边距 | 内容溢出 |
|---|---:|---|---|
| `/solutions/ai-overseas/` | 7 | PASS | 0 |
| `/solutions/non-performing-assets/` | 8 | PASS | 0 |
| `/solutions/legal-ai/` | 5 | PASS | 0 |
| `/solutions/products/ai-acquisition-harness/` | 10 | PASS | 0 |
| `/solutions/products/deepdoc/` | 8 | PASS | 0 |
| `/solutions/products/deeplaw/` | 5 | PASS | 0 |
| `/solutions/products/mine-geo/` | 7 | PASS | 0 |
| `/solutions/products/recov-ai/` | 8 | PASS | 0 |
| `/solutions/products/sales-in/` | 7 | PASS | 0 |
| `/solutions/products/social-grow/` | 8 | PASS | 0 |

## 结论

- 10 个正式页面、73 个正文 section 均由内容高度与 60px 上下内边距撑开。
- 10 个页面均满足 `document.documentElement.scrollWidth === document.documentElement.clientWidth`。
- 公共 Header/Footer 与预约弹窗未因本规则产生页面级覆盖。

## 2026-07-25 解决方案 Tab 默认落点

- 用户反馈：从“产品专项解决方案”切回“综合解决方案”时，总是落到第二项“AI不良资产处置解决方案”。
- 代码事实：一级综合 Tab 的 `href` 被硬编码为 `/solutions/non-performing-assets/`。
- 用户目标解释：一级 Tab 应按子项顺序进入第一项；默认落点改为 `/solutions/ai-overseas/`，综合方案内部仍由当前 pathname 精确高亮。
- 修改范围：仅 `components/solution-tabs.tsx` 的一级综合 Tab 链接；不改公共 Header/Footer。
- 浏览器验证：在 `/solutions/products/deeplaw/` 点击唯一“综合解决方案”链接后进入 `/solutions/ai-overseas/`；一级高亮为“综合解决方案”，二级 `aria-current="page"` 为“AI出海获客与合规解决方案”。
