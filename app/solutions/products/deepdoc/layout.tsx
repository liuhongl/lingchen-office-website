import type { Metadata } from "next";
import "./prototype-sync.css";

export const metadata: Metadata = {
  title: { absolute: "DeepDoc·智眸智能解决方案｜跨境单证智能审核｜灵宸智能" },
  description: "DeepDoc·智眸是面向国际单证、跨境单证及票据的新一代跨境单证智能审核解决方案。",
  alternates: { canonical: "/solutions/products/deepdoc/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/solutions/products/deepdoc/",
    title: "DeepDoc·智眸智能解决方案｜跨境单证智能审核｜灵宸智能",
    description: "DeepDoc·智眸是面向国际单证、跨境单证及票据的新一代跨境单证智能审核解决方案。",
  },
};

export default function DeepDocSolutionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
