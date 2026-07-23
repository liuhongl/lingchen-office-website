# 《按结果付费（RaaS）》最终验收

## 内容与素材

- [x] DOCX SHA-256 与登记值一致。
- [x] 重新提取结果与正式 JSON block 深比较一致。
- [x] 6832 个原始文本字符及已登记标签覆盖全部可解释。
- [x] 7 张原图的尺寸与 SHA-256 一致。
- [x] 4 张数据表单元格逐字一致。

## 桌面视觉

- [x] 1440px 下文章头部和正文均为 1180px 网格。
- [x] 无副标题时不存在空占位。
- [x] 摘要上/下内边距为 18px；关键词统一展示为蓝色 `关键词｜`。
- [x] 3 个蓝色菱形项目符号及悬挂缩进正确。
- [x] 7 张图片完整加载且比例不变。
- [x] 4 张表格行列完整，图注/表题位置正确。
- [x] 页面无根级横向溢出，正文不侵入 Footer。

## SEO 与工程

- [x] 列表第 4 张卡片真实点击进入详情。
- [x] sitemap、canonical、Article 和 BreadcrumbList JSON-LD 通过本地回归。
- [x] `pnpm lint`
- [x] `pnpm exec tsc --noEmit`
- [x] `pnpm build`
- [x] `git diff --check`
- [x] `pnpm mastergo:check research-raas`

## 完成结论

- [x] 内容完整迁移通过
- [x] 内容还原通过
- [x] 已视觉校准
- [x] SEO/GEO 已实现，待线上验证

## 验收证据

- DOCX 八页联系表：`00-docx-contact-sheet.png`
- 继承的 MasterGo 外壳参考：`01-inherited-mastergo-reference.png`
- 研究院列表第 4 张卡片：`03-list-card-local-1440.png`
- 1440px 全页：`04-detail-local-1440.png`
- 标题与摘要：`05-header-summary-local-1440.png`
- Word 蓝色菱形编号：`06-list-marker-local-1440.png`
- 继承外壳并排核对：`07-inherited-shell-comparison.png`

运行态计算样式：正文宽度 1180px；摘要内边距 `18px 22px 18px 18.6667px`、背景 `rgb(244, 246, 250)`、3px `rgb(46, 95, 163)` 左边框；关键词标签为 `关键词｜`、`rgb(31, 78, 121)`；3 个 `◆` 均为 `rgb(27, 75, 122)`、宽 21.3281px。页面根级横向溢出为 0。

章节标题底边框回归证据：`08-heading-bottom-border-local-1440.png`；生产构建中 12 个 h2 均为 `1px solid rgb(220, 229, 240)`。

公共 Header、Footer、预约弹窗与 Logo 的交付 SHA-256 均与开工基线一致。正文无单篇 MasterGo 对照，因此完成等级为“已视觉校准”，不报告正文逐段 MasterGo 1:1。
