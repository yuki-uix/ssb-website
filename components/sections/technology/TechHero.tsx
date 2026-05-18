'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { TECH_HERO } from '@/lib/constants'
import { fadeUp } from '@/lib/animations'
import { useBouncingOrb } from '@/lib/hooks'

export default function TechHero() {
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
    <section ref={containerRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-grid py-16">
      {/* Static ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 70%)',
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
            ✦ {TECH_HERO.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
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
          custom={2}
          className="mx-auto"
          style={{
            fontSize: 'var(--text-body)',
            color: '#CBD5E1',
            lineHeight: 'var(--leading-body)',
            maxWidth: '640px',
          }}
        >
          {TECH_HERO.subheadline}
        </motion.p>

      </div>
    </section>
  )
}
