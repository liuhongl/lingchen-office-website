# 《结果型 AI Agent 怎么验收》最终验收

## 内容与素材

- [x] DOCX SHA-256 与登记值一致。
- [x] 重新提取结果与正式 JSON block 深比较一致。
- [x] 115 个文本节点、7029 个字符及摘要样式覆盖全部可解释。
- [x] 10 张原图的尺寸与 SHA-256 一致。
- [x] 2 张数据表单元格逐字一致。

## 桌面视觉

- [x] 1440px 下文章头部和正文均为 1180px 网格。
- [x] 摘要独立标签与正文共用统一容器，未新增标点。
- [x] 无独立关键词模块，嵌入正文的“关键词包括”保持原文。
- [x] 13 个正文章节标题底边框正确。
- [x] 10 张图片完整加载且比例不变。
- [x] 2 张表格行列完整，图注/表题位置正确。
- [x] 页面无根级横向溢出，正文与 Footer 正常衔接。

## SEO 与工程

- [x] 列表第 5 张卡片真实点击进入详情。
- [x] sitemap、canonical、Article 和 BreadcrumbList JSON-LD 通过本地回归。
- [x] `pnpm lint`
- [x] `pnpm exec tsc --noEmit`
- [x] `pnpm build`
- [x] `git diff --check`
- [x] `pnpm mastergo:check research-agent-acceptance-metrics`

## 完成结论

- [x] 内容还原通过
- [x] 已视觉校准
- [x] SEO/GEO 已实现，待线上验证

## 浏览器证据

- 列表入口：`03-list-card-local-1440.png`
- 生产构建全页：`04-detail-local-1440.png`
- 标题区：`05-header-local-1440.png`
- 摘要：`06-summary-local-1440.png`
- 章节标题底边框：`07-heading-border-local-1440.png`
- 继承设计参考与当前标题区并排：`08-mastergo-local-comparison.png`

1440px 生产构建运行态核对：唯一 h1；14 个 h2（核心判断 1 个、正文章节 13 个）；正文宽 1180px；摘要内边距 `18px 22px 18px 18.6667px`；10 张图片均加载为 1600×900；两表分别为 5×4、6×4；根级横向溢出为 0。正文无单篇 MasterGo 对照，因此完成等级为“已视觉校准”，不报告正文逐段 MasterGo 1:1。
