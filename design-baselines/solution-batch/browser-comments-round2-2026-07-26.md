# 浏览器批注第二批核对台账（2026-07-26）

- 内容真源：用户在当前任务中提供的 28 条纯文字批注及 DOM 定位元数据。
- 视觉证据：当前本地代码、1576×1258 Playwright 实际 DOM、计算样式和本批次同视口截图。
- 范围：桌面端；不建立或验收移动端基线。
- 冻结资产：`SiteHeader`、`SiteFooter`、Logo、`BookingModal`、`BookingTrigger`，本批次不得修改。
- MasterGo 关系：本批次是用户对现有页面的明确视觉覆盖；没有相同视口 MasterGo 新基线，不据此宣称 1:1。

| ID | 路由 | 目标 | 采样前计算样式 / DOM | 最小改动目标 | 状态 |
|---|---|---|---|---|---|
| 1 | non-performing-assets | 第四张 `7×24` 成果卡 | `height:206px` | 删除固定卡高，目标卡内容驱动 | PASS |
| 2 | non-performing-assets | `7×24` 数值 | `height:88px; margin-bottom:0` | 删除固定高度并增加下间距 | PASS |
| 3 | non-performing-assets | `零容忍` | `40px/48px` | 小幅降低字号并保持单行 | PASS |
| 4 | legal-ai | DeepLaw 独特价值条 | `background:#263a5b; color:#fff` | 改为浅色背景并保持可读对比度 | PASS |
| 5 | legal-ai | 第三张合作卡 | 同排拉伸为 `155px` | 小幅减少上下内边距，卡片内容驱动 | PASS |
| 6 | sales-in | 第三张成果卡 | `min-height:170px; padding:24px` | 小幅降低目标卡高度 | PASS |
| 7 | sales-in | 场景表行 | `min-height:88px; padding:24px` | 全表行高收紧 | PASS |
| 8 | sales-in | 场景标题标签 | 有色背景、`6px 12px` 内边距 | 同类标签移除背景 | PASS |
| 9 | social-grow | 改变卡数值与图标 | 后三张图标绝对定位在右 | 四张统一为图标在左、标题在右且垂直居中 | PASS |
| 10 | social-grow | 改变卡标题行 | 仅第一张图标与内容同排 | 四张统一为图标在前、标题在后同一行 | PASS |
| 11 | social-grow | 痛点区标题下距 | 列表 `margin-top:47px` | 小幅收紧至明确的桌面间距 | PASS |
| 12 | social-grow | 四张成果指标 | 首/三/四为 `46px/58px` | 四张统一降低字号，避免撑满卡片 | PASS |
| 13 | social-grow | 成果价值正文 | `margin-top:18px` | 同类正文小幅收紧上距 | PASS |
| 14 | social-grow | 场景标题标签 | 四种有色背景 | 同类标签全部移除背景 | PASS |
| 15 | social-grow | 第四行场景 | `min-height:134px`，单元格上下 `22/25px` | 目标行内容驱动并收紧上下内边距 | PASS |
| 16 | social-grow | 第二张合作卡标题 | `margin:0 0 16px` | 增大上距、减小下距 | PASS |
| 17 | mine-geo | 成果标题 | `30px/38px`，部分标题折行 | 同类标题降低字号并保持单行 | PASS |
| 18 | mine-geo | 成果图标 | `64×64px` | 同类图标小幅缩小 | PASS |
| 19 | mine-geo | 场景表 | 单元格 `display:block` | 全表单元格上下居中 | PASS |
| 20 | ai-acquisition-harness | 痛点卡 | 外层 `padding:20px` + 内层 `padding:24px`，高 `323px` | 删除重复外层留白，内容驱动 | PASS |
| 21 | ai-acquisition-harness | 优势区 | section 上白下灰渐变；卡片背景不一致 | section 改为统一浅蓝背景，内容卡统一白底并与其他模块区分 | PASS |
| 22 | ai-acquisition-harness | 应用场景 | 独立圆角卡、`gap:32px` | 改为连续表头、表体、行分隔的表格样式 | PASS |
| 23 | ai-acquisition-harness | 模式 2 标题 | 标题在标签下方，`margin-top:24px` | 标题移动到模式标签后同一行 | PASS |
| 24 | ai-acquisition-harness | 模式 2 卡 | 同排拉伸为约 `298px` | 内容驱动、上下内边距相同 | PASS |
| 25 | ai-acquisition-harness | 模式 1 卡 | 同排拉伸为约 `298px` | 内容驱动、上下内边距相同 | PASS |
| 26 | mine-geo | 模式 1 标题 | 标题位于标签下方 | 标题移动到模式标签后同一行 | PASS |
| 27 | mine-geo | 模式 3 标题 | 标题位于标签下方 | 标题移动到模式标签后同一行 | PASS |
| 28 | mine-geo | 三张合作卡 | grid 拉伸；模式 1 为 `16px 20px`，其余 `20px` | 三张内容驱动且上下内边距一致 | PASS |

