# 8 页解决方案批次公共资产冻结台账

- 冻结日期：2026-07-21
- 用户确认：当前对话明确回复“接受”，同意以回复时工作区的当前公共组件作为 8 页统一冻结基线。
- 适用范围：`non-performing-assets`、`sales-in-solution`、`social-grow-solution`、`mine-geo-solution`、`ai-acquisition-harness-solution`、`recov-ai-solution`、`deepdoc-solution`、`deeplaw-solution`。
- 规则：页面只允许通过路由驱动导航 / 产品 Tab 高亮；禁止页面级覆盖、复制或修改下列公共资产。交付时必须重新计算哈希，任一变化均失败，除非用户再次明确授权。

## 文件冻结基线

| 资产 | 文件 | SHA-256 | 允许变化 |
|---|---|---|---|
| Header | `components/site-header.tsx` | `2f0fbe8ad48667cb80e2c23026d27fc6f505b2cdfd7ce3496da22d9694a4a73d` | 仅路由状态驱动高亮，不修改文件 |
| Footer | `components/site-footer.tsx` | `7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb` | 无 |
| BookingModal | `components/booking-modal.tsx` | `d7e294bd0d6384412725da78ec27fb9035341cf42ec4715e5a5f66810e387b31` | 无 |
| BookingTrigger | `components/booking-trigger.tsx` | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 无 |
| Logo | `public/images/lingchen-logo.png` | `4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85` | 无 |

## 1440px 运行态截图

| 资产 | 截图 | SHA-256 | 状态 |
|---|---|---|---|
| Header | `header-frozen-1440.png` | `afb2ca7b69cc0bc7b29562409aa5da429a3414da93b7f8a37782c1ce43ad7f80` | PASS |
| Footer | `footer-frozen-1440.png` | `395b4b2d52d5b6855d79724599d6dbc638329d626715b1e17c7d71750a4726ee` | PASS |
| BookingModal | `booking-modal-frozen-1440.png` | `ff4d28ba3cc2b5f2880931355c43d644ccb9777e4c435cda085c2431425966fe` | PASS |

## 说明

- 用户确认前，`BookingModal` 在共享工作区由另一会话更新；本台账没有回退用户或其他会话改动，而是以用户回复“接受”时读取到的最新现场文件 `d7e294...` 为准。
- 页面专项设计稿中的旧 Header / Footer 与本冻结版本冲突时，以本台账为准，并在各页同视口对比中把公共差异单独记录；不得反向修改公共组件。
- 当前浏览器控制台仅存在项目已有 `/favicon.ico` 404，不属于公共组件视觉或交互失败。

## 交付复核（2026-07-21）

| 资产 | 交付 SHA-256 | 与本批次关系 |
|---|---|---|
| Header | `00a8a2bb1d30db5e77a6abf5825e95497d907d7c9356506f9feac9c5ec35ef76` | 哈希变化来自已记录的 Contact 页面任务；8 个解决方案页未修改 Header |
| Footer | `7f609bb217fc41e8add53c6bbee79836e7b621f9ad813643d0b77de79f762fdb` | 与冻结基线一致 |
| BookingModal | `c606ca6d3040962ccf1a6b15db4c0003423c6466c395cf92864021a4804a0efe` | 哈希变化来自已记录的 Contact 页面任务；8 个解决方案页未修改弹窗 |
| BookingTrigger | `cf6bfae2e7035ac9fe65819ab15dd5ab0eed4e2cd18aee2bd3d652d28bc4fad7` | 与冻结基线一致 |
| Logo | `4bdd8b355f0ce60b25fa4ce128a2f9bb2b13a636dd1c4a7f3a54a2003f0b0c85` | 与冻结基线一致 |

- 解决方案页面只通过路由状态驱动公共导航和专项 Tab 高亮，没有页面级 CSS 覆盖公共 Header/Footer。

## 2026-07-24 公共 Footer 用户授权更新

- 用户明确授权范围：产品方案七个产品的名称、顺序和对应链接；资源中心新增“解决方案”入口；联系邮箱更新为 `jason@alshinelaw.com`。
- 修改前 Footer SHA-256：`cb2b70d580ef03b0318c2b9ba77693e8ad87d1d54242c3e37ca19b9b2c7148eb`。
- 修改后 Footer SHA-256：`8732972918addddddbbcbec095ff0b2b7c34797ea74522bf019427956ceae2ae`。
- 运行态证据：`output/playwright/home-feedback-2026-07-24/04-footer-after.png`、`06-contact-email-after.png`。
- 七个产品、解决方案、客户案例、研究院和联系页目标路由均在本地返回 HTTP 200。
- 本轮未修改公共 Footer 的 DOM 列结构、CSS、Logo、版权或备案信息。
- 同次冻结复核：Header `2c033c...`、Logo 组件 `badc568...`、Logo 图片 `4bdd8b...`、BookingModal `3e143b...` 均与开工哈希一致。
