// ─── Shared animation primitives ─────────────────────────────────────────────
// Import from here instead of re-defining in each component.

export const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

/**
 * Standard fade-up with stagger support.
 * Use `custom={index}` on the motion element to stagger children.
 * y: 20px — default for section cards, hero elements.
 */
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease },
  }),
}

/**
 * Subtle fade-up for dense data rows (metrics bars).
 * y: 16px — tighter travel distance for compact sections.
 */
export const fadeUpSubtle = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease },
  }),
}
