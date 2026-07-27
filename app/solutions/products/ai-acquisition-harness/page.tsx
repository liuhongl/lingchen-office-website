import Image from "next/image";
import { BookingTrigger } from "@/components/booking-trigger";

const overviewCards = [
  {
    icon: "overview-customer.svg",
    title: "1. 破解客户触达难题",
    body: "人工效率低、人力成本高、销售不确定性强、销售话术不统一、销售团队能力参差不齐。",
  },
  {
    icon: "overview-growth.svg",
    title: "2. 赋能企业业务增长",
    body: "客户线索、意向客户筛选、客户跟进、客户转化、品牌声誉与客户体验——任何一环失效，都将侵蚀企业业绩。",
  },
  {
    icon: "overview-ai-value.svg",
    title: "3. AI 创造的核心价值",
    body: "AI 主动执行 + 大模型录音质检 + 多渠道级联 + 线索闭环，让效率倍增、成本下降、体验升级、转化可追踪，助力企业持续稳定增长。",
  },
  {
    icon: "overview-trust.svg",
    title: "4. 放心采用的底气",
    body: "金融级加密与本地化部署，支持 RaaS 模式、全程留痕可追溯、人机协同真人兜底，可从单一场景试点起步、按结果逐步推广。",
  },
  {
    icon: "overview-transcend.svg",
    title: "5. 相比传统的跨越",
    body: "从“机械群发、照本宣科”跃迁到“千人千面、自适应交互”，闭环自动流转、越用越懂业务。",
  },
];

const painCards = [
  {
    pain: "人工坐席成本高昂、情绪波动大，在夜间、节假日及海外时差下极易漏接商机，线索触达与回访质量难以稳定维持。",
    solution: "数字员工 7×24 小时全天候双向通话，多并发无上限。采用自适应心理模型和高拟真音色，综合通联成本降至传统坐席 30%~60%。",
  },
  {
    pain: "开发信模板单一呆板，打开率与回复率双低，人工撰写与跟进严重滞后，客户信息分散导致无法建立连续良好的沟通。",
    solution: "打通客户画像，自动生成并高频投递千人千面的开发信、邀约信，实现投递→打开→点击→回复的全链路自动化跟进与 CRM 回流。",
  },
  {
    pain: "短信通知形式单一、打扰感强，退订率高。单通道发送容易因运营商降网或限流导致漏达，缺乏有效的互动链接。",
    solution: "上下文感知动态模板自适应融入客户数据，采用场景时机算法预测最佳触达时段并控制频次。多通道路由智能防刷，降网自动切换。",
  },
  {
    pain: "只简单记录「是否拨通」，沟通记录残缺且抗拒原因模糊，无法针对性对碰痛点、总结转化卡点，极难有效管控合规风险。",
    solution: "NLP 语义大模型对每通录音或回复自动撰写摘要、归成因果分类、在线质检打分并划分意向等级，抗拒原因分布看板一览无遗。",
  },
];

const flowCards = [
  {
    icon: "flow-phone.svg",
    title: "语音 · VOICE 数智语音交互系统",
    body: "双向（外呼 + 呼入）智能语音助手，覆盖线索首触、回访确认与全天候咨询分流。支持海量并发外呼 + 7×24 智能呼入分流。多重数字员工身份库根据客户来源 / 行业 / 意向阶段 / 画像，自动切换音色与话术（销售顾问、客服顾问等）。提供大模型录音质检 + 支持质检打分与沟通摘要、不合格诊断。",
  },
  {
    icon: "flow-email.svg",
    title: "邮件 · EMAIL 智能自适应邮件系统",
    body: "个性化销售邮件 / 文本生成与分发系统，打通客户画像、业务知识库与跟进节奏，自动生成千人千面的触达内容并追踪互动。直连 CRM / 表单 / 客户画像与产品卖点库，自动撰写开发信、邀约信、跟进邮件、报价前沟通与活动触达文案。客户画像 AI 个性化定制，按行业、客户角色、意向阶段与互动历史自动填充变量和卖点。",
  },
  {
    icon: "flow-message.svg",
    title: "短信 · REACH 场景化短信 / 数字提醒系统",
    body: "以上下文感知模板与闭环链接，完成低成本、高触达、有温度的全域客群通联。上下文感知动态模板提取多维客户数据（如称呼、行业、兴趣点、意向阶段、专属顾问）自适应融入，拒绝千篇一律。交互链接直连闭环，一键直连预约试用、资料领取、表单提交与在线客服。",
  },
];

