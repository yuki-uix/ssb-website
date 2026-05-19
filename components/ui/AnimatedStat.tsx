'use client'

import { useRef, useState, useEffect } from 'react'
import { useInView, animate } from 'framer-motion'

// ─── AnimatedStat ─────────────────────────────────────────────────────────────
// Counts 0 → numericValue on viewport entry, staggered by `index`.
// Falls back to displaying numericValue if animation never triggers.

export function AnimatedStat({
  numericValue,
  suffix,
  decimals,
  index,
  prominent = true,
}: {
  numericValue: number
  suffix: string
  decimals: number
  index: number
  /** prominent=true (default): full-size blue gradient. false: smaller, muted. */
  prominent?: boolean
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  // Start at final value so SSR / no-JS / slow connection never shows 0
  const [count, setCount] = useState(numericValue)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, numericValue, {
      duration: 1.6,
      delay: index * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => setCount(v),
    })
    return () => controls.stop()
  }, [isInView, numericValue, index])

  const formatted =
    decimals > 0 ? count.toFixed(decimals) : Math.round(count).toString()

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
