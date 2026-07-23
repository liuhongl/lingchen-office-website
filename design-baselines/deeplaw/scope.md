# DeepLaw 页面范围与证据

- 页面名称：产品专项解决方案 - DeepLaw
- 内容原型：https://aistudio.google.com/apps/31940409-b4c4-420a-8018-a504586355a9?showPreview=true&showAssistant=true
- MasterGo 视觉真源：https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=33%3A002647&devMode=true
- `page_id`：`33:002647`；独立 DeepLaw 目标画板：`AI快搭-9636611`（根图层 `33:002648`）
- 目标桌面视口：1440×900；全页高度由原型完整内容自然撑开
- 内容范围：原型 DeepLaw 页面全部可见正文，禁止增删改
- 视觉范围：DeepLaw 独立 MasterGo 画板；本轮仅处理页面专属语义图标及其映射，不调整文案、模块布局和公共头尾
- 移动端：按官网桌面端范围规则，不纳入本轮实现与验收

## 用户确认覆盖

- 2026-07-21：原型全部内容均可作为正式官网内容原样发布。
- 2026-07-21：接受“原型为内容真源、MasterGo 多个产品页为视觉体系参考”的新页面综合设计。
- 2026-07-21：保留公共 Header 与 Footer。

## 公共资产冻结基线

| 资产 | 路径 | 开工 SHA-256 | 允许变化 |
|---|---|---|---|
| SiteHeader | `components/site-header.tsx` | `ea5b1626042d5b6e8d26e7b4c878d27f7301d51e41cd3f82058c06196b065227` | 无 |
| SiteFooter | `components/site-footer.tsx` | `5816ee5da601620216059640fcaace7f3f25c030d8280423f42e08759ddec20b` | 无 |
| Logo | `components/logo.tsx` | `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11` | 无 |
| BookingModal | `components/booking-modal.tsx` | `1ef9eb10296ff62a52157d0afc0f92d63c321655a30f746d537a08abafa26842` | 无 |
| BookingTrigger | `components/booking-trigger.tsx` | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 无 |

## 分区

1. Hero、产品定位、过去与现在
2. 六大环节、关键业务流、核心能力与工作流优势
3. 产品价值与商业实效
4. 落地场景与深度场景
5. 合作模式、公共 Footer

## CTA

| 文案 | 行为 | 组件 |
|---|---|---|
| 立即预约体验该产品 | 打开公共预约弹窗 | `BookingTrigger` |

## 2026-07-23 用户视觉覆盖

- 删除 Hero 顶部“产品定位”标签。
- 共享面包屑预约按钮改为蓝色描边弱化样式，仍打开公共 `BookingModal`。
- 六大环节标题删除重复数字；卡片独立数字保留。
- 五张核心能力卡桌面改为首行三张、次行两张左对齐。
- “产品价值 / 商业实效 / 落地场景 / 合作模式”使用统一浅蓝描边小标题。
- 产品价值卡片须有边框；现场核对已存在，不重复修改。
- 三项交付标题增加 MasterGo 正式对号图标，并用 DeepLaw 正式导出图层替换业务流与环节箭头的原型内联 SVG。
- 当前官网仅验收桌面端，移动端未纳入本轮范围。
- 页面所有语义图标优先从 `33:002647` 对应原始图层导出；无法取得独立原始图层时，用户明确授权参考设计语言与业务语义生成 SVG。

## 2026-07-23 图标替换任务公共资产基线

| 资产 | 任务开工 SHA-256 | 本次允许变化 |
|---|---|---|
| `components/site-header.tsx` | `00a8a2bb1d30db5e77a6abf5825e95497d907d7c9356506f9feac9c5ec35ef76` | 无 |
| `components/site-footer.tsx` | `7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb` | 无 |
| `components/logo.tsx` | `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11` | 无 |
| `components/booking-modal.tsx` | `19c0a05920c86403b5f33ea5e5261abd6c464d2405cab54d1ef3d9faf42ebd7c` | 无 |
| `components/booking-trigger.tsx` | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 无 |
