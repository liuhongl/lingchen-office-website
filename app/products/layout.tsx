import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "产品矩阵｜灵宸智能 AI Agent 产品",
  description: "了解灵宸智能面向出海获客、不良资产处置、跨境风控与法律服务的 AI Agent 产品矩阵。",
  alternates: { canonical: "/products/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/products/",
    title: "产品矩阵｜灵宸智能 AI Agent 产品",
    description: "了解灵宸智能面向出海获客、不良资产处置、跨境风控与法律服务的 AI Agent 产品矩阵。",
  },
};

export default function ProductsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
