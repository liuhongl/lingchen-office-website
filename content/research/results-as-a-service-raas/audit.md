# 按结果付费（RaaS）内容审计

## 源文件登记

- 分类：解决方案&白皮书（沿用列表第 4 张卡片的可见分类）。
- 原始 DOCX：`按结果付费RaaS_当AI供应商开始与你共担风险_采购逻辑变了什么.docx`
- 原始 DOCX SHA-256：`b339dc483ae89bc63151bdebd3ee9b9c32010c7c025495fb8683eb0c4b4a103e`
- `slug`：`results-as-a-service-raas`
- `displayTitle`：按结果付费（RaaS）：当 AI 供应商开始与你共担风险，采购逻辑变了什么
- `sourceTitle`：按结果付费(RaaS):当 AI 供应商开始与你共担风险,采购逻辑变了什么
- 正式发布日期：未提供，不展示。

## 内容结构

| 类型 | 数量 | 核对状态 |
|---|---:|---|
| title | 1 | PASS |
| abstract | 1 | PASS |
| keywords | 1 | PASS；网页只将标签统一展示为蓝色 `关键词｜`，JSON 保留 `关键词:` |
| heading | 12 | PASS |
| paragraph | 23 | PASS；其中 3 段保留 Word 编号定义的蓝色 `◆` |
| figure | 7 | PASS |
| table | 4 | PASS |
| 合计 | 49 | PASS |

- 原始非空文本段落（含表格单元格）：108。
- 原始文本字符：6832；未增删改正文。
- 前置 1×1 信息框只承载摘要和关键词，不作为数据表输出。
- 本篇无副标题、无 deck、无发布日期，页面不生成对应空节点。
- 4 张数据表原行列分别为 6×3、6×3、5×3、4×2；表题均位于表后。

## 图片台账

| 图片 ID | DOCX media | SHA-256 | 原始像素 | 实现路径 | 状态 |
|---|---|---|---:|---|---|
| `figure-01` | `/word/media/image1.png` | `0a264b3d27218f4594837e99acff178fd201b84501c921b87f0f6d10c3c0be29` | 1352×843 | `/images/research/results-as-a-service-raas/figure-01.png` | PASS |
| `figure-02` | `/word/media/image2.png` | `dd272be1348c1358ae6b10ed16d31abaa5bfed227399b80bd91545cd39ba8318` | 1352×896 | `/images/research/results-as-a-service-raas/figure-02.png` | PASS |
| `figure-03` | `/word/media/image3.png` | `90b74df93990be983078fc5810ff34d9ffbc54622977fb2c9ce8fba681fafce9` | 1352×869 | `/images/research/results-as-a-service-raas/figure-03.png` | PASS |
| `figure-04` | `/word/media/image4.png` | `515e48f16eaba57ed2f95958b60fd57decef1e2ecaaef21e791e2c18e099b160` | 1352×811 | `/images/research/results-as-a-service-raas/figure-04.png` | PASS |
| `figure-05` | `/word/media/image5.png` | `a4d926d189c72287bc4680583d0542c3779eb20c220e90e55c3b9ef35805f1b0` | 1352×843 | `/images/research/results-as-a-service-raas/figure-05.png` | PASS |
| `figure-06` | `/word/media/image6.png` | `66157e143af362a4cc6765515c79c70cdc6f077e1201e8b48c52d1841b1e2105` | 1352×761 | `/images/research/results-as-a-service-raas/figure-06.png` | PASS |
| `figure-07` | `/word/media/image7.png` | `ca1e02932a2ce86e7e06614e4cc512b165b49459e2a5c6c8e8fcde6186d67052` | 1352×843 | `/images/research/results-as-a-service-raas/figure-07.png` | PASS |

## 自动一致性校验

- 当前通用提取器重新提取的正式 JSON 与临时 JSON 逐块深比较一致。
- 前三篇已发布文章使用当前提取器重新生成后，分别与正式 JSON 深比较一致。
- 7 张正式图片与 DOCX 原始 media blob 的 SHA-256 一致。
- 未解释内容差异：0；内容阻塞项：0。

## 页面验证

- 列表第 4 张卡片已通过真实点击进入详情页。
- 1440px 下正文宽度 1180px，无根级横向溢出。
- 摘要 padding 为 `18px 22px 18px 18.6667px`。
- 1 个 h1、12 个 h2、3 个蓝色 `◆`、7 张图片和 4 张表均通过运行态检查。
- canonical、Article 与 BreadcrumbList JSON-LD 已在本地 HTML 验证；线上抓取与索引仍待部署后验证。
