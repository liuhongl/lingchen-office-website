import Image from "next/image";

import { BookingTrigger } from "@/components/booking-trigger";

const problemPairs = [
  {
    problem: "名单多但有效性低，销售时间被无效客户消耗",
    solution: "以 ICP 规则自动筛选和评分，优先输出高匹配账户",
  },
  {
    problem: "客户背景分散在官网、新闻、招聘和社媒，调研慢",
    solution: "生成客户洞察与采购信号，帮助销售快速判断切入点",
  },
  {
    problem: "触达内容缺少个性化、针对性，海外客户回复率不稳定",
    solution: "基于客户情境生成针对性邮件 / LinkedIn 内容，支持多轮跟进",
  },
  {
    problem: "优秀销售经验只在个人手里，新人复制难",
    solution: "沉淀画像、话术、模板、评分规则和 CRM 过程数据",
  },
] as const;

const digitalFlow = [
  {
    title: "STEP 1 ICP 建模：客户画像数据模型化",
    description: "根据目标客户经验，AI 智能体将行业、国家/地区、产品场景、采购信号与负向因子、排除规则等拆解为可执行的数据模型，统一团队客户标准。",
  },
  {
    title: "STEP 2 线索发现与评分：从“更多名单”到“更值得跟进”",
    description: "通过多源挖掘（行业协会/展会/官网等）、数据清洗富化、NLP 语义意图识别，及多维度数据驱动的自进化评分排序（画像匹配、可触达数据、采购信号等），输出优先级客户线索池。",
  },
  {
    title: "STEP 3 客户洞察：公开信号转为高价值情报",
    description: "整合官网动态、行业新闻、招聘、社媒、招投标等多源信息，分钟级自动生成战略背景（扩产/融资/供应链等）、采购信号、决策人线索与定制切入建议的尽调报告。",
  },
  {
    title: "STEP 4 个性化触达：保持客户语境，杜绝群发噪音",
    description: "基于客户洞察、业务规则与本地化语境，一键生成符合业务语境的邮件 / LinkedIn 等高度个性化内容，支持多变量、语气微调和多轮多触点跟进，状态可追踪。",
  },
  {
    title: "STEP 5 转化与集成：销售能力沉淀与全链路闭环",
    description: "将 AI 获客 Agent 深度接入企业知识、业务系统（CRM、邮箱、LinkedIn）以及提供数据可见性分析，实现过程留痕、ROI评估与销售流程的可管理、可复制、可复用。",
  },
] as const;

const advantages = [
  { title: "ICP 规则可配置", description: "用业务语言描述目标客户，沉淀为可复用筛选规则", icon: "/images/sales-in-solution/advantage-rules.svg" },
  { title: "客户洞察可复核", description: "基于公开信号和客户资料生成可追溯调研初稿", icon: "/images/sales-in-solution/advantage-review.svg" },
  { title: "评分模型可进化", description: "按行业、区域、意向、角色等维度持续优化权重", icon: "/images/sales-in-solution/advantage-score.svg" },
  { title: "触达动作可追踪", description: "邮件、LinkedIn、CRM 状态统一记录，避免资产流失", icon: "/images/sales-in-solution/advantage-tracking.svg" },
  { title: "系统边界可治理", description: "权限、审计、人工确认与本地化接入适配企业要求", icon: "/images/sales-in-solution/advantage-governance.svg" },
] as const;

const resultMetrics = [
  { value: "7×24", description: "全天候跨时区获客，商机 24 小时不漏接", tone: "blue" },
  { value: "500%+", description: "触达效率较人工提升，通联成本降至 30%~60%", tone: "green" },
  { value: "-70%~-90%", description: "内容与调研生产周期大幅压缩，分钟级成稿", tone: "purple" },
  { value: "1 → N", description: "一份知识资产循环产出线索、内容与品牌曝光", tone: "orange" },
] as const;

