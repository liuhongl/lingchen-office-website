import Image from "next/image";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`brand ${inverse ? "brand--inverse" : ""}`}>
      <Image src="/images/lingchen-logo.png" alt="灵宸智能 LINGCHEN AI" width={1090} height={493} priority />
    </span>
  );
}
