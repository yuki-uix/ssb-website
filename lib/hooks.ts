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

    // Clamp upper bounds to 0 minimum — prevents negative travel space when
    // orb is larger than container, which causes every-frame velocity flipping (flicker)
    const upperX = Math.max(0, width - config.orbSize)
    const upperY = Math.max(0, height - config.orbSize)

    let nx = x.get() + (upperX > 0 ? vel.current.x * dt : 0)
    let ny = y.get() + (upperY > 0 ? vel.current.y * dt : 0)

    if (upperX > 0) {
      if (nx <= 0) { nx = 0; vel.current.x = Math.abs(vel.current.x) }
      else if (nx >= upperX) { nx = upperX; vel.current.x = -Math.abs(vel.current.x) }
    }
    if (upperY > 0) {
      if (ny <= 0) { ny = 0; vel.current.y = Math.abs(vel.current.y) }
      else if (ny >= upperY) { ny = upperY; vel.current.y = -Math.abs(vel.current.y) }
    }

    x.set(nx)
    y.set(ny)
  })

  return { x, y }
}
