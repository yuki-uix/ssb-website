'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Globe, Store, Map, PackageOpen, ShoppingCart, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { fadeUp } from '@/lib/animations'
import { BRAND_SERVICES, BRAND_PROTECTION_STATS } from '@/lib/constants'

interface Service {
  icon: LucideIcon
  title: string
  description: string
  featured?: boolean
}

// Icons and layout config are visual/component-level decisions.
// Title and description are sourced from BRAND_SERVICES in lib/constants.ts.
const CHANNEL_COVERAGE: Service[] = [
  { icon: Globe,        title: BRAND_SERVICES[0].title, description: BRAND_SERVICES[0].description, featured: true },
  { icon: Store,        title: BRAND_SERVICES[1].title, description: BRAND_SERVICES[1].description },
  { icon: Map,          title: BRAND_SERVICES[2].title, description: BRAND_SERVICES[2].description },
  { icon: ShoppingCart, title: BRAND_SERVICES[4].title, description: BRAND_SERVICES[4].description },
]

const BRAND_CONTROL: Service[] = [
  { icon: ShieldCheck,  title: BRAND_SERVICES[5].title, description: BRAND_SERVICES[5].description, featured: true },
  { icon: PackageOpen,  title: BRAND_SERVICES[3].title, description: BRAND_SERVICES[3].description },
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      key={service.title}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      custom={index}
      className="group relative flex flex-col gap-4 p-8"
      style={{
        background: hovered ? 'rgba(59,130,246,0.06)' : 'var(--background)',
        boxShadow: service.featured ? 'inset 0 2px 0 #3B82F6' : 'none',
        transition: 'background 200ms ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
  )
}

function GroupLabel({ label, index }: { label: string; index: number }) {
  return (
    <motion.p
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      custom={index}
      className="uppercase font-medium mb-4"
      style={{
        fontSize: 'var(--text-overline)',
        letterSpacing: 'var(--tracking-overline)',
        color: '#94A3B8',
      }}
    >
      {label}
    </motion.p>
  )
}

function ServiceBentoGrid({ services, startIndex, cols = 'lg:grid-cols-4' }: { services: Service[]; startIndex: number; cols?: string }) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 ${cols} gap-px overflow-hidden`}
      style={{
        background: 'rgba(255,255,255,0.08)',
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {services.map((service, i) => (
        <ServiceCard key={service.title} service={service} index={startIndex + i} />
      ))}
    </div>
  )
}

export default function ServicesGrid() {
  return (
    <section
      className="relative"
      style={{ borderTop: '1px solid rgba(59,130,246,0.12)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">

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

        {/* Group 1 — Channel Coverage */}
        <div className="mb-10">
          <GroupLabel label="Channel Coverage" index={1} />
          <ServiceBentoGrid services={CHANNEL_COVERAGE} startIndex={2} cols="lg:grid-cols-4" />
        </div>

        {/* Group 2 — Brand Control */}
        <div>
          <GroupLabel label="Brand Control" index={6} />
          {/* 4-col grid: 2 service cards (1/4 each) + 1 stats panel (2/4) */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.08)', gap: '1px', display: 'grid', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              style={{ gap: '1px' }}
            >
              {BRAND_CONTROL.map((service, i) => (
                <ServiceCard key={service.title} service={service} index={7 + i} />
              ))}

              {/* Right anchor — brand protection stats */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                custom={9}
                className="md:col-span-2 lg:col-span-2 flex flex-col justify-center gap-5 p-8"
                style={{ background: 'var(--background)' }}
              >
                <p
                  className="uppercase font-medium"
                  style={{
                    fontSize: 'var(--text-overline)',
                    letterSpacing: 'var(--tracking-overline)',
                    color: '#94A3B8',
                  }}
                >
                  Brand Protection — By The Numbers
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {BRAND_PROTECTION_STATS.map((stat) => (
                    <div key={stat.label}>
                      <p
                        className="font-bold leading-none mb-1"
                        style={{
                          fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                          color: '#FFFFFF',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {stat.value}
                      </p>
                      <p
                        style={{
                          fontSize: 'var(--text-overline)',
                          color: '#94A3B8',
                        }}
                      >
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
