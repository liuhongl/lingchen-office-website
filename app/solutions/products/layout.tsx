import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SolutionTabs } from "@/components/solution-tabs";

export default function ProductSolutionsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><SiteHeader /><SolutionTabs />{children}<SiteFooter /></>;
}
