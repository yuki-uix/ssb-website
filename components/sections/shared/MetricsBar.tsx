'use client'

import { motion } from 'framer-motion'
import { METRICS } from '@/lib/constants'
import { fadeUpSubtle } from '@/lib/animations'
import { AnimatedStat } from '@/components/ui/AnimatedStat'

// ─── MetricsBar ───────────────────────────────────────────────────────────────

export default function MetricsBar() {
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

        {/* Overline — bridges Hero claim → data proof */}
        <p
          className="uppercase text-center mb-10 font-medium"
          style={{
            fontSize: 'var(--text-overline)',
            letterSpacing: 'var(--tracking-overline)',
            color: '#94A3B8',
          }}
        >
          The Infrastructure Behind Every Order
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              custom={i}
              variants={fadeUpSubtle}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-col items-center text-center px-4 py-4"
              style={{
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}
            >
              {/* Animated gradient number */}
              <AnimatedStat
                numericValue={metric.numericValue}
                suffix={metric.suffix}
                decimals={metric.decimals}
                index={i}
              />

              {/* Label */}
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
