'use client'

import { motion } from 'framer-motion'
import { METRICS } from '@/lib/constants'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

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
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-col items-center text-center px-6 py-4"
              style={{
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}
            >
              {/* Value */}
              <span
                className="text-2xl xl:text-3xl font-bold tracking-tight tabular-nums"
                style={{ color: '#60A5FA' }}
              >
                {metric.value}
              </span>

              {/* Label */}
              <span
                className="text-xs mt-1.5 leading-snug"
                style={{ color: '#64748B' }}
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
