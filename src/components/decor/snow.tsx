import type { CSSProperties } from 'react'

import { cn } from '@/lib/utils'

const flakes = Array.from({ length: 24 }, (_, index) => ({
  left: `${(index * 37 + 5) % 100}%`,
  size: 2 + ((index * 7) % 5),
  delay: -(index * 1.3),
  duration: 12 + ((index * 5) % 9),
  drift: `${((index * 13) % 60) - 30}px`,
  opacity: 0.35 + (index % 4) * 0.16,
}))

export function Snow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className,
      )}
    >
      {flakes.map((flake, index) => (
        <span
          key={index}
          className="animate-snow absolute top-0 rounded-full bg-white shadow-[0_0_8px_2px_rgba(56,189,248,0.35)]"
          style={
            {
              left: flake.left,
              width: flake.size,
              height: flake.size,
              animationDelay: `${flake.delay}s`,
              animationDuration: `${flake.duration}s`,
              '--snow-drift': flake.drift,
              '--snow-opacity': flake.opacity,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
