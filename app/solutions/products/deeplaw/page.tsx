import Image from "next/image";
import { BookingTrigger } from "@/components/booking-trigger";

const icon = (name: number) => `/images/solutions/deeplaw/icon-${name}.svg`;

const pains = [
  ["SECTION 01", "案源之压", "双向找不到对的人", "专业能力难以被客观识别，优质案源仍高度依赖人情链路与运气；当事人也难以判断律师的真实专业性与战力，往往凭熟人推荐盲选。", 14],
  ["SECTION 02", "转化之压", "获客越来越贵", "缺乏体系化的获客方式与渠道，公域线索分散、内容生产高消耗、初筛慢、跟进断，获客成本持续上升，接案靠运气。", 15],
  ["SECTION 03", "承办之压", "交付依赖人海", "复杂卷宗、冗长合同、地方裁判尺度与各类文书，要求大量重复性的文字工作、检索与复核，挤压了真正用于策略判断与案源拓展的时间。", 16],
  ["SECTION 04", "知识之压", "经验难沉淀与曝光", "真正宝贵的案例、思考与实务笔记常常分散、不可检索、不可收录，难以转化为可被潜在客户看见的专业度、经验值与曝光率。", 17],
  ["SECTION 05", "AI可见之压", "偶然被推荐", "越来越多当事人直接向 AI 提问「哪位律师更合适」，而律师 / 律所品牌在 AI 答案中往往只能偶然被引用、偶然被推荐，缺乏可诊断、可治理、可优化的机制。", 18],
] as const;

const modules = [
  ["智能律师广场", "把熟人推荐/广告承诺升级为可解释的人工智能算法专业匹配与三维战力画像", 20],
  ["律师智能获客云", "把分散流量收拢成从发现到面谈的闭环增长体系，抢单、回访反馈线索质量", 21],
  ["法律智能工作流", "材料接入 → 结构化建模 → 风险研判 → 文书初稿 → 复核校验一体化", 22],
  ["法律人知识库", "法规、案例、文书与团队经验统一治理，一次沉淀，既服务承办也反哺获客", 23],
  ["深律法学院", "调用案例与办案心得，把专业内容沉淀为个人品牌与高价值案源之间的信任路径", 24],
] as const;

const agents = [
  {
    label: "内容 IP 获客引擎", title: "3.2 Social Grow", icon: 25,
    position: "产品定位：专业知识内容 AI 生产与全域分发 Agent。把本地专业知识（法条、案例、白皮书、录音等）一键转化为可发布的图文与数字人短视频，并分发到抖音、小红书、视频号、微博、头条等全网平台。",
    items: ["热点雷达：多平台热点实时聚合，一键转为创作草稿", "知识库管理（专业级 RAG）：从物理上压住大模型幻觉，保障法律准确与合规", "创作与视频工坊：爆款文案精排与数字人+声音克隆，出镜成本趋近于零", "发布矩阵与数据面板：1 名运营维护数十账号，曝光/阅读受众喜好精准追踪"],
    metrics: ["专业护城河 | 极致人力杠杆", "生产周期 -70%~-90%"], tone: "cyan",
  },
  {
    label: "AI 答案入口治理", title: "3.3 Mine GEO", icon: 26,
    position: "产品定位：品牌生成式引擎优化与获客 AI Agent。帮助律师 / 律所持续管理品牌在 AI 搜索、AI 聊天与生成式答案中的可见度、推荐率与情感倾向。",
    items: ["诊断：全天候持续监测 AI 可见度、推荐率、推荐排名与引用来源", "治理：将案例、FAQ与事实沉淀为结构化知识库，统一品牌事实口径", "创作：围绕提问意图与引用逻辑，生成最契合 RAG 偏好的评测与白皮书", "分发与监控：精准推送到维基、媒体与问答页；拦截并抢单防御"],
    metrics: ["抢占大模型决策入口", "统一事实口径 / 降低错漏"], tone: "purple",
  },
  {
    label: "主动触达与转化", title: "3.4 AI 销售获客 Harness", icon: 27,
    position: "产品定位：全场景销售 AI 获客 Harness。以 AI 语音外呼/呼入、自适应邮件/文本、场景化动态短信三大子系统组成「获客矩阵」，把被动、重复的人工作业升级为全自动、全天候、高并发、高情商的主动式获客。",
    items: ["数智语音交互：7×24 智能呼入分流，自适应心理模型话术与大模型录音打分", "智能自适应邮件/文本：直连 CRM，自动生成千人千面开发信，提供全链路看板", "场景化短信/提醒：上下文感知动态模板 + 最佳时机算法 + 智能防刷", "技术底座：NLP 语义反馈分析与意图识别，意向明确，支持真人律师无缝极速接单"],
    metrics: ["高情商拟真 / 多渠道级联", "通联成本仅为传统 40%~60%"], tone: "orange",
  },
  {
    label: "承办风控与工作流", title: "3.5 合同智能审查 Agent", icon: 28,
    position: "产品定位：AI 合同风控官 / AI 律师 / 专属审核智能体。融合法律法规、司法案例与资深律师审查经验，独创合同审查思维链（CoT），让合同风险在签约前被看见、被解释、被修正。",
    items: ["抓取与理解：微信/PC聊天记录一键抓取，精准识别甲乙方立场与业务关注点", "智能审查：覆盖 100+ 类合同风险、5000+ 风险审查点，提供业务、法务、财务三维审查", "修订建议：生成批注、可直接替换文本与审查意见书，自动提示缺失条款", "协同留痕：版本管理、内部批注、导出分享，疑难条款一键转接真人律师"],
    metrics: ["10页合同审至分钟级", "审查效率 ↑ 约 90% | 解决率 95%"], tone: "red",
  },
] as const;

