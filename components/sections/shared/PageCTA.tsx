'use client'

import { motion } from 'framer-motion'
import { ease } from '@/lib/animations'
import { GradientButton } from '@/components/ui/GradientButton'

// ─── PageCTA ──────────────────────────────────────────────────────────────────
// Shared CTA section used at the bottom of every content page.
// Renders: ambient glow → overline → h2 → body → GradientButton.

interface PageCTAProps {
  overline: string
  headline: string
  body: string
  buttonLabel: string
  href: string
}

export function PageCTA({ overline, headline, body, buttonLabel, href }: PageCTAProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ borderTop: '1px solid rgba(59,130,246,0.12)' }}
    >
      {/* Ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(59,130,246,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-32 flex flex-col items-center text-center">

        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease }}
          className="uppercase font-medium mb-5"
          style={{
            fontSize: 'var(--text-overline)',
            letterSpacing: 'var(--tracking-overline)',
            color: '#94A3B8',
          }}
        >
          {overline}
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.06, ease }}
          className="font-bold mb-6"
          style={{
            fontSize: 'var(--text-h2)',
            color: '#FFFFFF',
            maxWidth: '680px',
            lineHeight: 'var(--leading-h2)',
            letterSpacing: 'var(--tracking-h2)',
          }}
        >
          {headline}
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.12, ease }}
          className="mb-10"
          style={{
            fontSize: 'var(--text-body)',
            color: '#CBD5E1',
            maxWidth: '480px',
            lineHeight: 'var(--leading-body)',
          }}
        >
          {body}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="w-full sm:w-auto"
        >
          <GradientButton href={href} className="w-full sm:w-auto sm:inline-flex flex justify-center">{buttonLabel}</GradientButton>
        </motion.div>

      </div>
    </section>
  )
}
