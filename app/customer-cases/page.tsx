import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { customerCases } from "@/lib/customer-cases";
import { CustomerCasesClient } from "./customer-cases-client";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "客户案例",
  description: "查看灵宸智能在 AI 出海获客、AI 不良资产处置与 AI 法律获客与工作流领域的客户案例。",
  alternates: { canonical: "/customer-cases/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/customer-cases/",
    siteName: "灵宸智能",
    title: "客户案例｜灵宸智能",
    description: "灵宸智能客户案例。",
  },
};

export default function CustomerCasesPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <h1 className={styles.srOnly}>客户案例</h1>
        <Suspense fallback={null}><CustomerCasesClient cases={customerCases} /></Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
