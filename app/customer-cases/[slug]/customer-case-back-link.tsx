"use client";

import Link from "next/link";
import type { MouseEvent } from "react";

const domainFilters = ["全部", "AI出海获客", "AI不良资产处置", "AI法律获客与工作流"];
const productFilters = ["全部", "Sales in", "Social Grow", "Mine GEO", "AI获客Harness", "Recov AI", "DeepDoc", "DeepLaw"];

function buildBackHref(view: "domain" | "product", filter: string) {
  const params = new URLSearchParams();
  if (view === "product") params.set("view", "product");
  if (filter !== "全部") params.set("filter", filter);
  const query = params.toString();
  return query ? `/customer-cases/?${query}` : "/customer-cases/";
}

export function CustomerCaseBackLink({ domain }: { domain: string }) {
  const fallbackHref = buildBackHref("domain", domain);
  const returnToSourceTabs = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const params = new URLSearchParams(window.location.search);
    const view = params.get("fromView") === "product" ? "product" : "domain";
    const requestedFilter = params.get("fromFilter");
    const allowedFilters = view === "product" ? productFilters : domainFilters;
    const filter = requestedFilter && allowedFilters.includes(requestedFilter) ? requestedFilter : domain;
    event.preventDefault();
    window.location.assign(buildBackHref(view, filter));
  };

  return <Link href={fallbackHref} onClick={returnToSourceTabs}>← 返回上一级</Link>;
}
