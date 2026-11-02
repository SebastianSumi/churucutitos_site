import { useId } from 'react'

import { cn } from '@/lib/utils'

type MountainSceneProps = {
  className?: string
  withSun?: boolean
}

export function MountainScene({ className, withSun = true }: MountainSceneProps) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '')

  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 420"
      preserveAspectRatio="xMidYMax slice"
      className={cn('h-full w-full', className)}
    >
      <defs>
        <linearGradient id={`${uid}-far`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#bfdbfe" />
        </linearGradient>
        <linearGradient id={`${uid}-mid`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        <linearGradient id={`${uid}-front`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id={`${uid}-sun`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="55%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#f43f5e" />
        </linearGradient>
      </defs>

      {withSun && (
        <circle
          cx="1180"
          cy="92"
          r="54"
          fill={`url(#${uid}-sun)`}
          opacity="0.9"
        />
      )}

      <path
        d="M0,300 L90,240 L170,275 L280,180 L380,250 L470,205 L580,265 L700,175 L810,255 L920,200 L1040,265 L1150,215 L1270,270 L1370,225 L1440,270 L1440,420 L0,420 Z"
        fill={`url(#${uid}-far)`}
      />
      <g fill="#ffffff" opacity="0.95">
        <path d="M280,180 L245,215 L265,207 L280,220 L296,205 L315,215 Z" />
        <path d="M700,175 L665,212 L686,203 L700,218 L716,202 L735,212 Z" />
        <path d="M1370,225 L1342,255 L1358,247 L1370,258 L1382,246 L1398,255 Z" />
      </g>

      <path
        d="M0,350 L130,285 L240,330 L360,250 L480,325 L600,270 L730,340 L860,265 L980,335 L1110,280 L1230,340 L1350,290 L1440,330 L1440,420 L0,420 Z"
        fill={`url(#${uid}-mid)`}
      />
      <g fill="#ffffff" opacity="0.9">
        <path d="M360,250 L330,282 L348,274 L360,286 L372,273 L390,282 Z" />
        <path d="M860,265 L830,298 L848,290 L860,302 L872,289 L890,298 Z" />
        <path d="M1350,290 L1324,318 L1340,311 L1350,321 L1362,310 L1376,318 Z" />
      </g>

      <path
        d="M0,400 L170,330 L300,385 L440,315 L580,390 L720,325 L880,395 L1020,335 L1170,395 L1310,345 L1440,390 L1440,420 L0,420 Z"
        fill={`url(#${uid}-front)`}
      />
      <g fill="#ffffff" opacity="0.55">
        <path d="M440,315 L418,340 L431,334 L440,344 L450,333 L462,340 Z" />
        <path d="M720,325 L698,350 L711,344 L720,354 L730,343 L742,350 Z" />
        <path d="M1020,335 L998,360 L1011,354 L1020,364 L1030,353 L1042,360 Z" />
        <path d="M1310,345 L1288,370 L1301,364 L1310,374 L1320,363 L1332,370 Z" />
      </g>
    </svg>
  )
}
