const iconProps = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export function EssayGraderIcon() {
  return (
    <svg {...iconProps}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M9 15l2 2 4-4" />
    </svg>
  )
}

export function GrammarCheckerIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 7h16" />
      <path d="M4 12h10" />
      <path d="M4 17h7" />
      <path d="M17 14l2 2 4-4" />
    </svg>
  )
}

export function SummarizerIcon() {
  return (
    <svg {...iconProps}>
      <path d="M6 4h12" />
      <path d="M6 8h12" />
      <path d="M6 12h8" />
      <path d="M6 16h5" />
      <path d="M16 14v6" />
      <path d="M13 17h6" />
    </svg>
  )
}

export function BasicStatisticsIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 20V10" />
      <path d="M10 20V4" />
      <path d="M16 20v-7" />
      <path d="M22 20V7" />
    </svg>
  )
}
