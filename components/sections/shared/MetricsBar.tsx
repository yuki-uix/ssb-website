'use client'

import { motion } from 'framer-motion'
import { METRICS } from '@/lib/constants'
import { fadeUpSubtle } from '@/lib/animations'
import { AnimatedStat } from '@/components/ui/AnimatedStat'

// ─── Metric grouping ──────────────────────────────────────────────────────────
// "Owned & Operated" — hardest to replicate, highest credibility weight
// Index 1 (33K sqft), 2 (10+ channels), 5 (7 AI agents)
const OWNED_IDX = [1, 2, 5]
// "Coverage & Scale" — network reach, important context
// Index 0 (340K+ SKUs), 3 (1.97M reach), 4 (4.32M catalog)
const SCALE_IDX = [0, 3, 4]

const OWNED = OWNED_IDX.map((i) => ({ ...METRICS[i], _origIdx: i }))
const SCALE = SCALE_IDX.map((i) => ({ ...METRICS[i], _origIdx: i }))

// ─── StatCell ─────────────────────────────────────────────────────────────────

function StatCell({
  metric,
  index,
  prominent = false,
  showLeftBorder = false,
}: {
  metric: typeof METRICS[number] & { _origIdx: number }
  index: number
  prominent?: boolean
  showLeftBorder?: boolean
}) {
  return (
    <motion.div
      custom={index}
      variants={fadeUpSubtle}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="flex flex-col items-center text-center px-4 py-4"
      style={{ borderLeft: showLeftBorder ? '1px solid rgba(255,255,255,0.07)' : 'none' }}
    >
      <AnimatedStat
        numericValue={metric.numericValue}
        suffix={metric.suffix}
        decimals={metric.decimals}
        index={index}
        prominent={prominent}
      />
      <span
        className="text-xs mt-1 leading-snug"
        style={{ color: prominent ? '#CBD5E1' : '#94A3B8' }}
      >
        {metric.label}
      </span>
    </motion.div>
  )
}

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
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Overline */}
        <p
          className="uppercase text-center mb-8 font-medium"
          style={{
            fontSize: 'var(--text-overline)',
            letterSpacing: 'var(--tracking-overline)',
            color: '#94A3B8',
          }}
        >
          The Infrastructure Behind Every Order
        </p>

        {/* Row 1 — Owned & Operated (high credibility, prominent weight) */}
        <div className="mb-3">
          <p
            className="uppercase text-center mb-2 font-medium"
            style={{
              fontSize: 'var(--text-overline)',
              letterSpacing: 'var(--tracking-overline)',
              color: '#94A3B8',
            }}
          >
            Owned &amp; Operated
          </p>
          <div className="grid grid-cols-3">
            {OWNED.map((metric, i) => (
              <StatCell
                key={metric.label}
                metric={metric}
                index={i}
                prominent
                showLeftBorder={i > 0}
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', margin: '8px 0 28px' }} />

        {/* Row 2 — Coverage & Scale (supporting context, secondary weight) */}
        <div>
          <p
            className="uppercase text-center mb-2 font-medium"
            style={{
              fontSize: 'var(--text-overline)',
              letterSpacing: 'var(--tracking-overline)',
              color: '#94A3B8',
            }}
          >
            Coverage &amp; Scale
          </p>
          <div className="grid grid-cols-3">
            {SCALE.map((metric, i) => (
              <StatCell
                key={metric.label}
                metric={metric}
                index={i + 3}
                prominent={false}
                showLeftBorder={i > 0}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
