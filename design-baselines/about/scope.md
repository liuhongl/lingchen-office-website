# 关于灵宸 MasterGo 范围与证据清单

## 任务范围

- 页面名称：关于灵宸
- 内容真源：用户指定 Google AI Studio 原型 `https://ai.studio/apps/31940409-b4c4-420a-8018-a504586355a9`，2026-07-22 读取的“关于灵宸”页面 `<main>` 完整文本；已明确用户逐条确认的安全承诺覆盖优先于原型。
- 视觉真源：当前 About 页面与本目录 MasterGo `page_id=18:5749` 既有基线；对应大模块保留现有视觉，只同步原型内容。
- MasterGo 链接：https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=18%3A5749&devMode=true
- `page_id`：`18:5749`
- `layer_id`：根画板 `组帧-9627785`
- 目标桌面视口：`1440 × 720` CSS px（布局宽度与原 1440 桌面画板一致）
- MasterGo 原型限制：100% 模式单次只显示 `1280 × 720`，每个分区分别保存左右视野并按已验证的 `160px` 水平位移拼接为完整 `1440 × 720` 基线
- 移动端：未纳入当前官网范围，不做实现或验收结论
- 允许修改：About 页面主体；2026-07-23 用户新增授权将公共 Header 口号移入 About Hero，并同步修改首页 Hero
- 禁止修改：除删除口号外的公共 Header 结构与视觉；Footer、Logo、BookingModal 和无关页面

## 公共资产冻结

| 资产 | 文件 | SHA-256 | 允许变化 |
|---|---|---|---|
| SiteHeader | `components/site-header.tsx` | `a5edbe507ea4338ccf61f7c50018a2c6863e3fdfebf7b47ac9603c34cfd033ec` | 仅“关于灵宸”高亮 |
| SiteFooter | `components/site-footer.tsx` | `5816ee5da601620216059640fcaace7f3f25c030d8280423f42e08759ddec20b` | 无 |
| Logo | `components/logo.tsx` | `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11` | 无 |
| BookingModal | `components/booking-modal.tsx` | `57409cdad8a53fca2140b64be1b72c7f86481eb213101396ca54d9435d0886aa` | 无 |

### 2026-07-22 交付复核

| 资产 | 当前 SHA-256 | 与冻结值 |
|---|---|---|
| SiteHeader | `00a8a2bb1d30db5e77a6abf5825e95497d907d7c9356506f9feac9c5ec35ef76` | MISMATCH（本次任务未修改该文件） |
| SiteFooter | `7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb` | MISMATCH（本次任务未修改该文件） |
| Logo | `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11` | MATCH |
| BookingModal | `19c0a05920c86403b5f33ea5e5261abd6c464d2405cab54d1ef3d9faf42ebd7c` | MISMATCH（本次任务未修改该文件） |

> 当前仓库文件整体未纳入 Git 跟踪，无法通过提交历史追溯上述三个哈希何时变化；本次补丁只涉及 About 页面、故事组件、About 样式和对应证据台账。

## 分区

| 区块 | MasterGo 100% 基线 | 本地证据 | 结论 |
|---|---|---|---|
| 01 Hero | `01-mastergo-1440x720.jpg` | `01-local-body-1440x720.jpg` | PASS |
| 02 产品布局 | `02-mastergo-1440x720.jpg` | `02-local-body-1440x720.jpg` | PASS |
| 03 团队 DNA | `03-mastergo-1440x720.jpg`、`04-mastergo-1440x720.jpg` | 对应 `local-body-1440x720` | PASS |
| 04 品牌故事 | `04-mastergo-1440x720.jpg`、`05-mastergo-1440x720.jpg` | 对应 `local-body-1440x720` | PASS |
| 05 合作模式 | `05-mastergo-1440x720.jpg`、`06-mastergo-1440x720.jpg` | 对应 `local-body-1440x720` | PASS |
| 06 安全承诺 | `06-mastergo-1440x720.jpg`、`07-mastergo-1440x720.jpg` | 对应 `local-body-1440x720` | PASS |
| 07 CTA/Footer | `07-mastergo-1440x720.jpg`；Footer 使用冻结公共基线 | `07-local-body-1440x720.jpg` | PASS |

## 用户覆盖与阻塞