const resultValues = [
  {
    title: "获客价值 · 线索更准、更可解释",
    description: "以 ICP 模型 + 多维评分替代冷名单，输出可解释、可筛选、可复盘的优先级线索池；正向回复率、商机创建率全程可量化。",
  },
  {
    title: "经营价值 · 销售能力沉淀与复制",
    description: "画像、话术、模板、评分规则与过程数据持续沉淀，复刻销冠经验；人员流动不再带走客户资产，新人快速上手。",
  },
  {
    title: "增长价值 · ROI 可衡量、可优化",
    description: "线索量、回复率、转化率统一看板复盘，按 POC 指标验证效果；支持按意向线索量 / 回款结果付费，利益深度对齐。",
  },
] as const;

const applicationScenarios = [
  { module: "出海目标客户发现", audience: "适合 销售 / 市场 / BD 阶段", result: "有效线索量与占比、商机创建率", tone: "blue" },
  { module: "目标客户尽调报告", audience: "适合 售前 / 解决方案 阶段", result: "调研与报告撰写时长、复用率", tone: "green" },
  { module: "客户咨询自动应答", audience: "适合 官网 / 邮件 / 社媒 互动", result: "首响时间、问题解决率", tone: "purple" },
  { module: "销售线索跟进辅助", audience: "适合 销售代表 / 主管 日常", result: "跟进及时率、意图识别准确率、内容针对性", tone: "orange" },
  { module: "企业知识智能检索", audience: "适合 新人销售 / 渠道 培训", result: "查询耗时、培训周期", tone: "blue" },
  { module: "经营数据分析", audience: "适合 销售管理层 决策", result: "数据整理与生成时长、决策周期", tone: "green" },
] as const;

const scenarioExamples = [
  {
    title: "场景一：出海目标客户发现，从名单采购转向意向识别",
    description: "适合需要持续开发海外客户的如外贸、跨境 B2B、制造业等。通过 1.创建 ICP 模型 -> 2.扫描 -> 3.评分 -> 4.交付 -> 5.跟进。收益包括减少无效名单和低质量跟进，销售精力向高匹配度客户集中，建立多维度市场情报反馈体系。",
    tone: "blue",
  },
  {
    title: "场景二：客户互动与跟进，让专业响应不再只依赖少数专家",
    description: "适合产品复杂、售前资源紧张、跨时区咨询频繁的销售团队。人与 AI 协同响应，业务关键节点人工接管。支持调用企业知识库、客户调研报告、历史成功话术，生成问答建议、方案初稿、跟进邮件等，实现首响更快、知识更准、方案更稳、培训更省。",
    tone: "green",
  },
] as const;

const cooperationModes = [
  {
    label: "模式 1",
    title: "轻量 POC 验证",
    description: "适合想要先以小成本快速验证出海获客效果或售前支持的成长型企业",
    plan: "按 POC 指标采集验收，真实样本数据说话，低门槛启动",
  },
  {
    label: "模式 2",
    title: "系统化规模推广",
    description: "适合已有 CRM、系统邮箱、知识库和社媒 LinkedIn 基础的成熟型出海团队",
    plan: "按意向线索量 / 回款结果付费，支持利益深度对齐",
  },
  {
    label: "模式 3",
    title: "私有化与本地化部署",
    description: "适合对数据主权、隔离安全和定制边界有极高合规审计需求的大型出海集团",
    plan: "提供一次性买断、本地部署运维、或者按阶段里程碑交付",
  },
] as const;

const deliveryPath = [
  {
    label: "第一步",
    title: "业务场景梳理",
    description: "用 2-4 周 POC 快速证明价值，通过真实样本定义验收指标，梳理现有获客难点。",
    icon: "/images/sales-in-solution/path-discovery.svg",
  },
  {
    label: "第二步",
    title: "构建 ICP 模型并试点",
    description: "基于现有成功客群数据，提炼并配置结构化 ICP 建模与过滤规则，进行小范围高敏开发。",
    icon: "/images/sales-in-solution/path-model.svg",
  },
  {
    label: "第三步",
    title: "系统集成与配置",
    description: "通过验收后，将获客 Harness 接入 CRM 系统、企业邮箱及 LinkedIn，配置人工确认与安全审核边界。",
    icon: "/images/sales-in-solution/path-integration.svg",
  },
  {
    label: "第四步",
    title: "规模化运营与进化",
    description: "正式上线测试并进入常态化运作，持续积累用户行为反馈并回写评分模型、开发话术。",
    icon: "/images/sales-in-solution/path-scale.svg",
  },
] as const;

