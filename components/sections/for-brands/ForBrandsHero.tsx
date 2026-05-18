'use client'

import { motion } from 'framer-motion'
import { BRANDS_HERO } from '@/lib/constants'
import { fadeUp } from '@/lib/animations'
import { GradientButton } from '@/components/ui/GradientButton'

export default function ForBrandsHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 70%)',
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
          custom={1}
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

        {/* Gradient sub-headline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="font-bold mb-8"
          style={{
            fontSize: 'var(--text-h1)',
            lineHeight: 'var(--leading-h1)',
            letterSpacing: 'var(--tracking-h1)',
            background: 'linear-gradient(135deg, #3B82F6 0%, #0EA5E9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {BRANDS_HERO.headlineAccent}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
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
          custom={4}
          className="flex items-center justify-center gap-4"
        >
          <GradientButton href="/contact" size="sm">Get in Touch</GradientButton>
        </motion.div>

      </div>
    </section>
  )
}
