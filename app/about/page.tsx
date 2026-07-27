import type { Metadata } from "next";
import {
  Building2,
  CircleCheck,
  Clock3,
  Code2,
  FlaskConical,
  Globe2,
  Landmark,
  LockKeyhole,
  ShieldCheck,
  UsersRound,
  Zap,
} from "lucide-react";
import { AboutStoryTabs } from "@/components/about-story-tabs";
import { HeroMotto } from "@/components/hero-motto";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "关于灵宸",
  description:
    "了解灵宸智能的 AI 原生 Agent 产品布局、复合型核心团队、品牌故事、合作模式与金融级安全承诺。",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/about",
    siteName: "灵宸智能",
    title: "关于灵宸｜灵宸智能",
    description: "了解灵宸智能的 AI 原生 Agent 产品布局、复合型核心团队、品牌故事、合作模式与金融级安全承诺。",
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://lingchen-ai.com/about/#webpage",
  url: "https://lingchen-ai.com/about/",
  name: "关于灵宸",
  description: "了解灵宸智能的 AI 原生 Agent 产品布局、复合型核心团队、品牌故事、合作模式与金融级安全承诺。",
  isPartOf: { "@id": "https://lingchen-ai.com/#website" },
  about: { "@id": "https://lingchen-ai.com/#organization" },
  inLanguage: "zh-CN",
};

const dnaItems = [
  {
    number: "01",
    title: "资深AI大厂技术团队",
    text: "公司团队由知名 AI 公司与互联网大厂产品&技术负责人，具备底层算法调优、大模型微调、RPA 级流程自动化架构经验。",
  },
  {
    number: "02",
    title: "优秀 AI 产品与 Workflow 设计",
    text: "深刻解构 AI Agent CoT 思维链、长短期记忆解耦与人机协同，致力于把大模型能力重塑为开箱即用的 AI 生产力。",
  },
  {
    number: "03",
    title: "法律、金融、跨境业务专家",
    text: "团队融合资深律师、金融（不良处置）从业者、出海跨境业务专家等团队，我们不仅擅长AI技术，也懂业务流程。",
  },
  {
    number: "04",
    title: "标杆客户AI产品交付与客户成功基因",
    text: "具备中大型上市集团、银行证券、跨境制造大厂等复杂业务流深度接纳经验，全周期保障私有部署快速平稳上机与AI效果实现。",
  },
  {
    number: "05",
    title: "复杂场景安全合规能力",
    text: "深刻理解国内外数据隐私政策及法律底线。在高度敏感的获客和不良资产催收场景，提供技术与法务双重合规闭环，防范过度通联风险。",
  },
];

const cooperationModes = [
  {
    icon: FlaskConical,
    title: "AI Agent 服务 / RaaS",
    text: "按催收实际回款金额，或交付的高价值海外意向 SQL 线索量等可量化商业结果收取服务费，让客户清楚明白ROI，与客户同行。",
  },
  {
    icon: Building2,
    title: "B端企业本地化部署",
    text: "针对中大集团、银行及金融机构提供定制部署及产品智能升级。沙箱物理级安全架构，核心业务敏感数据不出企业内部。",
    inlineTitle: true,
  },
  {
    icon: UsersRound,
    title: "全行业生态合作",
    text: "支持通过 API 接入企业现有 OA、ERP 或 CRM 平台。可灵活采用调用量结算、效果付费或收入分成等合作模式。",
  },
  {
    icon: Globe2,
    title: "区域或行业渠道合作",
    text: "面向优质的渠道商、代理商和生态合作伙伴。提供强大技术支撑、阶梯式高额返佣机制，共同撬动本地化产业落地市场。",
  },
];

