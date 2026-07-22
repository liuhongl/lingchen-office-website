# 联系我们页最终验收记录

## 基本信息

- 页面：联系我们
- MasterGo `page_id` / `layer_id`：`M` / `6:05`
- 本地地址：`http://127.0.0.1:3000/contact/`
- 验收视口：1440 × 900
- 验收日期：2026-07-22

## 分区验收

| 区块 | 内容台账 | MasterGo 基线 | 本地截图 | 对比图 | 内容结论 | 视觉结论 |
|---|---|---|---|---|---|---|
| 01 Hero | T-001–T-002 | `01-top-mastergo-100.png` | `01-top-local.png` | `01-top-comparison.png` | PASS | PASS；强调线按用户确认移至 H1 下方并改为两端淡出的蓝青渐变 |
| 02 表单 | T-003–T-026 | `02-form-mastergo-100.png` | `02-form-local.png` | `02-form-comparison.png` | PASS | PASS；边界、输入、产品项、文本域、按钮已逐项核对 |
| 03 联系卡片 | T-027–T-032 | `03-contact-footer-mastergo-100.png` | `03-contact-footer-local.png` | `03-contact-footer-comparison.png` | PASS | PASS；卡片 160px 高、Footer 前 37px 间距已校准 |
| 04 公共头尾 | 冻结公共文案 | 同上 | 同上 | 同上 | PASS | 用户要求冻结复用；设计差异按授权例外保留 |

## 全页回归

- [x] 32 个设计文本节点及 3 个用户授权接口状态文本均有证据和代码位置。
- [x] 没有概括、缩写、润色、补写、漏句或误录；`Kine CEO`、`DeepLan` 按设计原文保留。
- [x] 用户确认的内联表单例外已记录。
- [x] 公共 Header/Footer 未被页面级样式覆盖。
- [x] 三个区块均有 1440 × 900 本地截图和并排对比图。
- [x] `scrollWidth === clientWidth`：1440 === 1440。
- [x] 页面使用 CSS Module，未污染共享样式。
- [x] SiteFooter、BookingTrigger 哈希与开工值一致；SiteHeader、BookingModal 的授权变化和交付哈希已记录在 `scope.md`。
- [x] 3 个联系方式图标来自 MasterGo 原始图层 3× PNG；勾选与箭头来自原始 SVG。
- [x] 位图已按 144 × 144 原尺寸单独检查，并固定以 48 × 48 渲染。
- [x] 页面仅使用项目已加载字体与明确字重。
- [x] 浅色背景、输入背景、边框、按钮色与阴影已在局部对比中核对。
- [x] 内联表单为用户授权例外；两套表单均通过共享请求封装提交后台。
- [x] 两套表单字段实测一致：姓名、公司、职位 / 部门、手机、邮箱、产品、需求描述；职位 / 部门可留空，其余 5 个文本字段必填。
- [x] 两套表单手机号均仅接受 `1[3-9]` 开头的 11 位号码，邮箱均使用浏览器 `email` 格式校验。
- [x] 两套表单产品值共用 `contactProducts`；公共弹窗切换产品前后全部按钮宽度、横纵坐标与换行位置保持一致。
- [x] 两套表单统一调用 `lib/contact-us.ts`，以 `POST /system/contact-us` 发送 `name`、`company`、`phone`、`demand`；职位、邮箱、产品和需求描述使用同一 `buildContactDemand` 规则写入 `demand`。
- [x] 两套表单均有同步请求锁与提交按钮禁用态，请求完成前的重复提交会被忽略。
- [x] 未用测试数据真实提交后台，避免产生留言脏数据；重复请求拦截以代码路径、类型检查和浏览器禁用态回归验证。
- [x] `https://lingchen-ai.com/system/contact-us` 已用无数据的 HEAD 请求验证，返回 `HTTP 200`；真实 POST 留待用户数据提交时验证。

## 工程验证

| 命令 | 结果 | 备注 |
|---|---|---|
| `pnpm lint` | PASS | ESLint 零错误 |
| `pnpm exec tsc --noEmit` | PASS | 零类型错误 |
| `pnpm build` | PASS | `/contact` 静态预渲染成功 |
| `git diff --check` | PASS | 无空白错误 |
| `pnpm mastergo:check contact` | PASS | MasterGo 证据门禁通过 |

## SEO / GEO 验收

- [x] 独立 title、description、自指 canonical、唯一 h1 和标题层级已核对。
- [x] sitemap、robots 与服务端 HTML 已核对。
- [x] 可见实体与联系方式均来自 MasterGo 或冻结公共资产。
- [x] 本地实现与线上抓取、索引、生成式答案抽样状态已分开记录。

## 保留差异与线上项

- 公共 Header/Footer 与本画板存在差异，但依用户“公共头尾冻结”要求不改动，且哈希保持一致。
- 公共 Header 的“联系我们”已按用户授权改为 `/contact/`，并支持当前页高亮。
- 移动端无 MasterGo 基线，本次只做安全响应式适配，不宣称移动端视觉校准。
- 线上抓取、索引和 GEO 抽样需发布后执行。

## 完成等级

- [x] 已实现
- [x] 已视觉校准
- [ ] 1:1 验证通过

结论：主体区块内容与视觉已校准；公共头尾按用户确认的冻结例外复用，因此不使用“整页 1:1”表述。
