# 《多智能体协作走出演示厅》范围与门禁

## 基本信息

- 原始 DOCX：`/Users/liuhongli/Desktop/lingchen/灵宸研究院模块的内容/灵宸研究院模块的内容/1、灵宸研究院模块-行业洞察/多智能体协作走出演示厅_从批量催收全链路看Agent工程化落地的三道门槛.docx`
- DOCX SHA-256：`bc5786c1e56c4b1f1b547ac9894e342039ff8fb85314eda3cdbfb0a8e5a370cf`
- `sourceTitle`：多智能体协作走出演示厅:从批量催收全链路看 Agent 工程化落地的三道门槛
- 列表 `displayTitle`：多智能体协作走出示范厅：从批量催收全链路看 Agent 工程化落地的三道门槛
- 稳定 slug：`multi-agent-collaboration-engineering`
- 正式日期：未提供，不展示、不写入 Schema。
- 目标桌面视口：1440×900；移动端无独立设计基线，不属于正式视觉门禁。

## MasterGo 与来源边界

- MasterGo 参考：`https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=6%3A26021&devMode=true&layer_id=6%3A07886`
- `page_id`：`6:26021`
- `layer_id`：`6:07886`
- 单篇正文没有独立 MasterGo 对照；MasterGo 只控制冻结文章外壳和现有列表第 2 张卡片。
- DOCX 是标题、摘要、关键词、正文、图片、图注、表格、颜色和段落属性的事实来源。

## 本次允许修改

- 本篇结构化 JSON、7 张 DOCX 原图、3 张数据表。
- 列表第 2 张卡片仅补正式 href；保留现有列表文案、时长、分类、封面和背景。
- 注册静态详情路由、sitemap、canonical、Article 与 BreadcrumbList。

## 禁止修改

- 不把列表中的“示范厅”反向覆盖 DOCX 标题中的“演示厅”。
- 不把 DOCX 半角标点、英文空格和斜杠改成全角形式。
- 不新增副标题、作者、日期、FAQ、CTA 按钮或正文营销文案。
- 不修改公共 Header、Footer、Logo、BookingModal 和无关页面。

## 用户确认覆盖

- 继承 V2 官网外壳：1180px、纯白页面、不保留 A4 分页、标题居中。
- 摘要统一使用上/下 18px、右 22px、左 18.6667px 内边距及蓝灰背景。
- 独立关键词字段统一显示蓝色 `关键词｜`；只统一标签形式，关键词正文逐字保留。

## 公共资产冻结证据

| 资产 | 开工 SHA-256 | 允许变化 |
|---|---|---|
| `components/site-header.tsx` | `d3eea07b7d66968fec211fa373eb2faa467b7bfc34d0924ab5bbae621e0ff81f` | 无 |
| `components/site-footer.tsx` | `ae7b55e3f972be01b0a80188d7f2404aee4c0c02431a131c1179ab9c018a0c55` | 无 |
| `components/booking-modal.tsx` | `d99d2791ea1e82d3d6234385f1a92599782e8520805912487eb76bcb5f75c70f` | 无 |
| `components/booking-trigger.tsx` | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 无 |
| `public/images/lingchen-logo.png` | `4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85` | 无 |

内容与视觉阻塞项：0。DOCX 6 页已完整渲染并逐页检查；LibreOffice 环境缺少部分中文字体，页外正文出现缺字方框，因此文字准确性以 OOXML/`python-docx` 逐字符审计为准，网页字体另在浏览器运行态验证。
