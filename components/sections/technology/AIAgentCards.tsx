'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { AI_AGENTS } from '@/lib/constants'
import type { Agent } from '@/lib/constants'
import { fadeUp, ease } from '@/lib/animations'

// ─── AgentStatusWidget (featured card only) ───────────────────────────────────

function AgentStatusWidget() {
  return (
    <div
      className="rounded-xl p-5 flex flex-col justify-between shrink-0"
      style={{
        background: 'rgba(59,130,246,0.05)',
        border: '1px solid rgba(59,130,246,0.18)',
        minWidth: 220,
      }}
    >
      <div>
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-5"
          style={{ color: '#94A3B8' }}
        >
          Platform Scale
        </p>
        <div className="space-y-3">
          {[
            { label: 'SKUs Indexed',     value: '5M+'   },
            { label: 'Products in DB',   value: '4.32M' },
            { label: 'Brands Tracked',   value: '28K'   },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between gap-4">
              <span className="text-xs" style={{ color: '#94A3B8' }}>{label}</span>
              <span className="text-sm font-bold text-white tabular-nums">{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="flex flex-col gap-1 mb-2">
          <span className="text-xs" style={{ color: '#94A3B8' }}>Amazon Account Health</span>
          <span className="text-xs font-semibold" style={{ color: '#10B981' }}>1000 / 1000</span>
        </div>
        <div className="rounded-full overflow-hidden" style={{ height: '3px', background: 'rgba(255,255,255,0.07)' }}>
          <div className="h-full rounded-full" style={{ width: '100%', background: 'linear-gradient(90deg, #10B981, #3B82F6)' }} />
        </div>
      </div>
    </div>
  )
}

// ─── AgentCard ────────────────────────────────────────────────────────────────

function AgentCard({ agent, index, featured = false }: { agent: Agent; index: number; featured?: boolean }) {
  const isPlaceholder = agent.placeholder === true
  const cardRef = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  function handleMouseLeave() {
    setMouse(null)
  }

  const bg = isPlaceholder
    ? 'rgba(255,255,255,0.012)'
    : mouse
      ? `radial-gradient(280px circle at ${mouse.x}px ${mouse.y}px, rgba(59,130,246,0.13) 0%, transparent 65%), var(--background)`
      : 'var(--background)'

  return (
    <motion.div
      ref={cardRef}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={`${isPlaceholder ? '' : 'group '}relative flex flex-col p-6 h-full`}
      style={{
        background: bg,
        boxShadow: featured ? 'inset 0 2px 0 #3B82F6' : 'inset 0 2px 0 rgba(59,130,246,0.25)',
        opacity: isPlaceholder ? 0.6 : 1,
        cursor: 'default',
      }}
      {...(!isPlaceholder && {
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
      })}
    >
      {/* Featured: left text + right status widget; normal: single column */}
      <div className={featured ? 'flex flex-col lg:flex-row gap-6 h-full' : 'flex flex-col h-full'}>
        <div className="flex flex-col flex-1">
          {/* Category badge */}
          <span
            className="self-start text-xs font-medium px-2.5 py-1 rounded-full mb-4"
            style={{
              background: isPlaceholder ? 'rgba(255,255,255,0.04)' : 'rgba(59,130,246,0.10)',
              color: isPlaceholder ? '#64748B' : '#93C5FD',
              border: `1px solid ${isPlaceholder ? 'rgba(255,255,255,0.06)' : 'rgba(59,130,246,0.25)'}`,
              letterSpacing: '0.04em',
            }}
          >
            {agent.category}
          </span>

          {/* Agent name */}
          <h3
            className="font-bold mb-1"
            style={{
              fontSize: featured ? 'clamp(1.25rem, 2vw, 1.5rem)' : '1.125rem',
              color: isPlaceholder ? '#94A3B8' : '#FFFFFF',
              letterSpacing: '-0.01em',
            }}
          >
            {agent.name}
          </h3>

          {/* Tagline */}
          <p
            className="mb-3 text-sm font-medium"
            style={{ color: isPlaceholder ? '#94A3B8' : '#CBD5E1' }}
          >
            {agent.tagline}
          </p>

          {/* Description */}
          {!isPlaceholder && (
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: '#94A3B8' }}
            >
              {agent.description}
            </p>
          )}


          {/* Bullets */}
          {!isPlaceholder && (
            <ul className="mt-auto space-y-2">
              {agent.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: '#94A3B8' }}
                >
                  <span
                    className="mt-1.5 shrink-0 w-1 h-1 rounded-full"
                    style={{ background: '#3B82F6' }}
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right column: status widget (featured card only) */}
        {featured && <AgentStatusWidget />}
      </div>

      {/* Bottom accent on hover — disabled for placeholder cards */}
      {!isPlaceholder && (
        <div
          className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
          style={{ background: '#3B82F6' }}
        />
      )}
    </motion.div>
  )
}

// ─── AIAgentCards ─────────────────────────────────────────────────────────────

export default function AIAgentCards() {
  const [featured, ...rest] = AI_AGENTS
  const production = rest.filter((a) => !a.placeholder)
  const development = rest.filter((a) => a.placeholder)

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease }}
        className="mb-12"
      >
        <p
          className="uppercase mb-3 font-medium"
          style={{
            fontSize: 'var(--text-overline)',
            letterSpacing: 'var(--tracking-overline)',
            color: '#94A3B8',
          }}
        >
          AI Operations
        </p>
        <h2
          className="font-bold"
          style={{
            fontSize: 'var(--text-h2)',
            lineHeight: 'var(--leading-h2)',
            letterSpacing: 'var(--tracking-h2)',
            color: '#FFFFFF',
          }}
        >
          4 AI Agents in Production.{' '}
          <span style={{ color: '#CBD5E1', fontWeight: 400 }}>
            One Operations Engine.
          </span>
        </h2>
      </motion.div>

      {/* Group: In Production */}
      <p
        className="uppercase font-medium mb-4"
        style={{
          fontSize: 'var(--text-overline)',
          letterSpacing: 'var(--tracking-overline)',
          color: '#94A3B8',
        }}
      >
        In Production
      </p>
      <div
        className="rounded-2xl overflow-hidden mb-10"
        style={{ background: 'rgba(255,255,255,0.07)', gap: '1px', display: 'grid' }}
      >
        {/* Featured card (full width) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px' }}>
          <AgentCard agent={featured} index={0} featured />
        </div>
        {/* claim.ai / panner.ai / refinery.ai */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '1px' }}
        >
          {production.map((agent, i) => (
            <AgentCard key={agent.name} agent={agent} index={i + 1} />
          ))}
        </div>
      </div>

      {/* Group: In Development — compact teaser row */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        custom={5}
        className="flex items-center gap-4 px-6 py-4 rounded-2xl"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <span
          className="hidden sm:inline text-xs font-semibold uppercase tracking-widest"
          style={{ color: '#94A3B8' }}
        >
          In Development
        </span>
        <div className="hidden sm:block w-px h-4 shrink-0" style={{ background: 'rgba(255,255,255,0.12)' }} />
        <span
          className="text-sm font-medium"
          style={{ color: '#CBD5E1' }}
        >
          +{development.length} agents in development
        </span>
        <span
          className="ml-auto text-xs px-2.5 py-1 rounded-full shrink-0"
          style={{
            background: 'rgba(59,130,246,0.08)',
            border: '1px solid rgba(59,130,246,0.2)',
            color: '#93C5FD',
            letterSpacing: '0.04em',
          }}
        >
          Coming Soon
        </span>
      </motion.div>

    </section>
  )
}
