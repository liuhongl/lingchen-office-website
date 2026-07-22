import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales in｜AI 出海获客 Agent",
  description: "AI 出海获客 Agent—客户线索数据挖掘与筛选，交付高意向客户线索。",
  alternates: { canonical: "/products/sales-in/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/products/sales-in/",
    title: "Sales in｜AI 出海获客 Agent｜灵宸智能",
    description: "AI 出海获客 Agent—客户线索数据挖掘与筛选，交付高意向客户线索。",
  },
};

export default function SalesInLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
