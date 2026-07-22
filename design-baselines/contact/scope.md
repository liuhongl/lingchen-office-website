# 联系我们页范围与证据清单

## 任务范围

- 页面名称：联系我们
- MasterGo 链接：`https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=M&devMode=true`
- `page_id`：`M`
- 主画板 `layer_id`：`6:05`（组 3，1440 × 1682 主体）
- 目标桌面视口：1440 × 900，MasterGo 100%
- 移动端设计基线：无；本次只验桌面端，不猜测移动端设计
- 允许修改：新增 `/contact/` 页面、页面私有样式/交互、正式导出素材、该页证据台账、sitemap 条目；用户后续明确授权修改 SiteHeader 联系链接及公共 BookingModal 表单
- 禁止修改：公共 Footer、Logo、字体与其他既有页面

## 公共资产冻结证据

| 资产 | 组件路径 | 基线截图 | 视口 | 文件 SHA-256 | 允许变化 |
|---|---|---|---|---|---|
| SiteHeader | `components/site-header.tsx` | `01-top-mastergo-100.jpg`（设计冲突仅记录） | 1440 × 900 | `2f0fbe8ad48667cb80e2c23026d27fc6f505b2cdfd7ce3496da22d9694a4a73d` | 无 |
| SiteFooter | `components/site-footer.tsx` | `03-contact-footer-mastergo-100.jpg`（设计冲突仅记录） | 1440 × 900 | `7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb` | 无 |
| BookingModal | `components/booking-modal.tsx` | 公共组件冻结 | 1440 × 900 | `d7e294bd0d6384412725da78ec27fb9035341cf42ec4715e5a5f66810e387b31` | 无 |
| BookingTrigger | `components/booking-trigger.tsx` | 公共组件冻结 | 1440 × 900 | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 无 |

## 用户确认覆盖项

| 项目 | MasterGo 原值 | 用户确认值 | 对话证据 |
|---|---|---|---|
| 合作表单行为 | 页面内联表单 | 授权 `/contact/` 使用页面内联表单，作为 BookingModal 规则例外 | 用户 2026-07-21 回复“授权” |
| 提交行为 | 设计稿未给后台契约 | 两套表单统一请求 `POST /system/contact-us` | 用户后续要求两套表单添加并统一接口 |
| 职位 / 部门 | `职位 / 部门 *` | `职位 / 部门`，非必填 | 用户浏览器批注 3 |
| 手机号 | 仅标记必填 | 增加中国大陆手机号格式校验 | 用户浏览器批注 2 |
| 产品选项宽度 | 选中态显示勾选 | 勾选图标固定占位，切换状态不改变按钮宽度与布局 | 用户浏览器批注 1 |
| Hero 强调线 | H1 上方 40 × 3 蓝色短线 | 移至 H1 下方，改为 56 × 3 两端淡出的蓝青渐变强调线 | 用户浏览器批注：横线位置别扭，授权重新设计 |
| 联系我们链接 | 公共 Header 指向 `/#contact` | 改为 `/contact/` 并在当前页高亮 | 用户要求“把联系我们的相关链接地址改下” |
| 两套表单接口 | 联系我们页仅本地校验；BookingModal 自行请求 | 两套表单统一通过 `submitContactUs` 请求 `POST /system/contact-us` | 用户要求“把这个表单和公共表单组件都改一下，添加一下接口” |
| 两套表单字段 | BookingModal 缺少职位 / 部门，字段必填规则与产品值不一致 | 两套表单统一为姓名、公司、职位 / 部门、手机、邮箱、产品、需求描述；职位 / 部门非必填，其余文本字段必填；手机号和邮箱格式规则一致 | 用户要求两套表单字段、必填和格式校验一致 |
| 重复提交 | 仅依赖提交按钮状态 | 两套表单增加同步请求锁，请求完成前忽略重复提交 | 用户要求添加提交防抖、防止重复提交 |
| BookingModal 产品布局 | 选中时动态插入勾选图标，按钮宽度变化 | 勾选图标绝对定位，选中前后按钮宽度、坐标和换行保持一致 | 用户公共弹窗浏览器批注 1 |

## 转化按钮行为

| CTA 文案 | 区块 | 设计动作 | 实现组件 | 是否为例外 | 例外依据 |
|---|---|---|---|---|---|
| 提交产品合作需求/预约解决方案 | 02 表单 | 页内提交 | `ContactForm` + `submitContactUs` | 是 | 用户明确授权内联表单并要求接入统一接口 |

## 分区清单

| 区块 ID | 区块名称 | MasterGo 100% 基线 | 文案台账 | 视觉台账 | 内容验收 | 视觉验收 |
|---|---|---|---|---|---|---|
| 01 | Hero | `01-top-mastergo-100.jpg` | 已录入 | 已录入 | 待实现后核对 | 待同视口对比 |
| 02 | 合作意向表单 | `02-form-mastergo-100.jpg` | 已录入 | 已录入 | 待实现后核对 | 待同视口对比 |
| 03 | 联系方式卡片 | `03-contact-footer-mastergo-100.jpg` | 已录入 | 已录入 | 待实现后核对 | 待同视口对比 |
| 04 | 公共 Footer | `03-contact-footer-mastergo-100.jpg` | 冻结复用 | 冻结复用 | 待回归 | 待回归 |

## 已知设计冲突

- MasterGo Header/Footer 与当前冻结公共组件的文案和导航高亮存在差异；依用户要求复用冻结公共资产，不用页面级样式覆盖。
- 公共 Header 的“联系我们”已按用户本轮明确授权改为 `/contact/`；除此之外没有修改公共 Header 视觉和文案。

## 公共资产授权变更后哈希

| 资产 | 交付 SHA-256 | 授权变化 |
|---|---|---|
| SiteHeader | `00a8a2bb1d30db5e77a6abf5825e95497d907d7c9356506f9feac9c5ec35ef76` | “联系我们”链接与当前页高亮逻辑 |
| BookingModal | `19c0a05920c86403b5f33ea5e5261abd6c464d2405cab54d1ef3d9faf42ebd7c` | 统一字段、产品值、必填/格式校验、固定宽度选中态及同步提交锁 |
| SiteFooter | `7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb` | 无变化 |
| BookingTrigger | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 无变化 |

## 阻塞项

无。移动端没有设计基线，明确排除在本次视觉门禁外。
