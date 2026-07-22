import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Grow｜AI 生产与全域分发 Agent",
  description: "AI 出海获客 Agent—专业知识内容生产+全域种草分发+流量孵化。",
  alternates: { canonical: "/products/social-grow/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/products/social-grow/",
    title: "Social Grow｜AI 生产与全域分发 Agent｜灵宸智能",
    description: "AI 出海获客 Agent—专业知识内容生产+全域种草分发+流量孵化。",
  },
};

export default function SocialGrowLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
