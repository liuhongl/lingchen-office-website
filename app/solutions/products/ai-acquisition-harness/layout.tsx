import type { Metadata } from "next";
import "./prototype-sync.css";

const title = "AI销售获客Harness 智能解决方案｜灵宸智能";
const description =
  "专为各行各业打造的智能化、数字化、个性化销售获客AI Harness。以AI主动外呼/呼入、自适应邮件/文本、场景化动态短信三大子系统构建获客矩阵。";
const pageUrl = "https://lingchen-ai.com/solutions/products/ai-acquisition-harness/";

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: title,
  description,
  inLanguage: "zh-CN",
  isPartOf: { "@id": "https://lingchen-ai.com/#website" },
};

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/solutions/products/ai-acquisition-harness/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/solutions/products/ai-acquisition-harness/",
    title,
    description,
  },
};

export default function AiAcquisitionHarnessSolutionLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