const synergy = [
  ["复用放大", "一份知识资产（产品事实 / 案例 / 销冠话术）被知识库、内容引擎、GEO、获客与承办反复复用，边际成本递减，边际价值递增。"],
  ["数据互哺", "GEO 的诊断告诉内容引擎「该写什么」，销售获客的 NLP 反馈告诉团队「客户真正关心什么」，承办沉淀的经验又让匹配与内容更专业，形成正反馈。"],
  ["信任贯通", "从「被 AI 看见」到「画像匹配」，再到「履约留痕」与「合同风控」，专业能力在同一张网络里被看见、被验证、被信任，缩短从陌生到委托的信任路径。"],
  ["体系替代偶然", "把偶发的人脉获客与人海办案，升级为可运营、可复盘、可体系化的稳定、可持续能力。"],
] as const;

const valueMetrics = [
  ["-70%~-90%", "内容生产周期缩短", 8, "blue"],
  ["40%~60%", "综合通联成本降至传统方式", 31, "orange"],
  ["约 90%", "合同审核效率提升，10页缩至分钟级", 37, "purple"],
  ["7×24", "商机无缝不漏接，不舍昼夜", 11, "red"],
] as const;

const valueGroups = [
  ["效率价值 / 成本价值", "成稿 / 成片 / 合同审阅 / 文书初稿从「天 / 小时」压缩到「分钟级」。AI 替代重复性人工坐席与跨部门流转，综合成本暴降，出镜成本趋于 0。", 31, "green"],
  ["业务价值 / 管理价值", "专业内容 + AI 推荐 + 主动触达，持续获取公私域高意向案源。流程标准化、知识资产沉淀、任务看板全程可视，人员流动不带走客户资产。", 33, "blue"],
  ["风险价值 / 技术价值", "RAG 知识边界 + 人工复核 + 律师合规兜底 + 全程留痕，显著降低事实硬伤。模块化嵌入 CRM / OA / ERP，能力随底层大模型迭代持续增强。", 32, "purple"],
] as const;

const plans = [
  ["RaaS (Result as a Service)", "按使用量付费，用多少、付费多少，适用于高频流量模式。", "saas"],
  ["案源拓展服务费", "按流量曝光、案源、线索付费，适用效果付费，利益百分之百同盟。", "pro"],
  ["私有化 / 本地化部署", "适配中大型律所、法律咨询公司与企业，业务数据永不出域、安全可控，深度集成。", "custom"],
  ["API / 算力包 / Skills", "对接 OA、CRM 系统，按调用量灵活付费，快速跑通。", "saas"],
] as const;