const salesInReasons = [
  { title: "结果导向：", description: "聚焦可衡量的销售结果，交付高质量线索池与商机增量，而非又一个数据工具。", tone: "blue", icon: "/images/sales-in-solution/reason-results.svg" },
  { title: "合规安全：", description: "尊重各地数据与触达合规，全程可追溯、可复核，守护出海品牌长期声誉。", tone: "green", icon: "/images/sales-in-solution/reason-compliance.svg" },
  { title: "全链路闭环：", description: "ICP、线索、洞察、触达、CRM 回写一体，从找客户到成交持续沉淀客户资产。", tone: "purple", icon: "/images/sales-in-solution/reason-loop.svg" },
] as const;

export default function SalesInSolutionPage() {
  return (
    <main className="sis-page">
      <section className="sis-hero" aria-labelledby="sis-title">
        <div className="sis-shell">
          <p className="sis-hero__eyebrow">产品专项解决方案 · 出海获客 AI Agent-Sales in</p>
          <h1 id="sis-title">出海获客 AI Agent-Sales in 智能解决方案</h1>
          <p className="sis-hero__lead">构建您的出海获客能力体系 · 让获客到成交的每一步都可衡量、可复制</p>
          <p className="sis-hero__body">客户得到的不只是工具，而是一套出海销售增长工作流。从获客到成交推进，让团队减少重复劳动，把精力投向高价值客户沟通与转化。通过高质量线索、客户洞察、个性化触达、销售转化，让出海销售全链闭环运作。</p>
          <BookingTrigger className="sis-primary-cta">预约产品演示<span aria-hidden="true" /></BookingTrigger>
        </div>
      </section>

      <section className="sis-problems" aria-labelledby="sis-problems-title">
        <div className="sis-shell">
          <h2 id="sis-problems-title" className="sis-section-title">一、行业困局与核心痛点</h2>
          <div className="sis-problems-grid">
            {problemPairs.map((item) => (
              <article className="sis-problem-card" key={item.problem}>
                <div className="sis-problem-row sis-problem-row--challenge">
                  <span aria-hidden="true">!</span>
                  <div><strong>传统痛点与挑战</strong><p>{item.problem}</p></div>
                </div>
                <div className="sis-problem-row sis-problem-row--solution">
                  <span aria-hidden="true">✓</span>
                  <div><strong>灵宸 AI 解决方案：</strong><p>{item.solution}</p></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sis-flow" aria-labelledby="sis-flow-title">
        <div className="sis-shell">
          <h2 id="sis-flow-title" className="sis-section-title">二、灵宸重构：核心数字化处理流（端到端智能闭环）</h2>
          <div className="sis-flow-grid">
            {digitalFlow.map((item, index) => (
              <article className="sis-flow-item" key={item.title}>
                <span className="sis-flow-number">{index + 1}</span>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </article>
            ))}
          </div>
          <aside className="sis-flow-note">
            <span aria-hidden="true">i</span>
            <p>差异化竞争力：从“生成内容”升级为“运营销售流程”，把 AI 能力、业务数据、客户画像、业务规则回写连接成持续增长的销售闭环。</p>
          </aside>
        </div>
      </section>

      <section className="sis-advantages" aria-labelledby="sis-advantages-title">
        <div className="sis-shell">
          <h2 id="sis-advantages-title" className="sis-section-title">三、关键竞争优势：多维能力协同，构筑企业专属资产</h2>
          <h3 className="sis-section-subtitle">差异化竞争力：五大可运营、可治理、可进化的闭环能力</h3>
          <div className="sis-advantages-grid">
            {advantages.map((item) => (
              <article className="sis-advantage-card" key={item.title}>
                <div className="sis-advantage-card__heading"><span aria-hidden="true"><Image src={item.icon} alt="" width={24} height={24} /></span><h4>{item.title}</h4></div><p>{item.description}</p>
              </article>
            ))}
          </div>
          <aside className="sis-advantages-compare">
            <h4>与普通 AI 聊天工具相比</h4>
            <p>不是一次性使用，而是能持续沉淀客户画像、过程数据和获客方法 —— 把出海获客流程做成可管理、可复制、可复用、可进化的运营体系。</p>
          </aside>
        </div>
      </section>

      <section className="sis-results" aria-labelledby="sis-results-title">
        <div className="sis-shell">
          <h2 id="sis-results-title" className="sis-section-title">四、可交付商业成果与落地价值</h2>
          <p className="sis-section-lead">价值指标：把出海获客从「碰运气」变成「可经营的增长资产」。四大引擎可共享客户画像、知识库与数据回流，越用越懂您的业务，沉淀为企业可持续、可进化的获客能力。</p>
          <div className="sis-metrics-grid">
            {resultMetrics.map((item) => (
              <article className={`sis-metric sis-metric--${item.tone}`} key={item.value}>
                <strong>{item.value}</strong><p>{item.description}</p>
              </article>
            ))}
          </div>
          <div className="sis-values-grid">
            {resultValues.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="sis-scenarios" aria-labelledby="sis-scenarios-title">
        <div className="sis-shell">
          <h2 id="sis-scenarios-title" className="sis-section-title">五、部分应用场景示例</h2>
          <p className="sis-section-lead">先选择高频、重复、可衡量、数据可接入、人工复核边界明确的销售场景（筛选标准：高频 | 重复 | 可接入 | 可量化）。</p>
          <div className="sis-scenarios-head" aria-hidden="true"><span>业务模块 / 场景类型</span><span>核心痛点 / 服务群体</span><span>灵宸智能适配解决方案</span></div>
          <div className="sis-scenarios-table">
            {applicationScenarios.map((item) => (
              <article className={`sis-scenario-row sis-scenario-row--${item.tone}`} key={item.module}>
                <div><strong>{item.module}</strong></div><p>{item.audience}</p><p>{item.result}</p>
              </article>
            ))}
          </div>
          <h3 className="sis-scenario-examples-title">典型落地场景示例</h3>
          <div className="sis-scenario-examples">
            {scenarioExamples.map((item) => <article className={`sis-scenario-example sis-scenario-example--${item.tone}`} key={item.title}><h4>{item.title}</h4><p>{item.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="sis-cooperation" aria-labelledby="sis-cooperation-title">
        <div className="sis-shell">
          <h2 id="sis-cooperation-title" className="sis-section-title">六、合作模式</h2>
          <p className="sis-section-lead">按实际意向线索量付费，利益深度对齐。先用真实样本验证，再扩大场景；用数据说话，而不是用概念承诺。</p>
          <div className="sis-cooperation-grid">
            {cooperationModes.map((item, index) => (
              <article className={index === 0 ? "is-primary" : undefined} key={item.label}>
                <span>{item.label}</span><h3>{item.title}</h3><p>{item.description}</p><p><strong>付费方案：</strong>{item.plan}</p>
              </article>
            ))}
          </div>
          <h3 className="sis-path-title">落地路径：先验证一个流程，再扩展成销售智能体能力</h3>
          <div className="sis-path-grid">
            {deliveryPath.map((item) => (
              <article key={item.label}><div className="sis-path-card__heading"><span aria-hidden="true"><Image src={item.icon} alt="" width={24} height={24} /></span><small>{item.label}</small></div><h4>{item.title}</h4><p>{item.description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="sis-why" aria-labelledby="sis-why-title">
        <div className="sis-shell">
          <div className="sis-why-panel">
            <h2 id="sis-why-title">为什么选择灵宸 Sales in？</h2>
            <div className="sis-why-list">
              {salesInReasons.map((item, index) => (
                <article className={`sis-why-item sis-why-item--${item.tone}`} key={item.title}>
                  <b aria-hidden="true"><Image src={item.icon} alt="" width={24} height={24} /></b><p>{index + 1}. {item.title}{item.description}</p>
                </article>
              ))}
            </div>
            <p className="sis-why-summary">让每一次出海客户连接，都高效、合规地转化为可持续增长。</p>
          </div>
        </div>
      </section>

      <section className="sis-closing" aria-labelledby="sis-closing-title">
        <div className="sis-shell"><h2 id="sis-closing-title">构建您的出海销售 AI Agent 客户增长能力</h2><p>让每一次出海客户连接，都高效、合规地转化为可持续增长。</p></div>
      </section>
    </main>
  );
}
