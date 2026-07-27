# 产品矩阵浏览器批注第十批（2026-07-27）

## 范围与真源

- 页面：`/products/deepdoc/`
- 目标视口：桌面端 `1576×1258`；移动端未纳入当前官网范围。
- 内容真源：当前 DeepDoc 原型与现有页面文案；本轮不修改任何可见文案。
- 视觉真源：用户本轮浏览器批注、带选区截图、当前官网冻结公共设计系统。
- 用户覆盖：取消 Footer 后用于补齐旧 MasterGo 根画板总高的浅灰尾部留白。
- 允许修改：DeepDoc 页面专属 `.deepdoc-tail` 结构与样式。
- 冻结资产：公共 Header、Footer、Logo、ProductBreadcrumb、BookingModal、BookingTrigger、布局均不修改。

## 修改前计算证据

| 元素 | `1576×1258` 运行态 | 状态 |
|---|---|---|
| `.deepdoc-page main` | `6802.97px`，bottom `6868.97px` | BASELINE |
| `.site-footer` | `368px`，top `6868.97px`，bottom `7236.97px` | BASELINE |
| `.deepdoc-tail` | `520px`，top `7236.97px`，bottom `7756.97px` | FAIL |
| 文档高度 | `7757px` | BASELINE |

- 修改前截图：`output/playwright/browser-comments-round10-2026-07-27/01-deepdoc-tail-before-1576x1258.png`
- 根因：`app/products/deepdoc/page.tsx` 在公共 Footer 后渲染 `.deepdoc-tail`，`app/globals.css` 为其设置固定 `height:520px`。

## 成功标准

- Footer 成为页面最后一个可见模块，Footer 后不存在页面专属占位。
- 页面总高准确减少 `520px`，主体与 Footer 的边界保持不变。
- 不修改公共 Footer；无横向溢出、破图和浏览器 error。
- 文案节点数量与内容不变。

## 修改后验收

| 元素 | `1576×1258` 运行态 | 状态 |
|---|---|---|
| `.deepdoc-page main` | `6802.97px`，bottom `6868.97px`，与修改前一致 | PASS |
| `.site-footer` | `368px`，top `6868.97px`，bottom `7236.97px`，与修改前一致 | PASS |
| `.deepdoc-tail` | DOM 数量 `0` | PASS |
| 文档高度 | `7237px`，准确减少 `520px`；Footer bottom 与文档 bottom 一致 | PASS |

- 修改后截图：`output/playwright/browser-comments-round10-2026-07-27/02-deepdoc-footer-after-1576x1258.png`
- 横向溢出 `0`、破图 `0`、唯一 H1、浏览器 error 日志 `0`。
- 主体与 Footer 文案未修改；删除的节点原本为 `aria-hidden="true"` 且无文本。
- 发布前复验 Header 与面包屑两个预约入口：均打开唯一公共 BookingModal，滚动锁定与焦点进入 PASS；Escape 关闭后焦点分别恢复到原触发按钮。
- 构建后当前 `127.0.0.1:3000/products/deepdoc/` 返回 HTTP `200`，监听进程目录为当前项目。
- 工程门禁：`pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check` 全部 PASS。
- 页面证据门禁：`pnpm mastergo:check deepdoc` PASS。
- 冻结资产交付 SHA-256：`SiteHeader=5aef1bd27e0a0a57ffdc65dbb80df4ab5cc30aa2c17b1283f3791a17da345bfa`；`SiteFooter=8732972918addddddbbcbec095ff0b2b7c34797ea74522bf019427956ceae2ae`；`LogoComponent=badc568e402a6faa849022806329283acd678e333cc0ce892296220abf8fdf11`；`LogoImage=4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85`；`BookingModal=3e143bc70f5cc270231d3961ff5eb1b92481be637c55bcbc36269cfedbb32206`；`BookingTrigger=cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7`；`ProductBreadcrumb=0f86c6e22a1a960cdf12deed1b61b13356acfa9c4a3c412510eb10d26241eb8f`；`Layout=729e233f1bc80bdd025ef9baf2cb5b8cf21cd0b8a141b99803fee32fa62f71c8`；均未被本批修改。
- 当前完成等级：已视觉校准；本轮为用户覆盖，不新增 MasterGo `1:1` 声明。移动端不在范围。
