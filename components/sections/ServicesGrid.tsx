'use client'

import { motion } from 'framer-motion'
import { Globe, Store, Map, PackageOpen, ShoppingCart, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  description: string
  featured?: boolean
  colSpan?: number
}

const SERVICES: Service[] = [
  {
    icon: Globe,
    title: 'US Full-Channel E-commerce',
    description:
      'Amazon 1P/3P, Walmart, TikTok Shop, DTC, eBay, Temu, Shein, and 14+ wholesale channels — fully operated in-house, never outsourced.',
    featured: true,
    colSpan: 2,
  },
  {
    icon: Store,
    title: 'Store-in-Store Retail',
    description:
      'We actively place your products into physical retail locations across the US — expanding your reach beyond digital.',
  },
  {
    icon: Map,
    title: 'China Market via JD.com',
    description:
      'Reach 700M+ consumers on JD.com with no China entity required. SSB handles sourcing, logistics, and operations end-to-end.',
  },
  {
    icon: PackageOpen,
    title: 'Silent Liquidation',
    description:
      'Clear excess inventory quietly and efficiently — without disrupting your pricing integrity on any channel.',
  },
  {
    icon: ShoppingCart,
    title: 'Supermarket & Duty-Free',
    description:
      'We supply US supermarket chains and international duty-free retail channels — distribution paths most brands can\'t access alone.',
  },
  {
    icon: ShieldCheck,
    title: 'Brand Protection',
    description:
      'Real-time MAP enforcement, grey market seller detection, and Amazon Transparency anti-counterfeiting — always on, across every channel.',
    featured: true,
    colSpan: 2,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

export default function ServicesGrid() {
  return (
    <section
      className="relative"
      style={{ borderTop: '1px solid rgba(59,130,246,0.12)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          custom={0}
          className="mb-16"
        >
          <p
            className="uppercase font-medium mb-4"
            style={{
              fontSize: 'var(--text-overline)',
              letterSpacing: 'var(--tracking-overline)',
              color: '#94A3B8',
            }}
          >
            What We Do
          </p>
          <h2
            className="font-bold"
            style={{
              fontSize: 'var(--text-h2)',
              color: '#FFFFFF',
              lineHeight: 'var(--leading-h2)',
              letterSpacing: 'var(--tracking-h2)',
            }}
          >
            Six Ways We Work<br />For Your Brand.
          </h2>
        </motion.div>

        {/* Bento grid — gap-px, parent bg acts as grid lines */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={i * 0.07}
              className={`group relative flex flex-col gap-4 p-8 transition-colors duration-200${
                service.colSpan === 2 ? ' lg:col-span-2' : ''
              }`}
              style={{
                background: 'var(--background)',
                boxShadow: service.featured ? 'inset 0 2px 0 #3B82F6' : 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(59,130,246,0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--background)'
              }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: 'rgba(59,130,246,0.1)',
                  border: '1px solid rgba(59,130,246,0.2)',
                }}
              >
                <service.icon
                  className="w-5 h-5"
                  style={{ color: '#60A5FA' }}
                  strokeWidth={1.5}
                />
              </div>

              {/* Title */}
              <h3
                className="font-semibold"
                style={{
                  fontSize: 'var(--text-h3)',
                  color: '#FFFFFF',
                  lineHeight: '1.3',
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 'var(--text-body-sm)',
                  color: '#CBD5E1',
                  lineHeight: 'var(--leading-body)',
                }}
              >
                {service.description}
              </p>

              {/* Bottom accent on hover */}
              <div
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                style={{ background: '#3B82F6' }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
