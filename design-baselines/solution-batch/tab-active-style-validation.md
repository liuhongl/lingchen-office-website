# 解决方案二级 Tab 高亮样式验证

## 范围与证据

- 用户确认截图：`codex-clipboard-a0cbf68b-1ebd-441b-9170-b291c045a54b.png`
- 截图尺寸：907 × 114 px
- 截图 SHA-256：`ac96eb211ad4e6014c2073d50f67cae97326ba8e4755ad2037baeb11bb171b6c`
- 修改范围：`综合解决方案`、`产品专项解决方案`下的二级当前 Tab；一级分组按钮、公共 Header、Footer、Logo、字体和预约弹窗保持冻结。
- 高亮由当前路由驱动；二级 Tab 均为真实链接，当前项输出 `aria-current="page"`。

## 视觉台账

| 元素 | 用户截图证据 | 实现值 | 状态 |
|---|---|---|---|
| 当前 Tab 背景 | 浅蓝色圆角块 | `#EAF2FF` | PASS |
| 当前 Tab 文字 | 蓝色、加粗 | `#235FC4`、`font-weight: 700` | PASS |
| 当前 Tab 圆角 | 8 px | `border-radius: 8px` | PASS |
| 当前 Tab 内边距 | 上下 8 px、左右 12 px | `padding: 8px 12px` | PASS |
| 当前 Tab 实测高度 | 约 38 px | 37 CSS px（字体像素取整差异） | PASS |
| 未选中 Tab | 无底色、灰字 | 保持原共享导航样式 | PASS |
| 二级 Tab 与首个大模块 | 用户要求各页一致并保留合适间距 | 公共导航底部统一保留 12 CSS px 白色安全距 | PASS |
| 图标、图片、特殊图形 | 无 | 无新增素材 | PASS |

### 二级 Tab 垂直对齐修正（2026-07-22）

- 用户反馈截图：`codex-clipboard-88516704-9ca0-4a2d-9c86-e810e12c391a.png`，659 × 50 px，SHA-256 `dbc34a287469015111c72d09dff6127cacc4e6a40847e8ea80336ec0fd2ae6aa`。
- 根因：未选中链接点击盒高 45px，高亮链接因 `height:auto + padding:8px 12px` 实测高 37px；父行使用底部对齐，导致三项文字中心线相差 4px。
- 修正规则：所有二级链接统一为 37px 高并垂直居中；未选中项保留原横向 padding 18px，高亮项保留横向 padding 12px。三项中心线必须完全一致，高亮背景尺寸保持 37px。
- 修改范围：仅公共二级 Tab 高度；不改变文字、字号、颜色、横向顺序、导航底部 12px 安全距和公共 Header/Footer。
- 浏览器几何验收：三个综合方案在三个当前项状态下，全部链接均为 `top:141px`、`bottom:178px`、`height:37px`、中心线 `159.5px`，中心线偏差 0；产品专项 7 个链接同样只有一个高度值 37px 和一个中心线值 159.5px。
- 对齐后同视口截图：`shared-tabs-aligned-legal-ai-1790.png`，1790 × 1248 px，SHA-256 `70b34a2a76a86903fc3b10d811227f16226620aadc70e89c685120279dffd764`。

## 共享组件收口（2026-07-22 补充）

- 现状审计：`/solutions/ai-overseas/` 仍在页面内维护旧的 `solution-switch` 与 `solution-tabs` 两段导航；其余综合页和 7 个产品专项页使用 `components/solution-tabs.tsx`，因此出现高度、间距和移动端行为不一致。
- 用户截图：`codex-clipboard-b2ef7be1-f176-4471-b597-d283aec5f9d5.png`、`codex-clipboard-c4165cd1-5d45-4560-8868-b6a072ab2b85.png`、`codex-clipboard-057d491f-f0ca-468c-8df0-6b2dd7f86ccf.png`、`codex-clipboard-504dd968-44d4-4026-b7ee-d5fa8277535a.png`。
- 收口规则：10 个解决方案路由全部复用同一 `SolutionTabs`；删除 AI 出海页旧导航 JSX 和旧 `.solution-switch` / `.solution-tabs .shell` 样式，不保留页面级覆盖。
- 间距规则：公共导航现有内容总高 112px 不变，在底部追加 12px 安全距，组件总高为 124px；首个大模块从公共导航边界之后开始。
- 文字、图标、图片：不新增、不删改；本次仅改变公共导航组件接线和布局规则。

