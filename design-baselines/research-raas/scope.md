# 《按结果付费（RaaS）》范围与门禁

- 内容真源：本文件“基本信息”所列原始 DOCX、SHA-256 及其 OOXML 审计证据。
- 视觉真源：冻结的研究院文章 V2 外壳、MasterGo 列表卡片参考与用户确认覆盖。

## 基本信息

- 原始 DOCX：`/Users/liuhongli/Desktop/lingchen/灵宸研究院模块的内容/灵宸研究院模块的内容/1、灵宸研究院模块-行业洞察/按结果付费RaaS_当AI供应商开始与你共担风险_采购逻辑变了什么.docx`
- DOCX SHA-256：`b339dc483ae89bc63151bdebd3ee9b9c32010c7c025495fb8683eb0c4b4a103e`
- `sourceTitle`：按结果付费(RaaS):当 AI 供应商开始与你共担风险,采购逻辑变了什么
- 列表 `displayTitle`：按结果付费（RaaS）：当 AI 供应商开始与你共担风险，采购逻辑变了什么
- 稳定 slug：`results-as-a-service-raas`
- 正式日期：未提供，不展示、不写入 Schema。
- 目标桌面视口：1440×900。
- V2 规则：`docs/research-article-v2-rules.md`。

## MasterGo 与分类

- MasterGo 参考：`https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=6%3A26021&devMode=true&layer_id=6%3A07886`
- `page_id`：`6:26021`
- `layer_id`：`6:07886`
- 单篇正文没有独立 MasterGo 对照；指定设计只控制冻结文章外壳和现有列表卡片。
- DOCX 位于“行业洞察”素材目录，但现有第 4 张 MasterGo 列表卡片明确展示“解决方案&白皮书”。根据事实来源优先级，网页可见分类沿用列表设计，不移动卡片、不改标签。

## 本次允许修改

- 通用提取器支持 1×1 前置信息框中的摘要/关键词。
- 通用图注和表题识别同时支持全角 `｜` 与半角 `|`。
- 通用表格支持表后表题绑定。
- 通用段落支持 Word 编号定义中的项目符号、颜色、左缩进和悬挂缩进。
- 通用详情渲染器支持无副标题文章和项目符号元数据。
- 本篇结构化 JSON、7 张 DOCX 原图、4 张数据表、列表第 4 张卡片路由、sitemap 与 SEO/GEO。

## 禁止修改

- 不改列表第 4 张卡片已有标题、摘要、日期、时长、分类、封面和背景。
- 不修改公共 Header、Footer、Logo、BookingModal 和无关页面。
- 不把 1×1 摘要信息框误作数据表。
- 不把 Word 编号生成的 `◆` 写回正文字符串。
- 不为本文件增加文件名特判。

## 用户确认覆盖

- 继承 V2 官网外壳：1180px、纯白页面、不保留 A4 分页、标题居中、移动端不作为正式视觉门禁。
- 所有文章摘要使用上/下 18px、右 22px、左 18.6667px 内边距；顶部内边距 0 的试验已撤销。
- 所有关键词标签网页统一展示为蓝色 `关键词｜`，源 DOCX/JSON 保留原始 `关键词:`。

## 公共资产基线

| 资产 | 开工 SHA-256 | 允许变化 |
|---|---|---|
| `components/site-header.tsx` | `d3eea07b7d66968fec211fa373eb2faa467b7bfc34d0924ab5bbae621e0ff81f` | 无 |
| `components/site-footer.tsx` | `f27c99b55aa3fb3e078922bdcce80100f26859792688672bdae76829d44e592f` | 无 |
| `components/booking-modal.tsx` | `1ef9eb10296ff62a52157d0afc0f92d63c321655a30f746d537a08abafa26842` | 无 |
| `components/booking-trigger.tsx` | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 无 |
| `public/images/lingchen-logo.png` | `4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85` | 无 |

当前内容与视觉阻塞项：0。上述新边界均有 DOCX XML 和八页原始渲染证据。
