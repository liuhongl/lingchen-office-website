import { ProductBreadcrumb } from "@/components/product-breadcrumb";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import Image from "next/image";

const legalStages = [
  ["1", "IP 打造", "专业内容成为可信入口，建立信任路径"],
  ["2", "案源获取", "AI 算法识别匹配高价值需求"],
  ["3", "咨询转化", "分层跟进与个性化报价推进"],
  ["4", "智能承办", "读卷、审约与文书底稿生成"],
  ["5", "知识管理", "经验与案例沉淀为律所级知识资产"],
  ["6", "专业提升", "学习反哺专业知名度与个人/团队品牌"],
];

const businessFlows = [
  [18, "智能律师广场", "供给净化与战力画像，算法多维可信匹配"],
  [19, "律师 AI 获客云", "投流+GEO+私域矩阵，报价精算与微官网"],
  [20, "法律 AI 工作流", "材料接入、结构化建模、风险研判与文书初稿"],
  [21, "法律人知识库", "实务图谱、精准检索、团队专属资产与内容素材库"],
] as const;

function FlowIcon({ icon }: { icon: (typeof businessFlows)[number][0] }) {
  return <span className="deeplaw-flow-icon" aria-hidden="true"><Image src={`/images/solutions/deeplaw/icon-${icon}.svg`} alt="" width={17} height={17} /></span>;
}

function StageArrow() {
  return <span className="deeplaw-stage-arrow" aria-hidden="true"><Image src="/images/solutions/deeplaw/icon-5.svg" alt="" width={12} height={12} /></span>;
}

const coreCapabilities = [
  ["1", "智能律师广场", "双向 AI 算法对碰匹配。具备供给净化（案源清洗、过滤低意向咨询）与 3D 升级战力画像。算法按案件、律师、地域、预算、诉求多维匹配，建立理性信任与反馈机制，让律师凭真实实力获客。"],
  ["2", "律师 AI 获客云", "将分散的流量收拢为一条可运营的转化体系。集投流反馈、内容孵化、GEO 推荐与公开数据于一体。全网数据挖掘清洗意向、自有流量矩阵即时承接、成交数据精算报价，推进面谈签约。"],
  ["3", "法律 AI 工作流", "把成堆材料变成能直接上手的办案初稿。材料接入后全要素自动提取，构建结构化证据矩阵与案情时间线；对风险条款和逻辑漏洞进行深度风险研判，一键智写起诉状、答辩书、证据清单等高复核性文书。"],
  ["4", "法律人知识库", "实务知识资产中心，实现“一次沉淀，多处复用”。将诉讼文书、案例思考、经验分享与办案笔记统一治理为知识图谱。构建实务全景图谱、精准语义检索、团队专属资产与内容素材库，深度服务承办与获客。"],
  ["5", "DeepLaw 法学院", "发布、专栏、交易与品牌的内容工厂。调用知识库案例和实务经验，生成实务微课和精选图文进行付费分发或 AI 可见度优化。专业内容拾级而上，构筑专业 IP 势能，获取长尾收益与客户端信任。"],
];

const workflowAdvantages = [
  "全要素结构化建模：材料接入后秒级抽取，自动提炼事实结构，生成证据矩阵与案情时间线。",
  "深度法理风险研判：模拟资深执业律师逻辑，深度审查合同漏洞、立场倾向与违规红线。",
  "人机协同高质交付：AI 辅助起草高复核性底稿文书，专业律师人工校验，杜绝硬伤与大模型幻觉。",
  "微信与 PC 双端联动：移动端微信一键直发合同，秒级出具审阅意见；PC端支持深度协同修订。",
  "多角色提效价值：初级律师减负、中高级律师聚焦决策与IP管理、企业法务批量体检降低成本。",
  "数据与内容闭环回流：每一次修改和承办结果反哺知识库，让智能体越用越精、越跑越懂您的业务。",
];

