# 灵宸研究院文章详情页文案台账

## 内容权威与映射

| 文本 ID | 区块 | 权威原文 | 页面位置 | 核对状态 |
|---|---|---|---|---|
| C-001 | 面包屑 | 灵宸智能Agent OS 三层架构 | 文章头部可见面包屑 | PASS |
| C-002 | 分类 | 行业洞察 | 文章头部分类标签 | PASS |
| C-003 | h1 | 灵宸智能Agent OS 三层架构 | 文章头部唯一 h1 | PASS |
| C-004 | 副标题 | 企业 AI 从“堆工具”走向“建底座”的分水岭 | 文章头部导语 | PASS |
| C-005 | 正文 | DOCX 58 个非空文本段落中的其余 56 段 | `article.json` 按源顺序服务端渲染 | PASS |
| C-006 | 图注 | DOCX 图 1 至图 9 的逐字图注 | 各原图下方 `figcaption` | PASS |
| C-007 | 表格 | DOCX 表 1 至表 3 的标题、表头和单元格 | 原生 HTML `table` | PASS |

## DOCX 字体颜色台账

| 色值 | 原文作用范围 | 实现规则 | 状态 |
|---|---|---|---|
| `#1A1A1A` | DOCX 主标题全部字符 | 详情 h1 普通深色，不再使用渐变 | PASS |
| `#1F4E79` | 副标题、摘要/关键词标签、14 个分节标题、“其一/其二/其三”和“落地建议｜” | 由 JSON `segments.color` 逐 run 渲染 | PASS |
| `#595959` | 关键词正文 | 由 JSON `segments.color` 逐 run 渲染 | PASS |
| 自动色 | 普通正文 | 使用正文默认色，不推断新的局部颜色 | PASS |

## Agent OS 样板逐篇证据

- 原始 DOCX：`Agent_OS_三层架构_企业AI建底座.docx`
- SHA-256：`165c2408406550e852e28bcfdf84383dfc15164a7152d1dadbd64610a0837d64`
- 完整 70 块逐项台账：`content/research/agent-os-three-layer-architecture/audit.md`
- 自动对照结果：DOCX token 70，JSON token 70，按顺序深比较为 `True`。
- 文本块：58；原图：9；数据表：3；未解释差异：0。
- `displayTitle` 仅用于列表卡片；`sourceTitle` 仅用于详情 h1 与页面元数据。
- 正式发布日期未提供，页面、元数据与 JSON-LD 均未展示或推断日期。

## 门禁结论

- `PASS`：7
- 阻塞项：0
- 结论：Agent OS 样板内容台账通过；其余文章必须复制逐篇审计流程后才能发布。
