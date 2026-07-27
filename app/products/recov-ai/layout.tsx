import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recov AI｜全链路智能催收 Agent",
  description: "AI 不良资产处置 Agent—批量不良资产业务处置，提升企业服务水准，交付现金流回款结果。",
  alternates: { canonical: "/products/recov-ai/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/products/recov-ai/",
    siteName: "灵宸智能",
    title: "Recov AI｜全链路智能催收 Agent",
    description: "AI 不良资产处置 Agent—批量不良资产业务处置，提升企业服务水准，交付现金流回款结果。",
  },
};

export default function RecovAiLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
