# 《按结果付费（RaaS）》SEO / GEO 台账

- canonical URL：`https://lingchen-ai.com/research/results-as-a-service-raas/`
- 索引策略：正式接入后 `index,follow`
- 日期：未确认，不输出 `datePublished` 或 `dateModified`

| 项目 | 来源与值 | 状态 |
|---|---|---|
| title | DOCX `sourceTitle` 原文 | PASS |
| description | DOCX 摘要正文；去除可见“摘要”标签，不改正文 | PASS |
| canonical | 自指上述正式 URL | PASS |
| 唯一 h1 | DOCX `sourceTitle` | PASS |
| 标题层级 | 1 个 h1；12 个正文 h2 | PASS |
| Article JSON-LD | 只包含可见事实，不含日期和作者 | PASS |
| BreadcrumbList | 分类沿用列表设计“解决方案&白皮书” | PASS |
| 服务端正文 | 所有 block 服务端静态渲染 | PASS |
| sitemap | `/research/results-as-a-service-raas/` | PASS |
| 列表内链 | 第 4 张现有卡片接入正式 href 并真实点击验证 | PASS |

本地完成后只报告“SEO/GEO 已实现，待线上验证”。
