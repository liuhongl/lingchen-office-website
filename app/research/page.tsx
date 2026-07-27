import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import aiComplianceArticle from "@/content/research/ai-debt-collection-compliance-engineering/article.json";
import { additionalResearchArticles } from "@/lib/additional-research-articles";
import type { FigureBlock, ResearchArticle } from "@/lib/research-articles";
import { ResearchArticleList, type ResearchListArticle } from "./research-article-list";

export const metadata: Metadata = {
  title: "灵宸研究院",
  description:
    "聚焦企业级AI落地实践，输出行业洞察、技术白皮书与产品演进动态，助力决策者把握智能化转型的关键路径。",
  alternates: { canonical: "/research" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/research",
    siteName: "灵宸智能",
    title: "灵宸研究院｜灵宸智能",
    description:
      "聚焦企业级AI落地实践，输出行业洞察、技术白皮书与产品演进动态，助力决策者把握智能化转型的关键路径。",
  },
};

const featuredArticles: ResearchListArticle[] = [
  {
    number: "1",
    tag: "行业洞察",
    title: 'Agent OS 三层架构：企业 AI 从"堆工具"到"建底座"的分水岭',
    summary:
      '摘要：在2026年智能化洗牌期，企业单纯堆砌单点大模型工具的做法正在失效。本文解构"底座层二次构建、内核层数据飞轮、应用层全线复用"的 Agent OS 三层架构，深入剖析如何通过建立底座来指数级降低上后续AI场景的边际成本，帮助CIO与业务决策者越过分水岭。',
    date: "2024.12",
    duration: "12 分钟",
    image: "/images/research-institute/article-26@2x.png",
    background: "/images/research-institute/article-bg-28@2x.png",
    href: "/research/agent-os-three-layer-architecture/",
  },
  {
    number: "2",
    tag: "行业洞察",
    title: "多智能体协作走出示范厅：从批量催收全链路看 Agent 工程化落地的三道门槛",
    summary:
      '摘要：多智能体（Multi-Agent）系统正在成为复杂业务的主角，但从单 Agent 演示 Demo 到多 Agent 生产级协作之间存在着巨大的断层。本文以物业及消费金融催收链路中"管家→客服→法务→律师"的角色动态流转为样本，拆解多 Agent 协同落地的三道技术门槛。',
    date: "2024.11",
    duration: "15 分钟",
    image: "/images/research-institute/article-41@2x.png",
    background: "/images/research-institute/article-bg-43@2x.png",
    href: "/research/multi-agent-collaboration-engineering/",
  },
  {
    number: "3",
    tag: "行业洞察",
    title: '企业知识资产化：数据飞轮如何让"人走了，能力留下"',
    summary:
      '摘要：现代企业最核心的竞争力，正在从"雇到能人"转向"沉淀系统级能力"。本文通过解构灵宸智能的"知识发现与解析、逻辑推理、结果反向回写、循环进化"数据飞轮模型，深度解析如何将高价值员工 of 个人经验全量、自动沉淀为企业的数字智力资产。',
    date: "2024.10",
    duration: "10 分钟",
    image: "/images/research-institute/article-56@2x.png",
    background: "/images/research-institute/article-bg-58@2x.png",
    href: "/research/enterprise-knowledge-assetization-data-flywheel/",
  },
  {
    number: "4",
    tag: "行业洞察",
    title: "按结果付费（RaaS）：当 AI 供应商开始与你共担风险，采购逻辑变了什么",
    summary:
      '摘要：摘要：RaaS 把 AI 采购从"买功能"推向"买结果"。供应商愿意按意向线索、实际回款、节省成本收费,意味着它必须共同承担交付风险,采购方也要重新设计合同、验收口径和数据配合义务。',
    date: "2024.09",
    duration: "8 分钟",
    image: "/images/research-institute/article-71@2x.png",
    background: "/images/research-institute/article-bg-73@2x.png",
    href: "/research/results-as-a-service-raas/",
  },
  {
    number: "5",
    tag: "行业洞察",
    title: "结果型 Agent 怎么验收：有效线索、实际回款、审核准确率与人效的指标体系",
    summary:
      '摘要：企业对 AI Agent 的验收，正在从传统的"对照软件功能清单打勾"，彻底切换为"看数字员工兑现了多少业务结果"。本文为您解构有效线索量、实际回款额、合同/单证审核准确率以及人效提升比例四大核心验收指标体系，拆解常见口径陷阱，给出 15 天 POC 敏捷验收指南。',
    date: "2024.08",
    duration: "14 分钟",
    image: "/images/research-institute/article-86@2x.png",
    background: "/images/research-institute/article-bg-88@2x.png",
    href: "/research/results-oriented-ai-agent-acceptance-metrics/",
  },
  {
    number: "6",
    tag: "行业洞察",
    title: '万亿"毛细血管"债权：批量小额逾期为什么成了 AI 的主场',
    summary:
      '摘要：物业费、公用事业欠费、消费分期等万亿级小额、批量逾期债权，长期以来是催收行业的"硬骨头"。高企的人工成本导致传统催收在这些小额债权上面临单位经济模型（Unit Economics）的失灵。本文解构 AI 催收如何重写成本曲线与合规底线，将搁置坏账重新变为确定性现金流。',
    date: "2024.07",
    duration: "11 分钟",
    image: "/images/research-institute/article-101@2x.png",
    background: "/images/research-institute/article-bg-103@2x.png",
    href: "/research/ai-batch-small-overdue-debt/",
  },
  {
    number: "7",
    tag: "行业洞察",
    title: aiComplianceArticle.sourceTitle,
    summary: aiComplianceArticle.summary,
    image: "/images/research/ai-debt-collection-compliance-engineering/figure-01.png",
    imageAlt: "",
    editorialCover: { kind: "governance", accent: "#22d3ee", secondary: "#fb7185" },
    href: "/research/ai-debt-collection-compliance-engineering/",
  },
];