const trustItems = [
  "数据主权承诺：业务数据零污染，永不进入公共模型训练池，支持一键删除",
  "人机协同可控：全程行为留痕，关键节点由真人律师确认，高风险设限",
  "金融级加密架构：双层加密存储，物理级隔离，最小权限访问控制",
  "合规体系保障：严格遵循《数据安全法》《个人信息保护法》及行业监管要求",
  "全栈自主研发：符合国家网络安全等级保护标准，支持私有化/本地化",
  "服务与 SLA 承诺：专属客户成功团队 + 7×24 技术支持，明确 SLA 响应",
] as const;

function Heading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return <header className="dls-heading"><span>{eyebrow}</span><h2>{title}</h2><p>{intro}</p></header>;
}

export default function DeepLawSolutionPage() {
  return <main className="dls-page">
    <section className="dls-hero" aria-labelledby="dls-hero-title">
      <div className="dls-hero__copy">
        <span className="dls-hero__eyebrow">法律 AI · 行业解决方案</span>
        <h1 id="dls-hero-title">让案件拓展与办案，<br />成为<span>可运营、可复盘的能力</span></h1>
        <p>DeepLaw 法律 AI Agent 整合五大智能体，贯通「IP 打造 — 案源 — 转化 — 案件承办 — 知识管理 — 终身成长」全链路，做每位法律人的 “市场部 + 运营部 + 办案中心”。</p>
        <div className="dls-hero__actions"><BookingTrigger>预约演示 <Image src={icon(1)} alt="" width={14} height={14} /></BookingTrigger><a href="#deeplaw-agents">了解五大智能体 <Image src={icon(2)} alt="" width={14} height={14} /></a></div>
        <div className="dls-hero__features">{["全链路 同系统回流", "7×24 内容孵化案源", "分钟级合同审查", "越用越准 数据飞轮"].map((text)=><span key={text}><Image src={icon(42)} alt="" width={12} height={12}/>{text}</span>)}</div>
      </div>
      <div className="dls-orbit" aria-label="DeepLaw 法律 AI：获客、成长、内容、知识、转化、承办">
        <div className="dls-orbit__ring dls-orbit__ring--outer"/><div className="dls-orbit__ring dls-orbit__ring--inner"/>
        <div className="dls-orbit__center">DeepLaw<small>法律AI</small></div>
        {[["律师广场",7],["内容引擎",8],["AI 入口",9],["主动获客",11],["合同审查",10],["知识库",12]].map(([text,n],index)=><div className={`dls-orbit__node node-${index+1}`} key={String(text)}><Image src={icon(Number(n))} alt="" width={22} height={22}/><span>{text}</span></div>)}
      </div>
    </section>
    <section className="dls-pains" aria-labelledby="dls-pains-title">
      <Heading eyebrow="一、行业现状" title="律师与律所面临的核心问题" intro="案源竞争持续加剧，获客越来越贵。以下五个痛点并非孤立，而是在同一条业务链条上相互传导。" />
      <div className="dls-pains__grid">{pains.map(([section,title,subtitle,body,n])=><article key={section}><small>{section}</small><Image src={icon(n)} alt="" width={20} height={20}/><h3>{title}</h3><h4>{subtitle}</h4><p>{body}</p></article>)}</div>
      <div className="dls-pains__flow"><strong>传导关系</strong><span>案源不稳 → 转化靠运气 → 承办拖住时间 → 经验沉不下来 → AI 时代更难被看见，环环相扣，形成恶性循环。</span><b>破题的关键，是用一套系统把整条链路同时托起。</b></div>
    </section>
    <section className="dls-agents" id="deeplaw-agents" aria-labelledby="dls-agents-title">
      <Heading eyebrow="二、五大智能体" title="五大智能体：从不同角度系统化破解痛点" intro="五大智能体各自从一个独立角度切入，分别对应一类核心痛点；它们既可单独采用，也可组合落地。" />
      <article className="dls-main-agent"><h3>3.1 DeepLaw 法律 AI Agent</h3><strong>全链路底座</strong><p><b>产品定位：</b>法律 AI 智能化操作系统。对外是「市场部」，对内是贯穿承办、知识与成长的「运营部 + 办案中心」，由智能律师广场、律师 AI 获客云、法律 AI 工作流、法律人知识库、DeepLaw 法学院五大模块组成。</p><div>{modules.map(([title,body,n])=><section key={title}><Image src={icon(n)} alt="" width={20} height={20}/><h4>{title}</h4><p>{body}</p></section>)}</div><footer><b>独特价值：</b>全链路 · 可信履约 · 数据飞轮 —— 各模块在同一系统中运营回流</footer></article>
      <div className="dls-agent-grid">{agents.map(agent=><article className={`dls-agent-card is-${agent.tone}`} key={agent.title}><header><Image src={icon(agent.icon)} alt="" width={20} height={20}/><span>{agent.label}</span><h3>{agent.title}</h3></header><p><b>产品定位：</b>{agent.position.replace("产品定位：","")}</p><ul>{agent.items.map(item=><li key={item}>{item}</li>)}</ul><footer>{agent.metrics.map(metric=><span key={metric}>{metric}</span>)}</footer></article>)}</div>
    </section>
    <section className="dls-synergy" aria-labelledby="dls-synergy-title">
      <Heading eyebrow="三、协同效应" title="1 + 1 > 2：五体协同如何实现乘数效应" intro="五大智能体围绕同一个「法律人知识库」底座、共享同一套数据飞轮，形成「内容 — 流量 — 线索 — 承办 — 沉淀」的闭环增长网络。" />
      <div className="dls-synergy__content"><div className="dls-flywheel"><div className="dls-flywheel__ring"/><div className="dls-flywheel__center"><Image src={icon(33)} alt="" width={20} height={20}/><span>数据飞轮</span><small>越用越懂你</small></div>{[["内容出库","Social Grow",34],["被 AI 看见","Mine GEO",35],["承接转化","AI Harness",31],["高效承办","合同审查",32]].map(([a,b,n],i)=><div className={`dls-flywheel__node f-${i+1}`} key={String(a)}><Image src={icon(Number(n))} alt="" width={16} height={16}/><b>{a}</b><small>{b}</small></div>)}</div><div className="dls-synergy__steps"><h3>数据飞轮 越用越懂你</h3>{synergy.map(([title,body],index)=><article key={title}><b>{String(index + 1).padStart(2, "0")}</b><div><h4>{title}</h4><p>{body}</p></div></article>)}<footer><p>单个智能体解决 “点” 的效率，五者协同解决 “面” 的增长。</p></footer></div></div>
    </section>
    <section className="dls-values" aria-labelledby="dls-values-title"><Heading eyebrow="四、价值兑现" title="可衡量的六维客户价值" intro="问题被解决得如何，最终要落到可衡量的商业结果上。我们从六个维度提供可考核的价值。"/><div className="dls-values__grid dls-value-metrics">{valueMetrics.map(([metric,body,n,tone])=><article className={`is-${tone}`} key={metric}><Image src={icon(n)} alt="" width={20} height={20}/><strong>{metric}</strong><p>{body}</p></article>)}</div><div className="dls-values__grid dls-value-groups">{valueGroups.map(([title,body,n,tone])=><article className={`is-${tone}`} key={title}><Image src={icon(n)} alt="" width={20} height={20}/><h3>{title}</h3><p>{body}</p></article>)}</div><p className="dls-values__note">（注：以上百分比 / 倍数为可衡量指标示例，实际收益随行业、素材质量与落地 / 投放策略而定。）</p></section>
    <section className="dls-cooperation" aria-labelledby="dls-cooperation-title"><Heading eyebrow="五、合作与可信底座" title="关联产品与灵活合作模式" intro="五大智能体可单独采用、按需组合，也可作为一体化方案落地，与企业级可信底座深度整合。"/><div className="dls-plans">{plans.map(([title,body,tone])=><article className={`is-${tone}`} key={title}><h3>{title}</h3><p>{body}</p></article>)}</div><div className="dls-trust-grid">{trustItems.map((item,index)=><article key={item}><Image src={icon([42,45,49,50,42,45][index])} alt="" width={18} height={18}/><p>{item}</p></article>)}</div></section>
    <section className="dls-cta" aria-labelledby="dls-cta-title"><h2 id="dls-cta-title">让 DeepLaw 成为每位法律人的<br/>“市场部 + 运营部 + 办案中心”</h2><p>让案源拓展与办案，可运营、可复盘、可体系化。立即预约一次演示，看看五大智能体如何帮助您拓展案源与提升工作效率。</p><BookingTrigger>预约演示 <span aria-hidden="true">→</span></BookingTrigger></section>
  </main>;
}
