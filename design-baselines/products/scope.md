# 产品矩阵页面范围与证据清单

- 内容真源：用户指定的 Google AI Studio 产品矩阵原型及本目录 `content-ledger.md`。
- 视觉真源：已冻结官网公共设计系统、现有 MasterGo 页面视觉语言及用户确认的卡片覆盖规则；MasterGo 没有本页独立画板。

## 任务范围

- 页面名称：产品矩阵
- MasterGo 链接：无；用户确认 MasterGo 未设计该页面
- `page_id`：无
- `layer_id`：无
- 目标桌面视口：1440×1000
- 移动端设计基线：无；仅做工程响应式适配，不声明视觉还原
- 允许修改的页面与区块：新增 `/products/`；产品卡片区；Header 产品矩阵链接及高亮；sitemap
- 禁止修改的区域：公共 Footer、Logo、字体、BookingModal、BookingTrigger 及其全局样式

## 公共资产

- `SiteHeader`：仅允许按用户授权修改产品矩阵链接和路由高亮
- `SiteFooter`：冻结
- Logo：已确认
- 字体：复用官网既有字体栈
- 其他共享组件：无新增公共组件

## 公共资产冻结证据

| 资产 | 组件路径 | 基线截图 | 视口 | 文件 SHA-256 | 允许变化 |
|---|---|---|---|---|---|
| SiteHeader | `components/site-header.tsx` | `design-baselines/home/final-mastergo.png` | 1440px | `a5edbe507ea4338ccf61f7c50018a2c6863e3fdfebf7b47ac9603c34cfd033ec` | 产品矩阵 href 与 `/products` 路由高亮 |
| SiteFooter | `components/site-footer.tsx` | `design-baselines/about/07-cta-footer-mastergo.png` | 1440px | `5816ee5da601620216059640fcaace7f3f25c030d8280423f42e08759ddec20b` | 无 |
| Logo | `components/logo.tsx` | 既有公共 Logo | 1440px | `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11` | 无 |
| BookingModal | `components/booking-modal.tsx` | 既有公共弹窗 | 1440px | `1ef9eb10296ff62a52157d0afc0f92d63c321655a30f746d537a08abafa26842` | 无 |

### 2026-07-22 交付哈希复核

| 资产 | 当前 SHA-256 | 与冻结值 |
|---|---|---|
| SiteHeader | `00a8a2bb1d30db5e77a6abf5825e95497d907d7c9356506f9feac9c5ec35ef76` | MISMATCH（本次任务未修改） |
| SiteFooter | `7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb` | MISMATCH（本次任务未修改） |
| Logo | `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11` | MATCH |
| BookingModal | `19c0a05920c86403b5f33ea5e5261abd6c464d2405cab54d1ef3d9faf42ebd7c` | MISMATCH（本次任务未修改） |

> 当前仓库文件整体未纳入 Git 跟踪，无法通过提交历史追溯三个公共文件的哈希变化；本次补丁只涉及产品卡片样式、冗余 tone class 清理和 products 证据台账。

## 用户确认覆盖项

| 项目 | MasterGo 原值 | 用户确认值 | 对话证据 |
|---|---|---|---|
| 页面视觉来源 | 无页面设计 | 参考官网现有 MasterGo 整体风格实现 AI Studio 原型 | 2026-07-20 当前任务 |
| 页面路由 | 无 | `/products/`，Header 产品矩阵连接该路由 | 2026-07-20 用户回复“1、可以” |
| 无详情页产品 | 无 | `Recov AI`、`DeepLaw` 仅展示，不虚构详情路由 | 2026-07-20 用户回复“2、可以” |
| 产品卡片默认态与悬停态 | 首卡蓝底、Recov AI 暖黄底、其余白底 | 7 张卡片默认统一白底；首次覆盖的整卡蓝色 hover 过重，改为白底不变、蓝色边框与轻蓝阴影 | 2026-07-22 两次用户确认 |

## 转化按钮行为

本页没有预约、体验、演示或合作咨询 CTA；公共 Header 的“立即体验”继续复用既有 BookingModal。

## 分区清单

| 区块 ID | 区块名称 | 原型基线 | 文案台账 | 视觉台账 | 内容验收 | 视觉验收 |
|---|---|---|---|---|---|---|
| 01 | 产品卡片总览 | `01-products-prototype.png` | `content-ledger.md` | `visual-ledger.md` | PASS | PASS（按原型布局和官网视觉语言校准） |

## 阻塞项

| 区块 | 属性或素材 | 阻塞原因 | 处理状态 |
|---|---|---|---|
| 全页 | MasterGo 页面级 100% 基线 | MasterGo 未设计该页面 | 用户确认按原型与官网既有视觉语言实现；禁止声明 1:1 |
| 01 | Recov AI、DeepLaw 详情路由 | 仓库不存在对应详情页 | 用户确认仅展示卡片 |

## 2026-07-24 浏览器批注覆盖

- 产品矩阵第 4 张卡片标题由“AI获客Harness”改为“AI销售获客Harness”。
- 本轮只修改该标题，不改卡片链接、描述、指标、图标和公共 Header/Footer。
