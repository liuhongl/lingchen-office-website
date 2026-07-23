const motto = "明道 · 优术 · 取势 · 合众";
const colors = [
  "#06b6d4",
  "#0aacd7",
  "#0ea1da",
  "#1297dd",
  "#168de0",
  "#1982e2",
  "#1d78e5",
  "#216de8",
  "#2563eb",
  "#305eeb",
  "#3b59ec",
  "#4654ec",
  "#514fec",
  "#5b49ec",
  "#6644ed",
  "#713fed",
  "#7c3aed",
];
const offsets = [0, -1.40625, -2.625, -3.65625, -4.5, -5.15625, -5.625, -5.90625, -6, -5.90625, -5.625, -5.15625, -4.5, -3.65625, -2.625, -1.40625, 0];

export function HeroMotto({ page }: { page: "home" | "about" }) {
  return (
    <p className={`hero-motto hero-motto--${page}`} aria-label={motto}>
      {Array.from(motto).map((character, index) => (
        <span
          aria-hidden="true"
          key={`${character}-${index}`}
          style={{
            color: colors[index],
            marginInline: character === " " ? "-.08em" : character === "·" ? "-.03em" : "-.01em",
            transform: `translateY(${offsets[index]}px) rotate(${(index - 8) * 1.5}deg)`,
          }}
        >
          {character}
        </span>
      ))}
    </p>
  );
}
