# AI 法律解决方案视觉台账

本页没有独立 MasterGo 画板，不宣称独立目标稿 1:1；视觉采用既有 MasterGo 综合解决方案的容器、标题、卡片、渐变、导航和 CTA 体系。

| ID | 区块 | 视觉来源 | 关键属性 | 图形/图标 | 状态 |
|---|---|---|---|---|---|
| V-0101 | 01 | DeepLaw 法律方案原型 Hero | 1216px 容器、52/800 H1、浅蓝渐变、四枚白底描边 pill | Lucide `Scale`；原型授权 | PASS |
| V-0201 | 02 | 原型痛点卡 + 用户反馈 | 桌面 3+2 居中宽卡、五种顶部边框色、浅阴影 | `Users/Rocket/FileSearch/Library/Search` | PASS |
| V-0301 | 03 | DeepLaw 法律方案原型智能体卡 | DeepLaw 主卡 + 3.2 青 / 3.3 紫 / 3.4 绿 / 3.5 琥珀；列表逐行彩色圆点 | `Network/Share2/Radar/PhoneCall/FileCheck2` | PASS |
| V-0401 | 04 | DeepLaw 法律方案原型协同模块 | 左 5/12 飞轮、右 7/12 纵向四卡；桌面 420×420 SVG | 原型精确虚线渐变环、中心与六节点 | PASS |
| V-0501 | 05 | Social Grow 指标 | 4 列指标、3 列价值卡、注释 | 无新增复合图形 | PASS |
| V-0601 | 06 | NPA 可信底座 | 4 列合作卡、3×2 保障卡 | Lucide 语义图标，用户授权 | PASS |
| V-0701 | 07 | 产品页 Closing CTA | 蓝紫浅色背景、居中标题、公共预约弹窗 | CTA 原型箭头字符 | PASS |

- 图标均来自项目已安装的 `lucide-react`，仅作装饰并设置 `aria-hidden`；这是用户对本页的明确允许项。
- 公共组件不使用页面级选择器覆盖。

## 2026-07-24 浏览器批注视觉覆盖

| ID | 区块 | 用户覆盖 | 精确实现 | 状态 |
|---|---|---|---|---|
| V-2401 | Hero H1 | 标题改为一行 | 移除 JSX 强制 `<br />`；目标桌面视口以 52px/800 自然保持单行 | PASS |
| V-2402 | Hero 正文 | 右边界与公共头“立即体验”对齐 | `width:100%; max-width:none`，沿用 `.legal-shell` 公共容器右边界 | PASS |

- 同视口证据：`visual-results/feedback-2026-07-24-browser-comments/legal-ai-top-1644x1258.png`。
| LA-V2501 | 传导关系 | 用户 2026-07-25 浏览器批注 | 标签独占首行，正文从下一行开始 | CONFIRMED |
| LA-V2502 | 价值指标卡 | 用户 2026-07-25 浏览器批注 | 删除最小高度，缩小且保持一致的上下内边距 | CONFIRMED |
# 2026-07-26 浏览器批注视觉台账

| 元素 | 精确规则 | 视觉保留 | 状态 |
|---|---|---|---|
| 章节标签 | `font-size:16px; line-height:1.4` | 现有蓝色与字重不变 | PASS |
| 痛点卡标题行 | 图标与标题横向排列，`gap:12px`，正文黑色 | 正式图标、卡片边框与背景不变 | PASS |
| Closing CTA | `height:auto; min-height:0; padding:60px 0` | 渐变背景、按钮与文案不变 | PASS |

- 同视口证据：`visual-results/feedback-2026-07-26/legal-ai-top-1576x1258.png`、`legal-ai-problems-1576x1258.png`、`legal-ai-bottom-1576x1258.png`（均位于同一目录）。

## 2026-07-26 浏览器批注第二批

| 元素 | 采样前 | 用户覆盖后 | 状态 |
|---|---|---|---|
| 独特价值条 | `#263A5B` / 白字 | `#EEF5FF` / `#285D9D` / 1px `#CFE2F6` | PASS |
| 第三张合作卡 | 同排 155px、padding 20px | 同排 147px、上下 16px | PASS |

证据：`output/playwright/browser-comments-round2-2026-07-26/legal-ai-*.png`。
