import HomeHero from '@/components/sections/HomeHero'
import MetricsBar from '@/components/sections/MetricsBar'
import PillarsSection from '@/components/sections/PillarsSection'
import PartnerTicker from '@/components/sections/PartnerTicker'
import HomeCTA from '@/components/sections/HomeCTA'

export default function HomePage() {
  return (
    <main style={{ background: 'var(--background)' }}>
      <HomeHero />
      <MetricsBar />
      <PillarsSection />
      <PartnerTicker />
      <HomeCTA />
    </main>
  )
}