const advantageCards = [
  {
    title: "语音自适应心理模型话术",
    body: "按客户分群实时生成并动态调整沟通话术，告别照本宣科的呆板 IVR。高情商拟真 + 智能静默打断，仿真 TTS 自然过渡，客户插话即暂停并共情反馈。外呼综合成本仅为传统方式 40%~60%，日触达无上限、月轻松数万次通联，全程语音转文本与实时语义解析。",
  },
  {
    title: "邮件千人千面内容引擎",
    body: "客户画像 ➔ 卖点匹配 ➔ 文案生成 ➔ 发送节奏 ➔ 互动回流全自动。支持不同行业、产品线、区域团队配置独立的素材与触达策略，统一 AI 能力标准又保留个性化销售能力构建。AI 智能解析客户意图，实现意向客户的识别与筛选，帮助销售团队更快获得回复。",
  },
  {
    title: "短信场景时机触达算法",
    body: "预测最佳触达时段并内控频次，降低打扰感的同时精确提升客群响应转化。多通道路由 + 智能防刷，降网或长期无响应时自动切换高触达通道，确保送达。提供全矩阵漏斗策略，与电话 / 邮件级联：如多次未接即级联生成跟进短信，用户点击后自动触发后续 CRM 任务。",
  },
];

const advantageComparisons = [
  ["1. 沟通记录对比：", "【传统缺陷】仅记录拨通/挂断/备注文本；【Harness方案】自动生成沟通摘要、意向等级趋势、高频关键词；【商业结果】问题溯源一目了然。"],
  ["2. 痛点收集对比：", "【传统缺陷】需人工翻听录音、整理需求与异议；【Harness方案】实时按 NLP 反馈做因果语义分类与图表聚类；【商业结果】直击痛点，调整经营策略。"],
  ["3. 流程流转对比：", "【传统缺陷】手工记录、派单延迟、对账耗时；【Harness方案】识别特定语义，瞬时派单、自动同步 CRM / 工单；【商业结果】流程无缝衔接，效率 >10x。"],
];

const outcomeMetrics = [
  ["500%+", "通联作业效率提升"],
  ["40%~60%", "综合成本降低"],
  ["30%~60%", "通联成本降至传统坐席"],
  [">10x", "语义派单效率提升"],
];

const outcomeValues = [
  { icon: "value-efficiency.svg", tone: "green", title: "效率价值", body: "单机多并发、日触达无上限；邮件 / 文本 / 话术个性化、针对性生成。月触达 ↑ 数万次，响应由小时级 ➔ 秒级。" },
  { icon: "value-cost.svg", tone: "orange", title: "成本价值", body: "省去重复性人工坐席与跨部门流转成本，节省大量人力成本与管理压力。综合成本降至传统方式的 40%~60%。" },
  { icon: "value-business.svg", tone: "blue", title: "业务价值", body: "个性化内容提升回复率，时机算法、NLP 意图算法提升转化，实现线索响应与跟进效率的全面飞跃。" },
  { icon: "value-management.png", tone: "purple", title: "管理价值", body: "全程留痕、沟通摘要、审计看板、流程画布，实时语义解析与数据总结。推动客户跟进自动流转与获客流程标准化。" },
  { icon: "value-risk.svg?v=2", tone: "red", title: "风险价值", body: "全程话术可控、行为可追溯、录音质检可复盘。保障沟通质量可控、多渠道服务体验高度一致与合规。" },
  { icon: "value-technology.svg", tone: "cyan", title: "技术价值", body: "NLP 反馈反哺经营，提供多渠道级联自建工作流，支持通过 API / SDK 模块化嵌入 OA / CRM 等现有业务系统，业务协同效率 >10x。" },
];

