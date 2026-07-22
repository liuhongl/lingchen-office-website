# 《企业知识资产化实战》视觉台账

## 外壳与用户覆盖

| 元素 | 目标属性 | 证据 | 状态 |
|---|---|---|---|
| 公共外壳 | Header/Footer 冻结；内容 1180px；纯白画布 | V2 + 冻结模板 | PASS |
| 标题区 | title/subtitle/deck 三行居中，保留 DOCX 直接字号与颜色 | DOCX p-001..003 | PASS |
| 摘要上方 | 标题区后 40px 纯白留白，无横线 | 用户冻结覆盖 | PASS |
| 摘要内边距 | 官网统一组件：上/下 18px、右 22px、左 18.6667px | 2026-07-21 用户最终确认 | PASS |

## 摘要与关键词统一基线（2026-07-21 用户覆盖）

基准页面：《Agent OS 三层架构》当前 1440px 实际渲染；基线截图为
`design-baselines/research-article-template/08-abstract-reference-local-1440.png` 和
`design-baselines/research-article-template/09-keywords-reference-local-1440.png`。

| 元素 | 统一属性 | 内容约束 | 状态 |
|---|---|---|---|
| 摘要容器 | `#F4F6FA` 背景；3px `#2E5FA3` 左边框；上 8px、下 13.3333px 外边距；上/下 18px、右 22px、左 18.6667px 内边距；11pt；1.416667 行高 | 不改摘要原文 | PASS |
| 摘要标签 | 11pt、700、`#1F4E79` | 保留原文的 `摘要｜` 或 `摘要：` | PASS |
| 摘要正文 | 11pt、400、`#0F172A` | 标签之后的原文逐字保留 | PASS |
| 关键词容器 | 无背景、无边框、无缩进；段后 13.3333px；10.5pt；1.333333 行高；左对齐 | 不改关键词原文 | PASS |
| 关键词标签 | 10.5pt、700、`#1F4E79` | 所有文章网页统一展示为 `关键词｜`；源 JSON 保留 DOCX 原标签 | PASS |
| 关键词正文 | 10.5pt、400、`#595959` | 标签之后的原文逐字保留 | PASS |

第三篇修改前基线为 `08-abstract-before-local-1440.png` 与
`09-keywords-before-local-1440.png`；修改后必须另存同视口局部截图并做并排比较。

修改后证据为 `10-abstract-after-local-1440.png`、`11-keywords-after-local-1440.png`、
`12-abstract-comparison.png` 和 `13-keywords-comparison.png`。三篇浏览器计算样式一致，关键词标签均为 `关键词｜`、`rgb(31, 78, 121)`、700；摘要背景均为 `rgb(244, 246, 250)`，根级横向溢出均为 0px。

`15-abstract-padding-top-zero-local-1440.png` 仅保留为已撤销方案证据，不属于当前基线。恢复后的局部证据为 `16-abstract-padding-restored-local-1440.png`；三篇计算样式均为 `padding: 18px 22px 18px 18.6667px`。

## DOCX 段落属性类型

| 类型 | 数量 | 主要属性 | 状态 |
|---|---:|---|---|
| 普通正文 | 36 | 10.5pt；`exact 380 twips`；首行 420 twips；段后 110 twips；`#263746` | PASS |
| 章节标题 | 12 | 15pt/700；段前 300 twips；段后 140 twips；`#173B57`；左边框 | PASS |
| 核心结论标题 | 1 | 12.5pt/700；段前 40 twips；段后 80 twips | PASS |
| 核心结论项 | 3 | 10pt；`exact 360 twips`；左缩进 255 twips；悬挂 142 twips | PASS |
| 图注 | 11 | 9pt；居中；段前 100 twips；段后 140 twips；`#667986` | PASS |
| 表题 | 2 | 9pt；左对齐；段前 160 twips；段后 80 twips；`#667986` | PASS |
| 摘要 | 1 | `#EDF4F8` 底纹；`#4F86B5` / 18 八分之一磅左边框；左右 198 twips；`exact 380` | PASS |
| 落地原则 | 1 | `#F1F6F3` 底纹；`#6FA98A` / 18 八分之一磅左边框；左右 312 twips；`exact 380` | PASS |

## 图片素材台账

| 图 | DOCX media | 原像素 | SHA-256 | 状态 |
|---:|---|---:|---|---|
| 1 | `/word/media/image1.png` | 1717×750 | `7db3dbc4bf2a6986e6fdb03505af0e0cd7ee5a4285a235d73c851e4ff1de73c2` | PASS |
| 2 | `/word/media/image2.png` | 1448×1086 | `072a652b88a3b56de0d0a1902af6e1e2d9ddcaf7bac3506f4dc141d9cc5469fe` | PASS |
| 3 | `/word/media/image3.png` | 1448×1086 | `6221607101084acd21e38f088d4f22380f393bc8407c114800e7f6898ba8655c` | PASS |
| 4 | `/word/media/image4.png` | 1448×1086 | `ca1fba75f55a71b8c0af00334d91f2422d4c491a1d18dca979822fb2b65cd271` | PASS |
| 5 | `/word/media/image5.png` | 1717×805 | `49dfcbdd0b433c21f6bd9d6d4ddbea6b2daac31cb804fb798b5b9cc9a22e03d8` | PASS |
| 6 | `/word/media/image6.png` | 1717×722 | `4e66aa1f2f51629e884187865ad3b317ce9757820154c9af83c65fe323506b5f` | PASS |
| 7 | `/word/media/image7.png` | 1717×819 | `ffb7f02732803400078fbae5dac69740fe5342f884a3121b8fed8e97259facc6` | PASS |
| 8 | `/word/media/image8.png` | 1717×791 | `9a002d7877c8f2dcd105c1b357ed6a0986a992a4c0fef2c3577ba8f4dff3d8c8` | PASS |
| 9 | `/word/media/image9.png` | 1717×777 | `0b8537170e5731de6148289b008f45f81e6486a7575fdefff0eb64db82552088` | PASS |
| 10 | `/word/media/image10.png` | 1717×847 | `afd6d18033644c9d5f18cfdf662566b428dbfdff80fac7396d213ef90644715b` | PASS |
| 11 | `/word/media/image11.png` | 1717×666 | `3928ebe76aa336311d3b44bba643a4ea10c8e7ec87f5f93067a98a8ad06e744d` | PASS |

所有图片必须使用原比例完整显示，禁止裁切、放大低分辨率替代图或重新绘制。

视觉阻塞项：0。上述属性均已从 DOCX XML 或原始 media 取得。

补充回归：通用提取器已保留 DOCX 正文章节标题的底边框；生产构建中 12 个正文章节标题均为 `1px solid rgb(220, 229, 240)`，证据为 `17-heading-bottom-border-local-1440.png`。核心结论标题按源文档保持无底边框。