const securityItems = [
  {
    number: "01",
    icon: LockKeyhole,
    title: "数据主权承诺",
    text: "客户业务流的原始语料、敏感沟通文字与音档，实施沙箱化隔离存储。数据不私自进入公共大模型训练池。合作终止时，可一键删除相关数据并出具法律效力的删除证明。",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "全流程人机协同可控",
    text: "智能体在执行支付、敏感法务诉讼一键立案、涉较大额呆账催收等核心功能时，均配置安全审批阈值。通知与待处理项支持一键转交真人接待与推进业务进度，保障安全执行。",
  },
  {
    number: "03",
    icon: LockKeyhole,
    title: "双层物理加密安全架构",
    text: "尤其适配金融级加密协议，高传输加密与存储端，存储盘采用块级加密。严格划分多维角色权限分层（执行最小权限分发原则），防范越权与泄密。",
  },
  {
    number: "04",
    icon: CircleCheck,
    title: "合规体系底线安全保障",
    text: "严格依据《数据安全法》《个人信息保护法》精神与具体落地标准，在敏感场景的外呼催收与获客营销场景，系统后台配置拨打频次控制算法、屏蔽暴力、敏感词汇、夜间过度骚扰线，维护品牌形象。",
  },
  {
    number: "05",
    icon: Code2,
    title: "核心架构全线自主研发",
    text: "基于自研的智能体系统底座，在应用、内核与模型层实现技术掌控，具备自主适配各大主流开源或闭源基础大模型的弹性支持，不依赖单一闭源方案与垄断，支持敏捷替换与稳定机制。",
  },
  {
    number: "06",
    icon: Zap,
    title: "服务稳定与质量承诺",
    text: "面向大中型企业，建立专属的客户成功与实施工程师通道，提供全天候系统运维支持；在正式部署前提供完整测试样本验证，满足特定模块功能与精度指标后方可规模化推进。",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="about-label">{children}</p>;
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="about-page">
        <section className="about-hero">
          <HeroMotto page="about" />
          <div className="about-shell about-hero__inner">
            <div className="about-hero__copy">
              <h1>
                <span className="about-hero__title-line">
                  灵宸智能：开箱即用的 <span className="about-hero__title-emphasis">AI 原生 Agent</span>
                </span>
                <span className="about-hero__title-accent">为您的商业结果服务</span>
              </h1>
              <p className="about-hero__description">
                灵宸智能专注于 <strong>出海获客、不良资产处置及风控合规</strong>等细分场景，打造
                <em> AI原生、开箱即用</em>的 AI Agent。通过智能化、自动化与协同化重塑业务流，将前沿 AI 技术转化为
                <strong>可量化、可交付、可自我进化</strong>的增长与现金流成果，并提供可运营、可审计的完整闭环，让 AI Agent
                成为企业增长的<strong>新质生产力</strong>，助力企业在智能化浪潮中敏捷进化。
              </p>
              <div className="about-hero__features" aria-label="产品特点">
                <span><CircleCheck size={16} />结果导向</span>
                <span><Clock3 size={16} />7×24 执行</span>
                <span><UsersRound size={16} />利益对齐</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section about-products">
          <div className="about-shell">
            <div className="about-products__heading">
              <div>
                <SectionLabel>PRODUCT LAYOUT</SectionLabel>
                <h2>一体两翼产品布局</h2>
                <p>以自研AI Agent OS为技术底座和业务引擎，协同交付可量化的现金流回款与业务增长结果。</p>
              </div>
              <div className="about-products__missions">
                <span><i />助力中企出海</span>
                <span><i />助力信用中国</span>
              </div>
            </div>
            <div className="about-product-grid">
              <article>
                <div className="about-product-title-row">
                  <div className="about-card-icon"><Globe2 size={24} /></div>
                  <h3>AI出海获客矩阵</h3>
                </div>
                <span className="about-wing">左翼</span>
                <p>Sales in × Social Grow × Mine GEO × AI 获客 Harness 协同，覆盖海外多渠道全网线索发现、内容种草、大模型流量入口与智慧触达，协同赋能企业出海获客场景。</p>
                <div className="about-product-result"><span>交付商业结果：</span><strong>高意向销售线索 · ROI 绝对清晰</strong></div>
              </article>
              <article>
                <div className="about-product-title-row">
                  <div className="about-card-icon about-card-icon--gray"><Landmark size={23} /></div>
                  <h3>AI不良资产处置</h3>
                </div>
                <span className="about-wing about-wing--right">右翼</span>
                <p>Recov AI 全自动接管逾期资产回款链路，涵盖数据处理、画像、大模型外呼、全域智能触达、法律文书自生成、自主批量立案等闭环。</p>
                <div className="about-product-result"><span>交付商业结果：</span><strong>真金白银不良资产回款 · 按回款收服务费</strong></div>
              </article>
            </div>
          </div>
        </section>

        <section className="about-section about-dna">
          <div className="about-shell">
            <header className="about-section__head">
              <h2>为什么选择灵宸：复合型核心团队 DNA</h2>
              <p>大模型工程能力 × 产业级产品化设计 × 法律/金融/跨境专家团队与实务经验 × 全球领先的行业标杆客户成功交付经验</p>
            </header>
            <div className="about-dna-grid">
              {dnaItems.map((item) => (
                <article key={item.number}>
                  <div className="about-dna-grid__top">
                    <strong>{item.number}</strong>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section about-story">
          <div className="about-shell about-story__layout">
            <AboutStoryTabs />
          </div>
        </section>

        <section className="about-section about-cooperation">
          <div className="about-shell">
            <header className="about-section__head">
              <h2>灵活多元的合作模式</h2>
              <p>按客户类型与业务诉求灵活组合，支持从单一场景小步试点到全面落地，深度对齐核心利益。</p>
            </header>
            <div className="about-mode-grid">
              {cooperationModes.map((mode) => (
                <article key={mode.title}>
                  <div className="about-mode-card__heading">
                    <div className="about-card-icon"><mode.icon size={23} /></div>
                    <h3>{mode.title}</h3>
                  </div>
                  <p>{mode.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section about-security">
          <div className="about-shell">
            <header className="about-security__head">
              <SectionLabel>FINANCIAL GRADE COMMITMENT <span>{"// 安全合规信任红线"}</span></SectionLabel>
              <h2>安全与信任承诺：为您筑起安全护盾</h2>
            </header>
            <div className="about-security-grid">
              {securityItems.map(({ number, icon: Icon, title, text }) => (
                <article key={number}>
                  <div className="about-security-grid__top">
                    <strong>{number}</strong>
                    <h3>{title}</h3>
                    <span><Icon size={16} /></span>
                  </div>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