## 批次级验收门禁

- 内容：不得改变上述目标原文；实际 DOM 逐项复核后才能 PASS。
- 视觉：必须生成 1576×1258 同视口截图并逐区核对；相对视觉要求以采样前计算样式为基准做最小改动。
- 工程：完成六页回归后运行 lint、tsc、build、`git diff --check` 与六个对应 `mastergo:check`。

## 实施后 DOM 与计算样式复核

- ID 1–3：第四张成果卡 `206→174px`，数值容器 `88→46px`、下距 `0→16px`；“零容忍” `40/48→34/42px`。
- ID 4–5：独特价值条为 `#EEF5FF / #285D9D / 1px #CFE2F6`；四张合作卡由 `155→147px`，第三张上下内边距 `20→16px`。
- ID 6–8：第三张成果卡 `170→150px`；六行场景表 `88→72px`；六个标题标签背景均为透明。
- ID 9–16：四张改变卡 DOM 均为 `.sgs-change__heading > img + strong`，`align-items:center`；成果指标统一为 `38/50px` 且无溢出；正文上距 `18→12px`；场景标题背景均透明；第四行 `134→118px`；合作标题外距为 `8px 0 12px`。
- ID 17–19：四个成果标题统一为 `22/30px + nowrap` 且 `scrollWidth<=clientWidth`；图标统一 `48×48px`；场景表九个单元格均为纵向 flex 且 `justify-content:center`。
- ID 20–25：四张痛点卡删除重复外层 padding，高度 `323→283px`；优势区为统一 `#EEF5FF`、内容卡白底；应用场景由独立圆角卡改为单一表头/表体/行分隔；两张合作卡标题均在标签后同排，卡片内容驱动且 padding 均为 `20px`。
- ID 26–28：三张 Mine GEO 合作卡标题均在模式标签后同排；卡高分别为 `223/245/223px`，padding 均为 `20px`，`align-self:start`。
- 六页均满足 `document.documentElement.scrollWidth === document.documentElement.clientWidth`。

## 实施后的 selector 更新

- ID 9–10：新 selector 为 `.sgs-change__card:nth-child(n) > div.sgs-change__heading > img` 与 `.sgs-change__card:nth-child(n) > div.sgs-change__heading > strong`。
- ID 23：新 selector 为 `.ahs-deployment-card:nth-child(2) > header.ahs-deployment-card__heading > h3`。
- ID 26–27：新 selector 为 `.mgs-cooperation-card:nth-child(1|3) > div.mgs-cooperation-card__heading > h3`。
- 其余目标沿用用户给定 selector 或其稳定类名等价定位，均唯一匹配。

## 1576×1258 同视口证据

- `output/playwright/browser-comments-round2-2026-07-26/non-performing-assets-*.png`
- `output/playwright/browser-comments-round2-2026-07-26/legal-ai-*.png`
- `output/playwright/browser-comments-round2-2026-07-26/sales-in-*.png`
- `output/playwright/browser-comments-round2-2026-07-26/social-grow-*.png`
- `output/playwright/browser-comments-round2-2026-07-26/mine-geo-*.png`
- `output/playwright/browser-comments-round2-2026-07-26/ai-harness-*.png`

## 最终工程与证据门禁

- `pnpm lint`：PASS。
- `pnpm exec tsc --noEmit`：PASS。
- `pnpm build`：PASS，74 个静态页面生成完成。
- `git diff --check`：PASS。
- `pnpm mastergo:check contact`：PASS。
- `pnpm mastergo:check non-performing-assets`：PASS。
- `pnpm mastergo:check legal-ai`：PASS。
- `pnpm mastergo:check sales-in`：PASS。
- `pnpm mastergo:check social-grow`：PASS。
- `pnpm mastergo:check mine-geo`：PASS。
- `pnpm mastergo:check ai-acquisition-harness`：PASS。
- 公共资产复核 SHA-256 与本轮开工值一致：SiteHeader `5aef1bd2…345bfa`、SiteFooter `87329729…eae2ae`、Logo 组件 `badc568e…fdf11`、BookingModal `3e143bc7…32206`、BookingTrigger `cf6bfae2…c4fad7`。
- 完成等级：用户覆盖已实现并已视觉校准；无第二批同视口 MasterGo 新基线，不声明 1:1。
