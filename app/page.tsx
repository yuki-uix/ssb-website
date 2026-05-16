import HomeHero from '@/components/sections/HomeHero'
import MetricsBar from '@/components/sections/MetricsBar'
import PillarsSection from '@/components/sections/PillarsSection'

export default function HomePage() {
  return (
    <main style={{ background: 'var(--background)' }}>
      <HomeHero />

      {/* Metrics Bar — S2.3 */}
      <MetricsBar />

      {/* What Makes Us Different — S2.4 */}
      <PillarsSection />

      {/* Partner Ticker — S2.5 */}
      <section id="partners">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-[var(--text-secondary)]">Partner Ticker — coming soon</p>
        </div>
      </section>

      {/* CTA — S2.6 */}
      <section id="cta">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-[var(--text-secondary)]">CTA Section — coming soon</p>
        </div>
      </section>
    </main>
  )
}
