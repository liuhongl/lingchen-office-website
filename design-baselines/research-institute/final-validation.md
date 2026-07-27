# 灵宸研究院最终验收

## 内容门禁

- [x] 全页可见文本逐字核对
- [x] 长文案首句、末句、句数与标点核对
- [x] 页面实际渲染字符串核对（Playwright DOM snapshot：6 个 article、1 个 h1）

## 视觉门禁

- [x] 每区 MasterGo 100% 无遮挡基线
- [x] 每区本地 1440px 同视口截图
- [x] 每区并排对比（左 MasterGo、右本地，蓝线分隔）
- [x] 正式素材原图检查、尺寸、DPR、SHA-256
- [x] 全页 1440px 截图回归
- [x] `scrollWidth === clientWidth`（Playwright 实测 `1280 === 1280`）
- [x] 1:1 验证通过（页面主体；公共 Header/Footer 按用户冻结要求复用，不纳入页面级改动）

对比产物：

- `01-hero-tabs-comparison.png`
- `03-articles-comparison.png`
- `04-pagination-footer-comparison.png`
- `05-full-page-local-1440.png`

校准记录：首轮 Hero 眉题缺失胶囊背景，已按基线补齐；Hero 文本按 Hero 内 112px 顶距校准；加载更多按钮由首轮偏小尺寸校准为 154×52；卡片外框、内边距、间距与正式图层素材逐项复核。

## 公共资产与交互

- [x] Header SHA-256 与开工基线一致：`ea5b1626042d5b6e8d26e7b4c878d27f7301d51e41cd3f82058c06196b065227`
- [x] Footer SHA-256 与开工基线一致：`5816ee5da601620216059640fcaace7f3f25c030d8280423f42e08759ddec20b`
- [x] 本页页面主体无预约类 CTA；冻结 Header 的“立即体验”继续复用公共 `BookingModal`
- [x] 文章详情与新增加载行为不在当前画板范围；按钮只保留设计稿可见交互外观，不补写详情内容

## SEO / GEO

- [x] 独立 title / description / canonical
- [x] 唯一 h1 与合理标题层级
- [x] sitemap / robots / 状态码：均 200；公共头尾内链因冻结未改，作为授权例外记录
- [x] 服务端 HTML 与 `CollectionPage` 结构化数据核对

本地口径：SEO/GEO 已实现，待线上验证。

## 工程门禁

- [x] `pnpm lint`
- [x] `pnpm exec tsc --noEmit`
- [x] `pnpm build`
- [x] `git diff --check`
- [x] `pnpm mastergo:check research-institute`

## 最终结论

G0-G6 均通过。页面主体已按 MasterGo `page_id=6:20765` 完成内容与视觉双验收；公共 Header/Footer 严格保持冻结哈希。

## 2026-07-23 公共栅格对齐

- 用户覆盖：Hero、分类 Tab 与文章列表统一到公共 Header 1180px 栅格；摘要两行省略；封面 180×126；卡片高 272px。
- 内容验收：PASS；28 条摘要完整文本仍存在于 DOM，未新增、删除或改写文案。
- 视觉验收：PASS；1440×900 实测 Header、Hero、分类 Tab、文章列表均为 1180px，左右边界一致；28 张卡片均为 1180×272，封面 180×126，摘要两行 51px；无横向溢出。
- 交互验收：PASS；“解决方案&白皮书”筛选显示 11 篇，切回“全部”恢复 28 篇。
- 工程验收：PASS；`lint`、`tsc --noEmit`、`build`、`git diff --check` 均通过，构建生成 28 个研究详情静态路径。
- 移动端未纳入当前官网范围。

## 2026-07-25 浏览器批注增量验收

- 视口：1576×1258；`scrollWidth === clientWidth`（1561 === 1561）。
- Hero：浅色渐变、内容高度 331.1875px、上下各 60px、无固定或最小高度。
- 分类栏：白色背景、高 76px；数量徽标已删除；未选中项为 `#111827 / 600`。
- 文章区：背景 `#F4F7FB`；顶部 24px；首卡 1200×214px、上下 24px、无最小高度。
- 视觉证据：`06-browser-feedback-local-1576x1258.png`。
- 工程门禁：`lint`、`tsc --noEmit`、`build`、`git diff --check`、`mastergo:check research-institute` 均 PASS。
- 公共资产交付哈希与本轮开工值一致：SiteHeader `5aef1bd2…345bfa`、SiteFooter `87329729…eae2ae`、BookingModal `3e143bc7…32206`、BookingTrigger `cf6bfae2…c4fad7`、Logo `badc568e…fdf11`。
- 当前完成等级：已视觉校准；移动端未纳入当前官网范围。

## 2026-07-25 正式素材文件夹分类同步

- 内容真源：“行业洞察”和“解决方案&白皮书”两个正式素材文件夹。
- 源文件与页面数据逐项核对通过：行业洞察 10/10、解决方案&白皮书 10/10，20 个 DOCX 文件名与 `article.json.sourceDocx` 无差异。
- 《按结果付费（RaaS）：当 AI 供应商开始与你共担风险，采购逻辑变了什么》由“解决方案&白皮书”纠正为“行业洞察”；列表卡片和详情分类同步。
- 未改动文章标题、摘要、顺序、详情链接和视觉样式。
- 服务端 HTML 返回 200，RaaS 列表卡片实际输出“行业洞察”标签；应用内浏览器本轮因本地地址安全策略未能重新加载，未新增视觉验收结论。

## 2026-07-25 第二轮背景与 CTA 间距复验

- 视口：1576×1258；`scrollWidth === clientWidth`（1561 === 1561）。
- Hero：左、中、右均为可辨识浅蓝色，最终背景为 `#EEF7FF → #EAF6FF → #DFF1FF` 横向渐变并叠加右上浅蓝光晕；下方分类栏保持纯白，模块分界清晰。
- 文章卡片：全量审计 28 张；正式封面与“立即阅读”按钮间距均为 12px，右侧组使用 `flex-start` 顺排；卡片统一由内容撑开至 226px。
- 文案、文章链接、正式封面、分类交互与公共资产均未修改。
- 视觉证据：`07-browser-feedback-round2-local-1576x1258.png`。
- 当前完成等级：已视觉校准；移动端未纳入当前官网范围。
