'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowBigRight } from 'lucide-react'
import { HERO, AUDIENCE_CTAS } from '@/lib/constants'
import { ease, floatingGlow } from '@/lib/animations'
import { GradientButton } from '@/components/ui/GradientButton'

// ─── Shopping Agent Mockup ────────────────────────────────────────────────────

const PRODUCT_RESULTS = [
  {
    name: 'Neutrogena Rapid Wrinkle Repair Retinol',
    brand: 'Neutrogena',
    sku: 'NTG-RWR-1.7OZ',
    price: '$12.40',
    moq: 'MOQ 24',
    badge: 'Best Match',
    badgeColor: '#3B82F6',
  },
  {
    name: 'CeraVe Eye Repair Cream',
    brand: 'CeraVe',
    sku: 'CVE-ERC-0.5OZ',
    price: '$14.99',
    moq: 'MOQ 12',
    badge: 'In Stock',
    badgeColor: '#10B981',
  },
  {
    name: 'RoC Retinol Correxion Line Serum',
    brand: 'RoC',
    sku: 'ROC-RCS-1OZ',
    price: '$13.20',
    moq: 'MOQ 24',
    badge: 'Top Seller',
    badgeColor: '#8B5CF6',
  },
]

function ShoppingAgentMockup() {
  return (
    <div
      className="relative w-full max-w-[520px] rounded-2xl overflow-hidden"
      style={{
        background: '#111827',
        border: '1px solid rgba(59,130,246,0.35)',
        boxShadow: '0 0 0 1px rgba(59,130,246,0.08), 0 24px 60px rgba(0,0,0,0.6), 0 0 50px rgba(59,130,246,0.1)',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-3.5"
        style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
          <span className="text-xs font-semibold tracking-wide text-white">Shopping Agent</span>
        </div>
        <span
          className="text-[10px] px-2 py-0.5 rounded-full font-medium"
          style={{ background: 'rgba(59,130,246,0.15)', color: '#60A5FA' }}
        >
          5M+ SKUs
        </span>
      </div>

      {/* Search input */}
      <div className="px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(59,130,246,0.3)' }}
        >
          <svg className="w-3.5 h-3.5 shrink-0" style={{ color: '#60A5FA' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-sm" style={{ color: '#CBD5E1' }}>
            anti-aging skincare under $15 for B2B
          </span>
          <span
            className="ml-auto text-xs px-2.5 py-1 rounded-lg font-medium shrink-0"
            style={{ background: 'linear-gradient(135deg,#3B82F6,#0EA5E9)', color: '#fff' }}
          >
            Search
          </span>
        </div>
        <p className="text-[11px] mt-2.5 ml-1" style={{ color: '#94A3B8' }}>
          ✦ Showing <span style={{ color: '#60A5FA', fontWeight: 600 }}>2,847 results</span> from 5M+ SKUs · Sorted by margin
        </p>
      </div>

      {/* Product results — mobile: first card only, md+: all three */}
      <div className="px-5 py-3 space-y-2">
        {PRODUCT_RESULTS.map((product, i) => (
          <div
            key={product.sku}
            className={`flex items-center gap-3 p-3 rounded-xl${i > 0 ? ' hidden md:flex' : ''}`}
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div
              className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center"
              style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.18)' }}
            >
              <div className="w-4 h-4 rounded" style={{ background: 'rgba(59,130,246,0.45)' }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold truncate text-white">{product.name}</p>
              <p className="text-[10px] mt-0.5 font-mono" style={{ color: '#94A3B8' }}>
                {product.brand} · {product.sku}
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-sm font-bold text-white">{product.price}</p>
              <span
                className="text-[9px] px-1.5 py-0.5 rounded-full font-medium"
                style={{ background: `${product.badgeColor}20`, color: product.badgeColor }}
              >
                {product.badge}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer — PO ready */}
      <div
        className="mx-5 mb-4 mt-2 flex items-center justify-between px-4 py-3 rounded-xl"
        style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)' }}
      >
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
          <span className="text-xs" style={{ color: '#94A3B8' }}>
            <span className="hidden md:inline">Consolidated PO ready · <span className="text-white font-semibold">3 suppliers</span></span>
            <span className="md:hidden">PO ready · <span className="text-white font-semibold">Best Match selected</span></span>
          </span>
        </div>
        <span className="text-xs font-semibold" style={{ color: '#60A5FA' }}>
          Order Now →
        </span>
      </div>

      {/* Powered by */}
      <div className="px-5 pb-4 flex items-center gap-1.5">
        <svg className="w-3 h-3 shrink-0" style={{ color: '#64748B' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span className="text-[10px]" style={{ color: '#94A3B8' }}>
          Powered by SSB AI · Real-time catalog sync across 5M+ SKUs
        </span>
      </div>
    </div>
  )
}

// ─── Animations ───────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease },
  }),
}

// ─── HomeHero ─────────────────────────────────────────────────────────────────

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-start md:items-center overflow-hidden">
      {/* Background grid — subtle, left side only */}
      <div className="absolute inset-0 bg-grid opacity-30" />


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-16 md:py-32">

        {/* Hero row — Text + Shopping Agent */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">

          {/* Left — Text + primary CTA */}
          <div className="relative flex flex-col">
            {/* CTA glow — sits behind the button area */}
            <div
              className="absolute pointer-events-none"
              style={{
                bottom: '-20px',
                left: '-40px',
                width: '320px',
                height: '200px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(59,130,246,0.13) 0%, transparent 70%)',
                filter: 'blur(32px)',
              }}
            />

            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 self-start mb-6"
            >
              <span
                className="text-xs font-medium px-3 py-1.5 rounded-full"
                style={{
                  border: '1px solid rgba(59,130,246,0.4)',
                  color: '#94A3B8',
                  background: 'rgba(59,130,246,0.08)',
                }}
              >
                ✦ {HERO.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-6"
            >
              A New Kind of
              <br />
              <span className="text-gradient-animate">Brand Distributor.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-base lg:text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: '#CBD5E1' }}
            >
              {HERO.subheadline}
            </motion.p>

            {/* Primary CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="flex items-center gap-4"
            >
              <GradientButton href="/contact" size="sm">{HERO.cta.primary}</GradientButton>
              <Link
                href="/technology"
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: '#94A3B8' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#CBD5E1' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#94A3B8' }}
              >
                Explore Platform →
              </Link>
            </motion.div>
          </div>

          {/* Right — Shopping Agent */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="relative hidden md:flex justify-center md:justify-end"
          >
            {/* Cyan orb — top-right of card, floats slowly (desktop only) */}
            <motion.div
              className="absolute pointer-events-none hidden md:block"
              style={{
                top: '-60px',
                right: '-40px',
                width: '420px',
                height: '420px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(14,165,233,0.22) 0%, rgba(59,130,246,0.1) 45%, transparent 70%)',
                filter: 'blur(36px)',
              }}
              {...floatingGlow}
            />
            {/* Grid overlay — follows card position (desktop only) */}
            <div
              className="absolute pointer-events-none hidden md:block"
              style={{
                top: '-80px',
                right: '-60px',
                width: '560px',
                height: '560px',
                backgroundImage: `
                  linear-gradient(rgba(59,130,246,0.25) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59,130,246,0.25) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(ellipse 70% 65% at 65% 35%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 55%, transparent 72%)',
                WebkitMaskImage: 'radial-gradient(ellipse 70% 65% at 65% 35%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 55%, transparent 72%)',
              }}
            />
            <ShoppingAgentMockup />
          </motion.div>
        </div>

        {/* Audience routing strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="mt-16 pt-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#94A3B8' }}>
            Who do we serve —
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {AUDIENCE_CTAS.map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                className="group flex items-center justify-between px-5 py-4 rounded-xl transition-all duration-200"
                style={{
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderLeft: '2px solid rgba(59,130,246,0.4)',
                  background: 'rgba(255,255,255,0.02)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(59,130,246,0.7)'
                  e.currentTarget.style.borderLeft = '2px solid #3B82F6'
                  e.currentTarget.style.background = 'rgba(59,130,246,0.14)'
                  e.currentTarget.style.boxShadow = '0 0 0 1px rgba(59,130,246,0.15), inset 0 0 20px rgba(59,130,246,0.06)'
                  const label = e.currentTarget.querySelector('span:first-child') as HTMLElement | null
                  if (label) label.style.color = '#FFFFFF'
                  const circle = e.currentTarget.querySelector('span:last-child') as HTMLElement | null
                  if (circle) circle.style.background = 'rgba(59,130,246,0.45)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(255,255,255,0.07)'
                  e.currentTarget.style.borderLeft = '2px solid rgba(59,130,246,0.4)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                  e.currentTarget.style.boxShadow = 'none'
                  const label = e.currentTarget.querySelector('span:first-child') as HTMLElement | null
                  if (label) label.style.color = '#CBD5E1'
                  const circle = e.currentTarget.querySelector('span:last-child') as HTMLElement | null
                  if (circle) circle.style.background = 'rgba(59,130,246,0.14)'
                }}
              >
                <span
                  className="text-sm font-semibold"
                  style={{ color: '#CBD5E1' }}
                >
                  {cta.label}
                </span>
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 group-hover:translate-x-0.5"
                  style={{ background: 'rgba(59,130,246,0.14)' }}
                >
                  <ArrowBigRight
                    className="w-4 h-4"
                    fill="currentColor"
                    strokeWidth={0}
                    style={{ color: '#3B82F6' }}
                  />
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
