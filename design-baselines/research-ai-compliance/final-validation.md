# 《AI 催收的合规工程》最终验收

## 内容与素材

- [x] 66 个内容 token 与 DOCX 顺序、字符一致。
- [x] 8 张 1600×900 原图 SHA-256 已核对。
- [x] 3 张 5×3 数据表单元格逐字一致。
- [x] DOCX 直接格式及三个明确色值已保留。
- [x] 未展示未经确认的日期。

## 视觉

- [x] 继承文章详情页 V1 冻结外壳。
- [x] 1440px 与 390px 私有渲染无页面横向溢出。
- [x] 移动端宽表在表格容器内部横向滚动。
- [x] 正文末尾不侵入 Footer。
- [x] 正式列表卡片与详情路由已完成最终截图回归。
- [x] 已视觉校准；桌面端继承用户确认的 V1 覆盖规则，移动端按保守响应式验收。
- [x] 逐段补录 DOCX 布局属性；33 个普通正文段落实测为 32px 首行缩进、12pt、1.5 倍行距、6.67px 段后。
- [x] “其一/其二/其三”按 DOCX 恢复为 0px 首行缩进、11.5pt、330/240 倍行距。
- [x] 摘要与行动建议均按 DOCX 恢复为 `#F4F6FA` 底纹、`#2E5FA3` 左边框、无圆角。

### 最终视觉证据

- 列表卡片：`03-list-card-1440.png`
- 桌面详情：`04-detail-final-desktop-1440.png`
- 移动详情：`05-detail-final-mobile-390.png`
- 冻结外壳对照：`06-inherited-shell-comparison.png`
- 首行缩进回归：`07-first-line-indent-local-1440.png`
- 行动建议模块：`08-action-callout-local-1440.png`
- 摘要背景回归：`09-summary-background-local-1440.png`
- DOCX 段落布局回归：`10-docx-layout-local-1440.png`
- 摘要内边距回归：`11-summary-spacing-local-1440.png`
- 行动建议内边距回归：`12-action-spacing-local-1440.png`

## SEO 与工程

- [x] 列表、sitemap、canonical 和 JSON-LD 正式回归。
- [x] `pnpm lint`
- [x] `pnpm exec tsc --noEmit`
- [x] `pnpm build`
- [x] `git diff --check`
- [x] `pnpm mastergo:check research-ai-compliance`

## 结论

- [x] 内容核对通过
- [x] 正式路由视觉校准通过
- [x] 文章还原验收通过

注：本文无逐文章 MasterGo 对照，因此不声称正文逐段 1:1；内容还原以 DOCX 逐字审计为准，外壳以已冻结的 V1 规则为准。SEO/GEO 已本地实现，线上抓取、索引与生成式答案抽样待发布后验证。
