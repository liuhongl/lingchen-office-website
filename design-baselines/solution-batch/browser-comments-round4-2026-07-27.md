# 2026-07-27 浏览器批注第四批

## 范围与真源

- 内容真源：用户本轮 29 条浏览器批注；不修改任何可见字符串。
- 视觉真源：用户提供的 `1576 × 1258` 浏览器选区截图、明确文字要求与当前页面运行态。
- 目标路由：`/products/deeplaw/`、`/products/recov-ai/`、`/products/deepdoc/`、`/products/ai-acquisition-harness/`、`/products/mine-geo/`、`/products/social-grow/`、`/products/sales-in/`、`/`。
- 允许修改：上述页面的页面级 JSX/CSS、首页页面级 CSS 与对应证据台账。
- 冻结资产：`SiteHeader`、`SiteFooter`、Logo、`BookingModal`、`BookingTrigger`；移动端未纳入本批范围。
- 本批没有新的同视口 MasterGo 100% 原画板，因此只允许报告“已视觉校准”，不得报告 1:1。

## 公共资产开工 SHA-256

| 文件 | SHA-256 |
|---|---|
| `components/site-header.tsx` | `5aef1bd27e0a0a57ffdc65dbb80df4ab5cc30aa2c17b1283f3791a17da345bfa` |
| `components/site-footer.tsx` | `8732972918addddddbbcbec095ff0b2b7c34797ea74522bf019427956ceae2ae` |
| `components/logo.tsx` | `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11` |
| `components/booking-modal.tsx` | `3e143bc70f5cc270231d3961ff5eb1b92481be637c55bcbc36269cfedbb32206` |
| `components/booking-trigger.tsx` | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` |

## 逐项门禁

| ID | 页面 / 元素 | 开工运行态（1576×1258） | 用户覆盖 | 状态 |
|---|---|---|---|---|
| R4-01 | DeepLaw 过去/现在卡 | 两卡均 `214.42px`，`padding:28px 30px` | 减少两卡高度 | PASS |
| R4-02 | DeepLaw 过去卡标签/标题 | 标签与标题分两行，标题上距 `18px` | 标题紧跟“过去”标签 | PASS |
| R4-03 | DeepLaw 现在卡标签/标题 | 标签与标题分两行，标题上距 `18px` | 标题紧跟“现在”标签 | PASS |
| R4-04 | DeepLaw 五张能力卡标签 | `44×109.94px`，中文逐字纵排 | 五张标签保持横向 | PASS |
| R4-05 | DeepLaw 五张能力卡标题 | 标签与标题同一 Grid 行 | 标题放到第二行 | PASS |
| R4-06 | DeepLaw 工作流优势面板 | `250.19px`，`padding:32px` | 减少高度 | PASS |
| R4-07 | DeepLaw 增长闭环正文 | 深蓝底上正文为 `rgb(17,24,39)` | 正文改为白色 | PASS |
| R4-08 | Recov AI 压力卡序号 | 序号均为深黑；指标为蓝/蓝/红 | 序号跟随对应指标色 | PASS |
| R4-09 | Recov AI 四张流程卡图标 | 93×93 正式 SVG 被压入带 `10px` padding 的 44×44 容器；可见图形过小；文书图标为 16×13.6 白色原图层 | 恢复四枚正式图标清晰可见 | PASS |
| R4-10 | DeepDoc 四张指标卡 | 四卡均 `164px`，`padding:32px 20px` | 全部减高并由内容撑开 | PASS |
| R4-11 | 七个产品详情页同类价值卡 | Sales `26×30`；Social `23/24/27`；Mine `24`；Harness `24`；DeepDoc `31×32`；Recov `22`；DeepLaw `28` | 同类价值卡统一 `padding:20px` | PASS |
| R4-12 | DeepDoc 落地建议 | 标题白色，但正文被覆盖为 `rgb(17,24,39)` | 全部文字改为白色 | PASS |
| R4-13 | DeepDoc 四张安全卡标题 | 已左对齐，但标题紧贴 56px 编号块，间距 `0px` | 左对齐并保留合适间距 | PASS |
| R4-14 | DeepDoc 四个编号块 | `56×56px`、`24px` 字号 | 四个编号同步缩小 | PASS |
| R4-15 | Harness 过去/现在卡 | 两卡均 `229px`，`padding:78px 40px 30px` | 减少卡片高度 | PASS |
| R4-16 | Harness 三张核心能力图标 | JSX 56×56、源图 168×168，但实际被 Grid 压为 `46×56px` | 保持比例、消除变形 | PASS |
| R4-17 | Harness 差异优势面板 | `258.56px`；内部上留白 `21px`、下留白 `39px` | 内容撑开且上下留白一致 | PASS |
| R4-18 | Harness 指引图标 | 正式 PNG 自带深色底，当前又叠加浅蓝容器 | 视觉移除黑色底 | PASS |
| R4-19 | Mine GEO 过去/现在对比 | 两张独立白卡、`gap:32px`、卡高 `196px`；上间距约 `153px` | 合并为双色大模块，上下间距 60px，并降低高度 | PASS |
| R4-20 | Mine GEO 工作流标题 | section 顶部 60px 后仍叠加 `margin-top:120px` | 标题上间距设为 0 | PASS |
| R4-21 | Mine GEO 三张合作卡付费行 | 相对卡顶分别 `88.33/69/78.75px` | 三张付费行上间距一致 | PASS |
| R4-22 | Social Grow 内容生产线 | 固定 `height:366px`，末尾空白约 `80px` | 删除固定高度 | PASS |
| R4-23 | Social Grow 四张指标说明 | 四项均为 `rgb(147,160,180)` | 改为黑色 | PASS |
| R4-24 | Social Grow 浅色模块正文 | 多组正文/表格文字为 `rgb(96,112,137)`；深色模块需排除 | 浅色背景正文改黑，禁止破坏深色/彩色语义 | PASS |
| R4-25 | Social Grow 深蓝最终卡正文 | 三项正文被全站黑字覆盖为 `rgb(17,24,39)` | 三项正文恢复白色 | PASS |
| R4-26 | Sales in 两张典型场景卡 | 标签和标题分两行，标题 `margin-top:20px` | 标签后 10px 接标题并垂直居中 | PASS |
| R4-27 | Sales in 四张路径卡 | 标签和标题分两行，标题 `margin-top:18px` | 标题紧跟步骤标签；必要时缩字号并保持单行 | PASS |
| R4-28 | 首页四张价值卡 | 实测四卡均 `214.06px`、`padding:24px` | 全部降低高度 | PASS |
| R4-29 | 首页 Agent OS | `padding-top:105px`、`padding-bottom:49px` | 上下内边距均改为 60px | PASS |

## 实施约束

- R4-09 继续使用当前已登记的 Recov AI 正式图层资源，不换近似图标；修复仅处理裁切、容器和显示尺寸。
- R4-11 的“这种卡片”按七个产品详情页的价值/结果内容卡逐页盘点，不扩大到 Hero、表格、合作模式和公共卡片。
- R4-18 不新绘图标；原 PNG 的深色底无法在不损失图形的前提下用 CSS 可靠移除，因此按用户覆盖改用已有 MasterGo 原始导出记录的透明信息图标 `public/images/customer-cases/summary-info.svg`（来源与 SHA 见 `design-baselines/customer-cases/visual-ledger.md`），不使用近似图标库或生成图形。
- R4-24 仅覆盖浅色模块中的正文、说明和表格文本；彩色指标、步骤编号、深色按钮与深蓝最终卡不纳入黑字覆盖。
- 每项完成后必须复核文本溢出、元素顺序、计算样式和整页横向溢出；截图归档到 `output/playwright/browser-comments-round4-2026-07-27/`。

## 1576×1258 收工实测

| ID | 收工运行态 | 状态 |
|---|---|---|
| R4-01–03 | 两卡均由 `214.42px` 降至 `155.42px`；`padding:20px`；标签与标题同排、水平间距 `10px` | PASS |
| R4-04–05 | 五张标签均为横向 `white-space:nowrap`；标题统一位于第二行 | PASS |
| R4-06–07 | 优势面板由 `250.19px` 降至 `220.19px`、`padding:20px`；增长闭环正文 `rgb(255,255,255)` | PASS |
| R4-08–09 | 压力卡序号依次为蓝/蓝/红并与指标一致；四张流程卡的正式图形均清晰可见 | PASS |
| R4-10 | 四张指标卡由 `164px` 降至 `143px`，`padding:20px`，无内容裁切 | PASS |
| R4-11 | 七个产品详情页同类价值卡全部 `padding:20px`，合计 31 张卡无内容溢出 | PASS |
| R4-12–14 | 落地建议标题/正文/三行说明均为白色；四个编号块由 `56px/24px` 降至 `44px/20px`；标题左对齐且与编号间距 `12px` | PASS |
| R4-15–18 | 对比卡由 `229px` 降至 `142.5px`；三枚核心图标均为 `56×56px`、`object-fit:contain`；差异面板上下留白均 `21px`；指引图标无深色底 | PASS |
| R4-19 | 对比卡正文上方与模块底部均为 `60px`；两卡组成无缝双色模块，卡高由 `196px` 降至 `169.28px` | PASS |
| R4-20–21 | 工作流标题 `margin-top:0`；三张合作卡付费行距卡顶均为 `81px` | PASS |
| R4-22–25 | 内容生产线 `height:auto`、实高 `315px`；四项指标说明及浅背景正文均为 `rgb(17,24,39)`；深蓝最终卡三段正文均为白色 | PASS |
| R4-26–27 | 两张场景卡、四张路径卡均为标签后 `10px` 接标题；标题保持单行且无横向溢出 | PASS |
| R4-28 | 首页四张价值卡由 `214.06px` 降至 `185.67px`，`padding:20px`，无内容裁切 | PASS |
| R4-29 | `#agent-os` 上下内边距均为 `60px` | PASS |

