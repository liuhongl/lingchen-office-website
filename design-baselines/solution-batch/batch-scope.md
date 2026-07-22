# 解决方案批次范围台账

## 用户确认的信息架构

- 公共 Header 下设置两层解决方案导航。
- 第一层：`综合解决方案`、`产品专项解决方案`。
- 产品专项第二层：`Sales in`、`Social Grow`、`Mine GEO`、`AI获客Harness`、`Recov AI`、`DeepDoc`、`DeepLaw`。
- 每页使用独立静态 URL、服务端 HTML、自指 canonical 和真实 `Link`，共享 Layout 固定导航，避免客户端状态 Tab 导致不可抓取。
- 公共 `SiteHeader`、`SiteFooter`、Logo、字体、`BookingModal`、`BookingTrigger` 冻结。
- 当前仅有 1440px 桌面基线；390px 只做工程可用性检查，不计入视觉 1:1。
- 2026-07-22 用户确认：综合解决方案与产品专项解决方案的二级当前 Tab，统一使用所附截图样式；浅蓝底 `#EAF2FF`、蓝字 `#235FC4`、圆角 8px、padding `8px 12px`，未选中项保持原布局。
- 2026-07-22 用户补充确认：综合与产品专项的一级、二级导航必须由同一个公共组件渲染，所有子路由保持一致；二级当前 Tab 与下方首个大模块之间统一保留 12px 白色安全距。AI 出海页旧导航不再作为例外。

## 路由与证据映射

| 顺序 | 页面 | MasterGo page_id / layer_id | 路由 | 设计基线 | 状态 |
|---:|---|---|---|---|---|
| 1 | AI 不良资产处理综合解决方案 | `6:89588` | `/solutions/non-performing-assets/` | `../non-performing-assets/full-mastergo-1440x10073.png` | G6 PASS |
| 2 | Sales in 专项解决方案 | `19:04539` | `/solutions/products/sales-in/` | 原始全页图 + `sales-in-hero-supplement.png` | G6 PASS |
| 3 | Social Grow 专项解决方案 | `33:024764` | `/solutions/products/social-grow/` | `../social-grow-solution/` 分区证据 | G6 PASS |
| 4 | Mine GEO 专项解决方案 | `24:11356` / `33:024765` | `/solutions/products/mine-geo/` | `../mine-geo-solution/` 分区证据 | G6 PASS |
| 5 | AI获客Harness 专项解决方案 | `17:4896` | `/solutions/products/ai-acquisition-harness/` | `../ai-acquisition-harness-solution/` 分区证据 | G6 PASS |
| 6 | Recov AI 专项解决方案 | `33:024756` | `/solutions/products/recov-ai/` | `../recov-ai-solution/` 分区证据 | G6 PASS |
| 7 | DeepDoc 专项解决方案 | `33:16598` / `33:249089` | `/solutions/products/deepdoc/` | `../deepdoc-solution/` 分区证据 | G6 PASS |
| 8 | DeepLaw 专项解决方案 | `33:002647` / `33:002648` | `/solutions/products/deeplaw/` | `../deeplaw-solution/` 分区证据 | G6 PASS |

## 公共资产开工哈希

| 资产 | SHA-256 |
|---|---|
| `components/site-header.tsx` | `ea5b1626042d5b6e8d26e7b4c878d27f7301d51e41cd3f82058c06196b065227`（用户确认接受当前版本为新冻结基线） |
| `components/site-footer.tsx` | `5816ee5da601620216059640fcaace7f3f25c030d8280423f42e08759ddec20b` |
| `components/logo.tsx` | `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11` |
| `components/booking-modal.tsx` | `1ef9eb10296ff62a52157d0afc0f92d63c321655a30f746d537a08abafa26842` |
| `components/booking-trigger.tsx` | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` |

## 批次终检（2026-07-21）

- 8 个路由均返回 200，均有独立 title、自指 canonical、唯一 H1 和服务端正文。
- 产品专项 Tab 使用真实 `Link`，7 个专项路由逐一客户端切换后 URL、高亮、H1 与主体可见性均通过；`performance` 导航条目保持 1，无整页重载空白闪烁。
- `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check` 均为 0 退出码；8 个 `pnpm mastergo:check` 均通过。
- “获取解决方案白皮书”、电话沟通文案在 8 页解决方案源码中均不存在。
