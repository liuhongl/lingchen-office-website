import type { Metadata } from "next";
import "./prototype-sync.css";

export const metadata: Metadata = {
  title: { absolute: "Mine GEO 智能解决方案｜灵宸智能" },
  description: "Mine GEO 品牌生成式引擎优化与获客 AI Agent，持续管理品牌在 AI 搜索、AI 聊天和生成式答案中的可见度、推荐率与情感倾向。",
  alternates: { canonical: "/solutions/products/mine-geo/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/solutions/products/mine-geo/",
    title: "Mine GEO 智能解决方案｜灵宸智能",
    description: "Mine GEO 品牌生成式引擎优化与获客 AI Agent，持续管理品牌在 AI 搜索、AI 聊天和生成式答案中的可见度、推荐率与情感倾向。",
  },
};

export default function MineGeoSolutionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