## 内容、交互与整页回归

- 本批仅 R4-18 更新图标资源路径；29 条批注未修改任何可见字符串，页面 H1 与既有标题层级保持不变。
- 八个目标路由在 `1576×1258` 下均满足 `document.documentElement.scrollWidth === document.documentElement.clientWidth`。
- 七个产品详情页及首页共 16 个预约类 CTA 均打开同一个 `BookingModal`；逐个实测单一 dialog、滚动锁定、焦点进入弹窗与 Escape 关闭均 PASS；关闭按钮与遮罩关闭另行 PASS。
- 九张全页同视口截图及 18 张重点区块/前后对照截图归档在 `output/playwright/browser-comments-round4-2026-07-27/`；人工检查未发现累计高度错位、内容裁切或公共头尾异常。
- 联系我们页实时重查：唯一 H1、无横向溢出，全页证据为 `contact-full-1576.png`；此前内容/视觉台账继续 PASS。
- 移动端未纳入当前官网范围；本批缺少对应 MasterGo 100% 同视口原画板，完成等级为“已视觉校准”，不声明 1:1。

## 工程与公共资产收工门禁

- `pnpm lint`：PASS。
- `pnpm exec tsc --noEmit`：PASS。
- `pnpm build`：PASS，74 个静态页面生成完成。
- `git diff --check`：PASS。
- `pnpm mastergo:check`：contact、4 个产品专项解决方案、non-performing-assets、legal-ai、7 个产品详情页与 home，共 15 个对应 slug 全部 PASS。
- Header、Footer、Logo、BookingModal、BookingTrigger 的收工 SHA-256 与开工值逐项一致。
- 工作树开工前已有大量未提交改动，本轮未覆盖、暂存、提交或清理用户的其他修改。
