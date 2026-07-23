# 联系我们页最终验收记录

## 基本信息

- 页面：联系我们
- 内容真源：用户指定的 Google AI Studio 原型（浏览器实际渲染，2026-07-23）
- 视觉真源：既有 MasterGo 联系页样式与冻结公共组件
- 本地地址：`http://127.0.0.1:3000/contact/`
- 验收视口：1440 × 900
- 移动端：未纳入当前官网范围

## 本轮内容差异与处理

- Hero 改为原型 H1“灵宸AI Agent OS，为您的商业结果服务”和原型说明。
- 删除原型不存在的“提交合作意向”“请填写以下信息，我们将尽快与您联系”。
- 两套表单共用 `contactFormCopy` 与 `contactProducts`，同步标签、示例占位符、产品名、产品说明、需求描述和提交按钮。
- 产品名纠正为 `Sales in`、`Mine GEO`、`DeepLaw`，并逐项替换为原型完整说明。
- 必填可见语义同步为姓名、公司、职位/部门、手机必填；邮箱和需求描述可选。
- 联系我们页补齐“灵宸智能公司总部：”，并按原型改为地址、电话、邮箱及对应值。
- BookingModal 自身标题与说明属于弹窗容器语境，按范围保留；公共 Header/Footer 文案未纳入本轮同步且保持冻结。

## 浏览器内容审计

- 原型：在 AI Studio iframe 中点击“联系我们”后读取实际渲染文本。
- 联系我们页：37 项原型可见文本与占位符逐项检查，结果 `missing=[]`。
- 旧实现额外/错误文本检查：`提交合作意向`、旧说明、`Sales In`、`Kine CEO`、`DeepLan`、旧地址、旧邮箱均未在主内容渲染，结果 `oldExtra=[]`。
- 公共弹窗：五组字段、七个产品名、产品标签、需求标签/占位符和提交按钮均与共享原型文案一致。
- DOM 必填属性：姓名、公司、职位/部门、手机为 `required=true`；邮箱、需求描述为 `required=false`，两套表单一致。
- 页面横向溢出：`scrollWidth === clientWidth`（1265 === 1265 的内置浏览器实测）。
- 未提交测试数据，未向 `/system/contact-us` 发送 POST。

## 视觉与交互验收

| 对象 | 证据 | 结论 |
|---|---|---|
| 联系页首屏 | `output/playwright/release-2026-07-23/contact-top-1440x900.png` | PASS；1440 × 900，字段标签、双列输入和长产品文案无重叠 |
| 联系页下半区 | `output/playwright/release-2026-07-23/contact-bottom-1440x900.png` | PASS；表单按钮、总部标题、三张联系方式卡片与 Footer 衔接正常 |
| 公共 BookingModal | `output/playwright/release-2026-07-23/booking-modal-1440x900.png` | PASS；1440 × 900，字段与七个产品项完整显示，无裁切或溢出 |

- 公共弹窗 DeepLaw 选项切换后 `aria-pressed=true`，按钮宽高切换前后保持一致。
- Escape 和关闭按钮可关闭弹窗；遮罩关闭未作为本轮文案变更的完成依据。
- 本轮视觉验收针对内容变化后的桌面布局，不宣称原型视觉 1:1；视觉继续沿用 MasterGo/现有官网语言。

## 工程验证

| 命令 | 结果 |
|---|---|
| `pnpm lint` | PASS |
| `pnpm exec tsc --noEmit` | PASS |
| `pnpm build` | PASS；`/contact` 静态预渲染成功 |
| `git diff --check` | PASS |
| `pnpm mastergo:check contact` | PASS；完成等级按“内容完整迁移 + 已登记用户覆盖的视觉校准”通过 |

## 完成等级

- [x] 内容完整迁移通过
- [x] 已视觉校准
- [ ] 1:1 验证通过

说明：文案审计与桌面内容变化视觉复验均为 PASS；原型是内容真源而不是视觉真源，因此不勾选原型视觉 1:1。视觉按 `scope.md` 中用户确认的内容/视觉真源覆盖执行。
