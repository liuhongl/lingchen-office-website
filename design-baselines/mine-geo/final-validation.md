# Mine GEO 最终验收

> 2026-07-20 主动复审：原 1:1 完成结论已撤销并完成逐区重验，以下为本轮新证据。

- [x] 全页标题计算字重审计：H2/H3/H4 均为 700。
- [x] 全页图片 DPR 与实际宽高审计：低于 2× DPR 数量 0；实际宽高偏差数量 0。
- [x] 背景分界、卡片阴影和正文底距逐区复核通过；商业实效卡不再溢出。
- [x] 六个区块均保存本轮可读比例局部并排图。

- [x] 逐区逐字文案审计通过；页面实际渲染字符串与台账一致。
- [x] 1440×6959 同视口全页截图：`full-local-1440.png`。
- [x] 并排证据：`full-comparison.png`；差异图：`full-diff.png`。
- [x] 主体与冻结 Footer 合计高度 6959px；区块边界、网格、换行、图标来源和背景衔接通过。
- [x] `scrollWidth === clientWidth`：1440 === 1440；页面唯一 H1。
- [x] canonical、sitemap 与服务端可见正文已实现。
- [x] 公共 Footer、Logo、BookingModal、BookingTrigger 哈希保持冻结基线；Header 使用用户确认保留的 `ea5b…` 新冻结基线。
- [x] `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check` 全部通过。
- [x] 1:1 验证通过（页面主体；公共 Header/Footer 按用户确认的冻结基线复用）。

线上抓取、索引和生成式答案抽样需部署后执行；本地状态为 SEO/GEO 已实现，待线上验证。

## 2026-07-21 用户反馈回归

- [x] 全页 H1–H4、`b`、`strong` 及台账强调节点重新导出计算字重；主分区标题为 800，其余强调项为 700，产品定位横条按设计保留 500。
- [x] 四张指标卡移除标题中的重复 `↑/↓`，保留上方正式方向图标；用户覆盖已写入文案台账。
- [x] 三处复合 section 恢复独立灰白背景分界：核心能力/平台接入、产品价值/传统方案、商业实效/应用场景。
- [x] 共享面包屑并发变更通过本页 `compact` 变体隔离，恢复 Mine GEO 的 46px 基线，不影响其他产品页默认样式。
- [x] 新全页运行截图：`full-local-feedback-20260721.png`；同视口并排图：`full-comparison-feedback-20260721.png`；局部截图：`03-products-local-feedback-20260721.png`、`04-value-local-feedback-20260721.png`、`05-business-local-feedback-20260721.png`。
- [x] 1440px 运行态：页面高度 6959px，`scrollWidth === clientWidth === 1440`，面包屑高度 46px。
- [x] `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check`、`pnpm mastergo:check mine-geo` 全部通过。
## 2026-07-22 原型内容同步复验状态

- 内容：已按 `prototype-content-snapshot.md` 完成源码级同步，差异与纠错决定见 `prototype-vs-local-review.md`、`typo-review.md`。
- 视觉：沿用既有页面与 MasterGo 风格；本次内容变化后的桌面同视口截图仍需重新归档，不复用旧截图作为新结论。
- 公共资产：本批次未主动修改 `SiteHeader`、`SiteFooter`、Logo、`ProductBreadcrumb`、`BookingModal`、`BookingTrigger`。
- 当前范围：仅桌面端；移动端未纳入当前官网实现与验收范围。
- SEO/GEO：可见正文与页面 metadata 已按原型真源校正；线上抓取、索引与生成式答案抽样不在本地结论内。

## 2026-07-22 产品矩阵七页一致性回归

- [x] 已处理本页 13 条浏览器批注：面包屑结构、重复英文眉题/编号/“核心能力”、正式标题、图标位置、传统方案标题边界及各区块间距。
- [x] 补回原型标题“产品价值与实效指标归因”，未补写原型外营销文案。
- [x] 页面可见编号已移除前导 `0`；1440px 全页无模块重叠或横向溢出。
- [x] 本轮截图：`output/playwright/product-matrix-final/mine-geo.png`。
- [x] 工程四项与 `pnpm mastergo:check mine-geo` 通过。
- [x] 共享 `ProductBreadcrumb` 按用户确认改为产品名后空格接描述；公共 Header/Footer 未修改。

