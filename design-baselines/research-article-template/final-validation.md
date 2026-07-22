# 灵宸研究院文章详情页最终验收模板

## 基本信息

- 文章：灵宸智能Agent OS 三层架构
- 分类：行业洞察
- 原始 DOCX：Agent_OS_三层架构_企业AI建底座.docx
- 原始 DOCX SHA-256：`165c2408406550e852e28bcfdf84383dfc15164a7152d1dadbd64610a0837d64`
- `slug`：`agent-os-three-layer-architecture`
- MasterGo 参考：`page_id=6:26021` / `layer_id=6:07886`
- 桌面验收视口：1440×1000
- 移动端验收视口：390×844（无 MasterGo 移动画板，仅响应式验证）
- 验收日期：2026-07-21
- 本轮头部覆盖参考：`04-simple-header-user-reference.png`
- 本轮本地截图：`05-simple-header-local-1440.png`
- 本轮结构对比：`06-simple-header-comparison.png`
- 居中与公共网格截图：`07-centered-shell-local-1440.png`
- 移动端网格截图：`08-centered-shell-mobile-390.png`
- 纯白页面与摘要上移截图：`09-white-background-local-1440.png`
- 摘要浅灰蓝背景回归：`11-summary-background-local-1440.png`
- DOCX 段落布局回归：`12-docx-layout-local-1440.png`
- 摘要内边距回归：`13-summary-spacing-local-1440.png`
- 落地建议内边距回归：`14-closing-spacing-local-1440.png`

## 内容与结构

- [x] 原文字符、标点、数字、单位、英文大小写和空格逐项核对。
- [x] 段落边界、标题层级、列表顺序和行内强调一致。
- [x] 图片、图注、表格和提示框的相对位置一致。
- [x] 未自动总结、润色、纠错、去重、补写或重排。
- [x] `displayTitle` 与 `sourceTitle` 分别使用，未互相覆盖。
- [x] 未展示未经确认的发布日期。
- [x] 内容台账没有未解释差异或阻塞项。

## 图片与表格

- [x] 图片均从 DOCX 原始 media 提取，SHA-256 与台账一致。
- [x] 每张图片已单独检查完整性、清晰度、透明边界和内容语义。
- [x] 图片保持原始宽高比，含文字流程图未裁切。
- [x] 表格行列、合并关系和单元格文字一致。
- [x] 移动端宽表未交换行列，横向滚动可用。
- [x] 列表封面没有移动或删除正文原图；本篇沿用已确认的 MasterGo 卡片封面。

## 视觉

- [x] MasterGo 共用外壳已完成 100% 分区基线与同视口核对。
- [x] 未以 7709px 总高写死文章页高度。
- [x] 桌面端无裁切、重叠、错序和横向溢出。
- [x] 移动端正文、图片、表格和标题可阅读。
- [x] 文章内容未侵入公共 Footer。
- [x] 公共 Header/Footer/Logo/BookingModal 哈希已复核。
- [x] 深色大 Hero、渐变标题、胶囊标签和装饰光晕已按用户反馈移除。
- [x] DOCX 明确字体颜色 `#1A1A1A`、`#1F4E79`、`#595959` 已在浏览器计算样式中复核。
- [x] 1440px 下公共 Header、文章头部和正文均为 `x=130px / width=1180px`。
- [x] 主标题与副标题计算样式均为 `text-align:center`。
- [x] 页面头部与正文画布收敛为 `#FFFFFF`。
- [x] 完整布局复核后，两篇文章摘要框按 DOCX 恢复为 `rgb(244,246,250)` 和 `#2E5FA3` 左边框。
- [x] 摘要与文章头部下边界的实测距离由约 106px 收紧为 40px。

## SEO / GEO

- [x] 独立 title、description、自指 canonical、唯一 h1 和标题层级已核对。
- [x] Article 与 BreadcrumbList 结构化数据只包含可见、已确认事实。
- [x] 正文关键内容存在于服务端 HTML。
- [x] sitemap、robots 和研究院列表内链已核对。
- [x] 未伪造日期、作者、引用、指标或 FAQ。

## 工程验证

| 命令 | 结果 | 备注 |
|---|---|---|
| `pnpm lint` | PASS | ESLint 零错误 |
| `pnpm exec tsc --noEmit` | PASS | TypeScript 零错误 |
| `pnpm build` | PASS | 21 个静态页面生成，详情页 SSG |
| `git diff --check` | PASS | 无空白错误 |
| `pnpm mastergo:check research-article-template` | PASS | 证据文件及截图齐全后最终复跑 |

## 结论

- [x] 已提取
- [x] 内容核对通过
- [x] 已视觉校准
- [x] 文章还原验收通过

本结论只适用于 Agent OS 样板文章；其余 27 篇仍须逐篇通过内容、素材、视觉、SEO 和工程门禁。
