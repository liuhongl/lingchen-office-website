"use client";

import { ArrowRight, CheckCircle2, Grid2X2, Info, Search, ShieldCheck, Users } from "lucide-react";
import { BookingTrigger } from "@/components/booking-trigger";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SolutionTabs } from "@/components/solution-tabs";

const pains = [
  ["入口 · 被看见", "AI 答案时代的隐身状态", "客户决策入口正从搜索结果页迁移到 AI 答案与社媒内容。品牌若不在 AI 推荐与公域内容中出现，就在客户看到你之前被竞品悄悄替代，根本进不了选型清单；而 AI 答案跨平台分散、变化快，人工试问无法形成稳定、可复现的判断。"],
  ["线索 · 被发现", "冷名单多但有效性极低", "名单虽多但背景不详，客户决策链、近期动态分散在海外官网、新闻、招聘等，人工调研不仅慢、而且深度不一；销售时间被无效客户消耗，销冠获客打法多留在脑子里、新人难以复制。"],
  ["转化 · 被触达", "跨时区触达断点与商机流失", "人工外呼/写信效率低、夜间与节假日无人响应、话术不统一；邮件/短信千篇一律群发，打扰多、转化低、退订高；系统只记录「是否拨通」，客户真实异议一盘散沙，商机 24 小时漏接。"],
  ["履约 · 被兑现", "跨境单证合规风控高压", "跨境成交涉及信用证、发票、提单等数十种单证，结构复杂、版式多变；人工审单慢（熟手约 7 笔/天）、标准不一，一个空格或一处不符即可能被拒付，资金与品牌声誉受损，且合格审单员需约 3 年培养。"],
];

const agents = [
  [Search, "① 让客户主动找到你 (Inbound)", "Mine GEO · 品牌生成式引擎优化与获客", "Mine GEO 守住 AI 答案入口、Social Grow 以专业内容与数字人持续孵化公域流量，建立品牌认知与高意向获客入口。"],
  [Users, "② 让你主动赢得客户 (Outbound)", "Sales in · 出海获客智能体", "Sales in 以 ICP 精准发现并评分高潜客户、AI 获客 Harness 用语音 / 邮件 / 短信千人千面主动触达与转化。"],
  [CheckCircle2, "③ 把订单稳稳落地 (Fulfillment)", "跨境单证智能审核", "跨境单证智能审核以 UCP600 / ISBP 规则自动审单，保障成交后的合规履约与资金安全，守护出海品牌声誉。"],
];

const details = [
  ["3.1", "Mine GEO · 品牌生成式引擎优化与获客", "面向 AI 答案入口的品牌智能治理与获客——让品牌「被 AI 看见、被正确理解、被推荐」", "流量入口正从搜索结果页迁移到 AI 答案，品牌在 AI 推荐中的可见度成为增长新命门。", "GEO 审计诊断、结构化知识库治理、AI 内容创作中心：创作、权威分发、生命周期监控。", "把「被 AI 推荐」从偶然现象，升级为可观测、可治理、可优化的获客增长资产。", ["↑ AI 推荐率", "↑ 品牌提及率与 Top3 占比", "↓ 错误与负向回答占比"]],
  ["3.2", "Social Grow · 专业知识内容 AI 生产与全域分发", "让每位专业人士都拥有「内容 AI 分身」与「7×24 不间断的流量孵化器」", "专业内容面临「生产壁垒高、复用率低、出镜成本高、分发靠人海」四大痛点。", "热点雷达、知识库管理（专业级 RAG）、创作工坊、视频工坊、发布矩阵、数据面板。", "不是「文案助手」或「剪辑软件」，而是写—录—编—投—复盘全链路自动化的「数字运营官」。", ["单条生产周期 -70%~-90%", "出镜成本 降至 0", "1 人维护 10~30+ 账号"]],
  ["3.3", "Sales in · 出海获客智能体", "出海企业的 AI 销售 Harness——把获客到成交推进的每一步都变得可衡量、可复制", "名单多但有效性低，销售调研耗时，难以在黄金 24 小时内建立有效触达。", "ICP 建模、线索发现与评分、客户洞察、个性化触达、集成回写。", "从「生成内容」升级为「运营销售流程」，让销售更聚焦于与高潜客户的深入谈判。", ["7×24 跨时区获客", "调研分钟级成稿", "线索更准、更可解释"]],
  ["3.4", "AI 获客 Harness · 全场景主动触达转化", "语音 + 邮件 + 短信三大子系统协同的主动获客矩阵——从「机械群发」到「千人千面」", "人工外呼/写信成本高，夜间无人响应，话术不统一，退订率高，流转断。", "数智语音交互、智能自适应邮件、场景化短信/提醒、NLP 语义反馈+意图识别、多渠道级联触达。", "从「机械群发、照本宣科」跃迁到「千人千面、自适应交互」，商机无缝不漏接。", ["触达 / 作业效率 +500%", "综合成本降至 40%~60%", "语义派单效率 >10 倍"]],
  ["3.5", "跨境单证智能审核 · 合规履约与风控", "新一代跨境单证智能审核——构建会思考、会进化的国际单证智能审核大脑", "跨境成交涉及复杂单证，人工审单慢、培养难，不符点拒付风险高，声誉承压。", "大模型 + OCR 双引擎、知识工程、四维审核体系、零样本/少样本抽取、自然语言配置规则。", "从「执行规则」到「具备认知」的范式革命，大幅降低贸易拒付风险，保障安全。", ["处理效率提升 5~6 倍", "关键信息准确率 99%+", "审单员培养 36 月 缩短至 1 月"]],
];

