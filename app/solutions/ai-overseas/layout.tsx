import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI 出海获客全链路解决方案",
  description: "灵宸智能以 Mine GEO、Social Grow、Sales in、AI 获客 Harness 和跨境单证智能审核，连接品牌入口、线索发现、主动触达与合规履约。",
  alternates: { canonical: "/solutions/ai-overseas" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/solutions/ai-overseas",
    siteName: "灵宸智能",
    title: "AI 出海获客全链路解决方案｜灵宸智能",
    description: "以五大 AI 智能体连接品牌入口、线索发现、主动触达与合规履约。",
  },
};

const solutionJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://lingchen-ai.com/solutions/ai-overseas/#webpage",
  url: "https://lingchen-ai.com/solutions/ai-overseas/",
  name: "AI 出海获客全链路解决方案",
  description: "灵宸智能以 Mine GEO、Social Grow、Sales in、AI 获客 Harness 和跨境单证智能审核，连接品牌入口、线索发现、主动触达与合规履约。",
  isPartOf: { "@id": "https://lingchen-ai.com/#website" },
  about: { "@id": "https://lingchen-ai.com/#organization" },
  inLanguage: "zh-CN",
};

export default function AiOverseasLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
