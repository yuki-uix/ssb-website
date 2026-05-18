'use client'

import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion'
import { TECH_METRICS } from '@/lib/constants'

// ─── Animated counter ─────────────────────────────────────────────────────────

function AnimatedStat({
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

// ─── Stagger wrapper ──────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

// ─── TechMetricsBar ───────────────────────────────────────────────────────────

export default function TechMetricsBar() {
  return (
    <section
      className="relative"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(255,255,255,0.015)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Overline */}
        <p
          className="uppercase text-center mb-10 font-medium"
          style={{
            fontSize: 'var(--text-overline)',
            letterSpacing: 'var(--tracking-overline)',
            color: '#94A3B8',
          }}
        >
          The Platform by the Numbers
        </p>

        {/* 4-col grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {TECH_METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-col items-center text-center px-4 py-4"
              style={{
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}
            >
              <AnimatedStat
                numericValue={metric.numericValue}
                suffix={metric.suffix}
                decimals={metric.decimals}
                index={i}
              />
              <span
                className="text-xs mt-2 leading-snug"
                style={{ color: '#CBD5E1' }}
              >
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
