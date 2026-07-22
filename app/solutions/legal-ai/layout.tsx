import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "AI法律案件拓展与工作流解决方案｜灵宸智能" },
  description: "DeepLaw 法律 AI Agent 整合五大智能体，贯通 IP 打造、案源、转化、案件承办、知识管理与终身成长全链路。",
  alternates: { canonical: "/solutions/legal-ai" },
  openGraph: { type: "website", locale: "zh_CN", url: "/solutions/legal-ai", siteName: "灵宸智能", title: "AI法律案件拓展与工作流解决方案｜灵宸智能", description: "让案件拓展与办案，成为可运营、可复盘的能力。" },
};

export default function LegalAiLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
