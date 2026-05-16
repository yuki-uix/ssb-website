'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(10, 12, 16, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(59,130,246,0.18)',
        boxShadow: '0 1px 0 0 rgba(59,130,246,0.08), 0 4px 24px rgba(0,0,0,0.3)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="Supersonic Supply"
            width={140}
            height={32}
            style={{ objectFit: 'contain', objectPosition: 'left' }}
            priority
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  color: isActive ? '#FFFFFF' : '#94A3B8',
                  background: 'transparent',
                  border: 'none',
                  boxShadow: isActive ? 'inset 0 -2px 0 #3B82F6' : 'none',
                  borderRadius: 0,
                  paddingBottom: '6px',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#E2E8F0'
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#94A3B8'
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
          style={{
            border: '1px solid rgba(59,130,246,0.35)',
            color: '#93C5FD',
            background: 'rgba(59,130,246,0.08)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(59,130,246,0.16)'
            e.currentTarget.style.borderColor = 'rgba(59,130,246,0.6)'
            e.currentTarget.style.color = '#FFFFFF'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(59,130,246,0.08)'
            e.currentTarget.style.borderColor = 'rgba(59,130,246,0.35)'
            e.currentTarget.style.color = '#93C5FD'
          }}
        >
          Get in Touch
        </Link>

      </div>
    </header>
  )
}
