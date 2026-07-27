import { FileCheck2, FileSearch, Library, Network, PhoneCall, Radar, Rocket, Scale, Search, Share2, Users } from "lucide-react";
import { BookingTrigger } from "@/components/booking-trigger";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SolutionTabs } from "@/components/solution-tabs";

const pains = [
  [Users,"SECTION 01","案源之压","双向找不到对的人","专业能力难以被客观识别，优质案源仍高度依赖人情链路与运气；当事人也难以判断律师的真实专业性与战力，往往凭熟人推荐盲选。"],
  [Rocket,"SECTION 02","转化之压","获客越来越贵","缺乏体系化的获客方式与渠道，公域线索分散、内容生产高消耗、初筛慢、跟进断，获客成本持续上升，接案靠运气。"],
  [FileSearch,"SECTION 03","承办之压","交付依赖人海","复杂卷宗、冗长合同、地方裁判尺度与各类文书，要求大量重复性的文字工作、检索与复核，挤压了真正用于策略判断与案源拓展的时间。"],
  [Library,"SECTION 04","知识之压","经验难沉淀与曝光","真正宝贵的案例、思考与实务笔记常常分散、不可检索、不可收录，难以转化为可被潜在客户看见的专业度、经验值与曝光率。"],
  [Search,"SECTION 05","AI可见之压","偶然被推荐","越来越多当事人直接向 AI 提问「哪位律师更合适」，而律师 / 律所品牌在 AI 答案中往往只能偶然被引用、偶然被推荐，缺乏可诊断、可治理、可优化的机制。"],
] as const;

const deepLawModules = [
  ["智能律师广场","把熟人推荐/广告承诺升级为可解释的人工智能算法专业匹配与三维战力画像"],
  ["律师智能获客云","把分散流量收拢成从发现到面谈的闭环增长体系，抢单、回访反馈线索质量"],
  ["法律智能工作流","材料接入 → 结构化建模 → 风险研判 → 文书初稿 → 复核校验一体化"],
  ["法律人知识库","法规、案例、文书与团队经验统一治理，一次沉淀，既服务承办也反哺获客"],
  ["深律法学院","调用案例与办案心得，把专业内容沉淀为个人品牌与高价值案源之间的信任路径"],
];

const agents = [
  [Share2,"内容 IP 获客引擎","3.2 Social Grow","产品定位：专业知识内容 AI 生产与全域分发 Agent。把本地专业知识（法条、案例、白皮书、录音等）一键转化为可发布的图文与数字人短视频，并分发到抖音、小红书、视频号、微博、头条等全网平台。",["热点雷达：多平台热点实时聚合，一键转为创作草稿","知识库管理（专业级 RAG）：从物理上压住大模型幻觉，保障法律准确与合规","创作与视频工坊：爆款文案精排与数字人+声音克隆，出镜成本趋近于零","发布矩阵与数据面板：1 名运营维护数十账号，曝光/阅读受众喜好精准追踪"],["专业护城河 | 极致人力杠杆","生产周期 -70%~-90%"]],
  [Radar,"AI 答案入口治理","3.3 Mine GEO","产品定位：品牌生成式引擎优化与获客 AI Agent。帮助律师 / 律所持续管理品牌在 AI 搜索、AI 聊天与生成式答案中的可见度、推荐率与情感倾向。",["诊断：全天候持续监测 AI 可见度、推荐率、推荐排名与引用来源","治理：将案例、FAQ与事实沉淀为结构化知识库，统一品牌事实口径","创作：围绕提问意图与引用逻辑，生成最契合 RAG 偏好的评测与白皮书","分发与监控：精准推送到维基、媒体与问答页；拦截并抢单防御"],["抢占大模型决策入口","统一事实口径 / 降低错漏"]],
  [PhoneCall,"主动触达与转化","3.4 AI 销售获客 Harness","产品定位：全场景销售 AI 获客 Harness。以 AI 语音外呼/呼入、自适应邮件/文本、场景化动态短信三大子系统组成「获客矩阵」，把被动、重复的人工作业升级为全自动、全天候、高并发、高情商的主动式获客。",["数智语音交互：7×24 智能呼入分流，自适应心理模型话术与大模型录音打分","智能自适应邮件/文本：直连 CRM，自动生成千人千面开发信，提供全链路看板","场景化短信/提醒：上下文感知动态模板 + 最佳时机算法 + 智能防刷","技术底座：NLP 语义反馈分析与意图识别，意向明确，支持真人律师无缝极速接单"],["高情商拟真 / 多渠道级联","通联成本仅为传统 40%~60%"]],
  [FileCheck2,"承办风控与工作流","3.5 合同智能审查 Agent","产品定位：AI 合同风控官 / AI 律师 / 专属审核智能体。融合法律法规、司法案例与资深律师审查经验，独创合同审查思维链（CoT），让合同风险在签约前被看见、被解释、被修正。",["抓取与理解：微信/PC聊天记录一键抓取，精准识别甲乙方立场与业务关注点","智能审查：覆盖 100+ 类合同风险、5000+ 风险审查点，提供业务、法务、财务三维审查","修订建议：生成批注、可直接替换文本与审查意见书，自动提示缺失条款","协同留痕：版本管理、内部批注、导出分享，疑难条款一键转接真人律师"],["10页合同审至分钟级","审查效率 ↑ 约 90% | 解决率 95%"]],
] as const;

