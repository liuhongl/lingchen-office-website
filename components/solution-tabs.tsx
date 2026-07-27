"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const products = [
  ["Sales in", "/solutions/products/sales-in/"],
  ["Social Grow", "/solutions/products/social-grow/"],
  ["Mine GEO", "/solutions/products/mine-geo/"],
  ["AI销售获客Harness", "/solutions/products/ai-acquisition-harness/"],
  ["Recov AI", "/solutions/products/recov-ai/"],
  ["DeepDoc", "/solutions/products/deepdoc/"],
  ["DeepLaw", "/solutions/products/deeplaw/"],
] as const;

const comprehensive = [
  ["AI出海获客与合规解决方案", "/solutions/ai-overseas/"],
  ["AI不良资产处置解决方案", "/solutions/non-performing-assets/"],
  ["AI法律案件拓展与工作流解决方案", "/solutions/legal-ai/"],
] as const;

export function SolutionTabs() {
  const pathname = usePathname();
  const productMode = pathname.startsWith("/solutions/products/");

  return (
    <nav className="solution-tabs" aria-label="解决方案导航">
      <div className="solution-tabs__inner">
        <div className="solution-tabs__groups">
          <Link className={!productMode ? "is-active" : ""} href="/solutions/ai-overseas/">综合解决方案</Link>
          <Link className={productMode ? "is-active" : ""} href="/solutions/products/sales-in/">产品专项解决方案</Link>
        </div>
        <div className="solution-tabs__products" aria-label={productMode ? "产品专项解决方案" : "综合解决方案"}>
          {(productMode ? products : comprehensive).map(([label, href]) => (
            <Link className={pathname === href ? "is-active" : ""} href={href} key={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
