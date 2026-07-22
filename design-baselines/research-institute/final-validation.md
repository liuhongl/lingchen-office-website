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
