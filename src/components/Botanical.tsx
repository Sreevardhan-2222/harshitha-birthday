// Hand-drawn style botanical ornaments. All decorative, hidden from screen readers.

interface OrnamentProps {
  className?: string
}

export function Sprig({ className }: OrnamentProps) {
  return (
    <svg className={className} viewBox="0 0 120 60" fill="none" aria-hidden="true">
      <path
        d="M6 46 C34 40 62 30 114 10"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      {[
        [22, 42, -28],
        [38, 37, -32],
        [54, 31, -36],
        [70, 25, -40],
        [86, 19, -44],
      ].map(([x, y, r], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${r})`}>
          <path
            d="M0 0 C4 -9 13 -11 18 -9 C13 -4 6 -1 0 0Z"
            stroke="currentColor"
            strokeWidth="0.9"
            fill="currentColor"
            fillOpacity="0.08"
          />
          <path
            d="M0 0 C5 7 13 9 18 8 C13 3 6 1 0 0Z"
            stroke="currentColor"
            strokeWidth="0.9"
            fill="currentColor"
            fillOpacity="0.08"
          />
        </g>
      ))}
      <circle cx="112" cy="10" r="2.2" fill="currentColor" fillOpacity="0.5" />
    </svg>
  )
}

export function Sunflower({ className }: OrnamentProps) {
  const petals = Array.from({ length: 18 }, (_, i) => (i * 360) / 18)
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <g transform="translate(60 60)">
        {petals.map((deg) => (
          <path
            key={`b${deg}`}
            transform={`rotate(${deg + 10})`}
            d="M0 -16 C7 -26 6 -42 0 -50 C-6 -42 -7 -26 0 -16Z"
            fill="#D9A23A"
            opacity="0.75"
          />
        ))}
        {petals.map((deg) => (
          <path
            key={`f${deg}`}
            transform={`rotate(${deg})`}
            d="M0 -15 C6 -24 6 -38 0 -46 C-6 -38 -6 -24 0 -15Z"
            fill="#EDC04F"
            stroke="#B9842A"
            strokeWidth="0.6"
          />
        ))}
        <circle r="18" fill="#5E3F22" />
        <circle r="18" fill="none" stroke="#3E2814" strokeWidth="1.2" />
        {Array.from({ length: 28 }, (_, i) => {
          const a = i * 2.4
          const r = 2.6 * Math.sqrt(i + 1)
          return (
            <circle
              key={i}
              cx={Math.cos(a) * r}
              cy={Math.sin(a) * r}
              r="0.9"
              fill="#C8913F"
              opacity="0.7"
            />
          )
        })}
      </g>
    </svg>
  )
}

export function FloralCorner({ className }: OrnamentProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <path d="M4 96 C14 60 36 30 92 6" stroke="currentColor" strokeWidth="0.9" />
      <path d="M30 52 C24 40 26 30 34 24 C38 34 36 44 30 52Z" stroke="currentColor" strokeWidth="0.8" />
      <path d="M48 36 C48 24 54 16 64 14 C62 24 56 32 48 36Z" stroke="currentColor" strokeWidth="0.8" />
      <path d="M18 72 C8 66 4 58 6 50 C14 54 18 62 18 72Z" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="92" cy="6" r="3.2" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="92" cy="6" r="1" fill="currentColor" />
    </svg>
  )
}

export function Divider({ className }: OrnamentProps) {
  return (
    <svg className={className} viewBox="0 0 160 16" fill="none" aria-hidden="true">
      <path d="M0 8 H66" stroke="currentColor" strokeWidth="0.8" />
      <path d="M94 8 H160" stroke="currentColor" strokeWidth="0.8" />
      <path
        d="M80 1 C83 5 83 11 80 15 C77 11 77 5 80 1Z M73 8 C77 5 83 5 87 8 C83 11 77 11 73 8Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />
    </svg>
  )
}

/** A few slow, drifting petals. Hidden entirely when reduced motion is preferred. */
export function Petals({ count = 7 }: { count?: number }) {
  return (
    <div className="petals" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: `${(i * 97) % 100}%`,
            animationDelay: `${i * -3.1}s`,
            animationDuration: `${16 + (i % 4) * 3}s`,
          }}
        />
      ))}
    </div>
  )
}
