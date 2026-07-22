# 《万亿级“毛细血管”债权》最终验收

## 内容、视觉与 SEO

- [x] DOCX SHA-256、重新提取 JSON 深比较一致。
- [x] 66 个文本节点、5995 字符、9 张原图、两张表全部可解释。
- [x] 1440px 下唯一 h1、11 个 h2、1180px 正文宽度。
- [x] title、subtitle、摘要、关键词、closing 均按源结构显示。
- [x] 9 张 1600×900 图片完整加载；两表为 6×4、5×4。
- [x] 根级横向溢出为 0，正文与 Footer 正常衔接。
- [x] 列表第 6 张卡片真实点击进入正式详情。
- [x] canonical、Article、BreadcrumbList 与 sitemap 本地通过。

## 工程验证

- [x] `pnpm lint`
- [x] `pnpm exec tsc --noEmit`
- [x] `pnpm build`
- [x] `git diff --check`
- [x] `pnpm mastergo:check research-batch-small-overdue-debt`

## 证据与结论

- DOCX：`00-docx-contact-sheet.png`
- MasterGo 参考：`01-inherited-mastergo-reference.png`
- 列表、全页、标题、摘要、落地原则：`03-list-card-local-1440.png` 至 `07-closing-local-1440.png`
- 并排对照：`08-mastergo-local-comparison.png`

- [x] 内容还原通过
- [x] 已视觉校准
- [x] SEO/GEO 已实现，待线上验证

正文无单篇 MasterGo 对照，因此不报告正文逐段 MasterGo 1:1。
