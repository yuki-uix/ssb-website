'use client'

import { motion } from 'framer-motion'
import { TECH_METRICS } from '@/lib/constants'
import { fadeUpSubtle } from '@/lib/animations'
import { AnimatedStat } from '@/components/ui/AnimatedStat'

// ─── TechMetricsBar ───────────────────────────────────────────────────────────

export default function TechMetricsBar() {
  return (
    <section
      className="relative"
      style={{
        borderTop: '1px solid rgba(59,130,246,0.12)',
        borderBottom: '1px solid rgba(59,130,246,0.12)',
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
              variants={fadeUpSubtle}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className={`flex flex-col items-center text-center px-4 py-4${
                // items 1 & 3 always get a left border (2nd col in both 2-col and 4-col layouts)
                i === 1 || i === 3 ? ' border-l border-white/[0.07]' : ''
              }${
                // item 2 only gets left border at lg (4-col layout), not in 2-col
                i === 2 ? ' lg:border-l lg:border-white/[0.07]' : ''
              }`}
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
