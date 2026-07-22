# 企业知识资产化实战内容审计

## 源文件与发布信息

- 分类：行业洞察
- 原始 DOCX：`企业知识资产化_数据飞轮.docx`
- 原始 DOCX SHA-256：`5011abeceb7f94a3b0db558d2fa3e636fe1bb4de5ccb8ae971c3cf7ef548244e`
- `slug`：`enterprise-knowledge-assetization-data-flywheel`
- `displayTitle`：企业知识资产化：数据飞轮如何让"人走了，能力留下"
- `sourceTitle`：企业知识资产化实战
- 正式发布日期：未提供，不展示

## 自动一致性校验

2026-07-21 使用当前通用提取器从原 DOCX 重新生成临时 JSON 和图片，并与正式产物比较：

| 检查项 | 结果 |
|---|---|
| DOCX 实际哈希与登记值 | PASS |
| 正式 JSON 与重新提取 JSON 深比较 | `True` |
| block 数量 | 71 |
| 原始文本字符数 | 6530 |
| figure 数量 | 11 |
| table 数量 | 2 |
| 正式图片文件与重新提取图片 SHA-256 | 11/11 一致 |
| 未解释内容差异 | 0 |

正式 JSON 继续与 DOCX 深比较一致。根据 2026-07-21 用户确认的官网格式覆盖，浏览器将源标签 `关键词：` 统一展示为 `关键词｜`；标签后的关键词正文零差异。该覆盖不回写源 JSON，因此不破坏来源审计。

完整逐字文本、图注、表题、段落类型和素材哈希见
`design-baselines/research-knowledge-assets/content-ledger.md` 与
`design-baselines/research-knowledge-assets/visual-ledger.md`。

## 浏览器结构校验

- 唯一 `h1`：1 个。
- 正文 `h2`：13 个。
- 图片：11 张，滚动触发懒加载后均以 DOCX 原始像素完整加载。
- 表格：2 张，均为 5×4。
- 正式日期：无 `time` 节点，无日期 Schema 字段。
- 根级横向溢出：0px；正文底部与 Footer 顶部衔接一致。

## 门禁结论

- SOURCE：通过。
- CONTENT：通过。
- ASSET：通过。
- STRUCTURE：通过。
- 页面视觉与 SEO/工程结果见 `design-baselines/research-knowledge-assets/final-validation.md`。
