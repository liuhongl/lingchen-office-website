import type { Metadata } from "next";
import Image from "next/image";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import { ContactForm } from "./contact-form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "联系我们",
  description: "联系灵宸智能，提交产品合作需求或预约解决方案，获取面向企业业务场景的智能化解决方案支持。",
  alternates: { canonical: "/contact/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/contact/",
    siteName: "灵宸智能",
    title: "联系我们｜灵宸智能",
    description: "联系灵宸智能，提交产品合作需求或预约解决方案。",
  },
};

const contactItems = [
  {
    icon: "/images/contact/contact-address@3x.png",
    title: "公司地址",
    value: "上海市普陀区金通路185号3幢一层",
  },
  {
    icon: "/images/contact/contact-phone@3x.png",
    title: "联系电话",
    value: "18621786899",
  },
  {
    icon: "/images/contact/contact-email@3x.png",
    title: "电子邮箱",
    value: "shenhuabo@lingchenai.cn",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.hero}>
          <i aria-hidden />
          <h1>联系我们</h1>
          <p>期待与您携手，共创AI驱动的商业价值。我们的专业团队将在24小时内与您取得联系，为您量身定制智能化解决方案。</p>
        </section>

        <section className={styles.content}>
          <ContactForm />

          <div className={styles.contactGrid}>
            {contactItems.map((item) => (
              <article className={styles.contactCard} key={item.title}>
                <Image alt="" aria-hidden src={item.icon} width={48} height={48} />
                <h2>{item.title}</h2>
                <p>{item.value}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