const metrics = [
  ["1 套系统", "贯穿IP·案源·转化·承办·知识·成长全业务流"],
  ["7×24h", "专业内容全天候在公域矩阵孵化、种草获客"],
  ["1/10 成本", "数字人分身降低拍摄剪辑、多账号维护成本"],
  ["指标化", "GEO 诊断治理，提升各大模型推荐率与可见度"],
];

const valueCards = [
  ["全链路业务装进一套系统", "彻底告别偶发人脉与运气接案，建立体系化、可持续的稳定案源获取能力。IP、转化、承办在同一系统中运营回流。"],
  ["多维可信算法撮合匹配", "通过 3D 战力画像和供给清洗，按案型、地域、预算进行专业撮合。签约、确认、交割全程留痕，线上协作真实可信。"],
  ["知识图谱驱动业务成长", "将团队宝贵经验转化为律所级知识资产。沉淀一次，多处复用，不仅深度支撑文书合同审阅承办，更能反哺获客内容生产。"],
];

const comparisonRows = [
  ["双向找不到对的人：客户难识别真实实力，优质案源仍依赖人情关系", "智能律师广场：供给清洗、3D战力画像多维拆解，算法按案件画像多维对碰推荐"],
  ["获客越来越贵：公域分散获客成本高，转化漏斗粗糙，初筛慢跟进断", "律师 AI 获客云：抢占 AI 答案入口，全网挖掘、私域孵化、微官网成交报价精算"],
  ["交付依赖人海：合同审查、诉讼文书、证据清单等反复消耗体力脑力", "法律 AI 工作流：材料全要素提取、结构化建模、逻辑风险研判与文书初稿一键生成"],
  ["经验难沉淀：优秀成功案例、辩护要领、实务笔记零散流失、不可收录", "法律人知识库：诉讼文书、经验、办案笔记等图谱归口，读审写多端口复用"],
  ["专业成长慢：团队梯队建设难，案例规则更新快，无法实现知识复制", "DeepLaw 法学院：内容引擎一键萃取案例为实务微课进行付费分发或IP推广"],
];

const scenarioRows = [
  ["个人执业律师", "低成本公域内容与私域管理", "利用 AI 获客云极低成本发布公域爆款，自动承接私域咨询，使专业能力持续被看见，获得更高精准度与执业效率。"],
  ["专业团队 / 合伙人", "搭建垂直领域矩阵与案源池", "围绕细分专业领域沉淀案例库、搭建高粘内容矩阵与线索池。稳定沉淀高案值咨询，换来更大规模曝光和极少无效沟通。"],
  ["现代化律所", "获客、运营与承办全流程 AI 化", "将律所的市场、运营、咨询、承接与文书承办流程标准化、AI 化，提升律所整体高并发做案子的处理吞吐量。"],
  ["初级律师 / 助理", "缩短重复体力与文书撰写时间", "利用 AI 辅助批量阅读冗长合同或案卷，一键起草起诉状和答辩意见，缩短 80% 材料处理时间，集中精力于专业成长。"],
  ["中高级律师", "释放精力，聚焦决策与 IP 客户", "将日常合同繁琐审查、标准意见书起草及琐碎提醒等体力活交给系统，释放时间专注于开庭表现、核心决策与客户沟通。"],
  ["企业法务团队", "批量合规体检与诉讼能力跃迁", "应对交付依赖人海的难题，对合同大盘、采购单据进行智能化、批量化合规审查与红线拦截，处理成效优于通用模型。"],
];

const cooperationRows = [
  ["RaaS 模式 (按量付费)", "按使用量付费，用多少、付费多少。"],
  ["案源拓展服务费 (按结果付费)", "按流量曝光、案源、线索付费。"],
  ["私有化部署 (深度集成)", "本地部署费 + 业务定制费 + 维护保障费。"],
  ["API / 算力包 (系统对接)", "对接 OA、CRM 系统等，灵活调用算力。"],
];

function SectionHeading({ label, title, lead }: { label?: string; title: string; lead?: string }) {
  return <header className="deeplaw-section-heading">{label && <p>{label}</p>}<h2>{title}</h2>{lead && <div>{lead}</div>}</header>;
}

