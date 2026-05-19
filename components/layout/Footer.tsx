'use client'

import Link from 'next/link'
import { useState } from 'react'

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

const labelStyle = {
  fontSize: 'var(--text-overline)',
  letterSpacing: 'var(--tracking-overline)',
  color: '#94A3B8',
}
const linkStyle = { fontSize: 'var(--text-label)', color: '#CBD5E1' }

export default function Footer() {
  const [copied, setCopied] = useState(false)

  function copyWeChat() {
    navigator.clipboard.writeText('Haoruiiii')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(59,130,246,0.12)',
        background: 'rgba(255,255,255,0.01)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

          {/* Solutions — horizontal pill row */}
          <div className="flex flex-col gap-3">
            <p className="uppercase font-medium" style={labelStyle}>
              Solutions
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {SOLUTIONS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors duration-150"
                  style={linkStyle}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#FFFFFF' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#CBD5E1' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <p className="uppercase font-medium" style={labelStyle}>
              Company
            </p>
            <div className="flex gap-6">
              {COMPANY.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors duration-150"
                  style={linkStyle}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#FFFFFF' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#CBD5E1' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="uppercase font-medium" style={labelStyle}>
              Contact
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:ai@supersonicbrick.com"
                className="transition-colors duration-150"
                style={linkStyle}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#60A5FA' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#CBD5E1' }}
              >
                ai@supersonicbrick.com
              </a>
              <button
                onClick={copyWeChat}
                className="transition-colors duration-150 text-left"
                style={{ ...linkStyle, cursor: 'copy' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#FFFFFF' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#CBD5E1' }}
              >
                {copied ? 'Copied!' : 'WeChat: Haoruiiii'}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div
          className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          style={{ fontSize: 'var(--text-caption)', color: '#64748B' }}
        >
          <span>© 2026 Supersonic Brick LLC. All rights reserved.</span>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="transition-colors duration-150"
              style={{ color: '#64748B' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#94A3B8' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#64748B' }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors duration-150"
              style={{ color: '#64748B' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#94A3B8' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#64748B' }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