const editorialResearchCovers: Record<string, NonNullable<ResearchListArticle["editorialCover"]>> = {
  "agent-os-30-day-implementation-guide": { kind: "layers", accent: "#38bdf8", secondary: "#818cf8" },
  "ai-acquisition-harness-scale-outreach": { kind: "channels", accent: "#60a5fa", secondary: "#a78bfa" },
  "ai-acquisition-harness-smart-outreach": { kind: "channels", accent: "#22d3ee", secondary: "#f59e0b" },
  "ai-answer-fact-position-first-mover-window": { kind: "network", accent: "#818cf8", secondary: "#c084fc" },
  "ai-debt-collection-compliance-governance-whitepaper": { kind: "governance", accent: "#2dd4bf", secondary: "#fb7185" },
  "brand-geo-governance-whitepaper": { kind: "network", accent: "#a78bfa", secondary: "#22d3ee" },
  "collection-data-service-quality-credit-governance": { kind: "loop", accent: "#34d399", secondary: "#22d3ee" },
  "credit-card-consumer-finance-overdue-collection-whitepaper": { kind: "governance", accent: "#f59e0b", secondary: "#38bdf8" },
  "cross-border-b2b-outbound-guide": { kind: "global", accent: "#38bdf8", secondary: "#f59e0b" },
  "cross-border-document-ai-review": { kind: "documents", accent: "#22d3ee", secondary: "#f59e0b" },
  "deepdoc-cross-border-document-review": { kind: "documents", accent: "#60a5fa", secondary: "#c084fc" },
  "deeplaw-legal-ai-harness": { kind: "matrix", accent: "#818cf8", secondary: "#22d3ee" },
  "four-engine-overseas-acquisition-whitepaper": { kind: "matrix", accent: "#38bdf8", secondary: "#f59e0b" },
  "geo-budget-shift-to-ai-answer-entry": { kind: "metrics", accent: "#a78bfa", secondary: "#22d3ee" },
  "mine-geo-ai-brand-marketing-agent": { kind: "network", accent: "#c084fc", secondary: "#38bdf8" },
  "overseas-manufacturing-distributor-development": { kind: "global", accent: "#22d3ee", secondary: "#f59e0b" },
  "professional-services-content-matrix": { kind: "matrix", accent: "#60a5fa", secondary: "#c084fc" },
  "property-fee-ai-collection": { kind: "governance", accent: "#34d399", secondary: "#38bdf8" },
  "recov-ai-batch-debt-collection-agent": { kind: "landscape", accent: "#fb7185", secondary: "#38bdf8" },
  "sales-in-ai-overseas-acquisition-agent": { kind: "global", accent: "#60a5fa", secondary: "#a78bfa" },
  "social-grow-ai-content-marketing-agent": { kind: "loop", accent: "#c084fc", secondary: "#22d3ee" },
};

const additionalListArticles: ResearchListArticle[] = additionalResearchArticles.map((rawArticle, index) => {
  const article = rawArticle as ResearchArticle;
  const cover = article.blocks.find((block): block is FigureBlock => block.type === "figure");
  const editorialCover = editorialResearchCovers[article.slug];
  if (!cover || !article.summary) {
    throw new Error(`Research article ${article.slug} is missing its list summary or cover`);
  }

  return {
    number: String(index + 8),
    tag: article.category,
    title: article.sourceTitle,
    summary: article.summary,
    image: cover.src,
    imageAlt: editorialCover ? "" : cover.caption,
    sourceCover: !editorialCover,
    editorialCover,
    href: `/research/${article.slug}/`,
  };
});

const articles: ResearchListArticle[] = [...featuredArticles, ...additionalListArticles];

const researchJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://lingchen-ai.com/research/#webpage",
  url: "https://lingchen-ai.com/research/",
  name: "灵宸研究院",
  description:
    "聚焦企业级AI落地实践，输出行业洞察、技术白皮书与产品演进动态，助力决策者把握智能化转型的关键路径。",
  isPartOf: { "@id": "https://lingchen-ai.com/#website" },
  inLanguage: "zh-CN",
};

export default function ResearchPage() {
  return (
    <>
      <SiteHeader />
      <main className="research-page">
        <section className="research-hero">
          <div className="research-shell research-hero__inner">
            <p className="research-hero__eyebrow"><i />前沿研究 · 深度洞察</p>
            <h1>灵宸研究院</h1>
            <p className="research-hero__description">
              聚焦企业级AI落地实践，输出行业洞察、技术白皮书与产品演进动态，<br />
              助力决策者把握智能化转型的关键路径。
            </p>
          </div>
        </section>

        <ResearchArticleList articles={articles} />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(researchJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
