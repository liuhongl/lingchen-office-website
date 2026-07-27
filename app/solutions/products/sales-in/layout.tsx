import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Sales in 出海获客 AI Agent 智能解决方案｜灵宸智能" },
  description: "构建您的出海获客能力体系，让获客到成交的每一步都可衡量、可复制。",
  alternates: { canonical: "/solutions/products/sales-in/" },
  openGraph: {
    type: "website", locale: "zh_CN", url: "/solutions/products/sales-in/",
    title: "Sales in 出海获客 AI Agent 智能解决方案｜灵宸智能",
    description: "构建您的出海获客能力体系，让获客到成交的每一步都可衡量、可复制。",
  },
};

export default function SalesInSolutionLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
