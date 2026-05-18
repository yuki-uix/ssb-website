'use client'

import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion'

// ─── AnimatedStat ─────────────────────────────────────────────────────────────
// Shared animated counter with gradient text.
// Counts from 0 → numericValue on first viewport entry, staggered by `index`.

export function AnimatedStat({
  numericValue,
  suffix,
  decimals,
  index,
}: {
  numericValue: number
  suffix: string
  decimals: number
  index: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { stiffness: 55, damping: 22 })
  const display = useTransform(spring, (v) =>
    decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString()
  )

  useEffect(() => {
    if (!isInView) return
    const timer = setTimeout(() => motionVal.set(numericValue), index * 80)
    return () => clearTimeout(timer)
  }, [isInView, numericValue, motionVal, index])

  return (
    <span
      ref={ref}
      className="font-bold tracking-tight tabular-nums leading-none"
      style={{
        fontSize: 'clamp(2.25rem, 3vw, 3rem)',
        background: 'linear-gradient(135deg, #93C5FD 0%, #38BDF8 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}
