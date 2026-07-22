import { useId } from "react";

export type ResearchCoverKind =
  | "channels"
  | "documents"
  | "global"
  | "governance"
  | "landscape"
  | "layers"
  | "loop"
  | "matrix"
  | "metrics"
  | "network";

export type ResearchCoverConfig = {
  kind: ResearchCoverKind;
  accent: string;
  secondary: string;
};

function Dots({ accent }: { accent: string }) {
  return (
    <g opacity="0.32" fill={accent}>
      {Array.from({ length: 13 }, (_, row) =>
        Array.from({ length: 21 }, (_, column) => (
          <circle key={`${row}-${column}`} cx={10 + column * 19} cy={8 + row * 8} r={row < 4 ? 1.1 : 0.75} opacity={1 - row * 0.065} />
        )),
      )}
    </g>
  );
}

export function ResearchEditorialCover({ config }: { config: ResearchCoverConfig }) {
  const gradientId = useId().replace(/:/g, "");
  const glowId = `${gradientId}-glow`;
  const { accent, secondary } = config;

  return (
    <svg aria-hidden="true" className="research-card__editorial-cover" viewBox="0 0 400 280" role="img">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor={accent} />
          <stop offset="1" stopColor={secondary} />
        </linearGradient>
        <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
          <stop stopColor={accent} stopOpacity="0.22" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="280" fill="#07162f" />
      <rect width="400" height="280" fill={`url(#${glowId})`} />
      <Dots accent={accent} />

      {config.kind === "layers" ? (
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {[0, 1, 2].map((level) => (
            <g key={level} transform={`translate(0 ${level * 42})`}>
              <path d="M86 82 200 44l114 38-114 40Z" fill={accent} fillOpacity={0.07 + level * 0.025} stroke={level === 1 ? secondary : accent} strokeOpacity="0.72" strokeWidth="2" />
              {[124, 170, 216, 262].map((x, index) => <circle key={x} cx={x} cy={83 + (index % 2 ? 9 : -7)} r="5" fill={index % 2 ? secondary : accent} stroke="none" />)}
            </g>
          ))}
          <path d="M124 76v86M170 92v86M216 76v86M262 92v86" stroke={`url(#${gradientId})`} strokeOpacity="0.58" strokeDasharray="4 7" />
        </g>
      ) : null}

      {config.kind === "network" ? (
        <g fill="none" strokeLinecap="round">
          <circle cx="198" cy="146" r="48" stroke={`url(#${gradientId})`} strokeWidth="2" strokeDasharray="6 7" />
          {[[198, 146], [118, 86], [284, 78], [102, 196], [292, 204], [201, 67], [153, 221]].map(([x, y], index) => (
            <g key={`${x}-${y}`}>
              {index ? <path d={`M198 146 Q${(198 + x) / 2 + (index % 2 ? 18 : -18)} ${(146 + y) / 2} ${x} ${y}`} stroke={index % 2 ? accent : secondary} strokeOpacity="0.72" strokeWidth="2" /> : null}
              <circle cx={x} cy={y} r={index ? 8 : 15} fill={index % 2 ? accent : secondary} fillOpacity={index ? 0.22 : 0.36} stroke={index % 2 ? accent : secondary} strokeWidth="2" />
            </g>
          ))}
          <path d="m186 146 9 9 19-22" stroke="#d8eeff" strokeWidth="3" />
        </g>
      ) : null}

      {config.kind === "channels" ? (
        <g fill="none" strokeLinecap="round">
          {[-42, 0, 42].map((offset, index) => (
            <g key={offset}>
              <path d={`M54 ${139 + offset}C125 ${139 + offset} 126 ${140 + offset / 3} 184 140S270 ${98 + index * 42} 334 ${98 + index * 42}`} stroke={index === 1 ? secondary : accent} strokeWidth={index === 1 ? 3 : 2} strokeOpacity="0.85" />
              <circle cx="54" cy={139 + offset} r="7" fill={index === 1 ? secondary : accent} fillOpacity="0.28" stroke={index === 1 ? secondary : accent} strokeWidth="2" />
              <rect x="324" y={88 + index * 42} width="20" height="20" rx="5" fill={index === 1 ? secondary : accent} fillOpacity="0.22" stroke={index === 1 ? secondary : accent} strokeWidth="2" />
            </g>
          ))}
          <path d="M170 104v72M182 112v56M194 119v42" stroke="#d8eeff" strokeOpacity="0.7" />
        </g>
      ) : null}

      {config.kind === "documents" ? (
        <g strokeLinecap="round" strokeLinejoin="round">
          {[0, 1, 2].map((item) => (
            <path key={item} d="M122 70h110l48 46v100H122Z" transform={`translate(${item * 14} ${item * 3})`} fill={item === 2 ? accent : "#10294e"} fillOpacity={item === 2 ? 0.14 : 0.72} stroke={item === 2 ? accent : "#54709b"} strokeWidth="2" />
          ))}
          <path d="M268 76v43h44" fill="none" stroke={secondary} strokeWidth="2" />
          <path d="M148 132h102M148 155h86M148 178h68" stroke="#9eb8da" strokeWidth="3" opacity="0.52" />
          <path d="M96 191h233" stroke={`url(#${gradientId})`} strokeWidth="3" />
          <circle cx="273" cy="184" r="21" fill="#07162f" stroke={secondary} strokeWidth="2" />
          <path d="m263 184 7 7 13-17" fill="none" stroke={secondary} strokeWidth="3" />
        </g>
      ) : null}

      {config.kind === "governance" ? (
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M200 58c32 22 62 25 86 29v52c0 46-29 77-86 95-57-18-86-49-86-95V87c24-4 54-7 86-29Z" fill={accent} fillOpacity="0.08" stroke={accent} strokeWidth="2" />
          <path d="M92 111h216M92 168h216" stroke={secondary} strokeOpacity="0.62" strokeDasharray="7 7" />
          <path d="m176 143 17 17 35-42" stroke="#d8eeff" strokeWidth="4" />
          {[92, 308].map((x) => <circle key={x} cx={x} cy="111" r="5" fill={secondary} stroke="none" />)}
          {[92, 308].map((x) => <rect key={x} x={x - 5} y="163" width="10" height="10" rx="2" fill={accent} stroke="none" />)}
        </g>
      ) : null}

      {config.kind === "loop" ? (
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M83 151c0-65 74-94 128-67 28 14 42 37 63 58 20 20 44 32 69 19" stroke={accent} strokeWidth="3" />
          <path d="M317 148l27 13-25 17" stroke={accent} strokeWidth="3" />
          <path d="M317 189c-42 31-92 6-124-25-27-26-52-42-85-30-26 10-35 37-21 62 22 39 86 45 124 23" stroke={secondary} strokeWidth="2" strokeDasharray="5 6" />
          {[92, 151, 213, 279].map((x, index) => <circle key={x} cx={x} cy={index % 2 ? 111 : 191} r={index === 2 ? 11 : 7} fill={index % 2 ? secondary : accent} fillOpacity="0.3" stroke={index % 2 ? secondary : accent} strokeWidth="2" />)}
        </g>
      ) : null}

      {config.kind === "global" ? (
        <g fill="none" strokeLinecap="round">
          <ellipse cx="198" cy="144" rx="83" ry="79" stroke={accent} strokeWidth="2" />
          <ellipse cx="198" cy="144" rx="34" ry="79" stroke={accent} strokeOpacity="0.55" />
          <path d="M117 126h162M117 163h162" stroke={accent} strokeOpacity="0.52" />
          <path d="M46 197Q126 106 203 145T354 84" stroke={secondary} strokeWidth="3" />
          <circle cx="48" cy="195" r="7" fill={secondary} /><circle cx="203" cy="145" r="8" fill={accent} /><circle cx="352" cy="85" r="7" fill={secondary} />
          <path d="m340 75 14 9-12 12" stroke={secondary} strokeWidth="2" />
        </g>
      ) : null}

      {config.kind === "matrix" ? (
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="200" cy="139" r="25" fill={accent} fillOpacity="0.12" stroke={accent} strokeWidth="2" />
          {[[88, 73], [199, 64], [310, 78], [91, 207], [203, 218], [313, 199]].map(([x, y], index) => (
            <g key={`${x}-${y}`}>
              <path d={`M200 139Q${(200 + x) / 2 + (index % 2 ? 10 : -10)} ${(139 + y) / 2} ${x} ${y}`} stroke={index % 2 ? secondary : accent} strokeWidth="2" strokeOpacity="0.65" />
              <rect x={x - 20} y={y - 13} width="40" height="26" rx="6" fill={index % 2 ? secondary : accent} fillOpacity="0.12" stroke={index % 2 ? secondary : accent} strokeWidth="2" />
            </g>
          ))}
          <path d="M188 139h24M200 127v24" stroke="#d8eeff" strokeWidth="2" />
        </g>
      ) : null}

      {config.kind === "metrics" ? (
        <g fill="none" strokeLinecap="round">
          <path d="M81 211h242M99 198V92" stroke="#7895bb" strokeWidth="2" />
          {[52, 91, 137, 174].map((height, index) => (
            <rect key={height} x={127 + index * 42} y={198 - height} width="24" height={height} rx="5" fill={index % 2 ? secondary : accent} fillOpacity={0.18 + index * 0.04} stroke={index % 2 ? secondary : accent} strokeWidth="2" />
          ))}
          <path d="M108 169 164 143l48 12 73-73" stroke={`url(#${gradientId})`} strokeWidth="3" />
          <path d="m273 82 14-2-1 14" stroke={secondary} strokeWidth="3" />
        </g>
      ) : null}

      {config.kind === "landscape" ? (
        <g fill="none" strokeLinecap="round">
          {Array.from({ length: 9 }, (_, index) => (
            <path key={index} d={`M22 ${175 + index * 5}C92 ${118 + index * 4} 135 ${223 - index * 8} 205 ${155 + index * 2}S311 ${93 + index * 5} 383 ${130 + index * 4}`} stroke={index % 3 === 0 ? secondary : accent} strokeOpacity={0.2 + index * 0.065} strokeWidth={index % 3 === 0 ? 2.2 : 1.2} />
          ))}
          {[[55, 158], [112, 181], [176, 148], [231, 164], [289, 119], [347, 143]].map(([x, y], index) => <circle key={`${x}-${y}`} cx={x} cy={y} r={index % 2 ? 4 : 6} fill={index % 2 ? secondary : accent} />)}
        </g>
      ) : null}
    </svg>
  );
}
