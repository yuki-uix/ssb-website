'use client'

import { MotionConfig } from 'framer-motion'

// ─── MotionProvider ───────────────────────────────────────────────────────────
// Wraps the app with Framer Motion's global config.
// reducedMotion="user" respects the OS-level "Reduce Motion" preference:
// when active, all motion.* transitions are instant (duration → 0, no transforms).
// Covers all existing animations + future ones automatically — no per-component changes needed.

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  )
}
