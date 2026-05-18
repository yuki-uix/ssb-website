'use client'

import { motion } from 'framer-motion'
import { Store, Warehouse, ShieldCheck, LucideIcon } from 'lucide-react'
import { PILLARS } from '@/lib/constants'
import { ease } from '@/lib/animations'

// ─── Icon map ────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, LucideIcon> = {
  store:     Store,
  warehouse: Warehouse,
  shield:    ShieldCheck,
}

// ─── Pillar Card ─────────────────────────────────────────────────────────────

function PillarCard({
  pillar,
  index,
}: {
  pillar: typeof PILLARS[number]
  index: number
}) {
  const Icon = ICON_MAP[pillar.icon] ?? Store

  return (
    <motion.div
      custom={index}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            delay: index * 0.12,
            ease,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="group relative flex flex-col rounded-2xl p-8 overflow-hidden transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderTop: '2px solid rgba(59,130,246,0.45)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(59,130,246,0.05)'
        e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'
        e.currentTarget.style.borderTopColor = 'rgba(59,130,246,0.85)'
        e.currentTarget.style.boxShadow = '0 0 0 1px rgba(59,130,246,0.1), 0 8px 32px rgba(0,0,0,0.3)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
        e.currentTarget.style.borderTopColor = 'rgba(59,130,246,0.45)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Large background number — atmospheric only */}
      <span
        aria-hidden
        className="absolute select-none pointer-events-none font-black tabular-nums"
        style={{
          top: '-16px',
          right: '20px',
          fontSize: 'clamp(5.5rem, 7vw, 7rem)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          color: 'rgba(59,130,246,0.06)',
        }}
      >
        0{index + 1}
      </span>

      {/* Icon container */}
      <div
        className="mb-5 w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
        style={{
          background: 'rgba(59,130,246,0.1)',
          border: '1px solid rgba(59,130,246,0.2)',
        }}
      >
        <Icon
          className="w-5 h-5"
          style={{ color: '#60A5FA' }}
          strokeWidth={1.75}
        />
      </div>

      {/* Pillar title — official SSB name, must be present */}
      <p
        className="uppercase font-medium mb-2"
        style={{
          fontSize: 'var(--text-overline)',
          letterSpacing: 'var(--tracking-overline)',
          color: '#94A3B8',
        }}
      >
        {pillar.title}
      </p>

      {/* Headline */}
      <h3
        className="font-bold leading-snug mb-4"
        style={{ fontSize: 'var(--text-h3)', color: '#FFFFFF' }}
      >
        {pillar.headline}
      </h3>

      {/* Description */}
      <p
        className="leading-relaxed"
        style={{ fontSize: 'var(--text-body-sm)', color: '#CBD5E1' }}
      >
        {pillar.description}
      </p>
    </motion.div>
  )
}

// ─── PillarsSection ───────────────────────────────────────────────────────────

export default function PillarsSection() {
  return (
    <section id="pillars" className="relative">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease }}
          className="mb-14"
        >
          <p
            className="uppercase font-medium mb-3"
            style={{
              fontSize: 'var(--text-overline)',
              letterSpacing: 'var(--tracking-overline)',
              color: '#94A3B8',
            }}
          >
            Our Edge
          </p>
          <h2
            className="font-bold mb-3"
            style={{ fontSize: 'var(--text-h2)', color: '#FFFFFF' }}
          >
            What Makes Us Different
          </h2>
          <p
            style={{ fontSize: 'var(--text-body-sm)', color: '#94A3B8' }}
          >
            Operations · Logistics · Protection — All in-house, all integrated.
          </p>
        </motion.div>

        {/* Shared system container — groups all three as one integrated whole */}
        <div
          className="rounded-3xl p-6"
          style={{
            background: 'rgba(59,130,246,0.03)',
            border: '1px solid rgba(59,130,246,0.18)',
            boxShadow: 'inset 0 0 60px rgba(59,130,246,0.04)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PILLARS.map((pillar, i) => (
              <PillarCard key={pillar.title} pillar={pillar} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
