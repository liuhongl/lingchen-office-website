# 灵宸研究院文章详情页 SEO / GEO 规则

## 页面级要求

- 路由：`/research/[slug]`
- Agent OS 正式 canonical URL：`https://lingchen-ai.com/research/agent-os-three-layer-architecture/`
- canonical：每篇文章自指正式 URL
- 索引策略：正式发布文章 `index`；审计通过前不得进入 sitemap
- 唯一 h1：DOCX 原始标题 `sourceTitle`
- 关键正文：必须存在于服务端 HTML，不能只存在于图片、Canvas 或客户端请求后
- 日期：正式日期未确认前不渲染，不写入 JSON-LD

## 元数据来源

| 项目 | 允许来源 | 禁止来源 | 状态 |
|---|---|---|---|
| title | DOCX 原始标题 + 已确认站点名 | 模型改写标题 | Agent OS 样板已填写 |
| description | DOCX 已有摘要或原文连续摘录 | 模型生成新结论 | Agent OS 样板已填写 |
| canonical | 稳定 slug | 首页或列表页 canonical | Agent OS 样板已填写 |
| Open Graph | 与页面可见内容一致 | 未经确认的日期、作者、封面 | Agent OS 样板已填写 |
| Article Schema | 页面可见且已确认的信息 | 隐藏营销文案、推断日期和作者 | Agent OS 样板已填写 |

## 图片与表格

- 正文图片使用准确 alt；纯装饰图片使用空 alt。
- 图内关键业务事实不能只依赖 alt 或 Schema 补写；以 DOCX 原文和图注为准。
- 表格必须是服务端 HTML 中的真实表格文本，不使用整表截图代替。

## 站内关系

- 研究院列表卡片必须使用真实链接跳转详情页。
- 每篇正式文章必须加入 sitemap。
- Header/Footer 的研究院入口需在授权范围内修正为 `/research`，并回归公共组件。
- 逐篇内容门禁通过前，不得通过“加载更多”暴露为正式可索引页面。

## 逐篇验收字段

| 项目 | 有效值 | 代码位置 | 验证结果 |
|---|---|---|---|
| title | 灵宸智能Agent OS 三层架构 | `generateMetadata` | PASS |
| description | DOCX 摘要原文（去界面标签“摘要｜”） | `generateMetadata` | PASS |
| canonical | `/research/agent-os-three-layer-architecture/` | `generateMetadata` | PASS |
| Open Graph | 与 title/description/canonical 一致 | `generateMetadata` | PASS |
| 唯一 h1 | 灵宸智能Agent OS 三层架构 | 详情页 hero | PASS |
| 标题层级 | 1 个 h1、14 个正文 h2 | 详情页服务端 HTML | PASS |
| Article JSON-LD | 无推断日期/作者，描述可见正文 | 详情页脚本 | PASS |
| BreadcrumbList | 与可见面包屑一致 | 详情页脚本 | PASS |
| sitemap | 已加入详情页正式 URL | `app/sitemap.ts` | PASS |
| 列表内链 | 首卡 `立即阅读` 指向详情页 | `app/research/page.tsx` | PASS |

## 完成口径

- 本地只可报告“SEO/GEO 已实现，待线上验证”。
- 未确认发布日期时，缺少日期不是失败；伪造或推断日期才是失败。
- 线上抓取、索引和生成式答案抽样通过前，不得报告 GEO 效果已验证。
