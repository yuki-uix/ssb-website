'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

// ─── Mobile overlay ───────────────────────────────────────────────────────────

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname()
  const prefersReduced = useReducedMotion()

  const overlayVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
    exit:    { opacity: 0, y: prefersReduced ? 0 : -8, transition: { duration: 0.2 } },
  }

  const itemVariants = {
    hidden:  { opacity: 0, x: prefersReduced ? 0 : -12 },
    visible: (i: number) => ({
      opacity: 1, x: 0,
      transition: { duration: 0.22, delay: prefersReduced ? 0 : i * 0.06, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
    }),
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-40 flex flex-col lg:hidden"
          style={{
            background: 'rgba(10,12,16,0.97)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          {/* Top bar — logo + close */}
          <div className="h-16 flex items-center justify-between px-6"
            style={{ borderBottom: '1px solid rgba(59,130,246,0.12)' }}
          >
            <Link href="/" onClick={onClose}>
              <Image src="/logo.png" alt="Supersonic Supply" width={120} height={28}
                style={{ objectFit: 'contain', objectPosition: 'left' }} priority />
            </Link>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex items-center justify-center rounded-xl transition-colors duration-150"
              style={{ width: 44, height: 44, color: '#94A3B8', background: 'rgba(255,255,255,0.04)' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col px-6 pt-8 gap-1 flex-1">
            {NAV_LINKS.map((link, i) => {
              const isActive = pathname === link.href
              return (
                <motion.div key={link.href} custom={i} variants={itemVariants} initial="hidden" animate="visible">
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`flex items-center py-4 text-lg transition-colors duration-150 ${isActive ? 'font-semibold' : 'font-medium'}`}
                    style={{
                      color: isActive ? '#FFFFFF' : '#94A3B8',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      borderLeft: isActive ? '3px solid #3B82F6' : '3px solid transparent',
                      paddingLeft: isActive ? 11 : 13,
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            })}
          </nav>

          {/* CTA */}
          <motion.div
            custom={NAV_LINKS.length}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="px-6 pb-12"
          >
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-center w-full py-4 rounded-xl text-base font-medium transition-all duration-200"
              style={{
                border: '1px solid rgba(59,130,246,0.4)',
                color: '#93C5FD',
                background: 'rgba(59,130,246,0.1)',
              }}
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── NavLink (desktop) ────────────────────────────────────────────────────────

function NavLink({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      href={href}
      className={`px-4 py-2 text-sm transition-all duration-200 ${isActive ? 'font-semibold' : 'font-medium'}`}
      style={{
        color: isActive ? '#FFFFFF' : hovered ? '#E2E8F0' : '#94A3B8',
        background: 'transparent',
        border: 'none',
        borderBottom: isActive ? '2px solid #3B82F6' : '2px solid transparent',
        borderRadius: 0,
        paddingBottom: '4px',
        letterSpacing: isActive ? '-0.01em' : 'normal',
        transition: 'color 200ms ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </Link>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [ctaHovered, setCtaHovered] = useState(false)

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
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

          {/* Nav links — desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={pathname === link.href}
              />
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* CTA — desktop */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium"
              style={{
                border: `1px solid ${ctaHovered ? 'rgba(59,130,246,0.6)' : 'rgba(59,130,246,0.35)'}`,
                color: ctaHovered ? '#FFFFFF' : '#93C5FD',
                background: ctaHovered ? 'rgba(59,130,246,0.16)' : 'rgba(59,130,246,0.08)',
                transition: 'background 200ms ease, border-color 200ms ease, color 200ms ease',
              }}
              onMouseEnter={() => setCtaHovered(true)}
              onMouseLeave={() => setCtaHovered(false)}
            >
              Get in Touch
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="flex lg:hidden items-center justify-center rounded-xl transition-colors duration-150"
              style={{
                width: 44,
                height: 44,
                color: '#94A3B8',
                background: menuOpen ? 'rgba(59,130,246,0.1)' : 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