const synergy = [
  ["①","复用放大","一份知识资产（产品事实 / 案例 / 销冠话术）被知识库、内容引擎、GEO、获客与承办反复复用，边际成本递减，边际价值递增。"],
  ["②","数据互哺","GEO 的诊断告诉内容引擎「该写什么」，销售获客的 NLP 反馈告诉团队「客户真正关心什么」，承办沉淀的经验又让匹配与内容更专业，形成正反馈。"],
  ["③","信任贯通","从「被 AI 看见」到「画像匹配」，再到「履约留痕」与「合同风控」，专业能力在同一张网络里被看见、被验证、被信任，缩短从陌生到委托的信任路径。"],
  ["④","体系替代偶然","把偶发的人脉获客与人海办案，升级为可运营、可复盘、可体系化的稳定、可持续能力。"],
];

const valueCards = [
  ["效率价值 / 成本价值","成稿 / 成片 / 合同审约 / 文书初稿从「天 / 小时」压缩到「分钟级」。AI 替代重复性人工坐席与跨部门流转，综合成本暴降，出镜成本趋于 0。"],
  ["业务价值 / 管理价值","专业内容 + AI 推荐 + 主动触达，持续获取公私域高意向案源。流程标准化、知识资产沉淀、任务看板全程可视，人员流动不带走客户资产。"],
  ["风险价值 / 技术价值","RAG 知识边界 + 人工复核 + 律师合规兜底 + 全程留痕，显著降低事实硬伤。模块化嵌入 CRM / OA / ERP，能力随底层大模型迭代持续增强。"],
];

const cooperation = [["RaaS (Result as a Service)","按使用量付费，用多少、付费多少，适用于高频流量模式。"],["案源拓展服务费","按流量曝光、案源、线索付费，适用效果付费，利益百分之百同盟。"],["私有化 / 本地化部署","适配中大型律所、法律咨询公司与企业，业务数据永不出域、安全可控，深度集成。"],["API / 算力包 / Skills","对接 OA、CRM 系统，按调用量灵活付费，快速跑通。"]];
const trust = [["数据主权承诺","业务数据零污染，永不进入公共模型训练池，支持一键删除"],["人机协同可控","全程行为留痕，关键节点由真人律师确认，高风险设限"],["金融级加密架构","双层加密存储，物理级隔离，最小权限访问控制"],["合规体系保障","严格遵循《数据安全法》《个人信息保护法》及行业监管要求"],["全栈自主研发","符合国家网络安全等级保护标准，支持私有化/本地化"],["服务与 SLA 承诺","专属客户成功团队 + 7×24 技术支持，明确 SLA 响应"]];

