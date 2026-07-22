import type { Metadata } from "next";
import "./prototype-sync.css";

export const metadata: Metadata = {
  title: { absolute: "DeepLaw 法律 AI Agent 解决方案｜灵宸智能" },
  description: "DeepLaw 法律 AI Agent 整合五大智能体，贯通法律人的品牌、案源、转化、案件承办、知识管理与终身成长全链路。",
  alternates: { canonical: "/solutions/products/deeplaw/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/solutions/products/deeplaw/",
    title: "DeepLaw 法律 AI Agent 解决方案｜灵宸智能",
    description: "DeepLaw 法律 AI Agent 整合五大智能体，贯通法律人的品牌、案源、转化、案件承办、知识管理与终身成长全链路。",
  },
};

export default function DeepLawSolutionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
