# 《AI 催收的合规工程》范围与门禁

- 内容真源：本文件“基本信息”所列原始 DOCX 及其结构、图片和表格审计证据。
- 视觉真源：冻结的研究院文章 V1 外壳、MasterGo 模板参考与本文件用户确认覆盖。

## 基本信息

- 分类：行业洞察
- 原始 DOCX：`AI催收的合规工程.docx`
- DOCX SHA-256：`d8d9683c99b01d869dfb98626b11563485d367431296b05f1da65b04271b417d`
- `sourceTitle`：AI 催收的合规工程
- `displayTitle`：AI 催收的合规工程
- 正式 slug：`ai-debt-collection-compliance-engineering`
- 详情页外壳：复用 `docs/research-article-v1-freeze.md`
- MasterGo 参考：`page_id=6:26021` / `layer_id=6:07886`；只控制冻结模板，不覆盖本文内容
- 目标桌面视口：1440×900
- 目标移动端视口：390×844

## 本阶段范围

- 允许：提取结构化文章数据、DOCX 原始图片、字体直接格式、内容/图片/表格审计证据，并接入正式路由、研究院列表与 sitemap。
- 列表第 7 张卡片使用 DOCX `sourceTitle` 作为 `displayTitle`，使用 DOCX 原始图 1 作为完整展示的列表封面。
- 这是“无独立 MasterGo 列表标题/封面”文章的发布回退规则：不改写标题，不裁切、不移位原文插图。

## 用户确认覆盖项

- 详情页视觉覆盖继承已冻结的文章 V1：纯白背景、标题/副标题居中、1180px 公共网格、摘要上移且上方无横线。
- 无独立 MasterGo 卡片证据时，本文使用上述原文标题与图 1 完整展示规则，不将其声称为正文逐段 MasterGo 1:1。

## 源结构基线

| 项目 | 数量 | 状态 |
|---|---:|---|
| 非空文本段落 | 55 | PASS |
| 有序内容 token | 66 | PASS |
| 正文图片 | 8 | PASS |
| 数据表格 | 3 | PASS |
| 分节标题 | 14 | PASS |
| DOCX 明确字体颜色 | 3 | PASS |

## 冻结模板边界

- 页面纯白；标题和副标题居中。
- 桌面内容宽 1180px，与公共 Header 网格一致。
- 标题与摘要之间只保留 40px 留白，不显示横线。
- 摘要白底浅边框；图片原比例；表格保持原行列。
- 日期未确认时不展示；不新增作者、FAQ、CTA 或相关推荐。

## 当前门禁结论

- SOURCE：通过。
- CONTENT：通过；66 个 token 顺序深比较为 `True`，segments 拼接逐字符一致。
- ASSET：8 张原图已提取并完成联系表检查。
- STRUCTURE：通过；3 张数据表均为 5×3，单元格逐字台账已落盘。
- RENDER：通过；已完成 1440px 与 390px 正式路由回归。
- SEO：通过本地实现验收；自指 canonical、Article/BreadcrumbList JSON-LD、列表内链与 sitemap 已接线，线上抓取待发布后验证。
- ENGINEERING：正式数据已注册，生产构建必须同时生成第一篇与本文路由。
- 当前阻塞项：0。

## 公共资产交付复核

| 资产 | 交付 SHA-256 | 结论 |
|---|---|---|
| SiteHeader | `d3eea07b7d66968fec211fa373eb2faa467b7bfc34d0924ab5bbae621e0ff81f` | 与文章 V1 冻结基线一致 |
| SiteFooter | `f27c99b55aa3fb3e078922bdcce80100f26859792688672bdae76829d44e592f` | 与文章 V1 冻结基线一致 |
| BookingModal | `1ef9eb10296ff62a52157d0afc0f92d63c321655a30f746d537a08abafa26842` | 本文未修改 |
| BookingTrigger | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 本文未修改 |
| Logo | `4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85` | 本文未修改 |
