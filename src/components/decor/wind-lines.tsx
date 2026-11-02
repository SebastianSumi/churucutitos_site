import { useId } from 'react'

import { cn } from '@/lib/utils'

type WindLinesProps = {
  className?: string
}

const lines = [
  { d: 'M0,40 C180,10 320,70 520,38 S860,10 1040,44', delay: '0s', opacity: 0.5 },
  { d: 'M0,110 C200,80 340,140 560,104 S900,80 1080,116', delay: '1.6s', opacity: 0.35 },
  { d: 'M0,180 C220,150 360,210 600,172 S940,150 1120,186', delay: '3.2s', opacity: 0.25 },
]

export function WindLines({ className }: WindLinesProps) {
  const gradientId = `wind-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`

  return (
    <svg
      aria-hidden
      viewBox="0 0 1120 220"
      fill="none"
      preserveAspectRatio="none"
      className={cn('pointer-events-none h-full w-full', className)}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
          <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
        </linearGradient>
      </defs>
      {lines.map((line) => (
        <path
          key={line.d}
          d={line.d}
          stroke={`url(#${gradientId})`}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="8 14"
          className="animate-wind"
          style={{ animationDelay: line.delay, opacity: line.opacity }}
        />
      ))}
    </svg>
  )
}
