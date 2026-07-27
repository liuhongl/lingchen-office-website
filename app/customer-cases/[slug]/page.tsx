import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { customerCases, getCustomerCase, getCustomerCaseDisplayTitle } from "@/lib/customer-cases";
import { CustomerCaseBackLink } from "./customer-case-back-link";

const productMeta: Record<string, { label: string; description: string; href: string; icon?: string; tone?: string }> = {
  "Sales in": { label: "Sales in", description: "智能线索发现与评分", href: "/products/sales-in/", icon: "sales-in.svg", tone: "blue" },
  "Sales in 出海获客 AI Agent": { label: "Sales in", description: "智能线索发现与评分", href: "/products/sales-in/", icon: "sales-in.svg", tone: "blue" },
  "Social Grow": { label: "Social Grow", description: "社交媒体内容增长引擎", href: "/products/social-grow/", icon: "social-grow.svg", tone: "blue-light" },
  "Social Grow 专业知识内容 AI 生产与全域分发 Agent": { label: "Social Grow", description: "社交媒体内容增长引擎", href: "/products/social-grow/", icon: "social-grow.svg", tone: "blue-light" },
  "Mine GEO": { label: "Mine GEO", description: "AI 搜索答案治理", href: "/products/mine-geo/", icon: "mine-geo.svg", tone: "cyan" },
  "Mine GEO 品牌生成式引擎优化与获客 AI Agent": { label: "Mine GEO", description: "AI 搜索答案治理", href: "/products/mine-geo/", icon: "mine-geo.svg", tone: "cyan" },
  "AI获客Harness": { label: "AI 销售获客 Harness", description: "自动化销售触达与跟进", href: "/products/ai-acquisition-harness/", icon: "ai-harness.svg", tone: "blue" },
  "AI 销售获客 Harness": { label: "AI 销售获客 Harness", description: "自动化销售触达与跟进", href: "/products/ai-acquisition-harness/", icon: "ai-harness.svg", tone: "blue" },
  "Recov AI": { label: "Recov AI", description: "AI 不良资产处置", href: "/products/recov-ai/" },
  DeepDoc: { label: "DeepDoc", description: "国际单证智能审核", href: "/products/deepdoc/" },
  DeepLaw: { label: "DeepLaw", description: "法律获客与工作流", href: "/products/deeplaw/" },
  "Social Grow + Mine GEO + AI 销售获客 Harness + DeepLaw 案源拓展与法律工作流": { label: "DeepLaw", description: "法律获客与工作流", href: "/products/deeplaw/" },
};

function IconBadge({ src, tone = "soft", size = 40 }: { src: string; tone?: string; size?: number }) {
  const sourceSize = src === "social-grow.svg" ? { width: 20, height: 12 } : src === "ai-harness.svg" ? { width: 22, height: 18 } : { width: 20, height: 20 };
  return <span className={`customer-cases-icon customer-cases-icon--${tone}`} style={{ width: size, height: size, display: "grid", ...(tone === "white" ? { background: "#fff" } : {}) }}><Image src={`/images/customer-cases/${src}`} alt="" {...sourceSize} loading="eager" unoptimized /></span>;
}

export function generateStaticParams() {
  return customerCases.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const item = getCustomerCase((await params).slug);
  if (!item) return {};
  return {
    title: getCustomerCaseDisplayTitle(item.title),
    description: item.summary,
    alternates: { canonical: `/customer-cases/${item.slug}/` },
    openGraph: { type: "article", locale: "zh_CN", url: `/customer-cases/${item.slug}/`, siteName: "灵宸智能", title: item.title, description: item.summary },
  };
}

export default async function CustomerCaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const item = getCustomerCase((await params).slug);
  if (!item) notFound();
  const related = item.relatedProducts.map((name) => ({ name, meta: productMeta[name] ?? productMeta[item.product] })).filter((entry) => Boolean(entry.meta));
  const displayTitle = getCustomerCaseDisplayTitle(item.title);

  return (
    <>
      <SiteHeader />
      <main className="customer-cases-page">
        <nav className="customer-cases-back customer-cases-shell" aria-label="返回客户案例列表"><CustomerCaseBackLink domain={item.domain} /></nav>
        <section className="customer-cases-hero customer-cases-shell">
          <div className="customer-cases-hero__meta"><span className="customer-cases-pill">{item.domain}</span><span>客户案例</span></div>
          <h1>{displayTitle}</h1>
        </section>
        <article className="customer-cases-detail customer-cases-shell">
          <section className="customer-cases-summary"><h3>摘要</h3><p>{item.summary}</p></section>
          <section className="customer-cases-block"><div className="customer-cases-block__heading"><IconBadge src="customer-building.svg" size={32} /><h3>客户介绍</h3></div><p>{item.customerIntroduction}</p></section>
          <section className="customer-cases-block customer-cases-challenges"><div className="customer-cases-block__heading"><IconBadge src="challenge-alert.svg" tone="rose" size={32} /><h3>业务挑战</h3></div><ul>{item.challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul></section>
          <section className="customer-cases-block customer-cases-solution"><div className="customer-cases-block__heading"><IconBadge src="solution-bulb.svg" tone="cyan-soft" size={32} /><h3>我们如何解决的</h3></div><p className="customer-cases-solution__lead">{item.solutionLead}</p><ol>{item.solutions.map((solution, index) => <li key={solution}><span>{index + 1}</span><p>{solution}</p></li>)}</ol></section>
          <section className="customer-cases-results"><div className="customer-cases-results__heading"><IconBadge src="value-chart.svg" tone="blue" /><h3>落地成效与价值</h3></div><div className="customer-cases-results__scope"><strong className="customer-cases-results__scope-label">样本口径</strong><p>{item.sampleScope}</p></div><div className="customer-cases-table" role="table" aria-label="上线前后成效对比"><div className="customer-cases-table__head" role="row"><b>指标</b><b>上线前基线</b><b>上线后结果</b><b>变化</b></div>{item.results.map((row) => <div role="row" key={row[0]}>{row.map((cell, index) => index === 0 ? <strong key={`${row[0]}-${index}`}>{cell}</strong> : index === 3 ? <em key={`${row[0]}-${index}`}>{cell}</em> : <span key={`${row[0]}-${index}`}>{cell}</span>)}</div>)}</div><blockquote>{item.resultSummary}</blockquote></section>
        </article>
        <section className="customer-cases-related customer-cases-shell"><h2>关联 AI 产品</h2><div className="customer-cases-products">{related.map(({ name, meta }) => <Link href={meta.href} key={`${meta.href}-${name}`}><strong>{name}</strong></Link>)}</div></section>
      </main>
      <SiteFooter />
    </>
  );
}
