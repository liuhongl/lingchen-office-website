"use client";

import {
  ArrowRight,
  Zap,
} from "lucide-react";
import { BookingTrigger } from "@/components/booking-trigger";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://lingchen-ai.com/#webpage",
  url: "https://lingchen-ai.com/",
  name: "灵宸智能｜让 AI Agent 成为企业增长的新质生产力",
  description: "灵宸智能以企业级 AI Agent 架构与产品，为企业出海获客、批量债权处置与专业服务提供可量化、可验收的商业结果。",
  isPartOf: { "@id": "https://lingchen-ai.com/#website" },
  about: { "@id": "https://lingchen-ai.com/#organization" },
  inLanguage: "zh-CN",
};

const problems = [
  {
    title: "出海获客靠碰运气",
    text: "海外客户线索杂乱分散，缺少采购信号印证，人工开发效率低下，盲目开发回复率更低，出海企业说不清 ROI，获客成本高。",
  },
  {
    title: "海外营销供给极其不稳定",
    text: "出海高意向客户线索时高时低、不稳定，缺乏标准化、可运营、可自我进化的出海业务获客体系。",
  },
  {
    title: "小额批量不良资产催收效率低、成本高",
    text: "小额批量债权催收中，人力成本高、回款效率慢，易触发违规侵扰，大量不良资产被搁置，影响企业现金流。",
  },
  {
    title: "高频机械体力活严重损耗团队人效",
    text: "人工搜寻、盲目触达等繁重、机械劳作严重损耗员工精力、成本高企，团队无法聚焦转化与商业决策，遇到增长瓶颈。",
  },
];

const values = [
  { value: "50%+", title: "人效价值 · 释放团队", text: "智能替代重复、机械等工作，人力成本降低50%+，将一线实务策略与know-how沉淀为企业知识资产。", tone: "blue" },
  { value: "90%~95%+", title: "风控价值 · 减损合规", text: "跨境出海业务中的信息提取率95%+，跨境单证智能审核准确率达90%+，分钟级高准确率拦截不符点和合规瑕疵。", tone: "cyan" },
  { value: "300%+", title: "现金流价值 · 回款增收", text: "成千上万笔标准化、小额、批量逾期债权高效转化为企业现金流。回款效率较人工提升300%+，按实际催回金额比例分成服务费。", tone: "violet" },
  { value: "500%+", title: "增长价值 · 获客提效", text: "出海业务客户调研和背景穿透由数小时压缩至分钟级，触达效率提升至传统人力的500%+。获客体系可持续进化，ROI算得清清楚楚。", tone: "pink" },
];

