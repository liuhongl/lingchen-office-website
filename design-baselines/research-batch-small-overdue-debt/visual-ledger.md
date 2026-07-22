# 《万亿级“毛细血管”债权》视觉台账

| 元素 | 精确规则 | 来源 | 状态 |
|---|---|---|---|
| 外壳 | 1180px、纯白、公共 Header/Footer 冻结 | V2 | PASS |
| 标题区 | title + subtitle 居中，无日期 | DOCX + V2 | PASS |
| 摘要 | `#F4F6FA`、3px `#2E5FA3` 左边框、18px 上下内边距 | 用户覆盖 | PASS |
| 关键词 | 蓝色 `关键词｜`，正文原色 | 用户覆盖 | PASS |
| h2 | 11 个，逐个保留 DOCX 字号、颜色、间距和底边框 | DOCX | PASS |
| closing | `#F4F6FA` 背景、`#2E5FA3` 左边框与原缩进 | DOCX | PASS |
| 图片 | 9 张原始 1600×900 PNG，不裁切 | DOCX | PASS |
| 表格 | 6×4、5×4，行列与题注位置不变 | DOCX | PASS |

视觉阻塞项：0。正文无单篇 MasterGo 基线，最终只报告桌面视觉校准。
