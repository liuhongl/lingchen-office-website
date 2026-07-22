# 《企业知识资产化实战》范围与门禁

## 基本信息

- 分类：行业洞察
- 原始 DOCX：`/Users/liuhongli/Desktop/lingchen/灵宸研究院模块的内容/灵宸研究院模块的内容/1、灵宸研究院模块-行业洞察/企业知识资产化_数据飞轮.docx`
- DOCX SHA-256：`5011abeceb7f94a3b0db558d2fa3e636fe1bb4de5ccb8ae971c3cf7ef548244e`
- `sourceTitle`：企业知识资产化实战
- 第二行标题：用数据飞轮让“人走了，能力留下”
- 第三行标题说明：从结果回写、场景标签到治理与度量的完整方法
- 列表 `displayTitle`：企业知识资产化：数据飞轮如何让"人走了，能力留下"（已有列表设计证据）
- 稳定 slug：`enterprise-knowledge-assetization-data-flywheel`
- 正式日期：未提供，不展示、不写入 Schema
- V2 规则：`docs/research-article-v2-rules.md`

## MasterGo 与视口

- MasterGo 参考：`https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=6%3A26021&devMode=true&layer_id=6%3A07886`
- `page_id`：`6:26021`
- `layer_id`：`6:07886`
- MasterGo 只控制冻结的文章外壳；正文以本篇 DOCX 为真源。
- 目标桌面视口：1440×900。
- 移动端不是正式视觉验收项。

## 本次允许修改

- 通用 DOCX 提取器：支持段落内图片、图注绑定、表题绑定、第三行标题说明与“落地原则｜”。
- 通用文章渲染器：支持第三行标题说明和 DOCX `exact` 行距/悬挂缩进。
- 本篇结构化 JSON、11 张原图、审计证据和正式路由。
- 研究院已有第 3 张卡片的真实路由接线。
- sitemap 和本篇 SEO/GEO 接线。

## 禁止修改

- 禁止改写列表第 3 张卡片已有文案和正式封面。
- 禁止修改公共 Header、Footer、Logo、BookingModal 和无关页面。
- 禁止为本文件增加文件名特判；新边界必须使用通用结构证据。

## 用户确认覆盖

- 保留 1180px 官网内容网格，不保留 A4 分页。
- 主标题、第二行标题与第三行说明在头部居中展示。
- 文章画布纯白；摘要上方无横线。
- 落地原则继续保留本篇 DOCX 的底纹/边框，并增加 18px 上下、22px 右内边距；摘要改由下述官网统一组件规则覆盖。
- 2026-07-21 新增覆盖：所有研究院文章的摘要和关键词统一参考前两篇已发布文章；摘要统一使用前两篇背景、左边框、字号、行距和间距，关键词标签统一蓝色加粗、关键词正文统一深灰。
- 2026-07-21 新增可见文字格式覆盖：所有关键词标签统一展示为 `关键词｜`。源 DOCX 和正式 JSON 仍保留原始 `关键词：` 作为内容审计证据；仅网页标签字符按用户要求统一，标签后的关键词正文不得改动。
- 2026-07-21 间距结论：顶部内边距 0 的尝试已由用户撤销；所有文章摘要恢复上/下 18px，右 22px、左 18.6667px 的统一基线。

## 公共资产基线

| 资产 | 开工 SHA-256 | 允许变化 |
|---|---|---|
| `components/site-header.tsx` | `d3eea07b7d66968fec211fa373eb2faa467b7bfc34d0924ab5bbae621e0ff81f` | 无 |
| `components/site-footer.tsx` | `f27c99b55aa3fb3e078922bdcce80100f26859792688672bdae76829d44e592f` | 无 |
| `components/booking-modal.tsx` | `1ef9eb10296ff62a52157d0afc0f92d63c321655a30f746d537a08abafa26842` | 无 |
| `components/booking-trigger.tsx` | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 无 |
| `public/images/lingchen-logo.png` | `4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85` | 无 |

## G1 发现的通用边界

| 边界 | 原文证据 | V2 处理 |
|---|---|---|
| 段落内图片 | 11 个空文本段落各包含一个 `r:embed` | 逐段导出并与下一个“图N｜”段落绑定 |
| 第三行标题说明 | 摘要前第 3 个居中文本段落 | 新增通用 `deck` block，放在文章头部 |
| 外置表题 | 2 个“表N｜”段落后紧跟无图片表格 | 表题与后续 table block 绑定，不重复渲染段落 |
| 新 closing 前缀 | 末段为“落地原则｜” | 纳入通用 closing 前缀集合 |
| 悬挂缩进 | 核心结论 3 段使用 `w:left=255` + `w:hanging=142` | 提取左缩进和悬挂值，不转为普通首行缩进 |
| `exact` 行距 | 普通正文使用 `w:lineRule=exact` | 按 twips 转为固定 px 行高 |

当前阻塞项：0。上述边界均有 DOCX XML 证据，允许进入通用提取器实现。
