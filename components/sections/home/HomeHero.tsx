'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HERO } from '@/lib/constants'
import { ease, floatingGlow } from '@/lib/animations'
import { GradientButton } from '@/components/ui/GradientButton'

// ─── Typewriter hook ──────────────────────────────────────────────────────────

const SEARCH_QUERIES = [
  'anti-aging skincare under $15',
  'retinol cream B2B · MOQ 24',
  'eye cream bulk · case pack 12',
  'facial moisturizer wholesale',
]

function useTypewriter(queries: string[], typingMs = 62, deletingMs = 32, pauseMs = 1800) {
  const [displayed, setDisplayed] = useState(queries[0])
  const [queryIdx, setQueryIdx] = useState(0)
  const [cardIdx, setCardIdx] = useState(0)
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing')

  useEffect(() => {
    const target = queries[queryIdx]

    if (phase === 'typing') {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), typingMs)
        return () => clearTimeout(t)
      }
      // fully typed — switch cards immediately (idempotent: closure value, not functional update)
      setCardIdx((queryIdx + 1) % queries.length)
      const t = setTimeout(() => setPhase('deleting'), pauseMs)
      return () => clearTimeout(t)
    }

    // deleting
    if (displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deletingMs)
      return () => clearTimeout(t)
    }
    // fully deleted — advance query text (idempotent)
    setQueryIdx((queryIdx + 1) % queries.length)
    setPhase('typing')
  }, [displayed, phase, queryIdx, queries, typingMs, deletingMs, pauseMs])

  return { text: displayed, cardIdx }
}

// ─── Shopping Agent Mockup ────────────────────────────────────────────────────

type Product = { name: string; brand: string; sku: string; price: string; badge: string; badgeColor: string }
type QueryResult = { count: string; products: Product[] }

const QUERY_RESULTS: QueryResult[] = [
  {
    count: '2,847',
    products: [
      { name: 'Neutrogena Rapid Wrinkle Repair Retinol', brand: 'Neutrogena', sku: 'NTG-RWR-1.7OZ', price: '$12.40', badge: 'Best Match', badgeColor: '#3B82F6' },
      { name: 'CeraVe Eye Repair Cream',                brand: 'CeraVe',     sku: 'CVE-ERC-0.5OZ', price: '$14.99', badge: 'In Stock',   badgeColor: '#10B981' },
      { name: 'RoC Retinol Correxion Line Serum',       brand: 'RoC',        sku: 'ROC-RCS-1OZ',   price: '$13.20', badge: 'Top Seller', badgeColor: '#8B5CF6' },
    ],
  },
  {
    count: '1,203',
    products: [
      { name: 'RoC Retinol Correxion Line Serum',       brand: 'RoC',        sku: 'ROC-RCS-1OZ',   price: '$13.20', badge: 'Best Match', badgeColor: '#3B82F6' },
      { name: 'Neutrogena Rapid Wrinkle Repair Retinol', brand: 'Neutrogena', sku: 'NTG-RWR-1.7OZ', price: '$12.40', badge: 'MOQ Met',    badgeColor: '#10B981' },
      { name: "L'Oréal Revitalift Retinol Serum",        brand: "L'Oréal",   sku: 'LOR-RVL-1OZ',   price: '$11.80', badge: 'New',        badgeColor: '#F59E0B' },
    ],
  },
  {
    count: '891',
    products: [
      { name: 'CeraVe Eye Repair Cream',          brand: 'CeraVe',     sku: 'CVE-ERC-0.5OZ', price: '$14.99', badge: 'Best Match', badgeColor: '#3B82F6' },
      { name: 'Neutrogena Rapid Eye Repair',       brand: 'Neutrogena', sku: 'NTG-RER-0.5OZ', price: '$13.50', badge: 'In Stock',   badgeColor: '#10B981' },
      { name: 'Olay Eyes Ultimate Eye Cream',      brand: 'Olay',       sku: 'OLY-EUE-0.5OZ', price: '$12.90', badge: 'Bulk Deal',  badgeColor: '#8B5CF6' },
    ],
  },
  {
    count: '3,412',
    products: [
      { name: 'CeraVe Moisturizing Cream',              brand: 'CeraVe',     sku: 'CVE-MC-16OZ',   price: '$9.80',  badge: 'Best Match', badgeColor: '#3B82F6' },
      { name: 'Neutrogena Hydro Boost Gel Cream',       brand: 'Neutrogena', sku: 'NTG-HBG-1.7OZ', price: '$11.20', badge: 'Top Seller', badgeColor: '#8B5CF6' },
      { name: 'Olay Regenerist Micro-Sculpting Cream',  brand: 'Olay',       sku: 'OLY-RMS-1.7OZ', price: '$14.50', badge: 'In Stock',   badgeColor: '#10B981' },
    ],
  },
]