## 2026-07-23 用户覆盖回归

- [x] Hero “产品定位”标签已删除。
- [x] compact 面包屑保持无顶部预约按钮。
- [x] 四组复合 section 已拆为八个真实大模块；横向箭头归属“五大能力 · 一个闭环”。
- [x] 四个上游模块内容底部均为 `72px`，四个下游模块顶部均为 `88px`；背景边界不穿过卡片或箭头。
- [x] 1671×1258 同视口局部截图已复核：`02-loop-workflow-local-feedback-20260723.png`、`03-products-platform-local-feedback-20260723.png`、`04-value-traditional-local-feedback-20260723.png`、`05-business-scenarios-local-feedback-20260723.png`。
- [x] 运行态无模块重叠；`scrollWidth === clientWidth === 1656`。
- [x] `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check` 与 `pnpm mastergo:check mine-geo` 全部通过。

## 2026-07-24 用户批注发布复验

- [x] 应用场景表从三列拆为“落地场景 / 适用角色 / 痛点 / 可衡量指标与解决的问题”四列。
- [x] 三行内容按用户确认的原文边界拆列，没有新增指标、事实或图标。
- [x] 1616px 桌面视口唯一 H1、无横向溢出、无破损图片。
- [x] 局部截图归档于 `output/playwright/product-feedback-2026-07-24-v2/`。
- [x] 工程四项及 `pnpm mastergo:check mine-geo` 全部通过；本轮不更新历史 MasterGo 1:1 结论。
## 2026-07-24 三列表格与间距回归

- 传统方案表头为「验证维度 / 传统做法 / Mine GEO 闭环」，每行三个真实文本节点；表头 14px，正文 12px。
- Hero 与闭环区块取消固定高度并使用 60px 上下 padding。
- `1616×1258`：`scrollWidth=clientWidth=1601`；全页截图 `visual-results/feedback-2026-07-24-batch2/mine-geo-full-1616.png`。
- 移动端未纳入本轮验收。
## 2026-07-24 区块节奏回归

- 1644 × 1258 桌面视口下，Hero 之外 9 个内容 section 最终计算值均为上下 `60px`。
- 原先 72/88/92px 的离散间距已统一，横向溢出为 0。

## 2026-07-25 浏览器批注验证

- Hero H1 计算为横向 flex，两段文字同排；两段正文右边界与 Hero 容器相差 `0px`。
- 五张能力卡均为上下 padding `20px`、`min-height=0px`，图标与标题中心差 `0px`；监控卡不再跨列。
- 痛点卡、场景行、路径卡、价值卡、合作卡均为 `min-height=0px`；三张合作卡实际高度 `263 / 287 / 287px`。
- Closing 为上下 `60px`、`min-height=0px`，标题运行态按两行输出且无横线；正文宽度 `1200px`。
- 横向溢出 `0`；顶部分区截图：`visual-results/feedback-2026-07-25-browser-comments/mine-geo-top-1576x1258.png`。
- 工程门禁：`pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check`、`pnpm mastergo:check mine-geo` 全部 PASS。

## 2026-07-26 20:27 纯文字批注验证

- [x] BC-07：`#mgs-capabilities-title` 逐字为 `一、 五大能力 · 一个闭环`。
- [x] BC-08：七个主体 section 的左右内容边界均与公共 Header `1200px` shell 一致。
- [x] BC-09 / BC-10：核心功能三、四均为 `height:auto`，实测 `358px`，`scrollHeight=clientHeight=356px`。
- [x] BC-11：模式 1 卡从 `271px` 降至 `263px`，内容溢出 0。
- [x] BC-12：模式 2 徽标与标题同排且中心差 0；新 selector 已记录于批次台账。
- [x] BC-05：当前可见区块级导语计算色均为 `rgb(17,24,39)`；不存在的三个空 selector 记为 `N/A`，未补写文案。
- [x] 页面唯一 H1、横向溢出 0；局部截图为 `output/playwright/browser-comments-2026-07-26/05-07-*.png`。
- [x] `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check` 与 `pnpm mastergo:check mine-geo` 全部 PASS。
- 当前完成等级：已视觉校准；本轮为用户覆盖，不新增旧 MasterGo 严格 1:1 声明。

