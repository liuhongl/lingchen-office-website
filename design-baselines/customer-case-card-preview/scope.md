# 客户案例摘要卡片预览范围

- 目标：只设计一张摘要卡片供用户确认，不改正式客户案例页。
- 路由：`/customer-cases/card-preview/`
- 目标桌面视口：1440 × 900 px
- 内容来源：用户指定的右侧 AI Studio 原型，第一个 Sales in 案例。
- 视觉来源：MasterGo 客户案例 `page_id=6:33938` 的色彩、圆角、边框、阴影、标签和产品图标语言。
- 用户确认覆盖：允许为索引页新增摘要卡片形态与“查看完整案例”入口。
- 公共资产：`SiteHeader`、`SiteFooter`、Logo、字体全部冻结复用。
- 非目标：不实现完整 Tab、不迁移全部案例、不修改 `/customer-cases/`。

## 公共资产基线 SHA-256

- `components/site-header.tsx`：`2f0fbe8ad48667cb80e2c23026d27fc6f505b2cdfd7ce3496da22d9694a4a73d`
- `components/site-footer.tsx`：`7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb`
- `components/logo.tsx`：`badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11`
- `app/layout.tsx`：`7f565d794db5dae4dafeecc6e15c83f92400ff897fc1aca14654474f9259fa88`
