'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HERO, AUDIENCE_CTAS } from '@/lib/constants'

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
      className="relative w-full max-w-[540px] rounded-2xl overflow-hidden"
      style={{
        background: '#0D1117',
        border: '1px solid rgba(59,130,246,0.2)',
        boxShadow: '0 0 60px rgba(59,130,246,0.07), 0 32px 80px rgba(0,0,0,0.5)',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-3.5"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
          <span className="text-xs font-semibold text-white tracking-wide">Shopping Agent</span>
        </div>
        <span
          className="text-[10px] px-2 py-0.5 rounded-full"
          style={{ background: 'rgba(59,130,246,0.15)', color: '#3B82F6' }}
        >
          5M+ SKUs
        </span>
      </div>

      {/* Search input */}
      <div className="px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-xl"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(59,130,246,0.25)' }}
        >
          <svg className="w-3.5 h-3.5 shrink-0" style={{ color: '#3B82F6' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-sm" style={{ color: '#94A3B8' }}>
            anti-aging skincare under $15 for B2B
          </span>
          <span
            className="ml-auto text-xs px-2 py-0.5 rounded shrink-0"
            style={{ background: 'linear-gradient(135deg,#3B82F6,#0EA5E9)', color: '#fff' }}
          >
            Search
          </span>
        </div>

        {/* Result count */}
        <p className="text-[11px] mt-2.5 ml-1" style={{ color: '#475569' }}>
          ✦ Showing <span style={{ color: '#3B82F6' }}>2,847 results</span> from 5M+ SKUs · Sorted by margin
        </p>
      </div>

      {/* Product results */}
      <div className="px-5 py-3 space-y-2.5">
        {PRODUCT_RESULTS.map((product) => (
          <div
            key={product.sku}
            className="flex items-center gap-3 p-3 rounded-xl transition-colors"
            style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.04)' }}
          >
            {/* Color block as product image placeholder */}
            <div
              className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center"
              style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.15)' }}
            >
              <div className="w-4 h-4 rounded" style={{ background: 'rgba(59,130,246,0.4)' }} />
            </div>

            {/* Product info */}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-white truncate">{product.name}</p>
              <p className="text-[10px] mt-0.5" style={{ color: '#475569' }}>
                {product.brand} · {product.sku}
              </p>
            </div>

            {/* Price + badge */}
            <div className="text-right shrink-0">
              <p className="text-sm font-bold text-white">{product.price}</p>
              <span
                className="text-[9px] px-1.5 py-0.5 rounded-full"
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
        className="mx-5 mb-5 mt-2 flex items-center justify-between px-4 py-3 rounded-xl"
        style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)' }}
      >
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
          <span className="text-xs" style={{ color: '#94A3B8' }}>
            Consolidated PO ready · <span className="text-white">3 suppliers</span>
          </span>
        </div>
        <span
          className="text-xs font-semibold"
          style={{ color: '#3B82F6' }}
        >
          Order Now →
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
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

// ─── HomeHero ─────────────────────────────────────────────────────────────────

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Blue orb — top right */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      {/* Cyan orb — center right */}
      <div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translateY(-50%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Text */}
          <div className="flex flex-col">

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
              <span className="text-gradient">Brand Distributor.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-base lg:text-lg leading-relaxed mb-10 max-w-xl"
              style={{ color: '#94A3B8' }}
            >
              {HERO.subheadline}
            </motion.p>

            {/* Audience CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#475569' }}>
                I am a —
              </p>
              <div className="grid grid-cols-2 gap-3">
                {AUDIENCE_CTAS.map((cta) => (
                  <Link
                    key={cta.href}
                    href={cta.href}
                    className="group flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                    style={{
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#CBD5E1',
                      background: 'rgba(255,255,255,0.03)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'
                      e.currentTarget.style.background = 'rgba(59,130,246,0.08)'
                      e.currentTarget.style.color = '#FFFFFF'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                      e.currentTarget.style.color = '#CBD5E1'
                    }}
                  >
                    {cta.label}
                    <span
                      className="text-[#3B82F6] transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Dashboard */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="hidden lg:flex justify-end"
          >
            <ShoppingAgentMockup />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
