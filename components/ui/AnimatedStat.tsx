'use client'

import { useRef } from 'react'

// ─── AnimatedStat ─────────────────────────────────────────────────────────────
// Displays numericValue statically; entrance animation is handled by the
// parent's fadeUpSubtle variant. No count-from-zero so there's no "0" flash.

export function AnimatedStat({
  numericValue,
  suffix,
  decimals,
  prominent = true,
}: {
  numericValue: number
  suffix: string
  decimals: number
  index?: number
  /** prominent=true (default): full-size blue gradient. false: smaller, muted. */
  prominent?: boolean
}) {
  const ref = useRef<HTMLSpanElement>(null)

  const formatted =
    decimals > 0 ? numericValue.toFixed(decimals) : Math.round(numericValue).toString()

  return (
    <span
      ref={ref}
      className="font-bold tracking-tight tabular-nums leading-none"
      style={
        prominent
          ? {
              fontSize: 'clamp(2.25rem, 3vw, 3rem)',
              background: 'linear-gradient(135deg, #93C5FD 0%, #38BDF8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }
          : {
              fontSize: 'clamp(1.5rem, 2vw, 1.875rem)',
              background: 'linear-gradient(135deg, #93C5FD 0%, #38BDF8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }
      }
    >
      {formatted}
      {suffix}
    </span>
  )
}