- 用户确认覆盖：执行 1A / 2A / 3A；原型决定主体内容，保留当前 MasterGo 视觉，安全承诺的逐条用户确认文字优先于原型。
- 2026-07-22 用户覆盖：先移除 Hero“了解产品方案”，随后确认 Hero“预约演示”也一并移除；Hero 最终不保留 CTA。
- 2026-07-22 用户覆盖：品牌故事第二、第三项改为可点击切换，右侧内容分别以用户截图 1、截图 2 为准。
- 2026-07-22 用户覆盖：安全承诺 01 将“数据与语义生产资料”改为“敏感沟通文字与音档”、“公有”改为“公共”；02 将“敏感业务”改为“敏感法务”；03 末句改为“防范越权与泄密”；05 将“链路级系统底层”改为“智能体系统底座”。
- 视觉阻塞：无。关于页根画板不包含公共 Header/Footer，正文对比时剔除 sticky Header；公共头尾按冻结基线单独验收。
- 2026-07-22 原型迁移：按用户确认 1A / 2A / 3A 批量实施；Hero 眉题和本地独有 Closing CTA 已按 2A 删除。
- 2026-07-23 用户覆盖：从公共 Header 删除“明道 · 优术 · 取势 · 合众”，并按交互原型放入 About Hero 右上角。

## 2026-07-23 Hero 口号迁移证据

- 内容真源：用户指定原文“明道 · 优术 · 取势 · 合众”。
- 视觉真源：Google AI Studio“关于灵宸”交互原型，2026-07-23 读取。
- 原型测量：Hero `x=48 / y=113 / width=1479 / height=447.84375`；口号 `x=1245.0625 / y=146 / width=232.9375 / height=28.796875`，相对 Hero `top=32 / right=49`（样式值 `right=48px`）。
- 字形证据：`19.2px / 900 / 28.8px`，青 `#06b6d4` 到紫 `#7c3aed` 逐字过渡，字符旋转 `-12deg → 12deg`，最大上移 `6px`。
- 本地落位：About Hero `top=32 / right=48`；`1671 × 1258` 下实际 `x=1375.0625 / y=98 / width=232.9375 / height=28.796875`。
- 公共 Header 开工 SHA-256：`00a8a2bb1d30db5e77a6abf5825e95497d907d7c9356506f9feac9c5ec35ef76`；修改后：`2c033c6ccdc416829083407865733942e344c2c3318ea61d5e885181f4a90c1f`。

## 2026-07-25 浏览器批注覆盖

- 目标视口：`1576 × 1258`，移动端不纳入本轮验收。
- About Hero 与各大 section 删除固定高度，统一上下 `padding: 60px`；相邻大模块以白色 / 浅蓝交替区分。
- Hero 主标题调整为两行：第一行“灵宸智能：开箱即用的 AI 原生 Agent，”，第二行“为您的商业结果服务。”；第二行复用首页“新质生产力”的蓝紫粉渐变。
- Hero 正文撑满公共内容栅格；Hero 口号右边缘位于公共 Header 右边缘内侧 `20px`。
- 产品卡、团队 DNA 卡、品牌故事卡、安全卡按用户批注改为内容驱动；指定卡片内边距为 `20px`，标题与图标或编号同行。
- 删除可见文本 `WHY LINGCHEN`、`PARTNERSHIP`，以及品牌故事首项底部“工业级 AI Agent OS / 为企业经营最深处设计”模块。
- 页面浅灰正文统一改为黑色；品牌蓝、渐变文字、激活 Tab 白字与按钮文字保持原语义色。
- 开工公共资产 SHA-256：`SiteHeader=5aef1bd27e0a0a57ffdc65dbb80df4ab5cc30aa2c17b1283f3791a17da345bfa`；`SiteFooter=8732972918addddddbbcbec095ff0b2b7c34797ea74522bf019427956ceae2ae`；`BookingModal=3e143bc70f5cc270231d3961ff5eb1b92481be637c55bcbc36269cfedbb32206`；`BookingTrigger=cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7`；`Logo=badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11`。

## 2026-07-25 Hero 标点与合作卡标题位置覆盖

- 内容真源：用户本轮浏览器批注明确覆盖。
- Hero 第一行改为“灵宸智能：开箱即用的 AI 原生 Agent”，删除末尾逗号。
- Hero 第二行改为“为您的商业结果服务”，删除末尾句号。
- 仅合作模式第二张卡片调整标题位置：“B端企业本地化部署”移到图标右侧并与图标垂直居中；其余三张卡片结构和视觉保持不变。
- 本轮仍只验收桌面端，不修改公共 Header、Footer、Logo、BookingModal。

## 2026-07-27 浏览器批注第六批

- 仅降低合作模式四张卡片的统一高度；文案、图标、卡片数量和公共资产保持不变。
- 目标视口 `1576×1258`；移动端不在范围。