function ShoppingAgentMockup() {
  const { text: query, cardIdx } = useTypewriter(SEARCH_QUERIES)
  const current = QUERY_RESULTS[cardIdx]

  return (
    <div
      className="relative w-full max-w-[480px] rounded-2xl overflow-hidden"
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
        <div className="flex items-center gap-2">
          <span
            className="text-[10px] px-2 py-0.5 rounded-full font-medium"
            style={{ background: 'rgba(59,130,246,0.15)', color: '#60A5FA' }}
          >
            5M+ SKUs
          </span>
          <span
            className="text-[10px] px-2 py-0.5 rounded-full font-medium"
            style={{ background: 'rgba(251,191,36,0.12)', color: '#FCD34D', border: '1px solid rgba(251,191,36,0.25)' }}
          >
            Concept Preview
          </span>
        </div>
      </div>

      {/* Search input */}
      <div className="px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <svg aria-hidden="true" className="w-3.5 h-3.5 shrink-0" style={{ color: '#60A5FA' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-sm" style={{ color: '#CBD5E1' }}>
            {query}
            <span
              className="inline-block w-px h-[14px] ml-0.5 align-middle"
              style={{
                background: '#60A5FA',
                animation: 'blink 1.1s step-start infinite',
              }}
            />
          </span>
        </div>
        <motion.p
          key={cardIdx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-[11px] mt-2.5 ml-1"
          style={{ color: '#94A3B8' }}
        >
          ✦ Showing <span style={{ color: '#60A5FA', fontWeight: 600 }}>{current.count} results</span> from 5M+ SKUs · Sorted by margin
        </motion.p>
      </div>

      {/* Product results — fade in new set when queryIdx changes */}
      <motion.div
        key={cardIdx}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="px-5 py-3 space-y-2"
      >
        {current.products.map((product, i) => (
          <div
            key={product.sku}
            className="flex items-center gap-3 p-3 rounded-xl"
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
      </motion.div>

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
        <span
          className="text-[10px] px-2 py-0.5 rounded-full font-medium"
          style={{ background: 'rgba(16,185,129,0.12)', color: '#10B981', border: '1px solid rgba(16,185,129,0.2)' }}
        >
          PO Ready
        </span>
      </div>

      {/* Powered by */}
      <div className="px-5 pb-4 flex items-center gap-1.5">
        <svg aria-hidden="true" className="w-3 h-3 shrink-0" style={{ color: '#64748B' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
    <section className="relative flex items-start overflow-hidden">
      {/* Background grid — subtle, left side only */}
      <div className="absolute inset-0 bg-grid opacity-30" />


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-16 md:pt-28 md:pb-24">

        {/* Hero row — Text + Shopping Agent */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-14 items-start">

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
                  letterSpacing: '0.06em',
                }}
              >
                <span style={{ color: '#60A5FA' }}>✦</span>{' '}{HERO.badge}
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


      </div>
    </section>
  )
}
