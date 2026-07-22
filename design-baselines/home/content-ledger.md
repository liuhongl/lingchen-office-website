# 首页逐字文案台账

> MasterGo `6:2027` 100% 分区证据与页面实际渲染字符串已完成全页复核。相邻 `span/strong` 拆分仍按一个可见句子核对。

| 文本 ID | 区块 | 节点范围 | MasterGo 原文证据 | 实现位置 | 渲染核对 |
|---|---|---|---|---|---|
| H-001–H-009 | Header / Hero | 导航、眉题、主标题、双产品说明、双使命、双 CTA | 首页 100% Hero 基线 | `components/site-header.tsx`、`app/page.tsx` | PASS |
| H-010–H-024 | Problems | 标题、导语、四类问题、两张业务方向卡及要点 | `target-problems` | `app/page.tsx` | PASS |
| H-025–H-040 | Value | 理念标题/说明、四组指标标题/正文、三项 ribbon | `target-value-title`、`target-ribbon` | `app/page.tsx` | PASS |
| H-041–H-060 | Agent OS | 标题/说明、中心节点、01–06 编号/标题/标签、三张定位卡 | `target-agent-node`、MasterGo 全画板 | `app/page.tsx` | PASS |
| H-084–H-089 | Agent OS 节点说明 | 01–06 节点说明文字 | Google AI Studio 交互原型，2026-07-23 从预览 iframe `<main>` 提取 | `app/page.tsx` | PASS |
| H-061–H-064 | CTA | 标题、说明、按钮 | MasterGo 全画板 | `app/page.tsx` | PASS |
| H-065–H-083 | Footer | 三列标题、全部链接/联系信息、版权与备案 | Header/Footer 公共基线 | `components/site-footer.tsx` | PASS |

## 长文案核对

- Problems 导语及四条问题正文：首句、末句、句数和标点与设计基线一致。
- 两张业务方向卡、四张价值卡及三张定位卡：未发现增字、漏句或语义补写。
- 渐变标题和局部加粗只拆 DOM，不改变可见原文。

## 用户确认覆盖

- 2026-07-21：Agent OS 01 节点标题使用“ICP模型构建”。
- 2026-07-21：愿景强调文案使用“与企业共赴AI生产力时代，为您的商业结果服务。”。
- 2026-07-23：按用户要求补齐交互原型中的 Agent OS 六个节点说明：
  - H-084：目标客户或逾期群体千人千面AI画像
  - H-085：大模型思维链(CoT)流转决策
  - H-086：业务策略与个性化话术沉淀
  - H-087：原因结构化自动归档诊断
  - H-088：持续反思与递归进化，越来越懂您的业务。
  - H-089：完成意向线索挖掘或逾期资产回款

## 门禁结论

- 覆盖：原 MasterGo 全页可见文本节点；本轮新增 H-084–H-089 已与浏览器实际渲染逐字复核
- 增字 / 漏句 / 误录：0
- 结论：PASS