const valueTransitionRows = [
  ["通联作业效率", "人工坐席 / 拨号系统逐个拨打，效率低下，跨时区与节假日无法连续响应。", "数字员工 7×24 双向通话，并发无上限，效率提升至传统 500% 以上，通联成本降至传统坐席的 30%~60%。"],
  ["话术交互质量", "话术照本宣科，遇反问即卡壳，体验差，打扰感强。", "自适应心理模型话术，高情商拟真交互，支持智能静默打断与共情反馈。"],
  ["开发跟进时效", "邮件 / 文本手工编写与群发，客户画像割裂、跟进不及时。", "基于客户画像、产品卖点、业务知识库自动生成个性化邮件 / 文本并追踪互动，沟通质量可全面复盘。"],
  ["短信场景通联", "短信千篇一律群发，打扰多、转化低。", "上下文感知模板 + 时机算法 + 多渠道级联，响应转化提升，商机 24 小时不漏接。"],
  ["反馈沉淀分析", "只记录“是否拨通”，痛点反馈与客户诉求一盘散沙，难以指导后续经营。", "NLP 语义自动归类，实时解析意向等级与需求分析，看清转化卡点，变“被动跟进”为“主动增长”。"],
];

const applicationScenarios = [
  {
    title: "海外客户开发与线索筛选",
    audience: "市场 / 销售 / 运营",
    pain: "人工开发效率低、时差响应慢、线索质量难判断。",
    solution: "AI 按国家、行业、画像分群外呼 / 邮件 / 短信级联触达，并通过大模型录音质检与语义分析沉淀意向线索。",
    benefit: "从冷启动获客到意向筛选形成闭环，帮助销售优先跟进高价值客户，线索触达率大幅提升，通联人力降低。",
  },
  {
    title: "客户培育与活动邀约",
    audience: "市场 / 销售 / 客户成功",
    pain: "活动邀约和客户培育依赖人工触达，响应难追踪、跟进不及时。",
    solution: "AI 按客户阶段自动生成邀约、提醒与跟进内容，NLP 自动归纳兴趣点与异议原因。",
    benefit: "看清客户真实兴趣与转化阻力，从一次性打扰式触达转向持续培育，实现邀约覆盖率提升、互动反馈实时化。",
  },
  {
    title: "产品资料 / 报价前沟通分发",
    audience: "售前 / 解决方案 / 销售",
    pain: "资料发送靠人工复制粘贴，内容高度同质，发送后的点击与阅读状态完全黑盒。",
    solution: "直连客户画像与产品素材库，自动生成个性化资料说明 / 邮件 / 短信，并全链路追踪打开、点击与回复。",
    benefit: "资料分发更精准、后续跟进时机更清晰，让销售可围绕买家真实兴趣点进行高效推进。",
  },
  {
    title: "销售线索触达与跟进",
    audience: "售前 / 解决方案 / 销售",
    pain: "重复外呼耗时极高，夜间和节假日极易漏接商机，且话术不统一导致满意度参差不齐。",
    solution: "多渠道按时差最佳时机主动触达并实施漏斗级联，复刻销冠级话术方案，提供 AI 售前在线答疑与初筛。",
    benefit: "高意向线索加速沉淀，商机 7×24 全天候不漏接，夜间 / 节假日商机零遗漏，线索转化率大幅提升。",
  },
];

const applicationTags = ["#海外客户开发", "#老客唤醒激活", "#高并发活动邀约", "#询盘7×24值守", "#资料追踪跟进"];

const applicationCases = [
  {
    icon: "case-globe.png",
    fullIcon: true,
    title: "海外线索多通道级联开发场景",
    body: "针对大宗零部件海外买家，AI 自动外呼进行首触初筛，对未接通客户自动下发带有 WhatsApp 破冰表单的上下文短信，紧随其后投递针对该高管 LinkedIn 画像与痛点深度定制的商业方案邮件，将开发信转化率大幅跃升，实现冷线索的高效暖化。",
  },
  {
    icon: "case-phone.svg",
    fullIcon: false,
    title: "7×24 智能双向呼入分流场景",
    body: "出海 SaaS 及服务机构在节假日及深夜通过 AI 呼入分流助手进行值班接待。系统能够实时提取客户的工单与合作需求，高情商解答产品报价，并将高意向客户秒级派发至 CRM，实现跨洋商机创建率零流失。",
  },
];