const metrics = [["500%+", "触达 / 作业效率提升"], ["40%~60%", "综合通联/作业成本降至"], ["90%+", "单证关键信息审核准确率"], ["36月缩短至1月", "审单人才培养周期缩短"], ["7×24小时", "跨时区获客与履约不漏接"]];

function SectionTitle({ no, children }: { no: string; children: React.ReactNode }) {
  return <h2 className="overseas-title"><b>{no}</b><span>{children}</span></h2>;
}

export default function AiOverseasSolutionPage() {
  return <>
    <SiteHeader />
    <SolutionTabs />
    <main className="overseas-page">
      <section className="overseas-hero"><div className="shell"><small><i />出海获客与合规 · 行业解决方案</small><h1>AI 出海获客<br /><span>全链路解决方案</span></h1><h3>五大 AI 智能体 · 一条增长闭环</h3><p>本方案以「出海企业如何在陌生市场持续、低成本地获取并赢得客户」为主线，从「被 AI 看见」到「成交履约」，让出海获客成为可经营、可衡量、可进化的增长资产。</p><BookingTrigger className="button">预约产品演示 <ArrowRight size={16} /></BookingTrigger></div></section>

      <section className="overseas-section"><div className="shell"><SectionTitle no="一、">出海获客之困：行业与企业面临的核心问题</SectionTitle><p className="overseas-lead">出海企业在陌生市场、跨时区运营、合规高压与本地化门槛之下，面临的是一个「入口 — 线索 — 转化 — 履约」环环相扣的系统工程：</p><div className="pain-grid">{pains.map((x,i)=><article key={x[0]}><b>0{i+1}</b><h3>{x[0]}</h3><strong>{x[1]}</strong><p>{x[2]}</p></article>)}</div><div className="overseas-ribbon">问题的本质：出海获客的本质，是把「入口被看见 → 线索被发现 → 客户被转化 → 成交被履约」这条断点重重的链路，重建为一条可经营、可衡量、可进化的增长闭环。</div></div></section>

      <section className="overseas-section overseas-soft"><div className="shell"><SectionTitle no="二、">解决方案全景：五大智能体，一条增长闭环</SectionTitle><p className="overseas-lead">灵宸智能以「统一知识中枢 + 数据飞轮」为底座，将五个 AI 智能体按获客链路首尾相连、各司其职，覆盖从品牌入口到成交履约的全过程。</p><div className="agent-overview">{agents.map(([Icon,tag,title,text])=><article key={String(title)}><Icon size={28}/><small>{String(tag)}</small><h3>{String(title)}</h3><p>{String(text)}</p></article>)}</div></div></section>

      <section className="overseas-section"><div className="shell"><SectionTitle no="三、">五大智能体逐一拆解：从不同角度解决问题</SectionTitle><div className="detail-list">{details.map(d=><article key={d[0] as string}><h3><small>{d[0] as string}</small>{d[1] as string}</h3><p className="detail-sub">{d[2] as string}</p><div className="detail-panels"><div><b>【解决痛点】</b><p>{d[3] as string}</p><b>【核心能力】</b><p>{d[4] as string}</p></div><div><b>【独特优势】</b><p>{d[5] as string}</p><b>【关键价值指标】</b><p className="metric-tags">{(d[6] as string[]).map(x=><span key={x}>{x}</span>)}</p></div></div></article>)}</div></div></section>

      <section className="overseas-section overseas-soft"><div className="shell"><SectionTitle no="四、">1 + 1 &gt; 2：五体协同如何实现乘数效应</SectionTitle><p className="overseas-lead">五个智能体单独使用，是五个高效的 AI 工具；联合使用，则因共享同一套知识资产、同一条数据回流与同一个转化漏斗，叠加为一套自我进化的出海获客增长系统。</p><div className="synergy-grid"><article><h3><small>4.1</small>统一知识中枢 + 数据飞轮：一份资产，全链路复利</h3><ul><li><b>知识一次沉淀，全链路复用：</b>同一份产品事实 / 客户案例，既喂 Social Grow 内容、又供 Mine GEO 被 AI 引用、还为 Sales in 洞察与 Harness 话术所用——录入一次，五处增值。</li><li><b>数据双向回流，越用越懂业务：</b>Mine GEO 监测到客户最常问 AI 的问题，反向用于 Social Grow 选题；Harness 的 NLP 反馈，回写优化客户画像。</li><li><b>统一口径，避免各说一套：</b>一套事实口径贯穿 AI 答案、公域内容、销售触达与单证规则，品牌表达高度一致、可治理。</li></ul></article><article><h3><small>4.2</small>被动获客 × 主动获客 × 成交履约：全链路品效合一</h3><ul><li><b>品牌共振放大转化：</b>被 Harness 主动触达的客户，若同时在 AI 答案（Mine GEO）与社媒（Social Grow）反复看到你，信任门槛大幅降低、回复与转化显著提升。</li><li><b>精准反哺内容与入口：</b>Sales in / Harness 沉淀的高价值真实异议，反向指导 Social Grow 创作，让内容与 AI 答案更打动目标客户。</li><li><b>从获客到履约不断点：</b>Harness 赢下的订单直接进入单证智能审核合规履约，避免成交后因单证拒付而前功尽弃，保护品牌声誉。</li></ul></article></div></div></section>

      <section className="overseas-section"><div className="shell"><SectionTitle no="五、">价值成果：问题被解决得如何</SectionTitle><div className="metrics-grid">{metrics.map(m=><article key={m[0]}><strong>{m[0] === "36月缩短至1月" ? <>36月缩<br />短至1月</> : m[0]}</strong><span>{m[1]}</span></article>)}</div><h3 className="compare-title">从「碰运气」到「可经营」：传统做法 VS 灵宸 AI 全链路</h3><div className="compare-table"><div className="compare-table__head"><b>环节</b><span>传统出海获客</span><strong>灵宸 AI 全链路</strong></div><div><b>找客户</b><span>碰运气找客户，冷名单靠人海堆砌，背景不详。</span><strong>ICP 精准发现，分钟级一站式客户深度调研，输出可解释优先级。</strong></div><div><b>做触达</b><span>群发照本宣科，退订率高；夜间/节假日商机流失。</span><strong>千人千面、多渠道级联自适应；7×24 智能应答，商机不漏接。</strong></div><div><b>管过程</b><span>凭感觉、靠个人经验；人员流动带走销售资产。</span><strong>数据驱动复盘，知识库统一治理，越用越懂业务、越用越准。</strong></div><div><b>保成交</b><span>人工审单慢（7笔/天）、标准不一、不符点风控弱。</span><strong>大模型+OCR 双引擎审单，效率提升 5~6 倍，准确率达 99%+。</strong></div></div></div></section>

      <section className="overseas-section overseas-soft"><div className="shell"><SectionTitle no="六、">关联产品矩阵与企业级可信底座</SectionTitle><div className="trust-grid"><article><h3><Grid2X2 size={20}/> 出海获客关联产品矩阵</h3>{["Mine GEO (品牌 GEO、被看见) | Social Grow (内容获客、被吸引)","Sales in (精准线索、被发现) | AI 获客 Harness (主动触达、被转化)","跨境单证智能审核 (合规履约、被兑现)"].map(x=><p key={x}><i />{x}</p>)}</article><article><h3><ShieldCheck size={20}/> 企业级可信底座（六维保障）</h3><div className="trust-cards"><p><b>数据安全与主权承诺</b><span>物理隔离，永不参与训练</span></p><p><b>严格的人机协同机制</b><span>全程留痕与可追溯</span></p><p><b>多维度系统集成</b><span>极速 POC 起步验证</span></p></div></article></div></div></section>

      <section className="overseas-section"><div className="shell"><SectionTitle no="七、">落地路径：先见效，再规模化</SectionTitle><div className="paths"><article><h3><b>路径一 ·</b>轻量 POC 验证（约 2~4 周）</h3>{[["场景梳理","选定 1 个高频、可衡量、数据可接入的获客或审单场景。"],["知识接入","导入资料、案例、FAQ，或构建初版 ICP 模型与审单规则。"],["小范围试点","真实业务运行，评估准确率，复核调试 Badcase。"],["效果评估","对照 3~5 个设定验收指标，判定业务与降本价值。"]].map((x,i)=><p key={x[0]}><b>{i+1}</b><span><strong>{x[0]}</strong>{x[1]}</span></p>)}</article><article><h3><b>路径二 ·</b>系统化推广（约 1~2 月）</h3>{[["系统集成","打通企业 CRM、邮箱、呼叫中心或知识库系统。"],["权限配置","按团队/部门分配账号，设定审批流和数据可访问边界。"],["灰度上线","部分人员日常灰度使用，逐步替代重复人工作业。"],["规模运营","全场景、多团队、多品牌全链路持续赋能与自动进化。"]].map((x,i)=><p key={x[0]}><b>{i+1}</b><span><strong>{x[0]}</strong>{x[1]}</span></p>)}</article></div><div className="next-step-note"><Info size={20}/><p><b>下一步建议：</b><span>选定一个高频业务场景 + 3~5 个验收指标，快速启动 POC——先见效，再规模化，让出海获客成为可持续增长的核心能力。</span></p></div></div></section>

      <section className="overseas-cta"><div className="shell"><h2>启动您的 AI 智能体出海获客增长系统</h2><p>先见效，再规模化。一站式打通海外品牌治理、高潜名单、千人千面通联和合规成交，让出海获客可经营、可衡量、可进化。</p><BookingTrigger>预约落地路径商谈 <ArrowRight size={17}/></BookingTrigger></div></section>
    </main>
    <SiteFooter />
  </>;
}
