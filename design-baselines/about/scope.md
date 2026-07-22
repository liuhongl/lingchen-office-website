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
- 允许修改：About 页面主体全部区块及其内容；公共组件保持冻结
- 禁止修改：公共 Header、Footer、Logo、BookingModal 和其他页面

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