const deploymentModes = [
  {
    label: "模式 1",
    title: "RaaS 模式 / 托管运营",
    description: "适合中短期高并发推广、老客快速激活、特定活动邀约及资料发放等弹性业务需求。",
    payment: "按实际通联使用量收费，或按 有效意向线索/邀约成功数付费。",
  },
  {
    label: "模式 2",
    title: "私有化部署 / 专属定制",
    description: "适合对客户数据隐私、知识边界、多渠道集成、数据自主权有极高隐私与安全合规要求的企业。",
    payment: "部署/产品定制开发费 + 年度维护与大模型升级服务费。",
  },
];

const serviceHighlights = [
  ["极高作业效率", "效率提升至传统 500% 以上，商机 24 小时值守，通联综合成本仅为传统方式 40%~60%。"],
  ["真正的千人千面", "大模型赋能的个性化话术自适应交互、智能静默打断、以及专属开发信撰写与高频自动化跟进。"],
  ["NLP 语义精准闭环", "反馈分析系统把“是否触达”升级为“为什么没转化、真正关心什么”，实现多维度因果归类并自动回流 CRM，反向赋能销售自进化。"],
];

export default function AiAcquisitionHarnessSolutionPage() {
  return (
    <main className="ahs-page">
      <section className="ahs-hero" aria-labelledby="ahs-title">
        <div className="ahs-hero__glow" aria-hidden="true" />
        <div className="ahs-shell ahs-hero__inner">
          <div className="ahs-hero__copy">
            <p className="ahs-eyebrow"><span aria-hidden="true" />产品专项解决方案 · AI获客HARNESS</p>
            <h1 id="ahs-title"><span>AI销售获客Harness</span><strong>智能解决方案</strong></h1>
            <p className="ahs-hero__subtitle">全场景销售 AI 获客 Harness</p>
            <p className="ahs-hero__lead">专为各行各业打造的智能化、数字化、个性化销售获客 AI Harness。以 AI 主动外呼 / 呼入、自适应邮件 / 文本、场景化动态短信三大子系统的“获客矩阵”，将过去重复、繁重、被动、单一的人工销售作业，升级为全自动、全天候、高并发、高情商的主动式获客。</p>
            <p className="ahs-hero__detail">从「机械群发」到「<strong className="ahs-hero__accent">千人千面</strong>」的个性化智慧触达客户 —— 大模型外呼（呼入）、个性化针对性邮件、场景化短信，全自动 · 全天候 · 高并发 · 高情商地获取主动线索。通过效率提升、降低成本、提升销售业绩三大维度，驱动企业销售能力建设与业绩稳定提升，让获客能力沉淀为企业可自进化的数字资产。</p>
            <BookingTrigger className="ahs-hero__cta">预约产品演示<Image src="/images/solutions/ai-acquisition-harness/hero-arrow.svg" alt="" width={18} height={18} /></BookingTrigger>
          </div>

        </div>
      </section>

      <section className="ahs-overview" aria-labelledby="ahs-overview-title">
        <div className="ahs-shell">
          <h2 className="ahs-section-title" id="ahs-overview-title">AI 赋能企业获客，沉淀为企业可持续、可进化的销售获客能力体系</h2>
          <div className="ahs-overview__grid">
            {overviewCards.map((card) => (
              <article className="ahs-overview__card" key={card.title}>
                <div className="ahs-overview__heading">
                  <span className="ahs-overview__icon" aria-hidden="true">
                    <Image src={`/images/solutions/ai-acquisition-harness/${card.icon}`} alt="" width={22} height={22} />
                  </span>
                  <h3>{card.title}</h3>
                </div>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ahs-pains" aria-labelledby="ahs-pains-title">
        <div className="ahs-shell">
          <h2 className="ahs-section-title" id="ahs-pains-title">二、行业困局与核心痛点</h2>
          <div className="ahs-pains__grid">
            {painCards.map((card, index) => (
              <article className="ahs-pain-card" key={index}>
                <div className="ahs-pain-card__half is-problem">
                  <div className="ahs-pain-card__label">
                    <span><Image src="/images/solutions/ai-acquisition-harness/status-problem.svg" alt="" width={14} height={14} /></span>
                    <strong>传统行业挑战与痛点：</strong>
                  </div>
                  <p>{card.pain}</p>
                </div>
                <div className="ahs-pain-card__half is-solution">
                  <div className="ahs-pain-card__label">
                    <span><Image src="/images/solutions/ai-acquisition-harness/status-solution.svg" alt="" width={14} height={14} /></span>
                    <strong>灵宸 AI 解决方案：</strong>
                  </div>
                  <p>{card.solution}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ahs-flow" aria-labelledby="ahs-flow-title">
        <div className="ahs-shell">
          <h2 className="ahs-section-title" id="ahs-flow-title">三、灵宸重构：核心数字化处理流 (端到端智能闭环)</h2>
          <div className="ahs-flow__grid">
            {flowCards.map((card, index) => (
              <article className="ahs-flow-card" key={card.title}>
                <span className="ahs-flow-card__number" aria-hidden="true">{index + 1}</span>
                <div className="ahs-flow-card__heading">
                  <span><Image src={`/images/solutions/ai-acquisition-harness/${card.icon}`} alt="" width={20} height={20} /></span>
                  <h3>{card.title}</h3>
                </div>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
          <div className="ahs-flow__conclusion">
            <span><Image src="/images/solutions/ai-acquisition-harness/flow-star.svg" alt="" width={20} height={20} /></span>
            <div><strong>黄金矩阵：</strong><p>三大子功能协同的主动闭环，按客户画像在“正确时间、用最合适的语言和温度”完成每一次商业沟通。</p></div>
          </div>
        </div>
      </section>

      <section className="ahs-advantages" aria-labelledby="ahs-advantages-title">
        <div className="ahs-shell">
          <h2 className="ahs-section-title" id="ahs-advantages-title">四、关键竞争优势：不至于高并发，更多是千人千面智慧触达与拟人化柔性筛选线索</h2>
          <p className="ahs-advantages__lead">三大核心子功能差异化竞争优势</p>
          <div className="ahs-advantages__cards">
            {advantageCards.map((card) => (
              <article className="ahs-advantage-card" key={card.title}>
                <h3><Image src="/images/solutions/ai-acquisition-harness/advantage-stack.svg?v=2" alt="" width={16} height={16} />{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
          <div className="ahs-advantages__foundation">
            <h3><Image src="/images/solutions/ai-acquisition-harness/advantage-foundation.svg" alt="" width={16} height={16} />NLP 语义反馈分析 + 意图识别 + 多渠道级联触达 (技术底座)</h3>
            <strong>技术底座把“是否触达”升级为“为什么没转化、客户真正关心什么” —— 反向赋能销售增长。</strong>
            <div className="ahs-advantages__comparisons">
              {advantageComparisons.map(([title, body]) => <p key={title}><b>{title}</b><span>{body}</span></p>)}
            </div>
            <p className="ahs-advantages__note">无论客户说“预算还没批”还是“先发资料看看”、“已有供应商”，反馈分析系统（Feedback Analysis System）均可自动归纳为：预算周期、资料需求、竞品对比、暂不考虑等结构化结论，并给出占比分布。支持混合多渠道级联触达，在流程画布上为不同画像客户自建“电话 ➔ 短信 ➔ 邮件 ➔ 人工销售”组合策略。</p>
          </div>
        </div>
      </section>

      <section className="ahs-outcomes" aria-labelledby="ahs-outcomes-title">
        <div className="ahs-shell">
          <h2 className="ahs-section-title" id="ahs-outcomes-title">五、可交付商业成果与落地价值</h2>
          <p className="ahs-outcomes__lead">把重复、繁重、被动、单一的“机械群发”，升级为可交付商业结果的“千人千面”智慧、主动执行的销售闭环，让每一次客户连接更高效、更精准、更有温度。</p>
          <div className="ahs-outcomes__metrics">
            {outcomeMetrics.map(([value, label]) => <div className="ahs-outcome-metric" key={value}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
          <div className="ahs-outcomes__values">
            {outcomeValues.map((item) => (
              <article className="ahs-outcome-value" key={item.title}>
                <span className={`is-${item.tone}`}><Image src={`/images/solutions/ai-acquisition-harness/${item.icon}`} alt="" width={18} height={18} /></span>
                <div><h3>{item.title}</h3><p>{item.body}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ahs-transition" aria-labelledby="ahs-transition-title">
        <div className="ahs-shell">
          <h2 className="ahs-section-title" id="ahs-transition-title">价值跃迁模型：从传统工具到 AI 主动闭环对照</h2>
          <div className="ahs-transition__table-wrap">
            <table className="ahs-transition__table">
              <thead>
                <tr>
                  <th scope="col">维度</th>
                  <th scope="col">传统做法</th>
                  <th scope="col">灵宸AI销售获客Harness价值</th>
                </tr>
              </thead>
              <tbody>
                {valueTransitionRows.map(([dimension, traditional, harness]) => (
                  <tr key={dimension}><th scope="row">{dimension}</th><td>{traditional}</td><td>{harness}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="ahs-applications" aria-labelledby="ahs-applications-title">
        <div className="ahs-shell">
          <h2 className="ahs-section-title" id="ahs-applications-title">六、部分应用场景示例</h2>
          <p className="ahs-applications__lead">从解放销售获客业务中的「脏活、累活、卡点活」开始 —— 交付给您高意向客户线索。</p>
          <div className="ahs-applications__head">
            <span>场景类型</span>
            <span>服务群体</span>
            <span>灵宸智能适配解决方案</span>
          </div>
          <div className="ahs-applications__list">
            {applicationScenarios.map((item) => (
              <article className="ahs-application-card" key={item.title}>
                <div><h3>{item.title}</h3></div>
                <div><p>{item.audience} 【痛点】{item.pain}</p></div>
                <div><p>【产品如何工作】{item.solution} 【业务收益】{item.benefit}</p></div>
              </article>
            ))}
          </div>
          <div className="ahs-applications__tags" aria-label="应用场景标签">
            {applicationTags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </section>

      <section className="ahs-cases" aria-labelledby="ahs-cases-title">
        <div className="ahs-shell">
          <h2 className="ahs-section-title" id="ahs-cases-title">经典落地案例示例</h2>
          <div className="ahs-cases__grid">
            {applicationCases.map((item) => (
              <article className="ahs-case-card" key={item.title}>
                <div className="ahs-case-card__heading">
                  {item.fullIcon ? <Image src={`/images/solutions/ai-acquisition-harness/${item.icon}`} alt="" width={40} height={40} /> : <span><Image src={`/images/solutions/ai-acquisition-harness/${item.icon}`} alt="" width={20} height={20} /></span>}
                  <h3>{item.title}</h3>
                </div>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ahs-deployment" aria-labelledby="ahs-deployment-title">
        <div className="ahs-shell">
          <h2 className="ahs-section-title" id="ahs-deployment-title">七、合作模式</h2>
          <p className="ahs-deployment__lead">低门槛切入、可量化验证、可持续进化 —— 让企业在智能化浪潮中先试点、再规模化，每一步都稳健可控。</p>
          <div className="ahs-deployment__grid">
            {deploymentModes.map((item) => (
              <article className="ahs-deployment-card" key={item.label}>
                <header className="ahs-deployment-card__heading">
                  <span className="ahs-deployment-card__label"><i aria-hidden="true" />{item.label}</span>
                  <h3>{item.title}</h3>
                </header>
                <p>{item.description}</p>
                <div><strong>付费方案：</strong><p>{item.payment}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ahs-service-strip" aria-label="服务保障">
        <div className="ahs-shell ahs-service-strip__panel">
          {serviceHighlights.map(([title, body], index) => (
            <article className="ahs-service-item" key={title}>
              <span aria-hidden="true">{index + 1}</span>
              <div><h3>{title}</h3><p>{body}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="ahs-closing" aria-labelledby="ahs-closing-title">
        <h2 id="ahs-closing-title">从“机械群发”到“千人千面”的<br />个性化智慧触达客户</h2>
        <p>大模型外呼（呼入）·个性化针对性邮件·场景化短信 — 全自动·全天候·高并发·高情商的主动式获客</p>
      </section>
    </main>
  );
}