const agentSteps = [
  { number: "01", label: "数据处理", title: "ICP模型构建", text: "目标客户或逾期群体千人千面AI画像" },
  { number: "02", label: "思考层", title: "知识推理与判断", text: "大模型思维链(CoT)流转决策" },
  { number: "03", label: "记忆机制", title: "知识沉淀与应用", text: "业务策略与个性化话术沉淀" },
  { number: "04", label: "服务诊断", title: "经验总结与归类", text: "原因结构化自动归档诊断" },
  { number: "05", label: "优化迭代", title: "持续反思与补救", text: "持续反思与递归进化，越来越懂您的业务。" },
  { number: "06", label: "真金落地", title: "结果回写与进化", text: "完成意向线索挖掘或逾期资产回款" },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" id="top">
          <div className="hero__orb hero__orb--one" />
          <div className="hero__orb hero__orb--two" />
          <div className="shell hero__content">
            <div className="eyebrow"><i aria-hidden="true" />携手灵宸 AI · 开启 AI AGENT 生产力新时代</div>
            <h1>让 AI Agent 成为企业增长的<br /><span>新质生产力</span></h1>
            <div className="hero__statement-card">
              <div className="hero__agent-badge">
                <strong>灵宸 AI-Agent</strong>
                <span>为您的商业结果服务</span>
              </div>
              <div className="hero__harness-copy">
                <strong>灵宸 AI Revenue Harness</strong>
                <p>能自主执行复杂业务流程、按可量化指标交付商业结果、端到端的<strong>企业级智能体（AI Agent）</strong>架构与产品。</p>
              </div>
            </div>
            <div className="hero__mission"><span>助力信用中国建设</span><span>助力中企走向世界</span></div>
            <div className="hero__actions">
              <a className="button" href="#value">查看产品矩阵 <ArrowRight size={16} /></a>
              <BookingTrigger className="button button--ghost">预约产品演示与体验</BookingTrigger>
            </div>
          </div>
        </section>

        <section className="section problems" id="problems">
          <div className="shell problems-layout">
            <div className="section-intro problem-list">
              <h2>我们在解决什么问题？</h2>
              <p>在企业出海获客、批量债权催缴、法律案件拓展等领域中的每一个业务流程里，都在大量消耗人力，效率低、成本高、影响增长与现金流.....</p>
              <div className="problem-rows">
                {problems.map(({ title, text }, index) => (
                  <article key={title}>
                    <span aria-hidden="true" data-index={String(index + 1).padStart(2, "0")} />
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </article>
                ))}
              </div>
            </div>
            <div className="solution-panel">
              <div className="solution-panel__heading"><strong><Zap size={18} />灵宸智能：两大核心业务方向</strong><p>AI 深度重构关键业务流，皆以可量化的商业结果（SQL 线索、现金流回款等）为交付标的</p></div>
              <article className="solution-card solution-card--blue">
                <div className="solution-card__title"><span>01</span><h3>AI 出海获客智能体</h3></div>
                <p>Sales in × Social Grow × Mine GEO × AI 获客 Harness 协同，覆盖线索发现、内容种草、AI入口治理与规模触达。</p>
                <ul><li>找得准：ICP 画像挖掘与意向评分</li><li>触得到：7×24 千人千面智能触达</li><li>交付标的：高意向客户线索 · 按高意向客户线索等收取服务费</li></ul>
              </article>
              <article className="solution-card solution-card--purple">
                <div className="solution-card__title"><span>02</span><h3>AI 批量债权催收智能体</h3></div>
                <p>Recov AI 接管逾期资产全链路，从策略生成、债务人画像、信息修复、多身份全域触达、文书生成到自动立案。</p>
                <ul><li>降本增效：高并发、全链路自动化执行</li><li>控风险：话术绝对合规、留痕无纠纷</li><li>交付标的：现金流回款结果 · 按回款结果等收取服务费</li></ul>
              </article>
            </div>
          </div>
            <div className="problem-summary"><strong>把高频、重复的繁重工作交给 AI</strong> <span className="summary-blue">高并发</span>、<span className="summary-cyan">智慧化</span>、<span className="summary-purple">批量</span>、<span className="summary-pink">合规</span>地执行，让人专注关键判断与商业决策。</div>
        </section>

        <section className="section value" id="value">
          <div className="shell">
            <header className="section-header section-header--wide">
              <h2 className="value-title">
                <span className="value-title__lead">我们的产品理念：把最先进的AI技术转化<br />为</span>
                <span className="value-title__tail">
                  <span className="value-title__result gradient-text">可交付商业结果</span>
                  <span className="value-title__suffix">的生产力。</span>
                </span>
              </h2>
              <p>我们不是售卖AI软件工具，而是围绕业务增长、现金流、人效等维度为您提供可量化、可验收商业结果的AI Agent OS，为您的商业结果服务。</p>
            </header>
            <div className="value-grid">
              {values.map((item) => (
                <article className={`value-card value-card--${item.tone}`} key={item.value}>
                  {item.value === "90%~95%+" && <a className="value-card__link" href="/products/deepdoc/" aria-label="查看 DeepDoc 产品详情" />}
                  <strong>{item.value}</strong>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="value-ribbon">
              <span><i />结果可量化 · 价值可验收</span>
              <span><i />支持先 POC 验证 · 再规模化投入</span>
              <span><i />递归式自我进化、越用越好用 · 资产持续增值</span>
            </div>
          </div>
        </section>

        <section className="section agent-os" id="agent-os">
          <div className="shell">
            <header className="section-header">
              <h2>自主进化的 <span className="agent-os-title">Agent OS</span>智能体内核</h2>
              <p>数据飞轮与认知机制深度结合，自研金融级复杂任务决策架构与数据安全架构，持续交付商业结果、持续提升ROI。</p>
            </header>
            <div className="agent-ring">
              <svg className="agent-ring__orbits" viewBox="0 0 1120 680" aria-hidden="true">
                <ellipse className="orbit orbit--inner" cx="560" cy="340" rx="276" ry="184" />
                <ellipse className="orbit orbit--middle" cx="560" cy="340" rx="326" ry="218" />
                <path className="orbit-arc" d="M280 166C344 112 414 98 475 94" />
                <path className="orbit-arc" d="M645 94C706 98 776 112 840 166" />
                <path className="orbit-arc" d="M878 201C924 275 924 405 878 479" />
                <path className="orbit-arc" d="M840 514C776 568 706 582 645 586" />
                <path className="orbit-arc" d="M475 586C414 582 344 568 280 514" />
                <path className="orbit-arc" d="M242 479C196 405 196 275 242 201" />
              </svg>
              <div className="agent-ring__center">
                <small>LINGCHEN AI</small>
                <strong>自进化 Agent OS</strong>
                <span>智能体内核</span>
                <i aria-hidden="true"><em /><em /><em /></i>
              </div>
              {agentSteps.map(({ number, label, title, text }, index) => (
                <article className={`agent-step agent-step--${index + 1}`} key={number}>
                  <b>{number}</b>
                  <strong>{title}</strong>
                  <small>{label}</small>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="about-grid" id="about">
              <article className="about-card about-card--blue"><h3>我们的定位</h3><strong>AI 原生的智能体增长引擎</strong><p>让最前沿 AI 技术转化为新质生产力，真正服务于个人事业与企业经营。</p></article>
              <article className="about-card about-card--purple"><h3>我们的承诺</h3><strong>以结果为导向，与客户同行</strong><p>不止于技术领先，更以可量化的交付结果与深度对齐的利益指标，赢得长期信任。</p></article>
              <article className="about-card about-card--cyan"><h3>我们的愿景</h3><strong>与企业共赴AI生产力时代，为您的商业结果服务。</strong><p>让每一家企业都能从容驾驭 AI 浪潮，实现可持续的增长与进化。</p></article>
            </div>
          </div>
        </section>

        <section className="closing-cta">
          <div className="closing-cta__glow" />
          <div className="shell">
            <h2>开启您的 <span>AI Agent</span>增长之旅</h2>
            <p>立即预约产品演示，体验灵宸 AI-Agent 如何为您的企业带来可量化的商业结果。</p>
            <BookingTrigger className="button">立即体验</BookingTrigger>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
