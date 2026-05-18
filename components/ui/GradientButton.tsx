'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// ─── GradientButton ───────────────────────────────────────────────────────────
// Gradient CTA link button with standard hover (darken + lift).
// size="md" (default) — for page CTA sections, larger padding.
// size="sm"           — for hero inline CTAs, tighter padding.

interface GradientButtonProps {
  href: string
  children: React.ReactNode
  size?: 'sm' | 'md'
  className?: string
}

export function GradientButton({ href, children, size = 'md', className = '' }: GradientButtonProps) {
  const isMd = size === 'md'

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 font-semibold text-white transition-all duration-200 ${className}`.trim()}
      style={{
        fontSize: isMd ? 'var(--text-body-sm)' : '0.875rem',
        padding: isMd ? '0.875rem 2.25rem' : '0.75rem 1.5rem',
        borderRadius: isMd ? '0.875rem' : '0.75rem',
        background: 'linear-gradient(135deg, #3B82F6 0%, #0EA5E9 100%)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'linear-gradient(135deg, #2563EB 0%, #0284C7 100%)'
        e.currentTarget.style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'linear-gradient(135deg, #3B82F6 0%, #0EA5E9 100%)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {children}
      <ArrowRight className="w-4 h-4" />
    </Link>
  )
}
