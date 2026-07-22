import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI 获客 Harness｜高并发智能触达与筛选转化",
  description: "AI 出海获客 Agent—高并发智慧触达与筛选、转化，交付高意向客户线索。",
  alternates: { canonical: "/products/ai-acquisition-harness/" },
  openGraph: { type: "website", locale: "zh_CN", url: "/products/ai-acquisition-harness/", title: "AI 获客 Harness｜高并发智能触达与筛选转化｜灵宸智能", description: "AI 出海获客 Agent—高并发智慧触达与筛选、转化，交付高意向客户线索。" },
};

export default function AiAcquisitionHarnessLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
