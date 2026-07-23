import Link from "next/link";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="shell site-footer__top">
        <div className="site-footer__brand">
          <Logo inverse />
        </div>
        <div className="site-footer__columns">
          <nav aria-label="产品方案">
            <strong>产品方案</strong>
            <Link href="/products/deeplaw/">DeepLaw 法律 AI</Link>
            <Link href="/products/social-grow/">Social Grow 内容引擎</Link>
            <Link href="/products/mine-geo/">Mine GEO 品牌优化</Link>
            <Link href="/products/ai-acquisition-harness/">AI 销售获客 Harness</Link>
            <Link href="/products/deepdoc/">合同智能审查 Agent</Link>
          </nav>
          <nav aria-label="资源中心">
            <strong>资源中心</strong>
            <Link href="/customer-cases/">客户案例</Link>
            <Link href="/research/">灵宸研究院</Link>
          </nav>
          <nav aria-label="联系我们">
            <strong>联系我们</strong>
            <span>shenhuaibo@lingchenai.cn</span>
            <span>18621786899</span>
            <span>上海市普陀区金昌路1858号3幢一层</span>
          </nav>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <span>© Copyright @上海灵宸智能科技有限公司.All rights reserved.</span>
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">沪ICP备2025132132号</a>
      </div>
    </footer>
  );
}
