'use client'

import { PageCTA } from '@/components/sections/shared/PageCTA'
import { HERO } from '@/lib/constants'

export default function HomeCTA() {
  return (
    <PageCTA
      overline="Get Started"
      headline="Ready to move products smarter?"
      body="Tell us what you need — we'll map out the right channel strategy for you."
      buttonLabel={HERO.cta.primary}
      href="/contact"
    />
  )
}