export default function DeepLawPage() {
  return <div className="deeplaw-page">
    <SiteHeader />
    <main>
      <ProductBreadcrumb name="DeepLaw" description="AI 法律 Agent—案件拓展与法律工作流，交付案源流量孵化体系、高意向案件线索与法律工作流。" />

      <section className="deeplaw-hero"><div className="deeplaw-shell"><h1><span>DeepLaw：每位法律人的 AI </span><em>“市场部 + 运营部 + 办案中心”</em></h1><div className="deeplaw-hero-copy"><p>DeepLaw 不是单一的法律 AI 工具，而是将法律团队的整条业务流装进一套系统，对外是“市场部”，对内是贯穿案件承办、知识沉淀与专业成长的“运营部”+“办案中心”。 以灵宸自研法律 Agent 为底座，把偶发获客转化为体系化、可持续、可复盘的稳定能力。既能持续获取案源，也深度支撑专业承办、知识资产沉淀与持续专业提升。</p><p>通过打通 IP 打造、案源获取、咨询转化、案件承办、知识管理与专业提升六大首尾相接的环节，实现数据与内容的持续回流。系统越用越懂您的业务，每一步都产生可复用的专业资产，帮你更高效、更轻松地赚钱。</p></div><div className="deeplaw-contrast"><article><small>过去</small><h2>传统人情与运气模式</h2><p>案源获取高度依赖人情链路与偶然运气；获客成本持续上升，缺乏体系化获客方式；重复性材料文字工作消耗大量精力；团队专业经验分散在个人脑中难以沉淀。</p></article><article><small>现在</small><h2>每位法律人的“市场部+运营部+办案中心”</h2><p>通过一套系统贯穿 IP · 案源 · 转化 · 承办 · 知识 · 成长，让案源拓展与办案都可运营、可复盘、可体系化。AI 生成可复核底稿，大幅压缩重复劳动，把律师时间还给庭审与客户沟通。</p></article></div></div></section>

      <section className="deeplaw-stages deeplaw-section"><div className="deeplaw-shell"><SectionHeading title="DeepLaw六大核心环节"/><div className="deeplaw-stage-grid">{legalStages.map((x,index)=><div className="deeplaw-stage-item" key={x[0]}><article><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>{index % 3 !== 2 && <StageArrow/>}</div>)}</div></div></section>

      <section className="deeplaw-flow deeplaw-section"><div className="deeplaw-shell"><SectionHeading title="重构关键业务流"/><div className="deeplaw-flow-grid">{businessFlows.map(x=><article key={x[1]}><FlowIcon icon={x[0]}/><div><h3>{x[1]}</h3><p>{x[2]}</p></div></article>)}</div></div></section>

      <section className="deeplaw-capabilities deeplaw-section"><div className="deeplaw-shell"><SectionHeading title="核心产品能力"/><div className="deeplaw-capability-grid">{coreCapabilities.map(x=><article key={x[0]}><small>核心能力 {x[0]}</small><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div><div className="deeplaw-advantages"><h3>大模型驱动的法律 AI 工作流核心优势</h3><ul>{workflowAdvantages.map(x=><li key={x}>{x}</li>)}</ul></div><article className="deeplaw-cycle"><h3>六大环节点对点自迭代引擎</h3><p>从 1 IP 打造（专业内容成为可信入口） → 2 案源获取（AI算法匹配高价值需求） → 3 咨询转化（分层跟进与报价推进） → 4 智能承办（读卷审约与文书底稿） → 5 知识管理（经验沉淀为知识资产） → 6 专业提升（学习反哺专业与品牌），数据与内容持续回流，反哺每一轮循环，使系统越跑越懂您的业务规则。</p></article></div></section>

      <section className="deeplaw-value deeplaw-section"><div className="deeplaw-shell"><SectionHeading label="产品价值" title="产品价值与实效指标归因" lead="把运气式的案源获取和繁琐的办案，重构为可运营、可复盘、可体系化的增长资产。"/><div className="deeplaw-metrics">{metrics.map(x=><article key={x[0]}><strong>{x[0]}</strong><p>{x[1]}</p></article>)}</div><div className="deeplaw-value-grid">{valueCards.map(x=><article key={x[0]}><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></div></section>

      <section className="deeplaw-results deeplaw-section"><div className="deeplaw-shell"><SectionHeading label="商业实效" title="交付案源线索增长与工作流" lead="解决法律人最头疼的五个问题，交付确定性的案源增长与提效结果。"/><div className="deeplaw-comparison"><div><b>过去如何 · 传统人工</b><b>现在如何 · 用 DeepLaw</b></div>{comparisonRows.map(x=><div key={x[0]}><span>{x[0]}</span><span>{x[1]}</span></div>)}</div><div className="deeplaw-deliverables"><article><h3><Image src="/images/solutions/deeplaw/icon-42.svg" alt="" width={18} height={18} />诉讼材料自动生成</h3><p>一键生成格式标准、论证严密的诉状、答辩状、证据目录及法律意见书等诉讼材料。</p></article><article><h3><Image src="/images/solutions/deeplaw/icon-42.svg" alt="" width={18} height={18} />GEO监测、效果提升</h3><p>诊断并持续优化品牌在 DeepSeek/Kimi 等大模型中的提及率、可见度与情感倾向。</p></article><article><h3><Image src="/images/solutions/deeplaw/icon-42.svg" alt="" width={18} height={18} />IP 矩阵图文与超仿真短视频素材</h3><p>自动调用案例与 know-how 、热点转化为爆款科普内容，配合声音克隆 7×24h 孵化案源线索。</p></article></div><article className="deeplaw-growth"><h3>增长闭环链</h3><p>专业科普IP种草 (流量) → 大模型GEO排名提升 (可见) → AI律师广场算法匹配 (对碰) → 获客云私域跟进 (转化) → AI工作流读卷审约 (承办) → 知识图谱法学院微课 (沉淀) —— 体系化增长闭环。</p></article></div></section>

      <section className="deeplaw-scenes deeplaw-section"><div className="deeplaw-shell"><SectionHeading label="落地场景" title="部分落地场景示例" lead="赋能不同规模的法律团队，让专业能力转化为可见的、指标化的持续增长。"/><div className="deeplaw-table"><div><b>落地场景</b><b>适用角色</b><b>可衡量指标 / 解决的问题</b></div>{scenarioRows.map(x=><div key={x[0]}><strong>{x[0]}</strong><span>{x[1]}</span><span>{x[2]}</span></div>)}</div><h3 className="deeplaw-subtitle">典型落地场景深度剖析</h3><div className="deeplaw-cases"><article><h3>场景一：律师专业知识内容 IP 获客引擎 (SOCIAL GROW × 法律人)</h3><p>将专业案例、办案经验一键接入热点雷达、视频工坊与数字人生产，24小时不间断在多平台群发图文/短视频，自动化捕捉评论及私信潜在案源，数据复盘回流知识库，获客成本降低 80% 以上，实现长尾曝光与高信任转化。</p></article><article><h3>场景二：抢占 AI 答案入口 (MINE GEO × 法律人)</h3><p>使产品与品牌事实高频出现在大模型(DeepSeek/Kimi/豆包等)的推荐问答里。通过 GEO 诊断、知识库治理、PR及FAQ高权发布、多模型排名跟踪，将偶然被推荐转化为指标化、可持续优化的新流量入口。</p></article></div></div></section>

      <section className="deeplaw-cooperation deeplaw-section"><div className="deeplaw-shell"><SectionHeading label="合作模式" title="灵活的合作模式" lead="按使用量或结果付费，为您的商业结果服务，提供灵活多样的合作入口。"/><div className="deeplaw-cooperation-table"><div><b>合作服务模式</b><b>付费结算方式</b></div>{cooperationRows.map(x=><div key={x[0]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</div></div></section>
    </main>
    <SiteFooter />
  </div>;
}
