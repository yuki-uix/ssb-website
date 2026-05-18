'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

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
            ✦ For Brands
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="font-bold mb-3"
          style={{
            fontSize: 'var(--text-h1)',
            lineHeight: 'var(--leading-h1)',
            letterSpacing: 'var(--tracking-h1)',
            color: '#FFFFFF',
          }}
        >
          Not a Reseller. Not a 3PL.
        </motion.h1>

        {/* Gradient sub-headline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.18}
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
          A Vertically Integrated Brand Operator.
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.26}
          className="mb-10 mx-auto"
          style={{
            fontSize: 'var(--text-body)',
            color: '#94A3B8',
            lineHeight: 'var(--leading-body)',
            maxWidth: '600px',
          }}
        >
          SSB combines the operational muscle of a national distributor with the digital
          intelligence of a modern e‑commerce operator. One partner. Every channel. Full
          accountability — from your dock to the consumer's doorstep, across the US and China.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.34}
          className="flex items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200"
            style={{ background: 'linear-gradient(135deg, #3B82F6, #0EA5E9)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.9'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
