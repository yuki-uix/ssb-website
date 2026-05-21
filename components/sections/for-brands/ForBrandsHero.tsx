'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { BRANDS_HERO } from '@/lib/constants'
import { fadeUp } from '@/lib/animations'
import { useBouncingOrb } from '@/lib/hooks'
import { GradientButton } from '@/components/ui/GradientButton'

export default function ForBrandsHero() {
  const containerRef = useRef<HTMLElement>(null)

  const { x: x1, y: y1 } = useBouncingOrb(containerRef, {
    orbSize: 760,
    initialX: 0.0,
    initialY: 0.0,
    speedX: 60,
    speedY: 50,
  })
  const { x: x2, y: y2 } = useBouncingOrb(containerRef, {
    orbSize: 600,
    initialX: 1.0,
    initialY: 1.0,
    speedX: -60,
    speedY: -50,
  })

  return (
    <section ref={containerRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16">
      {/* Static ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(59,130,246,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Bouncing orb 1 */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          left: 0,
          x: x1,
          y: y1,
          width: '760px',
          height: '760px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(14,165,233,0.07) 45%, transparent 65%)',
          filter: 'blur(48px)',
        }}
      />

      {/* Bouncing orb 2 */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          left: 0,
          x: x2,
          y: y2,
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, rgba(59,130,246,0.05) 50%, transparent 70%)',
          filter: 'blur(56px)',
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
            ✦ {BRANDS_HERO.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="font-bold mb-3"
          style={{
            fontSize: 'var(--text-h1)',
            lineHeight: 'var(--leading-h1)',
            letterSpacing: 'var(--tracking-h1)',
            color: '#FFFFFF',
          }}
        >
          {BRANDS_HERO.headline}
        </motion.h1>

        {/* Accent sub-headline — solid color for reliable readability on dark bg */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="font-bold mb-8"
          style={{
            fontSize: 'var(--text-h1)',
            lineHeight: 'var(--leading-h1)',
            letterSpacing: 'var(--tracking-h1)',
            color: '#60A5FA',
          }}
        >
          {BRANDS_HERO.headlineAccent}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="mb-10 mx-auto"
          style={{
            fontSize: 'var(--text-body)',
            color: '#CBD5E1',
            lineHeight: 'var(--leading-body)',
            maxWidth: '600px',
          }}
        >
          {BRANDS_HERO.subheadline}
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="flex items-center justify-center gap-4"
        >
          <GradientButton href="/contact" size="sm">Get in Touch</GradientButton>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        aria-hidden="true"
      >
        <span
          className="text-[10px] uppercase tracking-widest font-medium"
          style={{ color: '#64748B' }}
        >
          Scroll
        </span>
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{ color: '#64748B' }}
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M8 3v10M4 9l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>

    </section>
  )
}
