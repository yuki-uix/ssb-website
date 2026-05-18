'use client'

import Image from 'next/image'
import Link from 'next/link'

const SOLUTIONS = [
  { label: 'For Brands',               href: '/for-brands' },
  { label: 'For Retailers',            href: '/for-retailers' },
  { label: 'For Distributors',         href: '/for-distributors' },
  { label: 'For International Buyers', href: '/for-international-buyers' },
]

const COMPANY = [
  { label: 'Technology', href: '/technology' },
  { label: 'Contact',    href: '/contact' },
]

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(59,130,246,0.12)',
        background: 'rgba(255,255,255,0.01)',
      }}
    >
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="shrink-0 w-fit">
              <Image
                src="/logo.png"
                alt="Supersonic Supply"
                width={130}
                height={30}
                style={{ objectFit: 'contain', objectPosition: 'left' }}
              />
            </Link>
            <p
              style={{
                fontSize: 'var(--text-body-sm)',
                color: '#94A3B8',
                lineHeight: 'var(--leading-body)',
                maxWidth: '280px',
              }}
            >
              A vertically integrated operator that owns the entire path from your dock to the consumer's doorstep.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <p
              className="uppercase font-medium mb-5"
              style={{
                fontSize: 'var(--text-overline)',
                letterSpacing: 'var(--tracking-overline)',
                color: '#94A3B8',
              }}
            >
              Solutions
            </p>
            <ul className="flex flex-col gap-3">
              {SOLUTIONS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-150"
                    style={{ fontSize: 'var(--text-label)', color: '#94A3B8' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#CBD5E1' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#94A3B8' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p
              className="uppercase font-medium mb-5"
              style={{
                fontSize: 'var(--text-overline)',
                letterSpacing: 'var(--tracking-overline)',
                color: '#94A3B8',
              }}
            >
              Company
            </p>
            <ul className="flex flex-col gap-3">
              {COMPANY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-150"
                    style={{ fontSize: 'var(--text-label)', color: '#94A3B8' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#CBD5E1' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#94A3B8' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="uppercase font-medium mb-5"
              style={{
                fontSize: 'var(--text-overline)',
                letterSpacing: 'var(--tracking-overline)',
                color: '#94A3B8',
              }}
            >
              Contact
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:ai@supersonicbrick.com"
                  className="transition-colors duration-150"
                  style={{ fontSize: 'var(--text-label)', color: '#94A3B8' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#60A5FA' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#94A3B8' }}
                >
                  ai@supersonicbrick.com
                </a>
              </li>
              <li
                style={{ fontSize: 'var(--text-label)', color: '#94A3B8' }}
              >
                WeChat: Haoruiiii
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright bar */}
      <div
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div
          className="max-w-7xl mx-auto px-6 py-5"
          style={{ fontSize: 'var(--text-caption)', color: '#64748B' }}
        >
          © 2026 Supersonic Brick LLC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
