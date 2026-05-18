'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HomeCTA() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ borderTop: '1px solid rgba(59,130,246,0.12)' }}
    >
      {/* Ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(59,130,246,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-32 flex flex-col items-center text-center">

        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="uppercase font-medium mb-5"
          style={{
            fontSize: 'var(--text-overline)',
            letterSpacing: 'var(--tracking-overline)',
            color: '#94A3B8',
          }}
        >
          Get Started
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="font-bold mb-5"
          style={{
            fontSize: 'var(--text-h1)',
            color: '#FFFFFF',
            maxWidth: '640px',
            lineHeight: 'var(--leading-h1)',
            letterSpacing: 'var(--tracking-h1)',
          }}
        >
          Ready to move products smarter?
        </motion.h2>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-10"
          style={{
            fontSize: 'var(--text-body)',
            color: '#CBD5E1',
            maxWidth: '480px',
            lineHeight: 'var(--leading-body)',
          }}
        >
          Tell us what you need — we'll map out the right channel strategy for you.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-semibold transition-all duration-200"
            style={{
              fontSize: 'var(--text-body-sm)',
              padding: '0.875rem 2.25rem',
              borderRadius: '0.875rem',
              background: 'linear-gradient(135deg, #3B82F6 0%, #0EA5E9 100%)',
              color: '#FFFFFF',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #2563EB 0%, #0284C7 100%)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #3B82F6 0%, #0EA5E9 100%)'
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
