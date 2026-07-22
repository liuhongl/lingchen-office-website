import type { Metadata } from "next";
import "./user-review.css";

export const metadata: Metadata = {
  title: { absolute: "批量债权催收解决方案｜灵宸智能" },
  description: "基于AI催收智能体的全链路、自进化、多智能体协作方案。",
  alternates: { canonical: "/solutions/non-performing-assets/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/solutions/non-performing-assets/",
    title: "批量债权催收解决方案｜灵宸智能",
    description: "基于AI催收智能体的全链路、自进化、多智能体协作方案。",
  },
};

export default function NonPerformingAssetsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
