import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DeepLaw｜AI 法律 Agent",
  description: "AI 法律 Agent—案件拓展与法律工作流，交付案源流量孵化体系、高意向案件线索与法律工作流。",
  alternates: { canonical: "/products/deeplaw/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/products/deeplaw/",
    title: "DeepLaw｜AI 法律 Agent｜灵宸智能",
    description: "AI 法律 Agent—案件拓展与法律工作流，交付案源流量孵化体系、高意向案件线索与法律工作流。",
  },
};

export default function DeepLawLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
