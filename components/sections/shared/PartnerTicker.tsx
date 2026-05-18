'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const CHANNEL_LOGOS: Record<string, string> = {
  'Amazon':       '/logos/amazon.svg',
  'Walmart':      '/logos/walmart.svg',
  'TikTok Shop':  '/logos/tiktok.svg',
  'eBay':         '/logos/ebay.svg',
  'Temu':         '/logos/temu.svg',
  'Shein':        '/logos/shein.svg',
  'JD.com':       '/logos/jd.svg',
  'Shopify DTC':  '/logos/shopify.svg',
  'Costco':       '/logos/costco.svg',
  "Sam's Club":   '/logos/samsclub.svg',
  'Chewy':        '/logos/chewy.svg',
  'Wayfair':      '/logos/wayfair.svg',
  'Overstock':    '/logos/overstock.svg',
  'Rakuten':      '/logos/rakuten.svg',
}

const CHANNEL_GROUPS = [
  {
    label: 'Core Marketplace',
    channels: ['Amazon', 'Walmart', 'eBay', 'Overstock', 'Rakuten'],
  },
  {
    label: 'Social & Emerging',
    channels: ['TikTok Shop', 'Temu', 'Shein'],
  },
  {
    label: 'Wholesale & Club',
    channels: ['Costco', "Sam's Club"],
  },
  {
    label: 'Specialty & DTC',
    channels: ['Chewy', 'Wayfair', 'Shopify DTC'],
  },
  {
    label: 'International',
    channels: ['JD.com'],
  },
] as const

function ChannelBadge({ channel, delay }: { channel: string; delay: number }) {
  const logo = CHANNEL_LOGOS[channel]
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.35,
        delay,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className="flex items-center gap-2.5"
      style={{
        padding: '0.5rem 1rem',
        borderRadius: '9999px',
        border: '1px solid rgba(59,130,246,0.2)',
        background: 'rgba(59,130,246,0.05)',
      }}
    >
      {logo && (
        <div className="shrink-0 flex items-center justify-center" style={{ width: 48, height: 20 }}>
          <Image
            src={logo}
            alt=""
            aria-hidden
            width={48}
            height={20}
            className="object-contain"
            style={{
              filter: 'brightness(0) invert(1)',
              opacity: 0.8,
              maxWidth: 48,
              maxHeight: 20,
              width: 'auto',
              height: 'auto',
            }}
          />
        </div>
      )}
      <span
        className="font-medium whitespace-nowrap"
        style={{ fontSize: 'var(--text-label)', color: '#CBD5E1', letterSpacing: '0.01em' }}
      >
        {channel}
      </span>
    </motion.div>
  )
}

export default function PartnerTicker() {
  let globalIndex = 0

  return (
    <section aria-label="Channels we operate" className="relative">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-24">

        {/* Section header — left-aligned, consistent with Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-14"
        >
          <p
            className="uppercase font-medium mb-3"
            style={{
              fontSize: 'var(--text-overline)',
              letterSpacing: 'var(--tracking-overline)',
              color: '#94A3B8',
            }}
          >
            Channels We Operate
          </p>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: 'var(--text-h2)', color: '#FFFFFF' }}
          >
            Every Major US Channel.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #93C5FD 0%, #38BDF8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              In-House.
            </span>
          </h2>
          <p style={{ fontSize: 'var(--text-body-sm)', color: '#94A3B8', maxWidth: '520px' }}>
            Not just marketplace coverage — every major channel type, operated by SSB's own team.
          </p>
        </motion.div>

        {/* Categorised channel groups */}
        <div className="flex flex-col gap-8">
          {CHANNEL_GROUPS.map((group) => (
            <div key={group.label} className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">

              {/* Category label — fixed width column */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: globalIndex * 0.04 }}
                className="uppercase font-medium shrink-0"
                style={{
                  fontSize: 'var(--text-overline)',
                  letterSpacing: 'var(--tracking-overline)',
                  color: '#94A3B8',
                  width: '160px',
                  paddingTop: '0.5rem',
                }}
              >
                {group.label}
              </motion.p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2.5">
                {group.channels.map((channel) => {
                  const delay = globalIndex++ * 0.04
                  return <ChannelBadge key={channel} channel={channel} delay={delay} />
                })}
              </div>

            </div>
          ))}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10"
          style={{ fontSize: 'var(--text-caption)', color: '#94A3B8' }}
        >
          + 14 wholesale distributors operated in parallel
        </motion.p>

      </div>
    </section>
  )
}
