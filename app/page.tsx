import HomeHero from '@/components/sections/home/HomeHero'
import MetricsBar from '@/components/sections/shared/MetricsBar'
import PillarsSection from '@/components/sections/shared/PillarsSection'
import HomeCTA from '@/components/sections/home/HomeCTA'

export default function HomePage() {
  return (
    <main style={{ background: 'var(--background)' }}>
      <HomeHero />
      <MetricsBar />
      <PillarsSection />
      <HomeCTA />
    </main>
  )
}
