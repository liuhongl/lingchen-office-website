# 《多智能体协作走出演示厅》最终验收

## 内容与素材

- [x] DOCX SHA-256 与登记值一致。
- [x] 重新提取结果与正式 JSON block 深比较一致。
- [x] 94 个文本节点、6177 个字符全部可解释。
- [x] 7 张原图的尺寸与 SHA-256 一致。
- [x] 3 张 5×3 数据表单元格逐字一致。

## 桌面视觉

- [x] 1440px 下文章头部和正文均为 1180px 网格。
- [x] 无副标题、无日期，标题逐字显示 DOCX 原文。
- [x] 摘要与关键词使用统一样式但正文不改。
- [x] 9 个章节标题底边框正确。
- [x] 7 张图片完整加载且比例不变。
- [x] 3 张表格行列完整，图注/表题位置正确。
- [x] 页面无根级横向溢出，正文与 Footer 正常衔接。

## SEO 与工程

- [x] 列表第 2 张卡片真实点击进入详情。
- [x] sitemap、canonical、Article 和 BreadcrumbList JSON-LD 通过本地回归。
- [x] `pnpm lint`
- [x] `pnpm exec tsc --noEmit`
- [x] `pnpm build`
- [x] `git diff --check`
- [x] `pnpm mastergo:check research-multi-agent-collaboration`

## 完成结论

- [x] 内容还原通过
- [x] 已视觉校准
- [x] SEO/GEO 已实现，待线上验证

## 浏览器证据

- 列表入口：`03-list-card-local-1440.png`
- 生产构建全页：`04-detail-local-1440.png`
- 标题区：`05-header-local-1440.png`
- 摘要：`06-summary-local-1440.png`
- 关键词：`07-keywords-local-1440.png`
- 章节标题底边框：`08-heading-local-1440.png`
- 继承设计参考与当前标题区并排：`09-mastergo-local-comparison.png`

1440px 生产构建运行态核对：唯一 h1；9 个 h2 且均保留源底边框；正文宽 1180px；摘要内边距 `18px 22px 18px 18.6667px`；7 张图片均按原像素完整加载；三表均为 5×3 且表题在表后；根级横向溢出为 0。正文无单篇 MasterGo 对照，因此完成等级为“已视觉校准”，不报告正文逐段 MasterGo 1:1。
