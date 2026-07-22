import type { Metadata } from "next";
import "./prototype-sync.css";

export const metadata: Metadata = {
  title: { absolute: "批量债权催收解决方案｜Recov AI｜灵宸智能" },
  description: "基于 AI 催收智能体的全链路、自进化、多智能体协作方案，把逾期资产高效、合规地转化为企业现金流。",
  alternates: { canonical: "/solutions/products/recov-ai/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/solutions/products/recov-ai/",
    title: "批量债权催收解决方案｜Recov AI｜灵宸智能",
    description: "基于 AI 催收智能体的全链路、自进化、多智能体协作方案，把逾期资产高效、合规地转化为企业现金流。",
  },
};

export default function RecovAiSolutionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
