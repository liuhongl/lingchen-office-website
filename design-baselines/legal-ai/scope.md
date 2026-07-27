# AI 法律案件拓展与工作流解决方案范围

- 内容真源：用户指定 Google AI Studio 原型 `https://aistudio.google.com/apps/31940409-b4c4-420a-8018-a504586355a9?showPreview=true&showAssistant=true`，页面模块、顺序与可见文案以该原型为准。
- 视觉真源：既有 MasterGo 综合解决方案组件基线与当前已实现页面；原型仅补充视觉真源未覆盖的结构和交互状态。
- MasterGo 文件：`198643424708731`；`page_id`：N/A（本页为原型新增页，视觉复用已有 MasterGo 综合解决方案组件基线）
- 页面：AI法律案件拓展与工作流解决方案
- 路由：`/solutions/legal-ai/`
- 目标桌面视口：1440×900；范围：整页；移动端未纳入当前官网实现与验收范围
- 视觉依据：既有 MasterGo 综合解决方案页面组件体系；原型负责内容、区块顺序和图标语义
- 用户覆盖：内容严格使用原型，不得增删改；允许参考原型适量使用图标
- 公共 Header、Footer、Logo、BookingModal、BookingTrigger：冻结
- `SolutionTabs`：用户明确授权增加本综合解决方案入口

| 公共资产 | 开工 SHA-256 |
|---|---|
| `components/site-header.tsx` | `ea5b1626042d5b6e8d26e7b4c878d27f7301d51e41cd3f82058c06196b065227` |
| `components/site-footer.tsx` | `5816ee5da601620216059640fcaace7f3f25c030d8280423f42e08759ddec20b` |
| `components/logo.tsx` | `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11` |
| `components/booking-modal.tsx` | `1ef9eb10296ff62a52157d0afc0f92d63c321655a30f746d537a08abafa26842` |
| `components/booking-trigger.tsx` | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` |

## 分区

1. Hero 与四项指标
2. 行业现状与五个痛点
3. 五大智能体
4. 协同效应
5. 六维价值
6. 合作与可信底座
7. Closing CTA

## 2026-07-24 浏览器批注覆盖

- 目标桌面视口：`1644 × 1258` CSS px。
- Hero 标题由用户确认改为单行；只移除强制换行，不改可见文字和渐变范围。
- Hero 正文宽度扩展至 `.legal-shell` 的 100%，右边界与使用同一公共容器宽度的 Header“立即体验”对齐。
- 公共 Header、Footer、Logo、BookingModal、BookingTrigger 继续冻结；移动端不在本轮范围。

## 2026-07-25 浏览器批注范围

- “传导关系”标签独占一行，正文另起一行。
- 四张价值指标卡缩小上下内边距并删除最小高度。
- 目标视口为 `1576×1258`，不修改公共资产。

## 2026-07-26 浏览器批注范围

- 目标视口：`1576×1258`。
- 所有章节小标题增大并适配主标题；痛点卡删除 `SECTION 01` 至 `SECTION 05`，保留现有正式图标并将卡片标题放到图标后面。
- Closing CTA 采用内容撑高，桌面端上下内边距各 `60px`。
- 公共资产继续冻结；开工哈希同本批 AI 出海页记录。

## 2026-07-26 浏览器批注第二批

- 用户覆盖 ID 4–5：DeepLaw 独特价值条改浅色；第三张合作卡小幅降低高度。
- 只修改法律方案页主体样式；公共资产和可见文案不变。桌面视口 1576×1258。
