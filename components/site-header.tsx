"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookingModal } from "./booking-modal";
import { Logo } from "./logo";

const nav = [
  ["首页", "/#top"],
  ["产品矩阵", "/products/"],
  ["解决方案", "/solutions/ai-overseas"],
  ["客户案例", "/customer-cases/"],
  ["灵宸研究院", "/research/"],
  ["关于灵宸", "/about"],
  ["联系我们", "/contact/"],
];

export function SiteHeader() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const normalizedPathname = pathname.replace(/\/$/, "") || "/";

  return (
    <>
      <header className="site-header">
        <div className="shell site-header__inner">
          <Link href="/#top"><Logo /></Link>
          <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="主导航">
            {nav.map(([label, href]) => (
              <Link className={(normalizedPathname === "/" && label === "首页") || (normalizedPathname.startsWith("/products") && label === "产品矩阵") || (normalizedPathname === "/about" && href === "/about") || (normalizedPathname.startsWith("/solutions/") && label === "解决方案") || (normalizedPathname.startsWith("/customer-cases") && label === "客户案例") || (normalizedPathname.startsWith("/research") && label === "灵宸研究院") || (normalizedPathname === "/contact" && label === "联系我们") ? "is-active" : ""} href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</Link>
            ))}
          </nav>
          <button className="button button--small header-cta" onClick={() => setBookingOpen(true)}>立即体验</button>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "关闭导航" : "打开导航"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