## 路由与交互验收

| 分组 | 操作 | 结果 |
|---|---|---|
| 综合解决方案 | `/solutions/non-performing-assets/` → 点击 `AI法律案件拓展与工作流解决方案` | URL 切换到 `/solutions/legal-ai/`，当前项同步高亮并输出 `aria-current="page"` |
| 产品专项解决方案 | 从综合页点击 `产品专项解决方案` | URL 切换到 `/solutions/products/sales-in/`，`Sales in` 同步高亮 |
| 产品专项解决方案 | `Sales in` → 点击 `Social Grow` | URL 切换到 `/solutions/products/social-grow/`，当前项同步高亮并输出 `aria-current="page"` |

浏览器计算样式均为：背景 `rgb(234, 242, 255)`、文字 `rgb(35, 95, 196)`、圆角 `8px`、内边距 `8px 12px`。

### 公共组件逐路由回归（2026-07-22）

以下 10 个路由均实测：`nav.solution-tabs` 数量为 1、导航高度 124px、当前 Tab 到导航底边 12px、首个大模块紧接导航边界、`aria-current="page"` 正确、横向溢出为 0：

- `/solutions/ai-overseas/`
- `/solutions/non-performing-assets/`
- `/solutions/legal-ai/`
- `/solutions/products/sales-in/`
- `/solutions/products/social-grow/`
- `/solutions/products/mine-geo/`
- `/solutions/products/ai-acquisition-harness/`
- `/solutions/products/recov-ai/`
- `/solutions/products/deepdoc/`
- `/solutions/products/deeplaw/`

实际点击回归：`DeepLaw → 综合解决方案 → AI出海获客与合规解决方案 → 产品专项解决方案 → Social Grow`，每一步 URL、一级分组高亮与二级当前项同步更新。

## 同视口证据

- 综合方案本地截图：`solution-tabs-active-comprehensive-1790.png`（1790 × 1248 px，SHA-256 `199acfbcaddc11b4e7f6010366028e9c365f2df31c573290d14dae4c56dbc0ae`）
- 产品专项本地截图：`solution-tabs-active-product-1790.png`（1790 × 1248 px，SHA-256 `ff8433266de97ebf7e6683059ed7cf2f527bb0d165ca3cc7a90aefd2a79484ac`）
- 公共组件收口后综合方案截图：`shared-tabs-ai-overseas-1790.png`（1790 × 1248 px，SHA-256 `be4d4aae0318485d652c35935a87e870d67a0eb892fe52657e59f4885bf449c6`）
- 公共组件收口后产品专项截图：`shared-tabs-social-grow-1790.png`（1790 × 1248 px，SHA-256 `8a4b09a575924d6544d52deba20558d6d076562d4f060fad85063aad172d83e4`）

## 冻结资产复核

本次未修改公共 Header、Footer、Logo、`BookingModal`、`BookingTrigger`。复核 SHA-256：

| 资产 | SHA-256 |
|---|---|
| `components/site-header.tsx` | `00a8a2bb1d30db5e77a6abf5825e95497d907d7c9356506f9feac9c5ec35ef76` |
| `components/site-footer.tsx` | `7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb` |
| `components/logo.tsx` | `badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11` |
| `components/booking-modal.tsx` | `19c0a05920c86403b5f33ea5e5261abd6c464d2405cab54d1ef3d9faf42ebd7c` |
| `components/booking-trigger.tsx` | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` |
