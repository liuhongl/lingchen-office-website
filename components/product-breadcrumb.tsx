import Link from "next/link";
import { BookingTrigger } from "@/components/booking-trigger";

type ProductBreadcrumbProps = {
  name: string;
  description: string;
  compact?: boolean;
};

export function ProductBreadcrumb({ name, description, compact = false }: ProductBreadcrumbProps) {
  return (
    <nav className={`product-breadcrumb${compact ? " product-breadcrumb--compact" : ""}`} aria-label="面包屑">
      <div className="product-breadcrumb__inner">
        <div className="product-breadcrumb__trail">
          <Link href="/products/">{compact ? "‹" : "←"} 返回产品矩阵</Link>
          <i aria-hidden="true">{compact ? "›" : "/"}</i>
          <strong>{name}</strong>
          <span>{description}</span>
        </div>
        {!compact && <BookingTrigger className="product-breadcrumb__booking">立即预约体验该产品</BookingTrigger>}
      </div>
    </nav>
  );
}