## 2026-07-26 浏览器批注第二批增量验收

- ID 17–19、26–28 内容与视觉双验收 PASS；旧 BC-07–BC-12 在新结构下继续满足。
- 四个成果标题无换行，九个表格单元格垂直居中，三张合作卡内容驱动且 padding 一致。
- 1576×1258 横向溢出为 0；证据见 `output/playwright/browser-comments-round2-2026-07-26/mine-geo-*.png`。
- 本节最终门禁：lint、tsc、build、diff check 与 `mastergo:check mine-geo` 全部 PASS。

## 2026-07-27 浏览器批注第三批增量验收

- 优势卡标题为 `18/26px` 单行显示，图标为 `44×44px`，无裁切或横向溢出。
- 场景表三行实测 `121/97/97px`，单元格上下 padding 为 `12px`。
- 三张合作模式卡实测均高 `245px`，内容溢出为 `0`。
- 同视口截图：`output/playwright/browser-comments-round3-2026-07-27/06-mine-advantages-1576x1258.png`、`07-mine-scenarios-1576x1258.png`、`08-mine-cooperation-1576x1258.png`。
- 页面横向溢出为 `0`；视觉人工复核 PASS。
- 工程门禁与 `pnpm mastergo:check mine-geo` 均 PASS。
- 移动端未纳入当前官网范围；本批不更新旧 MasterGo 严格 1:1 结论。

## 2026-07-27 浏览器批注第四批

- R4-11、R4-19–21 内容/视觉双验收 PASS：双色对比模块上下均 `60px`、卡高 `169.28px`；工作流标题 `margin-top:0`；三张合作卡付费行距卡顶均 `81px`。
- 同视口全页证据：`output/playwright/browser-comments-round4-2026-07-27/mine-geo-full-1576.png`；横向溢出 0。
- 本轮统一门禁：lint、tsc、build、diff check、`mastergo:check mine-geo` PASS；移动端不在范围，不声明新的 MasterGo 1:1。

## 2026-07-27 浏览器批注第五批

- R5-MG-01–07 内容门禁 PASS：没有修改 Mine GEO 可见字符串或图标文件。
- Hero 为完整 `#f8fafc` 背景，下一模块为 `#f1f5f9`；两张对比卡间距 `20px`、等高 `171.28px`，图标白色角区不可见。
- 五张能力编号均为 `40×40px / 16px`；能力正文实际上距均 `18.5px`，四张工作流正文实际上距均 `19.25px`；九张卡内容溢出均为 0。
- `1576×1258` 下唯一 H1、横向溢出 0；懒加载图片滚动触发后无破损图片；浏览器 error 日志为 0。
- Header “立即体验”打开唯一 `BookingModal`，滚动锁定、焦点进入弹窗、Escape 关闭均 PASS。
- 截图：`output/playwright/browser-comments-round5-2026-07-27/03-mine-top-after-1576x1258.png`、`04-mine-workflow-after-1576x1258.png`、`07-mine-geo-full-after-1576.png`。
- `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check`、`pnpm mastergo:check mine-geo` 全部 PASS。
- 当前完成等级：已视觉校准；本批次没有相同视口 MasterGo 原画板，不新增 1:1 声明。移动端未纳入范围。

## 2026-07-27 浏览器批注第九批

- 面包屑取消 compact 特例，统一为 `74px` 完整模式；返回符号、预约 CTA 与其余六个产品详情页一致，滚动后吸附 top `66px`。
- 七页共享回归均为横向溢出 `0`、破图 `0`、唯一 H1。
- `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check` 与 `pnpm mastergo:check mine-geo` 全部 PASS；移动端不在范围，本轮不新增 MasterGo 1:1 声明。
