'use client'

import { motion } from 'framer-motion'
import { AI_AGENTS } from '@/lib/constants'

// ─── Types ────────────────────────────────────────────────────────────────────

type Agent = {
  name: string
  category: string
  tagline: string
  description: string
  bullets: readonly string[]
  placeholder?: boolean
}

// ─── Animation ────────────────────────────────────────────────────────────────

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease },
  }),
}

// ─── AgentCard ────────────────────────────────────────────────────────────────

function AgentCard({ agent, index, featured = false }: { agent: Agent; index: number; featured?: boolean }) {
  const isPlaceholder = agent.placeholder === true

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={`${isPlaceholder ? '' : 'group '}relative flex flex-col p-6 h-full`}
      style={{
        background: isPlaceholder ? 'rgba(255,255,255,0.012)' : 'var(--background)',
        boxShadow: featured ? 'inset 0 2px 0 #3B82F6' : 'inset 0 2px 0 rgba(59,130,246,0.25)',
        opacity: isPlaceholder ? 0.6 : 1,
        cursor: isPlaceholder ? 'default' : 'auto',
      }}
      {...(!isPlaceholder && {
        onMouseEnter: (e) => { e.currentTarget.style.background = 'rgba(59,130,246,0.06)' },
        onMouseLeave: (e) => { e.currentTarget.style.background = 'var(--background)' },
      })}
    >
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
          color: isPlaceholder ? '#475569' : '#FFFFFF',
          letterSpacing: '-0.01em',
        }}
      >
        {agent.name}
      </h3>

      {/* Tagline */}
      <p
        className="mb-3 text-sm font-medium"
        style={{ color: isPlaceholder ? '#475569' : '#CBD5E1' }}
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
  const [featured, ...rest] = AI_AGENTS as unknown as Agent[]

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
          7 AI Agents.{' '}
          <span style={{ color: '#CBD5E1', fontWeight: 400 }}>
            One Operations Engine.
          </span>
        </h2>
      </motion.div>

      {/* Bento grid */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.07)', gap: '1px', display: 'grid' }}
      >
        {/* Row 1: Featured card (full width) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px' }}>
          <AgentCard agent={featured} index={0} featured />
        </div>

        {/* Row 2–3: Remaining 6 in 3-col */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
          }}
        >
          {rest.map((agent, i) => (
            <AgentCard key={agent.name} agent={agent} index={i + 1} />
          ))}
        </div>
      </div>

    </section>
  )
}
