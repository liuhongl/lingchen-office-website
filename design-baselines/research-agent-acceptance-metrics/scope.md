# 《结果型 AI Agent 怎么验收》范围与门禁

## 基本信息

- 原始 DOCX：`/Users/liuhongli/Desktop/lingchen/灵宸研究院模块的内容/灵宸研究院模块的内容/1、灵宸研究院模块-行业洞察/结果型_AI_Agent_验收指标体系.docx`
- DOCX SHA-256：`ca1f712507d918eb3bbc59d18ef1a55bcbe9209889f569aca814eb9753e9e926`
- `sourceTitle`：结果型 AI Agent 怎么验收
- 列表 `displayTitle`：结果型 Agent 怎么验收：有效线索、实际回款、审核准确率与人效的指标体系
- 稳定 slug：`results-oriented-ai-agent-acceptance-metrics`
- 正式日期：未提供，不展示、不写入 Schema。
- 目标桌面视口：1440×900；移动端无独立设计基线，不属于正式视觉门禁。

## MasterGo 与来源边界

- MasterGo 参考：`https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=6%3A26021&devMode=true&layer_id=6%3A07886`
- `page_id`：`6:26021`
- `layer_id`：`6:07886`
- 单篇正文没有独立 MasterGo 对照；MasterGo 只控制冻结文章外壳和现有列表第 5 张卡片。
- DOCX 是标题、摘要、正文、图片、图注、表格、颜色和段落属性的事实来源。

## 本次允许修改

- 通用提取器支持“摘要标签独立成段、摘要正文紧随其后”的结构，标签与正文均保留原始文本。
- 通用段落布局支持 DOCX 底边框，以保留 13 个正文分节标题的细分隔线。
- 通用详情渲染器支持摘要独立标签元数据。
- 本篇结构化 JSON、10 张 DOCX 原图、2 张数据表、列表第 5 张卡片路由、sitemap 与 SEO/GEO。

## 禁止修改

- 不改列表第 5 张卡片已有标题、摘要、日期、时长、分类、封面和背景。
- 不修改公共 Header、Footer、Logo、BookingModal 和无关页面。
- 不把独立“摘要”标签与摘要正文之间补成源文件不存在的 `摘要｜` 或 `摘要：`。
- 不把“关键词包括……”所在的完整普通段落拆成独立关键词模块；该 DOCX 没有独立关键词字段。
- 不为本文件增加文件名特判。

## 用户确认覆盖

- 继承 V2 官网外壳：1180px、纯白页面、不保留 A4 分页、标题居中。
- 摘要使用上/下 18px、右 22px、左 18.6667px 内边距及统一蓝灰背景；独立标签仍逐字显示为“摘要”。
- 只有源文件存在独立关键词字段时才统一显示蓝色 `关键词｜`；嵌入普通段落的“关键词包括”不拆分、不改写。

## 公共资产冻结证据

| 资产 | 开工 SHA-256 | 允许变化 |
|---|---|---|
| `components/site-header.tsx` | `d3eea07b7d66968fec211fa373eb2faa467b7bfc34d0924ab5bbae621e0ff81f` | 无 |
| `components/site-footer.tsx` | `f27c99b55aa3fb3e078922bdcce80100f26859792688672bdae76829d44e592f` | 无 |
| `components/booking-modal.tsx` | `1ef9eb10296ff62a52157d0afc0f92d63c321655a30f746d537a08abafa26842` | 无 |
| `components/booking-trigger.tsx` | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 无 |
| `public/images/lingchen-logo.png` | `4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85` | 无 |

内容与视觉阻塞项：0。DOCX 12 页已完整渲染并逐页检查；LibreOffice 环境缺少部分中文字体，正文渲染出现缺字方框，因此文字准确性以 OOXML/`python-docx` 逐字符审计为准，网页字体另在浏览器运行态验证。
