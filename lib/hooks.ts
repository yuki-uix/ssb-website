import { useRef, type RefObject } from 'react'
import { useMotionValue, useAnimationFrame, useReducedMotion, type MotionValue } from 'framer-motion'

interface BounceConfig {
  /** Diameter of the orb in px */
  orbSize: number
  /** Initial position as fraction of container (0–1) */
  initialX: number
  initialY: number
  /** Speed in px/s */
  speedX: number
  speedY: number
}

/**
 * Bouncing orb inside a container.
 * Returns motion values x/y to spread onto a motion.div via style={{ x, y }}.
 * Automatically pauses when the user prefers reduced motion.
 */
export function useBouncingOrb(
  containerRef: RefObject<HTMLElement | null>,
  config: BounceConfig,
): { x: MotionValue<number>; y: MotionValue<number> } {
  const prefersReduced = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const vel = useRef({ x: config.speedX, y: config.speedY })
  const initialized = useRef(false)

  useAnimationFrame((_, delta) => {
    if (prefersReduced) return
    const el = containerRef.current
    if (!el) return

    const { width, height } = el.getBoundingClientRect()

    if (!initialized.current) {
      x.set(config.initialX * (width - config.orbSize))
      y.set(config.initialY * (height - config.orbSize))
      initialized.current = true
      return
    }

    // Cap delta to avoid jumps after tab switch / repaint gaps
    const dt = Math.min(delta, 50) / 1000

    let nx = x.get() + vel.current.x * dt
    let ny = y.get() + vel.current.y * dt

    if (nx <= 0) { nx = 0; vel.current.x = Math.abs(vel.current.x) }
    else if (nx >= width - config.orbSize) { nx = width - config.orbSize; vel.current.x = -Math.abs(vel.current.x) }
    if (ny <= 0) { ny = 0; vel.current.y = Math.abs(vel.current.y) }
    else if (ny >= height - config.orbSize) { ny = height - config.orbSize; vel.current.y = -Math.abs(vel.current.y) }

    x.set(nx)
    y.set(ny)
  })

  return { x, y }
}
