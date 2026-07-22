import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mine GEO｜品牌生成式引擎优化与获客 AI Agent",
  description: "AI 出海获客 Agent—大模型流量入口，交付品牌在大模型中的曝光率、推荐率与高意向客户线索。",
  alternates: { canonical: "/products/mine-geo/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/products/mine-geo/",
    title: "Mine GEO｜品牌生成式引擎优化与获客 AI Agent｜灵宸智能",
    description: "AI 出海获客 Agent—大模型流量入口，交付品牌在大模型中的曝光率、推荐率与高意向客户线索。",
  },
};

export default function MineGeoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
