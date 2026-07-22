# 灵宸研究院 28 篇列表扩展范围

## 范围

- 页面：`/research/`
- MasterGo：`https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=6%3A26021&devMode=true&layer_id=6%3A07886`
- `page_id`：`6:26021`；`layer_id`：`6:07886`
- 目标桌面视口：1440×1000。
- 用户确认覆盖：在现有 7 张卡片之后，复用完全相同的列表卡片样式生成剩余 21 张；允许使用现有“加载更多”承载分页展示。
- 用户确认覆盖（2026-07-21）：顶部“全部 / 行业洞察 / 解决方案&白皮书 / 产品动态”改为可切换筛选；切换后只展示卡片可见标签与所选分类一致的文章。
- 用户确认覆盖（2026-07-21）：文章列表不展示序号；移除全部卡片左上角编号及其占位，只保留分类标签。
- 用户反馈覆盖（2026-07-21）：列表全部展开时，最后一张卡片与 Footer 之间增加留白。
- 用户反馈覆盖（2026-07-21）：现有正文图 1 缩略图不适合列表展示时，由本任务生成合适封面；本次范围先覆盖“产品动态”8 篇。
- 用户反馈覆盖（2026-07-21）：首轮产品动态封面 AI 生成感过强，作废该视觉方向；保留 MasterGo 前 6 张正式配图，为第 7–28 篇生成 22 张逐篇对应的新封面，统一参考前 6 张的深色编辑插画语言。
- 用户反馈覆盖（2026-07-21）：移除“加载更多”，分类切换后一次展示该分类全部文章。

## 允许修改

- 新增 21 篇 DOCX 的结构化详情数据、原始图片和静态路由。
- 研究院列表总数为 28；默认一次展示全部文章，不保留分页或“加载更多”。
- 新增卡片只使用 DOCX sourceTitle、abstract、分类与首图；不补日期和阅读时长。
- sitemap 增加 21 个详情 URL。
- 顶部分类 Tab 增加真实筛选状态；切换分类时一次展示所选分类的全部文章。
- 移除卡片可见序号，但内部稳定 key、文章顺序和详情路由保持不变。
- 所有分类均完整展示，为文章区固定保留 64px 底部留白。
- 第 7–28 篇列表封面替换为逐篇生成的无文字主题图；正文 DOCX 原图、图注与顺序不变。

## 冻结边界

- 既有 1–7 卡片的标题、摘要、分类、封面、时长、顺序和 href 不变；序号按用户最新确认统一移除。
- 卡片的高度、padding、圆角、阴影、字体、按钮、图片框和 24px gap 不变。
- 公共 Header、Footer、Logo、BookingModal 与 BookingTrigger 不变。

## 公共资产开工 SHA-256

| 资产 | SHA-256 |
|---|---|
| `components/site-header.tsx` | `d3eea07b7d66968fec211fa373eb2faa467b7bfc34d0924ab5bbae621e0ff81f` |
| `components/site-footer.tsx` | `ae7b55e3f972be01b0a80188d7f2404aee4c0c02431a131c1179ab9c018a0c55` |
| `components/booking-modal.tsx` | `d99d2791ea1e82d3d6234385f1a92599782e8520805912487eb76bcb5f75c70f` |
| `components/booking-trigger.tsx` | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` |
| `public/images/lingchen-logo.png` | `4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85` |

内容与视觉阻塞项：0。

## 并行公共资产变更说明

- 本次序号移除只修改研究院列表组件与对应 CSS，未编辑公共 Header/Footer。
- 交付复核时 `components/site-header.tsx` 当前 SHA-256 为 `2f0fbe8ad48667cb80e2c23026d27fc6f505b2cdfd7ce3496da22d9694a4a73d`，`components/site-footer.tsx` 当前 SHA-256 为 `7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb`；二者在共享工作区中由本任务范围外的并行改动产生，本任务不回退。
- `BookingModal`、`BookingTrigger` 与 Logo 哈希保持开工值不变。

## 分类筛选口径

- 分类以列表卡片当前可见标签为准，确保筛选结果与用户看到的标签一致。
- 第 4 篇 RaaS 的源目录属于“行业洞察”，但既有设计卡片已确认显示为“解决方案&白皮书”；本次不修改已冻结卡片，故筛选统计为：行业洞察 9、解决方案&白皮书 11、产品动态 8。
