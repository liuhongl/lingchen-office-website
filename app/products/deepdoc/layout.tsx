import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DeepDoc｜新一代跨境单证智能审核产品解决方案",
  description: "DeepDoc 智眸是专门针对国际单证、跨境单证及票据等而设计的新一代跨境单证智能审核大脑。",
  alternates: { canonical: "/products/deepdoc/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/products/deepdoc/",
    siteName: "灵宸智能",
    title: "DeepDoc｜新一代跨境单证智能审核产品解决方案",
    description: "DeepDoc 智眸是专门针对国际单证、跨境单证及票据等而设计的新一代跨境单证智能审核大脑。",
  },
};

export default function DeepDocLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
