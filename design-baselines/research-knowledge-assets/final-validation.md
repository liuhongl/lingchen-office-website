# 《企业知识资产化实战》最终验收

## 内容与素材

- [x] DOCX SHA-256 与登记值一致。
- [x] 重新提取结果与正式 JSON block 深比较一致。
- [x] 6530 个原始文本字符零差异。
- [x] 11 张原图的尺寸与 SHA-256 一致。
- [x] 2 张 5×4 表格单元格逐字一致。

## 桌面视觉

- [x] 1440px 下文章头部和正文均为 1180px 网格。
- [x] title/subtitle/deck 三行标题区完整。
- [x] DOCX 段落属性类型的计算样式抽样通过。
- [x] 11 张图片完整加载且比例不变。
- [x] 2 张表格行列完整。
- [x] 摘要顶部内边距恢复为 18px，摘要和关键词其余样式与统一基线一致；落地原则保留 DOCX 底纹/边框与网页内边距。
- [x] 页面无根级横向溢出，正文不侵入 Footer。

## SEO 与工程

- [x] 列表第 3 张卡片真实点击进入详情。
- [x] sitemap、canonical、Article 和 BreadcrumbList JSON-LD 通过本地回归。
- [x] `pnpm lint`
- [x] `pnpm exec tsc --noEmit`
- [x] `pnpm build`
- [x] `git diff --check`
- [x] `pnpm mastergo:check research-knowledge-assets`

## 完成结论

- [x] 内容完整迁移通过
- [x] 内容还原通过
- [x] 已视觉校准
- [x] SEO/GEO 已实现，待线上验证
- [x] 第三类代表样板通过

## 验收证据

- DOCX 八页联系表：`00-docx-contact-sheet.png`
- 继承的 MasterGo 外壳参考：`01-inherited-mastergo-reference.png`
- 研究院列表第 3 张卡片：`03-list-card-local-1440.png`
- 1440px 全页：`04-detail-local-1440.png`
- 三行标题区：`05-header-local-1440.png`
- 落地原则：`06-closing-local-1440.png`
- 外壳参考并排图：`07-inherited-shell-comparison.png`
- 摘要统一前后局部：`08-abstract-before-local-1440.png`、`10-abstract-after-local-1440.png`
- 关键词统一前后局部：`09-keywords-before-local-1440.png`、`11-keywords-after-local-1440.png`
- 摘要/关键词基准并排：`12-abstract-comparison.png`、`13-keywords-comparison.png`
- 统一后 1440px 全页：`14-detail-after-local-1440.png`
- 已撤销的顶部内边距归零方案：`15-abstract-padding-top-zero-local-1440.png`
- 当前摘要内边距恢复证据：`16-abstract-padding-restored-local-1440.png`

计算样式抽样：普通正文 14px / 固定 25.3333px 行高 / 28px 首行缩进；核心结论项 17px 左缩进与 -9.46667px 悬挂缩进；摘要统一为 `rgb(244, 246, 250)` + 3px `rgb(46, 95, 163)` 左边框、14.6667px 字号与 20.7778px 行高，内边距统一为 `18px 22px 18px 18.6667px`；关键词标签统一为 `关键词｜`、`rgb(31, 78, 121)`、700，正文为 `rgb(89, 89, 89)`。落地原则继续使用 `rgb(241, 246, 243)` + 3px `rgb(111, 169, 138)` 左边框。

章节标题底边框回归证据：`17-heading-bottom-border-local-1440.png`；生产构建中 12 个正文章节标题均为 `1px solid rgb(220, 229, 240)`，核心结论标题按源文档无底边框。

公共 Header、Footer、预约弹窗与 Logo 的交付 SHA-256 均与开工基线一致。移动端按用户确认不属于本次正式视觉门禁。
