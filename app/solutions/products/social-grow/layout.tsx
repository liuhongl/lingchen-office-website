import type { Metadata } from "next";
import "./prototype-sync.css";

export const metadata: Metadata = {
  title: { absolute: "Social Grow 智能解决方案｜灵宸智能" },
  description: "Social Grow 专业知识内容 AI 生产与全域分发 Agent，连接专业知识与公域流量。",
  alternates: { canonical: "/solutions/products/social-grow/" },
  openGraph: {
    title: "Social Grow 智能解决方案｜灵宸智能",
    description: "Social Grow 专业知识内容 AI 生产与全域分发 Agent，连接专业知识与公域流量。",
    url: "/solutions/products/social-grow/",
    type: "website",
  },
};

export default function SocialGrowSolutionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
