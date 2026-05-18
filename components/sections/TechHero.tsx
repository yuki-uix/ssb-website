'use client'

import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease },
  }),
}

export default function TechHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-grid py-16">
      {/* Radial glow — centered behind headline */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Pill badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span
            className="text-xs font-medium px-3 py-1.5 rounded-full"
            style={{
              border: '1px solid rgba(59,130,246,0.4)',
              color: '#94A3B8',
              background: 'rgba(59,130,246,0.08)',
            }}
          >
            ✦ 7 AI Agents in Production
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="font-bold mb-6"
          style={{
            fontSize: 'var(--text-h1)',
            lineHeight: 'var(--leading-h1)',
            letterSpacing: 'var(--tracking-h1)',
            color: '#FFFFFF',
          }}
        >
          Our Team Runs on{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #3B82F6 0%, #0EA5E9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            AI.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="mx-auto"
          style={{
            fontSize: 'var(--text-body-lg)',
            color: '#CBD5E1',
            lineHeight: 'var(--leading-body)',
            maxWidth: '640px',
          }}
        >
          SSB operates with a small, high-efficiency team — because every operation
          runs on proprietary AI agents. Our team focuses on decisions, not data entry.
        </motion.p>

      </div>
    </section>
  )
}
