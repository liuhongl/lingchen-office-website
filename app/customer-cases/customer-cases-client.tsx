"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState, type MouseEvent } from "react";
import { customerCaseDomains, customerCaseProducts, getCustomerCaseDisplayTitle, type CustomerCase } from "@/lib/customer-cases";
import styles from "./page.module.css";

type View = "domain" | "product";

export function CustomerCasesClient({ cases }: { cases: CustomerCase[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialView: View = searchParams.get("view") === "product" ? "product" : "domain";
  const initialOptions = initialView === "domain" ? customerCaseDomains : customerCaseProducts;
  const initialRequestedFilter = searchParams.get("filter") ?? "全部";
  const [selection, setSelection] = useState({
    view: initialView,
    filter: initialOptions.includes(initialRequestedFilter as never) ? initialRequestedFilter : "全部",
  });
  const { view, filter } = selection;
  const options = view === "domain" ? customerCaseDomains : customerCaseProducts;
  const visibleCases = cases.filter((item) => {
    if (filter === "全部") return true;
    return view === "domain" ? item.domain === filter : item.products.includes(filter);
  });
  const showDomainTag = view === "product" || filter === "全部";

  const getFilterHref = (nextView: View, nextFilter: string) => {
    const params = new URLSearchParams();
    if (nextView === "product") params.set("view", "product");
    if (nextFilter !== "全部") params.set("filter", nextFilter);
    const query = params.toString();
    return query ? `${pathname}?${query}` : pathname;
  };

  const selectFilter = (event: MouseEvent<HTMLAnchorElement>, nextView: View, nextFilter: string) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    setSelection({ view: nextView, filter: nextFilter });
    window.history.replaceState(window.history.state, "", getFilterHref(nextView, nextFilter));
  };

  return (
    <>
      <section className={styles.filters} aria-label="客户案例筛选">
        <div className={styles.filterInner}>
          <div className={styles.primaryTabs} role="tablist" aria-label="筛选方式">
            <a role="tab" aria-selected={view === "domain"} href={getFilterHref("domain", "全部")} onClick={(event) => selectFilter(event, "domain", "全部")}>按领域</a>
            <a role="tab" aria-selected={view === "product"} href={getFilterHref("product", "全部")} onClick={(event) => selectFilter(event, "product", "全部")}>按产品</a>
          </div>
          <div className={styles.secondaryTabs} role="tablist" aria-label={view === "domain" ? "领域" : "产品"}>
            {options.map((option) => (
              <a key={option} role="tab" aria-selected={filter === option} href={getFilterHref(view, option)} onClick={(event) => selectFilter(event, view, option)}>{option}</a>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.shell} ${styles.list}`} aria-live="polite">
        {visibleCases.map((item) => (
          <article className={styles.card} key={item.slug}>
            <Link className={showDomainTag ? undefined : styles.withoutDomain} href={`/customer-cases/${item.slug}/`} aria-label={`查看${getCustomerCaseDisplayTitle(item.title)}`}>
              {showDomainTag ? <span className={styles.domain}>{item.domain}</span> : null}
              <h2>{getCustomerCaseDisplayTitle(item.title)}</h2>
              <p className={styles.summary}>{item.summary}</p>
              <footer><span>关联 AI 产品：</span><strong>{item.relatedProducts.join(" + ")}</strong></footer>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
