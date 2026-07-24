import type { Metadata } from "next";
import "./globals.css";
import "./product-matrix-desktop.css";

const siteUrl = "https://lingchen-ai.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "灵宸智能｜让 AI Agent 成为企业商业结果增长新质生产力",
    template: "%s｜灵宸智能",
  },
  description:
    "灵宸智能以企业级 AI Agent 架构与产品，为企业出海获客、批量债权处置与专业服务提供可量化、可验收的商业结果。",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.ico?v=20260723-2", type: "image/x-icon", sizes: "64x64" }],
    shortcut: "/favicon.ico?v=20260723-2",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    siteName: "灵宸智能",
    title: "灵宸智能｜让 AI Agent 成为企业商业结果增长新质生产力",
    description: "让最前沿 AI 技术转化为可交付商业结果的生产力。",
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "上海灵宸智能科技有限公司",
  alternateName: "灵宸智能",
  url: siteUrl,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "灵宸智能",
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "zh-CN",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
