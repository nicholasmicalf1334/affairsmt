type Props = { variant?: "x" | "slash"; className?: string };

// Hand-sprayed red strokes with drips. Paths draw in on load.
export default function Spray({ variant = "x", className = "" }: Props) {
  const strokes =
    variant === "x"
      ? ["M60 70 C 220 210, 380 360, 560 540", "M540 60 C 420 220, 240 380, 70 560"]
      : ["M20 120 C 200 90, 420 60, 620 40"];
  const drips =
    variant === "x"
      ? [
          { x: 150, y: 150, h: 120 },
          { x: 300, y: 300, h: 190 },
          { x: 445, y: 430, h: 90 },
          { x: 210, y: 425, h: 150 },
          { x: 470, y: 150, h: 70 },
        ]
      : [
          { x: 160, y: 104, h: 80 },
          { x: 420, y: 70, h: 130 },
        ];

  return (
    <svg viewBox="0 0 620 620" className={`spray ${className}`} aria-hidden>
      <defs>
        <filter id={`rough-${variant}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="9" />
          <feGaussianBlur stdDeviation="0.6" />
        </filter>
      </defs>
      <g filter={`url(#rough-${variant})`}>
        {strokes.map((d, i) => (
          <path key={d} d={d} className="spray-stroke" style={{ animationDelay: `${0.25 + i * 0.45}s` }} />
        ))}
        {drips.map((d, i) => (
          <rect
            key={i}
            x={d.x}
            y={d.y}
            width="7"
            height={d.h}
            rx="3.5"
            className="spray-drip"
            style={{ animationDelay: `${1.3 + i * 0.15}s` }}
          />
        ))}
      </g>
    </svg>
  );
}
