# 结果型 AI Agent 怎么验收内容审计

## 源文件登记

- 分类：行业洞察。
- 原始 DOCX：`结果型_AI_Agent_验收指标体系.docx`
- 原始 DOCX SHA-256：`ca1f712507d918eb3bbc59d18ef1a55bcbe9209889f569aca814eb9753e9e926`
- `slug`：`results-oriented-ai-agent-acceptance-metrics`
- `displayTitle`：结果型 Agent 怎么验收：有效线索、实际回款、审核准确率与人效的指标体系
- `sourceTitle`：结果型 AI Agent 怎么验收
- 正式发布日期：未提供，不展示。

## 内容结构

| 类型 | 数量 | 核对状态 |
|---|---:|---|
| title | 1 | PASS |
| subtitle | 1 | PASS |
| abstract | 1 | PASS；独立原文标签“摘要”保存在 `leadLabel`，未补分隔符 |
| heading | 14 | PASS |
| paragraph | 41 | PASS |
| figure | 10 | PASS |
| table | 2 | PASS |
| 合计 | 70 | PASS |

- 原始非空文本节点（含表格单元格）：115。
- 原始文本字符：7029；JSON 重建后仍为 115 个节点、7029 个字符。
- 本篇没有独立关键词字段；含“关键词包括”的普通段落保持完整，未拆分或改写。
- 两张数据表原行列为 5×4、6×4，表题均位于表前。

## 图片台账

10 张图片均来自 `/word/media/image1.png` 至 `/word/media/image10.png`，原始像素均为 1600×900。输出文件 SHA-256 与 DOCX media blob 逐张一致：

1. `6bc13881354a82c00d592a7b6ebb306ad51535ab55250bac16504f7f7f3f4f6d`
2. `0efb89066fc72a82feb518e2dd44148db29a27e5f16a22975b9c2d4cc9c2d67d`
3. `bbb86b1ae7102d0bec0a5d5c729797b37ef12650fc8dfe21e52f42cd5b54c335`
4. `567ae7b217d3b2163fa2c60de57d72e41e60ff827b6e1942701612b9ae89e13f`
5. `c8ca51e99fa586bd00bb0561d94cca377931d72907c8565bf80c814d0eec9658`
6. `7721f4fe872264d9f7948a31a54830ba72c87f27d335bcdaaea44d0414672249`
7. `6e6f10a73d504b5a02c6481c9b8ca4484f9c4ba7f73c642848a89fc39b5e5ec7`
8. `eab865ab540f83b431e5c3716c7763dd8ca2027fb3170203930f497449fafa1e`
9. `661c4ee3899f4d032dc415f76057d786efcbf77f7937a6cef0e3c13f69914c19`
10. `dd2e07fe6a47e23cd9697b7b0eb78d309595c39fe2a63c9aac726fcb3eb9e740`

## 自动一致性校验

- 当前通用提取器重新提取的正式 JSON 与临时 JSON 逐块深比较一致。
- 前四篇已发布文章使用当前提取器重新生成后，均与各自正式 JSON 深比较一致。
- 未解释内容差异：0；内容阻塞项：0。

## 页面验证

- 1440px 生产构建下唯一 h1、14 个 h2、1180px 内容宽度，根级横向溢出为 0。
- 摘要原文、独立标签、统一内边距与背景/左边框通过计算样式核对。
- 10 张图片均完整加载为 1600×900；两张表保持 5×4、6×4，表题位于表前。
- 列表第 5 张卡片真实点击进入正式路由。
- canonical、Article、BreadcrumbList 与 sitemap 已完成本地验证；线上抓取、索引和生成式答案抽样尚未执行。