function Title({label,title,lead}:{label:string;title:string;lead?:string}) { return <header className="legal-title"><small>{label}</small><h2>{title}</h2>{lead&&<p>{lead}</p>}</header>; }

function LegalFlywheel(){return <div className="legal-flywheel" aria-hidden="true"><svg viewBox="0 0 420 420"><defs><linearGradient id="legal-ring" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#3D7BFF"/><stop offset=".5" stopColor="#19C7D6"/><stop offset="1" stopColor="#8B6CFF"/></linearGradient></defs><circle className="legal-flywheel-ring" cx="210" cy="210" r="150" fill="none" stroke="url(#legal-ring)" strokeWidth="2" strokeDasharray="6 10" opacity=".6"/><circle cx="210" cy="210" r="72" fill="#F8FAFC" stroke="rgba(148,163,184,.3)"/><text x="210" y="202" textAnchor="middle" fontWeight="700" fontSize="16" fill="#0F172A">数据飞轮</text><text x="210" y="224" textAnchor="middle" fontSize="12" fill="#475569">越用越懂你</text>{[[210,60,"#3D7BFF","知识","底座"],[340,135,"#19C7D6","内容","出库"],[340,285,"#8B6CFF","被 AI","看见"],[210,360,"#27C684","承接","转化"],[80,285,"#F2A53C","高效","承办"],[80,135,"#3D7BFF","数据","回流"]].map(([x,y,color,a,b])=><g key={String(a)}><circle cx={Number(x)} cy={Number(y)} r="28" fill="white" stroke={String(color)} strokeWidth="2"/><text x={Number(x)} y={Number(y)-3} textAnchor="middle" fontSize="12" fontWeight="600" fill="#0F172A">{a}</text><text x={Number(x)} y={Number(y)+11} textAnchor="middle" fontSize="12" fill="#475569">{b}</text></g>)}</svg></div>}

export default function LegalAiSolutionPage(){ return <>
  <SiteHeader/><SolutionTabs/><main className="legal-solution">
    <section className="legal-hero"><div className="legal-shell"><p className="legal-eyebrow"><Scale aria-hidden="true"/>法律 AI · 行业解决方案</p><h1>让案件拓展与办案，<span>成为可运营、可复盘的能力</span></h1><p className="legal-hero-lead">DeepLaw 法律 AI Agent 整合五大智能体，贯通「IP 打造 — 案源 — 转化 — 案件承办 — 知识管理 — 终身成长」全链路，做每位法律人的 “市场部 + 运营部 + 办案中心”。</p><div className="legal-actions"><BookingTrigger>预约演示</BookingTrigger><a href="#agents">了解五大智能体</a></div><div className="legal-hero-metrics"><span>全链路 同系统回流</span><span>7×24 内容孵化案源</span><span>分钟级 合同审约</span><span>越用越准 数据飞轮</span></div></div></section>
    <section className="legal-section legal-problems"><div className="legal-shell"><Title label="一、行业现状" title="律师与律所面临的核心问题" lead="案源竞争持续加剧，获客越来越贵。以下五个痛点并非孤立，而是在同一条业务链条上相互传导。"/><div className="legal-pain-grid">{pains.map(([Icon,no,title,sub,text])=><article key={no}><div className="legal-pain-card__heading"><Icon aria-hidden="true"/><h3>{title}</h3></div><strong>{sub}</strong><p>{text}</p></article>)}</div><aside className="legal-ribbon"><b>传导关系</b><p>案源不稳 → 转化靠运气 → 承办拖住时间 → 经验沉不下来 → AI 时代更难被看见，环环相扣，形成恶性循环。破题的关键，是<strong>用一套系统把整条链路同时托起</strong>。</p></aside></div></section>
    <section className="legal-section legal-agents" id="agents"><div className="legal-shell"><Title label="二、五大智能体" title="五大智能体：从不同角度系统化破解痛点" lead="五大智能体各自从一个独立角度切入，分别对应一类核心痛点；它们既可单独采用，也可组合落地。"/><article className="legal-deeplaw"><header><Network aria-hidden="true"/><div><small>全链路底座</small><h3>3.1 DeepLaw 法律 AI Agent</h3></div></header><p>产品定位：法律 AI 智能化操作系统。对外是「市场部」，对内是贯穿承办、知识与成长的「运营部 + 办案中心」，由智能律师广场、律师 AI 获客云、法律 AI 工作流、法律人知识库、DeepLaw 法学院五大模块组成。</p><div>{deepLawModules.map(x=><section key={x[0]}><h4>{x[0]}</h4><p>{x[1]}</p></section>)}</div><aside>独特价值：全链路 · 可信履约 · 数据飞轮 —— 各模块在同一系统中运营回流</aside></article><div className="legal-agent-list">{agents.map(([Icon,label,title,desc,items,tags],index)=><article className={`legal-agent-tone-${index+1}`} key={title}><header><Icon aria-hidden="true"/><div><small>{label}</small><h3>{title}</h3></div></header><p>{desc}</p><ul>{items.map(x=><li key={x}>{x}</li>)}</ul><div>{tags.map(x=><span key={x}>{x}</span>)}</div></article>)}</div></div></section>
    <section className="legal-section legal-synergy"><div className="legal-shell"><LegalFlywheel/><div className="legal-synergy-copy"><Title label="三、协同效应" title="1 + 1 > 2：五体协同如何实现乘数效应" lead="五大智能体围绕同一个「法律人知识库」底座、共享同一套数据飞轮，形成「内容 — 流量 — 线索 — 承办 — 沉淀」的闭环增长网络。"/><div className="legal-synergy-list">{synergy.map(x=><article key={x[0]}><b>{x[0]}</b><div><h3>{x[1]}</h3><p>{x[2]}</p></div></article>)}</div><aside>单个智能体解决 <span>“点”</span> 的效率，五者协同解决 <strong>“面”</strong> 的增长。</aside></div></div></section>
    <section className="legal-section legal-value"><div className="legal-shell"><Title label="四、价值兑现" title="可衡量的六维客户价值" lead="问题被解决得如何，最终要落到可衡量的商业结果上。我们从六个维度提供可考核的价值。"/><div className="legal-metrics"><article><strong>-70%~-90%</strong><p>内容生产周期缩短</p></article><article><strong>40%~60%</strong><p>综合通联成本降至传统方式</p></article><article><strong>约 90%</strong><p>合同审核效率提升，10页缩至分钟级</p></article><article><strong>7×24</strong><p>商机无缝不漏接，不舍昼夜</p></article></div><div className="legal-value-grid">{valueCards.map(x=><article key={x[0]}><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div><p className="legal-note">（注：以上百分比 / 倍数为可衡量指标示例，实际收益随行业、素材质量与落地 / 投放策略而定。）</p></div></section>
    <section className="legal-section legal-trust"><div className="legal-shell"><Title label="五、合作与可信底座" title="关联产品与灵活合作模式" lead="五大智能体可单独采用、按需组合，也可作为一体化方案落地，与企业级可信底座深度整合。"/><div className="legal-cooperation">{cooperation.map(x=><article key={x[0]}><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div><div className="legal-trust-grid">{trust.map(x=><article key={x[0]}><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></div></section>
    <section className="legal-closing"><div className="legal-shell"><h2>让 DeepLaw 成为每位法律人的<br/><span>“市场部 + 运营部 + 办案中心”</span></h2><p>让案源拓展与办案，可运营、可复盘、可体系化。立即预约一次演示，看看五大智能体如何帮助您拓展案源与提升工作效率。</p><BookingTrigger>预约演示 →</BookingTrigger></div></section>
  </main><SiteFooter/>
</> }
