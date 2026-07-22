# 首页 MasterGo 范围与证据清单

## 任务范围

- 页面名称：首页
- MasterGo 链接：https://mastergo.com/file/198643424708731?fileOpenFrom=team&page_id=6%3A2027&devMode=true
- `page_id`：`6:2027`
- `layer_id`：根画板 `AI快搭-9627457`
- 目标桌面视口：`1440 × 720` CSS px（布局宽度与原 1440 桌面画板一致）
- MasterGo 原型限制：100% 模式单次只显示 `1280 × 720`，每个分区分别保存左右视野并按已验证的 `160px` 水平位移拼接为完整 `1440 × 720` 基线
- 移动端设计基线：无独立 MasterGo 画板；390/760/980 仅做响应式与横滚回归
- 允许修改：本轮仅补齐 Agent OS 六个节点在交互原型中已有、当前页面缺失的说明文字，并为新增文字补充必要的节点内排版
- 禁止修改：公共 Header、Footer、Logo、BookingModal 及关于页/解决方案页

## 公共资产冻结证据

| 资产 | 组件路径 | 基线 | 开工 SHA-256 | 允许变化 |
|---|---|---|---|---|
| SiteHeader | `components/site-header.tsx` | `visual-results/home/audit-2026-07-20/00-site-header.png` | `a5edbe507ea4338ccf61f7c50018a2c6863e3fdfebf7b47ac9603c34cfd033ec` | 仅路由高亮 |
| SiteFooter | `components/site-footer.tsx` | `visual-results/home/audit-2026-07-20/06-contact.png` | `5816ee5da601620216059640fcaace7f3f25c030d8280423f42e08759ddec20b` | 无 |
| Logo | `components/logo.tsx` | 同上 | `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11` | 无 |
| BookingModal | `components/booking-modal.tsx` | 公共弹窗 | `57409cdad8a53fca2140b64be1b72c7f86481eb213101396ca54d9435d0886aa` | 无 |

## 分区清单

| 区块 | MasterGo 证据 | 本地证据 | 内容 | 视觉 |
|---|---|---|---|---|
| 00 Header | `01-mastergo-1440x720.jpg` | `01-local-1440x720.jpg` | PASS | PASS |
| 01 Hero | `01-mastergo-1440x720.jpg` | `01-local-1440x720.jpg` | PASS | PASS |
| 02 Problems | `02-mastergo-1440x720.jpg` | `02-local-1440x720.jpg` | PASS | PASS |
| 03 Value | `03-mastergo-1440x720.jpg` | `03-local-1440x720.jpg` | PASS | PASS |
| 04 Agent OS | `04-mastergo-1440x720.jpg`、`05-mastergo-1440x720.jpg` | 对应 `local-1440x720` | PASS | PASS |
| 05 CTA / Footer | `05-mastergo-1440x720.jpg`、`06-mastergo-1440x720.jpg` | 对应 `local-1440x720`；Footer 使用冻结公共基线 | PASS | PASS |

## 本轮内容与视觉真源

- 内容真源：用户于 2026-07-23 指定的 Google AI Studio 交互原型 `https://ai.studio/apps/31940409-b4c4-420a-8018-a504586355a9`，仅覆盖 Agent OS 六个节点的说明文字。
- 视觉真源：当前已冻结的首页 Agent OS 环形布局与 MasterGo 视觉语言；不改节点数量、顺序、圆形尺寸、轨道、中心核或区块背景。
- 当前范围：只修改 `app/page.tsx` 的六条节点数据与 `app/globals.css` 的节点说明文字样式。

## 用户覆盖与阻塞

- 用户覆盖：2026-07-23，用户明确要求补回原型中 Agent OS 六个节点的全部说明文字。
- 视觉阻塞：无。移动端无独立设计稿，不计入桌面 1:1 结论。
